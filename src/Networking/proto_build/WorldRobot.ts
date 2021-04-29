/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Vector2f } from "./Vector2f";

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
  encode(
    message: WorldRobot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): WorldRobot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorldRobot } as WorldRobot;
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

  fromJSON(object: any): WorldRobot {
    const message = { ...baseWorldRobot } as WorldRobot;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = Vector2f.fromJSON(object.pos);
    } else {
      message.pos = undefined;
    }
    if (object.angle !== undefined && object.angle !== null) {
      message.angle = Number(object.angle);
    } else {
      message.angle = 0;
    }
    if (object.vel !== undefined && object.vel !== null) {
      message.vel = Vector2f.fromJSON(object.vel);
    } else {
      message.vel = undefined;
    }
    if (object.w !== undefined && object.w !== null) {
      message.w = Number(object.w);
    } else {
      message.w = 0;
    }
    return message;
  },

  toJSON(message: WorldRobot): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.pos !== undefined &&
      (obj.pos = message.pos ? Vector2f.toJSON(message.pos) : undefined);
    message.angle !== undefined && (obj.angle = message.angle);
    message.vel !== undefined &&
      (obj.vel = message.vel ? Vector2f.toJSON(message.vel) : undefined);
    message.w !== undefined && (obj.w = message.w);
    return obj;
  },

  fromPartial(object: DeepPartial<WorldRobot>): WorldRobot {
    const message = { ...baseWorldRobot } as WorldRobot;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = Vector2f.fromPartial(object.pos);
    } else {
      message.pos = undefined;
    }
    if (object.angle !== undefined && object.angle !== null) {
      message.angle = object.angle;
    } else {
      message.angle = 0;
    }
    if (object.vel !== undefined && object.vel !== null) {
      message.vel = Vector2f.fromPartial(object.vel);
    } else {
      message.vel = undefined;
    }
    if (object.w !== undefined && object.w !== null) {
      message.w = object.w;
    } else {
      message.w = 0;
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
