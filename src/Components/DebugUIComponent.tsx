import * as React from 'react';
import RemoteUIReactComponent from "./Abstract/AbstractRemoteSubscribedReactComponent"

class DebugUIComponent extends  RemoteUIReactComponent {
    public render() {
        return (<div>{this.props.valueList}
                <p>Working!</p>
        </div>)
    }

    protected subscribedValues(): string[] {
        return [];
    }
}

export default DebugUIComponent;