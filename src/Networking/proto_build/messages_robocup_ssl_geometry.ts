/* eslint-disable */
import { Vector2f } from "./Vector2f";
import Long from "long";
import _m0 from "protobufjs/minimal";

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

export function sSLFieldShapeTypeFromJSON(object: any): SSLFieldShapeType {
  switch (object) {
    case 0:
    case "Undefined":
      return SSLFieldShapeType.Undefined;
    case 1:
    case "CenterCircle":
      return SSLFieldShapeType.CenterCircle;
    case 2:
    case "TopTouchLine":
      return SSLFieldShapeType.TopTouchLine;
    case 3:
    case "BottomTouchLine":
      return SSLFieldShapeType.BottomTouchLine;
    case 4:
    case "LeftGoalLine":
      return SSLFieldShapeType.LeftGoalLine;
    case 5:
    case "RightGoalLine":
      return SSLFieldShapeType.RightGoalLine;
    case 6:
    case "HalfwayLine":
      return SSLFieldShapeType.HalfwayLine;
    case 7:
    case "CenterLine":
      return SSLFieldShapeType.CenterLine;
    case 8:
    case "LeftPenaltyStretch":
      return SSLFieldShapeType.LeftPenaltyStretch;
    case 9:
    case "RightPenaltyStretch":
      return SSLFieldShapeType.RightPenaltyStretch;
    case 10:
    case "LeftFieldLeftPenaltyStretch":
      return SSLFieldShapeType.LeftFieldLeftPenaltyStretch;
    case 11:
    case "LeftFieldRightPenaltyStretch":
      return SSLFieldShapeType.LeftFieldRightPenaltyStretch;
    case 12:
    case "RightFieldLeftPenaltyStretch":
      return SSLFieldShapeType.RightFieldLeftPenaltyStretch;
    case 13:
    case "RightFieldRightPenaltyStretch":
      return SSLFieldShapeType.RightFieldRightPenaltyStretch;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SSLFieldShapeType.UNRECOGNIZED;
  }
}

