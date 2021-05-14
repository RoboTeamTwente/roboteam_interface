import * as React from 'react';
import {RefObject} from 'react';
import {SslFieldcirculararc, SslFieldlinesegment} from '../../Networking/proto_build/messages_robocup_ssl_geometry';
import {State} from '../../Networking/proto_build/State';
import {Vector2f} from '../../Networking/proto_build/Vector2f';
import {World} from '../../Networking/proto_build/World';
import {WorldBall} from '../../Networking/proto_build/WorldBall';
import {WorldRobot} from '../../Networking/proto_build/WorldRobot';
import {
    calculateCanvasSpecificScaling,
    calculateScalingForFitParent,
    getServerReportedLength,
    getServerReportedWidth,
    scaleForCanvas,
    setServerReportedFieldLength,
    setServerReportedFieldWidth
} from '../../Utils/Dimensions';

interface FieldProps {
    transformation: number; // degrees, valid values are 0, 90, 180, 270
}

interface FieldState {
    scale: number;
}

class Field extends React.Component<FieldProps, FieldState> {
    fieldWidthOffset: number;
    fieldHeightOffset: number;

    fieldCanvas: RefObject<HTMLCanvasElement>;
    robotsCanvas: RefObject<HTMLCanvasElement>;
    robotInfo: RefObject<HTMLCanvasElement>;
    ballCanvas: RefObject<HTMLCanvasElement>;
    recentStateCache: State | null;

    constructor(props: FieldProps) {
        super(props);
        this.recentStateCache = null;

        this.fieldWidthOffset = 0;
        this.fieldHeightOffset = 0;

        this.fieldCanvas = React.createRef();
        this.robotsCanvas = React.createRef();
        this.ballCanvas = React.createRef();
        this.robotInfo = React.createRef();

        this.update = this.update.bind(this);
        this.drawField = this.drawField.bind(this);
        this.reactToResize = this.reactToResize.bind(this);

        this.state = {scale: 1};
    }


    scaleTransform(x: number, y: number): { x: number, y: number } {
        for (let i = 0; i < this.props.transformation / 90; i++) {
            let xTemp = -y;
            y = x;
            x = xTemp;
        }
        return {
            x: scaleForCanvas(x),
            y: scaleForCanvas(y),
        }
    }

    scaleTransformVector(vec: Vector2f): { x: number, y: number } {
        return this.scaleTransform(vec.x, vec.y);
    }

    public update(state: State | null) {
        if (state == null) {
            return;
        }

        let {
            fieldLength,
            fieldWidth,
        } = state!.field!.field!;

        let world = state!.lastSeenWorld!;

        const shouldRedrawAll = this.updateDimensions(fieldLength, fieldWidth);

        if (shouldRedrawAll) {
            this.drawField(state);
        }

        this.drawWorld(world, this.recentStateCache, state, shouldRedrawAll);

        this.recentStateCache = state;
    }

    private updateDimensions(newLength: number, newWidth: number): boolean {
        setServerReportedFieldLength(newLength);
        setServerReportedFieldWidth(newWidth);

        calculateCanvasSpecificScaling();

        const scaledLength = scaleForCanvas(getServerReportedLength());
        const scaledWidth = scaleForCanvas(getServerReportedWidth());

        const desiredRatio = parseFloat((scaledLength / scaledWidth).toFixed(1));
        const currentRatio = parseFloat(((this.fieldCanvas.current?.width ?? 0) / (this.fieldCanvas.current?.height ?? 1)).toFixed(1));

        if (desiredRatio === currentRatio) {
            return false;
        }


        const allCanvases = [this.fieldCanvas, this.robotsCanvas, this.ballCanvas];
        for (let canvas of allCanvases) {
            if (canvas.current == null) {
                continue;
            }

            canvas.current.height = scaledWidth;
            canvas.current.width = scaledLength;
        }

        this.updateCanvasScaling();

        return true;
    }

    private updateCanvasScaling() {
        if (this.fieldCanvas.current == null) {
            return;
        }

        const newScale = parseFloat(calculateScalingForFitParent(this.fieldCanvas.current.parentElement).toFixed(2));
        if (newScale !== this.state.scale) {
            this.setState({scale: newScale})
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.reactToResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.reactToResize);
    }

    reactToResize() {
        this.updateCanvasScaling();
    }

