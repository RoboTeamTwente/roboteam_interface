/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SslDetectionframe } from "./messages_robocup_ssl_detection";
import { SslGeometrydata } from "./messages_robocup_ssl_geometry";

export const protobufPackage = "proto";

export interface SslWrapperpacket {
  detection: SslDetectionframe | undefined;
  geometry: SslGeometrydata | undefined;
}

const baseSslWrapperpacket: object = {};

export const SslWrapperpacket = {
  encode(
    message: SslWrapperpacket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.detection !== undefined) {
      SslDetectionframe.encode(
        message.detection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.geometry !== undefined) {
      SslGeometrydata.encode(
        message.geometry,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SslWrapperpacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSslWrapperpacket } as SslWrapperpacket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.detection = SslDetectionframe.decode(reader, reader.uint32());
          break;
        case 2:
          message.geometry = SslGeometrydata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SslWrapperpacket {
    const message = { ...baseSslWrapperpacket } as SslWrapperpacket;
    if (object.detection !== undefined && object.detection !== null) {
      message.detection = SslDetectionframe.fromJSON(object.detection);
    } else {
      message.detection = undefined;
    }
    if (object.geometry !== undefined && object.geometry !== null) {
      message.geometry = SslGeometrydata.fromJSON(object.geometry);
    } else {
      message.geometry = undefined;
    }
    return message;
  },

  toJSON(message: SslWrapperpacket): unknown {
    const obj: any = {};
    message.detection !== undefined &&
      (obj.detection = message.detection
        ? SslDetectionframe.toJSON(message.detection)
        : undefined);
    message.geometry !== undefined &&
      (obj.geometry = message.geometry
        ? SslGeometrydata.toJSON(message.geometry)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SslWrapperpacket>): SslWrapperpacket {
    const message = { ...baseSslWrapperpacket } as SslWrapperpacket;
    if (object.detection !== undefined && object.detection !== null) {
      message.detection = SslDetectionframe.fromPartial(object.detection);
    } else {
      message.detection = undefined;
    }
    if (object.geometry !== undefined && object.geometry !== null) {
      message.geometry = SslGeometrydata.fromPartial(object.geometry);
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
