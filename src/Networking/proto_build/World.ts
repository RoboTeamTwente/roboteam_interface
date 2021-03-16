/* eslint-disable */
import Long from "long";
import { WorldBall } from "./WorldBall";
import { WorldRobot } from "./WorldRobot";
import _m0 from "protobufjs/minimal";

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
  encode(message: World, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): World {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWorld } as World;
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

  fromJSON(object: any): World {
    const message = { ...baseWorld } as World;
    message.yellow = [];
    message.blue = [];
    if (object.time !== undefined && object.time !== null) {
      message.time = Long.fromString(object.time);
    } else {
      message.time = Long.UZERO;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.ball !== undefined && object.ball !== null) {
      message.ball = WorldBall.fromJSON(object.ball);
    } else {
      message.ball = undefined;
    }
    if (object.yellow !== undefined && object.yellow !== null) {
      for (const e of object.yellow) {
        message.yellow.push(WorldRobot.fromJSON(e));
      }
    }
    if (object.blue !== undefined && object.blue !== null) {
      for (const e of object.blue) {
        message.blue.push(WorldRobot.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: World): unknown {
    const obj: any = {};
    message.time !== undefined &&
      (obj.time = (message.time || Long.UZERO).toString());
    message.id !== undefined && (obj.id = message.id);
    message.ball !== undefined &&
      (obj.ball = message.ball ? WorldBall.toJSON(message.ball) : undefined);
    if (message.yellow) {
      obj.yellow = message.yellow.map((e) =>
        e ? WorldRobot.toJSON(e) : undefined
      );
    } else {
      obj.yellow = [];
    }
    if (message.blue) {
      obj.blue = message.blue.map((e) =>
        e ? WorldRobot.toJSON(e) : undefined
      );
    } else {
      obj.blue = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<World>): World {
    const message = { ...baseWorld } as World;
    message.yellow = [];
    message.blue = [];
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time as Long;
    } else {
      message.time = Long.UZERO;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.ball !== undefined && object.ball !== null) {
      message.ball = WorldBall.fromPartial(object.ball);
    } else {
      message.ball = undefined;
    }
    if (object.yellow !== undefined && object.yellow !== null) {
      for (const e of object.yellow) {
        message.yellow.push(WorldRobot.fromPartial(e));
      }
    }
    if (object.blue !== undefined && object.blue !== null) {
      for (const e of object.blue) {
        message.blue.push(WorldRobot.fromPartial(e));
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
