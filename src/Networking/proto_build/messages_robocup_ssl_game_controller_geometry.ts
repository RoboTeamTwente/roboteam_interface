/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

/** A vector with two dimensions */
export interface Vector2 {
  x: number;
  y: number;
}

/** A vector with three dimensions */
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

const baseVector2: object = { x: 0, y: 0 };

export const Vector2 = {
  encode(message: Vector2, writer: Writer = Writer.create()): Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Vector2 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseVector2) as Vector2;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseVector3: object = { x: 0, y: 0, z: 0 };

export const Vector3 = {
  encode(message: Vector3, writer: Writer = Writer.create()): Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Vector3 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseVector3) as Vector3;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
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