    drawField(state: State) {
        const canvas = this.fieldCanvas.current;
        const ctx = canvas?.getContext("2d");
        if (ctx == null) {
            return;
        }
        console.log("Redrawing field");

        this.clearCanvas(ctx);

        let data = state.field!.field!;
        let {
            // goalWidth,
            // goalDepth,
            // boundaryWidth,
            fieldLines,
            fieldArcs,
            // penaltyAreaDepth,
            // penaltyAreaWidth
        } = data;

        ctx.save();
        ctx.translate(canvas!.width / 2, canvas!.height / 2);
        ctx.lineWidth = 1;

        this.drawLines(ctx, fieldLines);
        this.drawArcs(ctx, fieldArcs);
        ctx.restore();
        // ctx.stroke();
    }

    private clearCanvas(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
    }

    drawWorld(world: World, oldState: State | null, newState: State, shouldRedrawAll: boolean) {
        let {
            yellow, blue, ball
        } = world;

        const rightCanvas = this.robotsCanvas.current;
        const rightCtx = this.robotsCanvas.current?.getContext("2d");
        if (rightCtx != null) {
            if (shouldRedrawAll) {
                this.clearCanvas(rightCtx);
            }
            rightCtx.save();
            rightCtx!.translate(rightCanvas!.width / 2, rightCanvas!.height / 2);
            rightCtx!.lineWidth = 1;
            yellow.map(e => this.drawRobot(rightCtx!, oldState, newState, e, true, shouldRedrawAll));
            blue.map(e => this.drawRobot(rightCtx!, oldState, newState, e, false, shouldRedrawAll));
            rightCtx.restore();
            // rightCtx!.stroke();
        }

        const ballCanvas = this.ballCanvas.current;
        const ballCtx = this.ballCanvas.current?.getContext("2d");
        if (ballCtx != null) {
            ballCtx.save();
            ballCtx!.translate(ballCanvas!.width / 2, ballCanvas!.height / 2);
            ballCtx!.lineWidth = 1;
            if (ball !== undefined) {
                this.drawBall(ballCtx!, ball!);
                // ballCtx!.stroke();
            }
            ballCtx.restore();
        }
    }

    drawBall(ctx: CanvasRenderingContext2D, ball: WorldBall) {
        let {
            area,
            pos,
            vel
        } = ball;
        let {x, y} = this.scaleTransformVector(pos!);
        let realX = x * 1000;
        let realY = y * 1000;
        // let radius = Math.sqrt(area / Math.PI);
        let radius = scaleForCanvas(0.021333 * 1000) * 3.5;
        this.drawCircleWithColor(ctx, realX, realY, radius, "#ff7832");

        ctx.beginPath();
        ctx.moveTo(realX, realY);
        let velTrans = this.scaleTransformVector(vel!);
        ctx.lineTo(realX + velTrans.x, realY + velTrans.y);
        ctx.stroke();
    }

    removeRobot(ctx: CanvasRenderingContext2D, state: State, each: WorldRobot, yellow: boolean) {
        let robotParameters = yellow ? state.yellowRobotParameters! : state.blueRobotParameters!;
        let {vel, id, pos} = each;
        let {x, y} = this.scaleTransformVector(pos!);
        let realX = x * 1000;
        let realY = y * 1000;
        let realRadius = scaleForCanvas(robotParameters.parameters!.radius! * 1000);
        this.eraseCircle(ctx, realX, realY, realRadius);
    }

    findPreviousRobot(currentRobot: WorldRobot, previousState: State | null, yellow: boolean): WorldRobot | null {
        if (previousState == null) {
            return null;
        }
        const searchArea = yellow ? previousState.lastSeenWorld!.yellow : previousState.lastSeenWorld!.blue;

        const foundRobot = searchArea.find(value => value.id === currentRobot.id);
        return foundRobot ?? null;
    }

    areRobotsEqual(lhs: WorldRobot, rhs: WorldRobot) {
        return lhs.angle.toFixed(2) === rhs.angle.toFixed(2) &&
            Math.abs((lhs.w ?? 0) - (rhs.w ?? 0)) < 1 &&
            Math.abs((lhs.pos?.x ?? 0) - (rhs.pos?.x ?? 0)) < 0.001 &&
            Math.abs((lhs.pos?.y ?? 0) - (rhs.pos?.y ?? 0)) < 0.001 &&
            Math.abs((lhs.vel?.x ?? 0) - (rhs.vel?.x ?? 0)) < 2 &&
            Math.abs((lhs.vel?.y ?? 0) - (rhs.vel?.y ?? 0)) < 2;
    }


