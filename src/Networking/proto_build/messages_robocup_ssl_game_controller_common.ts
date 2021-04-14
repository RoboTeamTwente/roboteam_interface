/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "proto";

/** Team is either blue or yellow */
export enum Team {
  /** UNKNOWN - team not set */
  UNKNOWN = 0,
  /** YELLOW - yellow team */
  YELLOW = 1,
  /** BLUE - blue team */
  BLUE = 2,
  UNRECOGNIZED = -1,
}

export function teamFromJSON(object: any): Team {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Team.UNKNOWN;
    case 1:
    case "YELLOW":
      return Team.YELLOW;
    case 2:
    case "BLUE":
      return Team.BLUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Team.UNRECOGNIZED;
  }
}

export function teamToJSON(object: Team): string {
  switch (object) {
    case Team.UNKNOWN:
      return "UNKNOWN";
    case Team.YELLOW:
      return "YELLOW";
    case Team.BLUE:
      return "BLUE";
    default:
      return "UNKNOWN";
  }
}

/** Division denotes the current division, which influences some rules */
export enum Division {
  DIV_UNKNOWN = 0,
  DIV_A = 1,
  DIV_B = 2,
  UNRECOGNIZED = -1,
}

export function divisionFromJSON(object: any): Division {
  switch (object) {
    case 0:
    case "DIV_UNKNOWN":
      return Division.DIV_UNKNOWN;
    case 1:
    case "DIV_A":
      return Division.DIV_A;
    case 2:
    case "DIV_B":
      return Division.DIV_B;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Division.UNRECOGNIZED;
  }
}

export function divisionToJSON(object: Division): string {
  switch (object) {
    case Division.DIV_UNKNOWN:
      return "DIV_UNKNOWN";
    case Division.DIV_A:
      return "DIV_A";
    case Division.DIV_B:
      return "DIV_B";
    default:
      return "UNKNOWN";
  }
}

/** RobotId is the combination of a team and a robot id */
export interface RobotId {
  /** the robot number */
  id: number;
  /** the team that the robot belongs to */
  team: Team;
}

const baseRobotId: object = { id: 0, team: 0 };

export const RobotId = {
  encode(
    message: RobotId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.team !== 0) {
      writer.uint32(16).int32(message.team);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RobotId {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRobotId } as RobotId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.team = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RobotId {
    const message = { ...baseRobotId } as RobotId;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.team !== undefined && object.team !== null) {
      message.team = teamFromJSON(object.team);
    } else {
      message.team = 0;
    }
    return message;
  },

  toJSON(message: RobotId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.team !== undefined && (obj.team = teamToJSON(message.team));
    return obj;
  },

  fromPartial(object: DeepPartial<RobotId>): RobotId {
    const message = { ...baseRobotId } as RobotId;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.team !== undefined && object.team !== null) {
      message.team = object.team;
    } else {
      message.team = 0;
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
