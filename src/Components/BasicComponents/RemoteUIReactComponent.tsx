import * as React from 'react';
import {PossibleUiValue, UiOption, UiSettings} from "../../Networking/proto_build/UiOptions";
import {findUIOptionByName} from "../Util";
import shallowequal from "shallowequal";
import {ModuleState} from "../../Networking/proto_build/State";

export type RemoteUIProps = {
    state: ModuleState
    onChange: (name: string, newValue: PossibleUiValue) => void;

    name: string;
};

class RemoteUIReactComponent extends React.Component<RemoteUIProps, any> {
    public shouldComponentUpdate(nextProps: Readonly<RemoteUIProps>, nextState: Readonly<any>, nextContext: any): boolean {
        const valuesToCheck = this.subscribedValues();

        if (this.state !== nextState) return true;

        for (const value of valuesToCheck) {
            const nextValue = nextProps.state.systemState?.uiSettings?.uiValues?.[value];
            const thisValue = this.props.state.systemState?.uiSettings?.uiValues?.[value];

            const thisDef = findUIOptionByName(value, this.props.state.handshakes?.[0]?.options);
            const nextDef = findUIOptionByName(value, this.props.state.handshakes?.[0]?.options);

            if (!shallowequal(thisDef, nextDef)) return true;
            if (!shallowequal(nextValue, thisValue)) return true;
        }

        return false;
    }

    protected subscribedValues(): string[] {
        return [this.props.name];
    }
}

export default RemoteUIReactComponent
