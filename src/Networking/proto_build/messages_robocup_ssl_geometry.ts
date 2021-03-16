/* eslint-disable */
import { Vector2f } from "./Vector2f";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

export enum SSLFieldShapeType {
  Undefined = 0,
  CenterCircle = 1,
  TopTouchLine = 2,
  BottomTouchLine = 3,
  LeftGoalLine = 4,
  RightGoalLine = 5,
  HalfwayLine = 6,
  CenterLine = 7,
  LeftPenaltyStretch = 8,
  RightPenaltyStretch = 9,
  LeftFieldLeftPenaltyStretch = 10,
  LeftFieldRightPenaltyStretch = 11,
  RightFieldLeftPenaltyStretch = 12,
  RightFieldRightPenaltyStretch = 13,
  UNRECOGNIZED = -1,
}

/**
 * Represents a field marking as a line segment represented by a start point p1,
 * and end point p2, and a line thickness. The start and end points are along
 * the center of the line, so the thickness of the line extends by thickness / 2
 * on either side of the line.
 */
export interface SSLFieldLineSegment {
  /** Name of this field marking. */
  name: string;
  /** Start point of the line segment. */
  p1: Vector2f | undefined;
  /** End point of the line segment. */
  p2: Vector2f | undefined;
  /** Thickness of the line segment. */
  thickness: number;
  /** The type of this shape */
  type: SSLFieldShapeType;
}

/**
 * Represents a field marking as a circular arc segment represented by center point, a
 * start angle, an end angle, and an arc thickness.
 */
export interface SSLFieldCircularArc {
  /** Name of this field marking. */
  name: string;
  /** Center point of the circular arc. */
  center: Vector2f | undefined;
  /** Radius of the arc. */
  radius: number;
  /** Start angle in counter-clockwise order. */
  a1: number;
  /** End angle in counter-clockwise order. */
  a2: number;
  /** Thickness of the arc. */
  thickness: number;
  /** The type of this shape */
  type: SSLFieldShapeType;
}

export interface SSLGeometryFieldSize {
  fieldLength: number;
  fieldWidth: number;
  goalWidth: number;
  goalDepth: number;
  boundaryWidth: number;
  fieldLines: SSLFieldLineSegment[];
  fieldArcs: SSLFieldCircularArc[];
  penaltyAreaDepth: number;
  penaltyAreaWidth: number;
}

export interface SSLGeometryCameraCalibration {
  cameraId: number;
  focalLength: number;
  principalPointX: number;
  principalPointY: number;
  distortion: number;
  q0: number;
  q1: number;
  q2: number;
  q3: number;
  tx: number;
  ty: number;
  tz: number;
  derivedCameraWorldTx: number;
  derivedCameraWorldTy: number;
  derivedCameraWorldTz: number;
  pixelImageWidth: number;
  pixelImageHeight: number;
}

export interface SSLGeometryData {
  field: SSLGeometryFieldSize | undefined;
  calib: SSLGeometryCameraCalibration[];
}

const baseSSLFieldLineSegment: object = { name: "", thickness: 0, type: 0 };