    drawRobot(ctx: CanvasRenderingContext2D, previousState: State | null, currentState: State, each: WorldRobot, yellow: boolean, shouldRedrawAll: boolean) {
        const previousInstance = this.findPreviousRobot(each, previousState, yellow);
        if (previousInstance != null && previousState != null && this.areRobotsEqual(previousInstance, each) && !shouldRedrawAll) {
            return;
        } else if (previousInstance != null && previousState != null && !this.areRobotsEqual(previousInstance, each)) {
            // debugger;

            console.log("Redrawing robot: " + each.id)
            this.removeRobot(ctx, previousState!, previousInstance!, yellow);
        }

        let robotParameters = yellow ? currentState.yellowRobotParameters! : currentState.blueRobotParameters!;
        let {vel, id, pos} = each;
        let {x, y} = this.scaleTransformVector(pos!);
        let realX = x * 1000;
        let realY = y * 1000;
        let realRadius = scaleForCanvas(robotParameters.parameters!.radius! * 1000);
        this.drawCircleWithColor(ctx, realX, realY, realRadius, yellow ? "#ffff00" : "#9696ff");
        ctx.font = "15px Arial";
        ctx.fillText(id.toString(), realX + realRadius + 1, realY + realRadius + 1);

        ctx.beginPath();
        ctx.moveTo(realX, realY);
        let realVel = this.scaleTransformVector(vel!);
        let velX = realVel.x * 1000;
        let velY = realVel.y * 1000;
        ctx.lineTo(realX + velX, realY + velY);
        ctx.stroke();
    }

    drawLines(ctx: CanvasRenderingContext2D, lines: SslFieldlinesegment[]) {
        for (let line of lines) {
            let {
                p1, p2, thickness
            } = line;
            let oldStrokeWidth = ctx.lineWidth;
            ctx.lineWidth = scaleForCanvas(thickness);

            ctx.beginPath()
            ctx.moveTo(scaleForCanvas(p1!.x!), scaleForCanvas(p1!.y!));
            ctx.lineTo(scaleForCanvas(p2!.x!), scaleForCanvas(p2!.y!));
            ctx.stroke();
            ctx.lineWidth = oldStrokeWidth;
        }
    }

    drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
        // ctx.beginPath();
        // ctx.moveTo(x + radius, y);
        this.drawCircleFromAngles(ctx, x, y, radius, 0, 2 * Math.PI);
        // ctx.stroke();
    }

    eraseCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
        ctx.save();
        // ctx.resetTransform();
        // ctx.
        // debugger;
        // ctx.moveTo(x + radius, y);
        // ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        // ctx.clip();
        ctx.beginPath();
        // ctx.rect(x - radius, y - radius, 2 * radius + 10, 2 * radius + 1);
        // ctx.stroke();
        ctx.clearRect(x - radius, y - radius, 2 * radius + 10, 2 * radius + 1);
        ctx.restore();
    }

    drawCircleFromAngles(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, a1: number, a2: number) {
        ctx.beginPath();
        // ctx.moveTo(x + radius, y);
        ctx.arc(x, y, radius, a1, a2, true);
        ctx.stroke();
    }

    drawCircleWithColor(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
        let oldColor = ctx.fillStyle;
        ctx.fillStyle = color;
        ctx.beginPath();
        // ctx.moveTo(x + radius, y);
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.fill();
        // ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = oldColor;
    }

    drawArcs(ctx: CanvasRenderingContext2D, arcs: SslFieldcirculararc[]) {
        for (let arc of arcs) {
            let {center, radius, thickness} = arc;
            let oldStrokeWidth = ctx.lineWidth;
            ctx.lineWidth = scaleForCanvas(thickness);
            this.drawCircle(ctx, scaleForCanvas(center?.x!), scaleForCanvas(center?.y!), scaleForCanvas(radius!));
            ctx.lineWidth = oldStrokeWidth;
        }
    }

    render() {
        const transformProp = {transform: "scale(" + this.state.scale + ")", transformOrigin: "0 0"};
        return (<div style={{position: "relative", width: "100%", height: "100%"}}>
            <canvas className="ballCanvas" ref={this.ballCanvas}
                    style={{zIndex: 4, position: "absolute", ...transformProp}}/>
            <canvas className="robotInfo" ref={this.robotInfo}
                    style={{zIndex: 3, position: "absolute", ...transformProp}}/>
            <canvas className="robots" ref={this.robotsCanvas}
                    style={{zIndex: 2, position: "absolute", ...transformProp}}/>
            <canvas className="fieldCanvas" ref={this.fieldCanvas}
                    style={{zIndex: 1, position: "absolute", ...transformProp}}/>
        </div>);
    }
}

export default Field;