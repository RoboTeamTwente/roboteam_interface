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

import { ModuleState } from "../../Networking/proto_build/State"

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
export function getPhantomModuleState(): ModuleState {

    let data = [10, 173, 13, 10, 170, 13, 10, 190, 4, 8, 221, 231, 133, 233, 5, 34, 36, 8, 1, 18, 10, 13, 169, 201, 73, 64, 21, 160, 20, 71, 192, 29, 115, 234, 73, 61, 34, 10, 13, 91, 14, 6, 192, 21, 111, 29, 160, 190, 45, 235, 155, 61, 192, 34, 36, 8, 3, 18, 10, 13, 188, 177, 129, 64, 21, 245, 246, 91, 191, 29, 178, 96, 140, 63, 34, 10, 13, 149, 1, 222, 62, 21, 80, 97, 47, 63, 45, 105, 19, 106, 62, 34, 36, 8, 4, 18, 10, 13, 219, 178, 183, 64, 21, 79, 33, 137, 64, 29, 42, 10, 236, 191, 34, 10, 13, 8, 94, 27, 62, 21, 164, 170, 234, 61, 45, 172, 254, 245, 62, 34, 36, 8, 5, 18, 10, 13, 67, 195, 210, 63, 21, 173, 121, 169, 62, 29, 230, 167, 103, 63, 34, 10, 13, 194, 130, 53, 192, 21, 184, 148, 189, 61, 45, 146, 123, 171, 189, 34, 36, 8, 6, 18, 10, 13, 46, 184, 201, 191, 21, 251, 96, 96, 191, 29, 30, 125, 28, 190, 34, 10, 13, 159, 46, 27, 192, 21, 238, 136, 61, 63, 45, 173, 195, 138, 191, 34, 36, 8, 10, 18, 10, 13, 144, 86, 186, 192, 21, 163, 61, 37, 61, 29, 200, 66, 221, 62, 34, 10, 13, 140, 179, 80, 60, 21, 113, 149, 50, 61, 45, 25, 106, 64, 190, 34, 36, 8, 11, 18, 10, 13, 135, 235, 99, 64, 21, 157, 131, 198, 63, 29, 235, 131, 151, 63, 34, 10, 13, 63, 24, 13, 63, 21, 250, 105, 140, 62, 45, 70, 201, 169, 190, 42, 34, 18, 10, 13, 64, 225, 187, 64, 21, 8, 57, 23, 63, 29, 138, 27, 193, 63, 34, 10, 13, 51, 90, 142, 186, 21, 97, 55, 137, 58, 45, 246, 0, 118, 188, 42, 36, 8, 1, 18, 10, 13, 114, 229, 182, 64, 21, 194, 151, 131, 64, 29, 216, 18, 167, 63, 34, 10, 13, 245, 126, 11, 62, 21, 92, 74, 174, 61, 45, 2, 130, 228, 190, 42, 36, 8, 4, 18, 10, 13, 48, 52, 136, 64, 21, 217, 206, 61, 62, 29, 204, 32, 167, 63, 34, 10, 13, 1, 14, 0, 191, 21, 118, 205, 118, 63, 45, 136, 192, 138, 62, 42, 36, 8, 5, 18, 10, 13, 239, 186, 172, 64, 21, 135, 73, 174, 63, 29, 202, 104, 242, 63, 34, 10, 13, 6, 188, 54, 63, 21, 226, 11, 64, 189, 45, 187, 189, 145, 63, 42, 36, 8, 6, 18, 10, 13, 215, 143, 176, 64, 21, 90, 159, 176, 63, 29, 173, 51, 206, 63, 34, 10, 13, 88, 136, 215, 189, 21, 56, 183, 9, 59, 45, 57, 16, 25, 190, 42, 36, 8, 7, 18, 10, 13, 105, 54, 146, 64, 21, 3, 63, 26, 191, 29, 46, 1, 172, 63, 34, 10, 13, 70, 106, 89, 63, 21, 119, 195, 229, 60, 45, 135, 113, 151, 61, 42, 36, 8, 9, 18, 10, 13, 131, 32, 159, 64, 21, 119, 39, 167, 191, 29, 70, 240, 190, 63, 34, 10, 13, 231, 36, 3, 191, 21, 202, 199, 112, 188, 45, 189, 170, 28, 190, 42, 36, 8, 11, 18, 10, 13, 152, 16, 123, 64, 21, 131, 148, 179, 63, 29, 110, 112, 130, 63, 34, 10, 13, 124, 199, 57, 62, 21, 227, 34, 22, 63, 45, 129, 64, 110, 62, 34, 22, 18, 20, 13, 236, 81, 184, 61, 21, 154, 153, 25, 62, 29, 205, 204, 204, 61, 37, 205, 204, 204, 61, 42, 22, 18, 20, 13, 236, 81, 184, 61, 21, 154, 153, 25, 62, 29, 205, 204, 204, 61, 37, 205, 204, 204, 61, 50, 162, 6, 10, 139, 5, 8, 174, 93, 16, 148, 70, 24, 176, 9, 32, 180, 1, 40, 172, 2, 50, 43, 10, 12, 84, 111, 112, 84, 111, 117, 99, 104, 76, 105, 110, 101, 18, 10, 13, 0, 184, 186, 197, 21, 0, 80, 140, 69, 26, 10, 13, 0, 184, 186, 69, 21, 0, 80, 140, 69, 37, 0, 0, 72, 66, 50, 46, 10, 15, 66, 111, 116, 116, 111, 109, 84, 111, 117, 99, 104, 76, 105, 110, 101, 18, 10, 13, 0, 184, 186, 197, 21, 0, 80, 140, 197, 26, 10, 13, 0, 184, 186, 69, 21, 0, 80, 140, 197, 37, 0, 0, 72, 66, 50, 43, 10, 12, 76, 101, 102, 116, 71, 111, 97, 108, 76, 105, 110, 101, 18, 10, 13, 0, 184, 186, 197, 21, 0, 80, 140, 197, 26, 10, 13, 0, 184, 186, 197, 21, 0, 80, 140, 69, 37, 0, 0, 72, 66, 50, 44, 10, 13, 82, 105, 103, 104, 116, 71, 111, 97, 108, 76, 105, 110, 101, 18, 10, 13, 0, 184, 186, 69, 21, 0, 80, 140, 197, 26, 10, 13, 0, 184, 186, 69, 21, 0, 80, 140, 69, 37, 0, 0, 72, 66, 50, 32, 10, 11, 72, 97, 108, 102, 119, 97, 121, 76, 105, 110, 101, 18, 5, 21, 0, 80, 140, 197, 26, 5, 21, 0, 80, 140, 69, 37, 0, 0, 72, 66, 50, 31, 10, 10, 67, 101, 110, 116, 101, 114, 76, 105, 110, 101, 18, 5, 13, 0, 184, 186, 197, 26, 5, 13, 0, 184, 186, 69, 37, 0, 0, 72, 66, 50, 49, 10, 18, 76, 101, 102, 116, 80, 101, 110, 97, 108, 116, 121, 83, 116, 114, 101, 116, 99, 104, 18, 10, 13, 0, 216, 149, 197, 21, 0, 224, 146, 196, 26, 10, 13, 0, 216, 149, 197, 21, 0, 224, 146, 68, 37, 0, 0, 72, 66, 50, 50, 10, 19, 82, 105, 103, 104, 116, 80, 101, 110, 97, 108, 116, 121, 83, 116, 114, 101, 116, 99, 104, 18, 10, 13, 0, 216, 149, 69, 21, 0, 224, 146, 196, 26, 10, 13, 0, 216, 149, 69, 21, 0, 224, 146, 68, 37, 0, 0, 72, 66, 50, 58, 10, 27, 76, 101, 102, 116, 70, 105, 101, 108, 100, 76, 101, 102, 116, 80, 101, 110, 97, 108, 116, 121, 83, 116, 114, 101, 116, 99, 104, 18, 10, 13, 0, 184, 186, 197, 21, 0, 224, 146, 196, 26, 10, 13, 0, 216, 149, 197, 21, 0, 224, 146, 196, 37, 0, 0, 72, 66, 50, 59, 10, 28, 76, 101, 102, 116, 70, 105, 101, 108, 100, 82, 105, 103, 104, 116, 80, 101, 110, 97, 108, 116, 121, 83, 116, 114, 101, 116, 99, 104, 18, 10, 13, 0, 184, 186, 197, 21, 0, 224, 146, 68, 26, 10, 13, 0, 216, 149, 197, 21, 0, 224, 146, 68, 37, 0, 0, 72, 66, 50, 60, 10, 29, 82, 105, 103, 104, 116, 70, 105, 101, 108, 100, 82, 105, 103, 104, 116, 80, 101, 110, 97, 108, 116, 121, 83, 116, 114, 101, 116, 99, 104, 18, 10, 13, 0, 184, 186, 69, 21, 0, 224, 146, 196, 26, 10, 13, 0, 216, 149, 69, 21, 0, 224, 146, 196, 37, 0, 0, 72, 66, 50, 59, 10, 28, 82, 105, 103, 104, 116, 70, 105, 101, 108, 100, 76, 101, 102, 116, 80, 101, 110, 97, 108, 116, 121, 83, 116, 114, 101, 116, 99, 104, 18, 10, 13, 0, 184, 186, 69, 21, 0, 224, 146, 68, 26, 10, 13, 0, 216, 149, 69, 21, 0, 224, 146, 68, 37, 0, 0, 72, 66, 58, 36, 10, 12, 67, 101, 110, 116, 101, 114, 67, 105, 114, 99, 108, 101, 18, 0, 29, 0, 0, 250, 67, 37, 0, 0, 0, 0, 45, 219, 15, 201, 64, 53, 0, 0, 32, 65, 18, 72, 8, 0, 21, 239, 187, 182, 68, 29, 109, 154, 175, 68, 37, 25, 63, 116, 68, 45, 0, 0, 0, 0, 53, 145, 199, 54, 191, 61, 174, 53, 51, 191, 69, 216, 10, 86, 188, 77, 42, 173, 10, 59, 85, 126, 195, 36, 196, 93, 231, 83, 80, 69, 101, 0, 72, 194, 69, 109, 121, 213, 87, 197, 117, 234, 140, 29, 68, 125, 18, 81, 192, 69, 18, 72, 8, 1, 21, 4, 125, 171, 68, 29, 0, 0, 150, 68, 37, 0, 128, 137, 68, 45, 211, 22, 87, 187, 53, 81, 188, 50, 63, 61, 159, 57, 55, 191, 69, 157, 246, 20, 59, 77, 156, 225, 134, 188, 85, 80, 33, 222, 66, 93, 96, 169, 25, 69, 101, 0, 80, 190, 69, 109, 63, 132, 33, 69, 117, 137, 53, 81, 67, 125, 43, 153, 188, 69, 58, 141, 1, 8, 231, 129, 216, 145, 251, 161, 227, 2, 16, 4, 24, 232, 167, 192, 246, 1, 32, 10, 40, 178, 22, 48, 181, 133, 207, 143, 251, 161, 227, 2, 58, 42, 10, 8, 69, 82, 45, 70, 111, 114, 99, 101, 16, 0, 24, 0, 34, 4, 244, 138, 240, 17, 40, 2, 48, 4, 56, 128, 198, 134, 143, 1, 64, 10, 72, 6, 80, 0, 96, 1, 104, 7, 112, 0, 66, 35, 10, 8, 90, 74, 85, 78, 108, 105, 99, 116, 16, 0, 24, 0, 40, 1, 48, 3, 56, 180, 179, 150, 113, 64, 0, 72, 3, 80, 0, 96, 1, 104, 8, 112, 0, 74, 10, 13, 0, 0, 0, 128, 21, 0, 0, 0, 128, 80, 1, 120, 222, 191, 39, 96, 255, 255, 255, 255, 255, 255, 255, 255, 255, 1, 90, 129, 1, 8, 231, 129, 216, 145, 251, 161, 227, 2, 16, 4, 24, 232, 167, 192, 246, 1, 32, 10, 40, 178, 22, 48, 181, 133, 207, 143, 251, 161, 227, 2, 58, 42, 10, 8, 69, 82, 45, 70, 111, 114, 99, 101, 16, 0, 24, 0, 34, 4, 244, 138, 240, 17, 40, 2, 48, 4, 56, 128, 198, 134, 143, 1, 64, 10, 72, 6, 80, 0, 96, 1, 104, 7, 112, 0, 66, 35, 10, 8, 90, 74, 85, 78, 108, 105, 99, 116, 16, 0, 24, 0, 40, 1, 48, 3, 56, 180, 179, 150, 113, 64, 0, 72, 3, 80, 0, 96, 1, 104, 8, 112, 0, 80, 1, 120, 222, 191, 39, 96, 255, 255, 255, 255, 255, 255, 255, 255, 255, 1];
    let uintArr = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
        uintArr[i] = data[i];
    }
    return ModuleState.decode(uintArr);
}