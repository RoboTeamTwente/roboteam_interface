import * as React from 'react';
import {PossibleUiValue, UiOption, UiSettings} from "../../Networking/proto_build/UiOptions";

type RemoteUIProps = {
    values: UiSettings | undefined;
    options: UiOption[] | undefined;
    onChange: (name: string, newValue: PossibleUiValue) => void;

    name: string;
};

abstract class RemoteUIReactComponent extends React.Component<RemoteUIProps, any> {
    protected abstract subscribedValues(): string[];

    constructor(props: any) {
        super(props);
    }

    public shouldComponentUpdate(nextProps: Readonly<RemoteUIProps>, nextState: Readonly<any>, nextContext: any): boolean {
        const valuesToCheck = this.subscribedValues();

        if (this.state !== nextState) return true;

        for (const value of valuesToCheck) {
            const nextValue = nextProps.values!.uiValues[value];
            const thisValue = this.props.values!.uiValues[value];

            if (nextValue?.boolValue !== thisValue?.boolValue ||
                nextValue?.floatValue !== thisValue?.floatValue ||
                nextValue?.integerValue !== thisValue?.integerValue ||
                nextValue?.textValue !== thisValue?.textValue) {

                return true;
            }
        }

        return false;
    }
}

export default RemoteUIReactComponent
