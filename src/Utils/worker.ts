
// eslint-disable-next-line no-restricted-globals
import {ModuleState} from "../Networking/proto_build/State";

// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

ctx.addEventListener("message", (event) => {ctx.postMessage(ModuleState.decode(event.data as Uint8Array))});

export {};