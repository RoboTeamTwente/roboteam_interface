/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { GameEvent } from "./messages_robocup_ssl_game_event";

export const protobufPackage = "proto";

/** Each UDP packet contains one of these messages. */
export interface SslReferee {
  /**
   * The UNIX timestamp when the packet was sent, in microseconds.
   * Divide by 1,000,000 to get a time_t.
   */
  packetTimestamp: Long;
  stage: SslReferee_Stage;
  /**
   * The number of microseconds left in the stage.
   * The following stages have this value; the rest do not:
   * NORMAL_FIRST_HALF
   * NORMAL_HALF_TIME
   * NORMAL_SECOND_HALF
   * EXTRA_TIME_BREAK
   * EXTRA_FIRST_HALF
   * EXTRA_HALF_TIME
   * EXTRA_SECOND_HALF
   * PENALTY_SHOOTOUT_BREAK
   *
   * If the stage runs over its specified time, this value
   * becomes negative.
   */
  stageTimeLeft: number;
  command: SslReferee_Command;
  /** The number of commands issued since startup (mod 2^32). */
  commandCounter: number;
  /**
   * The UNIX timestamp when the command was issued, in microseconds.
   * This value changes only when a new command is issued, not on each packet.
   */
  commandTimestamp: Long;
  /** Information about the two teams. */
  yellow: SslReferee_TeamInfo | undefined;
  blue: SslReferee_TeamInfo | undefined;
  designatedPosition: SslReferee_Point | undefined;
  /**
   * Information about the direction of play.
   * True, if the blue team will have it's goal on the positive x-axis of the ssl-vision coordinate system.
   * Obviously, the yellow team will play on the opposite half.
   */
  blueTeamOnPositiveHalf: boolean;
  /** The command that will be issued after the current stoppage and ball placement to continue the game. */
  nextCommand: SslReferee_Command;
  gameEvents: GameEvent[];
  gameEventProposals: GameEventProposalGroup[];
  /**
   * The time in microseconds that is remaining until the current action times out
   * The time will not be reset. It can get negative.
   * An autoRef would raise an appropriate event, if the time gets negative.
   * Possible actions where this time is relevant:
   *  * free kicks
   *  * kickoff, penalty kick, force start
   *  * ball placement
   */
  currentActionTimeRemaining: number;
}

/** These are the "coarse" stages of the game. */
export enum SslReferee_Stage {
  /**
   * NORMAL_FIRST_HALF_PRE - The first half is about to start.
   * A kickoff is called within this stage.
   * This stage ends with the NORMAL_START.
   */
  NORMAL_FIRST_HALF_PRE = 0,
  /** NORMAL_FIRST_HALF - The first half of the normal game, before half time. */
  NORMAL_FIRST_HALF = 1,
  /** NORMAL_HALF_TIME - Half time between first and second halves. */
  NORMAL_HALF_TIME = 2,
  /**
   * NORMAL_SECOND_HALF_PRE - The second half is about to start.
   * A kickoff is called within this stage.
   * This stage ends with the NORMAL_START.
   */
  NORMAL_SECOND_HALF_PRE = 3,
  /** NORMAL_SECOND_HALF - The second half of the normal game, after half time. */
  NORMAL_SECOND_HALF = 4,
  /** EXTRA_TIME_BREAK - The break before extra time. */
  EXTRA_TIME_BREAK = 5,
  /**
   * EXTRA_FIRST_HALF_PRE - The first half of extra time is about to start.
   * A kickoff is called within this stage.
   * This stage ends with the NORMAL_START.
   */
  EXTRA_FIRST_HALF_PRE = 6,
  /** EXTRA_FIRST_HALF - The first half of extra time. */
  EXTRA_FIRST_HALF = 7,
  /** EXTRA_HALF_TIME - Half time between first and second extra halves. */
  EXTRA_HALF_TIME = 8,
  /**
   * EXTRA_SECOND_HALF_PRE - The second half of extra time is about to start.
   * A kickoff is called within this stage.
   * This stage ends with the NORMAL_START.
   */
  EXTRA_SECOND_HALF_PRE = 9,
  /** EXTRA_SECOND_HALF - The second half of extra time. */
  EXTRA_SECOND_HALF = 10,
  /** PENALTY_SHOOTOUT_BREAK - The break before penalty shootout. */
  PENALTY_SHOOTOUT_BREAK = 11,
  /** PENALTY_SHOOTOUT - The penalty shootout. */
  PENALTY_SHOOTOUT = 12,
  /** POST_GAME - The game is over. */
  POST_GAME = 13,
  UNRECOGNIZED = -1,
}

