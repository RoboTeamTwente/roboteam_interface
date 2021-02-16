import * as React from 'react';
import {PossibleUiValue, UiOption} from "../../Networking/proto_build/UiOptions";

export abstract class RemoteUIReactComponent extends React.Component<{valueList: Map<string, {value: PossibleUiValue, decl: UiOption}>}, any> {
    protected abstract subscribedValues(): string[];

    public shouldComponentUpdate(nextProps: Readonly<{ valueList: Map<string, { value: PossibleUiValue, decl: UiOption }> }>, nextState: Readonly<any>, nextContext: any): boolean {

        const valuesToCheck = this.subscribedValues();

        for (const value of valuesToCheck) {
            const nextValue = nextProps.valueList.get(value)?.value;
            const thisValue = this.props.valueList.get(value)?.value;

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
