import React, {Component, PureComponent} from 'react'

interface StpStateWidgetState { }
interface StpStateWidgetProps { }

export class StpStateWidget extends PureComponent<StpStateWidgetState, StpStateWidgetProps> {
    constructor(props: StpStateWidgetProps) {
        super(props);
        this.state = {}
    }

    // Some STP states stuff will be passed here
    // tick(data: ) {
    // 
    // }

    render() {
        return (
            <>
                Some STP information here
            </>
        )
    }
}

export default StpStateWidget
