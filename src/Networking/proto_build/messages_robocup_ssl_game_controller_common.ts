/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

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

/** Division denotes the current division, which influences some rules */
export enum Division {
  DIV_UNKNOWN = 0,
  DIV_A = 1,
  DIV_B = 2,
  UNRECOGNIZED = -1,
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
  encode(message: RobotId, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.team !== 0) {
      writer.uint32(16).int32(message.team);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RobotId {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseRobotId) as RobotId;
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
