/* eslint-disable */
import * as Long from "long";
import { GameEvent } from "./messages_robocup_ssl_game_event";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "proto";

/** Each UDP packet contains one of these messages. */
export interface SSLReferee {
  /**
   * The UNIX timestamp when the packet was sent, in microseconds.
   * Divide by 1,000,000 to get a time_t.
   */
  packetTimestamp: Long;
  stage: SSLReferee_Stage;
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
  command: SSLReferee_Command;
  /** The number of commands issued since startup (mod 2^32). */
  commandCounter: number;
  /**
   * The UNIX timestamp when the command was issued, in microseconds.
   * This value changes only when a new command is issued, not on each packet.
   */
  commandTimestamp: Long;
  /** Information about the two teams. */
  yellow: SSLReferee_TeamInfo | undefined;
  blue: SSLReferee_TeamInfo | undefined;
  designatedPosition: SSLReferee_Point | undefined;
  /**
   * Information about the direction of play.
   * True, if the blue team will have it's goal on the positive x-axis of the ssl-vision coordinate system.
   * Obviously, the yellow team will play on the opposite half.
   */
  blueTeamOnPositiveHalf: boolean;
  /** The command that will be issued after the current stoppage and ball placement to continue the game. */
  nextCommand: SSLReferee_Command;
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
export enum SSLReferee_Stage {
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

/** These are the "fine" states of play on the field. */
export enum SSLReferee_Command {
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

/** Information about a single team. */
export interface SSLReferee_TeamInfo {
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
export interface SSLReferee_Point {
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

const baseSSLReferee: object = {
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

export const SSLReferee = {
  encode(message: SSLReferee, writer: Writer = Writer.create()): Writer {
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
      SSLReferee_TeamInfo.encode(
        message.yellow,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.blue !== undefined) {
      SSLReferee_TeamInfo.encode(
        message.blue,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.designatedPosition !== undefined) {
      SSLReferee_Point.encode(
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

  decode(input: Reader | Uint8Array, length?: number): SSLReferee {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(baseSSLReferee) as SSLReferee;
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
          message.yellow = SSLReferee_TeamInfo.decode(reader, reader.uint32());
          break;
        case 8:
          message.blue = SSLReferee_TeamInfo.decode(reader, reader.uint32());
          break;
        case 9:
          message.designatedPosition = SSLReferee_Point.decode(
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
};

const baseSSLReferee_TeamInfo: object = {
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

export const SSLReferee_TeamInfo = {
  encode(
    message: SSLReferee_TeamInfo,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): SSLReferee_TeamInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLReferee_TeamInfo
    ) as SSLReferee_TeamInfo;
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
};

const baseSSLReferee_Point: object = { x: 0, y: 0 };

export const SSLReferee_Point = {
  encode(message: SSLReferee_Point, writer: Writer = Writer.create()): Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SSLReferee_Point {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseSSLReferee_Point
    ) as SSLReferee_Point;
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
};

const baseGameEventProposalGroup: object = { accepted: false };

export const GameEventProposalGroup = {
  encode(
    message: GameEventProposalGroup,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.gameEvent) {
      GameEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.accepted === true) {
      writer.uint32(16).bool(message.accepted);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GameEventProposalGroup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = globalThis.Object.create(
      baseGameEventProposalGroup
    ) as GameEventProposalGroup;
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
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();
