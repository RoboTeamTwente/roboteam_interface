import * as React from "react";
import { createRegularExpressionLiteral } from "typescript";
import {
  SSLFieldCircularArc,
  SSLFieldLineSegment,
} from "../../Networking/proto_build/messages_robocup_ssl_geometry";
import { TeamParameters } from "../../Networking/proto_build/RobotParameters";
import { ModuleState, State } from "../../Networking/proto_build/State";
import { Vector2f } from "../../Networking/proto_build/Vector2f";
import { World } from "../../Networking/proto_build/World";
import { WorldBall } from "../../Networking/proto_build/WorldBall";
import { WorldRobot } from "../../Networking/proto_build/WorldRobot";
import {
  getLength,
  getWidth,
  scale,
  setFieldLength,
} from "../../Utils/Dimensions";
import { getPhantomModuleState } from "../PhantomData/State";

interface FieldProps {}

interface FieldState {
  state: ModuleState | null;
  canvas: string;
}

class Field extends React.Component<FieldProps, FieldState> {
  fieldWidthOffset: number;
  fieldHeightOffset: number;
  constructor(props: FieldProps) {
    super(props);
    this.state = {
      state: null,
      canvas: "",
    };

    this.fieldWidthOffset = 0;
    this.fieldHeightOffset = 0;

    this.draw = this.draw.bind(this);
    this.drawField = this.drawField.bind(this);
  }

  public draw(state: ModuleState | null) {
    let canvas = document.querySelector(".fieldCanvas")! as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");

    let lastState = state!.systemState!.state!;
    let { fieldLength, fieldWidth } = lastState.field!.field!;

    let world = lastState.lastSeenWorld!;

    setFieldLength(fieldLength);
    canvas.width = scale(fieldLength);
    canvas.height = scale(fieldWidth);

    if (ctx == null) {
      return;
    }

    if (state == null) {
      return;
    }
    ctx?.translate(canvas.width / 2, canvas.height / 2);
    ctx.lineWidth = 1;

    // Draw the field
    ctx.strokeStyle = "#585858";
    this.drawField(ctx, state);
    this.drawWorld(ctx, world, lastState);
    ctx.stroke();
  }

  componentDidMount() {
    let data = getPhantomModuleState();
    this.draw(data);
  }

  drawField(ctx: CanvasRenderingContext2D, state: ModuleState) {
    let data = state.systemState!.state!.field!.field!;
    let {
      // goalWidth,
      // goalDepth,
      // boundaryWidth,
      fieldLines,
      fieldArcs,
      // penaltyAreaDepth,
      // penaltyAreaWidth
    } = data;
    // let width = scale(fieldWidth);
    // let length = scale(fieldLength);
    this.drawLines(ctx, fieldLines);
    this.drawArcs(ctx, fieldArcs);
    // fieldLines = [fieldLines[0], fieldLines[1]];
  }

  drawWorld(ctx: CanvasRenderingContext2D, world: World, state: State) {
    let { yellow, blue, ball } = world;

    yellow.map((e) => this.drawRobot(ctx, state, e, true));
    blue.map((e) => this.drawRobot(ctx, state, e, false));
    if (ball !== undefined) {
      this.drawBall(ctx, ball!);
    }
    console.log(world);
  }

  drawBall(ctx: CanvasRenderingContext2D, ball: WorldBall) {
    let { area, pos, z, vel, zVel, visible } = ball;

    let realX = scale(pos?.x!);
    let realY = scale(pos?.y!);
    let radius = Math.sqrt(area / Math.PI);
    this.drawCircleWithColor(ctx, realX, realY, radius, "#ff7832");
    ctx.moveTo(realX, realY);
    ctx.lineTo(realX + scale(vel?.x!), realY + scale(vel?.y!));
    ctx.stroke();
  }

  drawRobot(
    ctx: CanvasRenderingContext2D,
    state: State,
    each: WorldRobot,
    yellow: boolean
  ) {
    let robotParameters = yellow
      ? state.yellowRobotParameters!
      : state.blueRobotParameters!;
    let { angle, vel, w, id, pos } = each;
    let { x, y } = pos!;
    let realX = scale(x * 1000);
    let realY = scale(y * 1000);
    let realRadius = scale(robotParameters.parameters!.radius! * 1000);
    this.drawCircleWithColor(
      ctx,
      realX,
      realY,
      realRadius,
      yellow ? "#ffff00" : "#9696ff"
    );
    ctx.font = "15px Arial";
    ctx.fillText(id.toString(), realX + realRadius + 1, realY + realRadius + 1);
    ctx.moveTo(realX, realY);
    let velX = scale(vel!.x! * 1000);
    let velY = scale(vel!.y! * 1000);
    ctx.lineTo(realX + velX, realY + velY);
    ctx.stroke();
  }

  drawLines(ctx: CanvasRenderingContext2D, lines: SSLFieldLineSegment[]) {
    for (let line of lines) {
      let { p1, p2 } = line;
      ctx.moveTo(scale(p1!.x!), scale(p1!.y!));
      ctx.lineTo(scale(p2!.x!), scale(p2!.y!));
      ctx.stroke();
    }
  }

  // Later for robots.
  // drawPartialCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, ) {

  // }

  drawCircle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number
  ) {
    ctx.moveTo(x + radius, y);
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.stroke();
  }

  drawCircleWithColor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    color: string
  ) {
    let oldColor = ctx.fillStyle;
    ctx.fillStyle = color;
    ctx.moveTo(x + radius, y);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = oldColor;
  }

  drawArcs(ctx: CanvasRenderingContext2D, arcs: SSLFieldCircularArc[]) {
    for (let arc of arcs) {
      let { center, radius } = arc;
      this.drawCircle(
        ctx,
        scale(center?.x!),
        scale(center?.y!),
        scale(radius!)
      );
    }
  }

  render() {
    return <canvas className="fieldCanvas" ref={this.state.canvas} />;
  }
}

export default Field;
