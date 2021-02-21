import * as React from 'react';
import { SSLFieldCircularArc, SSLFieldLineSegment } from '../../Networking/proto_build/messages_robocup_ssl_geometry';
import { ModuleState, State } from '../../Networking/proto_build/State';
import { World } from '../../Networking/proto_build/World';
import { scale, setFieldLength } from '../../Utils/Dimensions';
import { getPhantomModuleState } from '../PhantomData/State';

interface FieldProps { }

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
        let {
            fieldLength,
            fieldWidth,
        } = lastState.field!.field!;

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
        ctx.lineWidth = 2;

        // Draw the field
        // ctx.strokeStyle = "#000000";
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
        console.log(data);
        let {
            // fieldLength,
            // fieldWidth,
            // goalWidth,
            // goalDepth,
            // boundaryWidth,
            fieldLines,
            fieldArcs,
            // penaltyAreaDepth,
            // penaltyAreaWidth
        } = data;
        console.log(state);
        // let width = scale(fieldWidth);
        // let length = scale(fieldLength);
        this.drawLines(ctx, fieldLines);
        this.drawArcs(ctx, fieldArcs);
        // fieldLines = [fieldLines[0], fieldLines[1]];
    }

    drawWorld(ctx: CanvasRenderingContext2D, world: World, state: State) {
        let {
            yellow, blue, ball
        } = world;

        for (let each of yellow) {
            let { yellowRobotParameters } = state;
            let { x, y } = each.pos!;
            let realX = scale(x * 1000);
            let realY = scale(y * 1000);
            let realRadius = scale(yellowRobotParameters!.parameters!.radius! * 1000);
            this.drawCircleWithColor(ctx, realX, realY, realRadius, "yellow");
        }

        for (let each of blue) {
            let { blueRobotParameters } = state;
            let { x, y } = each.pos!;
            let realX = scale(x * 1000);
            let realY = scale(y * 1000);
            let realRadius = scale(blueRobotParameters!.parameters!.radius! * 1000);
            this.drawCircleWithColor(ctx, realX, realY, realRadius, "blue");
        }
        console.log(world);
    }

    drawLines(ctx: CanvasRenderingContext2D, lines: SSLFieldLineSegment[]) {
        for (let line of lines) {
            let {
                p1, p2
            } = line;
            ctx.moveTo(scale(p1!.x!), scale(p1!.y!));
            ctx.lineTo(scale(p2!.x!), scale(p2!.y!));
        }
    }

    drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
        ctx.moveTo(x + radius, y);
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    }

    drawCircleWithColor(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
        let oldColor = ctx.fillStyle;
        console.log(oldColor);
        ctx.fillStyle = color;
        this.drawCircle(ctx, x, y, radius);
        ctx.fill();
        ctx.fillStyle = oldColor;
    }

    drawArcs(ctx: CanvasRenderingContext2D, arcs: SSLFieldCircularArc[]) {
        for (let arc of arcs) {
            let { center, radius } = arc;
            this.drawCircle(ctx, scale(center?.x!), scale(center?.y!), scale(radius!));
        }
    }

    public render() {
        return <canvas id="myCanvas" className="fieldCanvas" ref={this.state.canvas} />;
    }
}

export default Field;