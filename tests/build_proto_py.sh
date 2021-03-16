rm -rf ./proto_build
mkdir ./proto_build
protoc -I ../src/Networking/roboteam_proto/proto --python_out=./proto_build  State.proto World.proto Handshake.proto RobotParameters.proto messages_robocup_ssl_wrapper.proto messages_robocup_ssl_referee.proto UiOptions.proto WorldBall.proto WorldRobot.proto Vector2f.proto messages_robocup_ssl_detection.proto messages_robocup_ssl_geometry.proto messages_robocup_ssl_game_controller_geometry.proto messages_robocup_ssl_game_event.proto messages_robocup_ssl_game_controller_common.proto
