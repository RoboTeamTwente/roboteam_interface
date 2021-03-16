/* eslint-disable */
import { World } from "./World";
import { TeamParameters } from "./RobotParameters";
import { SSLGeometryData } from "./messages_robocup_ssl_geometry";
import { SSLReferee } from "./messages_robocup_ssl_referee";
import { SSLWrapperPacket } from "./messages_robocup_ssl_wrapper";
import { UiSettings } from "./UiOptions";
import { Handshake } from "./Handshake";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface State {
  lastSeenWorld: World | undefined;
  commandExtrapolatedWorld: World | undefined;
  ballCameraWorld: World | undefined;
  blueRobotParameters: TeamParameters | undefined;
  yellowRobotParameters: TeamParameters | undefined;
  /** TODO: later change to a custom field type */
  field: SSLGeometryData | undefined;
  /** TODO: later change to a custom referee type */
  referee: SSLReferee | undefined;
  processedVisionPackets: SSLWrapperPacket[];
  processedRefereePackets: SSLReferee[];
}

export interface SystemState {
  state: State | undefined;
  uiSettings: UiSettings | undefined;
}

export interface HandshakeState {
  state: State | undefined;
}

export interface ModuleState {
  systemState: SystemState | undefined;
  handshakes: Handshake[];
}

