#!/bin/bash

rm -rf ./proto_build
mkdir ./proto_build
protoc --plugin=../../node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=forceLong=long --ts_proto_opt=env=browser --ts_proto_opt=esModuleInterop=true --ts_proto_out=./proto_build --proto_path ./roboteam_proto/proto State.proto