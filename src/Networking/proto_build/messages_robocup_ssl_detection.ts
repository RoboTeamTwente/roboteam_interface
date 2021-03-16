/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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
  encode(
    message: SSLDetectionBall,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLDetectionBall {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSLDetectionBall } as SSLDetectionBall;
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

  fromJSON(object: any): SSLDetectionBall {
    const message = { ...baseSSLDetectionBall } as SSLDetectionBall;
    if (object.confidence !== undefined && object.confidence !== null) {
      message.confidence = Number(object.confidence);
    } else {
      message.confidence = 0;
    }
    if (object.area !== undefined && object.area !== null) {
      message.area = Number(object.area);
    } else {
      message.area = 0;
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = Number(object.x);
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = Number(object.y);
    } else {
      message.y = 0;
    }
    if (object.z !== undefined && object.z !== null) {
      message.z = Number(object.z);
    } else {
      message.z = 0;
    }
    if (object.pixelX !== undefined && object.pixelX !== null) {
      message.pixelX = Number(object.pixelX);
    } else {
      message.pixelX = 0;
    }
    if (object.pixelY !== undefined && object.pixelY !== null) {
      message.pixelY = Number(object.pixelY);
    } else {
      message.pixelY = 0;
    }
    return message;
  },

  toJSON(message: SSLDetectionBall): unknown {
    const obj: any = {};
    message.confidence !== undefined && (obj.confidence = message.confidence);
    message.area !== undefined && (obj.area = message.area);
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    message.pixelX !== undefined && (obj.pixelX = message.pixelX);
    message.pixelY !== undefined && (obj.pixelY = message.pixelY);
    return obj;
  },

  fromPartial(object: DeepPartial<SSLDetectionBall>): SSLDetectionBall {
    const message = { ...baseSSLDetectionBall } as SSLDetectionBall;
    if (object.confidence !== undefined && object.confidence !== null) {
      message.confidence = object.confidence;
    } else {
      message.confidence = 0;
    }
    if (object.area !== undefined && object.area !== null) {
      message.area = object.area;
    } else {
      message.area = 0;
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = object.x;
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = object.y;
    } else {
      message.y = 0;
    }
    if (object.z !== undefined && object.z !== null) {
      message.z = object.z;
    } else {
      message.z = 0;
    }
    if (object.pixelX !== undefined && object.pixelX !== null) {
      message.pixelX = object.pixelX;
    } else {
      message.pixelX = 0;
    }
    if (object.pixelY !== undefined && object.pixelY !== null) {
      message.pixelY = object.pixelY;
    } else {
      message.pixelY = 0;
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
  encode(
    message: SSLDetectionRobot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLDetectionRobot {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSLDetectionRobot } as SSLDetectionRobot;
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

  fromJSON(object: any): SSLDetectionRobot {
    const message = { ...baseSSLDetectionRobot } as SSLDetectionRobot;
    if (object.confidence !== undefined && object.confidence !== null) {
      message.confidence = Number(object.confidence);
    } else {
      message.confidence = 0;
    }
    if (object.robotId !== undefined && object.robotId !== null) {
      message.robotId = Number(object.robotId);
    } else {
      message.robotId = 0;
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = Number(object.x);
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = Number(object.y);
    } else {
      message.y = 0;
    }
    if (object.orientation !== undefined && object.orientation !== null) {
      message.orientation = Number(object.orientation);
    } else {
      message.orientation = 0;
    }
    if (object.pixelX !== undefined && object.pixelX !== null) {
      message.pixelX = Number(object.pixelX);
    } else {
      message.pixelX = 0;
    }
    if (object.pixelY !== undefined && object.pixelY !== null) {
      message.pixelY = Number(object.pixelY);
    } else {
      message.pixelY = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: SSLDetectionRobot): unknown {
    const obj: any = {};
    message.confidence !== undefined && (obj.confidence = message.confidence);
    message.robotId !== undefined && (obj.robotId = message.robotId);
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.orientation !== undefined &&
      (obj.orientation = message.orientation);
    message.pixelX !== undefined && (obj.pixelX = message.pixelX);
    message.pixelY !== undefined && (obj.pixelY = message.pixelY);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(object: DeepPartial<SSLDetectionRobot>): SSLDetectionRobot {
    const message = { ...baseSSLDetectionRobot } as SSLDetectionRobot;
    if (object.confidence !== undefined && object.confidence !== null) {
      message.confidence = object.confidence;
    } else {
      message.confidence = 0;
    }
    if (object.robotId !== undefined && object.robotId !== null) {
      message.robotId = object.robotId;
    } else {
      message.robotId = 0;
    }
    if (object.x !== undefined && object.x !== null) {
      message.x = object.x;
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = object.y;
    } else {
      message.y = 0;
    }
    if (object.orientation !== undefined && object.orientation !== null) {
      message.orientation = object.orientation;
    } else {
      message.orientation = 0;
    }
    if (object.pixelX !== undefined && object.pixelX !== null) {
      message.pixelX = object.pixelX;
    } else {
      message.pixelX = 0;
    }
    if (object.pixelY !== undefined && object.pixelY !== null) {
      message.pixelY = object.pixelY;
    } else {
      message.pixelY = 0;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
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
  encode(
    message: SSLDetectionFrame,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLDetectionFrame {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSLDetectionFrame } as SSLDetectionFrame;
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

  fromJSON(object: any): SSLDetectionFrame {
    const message = { ...baseSSLDetectionFrame } as SSLDetectionFrame;
    message.balls = [];
    message.robotsYellow = [];
    message.robotsBlue = [];
    if (object.frameNumber !== undefined && object.frameNumber !== null) {
      message.frameNumber = Number(object.frameNumber);
    } else {
      message.frameNumber = 0;
    }
    if (object.tCapture !== undefined && object.tCapture !== null) {
      message.tCapture = Number(object.tCapture);
    } else {
      message.tCapture = 0;
    }
    if (object.tSent !== undefined && object.tSent !== null) {
      message.tSent = Number(object.tSent);
    } else {
      message.tSent = 0;
    }
    if (object.cameraId !== undefined && object.cameraId !== null) {
      message.cameraId = Number(object.cameraId);
    } else {
      message.cameraId = 0;
    }
    if (object.balls !== undefined && object.balls !== null) {
      for (const e of object.balls) {
        message.balls.push(SSLDetectionBall.fromJSON(e));
      }
    }
    if (object.robotsYellow !== undefined && object.robotsYellow !== null) {
      for (const e of object.robotsYellow) {
        message.robotsYellow.push(SSLDetectionRobot.fromJSON(e));
      }
    }
    if (object.robotsBlue !== undefined && object.robotsBlue !== null) {
      for (const e of object.robotsBlue) {
        message.robotsBlue.push(SSLDetectionRobot.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: SSLDetectionFrame): unknown {
    const obj: any = {};
    message.frameNumber !== undefined &&
      (obj.frameNumber = message.frameNumber);
    message.tCapture !== undefined && (obj.tCapture = message.tCapture);
    message.tSent !== undefined && (obj.tSent = message.tSent);
    message.cameraId !== undefined && (obj.cameraId = message.cameraId);
    if (message.balls) {
      obj.balls = message.balls.map((e) =>
        e ? SSLDetectionBall.toJSON(e) : undefined
      );
    } else {
      obj.balls = [];
    }
    if (message.robotsYellow) {
      obj.robotsYellow = message.robotsYellow.map((e) =>
        e ? SSLDetectionRobot.toJSON(e) : undefined
      );
    } else {
      obj.robotsYellow = [];
    }
    if (message.robotsBlue) {
      obj.robotsBlue = message.robotsBlue.map((e) =>
        e ? SSLDetectionRobot.toJSON(e) : undefined
      );
    } else {
      obj.robotsBlue = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SSLDetectionFrame>): SSLDetectionFrame {
    const message = { ...baseSSLDetectionFrame } as SSLDetectionFrame;
    message.balls = [];
    message.robotsYellow = [];
    message.robotsBlue = [];
    if (object.frameNumber !== undefined && object.frameNumber !== null) {
      message.frameNumber = object.frameNumber;
    } else {
      message.frameNumber = 0;
    }
    if (object.tCapture !== undefined && object.tCapture !== null) {
      message.tCapture = object.tCapture;
    } else {
      message.tCapture = 0;
    }
    if (object.tSent !== undefined && object.tSent !== null) {
      message.tSent = object.tSent;
    } else {
      message.tSent = 0;
    }
    if (object.cameraId !== undefined && object.cameraId !== null) {
      message.cameraId = object.cameraId;
    } else {
      message.cameraId = 0;
    }
    if (object.balls !== undefined && object.balls !== null) {
      for (const e of object.balls) {
        message.balls.push(SSLDetectionBall.fromPartial(e));
      }
    }
    if (object.robotsYellow !== undefined && object.robotsYellow !== null) {
      for (const e of object.robotsYellow) {
        message.robotsYellow.push(SSLDetectionRobot.fromPartial(e));
      }
    }
    if (object.robotsBlue !== undefined && object.robotsBlue !== null) {
      for (const e of object.robotsBlue) {
        message.robotsBlue.push(SSLDetectionRobot.fromPartial(e));
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