const baseState: object = {};

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastSeenWorld !== undefined) {
      World.encode(message.lastSeenWorld, writer.uint32(10).fork()).ldelim();
    }
    if (message.commandExtrapolatedWorld !== undefined) {
      World.encode(
        message.commandExtrapolatedWorld,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.ballCameraWorld !== undefined) {
      World.encode(message.ballCameraWorld, writer.uint32(26).fork()).ldelim();
    }
    if (message.blueRobotParameters !== undefined) {
      TeamParameters.encode(
        message.blueRobotParameters,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.yellowRobotParameters !== undefined) {
      TeamParameters.encode(
        message.yellowRobotParameters,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.field !== undefined) {
      SSLGeometryData.encode(message.field, writer.uint32(50).fork()).ldelim();
    }
    if (message.referee !== undefined) {
      SSLReferee.encode(message.referee, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.processedVisionPackets) {
      SSLWrapperPacket.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.processedRefereePackets) {
      SSLReferee.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseState } as State;
    message.processedVisionPackets = [];
    message.processedRefereePackets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastSeenWorld = World.decode(reader, reader.uint32());
          break;
        case 2:
          message.commandExtrapolatedWorld = World.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.ballCameraWorld = World.decode(reader, reader.uint32());
          break;
        case 4:
          message.blueRobotParameters = TeamParameters.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.yellowRobotParameters = TeamParameters.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.field = SSLGeometryData.decode(reader, reader.uint32());
          break;
        case 7:
          message.referee = SSLReferee.decode(reader, reader.uint32());
          break;
        case 10:
          message.processedVisionPackets.push(
            SSLWrapperPacket.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.processedRefereePackets.push(
            SSLReferee.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): State {
    const message = { ...baseState } as State;
    message.processedVisionPackets = [];
    message.processedRefereePackets = [];
    if (object.lastSeenWorld !== undefined && object.lastSeenWorld !== null) {
      message.lastSeenWorld = World.fromJSON(object.lastSeenWorld);
    } else {
      message.lastSeenWorld = undefined;
    }
    if (
      object.commandExtrapolatedWorld !== undefined &&
      object.commandExtrapolatedWorld !== null
    ) {
      message.commandExtrapolatedWorld = World.fromJSON(
        object.commandExtrapolatedWorld
      );
    } else {
      message.commandExtrapolatedWorld = undefined;
    }
    if (
      object.ballCameraWorld !== undefined &&
      object.ballCameraWorld !== null
    ) {
      message.ballCameraWorld = World.fromJSON(object.ballCameraWorld);
    } else {
      message.ballCameraWorld = undefined;
    }
    if (
      object.blueRobotParameters !== undefined &&
      object.blueRobotParameters !== null
    ) {
      message.blueRobotParameters = TeamParameters.fromJSON(
        object.blueRobotParameters
      );
    } else {
      message.blueRobotParameters = undefined;
    }
    if (
      object.yellowRobotParameters !== undefined &&
      object.yellowRobotParameters !== null
    ) {
      message.yellowRobotParameters = TeamParameters.fromJSON(
        object.yellowRobotParameters
      );
    } else {
      message.yellowRobotParameters = undefined;
    }
    if (object.field !== undefined && object.field !== null) {
      message.field = SSLGeometryData.fromJSON(object.field);
    } else {
      message.field = undefined;
    }
    if (object.referee !== undefined && object.referee !== null) {
      message.referee = SSLReferee.fromJSON(object.referee);
    } else {
      message.referee = undefined;
    }
    if (
      object.processedVisionPackets !== undefined &&
      object.processedVisionPackets !== null
    ) {
      for (const e of object.processedVisionPackets) {
        message.processedVisionPackets.push(SSLWrapperPacket.fromJSON(e));
      }
    }
    if (
      object.processedRefereePackets !== undefined &&
      object.processedRefereePackets !== null
    ) {
      for (const e of object.processedRefereePackets) {
        message.processedRefereePackets.push(SSLReferee.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    message.lastSeenWorld !== undefined &&
      (obj.lastSeenWorld = message.lastSeenWorld
        ? World.toJSON(message.lastSeenWorld)
        : undefined);
    message.commandExtrapolatedWorld !== undefined &&
      (obj.commandExtrapolatedWorld = message.commandExtrapolatedWorld
        ? World.toJSON(message.commandExtrapolatedWorld)
        : undefined);
    message.ballCameraWorld !== undefined &&
      (obj.ballCameraWorld = message.ballCameraWorld
        ? World.toJSON(message.ballCameraWorld)
        : undefined);
    message.blueRobotParameters !== undefined &&
      (obj.blueRobotParameters = message.blueRobotParameters
        ? TeamParameters.toJSON(message.blueRobotParameters)
        : undefined);
    message.yellowRobotParameters !== undefined &&
      (obj.yellowRobotParameters = message.yellowRobotParameters
        ? TeamParameters.toJSON(message.yellowRobotParameters)
        : undefined);
    message.field !== undefined &&
      (obj.field = message.field
        ? SSLGeometryData.toJSON(message.field)
        : undefined);
    message.referee !== undefined &&
      (obj.referee = message.referee
        ? SSLReferee.toJSON(message.referee)
        : undefined);
    if (message.processedVisionPackets) {
      obj.processedVisionPackets = message.processedVisionPackets.map((e) =>
        e ? SSLWrapperPacket.toJSON(e) : undefined
      );
    } else {
      obj.processedVisionPackets = [];
    }
    if (message.processedRefereePackets) {
      obj.processedRefereePackets = message.processedRefereePackets.map((e) =>
        e ? SSLReferee.toJSON(e) : undefined
      );
    } else {
      obj.processedRefereePackets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<State>): State {
    const message = { ...baseState } as State;
    message.processedVisionPackets = [];
    message.processedRefereePackets = [];
    if (object.lastSeenWorld !== undefined && object.lastSeenWorld !== null) {
      message.lastSeenWorld = World.fromPartial(object.lastSeenWorld);
    } else {
      message.lastSeenWorld = undefined;
    }
    if (
      object.commandExtrapolatedWorld !== undefined &&
      object.commandExtrapolatedWorld !== null
    ) {
      message.commandExtrapolatedWorld = World.fromPartial(
        object.commandExtrapolatedWorld
      );
    } else {
      message.commandExtrapolatedWorld = undefined;
    }
    if (
      object.ballCameraWorld !== undefined &&
      object.ballCameraWorld !== null
    ) {
      message.ballCameraWorld = World.fromPartial(object.ballCameraWorld);
    } else {
      message.ballCameraWorld = undefined;
    }
    if (
      object.blueRobotParameters !== undefined &&
      object.blueRobotParameters !== null
    ) {
      message.blueRobotParameters = TeamParameters.fromPartial(
        object.blueRobotParameters
      );
    } else {
      message.blueRobotParameters = undefined;
    }
    if (
      object.yellowRobotParameters !== undefined &&
      object.yellowRobotParameters !== null
    ) {
      message.yellowRobotParameters = TeamParameters.fromPartial(
        object.yellowRobotParameters
      );
    } else {
      message.yellowRobotParameters = undefined;
    }
    if (object.field !== undefined && object.field !== null) {
      message.field = SSLGeometryData.fromPartial(object.field);
    } else {
      message.field = undefined;
    }
    if (object.referee !== undefined && object.referee !== null) {
      message.referee = SSLReferee.fromPartial(object.referee);
    } else {
      message.referee = undefined;
    }
    if (
      object.processedVisionPackets !== undefined &&
      object.processedVisionPackets !== null
    ) {
      for (const e of object.processedVisionPackets) {
        message.processedVisionPackets.push(SSLWrapperPacket.fromPartial(e));
      }
    }
    if (
      object.processedRefereePackets !== undefined &&
      object.processedRefereePackets !== null
    ) {
      for (const e of object.processedRefereePackets) {
        message.processedRefereePackets.push(SSLReferee.fromPartial(e));
      }
    }
    return message;
  },
};

const baseSystemState: object = {};

export const SystemState = {
  encode(
    message: SystemState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.uiSettings !== undefined) {
      UiSettings.encode(message.uiSettings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemState {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSystemState } as SystemState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = State.decode(reader, reader.uint32());
          break;
        case 2:
          message.uiSettings = UiSettings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SystemState {
    const message = { ...baseSystemState } as SystemState;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromJSON(object.state);
    } else {
      message.state = undefined;
    }
    if (object.uiSettings !== undefined && object.uiSettings !== null) {
      message.uiSettings = UiSettings.fromJSON(object.uiSettings);
    } else {
      message.uiSettings = undefined;
    }
    return message;
  },

  toJSON(message: SystemState): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = message.state ? State.toJSON(message.state) : undefined);
    message.uiSettings !== undefined &&
      (obj.uiSettings = message.uiSettings
        ? UiSettings.toJSON(message.uiSettings)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SystemState>): SystemState {
    const message = { ...baseSystemState } as SystemState;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    } else {
      message.state = undefined;
    }
    if (object.uiSettings !== undefined && object.uiSettings !== null) {
      message.uiSettings = UiSettings.fromPartial(object.uiSettings);
    } else {
      message.uiSettings = undefined;
    }
    return message;
  },
};

const baseHandshakeState: object = {};

export const HandshakeState = {
  encode(
    message: HandshakeState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HandshakeState {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHandshakeState } as HandshakeState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = State.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HandshakeState {
    const message = { ...baseHandshakeState } as HandshakeState;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromJSON(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },

  toJSON(message: HandshakeState): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<HandshakeState>): HandshakeState {
    const message = { ...baseHandshakeState } as HandshakeState;
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },
};

const baseModuleState: object = {};

export const ModuleState = {
  encode(
    message: ModuleState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.systemState !== undefined) {
      SystemState.encode(
        message.systemState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.handshakes) {
      Handshake.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleState {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseModuleState } as ModuleState;
    message.handshakes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.systemState = SystemState.decode(reader, reader.uint32());
          break;
        case 2:
          message.handshakes.push(Handshake.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ModuleState {
    const message = { ...baseModuleState } as ModuleState;
    message.handshakes = [];
    if (object.systemState !== undefined && object.systemState !== null) {
      message.systemState = SystemState.fromJSON(object.systemState);
    } else {
      message.systemState = undefined;
    }
    if (object.handshakes !== undefined && object.handshakes !== null) {
      for (const e of object.handshakes) {
        message.handshakes.push(Handshake.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ModuleState): unknown {
    const obj: any = {};
    message.systemState !== undefined &&
      (obj.systemState = message.systemState
        ? SystemState.toJSON(message.systemState)
        : undefined);
    if (message.handshakes) {
      obj.handshakes = message.handshakes.map((e) =>
        e ? Handshake.toJSON(e) : undefined
      );
    } else {
      obj.handshakes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ModuleState>): ModuleState {
    const message = { ...baseModuleState } as ModuleState;
    message.handshakes = [];
    if (object.systemState !== undefined && object.systemState !== null) {
      message.systemState = SystemState.fromPartial(object.systemState);
    } else {
      message.systemState = undefined;
    }
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
