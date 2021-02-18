/* eslint-disable */
import * as Long from "long";
import { WorldBall } from "./WorldBall";
import { WorldRobot } from "./WorldRobot";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface World {
  time: Long;
  id: number;
  ball: WorldBall | undefined;
  yellow: WorldRobot[];
  blue: WorldRobot[];
}

const baseWorld: object = { time: Long.UZERO, id: 0 };

export const World = {
  encode(message: World, writer: Writer = Writer.create()): Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).uint64(message.time);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.ball !== undefined) {
      WorldBall.encode(message.ball, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.yellow) {
      WorldRobot.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.blue) {
      WorldRobot.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): World {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseWorld) as World;
    message.yellow = [];
    message.blue = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.ball = WorldBall.decode(reader, reader.uint32());
          break;
        case 4:
          message.yellow.push(WorldRobot.decode(reader, reader.uint32()));
          break;
        case 5:
          message.blue.push(WorldRobot.decode(reader, reader.uint32()));
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
