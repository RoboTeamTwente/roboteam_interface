import * as React from 'react';
import { SSLFieldCircularArc, SSLFieldLineSegment } from '../../Networking/proto_build/messages_robocup_ssl_geometry';
import { ModuleState, State } from '../../Networking/proto_build/State';
import { Vector2f } from '../../Networking/proto_build/Vector2f';
import { World } from '../../Networking/proto_build/World';
import { WorldBall } from '../../Networking/proto_build/WorldBall';
import { WorldRobot } from '../../Networking/proto_build/WorldRobot';
import { calculateScaling, scale } from '../../Utils/Dimensions';
import { getPhantomModuleState } from '../PhantomData/State';

interface FieldProps {
    transformation: number; // degrees, valid values are 0, 90, 180, 270
}

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

        this.update = this.update.bind(this);
        this.drawField = this.drawField.bind(this);
    }

    scaleTransform(x: number, y: number): { x: number, y: number } {
        for (let i = 0; i < this.props.transformation / 90; i++) {
            let xTemp = -y;
            y = x;
            x = xTemp;
        }
        return {
            x: scale(x),
            y: scale(y),
        }
    }

    scaleTransformVector(vec: Vector2f): { x: number, y: number } {
        return this.scaleTransform(vec.x, vec.y);
    }

    public update(state: ModuleState | null) {
        let canvas = document.querySelector(".fieldCanvas")! as HTMLCanvasElement;
        let ctx = canvas.getContext("2d");

        let lastState = state!.systemState!.state!;
        let {
            fieldLength,
            fieldWidth,
        } = lastState.field!.field!;

        let world = lastState.lastSeenWorld!;

        calculateScaling(fieldLength, fieldWidth);
        canvas.width = scale(fieldLength);
        canvas.height = scale(fieldWidth);

        if (ctx == null) {
            return;
        }

        if (state == null) {
            return;
        }
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.lineWidth = 1;

        // Draw the field
        // ctx.strokeStyle = "#000000";
        this.drawField(ctx, state);
        this.drawWorld(ctx, world, lastState);
        ctx.stroke();
    }

    // TODO: Comment this out when we get actual data,
    // Instead just call update() from wherever.
    componentDidMount() {
        let data = getPhantomModuleState();
        this.update(data);
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
        console.log(data)
        this.drawLines(ctx, fieldLines);
        this.drawArcs(ctx, fieldArcs);
    }

    drawWorld(ctx: CanvasRenderingContext2D, world: World, state: State) {
        let {
            yellow, blue, ball
        } = world;

        yellow.map(e => this.drawRobot(ctx, state, e, true));
        blue.map(e => this.drawRobot(ctx, state, e, false));
        if (ball !== undefined) {
            this.drawBall(ctx, ball!);
        }
        console.log(world);
    }

    drawBall(ctx: CanvasRenderingContext2D, ball: WorldBall) {
        let {
            area,
            pos,
            vel
        } = ball;

        let { x, y } = this.scaleTransformVector(pos!);
        let realX = x * 1000;
        let realY = y * 1000;
        // let radius = Math.sqrt(area / Math.PI);
        let radius = scale(0.021333 * 1000) * 3.5;
        this.drawCircleWithColor(ctx, realX, realY, radius, "#ff7832");
        ctx.moveTo(realX, realY);
        let velTrans = this.scaleTransformVector(vel!);
        ctx.lineTo(realX + velTrans.x, realY + velTrans.y);
        ctx.stroke();
    }

    // TODO: transformScale stuff
    drawRobot(ctx: CanvasRenderingContext2D, state: State, each: WorldRobot, yellow: boolean) {
        let robotParameters = yellow ? state.yellowRobotParameters! : state.blueRobotParameters!;
        let { vel, id, pos } = each;
        let { x, y } = pos!;
        let realX = scale(x * 1000);
        let realY = scale(y * 1000);
        let realRadius = scale(robotParameters.parameters!.radius! * 1000);
        this.drawCircleWithColor(ctx, realX, realY, realRadius, yellow ? "#ffff00" : "#9696ff");
        ctx.font = "15px Arial";
        ctx.fillText(id.toString(), realX + realRadius + 1, realY + realRadius + 1);
        ctx.moveTo(realX, realY);
        let velX = scale(vel!.x! * 1000);
        let velY = scale(vel!.y! * 1000);
        ctx.lineTo(realX + velX, realY + velY);
        ctx.stroke();
    }

    // TODO: transformScale stuff
    drawLines(ctx: CanvasRenderingContext2D, lines: SSLFieldLineSegment[]) {
        for (let line of lines) {
            let {
                p1, p2, thickness
            } = line;
            let oldStrokeWidth = ctx.lineWidth;
            ctx.lineWidth = scale(thickness);
            ctx.moveTo(scale(p1!.x!), scale(p1!.y!));
            ctx.lineTo(scale(p2!.x!), scale(p2!.y!));
            ctx.stroke();
            ctx.lineWidth = oldStrokeWidth;
        }
    }

    // TODO: transformScale stuff
    drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
        ctx.moveTo(x + radius, y);
        this.drawCircleFromAngles(ctx, x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // TODO: transformScale stuff
    drawCircleFromAngles(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, a1: number, a2: number) {
        ctx.moveTo(x + radius, y);
        ctx.arc(x, y, radius, a1, a2, true);
        ctx.stroke();
    }

    // TODO: transformScale stuff
    drawCircleWithColor(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
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

    // TODO: transformScale stuff
    drawArcs(ctx: CanvasRenderingContext2D, arcs: SSLFieldCircularArc[]) {
        for (let arc of arcs) {
            let { center, radius, thickness } = arc;
            let oldStrokeWidth = ctx.lineWidth;
            ctx.lineWidth = scale(thickness);
            this.drawCircle(ctx, scale(center?.x!), scale(center?.y!), scale(radius!));
            ctx.lineWidth = oldStrokeWidth;
        }
    }

    render() {
        return <canvas className="fieldCanvas" ref={this.state.canvas} />;
    }
}

export default Field;