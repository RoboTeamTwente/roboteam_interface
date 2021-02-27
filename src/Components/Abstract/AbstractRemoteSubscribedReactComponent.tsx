import * as React from 'react';
import {PossibleUiValue} from "../../Networking/proto_build/UiOptions";

abstract class RemoteUIReactComponent extends React.Component<{valueList: {[p: string]: PossibleUiValue} | undefined}, any> {
    protected abstract subscribedValues(): string[];

    public shouldComponentUpdate(nextProps: Readonly<{ valueList: {[p: string]: PossibleUiValue} | undefined }>, nextState: Readonly<any>, nextContext: any): boolean {

        const valuesToCheck = this.subscribedValues();

        for (const value of valuesToCheck) {
            const nextValue = nextProps.valueList![value];
            const thisValue = this.props.valueList![value];

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
