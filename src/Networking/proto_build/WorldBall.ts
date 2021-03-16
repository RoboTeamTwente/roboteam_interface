/* eslint-disable */
import { Vector2f } from "./Vector2f";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface WorldBall {
  area: number;
  pos: Vector2f | undefined;
  z: number;
  vel: Vector2f | undefined;
  zVel: number;
  visible: boolean;
}

const baseWorldBall: object = { area: 0, z: 0, zVel: 0, visible: false };

export const WorldBall = {
  encode(
    message: WorldBall,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.area !== 0) {
      writer.uint32(8).uint32(message.area);
    }
    if (message.pos !== undefined) {
      Vector2f.encode(message.pos, writer.uint32(18).fork()).ldelim();
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    if (message.vel !== undefined) {
      Vector2f.encode(message.vel, writer.uint32(34).fork()).ldelim();
    }
    if (message.zVel !== 0) {
      writer.uint32(45).float(message.zVel);
    }
    if (message.visible === true) {
      writer.uint32(48).bool(message.visible);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WorldBall {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorldBall } as WorldBall;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.area = reader.uint32();
          break;
        case 2:
          message.pos = Vector2f.decode(reader, reader.uint32());
          break;
        case 3:
          message.z = reader.float();
          break;
        case 4:
          message.vel = Vector2f.decode(reader, reader.uint32());
          break;
        case 5:
          message.zVel = reader.float();
          break;
        case 6:
          message.visible = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WorldBall {
    const message = { ...baseWorldBall } as WorldBall;
    if (object.area !== undefined && object.area !== null) {
      message.area = Number(object.area);
    } else {
      message.area = 0;
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = Vector2f.fromJSON(object.pos);
    } else {
      message.pos = undefined;
    }
    if (object.z !== undefined && object.z !== null) {
      message.z = Number(object.z);
    } else {
      message.z = 0;
    }
    if (object.vel !== undefined && object.vel !== null) {
      message.vel = Vector2f.fromJSON(object.vel);
    } else {
      message.vel = undefined;
    }
    if (object.zVel !== undefined && object.zVel !== null) {
      message.zVel = Number(object.zVel);
    } else {
      message.zVel = 0;
    }
    if (object.visible !== undefined && object.visible !== null) {
      message.visible = Boolean(object.visible);
    } else {
      message.visible = false;
    }
    return message;
  },

  toJSON(message: WorldBall): unknown {
    const obj: any = {};
    message.area !== undefined && (obj.area = message.area);
    message.pos !== undefined &&
      (obj.pos = message.pos ? Vector2f.toJSON(message.pos) : undefined);
    message.z !== undefined && (obj.z = message.z);
    message.vel !== undefined &&
      (obj.vel = message.vel ? Vector2f.toJSON(message.vel) : undefined);
    message.zVel !== undefined && (obj.zVel = message.zVel);
    message.visible !== undefined && (obj.visible = message.visible);
    return obj;
  },

  fromPartial(object: DeepPartial<WorldBall>): WorldBall {
    const message = { ...baseWorldBall } as WorldBall;
    if (object.area !== undefined && object.area !== null) {
      message.area = object.area;
    } else {
      message.area = 0;
    }
    if (object.pos !== undefined && object.pos !== null) {
      message.pos = Vector2f.fromPartial(object.pos);
    } else {
      message.pos = undefined;
    }
    if (object.z !== undefined && object.z !== null) {
      message.z = object.z;
    } else {
      message.z = 0;
    }
    if (object.vel !== undefined && object.vel !== null) {
      message.vel = Vector2f.fromPartial(object.vel);
    } else {
      message.vel = undefined;
    }
    if (object.zVel !== undefined && object.zVel !== null) {
      message.zVel = object.zVel;
    } else {
      message.zVel = 0;
    }
    if (object.visible !== undefined && object.visible !== null) {
      message.visible = object.visible;
    } else {
      message.visible = false;
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
