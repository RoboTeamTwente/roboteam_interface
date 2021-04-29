import * as React from 'react';
import {
    UiOptionDeclarations, UiValue,
    UiValues
} from "../../Networking/proto_build/UiOptions";
import shallowequal from "shallowequal";
import {findUIOptionByName} from "../Util";

export type RemoteUIProps = {
    values: UiValues;
    decls: UiOptionDeclarations;

    onChange: (name: string, newValue: UiValue) => void;

    name: string;
};

// TODO: There is a little bit of duplicate code in the basic components. Components backed by the same basic types can be generalized
class RemoteUIReactComponent extends React.Component<{ui: RemoteUIProps}, any> {
    public shouldComponentUpdate(nextProps: Readonly<{ui: RemoteUIProps}>, nextState: Readonly<any>, nextContext: any): boolean {
        const valuesToCheck = this.subscribedValues();

        if (this.state !== nextState) return true;

        for (const value of valuesToCheck) {
            const nextValue = nextProps.ui.values.uiValues?.[value]
            const thisValue = this.props.ui.values.uiValues?.[value];

            const thisDef = findUIOptionByName(value, this.props.ui.decls);
            const nextDef = findUIOptionByName(value, nextProps.ui.decls);

            if (!shallowequal(thisDef, nextDef)) return true;
            if (!shallowequal(nextValue, thisValue)) return true;

            if (!shallowequal(thisDef?.checkbox, nextDef?.checkbox)) return true;
            if (!shallowequal(thisDef?.textfield, nextDef?.textfield)) return true;
            if (!shallowequal(thisDef?.dropdown, nextDef?.dropdown)) return true;
            if (!shallowequal(thisDef?.radiobutton, nextDef?.radiobutton)) return true;
            if (!shallowequal(thisDef?.slider, nextDef?.slider)) return true;
        }

        return false;
    }

    protected subscribedValues(): string[] {
        return [this.props.ui.name];
    }
}

export default RemoteUIReactComponent
