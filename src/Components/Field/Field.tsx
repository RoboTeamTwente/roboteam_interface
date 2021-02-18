import * as React from 'react';
import { ModuleState } from '../../Networking/proto_build/State';

interface FieldProps {
    height: number;
    width: number;
}
interface FieldState {
    state: ModuleState | null;
    canvas: React.RefObject<HTMLCanvasElement>;
}

class Field extends React.Component<FieldProps, FieldState> {
    constructor(props: FieldProps) {
        super(props);
        this.state = {
            state: null,
            canvas: React.createRef<HTMLCanvasElement>()
        };
    }

    public componentDidMount() {
        this.update();
    }

    public update() {
        const ctx = this.state.canvas.current?.getContext("2d");
        if (ctx == null) {
            return;
        }
        ctx.lineWidth = 1;

        // Draw the outlines of the field
        console.log(this.props, this.state)
        ctx.rect(0, 0, this.props.width, this.props.height);
        ctx.moveTo(this.props.width / 2, 0);
        ctx.lineTo(this.props.width / 2, this.props.height);
        ctx.moveTo(this.props.width / 2 + 100, this.props.height / 2);
        ctx.arc(this.props.width / 2, this.props.height / 2, 100, 0, 2 * Math.PI);
        ctx.stroke();
    }

    public render() {
        return <canvas ref={this.state.canvas} height={this.props.height} width={this.props.width} />;
    }
}

export default Field;