export function sslReferee_StageFromJSON(object: any): SslReferee_Stage {
  switch (object) {
    case 0:
    case "NORMAL_FIRST_HALF_PRE":
      return SslReferee_Stage.NORMAL_FIRST_HALF_PRE;
    case 1:
    case "NORMAL_FIRST_HALF":
      return SslReferee_Stage.NORMAL_FIRST_HALF;
    case 2:
    case "NORMAL_HALF_TIME":
      return SslReferee_Stage.NORMAL_HALF_TIME;
    case 3:
    case "NORMAL_SECOND_HALF_PRE":
      return SslReferee_Stage.NORMAL_SECOND_HALF_PRE;
    case 4:
    case "NORMAL_SECOND_HALF":
      return SslReferee_Stage.NORMAL_SECOND_HALF;
    case 5:
    case "EXTRA_TIME_BREAK":
      return SslReferee_Stage.EXTRA_TIME_BREAK;
    case 6:
    case "EXTRA_FIRST_HALF_PRE":
      return SslReferee_Stage.EXTRA_FIRST_HALF_PRE;
    case 7:
    case "EXTRA_FIRST_HALF":
      return SslReferee_Stage.EXTRA_FIRST_HALF;
    case 8:
    case "EXTRA_HALF_TIME":
      return SslReferee_Stage.EXTRA_HALF_TIME;
    case 9:
    case "EXTRA_SECOND_HALF_PRE":
      return SslReferee_Stage.EXTRA_SECOND_HALF_PRE;
    case 10:
    case "EXTRA_SECOND_HALF":
      return SslReferee_Stage.EXTRA_SECOND_HALF;
    case 11:
    case "PENALTY_SHOOTOUT_BREAK":
      return SslReferee_Stage.PENALTY_SHOOTOUT_BREAK;
    case 12:
    case "PENALTY_SHOOTOUT":
      return SslReferee_Stage.PENALTY_SHOOTOUT;
    case 13:
    case "POST_GAME":
      return SslReferee_Stage.POST_GAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SslReferee_Stage.UNRECOGNIZED;
  }
}

export function sslReferee_StageToJSON(object: SslReferee_Stage): string {
  switch (object) {
    case SslReferee_Stage.NORMAL_FIRST_HALF_PRE:
      return "NORMAL_FIRST_HALF_PRE";
    case SslReferee_Stage.NORMAL_FIRST_HALF:
      return "NORMAL_FIRST_HALF";
    case SslReferee_Stage.NORMAL_HALF_TIME:
      return "NORMAL_HALF_TIME";
    case SslReferee_Stage.NORMAL_SECOND_HALF_PRE:
      return "NORMAL_SECOND_HALF_PRE";
    case SslReferee_Stage.NORMAL_SECOND_HALF:
      return "NORMAL_SECOND_HALF";
    case SslReferee_Stage.EXTRA_TIME_BREAK:
      return "EXTRA_TIME_BREAK";
    case SslReferee_Stage.EXTRA_FIRST_HALF_PRE:
      return "EXTRA_FIRST_HALF_PRE";
    case SslReferee_Stage.EXTRA_FIRST_HALF:
      return "EXTRA_FIRST_HALF";
    case SslReferee_Stage.EXTRA_HALF_TIME:
      return "EXTRA_HALF_TIME";
    case SslReferee_Stage.EXTRA_SECOND_HALF_PRE:
      return "EXTRA_SECOND_HALF_PRE";
    case SslReferee_Stage.EXTRA_SECOND_HALF:
      return "EXTRA_SECOND_HALF";
    case SslReferee_Stage.PENALTY_SHOOTOUT_BREAK:
      return "PENALTY_SHOOTOUT_BREAK";
    case SslReferee_Stage.PENALTY_SHOOTOUT:
      return "PENALTY_SHOOTOUT";
    case SslReferee_Stage.POST_GAME:
      return "POST_GAME";
    default:
      return "UNKNOWN";
  }
}

/** These are the "fine" states of play on the field. */
export enum SslReferee_Command {
  /** HALT - All robots should completely stop moving. */
  HALT = 0,
  /** STOP - Robots must keep 50 cm from the ball. */
  STOP = 1,
  /** NORMAL_START - A prepared kickoff or penalty may now be taken. */
  NORMAL_START = 2,
  /** FORCE_START - The ball is dropped and free for either team. */
  FORCE_START = 3,
  /** PREPARE_KICKOFF_YELLOW - The yellow team may move into kickoff position. */
  PREPARE_KICKOFF_YELLOW = 4,
  /** PREPARE_KICKOFF_BLUE - The blue team may move into kickoff position. */
  PREPARE_KICKOFF_BLUE = 5,
  /** PREPARE_PENALTY_YELLOW - The yellow team may move into penalty position. */
  PREPARE_PENALTY_YELLOW = 6,
  /** PREPARE_PENALTY_BLUE - The blue team may move into penalty position. */
  PREPARE_PENALTY_BLUE = 7,
  /** DIRECT_FREE_YELLOW - The yellow team may take a direct free kick. */
  DIRECT_FREE_YELLOW = 8,
  /** DIRECT_FREE_BLUE - The blue team may take a direct free kick. */
  DIRECT_FREE_BLUE = 9,
  /** INDIRECT_FREE_YELLOW - The yellow team may take an indirect free kick. */
  INDIRECT_FREE_YELLOW = 10,
  /** INDIRECT_FREE_BLUE - The blue team may take an indirect free kick. */
  INDIRECT_FREE_BLUE = 11,
  /** TIMEOUT_YELLOW - The yellow team is currently in a timeout. */
  TIMEOUT_YELLOW = 12,
  /** TIMEOUT_BLUE - The blue team is currently in a timeout. */
  TIMEOUT_BLUE = 13,
  /**
   * GOAL_YELLOW - The yellow team just scored a goal.
   * For information only.
   * For rules compliance, teams must treat as STOP.
   * Deprecated: Use the score field from the team infos instead. That way, you can also detect revoked goals.
   *
   * @deprecated
   */
  GOAL_YELLOW = 14,
  /**
   * GOAL_BLUE - The blue team just scored a goal. See also GOAL_YELLOW.
   *
   * @deprecated
   */
  GOAL_BLUE = 15,
  /**
   * BALL_PLACEMENT_YELLOW - Equivalent to STOP, but the yellow team must pick up the ball and
   * drop it in the Designated Position.
   */
  BALL_PLACEMENT_YELLOW = 16,
  /**
   * BALL_PLACEMENT_BLUE - Equivalent to STOP, but the blue team must pick up the ball and drop
   * it in the Designated Position.
   */
  BALL_PLACEMENT_BLUE = 17,
  UNRECOGNIZED = -1,
}