export function sSLFieldShapeTypeToJSON(object: SSLFieldShapeType): string {
  switch (object) {
    case SSLFieldShapeType.Undefined:
      return "Undefined";
    case SSLFieldShapeType.CenterCircle:
      return "CenterCircle";
    case SSLFieldShapeType.TopTouchLine:
      return "TopTouchLine";
    case SSLFieldShapeType.BottomTouchLine:
      return "BottomTouchLine";
    case SSLFieldShapeType.LeftGoalLine:
      return "LeftGoalLine";
    case SSLFieldShapeType.RightGoalLine:
      return "RightGoalLine";
    case SSLFieldShapeType.HalfwayLine:
      return "HalfwayLine";
    case SSLFieldShapeType.CenterLine:
      return "CenterLine";
    case SSLFieldShapeType.LeftPenaltyStretch:
      return "LeftPenaltyStretch";
    case SSLFieldShapeType.RightPenaltyStretch:
      return "RightPenaltyStretch";
    case SSLFieldShapeType.LeftFieldLeftPenaltyStretch:
      return "LeftFieldLeftPenaltyStretch";
    case SSLFieldShapeType.LeftFieldRightPenaltyStretch:
      return "LeftFieldRightPenaltyStretch";
    case SSLFieldShapeType.RightFieldLeftPenaltyStretch:
      return "RightFieldLeftPenaltyStretch";
    case SSLFieldShapeType.RightFieldRightPenaltyStretch:
      return "RightFieldRightPenaltyStretch";
    default:
      return "UNKNOWN";
  }
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLFieldLineSegment {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSLFieldLineSegment } as SSLFieldLineSegment;
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

  fromJSON(object: any): SSLFieldLineSegment {
    const message = { ...baseSSLFieldLineSegment } as SSLFieldLineSegment;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.p1 !== undefined && object.p1 !== null) {
      message.p1 = Vector2f.fromJSON(object.p1);
    } else {
      message.p1 = undefined;
    }
    if (object.p2 !== undefined && object.p2 !== null) {
      message.p2 = Vector2f.fromJSON(object.p2);
    } else {
      message.p2 = undefined;
    }
    if (object.thickness !== undefined && object.thickness !== null) {
      message.thickness = Number(object.thickness);
    } else {
      message.thickness = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = sSLFieldShapeTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: SSLFieldLineSegment): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.p1 !== undefined &&
      (obj.p1 = message.p1 ? Vector2f.toJSON(message.p1) : undefined);
    message.p2 !== undefined &&
      (obj.p2 = message.p2 ? Vector2f.toJSON(message.p2) : undefined);
    message.thickness !== undefined && (obj.thickness = message.thickness);
    message.type !== undefined &&
      (obj.type = sSLFieldShapeTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<SSLFieldLineSegment>): SSLFieldLineSegment {
    const message = { ...baseSSLFieldLineSegment } as SSLFieldLineSegment;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.p1 !== undefined && object.p1 !== null) {
      message.p1 = Vector2f.fromPartial(object.p1);
    } else {
      message.p1 = undefined;
    }
    if (object.p2 !== undefined && object.p2 !== null) {
      message.p2 = Vector2f.fromPartial(object.p2);
    } else {
      message.p2 = undefined;
    }
    if (object.thickness !== undefined && object.thickness !== null) {
      message.thickness = object.thickness;
    } else {
      message.thickness = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLFieldCircularArc {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSLFieldCircularArc } as SSLFieldCircularArc;
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

  fromJSON(object: any): SSLFieldCircularArc {
    const message = { ...baseSSLFieldCircularArc } as SSLFieldCircularArc;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.center !== undefined && object.center !== null) {
      message.center = Vector2f.fromJSON(object.center);
    } else {
      message.center = undefined;
    }
    if (object.radius !== undefined && object.radius !== null) {
      message.radius = Number(object.radius);
    } else {
      message.radius = 0;
    }
    if (object.a1 !== undefined && object.a1 !== null) {
      message.a1 = Number(object.a1);
    } else {
      message.a1 = 0;
    }
    if (object.a2 !== undefined && object.a2 !== null) {
      message.a2 = Number(object.a2);
    } else {
      message.a2 = 0;
    }
    if (object.thickness !== undefined && object.thickness !== null) {
      message.thickness = Number(object.thickness);
    } else {
      message.thickness = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = sSLFieldShapeTypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: SSLFieldCircularArc): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.center !== undefined &&
      (obj.center = message.center
        ? Vector2f.toJSON(message.center)
        : undefined);
    message.radius !== undefined && (obj.radius = message.radius);
    message.a1 !== undefined && (obj.a1 = message.a1);
    message.a2 !== undefined && (obj.a2 = message.a2);
    message.thickness !== undefined && (obj.thickness = message.thickness);
    message.type !== undefined &&
      (obj.type = sSLFieldShapeTypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<SSLFieldCircularArc>): SSLFieldCircularArc {
    const message = { ...baseSSLFieldCircularArc } as SSLFieldCircularArc;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.center !== undefined && object.center !== null) {
      message.center = Vector2f.fromPartial(object.center);
    } else {
      message.center = undefined;
    }
    if (object.radius !== undefined && object.radius !== null) {
      message.radius = object.radius;
    } else {
      message.radius = 0;
    }
    if (object.a1 !== undefined && object.a1 !== null) {
      message.a1 = object.a1;
    } else {
      message.a1 = 0;
    }
    if (object.a2 !== undefined && object.a2 !== null) {
      message.a2 = object.a2;
    } else {
      message.a2 = 0;
    }
    if (object.thickness !== undefined && object.thickness !== null) {
      message.thickness = object.thickness;
    } else {
      message.thickness = 0;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SSLGeometryFieldSize {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSLGeometryFieldSize } as SSLGeometryFieldSize;
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

  fromJSON(object: any): SSLGeometryFieldSize {
    const message = { ...baseSSLGeometryFieldSize } as SSLGeometryFieldSize;
    message.fieldLines = [];
    message.fieldArcs = [];
    if (object.fieldLength !== undefined && object.fieldLength !== null) {
      message.fieldLength = Number(object.fieldLength);
    } else {
      message.fieldLength = 0;
    }
    if (object.fieldWidth !== undefined && object.fieldWidth !== null) {
      message.fieldWidth = Number(object.fieldWidth);
    } else {
      message.fieldWidth = 0;
    }
    if (object.goalWidth !== undefined && object.goalWidth !== null) {
      message.goalWidth = Number(object.goalWidth);
    } else {
      message.goalWidth = 0;
    }
    if (object.goalDepth !== undefined && object.goalDepth !== null) {
      message.goalDepth = Number(object.goalDepth);
    } else {
      message.goalDepth = 0;
    }
    if (object.boundaryWidth !== undefined && object.boundaryWidth !== null) {
      message.boundaryWidth = Number(object.boundaryWidth);
    } else {
      message.boundaryWidth = 0;
    }
    if (object.fieldLines !== undefined && object.fieldLines !== null) {
      for (const e of object.fieldLines) {
        message.fieldLines.push(SSLFieldLineSegment.fromJSON(e));
      }
    }
    if (object.fieldArcs !== undefined && object.fieldArcs !== null) {
      for (const e of object.fieldArcs) {
        message.fieldArcs.push(SSLFieldCircularArc.fromJSON(e));
      }
    }
    if (
      object.penaltyAreaDepth !== undefined &&
      object.penaltyAreaDepth !== null
    ) {
      message.penaltyAreaDepth = Number(object.penaltyAreaDepth);
    } else {
      message.penaltyAreaDepth = 0;
    }
    if (
      object.penaltyAreaWidth !== undefined &&
      object.penaltyAreaWidth !== null
    ) {
      message.penaltyAreaWidth = Number(object.penaltyAreaWidth);
    } else {
      message.penaltyAreaWidth = 0;
    }
    return message;
  },

  toJSON(message: SSLGeometryFieldSize): unknown {
    const obj: any = {};
    message.fieldLength !== undefined &&
      (obj.fieldLength = message.fieldLength);
    message.fieldWidth !== undefined && (obj.fieldWidth = message.fieldWidth);
    message.goalWidth !== undefined && (obj.goalWidth = message.goalWidth);
    message.goalDepth !== undefined && (obj.goalDepth = message.goalDepth);
    message.boundaryWidth !== undefined &&
      (obj.boundaryWidth = message.boundaryWidth);
    if (message.fieldLines) {
      obj.fieldLines = message.fieldLines.map((e) =>
        e ? SSLFieldLineSegment.toJSON(e) : undefined
      );
    } else {
      obj.fieldLines = [];
    }
    if (message.fieldArcs) {
      obj.fieldArcs = message.fieldArcs.map((e) =>
        e ? SSLFieldCircularArc.toJSON(e) : undefined
      );
    } else {
      obj.fieldArcs = [];
    }
    message.penaltyAreaDepth !== undefined &&
      (obj.penaltyAreaDepth = message.penaltyAreaDepth);
    message.penaltyAreaWidth !== undefined &&
      (obj.penaltyAreaWidth = message.penaltyAreaWidth);
    return obj;
  },

  fromPartial(object: DeepPartial<SSLGeometryFieldSize>): SSLGeometryFieldSize {
    const message = { ...baseSSLGeometryFieldSize } as SSLGeometryFieldSize;
    message.fieldLines = [];
    message.fieldArcs = [];
    if (object.fieldLength !== undefined && object.fieldLength !== null) {
      message.fieldLength = object.fieldLength;
    } else {
      message.fieldLength = 0;
    }
    if (object.fieldWidth !== undefined && object.fieldWidth !== null) {
      message.fieldWidth = object.fieldWidth;
    } else {
      message.fieldWidth = 0;
    }
    if (object.goalWidth !== undefined && object.goalWidth !== null) {
      message.goalWidth = object.goalWidth;
    } else {
      message.goalWidth = 0;
    }
    if (object.goalDepth !== undefined && object.goalDepth !== null) {
      message.goalDepth = object.goalDepth;
    } else {
      message.goalDepth = 0;
    }
    if (object.boundaryWidth !== undefined && object.boundaryWidth !== null) {
      message.boundaryWidth = object.boundaryWidth;
    } else {
      message.boundaryWidth = 0;
    }
    if (object.fieldLines !== undefined && object.fieldLines !== null) {
      for (const e of object.fieldLines) {
        message.fieldLines.push(SSLFieldLineSegment.fromPartial(e));
      }
    }
    if (object.fieldArcs !== undefined && object.fieldArcs !== null) {
      for (const e of object.fieldArcs) {
        message.fieldArcs.push(SSLFieldCircularArc.fromPartial(e));
      }
    }
    if (
      object.penaltyAreaDepth !== undefined &&
      object.penaltyAreaDepth !== null
    ) {
      message.penaltyAreaDepth = object.penaltyAreaDepth;
    } else {
      message.penaltyAreaDepth = 0;
    }
    if (
      object.penaltyAreaWidth !== undefined &&
      object.penaltyAreaWidth !== null
    ) {
      message.penaltyAreaWidth = object.penaltyAreaWidth;
    } else {
      message.penaltyAreaWidth = 0;
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
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SSLGeometryCameraCalibration {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSSLGeometryCameraCalibration,
    } as SSLGeometryCameraCalibration;
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

  fromJSON(object: any): SSLGeometryCameraCalibration {
    const message = {
      ...baseSSLGeometryCameraCalibration,
    } as SSLGeometryCameraCalibration;
    if (object.cameraId !== undefined && object.cameraId !== null) {
      message.cameraId = Number(object.cameraId);
    } else {
      message.cameraId = 0;
    }
    if (object.focalLength !== undefined && object.focalLength !== null) {
      message.focalLength = Number(object.focalLength);
    } else {
      message.focalLength = 0;
    }
    if (
      object.principalPointX !== undefined &&
      object.principalPointX !== null
    ) {
      message.principalPointX = Number(object.principalPointX);
    } else {
      message.principalPointX = 0;
    }
    if (
      object.principalPointY !== undefined &&
      object.principalPointY !== null
    ) {
      message.principalPointY = Number(object.principalPointY);
    } else {
      message.principalPointY = 0;
    }
    if (object.distortion !== undefined && object.distortion !== null) {
      message.distortion = Number(object.distortion);
    } else {
      message.distortion = 0;
    }
    if (object.q0 !== undefined && object.q0 !== null) {
      message.q0 = Number(object.q0);
    } else {
      message.q0 = 0;
    }
    if (object.q1 !== undefined && object.q1 !== null) {
      message.q1 = Number(object.q1);
    } else {
      message.q1 = 0;
    }
    if (object.q2 !== undefined && object.q2 !== null) {
      message.q2 = Number(object.q2);
    } else {
      message.q2 = 0;
    }
    if (object.q3 !== undefined && object.q3 !== null) {
      message.q3 = Number(object.q3);
    } else {
      message.q3 = 0;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Number(object.tx);
    } else {
      message.tx = 0;
    }
    if (object.ty !== undefined && object.ty !== null) {
      message.ty = Number(object.ty);
    } else {
      message.ty = 0;
    }
    if (object.tz !== undefined && object.tz !== null) {
      message.tz = Number(object.tz);
    } else {
      message.tz = 0;
    }
    if (
      object.derivedCameraWorldTx !== undefined &&
      object.derivedCameraWorldTx !== null
    ) {
      message.derivedCameraWorldTx = Number(object.derivedCameraWorldTx);
    } else {
      message.derivedCameraWorldTx = 0;
    }
    if (
      object.derivedCameraWorldTy !== undefined &&
      object.derivedCameraWorldTy !== null
    ) {
      message.derivedCameraWorldTy = Number(object.derivedCameraWorldTy);
    } else {
      message.derivedCameraWorldTy = 0;
    }
    if (
      object.derivedCameraWorldTz !== undefined &&
      object.derivedCameraWorldTz !== null
    ) {
      message.derivedCameraWorldTz = Number(object.derivedCameraWorldTz);
    } else {
      message.derivedCameraWorldTz = 0;
    }
    if (
      object.pixelImageWidth !== undefined &&
      object.pixelImageWidth !== null
    ) {
      message.pixelImageWidth = Number(object.pixelImageWidth);
    } else {
      message.pixelImageWidth = 0;
    }
    if (
      object.pixelImageHeight !== undefined &&
      object.pixelImageHeight !== null
    ) {
      message.pixelImageHeight = Number(object.pixelImageHeight);
    } else {
      message.pixelImageHeight = 0;
    }
    return message;
  },

  toJSON(message: SSLGeometryCameraCalibration): unknown {
    const obj: any = {};
    message.cameraId !== undefined && (obj.cameraId = message.cameraId);
    message.focalLength !== undefined &&
      (obj.focalLength = message.focalLength);
    message.principalPointX !== undefined &&
      (obj.principalPointX = message.principalPointX);
    message.principalPointY !== undefined &&
      (obj.principalPointY = message.principalPointY);
    message.distortion !== undefined && (obj.distortion = message.distortion);
    message.q0 !== undefined && (obj.q0 = message.q0);
    message.q1 !== undefined && (obj.q1 = message.q1);
    message.q2 !== undefined && (obj.q2 = message.q2);
    message.q3 !== undefined && (obj.q3 = message.q3);
    message.tx !== undefined && (obj.tx = message.tx);
    message.ty !== undefined && (obj.ty = message.ty);
    message.tz !== undefined && (obj.tz = message.tz);
    message.derivedCameraWorldTx !== undefined &&
      (obj.derivedCameraWorldTx = message.derivedCameraWorldTx);
    message.derivedCameraWorldTy !== undefined &&
      (obj.derivedCameraWorldTy = message.derivedCameraWorldTy);
    message.derivedCameraWorldTz !== undefined &&
      (obj.derivedCameraWorldTz = message.derivedCameraWorldTz);
    message.pixelImageWidth !== undefined &&
      (obj.pixelImageWidth = message.pixelImageWidth);
    message.pixelImageHeight !== undefined &&
      (obj.pixelImageHeight = message.pixelImageHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SSLGeometryCameraCalibration>
  ): SSLGeometryCameraCalibration {
    const message = {
      ...baseSSLGeometryCameraCalibration,
    } as SSLGeometryCameraCalibration;
    if (object.cameraId !== undefined && object.cameraId !== null) {
      message.cameraId = object.cameraId;
    } else {
      message.cameraId = 0;
    }
    if (object.focalLength !== undefined && object.focalLength !== null) {
      message.focalLength = object.focalLength;
    } else {
      message.focalLength = 0;
    }
    if (
      object.principalPointX !== undefined &&
      object.principalPointX !== null
    ) {
      message.principalPointX = object.principalPointX;
    } else {
      message.principalPointX = 0;
    }
    if (
      object.principalPointY !== undefined &&
      object.principalPointY !== null
    ) {
      message.principalPointY = object.principalPointY;
    } else {
      message.principalPointY = 0;
    }
    if (object.distortion !== undefined && object.distortion !== null) {
      message.distortion = object.distortion;
    } else {
      message.distortion = 0;
    }
    if (object.q0 !== undefined && object.q0 !== null) {
      message.q0 = object.q0;
    } else {
      message.q0 = 0;
    }
    if (object.q1 !== undefined && object.q1 !== null) {
      message.q1 = object.q1;
    } else {
      message.q1 = 0;
    }
    if (object.q2 !== undefined && object.q2 !== null) {
      message.q2 = object.q2;
    } else {
      message.q2 = 0;
    }
    if (object.q3 !== undefined && object.q3 !== null) {
      message.q3 = object.q3;
    } else {
      message.q3 = 0;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = object.tx;
    } else {
      message.tx = 0;
    }
    if (object.ty !== undefined && object.ty !== null) {
      message.ty = object.ty;
    } else {
      message.ty = 0;
    }
    if (object.tz !== undefined && object.tz !== null) {
      message.tz = object.tz;
    } else {
      message.tz = 0;
    }
    if (
      object.derivedCameraWorldTx !== undefined &&
      object.derivedCameraWorldTx !== null
    ) {
      message.derivedCameraWorldTx = object.derivedCameraWorldTx;
    } else {
      message.derivedCameraWorldTx = 0;
    }
    if (
      object.derivedCameraWorldTy !== undefined &&
      object.derivedCameraWorldTy !== null
    ) {
      message.derivedCameraWorldTy = object.derivedCameraWorldTy;
    } else {
      message.derivedCameraWorldTy = 0;
    }
    if (
      object.derivedCameraWorldTz !== undefined &&
      object.derivedCameraWorldTz !== null
    ) {
      message.derivedCameraWorldTz = object.derivedCameraWorldTz;
    } else {
      message.derivedCameraWorldTz = 0;
    }
    if (
      object.pixelImageWidth !== undefined &&
      object.pixelImageWidth !== null
    ) {
      message.pixelImageWidth = object.pixelImageWidth;
    } else {
      message.pixelImageWidth = 0;
    }
    if (
      object.pixelImageHeight !== undefined &&
      object.pixelImageHeight !== null
    ) {
      message.pixelImageHeight = object.pixelImageHeight;
    } else {
      message.pixelImageHeight = 0;
    }
    return message;
  },
};

const baseSSLGeometryData: object = {};

export const SSLGeometryData = {
  encode(
    message: SSLGeometryData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SSLGeometryData {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSSLGeometryData } as SSLGeometryData;
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

  fromJSON(object: any): SSLGeometryData {
    const message = { ...baseSSLGeometryData } as SSLGeometryData;
    message.calib = [];
    if (object.field !== undefined && object.field !== null) {
      message.field = SSLGeometryFieldSize.fromJSON(object.field);
    } else {
      message.field = undefined;
    }
    if (object.calib !== undefined && object.calib !== null) {
      for (const e of object.calib) {
        message.calib.push(SSLGeometryCameraCalibration.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: SSLGeometryData): unknown {
    const obj: any = {};
    message.field !== undefined &&
      (obj.field = message.field
        ? SSLGeometryFieldSize.toJSON(message.field)
        : undefined);
    if (message.calib) {
      obj.calib = message.calib.map((e) =>
        e ? SSLGeometryCameraCalibration.toJSON(e) : undefined
      );
    } else {
      obj.calib = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SSLGeometryData>): SSLGeometryData {
    const message = { ...baseSSLGeometryData } as SSLGeometryData;
    message.calib = [];
    if (object.field !== undefined && object.field !== null) {
      message.field = SSLGeometryFieldSize.fromPartial(object.field);
    } else {
      message.field = undefined;
    }
    if (object.calib !== undefined && object.calib !== null) {
      for (const e of object.calib) {
        message.calib.push(SSLGeometryCameraCalibration.fromPartial(e));
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
