// import Long from "long";
// import { Handshake } from "../../Networking/proto_build/Handshake";
// import { SSLGeometryData, SSLGeometryFieldSize } from "../../Networking/proto_build/messages_robocup_ssl_geometry";
// import { RobotParameters, TeamParameters } from "../../Networking/proto_build/RobotParameters";
// import { ModuleState, State, SystemState } from "../../Networking/proto_build/State";
// import { UiOption } from "../../Networking/proto_build/UiOptions";
// import { Vector2f } from "../../Networking/proto_build/Vector2f";
// import { World } from "../../Networking/proto_build/World";
// import { WorldBall } from "../../Networking/proto_build/WorldBall";
// import { WorldRobot } from "../../Networking/proto_build/WorldRobot";

// export function getPhantomUiOptions(): Array<UiOption> {
//     let residual = {
//         slider: undefined,
//         dropdown: undefined,
//         radiobutton: undefined,
//         textfield: undefined
//     };

//     return [{
//         name: "phantom_ui_option",
//         checkbox: {
//             text: "Some checkbox",
//             default: true
//         },
//         ...residual
//     }];
// }

// export function getPhantomHandshake(name: string): Handshake {
//     return {
//         name: name,
//         options: getPhantomUiOptions()
//     }
// }

// export function getPhantomHandshakes(): Array<Handshake> {
//     return [
//         getPhantomHandshake("module_one"),
//         getPhantomHandshake("module_two")
//     ];
// }

// export function getPhantomVector2f(x: number, y: number): Vector2f {
//     return {
//         x, y
//     }
// }

// export function getPhantomWorldBall(): WorldBall {
//     return {
//         area: 2,
//         pos: getPhantomVector2f(20, 20),
//         z: 0,
//         vel: getPhantomVector2f(1, 1),
//         zVel: 0,
//         visible: true,
//     }
// }

// export function getPhantomWorldRobot(id: number): WorldRobot {
//     return {
//         id,
//         pos: getPhantomVector2f(id * 10, id * 10),
//         angle: 0,
//         vel: getPhantomVector2f(id, id),
//         w: 10
//     }
// }

// export function getPhantomYellowRobots(): Array<WorldRobot> {
//     // Sometimes typescript does get on my nerves
//     // Why does IterableIterator<number> not have map()
//     return [...Array.from(Array(11).keys()).map(getPhantomWorldRobot)];
// }

// export function getPhantomBlueRobots(): Array<WorldRobot> {
//     // Sometimes typescript does get on my nerves
//     // Why does IterableIterator<number> not have map()
//     return [...Array.from(Array(11).keys()).map(getPhantomWorldRobot)];
// }


// export function getPhantomWorld(): World {
//     return {
//         time: new Long(2),
//         id: 60 * 2,
//         ball: getPhantomWorldBall(),
//         yellow: getPhantomYellowRobots(),
//         blue: getPhantomBlueRobots()
//     }
// }

// export function getPhantomRobotParameters(radius: number, height: number, frontWidth: number, dribblerWidth: number, angleOffset: number): RobotParameters {
//     return {
//         radius,
//         height,
//         frontWidth,
//         dribblerWidth,
//         angleOffset
//     }
// }

// export function getPhantomTeamParameters() : TeamParameters {
//     return {
//         didChange: true,
//         parameters: getPhantomRobotParameters(30, 20, 10, 8, 0)
//     }
// }

// export function getPhantomSSLGeometryFieldSize(): SSLGeometryFieldSize {

// }

// export function getPhantomSSLGeometryData() : SSLGeometryData {
//     return {
//         field: getPhantomSSLGeometryFieldSize(),
//         calib: [],
//     }
// }

// export function getPhantomState(): State {
//     return {
//         lastSeenWorld: getPhantomWorld(),
//         commandExtrapolatedWorld: undefined,
//         ballCameraWorld: undefined,
//         blueRobotParameters: getPhantomTeamParameters(),
//         yellowRobotParameters: getPhantomTeamParameters(),
//         field: getPhantomSSLGeometryData(),
//         referee: undefined,
//         processedRefereePackets: [],
//         processedVisionPackets: [],
//     }
// }

// export function getPhantomUiSettings(): State { }

// export function getPhantomSystemState(): SystemState { }

// export function getPhantomModuleState(): ModuleState {
//     let state: ModuleState = {
//         handshakes: getPhantomHandshakes(),
//         systemState: {
//             state: State
//         }
//     };
// }

export {}