export function sslReferee_CommandFromJSON(object: any): SslReferee_Command {
  switch (object) {
    case 0:
    case "HALT":
      return SslReferee_Command.HALT;
    case 1:
    case "STOP":
      return SslReferee_Command.STOP;
    case 2:
    case "NORMAL_START":
      return SslReferee_Command.NORMAL_START;
    case 3:
    case "FORCE_START":
      return SslReferee_Command.FORCE_START;
    case 4:
    case "PREPARE_KICKOFF_YELLOW":
      return SslReferee_Command.PREPARE_KICKOFF_YELLOW;
    case 5:
    case "PREPARE_KICKOFF_BLUE":
      return SslReferee_Command.PREPARE_KICKOFF_BLUE;
    case 6:
    case "PREPARE_PENALTY_YELLOW":
      return SslReferee_Command.PREPARE_PENALTY_YELLOW;
    case 7:
    case "PREPARE_PENALTY_BLUE":
      return SslReferee_Command.PREPARE_PENALTY_BLUE;
    case 8:
    case "DIRECT_FREE_YELLOW":
      return SslReferee_Command.DIRECT_FREE_YELLOW;
    case 9:
    case "DIRECT_FREE_BLUE":
      return SslReferee_Command.DIRECT_FREE_BLUE;
    case 10:
    case "INDIRECT_FREE_YELLOW":
      return SslReferee_Command.INDIRECT_FREE_YELLOW;
    case 11:
    case "INDIRECT_FREE_BLUE":
      return SslReferee_Command.INDIRECT_FREE_BLUE;
    case 12:
    case "TIMEOUT_YELLOW":
      return SslReferee_Command.TIMEOUT_YELLOW;
    case 13:
    case "TIMEOUT_BLUE":
      return SslReferee_Command.TIMEOUT_BLUE;
    case 14:
    case "GOAL_YELLOW":
      return SslReferee_Command.GOAL_YELLOW;
    case 15:
    case "GOAL_BLUE":
      return SslReferee_Command.GOAL_BLUE;
    case 16:
    case "BALL_PLACEMENT_YELLOW":
      return SslReferee_Command.BALL_PLACEMENT_YELLOW;
    case 17:
    case "BALL_PLACEMENT_BLUE":
      return SslReferee_Command.BALL_PLACEMENT_BLUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SslReferee_Command.UNRECOGNIZED;
  }
}

export function sslReferee_CommandToJSON(object: SslReferee_Command): string {
  switch (object) {
    case SslReferee_Command.HALT:
      return "HALT";
    case SslReferee_Command.STOP:
      return "STOP";
    case SslReferee_Command.NORMAL_START:
      return "NORMAL_START";
    case SslReferee_Command.FORCE_START:
      return "FORCE_START";
    case SslReferee_Command.PREPARE_KICKOFF_YELLOW:
      return "PREPARE_KICKOFF_YELLOW";
    case SslReferee_Command.PREPARE_KICKOFF_BLUE:
      return "PREPARE_KICKOFF_BLUE";
    case SslReferee_Command.PREPARE_PENALTY_YELLOW:
      return "PREPARE_PENALTY_YELLOW";
    case SslReferee_Command.PREPARE_PENALTY_BLUE:
      return "PREPARE_PENALTY_BLUE";
    case SslReferee_Command.DIRECT_FREE_YELLOW:
      return "DIRECT_FREE_YELLOW";
    case SslReferee_Command.DIRECT_FREE_BLUE:
      return "DIRECT_FREE_BLUE";
    case SslReferee_Command.INDIRECT_FREE_YELLOW:
      return "INDIRECT_FREE_YELLOW";
    case SslReferee_Command.INDIRECT_FREE_BLUE:
      return "INDIRECT_FREE_BLUE";
    case SslReferee_Command.TIMEOUT_YELLOW:
      return "TIMEOUT_YELLOW";
    case SslReferee_Command.TIMEOUT_BLUE:
      return "TIMEOUT_BLUE";
    case SslReferee_Command.GOAL_YELLOW:
      return "GOAL_YELLOW";
    case SslReferee_Command.GOAL_BLUE:
      return "GOAL_BLUE";
    case SslReferee_Command.BALL_PLACEMENT_YELLOW:
      return "BALL_PLACEMENT_YELLOW";
    case SslReferee_Command.BALL_PLACEMENT_BLUE:
      return "BALL_PLACEMENT_BLUE";
    default:
      return "UNKNOWN";
  }
}

