import * as React from 'react';
import {PossibleUiValue, UiOption, UiSettings} from "../../Networking/proto_build/UiOptions";
import {findUIOptionByName} from "../Util";
import shallowequal from "shallowequal";

type RemoteUIProps = {
    values: UiSettings;
    options: UiOption[];
    onChange: (name: string, newValue: PossibleUiValue) => void;

    name: string;
};

class RemoteUIReactComponent extends React.Component<RemoteUIProps, any> {
    public shouldComponentUpdate(nextProps: Readonly<RemoteUIProps>, nextState: Readonly<any>, nextContext: any): boolean {
        const valuesToCheck = this.subscribedValues();

        if (this.state !== nextState) return true;

        for (const value of valuesToCheck) {
            const nextValue = nextProps.values?.uiValues[value];
            const thisValue = this.props.values?.uiValues[value];

            const thisDef = findUIOptionByName(value, this.props.options);
            const nextDef = findUIOptionByName(value, nextProps.options);

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
