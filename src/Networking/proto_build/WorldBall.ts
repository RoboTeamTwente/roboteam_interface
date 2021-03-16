/* eslint-disable */
import { Vector2f } from "./Vector2f";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface WorldBall {
  area: number;
  pos: Vector2f | undefined;
  z: number;
  vel: Vector2f | undefined;
  zVel: number;
  visible: boolean;
}

const baseWorldBall: object = { area: 0, z: 0, zVel: 0, visible: false };

export const WorldBall = {
  encode(message: WorldBall, writer: Writer = Writer.create()): Writer {
    if (message.area !== 0) {
      writer.uint32(8).uint32(message.area);
    }
    if (message.pos !== undefined) {
      Vector2f.encode(message.pos, writer.uint32(18).fork()).ldelim();
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    if (message.vel !== undefined) {
      Vector2f.encode(message.vel, writer.uint32(34).fork()).ldelim();
    }
    if (message.zVel !== 0) {
      writer.uint32(45).float(message.zVel);
    }
    if (message.visible === true) {
      writer.uint32(48).bool(message.visible);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WorldBall {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseWorldBall) as WorldBall;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.area = reader.uint32();
          break;
        case 2:
          message.pos = Vector2f.decode(reader, reader.uint32());
          break;
        case 3:
          message.z = reader.float();
          break;
        case 4:
          message.vel = Vector2f.decode(reader, reader.uint32());
          break;
        case 5:
          message.zVel = reader.float();
          break;
        case 6:
          message.visible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();
