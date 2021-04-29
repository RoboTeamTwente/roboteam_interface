/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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
  encode(
    message: RobotParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RobotParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRobotParameters } as RobotParameters;
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

  fromJSON(object: any): RobotParameters {
    const message = { ...baseRobotParameters } as RobotParameters;
    if (object.radius !== undefined && object.radius !== null) {
      message.radius = Number(object.radius);
    } else {
      message.radius = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.frontWidth !== undefined && object.frontWidth !== null) {
      message.frontWidth = Number(object.frontWidth);
    } else {
      message.frontWidth = 0;
    }
    if (object.dribblerWidth !== undefined && object.dribblerWidth !== null) {
      message.dribblerWidth = Number(object.dribblerWidth);
    } else {
      message.dribblerWidth = 0;
    }
    if (object.angleOffset !== undefined && object.angleOffset !== null) {
      message.angleOffset = Number(object.angleOffset);
    } else {
      message.angleOffset = 0;
    }
    return message;
  },

  toJSON(message: RobotParameters): unknown {
    const obj: any = {};
    message.radius !== undefined && (obj.radius = message.radius);
    message.height !== undefined && (obj.height = message.height);
    message.frontWidth !== undefined && (obj.frontWidth = message.frontWidth);
    message.dribblerWidth !== undefined &&
      (obj.dribblerWidth = message.dribblerWidth);
    message.angleOffset !== undefined &&
      (obj.angleOffset = message.angleOffset);
    return obj;
  },

  fromPartial(object: DeepPartial<RobotParameters>): RobotParameters {
    const message = { ...baseRobotParameters } as RobotParameters;
    if (object.radius !== undefined && object.radius !== null) {
      message.radius = object.radius;
    } else {
      message.radius = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.frontWidth !== undefined && object.frontWidth !== null) {
      message.frontWidth = object.frontWidth;
    } else {
      message.frontWidth = 0;
    }
    if (object.dribblerWidth !== undefined && object.dribblerWidth !== null) {
      message.dribblerWidth = object.dribblerWidth;
    } else {
      message.dribblerWidth = 0;
    }
    if (object.angleOffset !== undefined && object.angleOffset !== null) {
      message.angleOffset = object.angleOffset;
    } else {
      message.angleOffset = 0;
    }
    return message;
  },
};

const baseTeamParameters: object = { didChange: false };

export const TeamParameters = {
  encode(
    message: TeamParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TeamParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTeamParameters } as TeamParameters;
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

  fromJSON(object: any): TeamParameters {
    const message = { ...baseTeamParameters } as TeamParameters;
    if (object.didChange !== undefined && object.didChange !== null) {
      message.didChange = Boolean(object.didChange);
    } else {
      message.didChange = false;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = RobotParameters.fromJSON(object.parameters);
    } else {
      message.parameters = undefined;
    }
    return message;
  },

  toJSON(message: TeamParameters): unknown {
    const obj: any = {};
    message.didChange !== undefined && (obj.didChange = message.didChange);
    message.parameters !== undefined &&
      (obj.parameters = message.parameters
        ? RobotParameters.toJSON(message.parameters)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TeamParameters>): TeamParameters {
    const message = { ...baseTeamParameters } as TeamParameters;
    if (object.didChange !== undefined && object.didChange !== null) {
      message.didChange = object.didChange;
    } else {
      message.didChange = false;
    }
    if (object.parameters !== undefined && object.parameters !== null) {
      message.parameters = RobotParameters.fromPartial(object.parameters);
    } else {
      message.parameters = undefined;
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