/** Information about a single team. */
export interface SslReferee_TeamInfo {
  /** The team's name (empty string if operator has not typed anything). */
  name: string;
  /** The number of goals scored by the team during normal play and overtime. */
  score: number;
  /** The number of red cards issued to the team since the beginning of the game. */
  redCards: number;
  /**
   * The amount of time (in microseconds) left on each yellow card issued to the team.
   * If no yellow cards are issued, this array has no elements.
   * Otherwise, times are ordered from smallest to largest.
   */
  yellowCardTimes: number[];
  /** The total number of yellow cards ever issued to the team. */
  yellowCards: number;
  /**
   * The number of timeouts this team can still call.
   * If in a timeout right now, that timeout is excluded.
   */
  timeouts: number;
  /** The number of microseconds of timeout this team can use. */
  timeoutTime: number;
  /** The pattern number of this team's goalkeeper. */
  goalkeeper: number;
  /** The total number of countable fouls that act towards yellow cards */
  foulCounter: number;
  /** The number of consecutive ball placement failures of this team */
  ballPlacementFailures: number;
  /** Indicate if the team is able and allowed to place the ball */
  canPlaceBall: boolean;
  /** The maximum number of bots allowed on the field based on division and cards */
  maxAllowedBots: number;
  /** The team has submitted an intent to substitute one or more robots at the next chance */
  botSubstitutionIntent: boolean;
  /** Indicate if the team reached the maximum allowed ball placement failures and is thus not allowed to place the ball anymore */
  ballPlacementFailuresReached: boolean;
}

/**
 * The coordinates of the Designated Position. These are measured in
 * millimetres and correspond to SSL-Vision coordinates. These fields are
 * always either both present (in the case of a ball placement command) or
 * both absent (in the case of any other command).
 */
export interface SslReferee_Point {
  x: number;
  y: number;
}

/** List of matching proposals */
export interface GameEventProposalGroup {
  /** The proposed game event. */
  gameEvent: GameEvent[];
  /** Whether the proposal group was accepted */
  accepted: boolean;
}

const baseSslReferee: object = {
  packetTimestamp: Long.UZERO,
  stage: 0,
  stageTimeLeft: 0,
  command: 0,
  commandCounter: 0,
  commandTimestamp: Long.UZERO,
  blueTeamOnPositiveHalf: false,
  nextCommand: 0,
  currentActionTimeRemaining: 0,
};

