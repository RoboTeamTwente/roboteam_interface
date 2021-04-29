#!/usr/bin/env python3

import asyncio
import websockets
from State_pb2 import ModuleState
from Handshake_pb2 import Handshake
from UiOptions_pb2 import Dropdown, UiOptionDeclaration, UiOptionDeclarations
from UiOptions_pb2 import TextField

PORT = 1234
HOST = "localhost"


def build_message():
    modStat = ModuleState()
    handshake = Handshake()
    option = UiOptionDeclaration()
    element = Dropdown()

    element.text = "1111"
    element.default = 1
    element.options.extend(["grSim", "someOtherSim"])

    option.name = "simulator"
    option.is_mutable = True
    option.description = "aaaa"
    option.dropdown.CopyFrom(element)
    handshake.module_name = "test"
    handshake.declarations.options.extend([option])
    modStat.handshakes.extend([handshake])
    return modStat

async def handler(websocket, path):
    while True:
        # data = build_message()

        data = build_message().SerializeToString()
        await websocket.send(data)
        data = await websocket.recv()
        if data == None:
            break

        # print(data)
        modStat = ModuleState() 
        modStat.ParseFromString(data)
        # print(modStat)

start_server = websockets.serve(handler, HOST, PORT)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

# print(build_message())