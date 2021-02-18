/* eslint-disable */
import { Vector2f } from "./Vector2f";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface WorldRobot {
  id: number;
  pos: Vector2f | undefined;
  angle: number;
  vel: Vector2f | undefined;
  w: number;
}

const baseWorldRobot: object = { id: 0, angle: 0, w: 0 };

export const WorldRobot = {
  encode(message: WorldRobot, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.pos !== undefined) {
      Vector2f.encode(message.pos, writer.uint32(18).fork()).ldelim();
    }
    if (message.angle !== 0) {
      writer.uint32(29).float(message.angle);
    }
    if (message.vel !== undefined) {
      Vector2f.encode(message.vel, writer.uint32(34).fork()).ldelim();
    }
    if (message.w !== 0) {
      writer.uint32(45).float(message.w);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WorldRobot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseWorldRobot) as WorldRobot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.pos = Vector2f.decode(reader, reader.uint32());
          break;
        case 3:
          message.angle = reader.float();
          break;
        case 4:
          message.vel = Vector2f.decode(reader, reader.uint32());
          break;
        case 5:
          message.w = reader.float();
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