export const SslReferee = {
  encode(
    message: SslReferee,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.packetTimestamp.isZero()) {
      writer.uint32(8).uint64(message.packetTimestamp);
    }
    if (message.stage !== 0) {
      writer.uint32(16).int32(message.stage);
    }
    if (message.stageTimeLeft !== 0) {
      writer.uint32(24).sint32(message.stageTimeLeft);
    }
    if (message.command !== 0) {
      writer.uint32(32).int32(message.command);
    }
    if (message.commandCounter !== 0) {
      writer.uint32(40).uint32(message.commandCounter);
    }
    if (!message.commandTimestamp.isZero()) {
      writer.uint32(48).uint64(message.commandTimestamp);
    }
    if (message.yellow !== undefined) {
      SslReferee_TeamInfo.encode(
        message.yellow,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.blue !== undefined) {
      SslReferee_TeamInfo.encode(
        message.blue,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.designatedPosition !== undefined) {
      SslReferee_Point.encode(
        message.designatedPosition,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.blueTeamOnPositiveHalf === true) {
      writer.uint32(80).bool(message.blueTeamOnPositiveHalf);
    }
    if (message.nextCommand !== 0) {
      writer.uint32(96).int32(message.nextCommand);
    }
    for (const v of message.gameEvents) {
      GameEvent.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.gameEventProposals) {
      GameEventProposalGroup.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.currentActionTimeRemaining !== 0) {
      writer.uint32(120).int32(message.currentActionTimeRemaining);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SslReferee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSslReferee } as SslReferee;
    message.gameEvents = [];
    message.gameEventProposals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetTimestamp = reader.uint64() as Long;
          break;
        case 2:
          message.stage = reader.int32() as any;
          break;
        case 3:
          message.stageTimeLeft = reader.sint32();
          break;
        case 4:
          message.command = reader.int32() as any;
          break;
        case 5:
          message.commandCounter = reader.uint32();
          break;
        case 6:
          message.commandTimestamp = reader.uint64() as Long;
          break;
        case 7:
          message.yellow = SslReferee_TeamInfo.decode(reader, reader.uint32());
          break;
        case 8:
          message.blue = SslReferee_TeamInfo.decode(reader, reader.uint32());
          break;
        case 9:
          message.designatedPosition = SslReferee_Point.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.blueTeamOnPositiveHalf = reader.bool();
          break;
        case 12:
          message.nextCommand = reader.int32() as any;
          break;
        case 16:
          message.gameEvents.push(GameEvent.decode(reader, reader.uint32()));
          break;
        case 17:
          message.gameEventProposals.push(
            GameEventProposalGroup.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.currentActionTimeRemaining = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SslReferee {
    const message = { ...baseSslReferee } as SslReferee;
    message.gameEvents = [];
    message.gameEventProposals = [];
    if (
      object.packetTimestamp !== undefined &&
      object.packetTimestamp !== null
    ) {
      message.packetTimestamp = Long.fromString(object.packetTimestamp);
    } else {
      message.packetTimestamp = Long.UZERO;
    }
    if (object.stage !== undefined && object.stage !== null) {
      message.stage = sslReferee_StageFromJSON(object.stage);
    } else {
      message.stage = 0;
    }
    if (object.stageTimeLeft !== undefined && object.stageTimeLeft !== null) {
      message.stageTimeLeft = Number(object.stageTimeLeft);
    } else {
      message.stageTimeLeft = 0;
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = sslReferee_CommandFromJSON(object.command);
    } else {
      message.command = 0;
    }
    if (object.commandCounter !== undefined && object.commandCounter !== null) {
      message.commandCounter = Number(object.commandCounter);
    } else {
      message.commandCounter = 0;
    }
    if (
      object.commandTimestamp !== undefined &&
      object.commandTimestamp !== null
    ) {
      message.commandTimestamp = Long.fromString(object.commandTimestamp);
    } else {
      message.commandTimestamp = Long.UZERO;
    }
    if (object.yellow !== undefined && object.yellow !== null) {
      message.yellow = SslReferee_TeamInfo.fromJSON(object.yellow);
    } else {
      message.yellow = undefined;
    }
    if (object.blue !== undefined && object.blue !== null) {
      message.blue = SslReferee_TeamInfo.fromJSON(object.blue);
    } else {
      message.blue = undefined;
    }
    if (
      object.designatedPosition !== undefined &&
      object.designatedPosition !== null
    ) {
      message.designatedPosition = SslReferee_Point.fromJSON(
        object.designatedPosition
      );
    } else {
      message.designatedPosition = undefined;
    }
    if (
      object.blueTeamOnPositiveHalf !== undefined &&
      object.blueTeamOnPositiveHalf !== null
    ) {
      message.blueTeamOnPositiveHalf = Boolean(object.blueTeamOnPositiveHalf);
    } else {
      message.blueTeamOnPositiveHalf = false;
    }
    if (object.nextCommand !== undefined && object.nextCommand !== null) {
      message.nextCommand = sslReferee_CommandFromJSON(object.nextCommand);
    } else {
      message.nextCommand = 0;
    }
    if (object.gameEvents !== undefined && object.gameEvents !== null) {
      for (const e of object.gameEvents) {
        message.gameEvents.push(GameEvent.fromJSON(e));
      }
    }
    if (
      object.gameEventProposals !== undefined &&
      object.gameEventProposals !== null
    ) {
      for (const e of object.gameEventProposals) {
        message.gameEventProposals.push(GameEventProposalGroup.fromJSON(e));
      }
    }
    if (
      object.currentActionTimeRemaining !== undefined &&
      object.currentActionTimeRemaining !== null
    ) {
      message.currentActionTimeRemaining = Number(
        object.currentActionTimeRemaining
      );
    } else {
      message.currentActionTimeRemaining = 0;
    }
    return message;
  },

  toJSON(message: SslReferee): unknown {
    const obj: any = {};
    message.packetTimestamp !== undefined &&
      (obj.packetTimestamp = (
        message.packetTimestamp || Long.UZERO
      ).toString());
    message.stage !== undefined &&
      (obj.stage = sslReferee_StageToJSON(message.stage));
    message.stageTimeLeft !== undefined &&
      (obj.stageTimeLeft = message.stageTimeLeft);
    message.command !== undefined &&
      (obj.command = sslReferee_CommandToJSON(message.command));
    message.commandCounter !== undefined &&
      (obj.commandCounter = message.commandCounter);
    message.commandTimestamp !== undefined &&
      (obj.commandTimestamp = (
        message.commandTimestamp || Long.UZERO
      ).toString());
    message.yellow !== undefined &&
      (obj.yellow = message.yellow
        ? SslReferee_TeamInfo.toJSON(message.yellow)
        : undefined);
    message.blue !== undefined &&
      (obj.blue = message.blue
        ? SslReferee_TeamInfo.toJSON(message.blue)
        : undefined);
    message.designatedPosition !== undefined &&
      (obj.designatedPosition = message.designatedPosition
        ? SslReferee_Point.toJSON(message.designatedPosition)
        : undefined);
    message.blueTeamOnPositiveHalf !== undefined &&
      (obj.blueTeamOnPositiveHalf = message.blueTeamOnPositiveHalf);
    message.nextCommand !== undefined &&
      (obj.nextCommand = sslReferee_CommandToJSON(message.nextCommand));
    if (message.gameEvents) {
      obj.gameEvents = message.gameEvents.map((e) =>
        e ? GameEvent.toJSON(e) : undefined
      );
    } else {
      obj.gameEvents = [];
    }
    if (message.gameEventProposals) {
      obj.gameEventProposals = message.gameEventProposals.map((e) =>
        e ? GameEventProposalGroup.toJSON(e) : undefined
      );
    } else {
      obj.gameEventProposals = [];
    }
    message.currentActionTimeRemaining !== undefined &&
      (obj.currentActionTimeRemaining = message.currentActionTimeRemaining);
    return obj;
  },

  fromPartial(object: DeepPartial<SslReferee>): SslReferee {
    const message = { ...baseSslReferee } as SslReferee;
    message.gameEvents = [];
    message.gameEventProposals = [];
    if (
      object.packetTimestamp !== undefined &&
      object.packetTimestamp !== null
    ) {
      message.packetTimestamp = object.packetTimestamp as Long;
    } else {
      message.packetTimestamp = Long.UZERO;
    }
    if (object.stage !== undefined && object.stage !== null) {
      message.stage = object.stage;
    } else {
      message.stage = 0;
    }
    if (object.stageTimeLeft !== undefined && object.stageTimeLeft !== null) {
      message.stageTimeLeft = object.stageTimeLeft;
    } else {
      message.stageTimeLeft = 0;
    }
    if (object.command !== undefined && object.command !== null) {
      message.command = object.command;
    } else {
      message.command = 0;
    }
    if (object.commandCounter !== undefined && object.commandCounter !== null) {
      message.commandCounter = object.commandCounter;
    } else {
      message.commandCounter = 0;
    }
    if (
      object.commandTimestamp !== undefined &&
      object.commandTimestamp !== null
    ) {
      message.commandTimestamp = object.commandTimestamp as Long;
    } else {
      message.commandTimestamp = Long.UZERO;
    }
    if (object.yellow !== undefined && object.yellow !== null) {
      message.yellow = SslReferee_TeamInfo.fromPartial(object.yellow);
    } else {
      message.yellow = undefined;
    }
    if (object.blue !== undefined && object.blue !== null) {
      message.blue = SslReferee_TeamInfo.fromPartial(object.blue);
    } else {
      message.blue = undefined;
    }
    if (
      object.designatedPosition !== undefined &&
      object.designatedPosition !== null
    ) {
      message.designatedPosition = SslReferee_Point.fromPartial(
        object.designatedPosition
      );
    } else {
      message.designatedPosition = undefined;
    }
    if (
      object.blueTeamOnPositiveHalf !== undefined &&
      object.blueTeamOnPositiveHalf !== null
    ) {
      message.blueTeamOnPositiveHalf = object.blueTeamOnPositiveHalf;
    } else {
      message.blueTeamOnPositiveHalf = false;
    }
    if (object.nextCommand !== undefined && object.nextCommand !== null) {
      message.nextCommand = object.nextCommand;
    } else {
      message.nextCommand = 0;
    }
    if (object.gameEvents !== undefined && object.gameEvents !== null) {
      for (const e of object.gameEvents) {
        message.gameEvents.push(GameEvent.fromPartial(e));
      }
    }
    if (
      object.gameEventProposals !== undefined &&
      object.gameEventProposals !== null
    ) {
      for (const e of object.gameEventProposals) {
        message.gameEventProposals.push(GameEventProposalGroup.fromPartial(e));
      }
    }
    if (
      object.currentActionTimeRemaining !== undefined &&
      object.currentActionTimeRemaining !== null
    ) {
      message.currentActionTimeRemaining = object.currentActionTimeRemaining;
    } else {
      message.currentActionTimeRemaining = 0;
    }
    return message;
  },
};

const baseSslReferee_TeamInfo: object = {
  name: "",
  score: 0,
  redCards: 0,
  yellowCardTimes: 0,
  yellowCards: 0,
  timeouts: 0,
  timeoutTime: 0,
  goalkeeper: 0,
  foulCounter: 0,
  ballPlacementFailures: 0,
  canPlaceBall: false,
  maxAllowedBots: 0,
  botSubstitutionIntent: false,
  ballPlacementFailuresReached: false,
};

export const SslReferee_TeamInfo = {
  encode(
    message: SslReferee_TeamInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.score !== 0) {
      writer.uint32(16).uint32(message.score);
    }
    if (message.redCards !== 0) {
      writer.uint32(24).uint32(message.redCards);
    }
    writer.uint32(34).fork();
    for (const v of message.yellowCardTimes) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.yellowCards !== 0) {
      writer.uint32(40).uint32(message.yellowCards);
    }
    if (message.timeouts !== 0) {
      writer.uint32(48).uint32(message.timeouts);
    }
    if (message.timeoutTime !== 0) {
      writer.uint32(56).uint32(message.timeoutTime);
    }
    if (message.goalkeeper !== 0) {
      writer.uint32(64).uint32(message.goalkeeper);
    }
    if (message.foulCounter !== 0) {
      writer.uint32(72).uint32(message.foulCounter);
    }
    if (message.ballPlacementFailures !== 0) {
      writer.uint32(80).uint32(message.ballPlacementFailures);
    }
    if (message.canPlaceBall === true) {
      writer.uint32(96).bool(message.canPlaceBall);
    }
    if (message.maxAllowedBots !== 0) {
      writer.uint32(104).uint32(message.maxAllowedBots);
    }
    if (message.botSubstitutionIntent === true) {
      writer.uint32(112).bool(message.botSubstitutionIntent);
    }
    if (message.ballPlacementFailuresReached === true) {
      writer.uint32(120).bool(message.ballPlacementFailuresReached);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SslReferee_TeamInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSslReferee_TeamInfo } as SslReferee_TeamInfo;
    message.yellowCardTimes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.score = reader.uint32();
          break;
        case 3:
          message.redCards = reader.uint32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.yellowCardTimes.push(reader.uint32());
            }
          } else {
            message.yellowCardTimes.push(reader.uint32());
          }
          break;
        case 5:
          message.yellowCards = reader.uint32();
          break;
        case 6:
          message.timeouts = reader.uint32();
          break;
        case 7:
          message.timeoutTime = reader.uint32();
          break;
        case 8:
          message.goalkeeper = reader.uint32();
          break;
        case 9:
          message.foulCounter = reader.uint32();
          break;
        case 10:
          message.ballPlacementFailures = reader.uint32();
          break;
        case 12:
          message.canPlaceBall = reader.bool();
          break;
        case 13:
          message.maxAllowedBots = reader.uint32();
          break;
        case 14:
          message.botSubstitutionIntent = reader.bool();
          break;
        case 15:
          message.ballPlacementFailuresReached = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SslReferee_TeamInfo {
    const message = { ...baseSslReferee_TeamInfo } as SslReferee_TeamInfo;
    message.yellowCardTimes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = Number(object.score);
    } else {
      message.score = 0;
    }
    if (object.redCards !== undefined && object.redCards !== null) {
      message.redCards = Number(object.redCards);
    } else {
      message.redCards = 0;
    }
    if (
      object.yellowCardTimes !== undefined &&
      object.yellowCardTimes !== null
    ) {
      for (const e of object.yellowCardTimes) {
        message.yellowCardTimes.push(Number(e));
      }
    }
    if (object.yellowCards !== undefined && object.yellowCards !== null) {
      message.yellowCards = Number(object.yellowCards);
    } else {
      message.yellowCards = 0;
    }
    if (object.timeouts !== undefined && object.timeouts !== null) {
      message.timeouts = Number(object.timeouts);
    } else {
      message.timeouts = 0;
    }
    if (object.timeoutTime !== undefined && object.timeoutTime !== null) {
      message.timeoutTime = Number(object.timeoutTime);
    } else {
      message.timeoutTime = 0;
    }
    if (object.goalkeeper !== undefined && object.goalkeeper !== null) {
      message.goalkeeper = Number(object.goalkeeper);
    } else {
      message.goalkeeper = 0;
    }
    if (object.foulCounter !== undefined && object.foulCounter !== null) {
      message.foulCounter = Number(object.foulCounter);
    } else {
      message.foulCounter = 0;
    }
    if (
      object.ballPlacementFailures !== undefined &&
      object.ballPlacementFailures !== null
    ) {
      message.ballPlacementFailures = Number(object.ballPlacementFailures);
    } else {
      message.ballPlacementFailures = 0;
    }
    if (object.canPlaceBall !== undefined && object.canPlaceBall !== null) {
      message.canPlaceBall = Boolean(object.canPlaceBall);
    } else {
      message.canPlaceBall = false;
    }
    if (object.maxAllowedBots !== undefined && object.maxAllowedBots !== null) {
      message.maxAllowedBots = Number(object.maxAllowedBots);
    } else {
      message.maxAllowedBots = 0;
    }
    if (
      object.botSubstitutionIntent !== undefined &&
      object.botSubstitutionIntent !== null
    ) {
      message.botSubstitutionIntent = Boolean(object.botSubstitutionIntent);
    } else {
      message.botSubstitutionIntent = false;
    }
    if (
      object.ballPlacementFailuresReached !== undefined &&
      object.ballPlacementFailuresReached !== null
    ) {
      message.ballPlacementFailuresReached = Boolean(
        object.ballPlacementFailuresReached
      );
    } else {
      message.ballPlacementFailuresReached = false;
    }
    return message;
  },

  toJSON(message: SslReferee_TeamInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.score !== undefined && (obj.score = message.score);
    message.redCards !== undefined && (obj.redCards = message.redCards);
    if (message.yellowCardTimes) {
      obj.yellowCardTimes = message.yellowCardTimes.map((e) => e);
    } else {
      obj.yellowCardTimes = [];
    }
    message.yellowCards !== undefined &&
      (obj.yellowCards = message.yellowCards);
    message.timeouts !== undefined && (obj.timeouts = message.timeouts);
    message.timeoutTime !== undefined &&
      (obj.timeoutTime = message.timeoutTime);
    message.goalkeeper !== undefined && (obj.goalkeeper = message.goalkeeper);
    message.foulCounter !== undefined &&
      (obj.foulCounter = message.foulCounter);
    message.ballPlacementFailures !== undefined &&
      (obj.ballPlacementFailures = message.ballPlacementFailures);
    message.canPlaceBall !== undefined &&
      (obj.canPlaceBall = message.canPlaceBall);
    message.maxAllowedBots !== undefined &&
      (obj.maxAllowedBots = message.maxAllowedBots);
    message.botSubstitutionIntent !== undefined &&
      (obj.botSubstitutionIntent = message.botSubstitutionIntent);
    message.ballPlacementFailuresReached !== undefined &&
      (obj.ballPlacementFailuresReached = message.ballPlacementFailuresReached);
    return obj;
  },

  fromPartial(object: DeepPartial<SslReferee_TeamInfo>): SslReferee_TeamInfo {
    const message = { ...baseSslReferee_TeamInfo } as SslReferee_TeamInfo;
    message.yellowCardTimes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    } else {
      message.score = 0;
    }
    if (object.redCards !== undefined && object.redCards !== null) {
      message.redCards = object.redCards;
    } else {
      message.redCards = 0;
    }
    if (
      object.yellowCardTimes !== undefined &&
      object.yellowCardTimes !== null
    ) {
      for (const e of object.yellowCardTimes) {
        message.yellowCardTimes.push(e);
      }
    }
    if (object.yellowCards !== undefined && object.yellowCards !== null) {
      message.yellowCards = object.yellowCards;
    } else {
      message.yellowCards = 0;
    }
    if (object.timeouts !== undefined && object.timeouts !== null) {
      message.timeouts = object.timeouts;
    } else {
      message.timeouts = 0;
    }
    if (object.timeoutTime !== undefined && object.timeoutTime !== null) {
      message.timeoutTime = object.timeoutTime;
    } else {
      message.timeoutTime = 0;
    }
    if (object.goalkeeper !== undefined && object.goalkeeper !== null) {
      message.goalkeeper = object.goalkeeper;
    } else {
      message.goalkeeper = 0;
    }
    if (object.foulCounter !== undefined && object.foulCounter !== null) {
      message.foulCounter = object.foulCounter;
    } else {
      message.foulCounter = 0;
    }
    if (
      object.ballPlacementFailures !== undefined &&
      object.ballPlacementFailures !== null
    ) {
      message.ballPlacementFailures = object.ballPlacementFailures;
    } else {
      message.ballPlacementFailures = 0;
    }
    if (object.canPlaceBall !== undefined && object.canPlaceBall !== null) {
      message.canPlaceBall = object.canPlaceBall;
    } else {
      message.canPlaceBall = false;
    }
    if (object.maxAllowedBots !== undefined && object.maxAllowedBots !== null) {
      message.maxAllowedBots = object.maxAllowedBots;
    } else {
      message.maxAllowedBots = 0;
    }
    if (
      object.botSubstitutionIntent !== undefined &&
      object.botSubstitutionIntent !== null
    ) {
      message.botSubstitutionIntent = object.botSubstitutionIntent;
    } else {
      message.botSubstitutionIntent = false;
    }
    if (
      object.ballPlacementFailuresReached !== undefined &&
      object.ballPlacementFailuresReached !== null
    ) {
      message.ballPlacementFailuresReached =
        object.ballPlacementFailuresReached;
    } else {
      message.ballPlacementFailuresReached = false;
    }
    return message;
  },
};

