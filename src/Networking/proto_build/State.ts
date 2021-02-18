/* eslint-disable */
import { World } from "./World";
import { TeamParameters } from "./RobotParameters";
import { SSLGeometryData } from "./messages_robocup_ssl_geometry";
import { SSLReferee } from "./messages_robocup_ssl_referee";
import { SSLWrapperPacket } from "./messages_robocup_ssl_wrapper";
import { UiSettings } from "./UiOptions";
import { Handshake } from "./Handshake";
import { Writer, Reader } from "protobufjs/minimal";

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
  encode(message: State, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): State {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseState) as State;
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
};

const baseSystemState: object = {};

export const SystemState = {
  encode(message: SystemState, writer: Writer = Writer.create()): Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.uiSettings !== undefined) {
      UiSettings.encode(message.uiSettings, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SystemState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseSystemState) as SystemState;
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
};

const baseHandshakeState: object = {};

export const HandshakeState = {
  encode(message: HandshakeState, writer: Writer = Writer.create()): Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): HandshakeState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseHandshakeState
    ) as HandshakeState;
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
};

const baseModuleState: object = {};

export const ModuleState = {
  encode(message: ModuleState, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): ModuleState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseModuleState) as ModuleState;
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
