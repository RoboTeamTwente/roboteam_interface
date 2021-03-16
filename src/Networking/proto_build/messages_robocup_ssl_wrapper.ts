/* eslint-disable */
import { SSLDetectionFrame } from "./messages_robocup_ssl_detection";
import { SSLGeometryData } from "./messages_robocup_ssl_geometry";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface SSLWrapperPacket {
  detection: SSLDetectionFrame | undefined;
  geometry: SSLGeometryData | undefined;
}

const baseSSLWrapperPacket: object = {};

export const SSLWrapperPacket = {
  encode(
    message: SSLWrapperPacket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLWrapperPacket {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSLWrapperPacket } as SSLWrapperPacket;
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

  fromJSON(object: any): SSLWrapperPacket {
    const message = { ...baseSSLWrapperPacket } as SSLWrapperPacket;
    if (object.detection !== undefined && object.detection !== null) {
      message.detection = SSLDetectionFrame.fromJSON(object.detection);
    } else {
      message.detection = undefined;
    }
    if (object.geometry !== undefined && object.geometry !== null) {
      message.geometry = SSLGeometryData.fromJSON(object.geometry);
    } else {
      message.geometry = undefined;
    }
    return message;
  },

  toJSON(message: SSLWrapperPacket): unknown {
    const obj: any = {};
    message.detection !== undefined &&
      (obj.detection = message.detection
        ? SSLDetectionFrame.toJSON(message.detection)
        : undefined);
    message.geometry !== undefined &&
      (obj.geometry = message.geometry
        ? SSLGeometryData.toJSON(message.geometry)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SSLWrapperPacket>): SSLWrapperPacket {
    const message = { ...baseSSLWrapperPacket } as SSLWrapperPacket;
    if (object.detection !== undefined && object.detection !== null) {
      message.detection = SSLDetectionFrame.fromPartial(object.detection);
    } else {
      message.detection = undefined;
    }
    if (object.geometry !== undefined && object.geometry !== null) {
      message.geometry = SSLGeometryData.fromPartial(object.geometry);
    } else {
      message.geometry = undefined;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