export const SSLFieldLineSegment = {
  encode(
    message: SSLFieldLineSegment,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.p1 !== undefined) {
      Vector2f.encode(message.p1, writer.uint32(18).fork()).ldelim();
    }
    if (message.p2 !== undefined) {
      Vector2f.encode(message.p2, writer.uint32(26).fork()).ldelim();
    }
    if (message.thickness !== 0) {
      writer.uint32(37).float(message.thickness);
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLFieldLineSegment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLFieldLineSegment
    ) as SSLFieldLineSegment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.p1 = Vector2f.decode(reader, reader.uint32());
          break;
        case 3:
          message.p2 = Vector2f.decode(reader, reader.uint32());
          break;
        case 4:
          message.thickness = reader.float();
          break;
        case 5:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseSSLFieldCircularArc: object = {
  name: "",
  radius: 0,
  a1: 0,
  a2: 0,
  thickness: 0,
  type: 0,
};

export const SSLFieldCircularArc = {
  encode(
    message: SSLFieldCircularArc,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.center !== undefined) {
      Vector2f.encode(message.center, writer.uint32(18).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(29).float(message.radius);
    }
    if (message.a1 !== 0) {
      writer.uint32(37).float(message.a1);
    }
    if (message.a2 !== 0) {
      writer.uint32(45).float(message.a2);
    }
    if (message.thickness !== 0) {
      writer.uint32(53).float(message.thickness);
    }
    if (message.type !== 0) {
      writer.uint32(56).int32(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLFieldCircularArc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLFieldCircularArc
    ) as SSLFieldCircularArc;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.center = Vector2f.decode(reader, reader.uint32());
          break;
        case 3:
          message.radius = reader.float();
          break;
        case 4:
          message.a1 = reader.float();
          break;
        case 5:
          message.a2 = reader.float();
          break;
        case 6:
          message.thickness = reader.float();
          break;
        case 7:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseSSLGeometryFieldSize: object = {
  fieldLength: 0,
  fieldWidth: 0,
  goalWidth: 0,
  goalDepth: 0,
  boundaryWidth: 0,
  penaltyAreaDepth: 0,
  penaltyAreaWidth: 0,
};

export const SSLGeometryFieldSize = {
  encode(
    message: SSLGeometryFieldSize,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fieldLength !== 0) {
      writer.uint32(8).int32(message.fieldLength);
    }
    if (message.fieldWidth !== 0) {
      writer.uint32(16).int32(message.fieldWidth);
    }
    if (message.goalWidth !== 0) {
      writer.uint32(24).int32(message.goalWidth);
    }
    if (message.goalDepth !== 0) {
      writer.uint32(32).int32(message.goalDepth);
    }
    if (message.boundaryWidth !== 0) {
      writer.uint32(40).int32(message.boundaryWidth);
    }
    for (const v of message.fieldLines) {
      SSLFieldLineSegment.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.fieldArcs) {
      SSLFieldCircularArc.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.penaltyAreaDepth !== 0) {
      writer.uint32(64).int32(message.penaltyAreaDepth);
    }
    if (message.penaltyAreaWidth !== 0) {
      writer.uint32(72).int32(message.penaltyAreaWidth);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLGeometryFieldSize {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLGeometryFieldSize
    ) as SSLGeometryFieldSize;
    message.fieldLines = [];
    message.fieldArcs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldLength = reader.int32();
          break;
        case 2:
          message.fieldWidth = reader.int32();
          break;
        case 3:
          message.goalWidth = reader.int32();
          break;
        case 4:
          message.goalDepth = reader.int32();
          break;
        case 5:
          message.boundaryWidth = reader.int32();
          break;
        case 6:
          message.fieldLines.push(
            SSLFieldLineSegment.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.fieldArcs.push(
            SSLFieldCircularArc.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.penaltyAreaDepth = reader.int32();
          break;
        case 9:
          message.penaltyAreaWidth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseSSLGeometryCameraCalibration: object = {
  cameraId: 0,
  focalLength: 0,
  principalPointX: 0,
  principalPointY: 0,
  distortion: 0,
  q0: 0,
  q1: 0,
  q2: 0,
  q3: 0,
  tx: 0,
  ty: 0,
  tz: 0,
  derivedCameraWorldTx: 0,
  derivedCameraWorldTy: 0,
  derivedCameraWorldTz: 0,
  pixelImageWidth: 0,
  pixelImageHeight: 0,
};

export const SSLGeometryCameraCalibration = {
  encode(
    message: SSLGeometryCameraCalibration,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cameraId !== 0) {
      writer.uint32(8).uint32(message.cameraId);
    }
    if (message.focalLength !== 0) {
      writer.uint32(21).float(message.focalLength);
    }
    if (message.principalPointX !== 0) {
      writer.uint32(29).float(message.principalPointX);
    }
    if (message.principalPointY !== 0) {
      writer.uint32(37).float(message.principalPointY);
    }
    if (message.distortion !== 0) {
      writer.uint32(45).float(message.distortion);
    }
    if (message.q0 !== 0) {
      writer.uint32(53).float(message.q0);
    }
    if (message.q1 !== 0) {
      writer.uint32(61).float(message.q1);
    }
    if (message.q2 !== 0) {
      writer.uint32(69).float(message.q2);
    }
    if (message.q3 !== 0) {
      writer.uint32(77).float(message.q3);
    }
    if (message.tx !== 0) {
      writer.uint32(85).float(message.tx);
    }
    if (message.ty !== 0) {
      writer.uint32(93).float(message.ty);
    }
    if (message.tz !== 0) {
      writer.uint32(101).float(message.tz);
    }
    if (message.derivedCameraWorldTx !== 0) {
      writer.uint32(109).float(message.derivedCameraWorldTx);
    }
    if (message.derivedCameraWorldTy !== 0) {
      writer.uint32(117).float(message.derivedCameraWorldTy);
    }
    if (message.derivedCameraWorldTz !== 0) {
      writer.uint32(125).float(message.derivedCameraWorldTz);
    }
    if (message.pixelImageWidth !== 0) {
      writer.uint32(128).uint32(message.pixelImageWidth);
    }
    if (message.pixelImageHeight !== 0) {
      writer.uint32(136).uint32(message.pixelImageHeight);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SSLGeometryCameraCalibration {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLGeometryCameraCalibration
    ) as SSLGeometryCameraCalibration;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cameraId = reader.uint32();
          break;
        case 2:
          message.focalLength = reader.float();
          break;
        case 3:
          message.principalPointX = reader.float();
          break;
        case 4:
          message.principalPointY = reader.float();
          break;
        case 5:
          message.distortion = reader.float();
          break;
        case 6:
          message.q0 = reader.float();
          break;
        case 7:
          message.q1 = reader.float();
          break;
        case 8:
          message.q2 = reader.float();
          break;
        case 9:
          message.q3 = reader.float();
          break;
        case 10:
          message.tx = reader.float();
          break;
        case 11:
          message.ty = reader.float();
          break;
        case 12:
          message.tz = reader.float();
          break;
        case 13:
          message.derivedCameraWorldTx = reader.float();
          break;
        case 14:
          message.derivedCameraWorldTy = reader.float();
          break;
        case 15:
          message.derivedCameraWorldTz = reader.float();
          break;
        case 16:
          message.pixelImageWidth = reader.uint32();
          break;
        case 17:
          message.pixelImageHeight = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
};

const baseSSLGeometryData: object = {};

export const SSLGeometryData = {
  encode(message: SSLGeometryData, writer: Writer = Writer.create()): Writer {
    if (message.field !== undefined) {
      SSLGeometryFieldSize.encode(
        message.field,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.calib) {
      SSLGeometryCameraCalibration.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLGeometryData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLGeometryData
    ) as SSLGeometryData;
    message.calib = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = SSLGeometryFieldSize.decode(reader, reader.uint32());
          break;
        case 2:
          message.calib.push(
            SSLGeometryCameraCalibration.decode(reader, reader.uint32())
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
