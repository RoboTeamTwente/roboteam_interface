/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface RobotParameters {
  radius: number;
  height: number;
  frontWidth: number;
  dribblerWidth: number;
  angleOffset: number;
}

export interface TeamParameters {
  didChange: boolean;
  parameters: RobotParameters | undefined;
}

const baseRobotParameters: object = {
  radius: 0,
  height: 0,
  frontWidth: 0,
  dribblerWidth: 0,
  angleOffset: 0,
};

export const RobotParameters = {
  encode(message: RobotParameters, writer: Writer = Writer.create()): Writer {
    if (message.radius !== 0) {
      writer.uint32(13).float(message.radius);
    }
    if (message.height !== 0) {
      writer.uint32(21).float(message.height);
    }
    if (message.frontWidth !== 0) {
      writer.uint32(29).float(message.frontWidth);
    }
    if (message.dribblerWidth !== 0) {
      writer.uint32(37).float(message.dribblerWidth);
    }
    if (message.angleOffset !== 0) {
      writer.uint32(45).float(message.angleOffset);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RobotParameters {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseRobotParameters
    ) as RobotParameters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.radius = reader.float();
          break;
        case 2:
          message.height = reader.float();
          break;
        case 3:
          message.frontWidth = reader.float();
          break;
        case 4:
          message.dribblerWidth = reader.float();
          break;
        case 5:
          message.angleOffset = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseTeamParameters: object = { didChange: false };

export const TeamParameters = {
  encode(message: TeamParameters, writer: Writer = Writer.create()): Writer {
    if (message.didChange === true) {
      writer.uint32(8).bool(message.didChange);
    }
    if (message.parameters !== undefined) {
      RobotParameters.encode(
        message.parameters,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TeamParameters {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseTeamParameters
    ) as TeamParameters;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didChange = reader.bool();
          break;
        case 2:
          message.parameters = RobotParameters.decode(reader, reader.uint32());
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
