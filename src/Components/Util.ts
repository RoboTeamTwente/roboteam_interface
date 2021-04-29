import {UiOptionDeclaration, UiOptionDeclarations, UiValue, UiValues} from "../Networking/proto_build/UiOptions";
import {CONSTANTS} from "./Constants";
import {ModuleState} from "../Networking/proto_build/State";

export function hostnamePortPairToWSURL(host: string, port: number | string, path: string): string {
    return "ws://" + host + ":" + port + "/" + path;
}

export function findUIOptionByName(name: string, options: UiOptionDeclarations | undefined): UiOptionDeclaration | undefined {
    if (options == null) {
        return undefined;
    }

    for (const option of options.options) {
        if (option.name === name) {
            return option;
        }
    }
    return undefined;
}

export function saveServerPreferences(host: string, port: number) {
    localStorage.setItem(CONSTANTS.HOSTNAME_SETTINGS_KEY, host);
    localStorage.setItem(CONSTANTS.PORT_SETTINGS_KEY, port.toString());
}

export function getStartingPortHostnameCombination(): [string, number] {
    const port = Number(localStorage.getItem(CONSTANTS.PORT_SETTINGS_KEY) ?? CONSTANTS.DEFAULT_PORT);
    const host = localStorage.getItem(CONSTANTS.HOSTNAME_SETTINGS_KEY) ?? CONSTANTS.DEFAULT_HOSTNAME;

    saveServerPreferences(host, port);

    return [host, port];
}