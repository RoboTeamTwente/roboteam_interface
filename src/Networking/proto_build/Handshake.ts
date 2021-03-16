/* eslint-disable */
import { UiOption } from "./UiOptions";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface Handshake {
  name: string;
  options: UiOption[];
}

export interface HandshakeAccumulation {
  handshakes: Handshake[];
}

const baseHandshake: object = { name: "" };

export const Handshake = {
  encode(message: Handshake, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.options) {
      UiOption.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Handshake {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseHandshake) as Handshake;
    message.options = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.options.push(UiOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseHandshakeAccumulation: object = {};

export const HandshakeAccumulation = {
  encode(
    message: HandshakeAccumulation,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.handshakes) {
      Handshake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): HandshakeAccumulation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseHandshakeAccumulation
    ) as HandshakeAccumulation;
    message.handshakes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handshakes.push(Handshake.decode(reader, reader.uint32()));
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