const baseSslReferee_Point: object = { x: 0, y: 0 };

export const SslReferee_Point = {
  encode(
    message: SslReferee_Point,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SslReferee_Point {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSslReferee_Point } as SslReferee_Point;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SslReferee_Point {
    const message = { ...baseSslReferee_Point } as SslReferee_Point;
    if (object.x !== undefined && object.x !== null) {
      message.x = Number(object.x);
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = Number(object.y);
    } else {
      message.y = 0;
    }
    return message;
  },

  toJSON(message: SslReferee_Point): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  fromPartial(object: DeepPartial<SslReferee_Point>): SslReferee_Point {
    const message = { ...baseSslReferee_Point } as SslReferee_Point;
    if (object.x !== undefined && object.x !== null) {
      message.x = object.x;
    } else {
      message.x = 0;
    }
    if (object.y !== undefined && object.y !== null) {
      message.y = object.y;
    } else {
      message.y = 0;
    }
    return message;
  },
};

const baseGameEventProposalGroup: object = { accepted: false };

export const GameEventProposalGroup = {
  encode(
    message: GameEventProposalGroup,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.gameEvent) {
      GameEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.accepted === true) {
      writer.uint32(16).bool(message.accepted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEventProposalGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEventProposalGroup } as GameEventProposalGroup;
    message.gameEvent = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameEvent.push(GameEvent.decode(reader, reader.uint32()));
          break;
        case 2:
          message.accepted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEventProposalGroup {
    const message = { ...baseGameEventProposalGroup } as GameEventProposalGroup;
    message.gameEvent = [];
    if (object.gameEvent !== undefined && object.gameEvent !== null) {
      for (const e of object.gameEvent) {
        message.gameEvent.push(GameEvent.fromJSON(e));
      }
    }
    if (object.accepted !== undefined && object.accepted !== null) {
      message.accepted = Boolean(object.accepted);
    } else {
      message.accepted = false;
    }
    return message;
  },

  toJSON(message: GameEventProposalGroup): unknown {
    const obj: any = {};
    if (message.gameEvent) {
      obj.gameEvent = message.gameEvent.map((e) =>
        e ? GameEvent.toJSON(e) : undefined
      );
    } else {
      obj.gameEvent = [];
    }
    message.accepted !== undefined && (obj.accepted = message.accepted);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEventProposalGroup>
  ): GameEventProposalGroup {
    const message = { ...baseGameEventProposalGroup } as GameEventProposalGroup;
    message.gameEvent = [];
    if (object.gameEvent !== undefined && object.gameEvent !== null) {
      for (const e of object.gameEvent) {
        message.gameEvent.push(GameEvent.fromPartial(e));
      }
    }
    if (object.accepted !== undefined && object.accepted !== null) {
      message.accepted = object.accepted;
    } else {
      message.accepted = false;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
