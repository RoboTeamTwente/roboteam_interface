/* eslint-disable */
import { SSLDetectionFrame } from "./messages_robocup_ssl_detection";
import { SSLGeometryData } from "./messages_robocup_ssl_geometry";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface SSLWrapperPacket {
  detection: SSLDetectionFrame | undefined;
  geometry: SSLGeometryData | undefined;
}

const baseSSLWrapperPacket: object = {};

export const SSLWrapperPacket = {
  encode(message: SSLWrapperPacket, writer: Writer = Writer.create()): Writer {
    if (message.detection !== undefined) {
      SSLDetectionFrame.encode(
        message.detection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.geometry !== undefined) {
      SSLGeometryData.encode(
        message.geometry,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLWrapperPacket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLWrapperPacket
    ) as SSLWrapperPacket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.detection = SSLDetectionFrame.decode(reader, reader.uint32());
          break;
        case 2:
          message.geometry = SSLGeometryData.decode(reader, reader.uint32());
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
