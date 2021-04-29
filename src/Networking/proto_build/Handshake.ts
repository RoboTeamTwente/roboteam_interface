/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { UiOptionDeclarations, UiValues } from "./UiOptions";

export const protobufPackage = "proto";

/** A message which contains either a list of declarations or a list of values for a single module. */
export interface Handshake {
  moduleName: string;
  declarations: UiOptionDeclarations | undefined;
  values: UiValues | undefined;
}

const baseHandshake: object = { moduleName: "" };

export const Handshake = {
  encode(
    message: Handshake,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.declarations !== undefined) {
      UiOptionDeclarations.encode(
        message.declarations,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.values !== undefined) {
      UiValues.encode(message.values, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Handshake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandshake } as Handshake;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.declarations = UiOptionDeclarations.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.values = UiValues.decode(reader, reader.uint32());
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
    if (object.moduleName !== undefined && object.moduleName !== null) {
      message.moduleName = String(object.moduleName);
    } else {
      message.moduleName = "";
    }
    if (object.declarations !== undefined && object.declarations !== null) {
      message.declarations = UiOptionDeclarations.fromJSON(object.declarations);
    } else {
      message.declarations = undefined;
    }
    if (object.values !== undefined && object.values !== null) {
      message.values = UiValues.fromJSON(object.values);
    } else {
      message.values = undefined;
    }
    return message;
  },

  toJSON(message: Handshake): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.declarations !== undefined &&
      (obj.declarations = message.declarations
        ? UiOptionDeclarations.toJSON(message.declarations)
        : undefined);
    message.values !== undefined &&
      (obj.values = message.values
        ? UiValues.toJSON(message.values)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Handshake>): Handshake {
    const message = { ...baseHandshake } as Handshake;
    if (object.moduleName !== undefined && object.moduleName !== null) {
      message.moduleName = object.moduleName;
    } else {
      message.moduleName = "";
    }
    if (object.declarations !== undefined && object.declarations !== null) {
      message.declarations = UiOptionDeclarations.fromPartial(
        object.declarations
      );
    } else {
      message.declarations = undefined;
    }
    if (object.values !== undefined && object.values !== null) {
      message.values = UiValues.fromPartial(object.values);
    } else {
      message.values = undefined;
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
