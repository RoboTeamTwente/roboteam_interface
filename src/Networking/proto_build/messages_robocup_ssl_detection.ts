/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

export interface SSLDetectionBall {
  confidence: number;
  area: number;
  x: number;
  y: number;
  z: number;
  pixelX: number;
  pixelY: number;
}

export interface SSLDetectionRobot {
  confidence: number;
  robotId: number;
  x: number;
  y: number;
  orientation: number;
  pixelX: number;
  pixelY: number;
  height: number;
}

export interface SSLDetectionFrame {
  frameNumber: number;
  tCapture: number;
  tSent: number;
  cameraId: number;
  balls: SSLDetectionBall[];
  robotsYellow: SSLDetectionRobot[];
  robotsBlue: SSLDetectionRobot[];
}

const baseSSLDetectionBall: object = {
  confidence: 0,
  area: 0,
  x: 0,
  y: 0,
  z: 0,
  pixelX: 0,
  pixelY: 0,
};

export const SSLDetectionBall = {
  encode(message: SSLDetectionBall, writer: Writer = Writer.create()): Writer {
    if (message.confidence !== 0) {
      writer.uint32(13).float(message.confidence);
    }
    if (message.area !== 0) {
      writer.uint32(16).uint32(message.area);
    }
    if (message.x !== 0) {
      writer.uint32(29).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(37).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(45).float(message.z);
    }
    if (message.pixelX !== 0) {
      writer.uint32(53).float(message.pixelX);
    }
    if (message.pixelY !== 0) {
      writer.uint32(61).float(message.pixelY);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLDetectionBall {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLDetectionBall
    ) as SSLDetectionBall;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confidence = reader.float();
          break;
        case 2:
          message.area = reader.uint32();
          break;
        case 3:
          message.x = reader.float();
          break;
        case 4:
          message.y = reader.float();
          break;
        case 5:
          message.z = reader.float();
          break;
        case 6:
          message.pixelX = reader.float();
          break;
        case 7:
          message.pixelY = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseSSLDetectionRobot: object = {
  confidence: 0,
  robotId: 0,
  x: 0,
  y: 0,
  orientation: 0,
  pixelX: 0,
  pixelY: 0,
  height: 0,
};

export const SSLDetectionRobot = {
  encode(message: SSLDetectionRobot, writer: Writer = Writer.create()): Writer {
    if (message.confidence !== 0) {
      writer.uint32(13).float(message.confidence);
    }
    if (message.robotId !== 0) {
      writer.uint32(16).uint32(message.robotId);
    }
    if (message.x !== 0) {
      writer.uint32(29).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(37).float(message.y);
    }
    if (message.orientation !== 0) {
      writer.uint32(45).float(message.orientation);
    }
    if (message.pixelX !== 0) {
      writer.uint32(53).float(message.pixelX);
    }
    if (message.pixelY !== 0) {
      writer.uint32(61).float(message.pixelY);
    }
    if (message.height !== 0) {
      writer.uint32(69).float(message.height);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLDetectionRobot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLDetectionRobot
    ) as SSLDetectionRobot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confidence = reader.float();
          break;
        case 2:
          message.robotId = reader.uint32();
          break;
        case 3:
          message.x = reader.float();
          break;
        case 4:
          message.y = reader.float();
          break;
        case 5:
          message.orientation = reader.float();
          break;
        case 6:
          message.pixelX = reader.float();
          break;
        case 7:
          message.pixelY = reader.float();
          break;
        case 8:
          message.height = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseSSLDetectionFrame: object = {
  frameNumber: 0,
  tCapture: 0,
  tSent: 0,
  cameraId: 0,
};

export const SSLDetectionFrame = {
  encode(message: SSLDetectionFrame, writer: Writer = Writer.create()): Writer {
    if (message.frameNumber !== 0) {
      writer.uint32(8).uint32(message.frameNumber);
    }
    if (message.tCapture !== 0) {
      writer.uint32(17).double(message.tCapture);
    }
    if (message.tSent !== 0) {
      writer.uint32(25).double(message.tSent);
    }
    if (message.cameraId !== 0) {
      writer.uint32(32).uint32(message.cameraId);
    }
    for (const v of message.balls) {
      SSLDetectionBall.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.robotsYellow) {
      SSLDetectionRobot.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.robotsBlue) {
      SSLDetectionRobot.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLDetectionFrame {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLDetectionFrame
    ) as SSLDetectionFrame;
    message.balls = [];
    message.robotsYellow = [];
    message.robotsBlue = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frameNumber = reader.uint32();
          break;
        case 2:
          message.tCapture = reader.double();
          break;
        case 3:
          message.tSent = reader.double();
          break;
        case 4:
          message.cameraId = reader.uint32();
          break;
        case 5:
          message.balls.push(SSLDetectionBall.decode(reader, reader.uint32()));
          break;
        case 6:
          message.robotsYellow.push(
            SSLDetectionRobot.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.robotsBlue.push(
            SSLDetectionRobot.decode(reader, reader.uint32())
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();
