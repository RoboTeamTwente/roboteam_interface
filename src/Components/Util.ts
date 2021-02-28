import {UiOption} from "../Networking/proto_build/UiOptions";

export function hostnamePortPairToWSURL(host: string, port: number | string, path: string): string {
    return "ws://" + host + ":" + port + "/" + path;
}

export function findUIOptionByName(name: string, options: UiOption[]): UiOption | undefined {
    for (const option of options) {
        if (option.name === name) {
            return option;
        }
    }
    return undefined;
}

export function findUIOptionIndexByName(name: string, options: UiOption[]): number | undefined {
    for (let i = 0; i < options.length; i++) {
        if (options[i].name === name) {
            return i;
        }
    }

    return undefined;
}