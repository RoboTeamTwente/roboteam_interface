import * as React from 'react';
import { ModuleState } from '../../Networking/proto_build/State';
import { getPhantomModuleState } from '../PhantomData/State';

interface FieldProps {
    height: number;
    width: number;
}
interface FieldState {
    state: ModuleState | null;
    canvas: React.RefObject<HTMLCanvasElement>;
}

class Field extends React.Component<FieldProps, FieldState> {
    fieldWidthOffset: number;
    fieldHeightOffset: number;
    constructor(props: FieldProps) {
        super(props);
        this.state = {
            state: null,
            canvas: React.createRef<HTMLCanvasElement>()
        };

        this.fieldWidthOffset = 5;
        this.fieldHeightOffset = 5;

        this.update = this.update.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    public getWidth() {
        return this.props.width - this.fieldWidthOffset * 2;
    }

    public getHeight() {
        return this.props.height - this.fieldHeightOffset * 2;
    }

    public componentDidMount() {
        let data = getPhantomModuleState();
        this.update(data);
        this.draw(data);
    }

    public update(state: ModuleState) {
        this.setState({
            state: state,
            canvas: this.state.canvas
        });
    }

    public draw(state: ModuleState | null) {
        const ctx = this.state.canvas.current?.getContext("2d");
        
        if (ctx == null) {
            return;
        }

        if (state == null) {
            return;
        }

        ctx.lineWidth = 1;

        // Draw the outlines of the field
        console.log(this.props, state)
        ctx.fillStyle = "#23272a";
        ctx.fillRect(0, 0, this.props.width, this.props.height);
        ctx.strokeStyle = "#ffffff";
        ctx.rect(this.fieldWidthOffset, this.fieldHeightOffset, this.getWidth(), this.getHeight());
        ctx.moveTo(this.getWidth() / 2, this.fieldWidthOffset);
        ctx.lineTo(this.getWidth() / 2, this.props.height - this.fieldHeightOffset);
        ctx.moveTo(this.getWidth() / 2 + 100, this.getHeight() / 2);
        ctx.arc(this.getWidth() / 2, this.getHeight() / 2, 100, 0, 2 * Math.PI);
        ctx.stroke();
    }

    public render() {
        return <canvas ref={this.state.canvas} height={this.props.height} width={this.props.width} />;
    }
}

export default Field;