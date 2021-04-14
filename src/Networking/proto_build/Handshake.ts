/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UiOption } from "./UiOptions";

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
  encode(
    message: Handshake,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.options) {
      UiOption.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handshake {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandshake } as Handshake;
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

  fromJSON(object: any): Handshake {
    const message = { ...baseHandshake } as Handshake;
    message.options = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(UiOption.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Handshake): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.options) {
      obj.options = message.options.map((e) =>
        e ? UiOption.toJSON(e) : undefined
      );
    } else {
      obj.options = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Handshake>): Handshake {
    const message = { ...baseHandshake } as Handshake;
    message.options = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(UiOption.fromPartial(e));
      }
    }
    return message;
  },
};

const baseHandshakeAccumulation: object = {};

export const HandshakeAccumulation = {
  encode(
    message: HandshakeAccumulation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.handshakes) {
      Handshake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): HandshakeAccumulation {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandshakeAccumulation } as HandshakeAccumulation;
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

  fromJSON(object: any): HandshakeAccumulation {
    const message = { ...baseHandshakeAccumulation } as HandshakeAccumulation;
    message.handshakes = [];
    if (object.handshakes !== undefined && object.handshakes !== null) {
      for (const e of object.handshakes) {
        message.handshakes.push(Handshake.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: HandshakeAccumulation): unknown {
    const obj: any = {};
    if (message.handshakes) {
      obj.handshakes = message.handshakes.map((e) =>
        e ? Handshake.toJSON(e) : undefined
      );
    } else {
      obj.handshakes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<HandshakeAccumulation>
  ): HandshakeAccumulation {
    const message = { ...baseHandshakeAccumulation } as HandshakeAccumulation;
    message.handshakes = [];
    if (object.handshakes !== undefined && object.handshakes !== null) {
      for (const e of object.handshakes) {
        message.handshakes.push(Handshake.fromPartial(e));
      }
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
