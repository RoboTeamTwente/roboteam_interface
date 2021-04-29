/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  Team,
  teamFromJSON,
  teamToJSON,
} from "./messages_robocup_ssl_game_controller_common";
import { Vector2 } from "./messages_robocup_ssl_game_controller_geometry";

export const protobufPackage = "proto";

/**
 * GameEvent contains exactly one game event
 * Each game event has optional and required fields. The required fields are mandatory to process the event.
 * Some optional fields are only used for visualization, others are required to determine the ball placement position.
 * If fields are missing that are required for the ball placement position, no ball placement command will be issued.
 * Fields are marked optional to make testing and extending of the protocol easier.
 * An autoRef should ideally set all fields, except if there are good reasons to not do so.
 */
export interface GameEvent {
  type: GameEvent_Type;
  /**
   * The origins of this game event.
   * Empty, if it originates from game controller.
   * Contains autoRef name(s), if it originates from one or more autoRefs.
   * Ignored if sent by autoRef to game controller.
   */
  origin: string[];
  ballLeftFieldTouchLine: GameEvent_BallLeftField | undefined;
  ballLeftFieldGoalLine: GameEvent_BallLeftField | undefined;
  aimlessKick: GameEvent_AimlessKick | undefined;
  attackerTooCloseToDefenseArea:
    | GameEvent_AttackerTooCloseToDefenseArea
    | undefined;
  defenderInDefenseArea: GameEvent_DefenderInDefenseArea | undefined;
  boundaryCrossing: GameEvent_BoundaryCrossing | undefined;
  keeperHeldBall: GameEvent_KeeperHeldBall | undefined;
  botDribbledBallTooFar: GameEvent_BotDribbledBallTooFar | undefined;
  botPushedBot: GameEvent_BotPushedBot | undefined;
  botHeldBallDeliberately: GameEvent_BotHeldBallDeliberately | undefined;
  botTippedOver: GameEvent_BotTippedOver | undefined;
  attackerTouchedBallInDefenseArea:
    | GameEvent_AttackerTouchedBallInDefenseArea
    | undefined;
  botKickedBallTooFast: GameEvent_BotKickedBallTooFast | undefined;
  botCrashUnique: GameEvent_BotCrashUnique | undefined;
  botCrashDrawn: GameEvent_BotCrashDrawn | undefined;
  defenderTooCloseToKickPoint:
    | GameEvent_DefenderTooCloseToKickPoint
    | undefined;
  botTooFastInStop: GameEvent_BotTooFastInStop | undefined;
  botInterferedPlacement: GameEvent_BotInterferedPlacement | undefined;
  possibleGoal: GameEvent_Goal | undefined;
  goal: GameEvent_Goal | undefined;
  invalidGoal: GameEvent_Goal | undefined;
  attackerDoubleTouchedBall: GameEvent_AttackerDoubleTouchedBall | undefined;
  placementSucceeded: GameEvent_PlacementSucceeded | undefined;
  penaltyKickFailed: GameEvent_PenaltyKickFailed | undefined;
  noProgressInGame: GameEvent_NoProgressInGame | undefined;
  placementFailed: GameEvent_PlacementFailed | undefined;
  multipleCards: GameEvent_MultipleCards | undefined;
  multipleFouls: GameEvent_MultipleFouls | undefined;
  botSubstitution: GameEvent_BotSubstitution | undefined;
  tooManyRobots: GameEvent_TooManyRobots | undefined;
  challengeFlag: GameEvent_ChallengeFlag | undefined;
  emergencyStop: GameEvent_EmergencyStop | undefined;
  unsportingBehaviorMinor: GameEvent_UnsportingBehaviorMinor | undefined;
  unsportingBehaviorMajor: GameEvent_UnsportingBehaviorMajor | undefined;
  /**
   * replaced by ready_to_continue flag
   *
   * @deprecated
   */
  prepared: GameEvent_Prepared | undefined;
  /**
   * obsolete
   *
   * @deprecated
   */
  indirectGoal: GameEvent_IndirectGoal | undefined;
  /**
   * replaced by the meta-information in the possible_goal event
   *
   * @deprecated
   */
  chippedGoal: GameEvent_ChippedGoal | undefined;
  /**
   * obsolete
   *
   * @deprecated
   */
  kickTimeout: GameEvent_KickTimeout | undefined;
  /**
   * rule removed
   *
   * @deprecated
   */
  attackerTouchedOpponentInDefenseArea:
    | GameEvent_AttackerTouchedOpponentInDefenseArea
    | undefined;
  /**
   * obsolete
   *
   * @deprecated
   */
  attackerTouchedOpponentInDefenseAreaSkipped:
    | GameEvent_AttackerTouchedOpponentInDefenseArea
    | undefined;
  /**
   * obsolete
   *
   * @deprecated
   */
  botCrashUniqueSkipped: GameEvent_BotCrashUnique | undefined;
  /**
   * can not be used as long as autoRefs do not judge pushing
   *
   * @deprecated
   */
  botPushedBotSkipped: GameEvent_BotPushedBot | undefined;
  /**
   * rule removed
   *
   * @deprecated
   */
  defenderInDefenseAreaPartially:
    | GameEvent_DefenderInDefenseAreaPartially
    | undefined;
  /**
   * the referee msg already indicates this
   *
   * @deprecated
   */
  multiplePlacementFailures: GameEvent_MultiplePlacementFailures | undefined;
}

export enum GameEvent_Type {
  UNKNOWN_GAME_EVENT_TYPE = 0,
  /** BALL_LEFT_FIELD_TOUCH_LINE - triggered by autoRef */
  BALL_LEFT_FIELD_TOUCH_LINE = 6,
  /** BALL_LEFT_FIELD_GOAL_LINE - triggered by autoRef */
  BALL_LEFT_FIELD_GOAL_LINE = 7,
  /** AIMLESS_KICK - triggered by autoRef */
  AIMLESS_KICK = 11,
  /** ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA - triggered by autoRef */
  ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA = 19,
  /** DEFENDER_IN_DEFENSE_AREA - triggered by autoRef */
  DEFENDER_IN_DEFENSE_AREA = 31,
  /** BOUNDARY_CROSSING - triggered by autoRef */
  BOUNDARY_CROSSING = 41,
  /** KEEPER_HELD_BALL - triggered by GC */
  KEEPER_HELD_BALL = 13,
  /** BOT_DRIBBLED_BALL_TOO_FAR - triggered by autoRef */
  BOT_DRIBBLED_BALL_TOO_FAR = 17,
  /** BOT_PUSHED_BOT - triggered by human ref */
  BOT_PUSHED_BOT = 24,
  /** BOT_HELD_BALL_DELIBERATELY - triggered by human ref */
  BOT_HELD_BALL_DELIBERATELY = 26,
  /** BOT_TIPPED_OVER - triggered by human ref */
  BOT_TIPPED_OVER = 27,
  /** ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA - triggered by autoRef */
  ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA = 15,
  /** BOT_KICKED_BALL_TOO_FAST - triggered by autoRef */
  BOT_KICKED_BALL_TOO_FAST = 18,
  /** BOT_CRASH_UNIQUE - triggered by autoRef */
  BOT_CRASH_UNIQUE = 22,
  /** BOT_CRASH_DRAWN - triggered by autoRef */
  BOT_CRASH_DRAWN = 21,
  /** DEFENDER_TOO_CLOSE_TO_KICK_POINT - triggered by autoRef */
  DEFENDER_TOO_CLOSE_TO_KICK_POINT = 29,
  /** BOT_TOO_FAST_IN_STOP - triggered by autoRef */
  BOT_TOO_FAST_IN_STOP = 28,
  /** BOT_INTERFERED_PLACEMENT - triggered by autoRef */
  BOT_INTERFERED_PLACEMENT = 20,
  /** POSSIBLE_GOAL - triggered by autoRef */
  POSSIBLE_GOAL = 39,
  /** GOAL - triggered by GC */
  GOAL = 8,
  /** INVALID_GOAL - triggered by GC */
  INVALID_GOAL = 42,
  /** ATTACKER_DOUBLE_TOUCHED_BALL - triggered by autoRef */
  ATTACKER_DOUBLE_TOUCHED_BALL = 14,
  /** PLACEMENT_SUCCEEDED - triggered by autoRef */
  PLACEMENT_SUCCEEDED = 5,
  /** PENALTY_KICK_FAILED - triggered by GC and autoRef */
  PENALTY_KICK_FAILED = 43,
  /** NO_PROGRESS_IN_GAME - triggered by GC */
  NO_PROGRESS_IN_GAME = 2,
  /** PLACEMENT_FAILED - triggered by GC */
  PLACEMENT_FAILED = 3,
  /** MULTIPLE_CARDS - triggered by GC */
  MULTIPLE_CARDS = 32,
  /** MULTIPLE_FOULS - triggered by GC */
  MULTIPLE_FOULS = 34,
  /** BOT_SUBSTITUTION - triggered by GC */
  BOT_SUBSTITUTION = 37,
  /** TOO_MANY_ROBOTS - triggered by GC */
  TOO_MANY_ROBOTS = 38,
  /** CHALLENGE_FLAG - triggered by GC */
  CHALLENGE_FLAG = 44,
  /** EMERGENCY_STOP - triggered by GC */
  EMERGENCY_STOP = 45,
  /** UNSPORTING_BEHAVIOR_MINOR - triggered by human ref */
  UNSPORTING_BEHAVIOR_MINOR = 35,
  /** UNSPORTING_BEHAVIOR_MAJOR - triggered by human ref */
  UNSPORTING_BEHAVIOR_MAJOR = 36,
  /** @deprecated */
  PREPARED = 1,
  /** @deprecated */
  INDIRECT_GOAL = 9,
  /** @deprecated */
  CHIPPED_GOAL = 10,
  /** @deprecated */
  KICK_TIMEOUT = 12,
  /** @deprecated */
  ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA = 16,
  /** @deprecated */
  ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED = 40,
  /** @deprecated */
  BOT_CRASH_UNIQUE_SKIPPED = 23,
  /** @deprecated */
  BOT_PUSHED_BOT_SKIPPED = 25,
  /** @deprecated */
  DEFENDER_IN_DEFENSE_AREA_PARTIALLY = 30,
  /** @deprecated */
  MULTIPLE_PLACEMENT_FAILURES = 33,
  UNRECOGNIZED = -1,
}

export function gameEvent_TypeFromJSON(object: any): GameEvent_Type {
  switch (object) {
    case 0:
    case "UNKNOWN_GAME_EVENT_TYPE":
      return GameEvent_Type.UNKNOWN_GAME_EVENT_TYPE;
    case 6:
    case "BALL_LEFT_FIELD_TOUCH_LINE":
      return GameEvent_Type.BALL_LEFT_FIELD_TOUCH_LINE;
    case 7:
    case "BALL_LEFT_FIELD_GOAL_LINE":
      return GameEvent_Type.BALL_LEFT_FIELD_GOAL_LINE;
    case 11:
    case "AIMLESS_KICK":
      return GameEvent_Type.AIMLESS_KICK;
    case 19:
    case "ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA":
      return GameEvent_Type.ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA;
    case 31:
    case "DEFENDER_IN_DEFENSE_AREA":
      return GameEvent_Type.DEFENDER_IN_DEFENSE_AREA;
    case 41:
    case "BOUNDARY_CROSSING":
      return GameEvent_Type.BOUNDARY_CROSSING;
    case 13:
    case "KEEPER_HELD_BALL":
      return GameEvent_Type.KEEPER_HELD_BALL;
    case 17:
    case "BOT_DRIBBLED_BALL_TOO_FAR":
      return GameEvent_Type.BOT_DRIBBLED_BALL_TOO_FAR;
    case 24:
    case "BOT_PUSHED_BOT":
      return GameEvent_Type.BOT_PUSHED_BOT;
    case 26:
    case "BOT_HELD_BALL_DELIBERATELY":
      return GameEvent_Type.BOT_HELD_BALL_DELIBERATELY;
    case 27:
    case "BOT_TIPPED_OVER":
      return GameEvent_Type.BOT_TIPPED_OVER;
    case 15:
    case "ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA":
      return GameEvent_Type.ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA;
    case 18:
    case "BOT_KICKED_BALL_TOO_FAST":
      return GameEvent_Type.BOT_KICKED_BALL_TOO_FAST;
    case 22:
    case "BOT_CRASH_UNIQUE":
      return GameEvent_Type.BOT_CRASH_UNIQUE;
    case 21:
    case "BOT_CRASH_DRAWN":
      return GameEvent_Type.BOT_CRASH_DRAWN;
    case 29:
    case "DEFENDER_TOO_CLOSE_TO_KICK_POINT":
      return GameEvent_Type.DEFENDER_TOO_CLOSE_TO_KICK_POINT;
    case 28:
    case "BOT_TOO_FAST_IN_STOP":
      return GameEvent_Type.BOT_TOO_FAST_IN_STOP;
    case 20:
    case "BOT_INTERFERED_PLACEMENT":
      return GameEvent_Type.BOT_INTERFERED_PLACEMENT;
    case 39:
    case "POSSIBLE_GOAL":
      return GameEvent_Type.POSSIBLE_GOAL;
    case 8:
    case "GOAL":
      return GameEvent_Type.GOAL;
    case 42:
    case "INVALID_GOAL":
      return GameEvent_Type.INVALID_GOAL;
    case 14:
    case "ATTACKER_DOUBLE_TOUCHED_BALL":
      return GameEvent_Type.ATTACKER_DOUBLE_TOUCHED_BALL;
    case 5:
    case "PLACEMENT_SUCCEEDED":
      return GameEvent_Type.PLACEMENT_SUCCEEDED;
    case 43:
    case "PENALTY_KICK_FAILED":
      return GameEvent_Type.PENALTY_KICK_FAILED;
    case 2:
    case "NO_PROGRESS_IN_GAME":
      return GameEvent_Type.NO_PROGRESS_IN_GAME;
    case 3:
    case "PLACEMENT_FAILED":
      return GameEvent_Type.PLACEMENT_FAILED;
    case 32:
    case "MULTIPLE_CARDS":
      return GameEvent_Type.MULTIPLE_CARDS;
    case 34:
    case "MULTIPLE_FOULS":
      return GameEvent_Type.MULTIPLE_FOULS;
    case 37:
    case "BOT_SUBSTITUTION":
      return GameEvent_Type.BOT_SUBSTITUTION;
    case 38:
    case "TOO_MANY_ROBOTS":
      return GameEvent_Type.TOO_MANY_ROBOTS;
    case 44:
    case "CHALLENGE_FLAG":
      return GameEvent_Type.CHALLENGE_FLAG;
    case 45:
    case "EMERGENCY_STOP":
      return GameEvent_Type.EMERGENCY_STOP;
    case 35:
    case "UNSPORTING_BEHAVIOR_MINOR":
      return GameEvent_Type.UNSPORTING_BEHAVIOR_MINOR;
    case 36:
    case "UNSPORTING_BEHAVIOR_MAJOR":
      return GameEvent_Type.UNSPORTING_BEHAVIOR_MAJOR;
    case 1:
    case "PREPARED":
      return GameEvent_Type.PREPARED;
    case 9:
    case "INDIRECT_GOAL":
      return GameEvent_Type.INDIRECT_GOAL;
    case 10:
    case "CHIPPED_GOAL":
      return GameEvent_Type.CHIPPED_GOAL;
    case 12:
    case "KICK_TIMEOUT":
      return GameEvent_Type.KICK_TIMEOUT;
    case 16:
    case "ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA":
      return GameEvent_Type.ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA;
    case 40:
    case "ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED":
      return GameEvent_Type.ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED;
    case 23:
    case "BOT_CRASH_UNIQUE_SKIPPED":
      return GameEvent_Type.BOT_CRASH_UNIQUE_SKIPPED;
    case 25:
    case "BOT_PUSHED_BOT_SKIPPED":
      return GameEvent_Type.BOT_PUSHED_BOT_SKIPPED;
    case 30:
    case "DEFENDER_IN_DEFENSE_AREA_PARTIALLY":
      return GameEvent_Type.DEFENDER_IN_DEFENSE_AREA_PARTIALLY;
    case 33:
    case "MULTIPLE_PLACEMENT_FAILURES":
      return GameEvent_Type.MULTIPLE_PLACEMENT_FAILURES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GameEvent_Type.UNRECOGNIZED;
  }
}

export function gameEvent_TypeToJSON(object: GameEvent_Type): string {
  switch (object) {
    case GameEvent_Type.UNKNOWN_GAME_EVENT_TYPE:
      return "UNKNOWN_GAME_EVENT_TYPE";
    case GameEvent_Type.BALL_LEFT_FIELD_TOUCH_LINE:
      return "BALL_LEFT_FIELD_TOUCH_LINE";
    case GameEvent_Type.BALL_LEFT_FIELD_GOAL_LINE:
      return "BALL_LEFT_FIELD_GOAL_LINE";
    case GameEvent_Type.AIMLESS_KICK:
      return "AIMLESS_KICK";
    case GameEvent_Type.ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA:
      return "ATTACKER_TOO_CLOSE_TO_DEFENSE_AREA";
    case GameEvent_Type.DEFENDER_IN_DEFENSE_AREA:
      return "DEFENDER_IN_DEFENSE_AREA";
    case GameEvent_Type.BOUNDARY_CROSSING:
      return "BOUNDARY_CROSSING";
    case GameEvent_Type.KEEPER_HELD_BALL:
      return "KEEPER_HELD_BALL";
    case GameEvent_Type.BOT_DRIBBLED_BALL_TOO_FAR:
      return "BOT_DRIBBLED_BALL_TOO_FAR";
    case GameEvent_Type.BOT_PUSHED_BOT:
      return "BOT_PUSHED_BOT";
    case GameEvent_Type.BOT_HELD_BALL_DELIBERATELY:
      return "BOT_HELD_BALL_DELIBERATELY";
    case GameEvent_Type.BOT_TIPPED_OVER:
      return "BOT_TIPPED_OVER";
    case GameEvent_Type.ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA:
      return "ATTACKER_TOUCHED_BALL_IN_DEFENSE_AREA";
    case GameEvent_Type.BOT_KICKED_BALL_TOO_FAST:
      return "BOT_KICKED_BALL_TOO_FAST";
    case GameEvent_Type.BOT_CRASH_UNIQUE:
      return "BOT_CRASH_UNIQUE";
    case GameEvent_Type.BOT_CRASH_DRAWN:
      return "BOT_CRASH_DRAWN";
    case GameEvent_Type.DEFENDER_TOO_CLOSE_TO_KICK_POINT:
      return "DEFENDER_TOO_CLOSE_TO_KICK_POINT";
    case GameEvent_Type.BOT_TOO_FAST_IN_STOP:
      return "BOT_TOO_FAST_IN_STOP";
    case GameEvent_Type.BOT_INTERFERED_PLACEMENT:
      return "BOT_INTERFERED_PLACEMENT";
    case GameEvent_Type.POSSIBLE_GOAL:
      return "POSSIBLE_GOAL";
    case GameEvent_Type.GOAL:
      return "GOAL";
    case GameEvent_Type.INVALID_GOAL:
      return "INVALID_GOAL";
    case GameEvent_Type.ATTACKER_DOUBLE_TOUCHED_BALL:
      return "ATTACKER_DOUBLE_TOUCHED_BALL";
    case GameEvent_Type.PLACEMENT_SUCCEEDED:
      return "PLACEMENT_SUCCEEDED";
    case GameEvent_Type.PENALTY_KICK_FAILED:
      return "PENALTY_KICK_FAILED";
    case GameEvent_Type.NO_PROGRESS_IN_GAME:
      return "NO_PROGRESS_IN_GAME";
    case GameEvent_Type.PLACEMENT_FAILED:
      return "PLACEMENT_FAILED";
    case GameEvent_Type.MULTIPLE_CARDS:
      return "MULTIPLE_CARDS";
    case GameEvent_Type.MULTIPLE_FOULS:
      return "MULTIPLE_FOULS";
    case GameEvent_Type.BOT_SUBSTITUTION:
      return "BOT_SUBSTITUTION";
    case GameEvent_Type.TOO_MANY_ROBOTS:
      return "TOO_MANY_ROBOTS";
    case GameEvent_Type.CHALLENGE_FLAG:
      return "CHALLENGE_FLAG";
    case GameEvent_Type.EMERGENCY_STOP:
      return "EMERGENCY_STOP";
    case GameEvent_Type.UNSPORTING_BEHAVIOR_MINOR:
      return "UNSPORTING_BEHAVIOR_MINOR";
    case GameEvent_Type.UNSPORTING_BEHAVIOR_MAJOR:
      return "UNSPORTING_BEHAVIOR_MAJOR";
    case GameEvent_Type.PREPARED:
      return "PREPARED";
    case GameEvent_Type.INDIRECT_GOAL:
      return "INDIRECT_GOAL";
    case GameEvent_Type.CHIPPED_GOAL:
      return "CHIPPED_GOAL";
    case GameEvent_Type.KICK_TIMEOUT:
      return "KICK_TIMEOUT";
    case GameEvent_Type.ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA:
      return "ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA";
    case GameEvent_Type.ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED:
      return "ATTACKER_TOUCHED_OPPONENT_IN_DEFENSE_AREA_SKIPPED";
    case GameEvent_Type.BOT_CRASH_UNIQUE_SKIPPED:
      return "BOT_CRASH_UNIQUE_SKIPPED";
    case GameEvent_Type.BOT_PUSHED_BOT_SKIPPED:
      return "BOT_PUSHED_BOT_SKIPPED";
    case GameEvent_Type.DEFENDER_IN_DEFENSE_AREA_PARTIALLY:
      return "DEFENDER_IN_DEFENSE_AREA_PARTIALLY";
    case GameEvent_Type.MULTIPLE_PLACEMENT_FAILURES:
      return "MULTIPLE_PLACEMENT_FAILURES";
    default:
      return "UNKNOWN";
  }
}

/** the ball left the field normally */
export interface GameEvent_BallLeftField {
  /** the team that last touched the ball */
  byTeam: Team;
  /** the bot that last touched the ball */
  byBot: number;
  /** the location where the ball left the field */
  location: Vector2 | undefined;
}

/** the ball left the field via goal line and a team committed an aimless kick */
export interface GameEvent_AimlessKick {
  /** the team that last touched the ball */
  byTeam: Team;
  /** the bot that last touched the ball */
  byBot: number;
  /** the location where the ball left the field */
  location: Vector2 | undefined;
  /** the location where the ball was last touched */
  kickLocation: Vector2 | undefined;
}

/** a team shot a goal */
export interface GameEvent_Goal {
  /** the team that scored the goal */
  byTeam: Team;
  /** the team that shot the goal (different from by_team for own goals) */
  kickingTeam: Team;
  /** the bot that shot the goal */
  kickingBot: number;
  /** the location where the ball entered the goal */
  location: Vector2 | undefined;
  /** the location where the ball was kicked (for deciding if this was a valid goal) */
  kickLocation: Vector2 | undefined;
  /** the maximum height the ball reached during the goal kick (for deciding if this was a valid goal) */
  maxBallHeight: number;
  /** number of robots of scoring team when the ball entered the goal (for deciding if this was a valid goal) */
  numRobotsByTeam: number;
  /** The UNIX timestamp [μs] when the scoring team last touched the ball */
  lastTouchByTeam: Long;
  /** An additional message with e.g. a reason for invalid goals */
  message: string;
}

/** the ball entered the goal directly during an indirect free kick */
export interface GameEvent_IndirectGoal {
  /** the team that tried to shoot the goal */
  byTeam: Team;
  /** the bot that kicked the ball - at least the team must be set */
  byBot: number;
  /** the location where the ball entered the goal */
  location: Vector2 | undefined;
  /** the location where the ball was kicked */
  kickLocation: Vector2 | undefined;
}

/** the ball entered the goal, but was initially chipped */
export interface GameEvent_ChippedGoal {
  /** the team that tried to shoot the goal */
  byTeam: Team;
  /** the bot that kicked the ball */
  byBot: number;
  /** the location where the ball entered the goal */
  location: Vector2 | undefined;
  /** the location where the ball was kicked */
  kickLocation: Vector2 | undefined;
  /** the maximum height [m] of the ball, before it entered the goal and since the last kick */
  maxBallHeight: number;
}

/** a bot moved too fast while the game was stopped */
export interface GameEvent_BotTooFastInStop {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that was too fast */
  byBot: number;
  /** the location of the bot */
  location: Vector2 | undefined;
  /** the bot speed [m/s] */
  speed: number;
}

/** a bot of the defending team got too close to the kick point during a free kick */
export interface GameEvent_DefenderTooCloseToKickPoint {
  /** the team that was found guilty */
  byTeam: Team;
  /** the bot that violates the distance to the kick point */
  byBot: number;
  /** the location of the bot */
  location: Vector2 | undefined;
  /** the distance [m] from bot to the kick point (including the minimum radius) */
  distance: number;
}

/** two robots crashed into each other with similar speeds */
export interface GameEvent_BotCrashDrawn {
  /** the bot of the yellow team */
  botYellow: number;
  /** the bot of the blue team */
  botBlue: number;
  /** the location of the crash (center between both bots) */
  location: Vector2 | undefined;
  /** the calculated crash speed [m/s] of the two bots */
  crashSpeed: number;
  /** the difference [m/s] of the velocity of the two bots */
  speedDiff: number;
  /**
   * the angle [rad] in the range [0, π] of the bot velocity vectors
   * an angle of 0 rad (  0°) means, the bots barely touched each other
   * an angle of π rad (180°) means, the bots crashed frontal into each other
   */
  crashAngle: number;
}

/** two robots crashed into each other and one team was found guilty to due significant speed difference */
export interface GameEvent_BotCrashUnique {
  /** the team that caused the crash */
  byTeam: Team;
  /** the bot that caused the crash */
  violator: number;
  /** the bot of the opposite team that was involved in the crash */
  victim: number;
  /** the location of the crash (center between both bots) */
  location: Vector2 | undefined;
  /** the calculated crash speed vector [m/s] of the two bots */
  crashSpeed: number;
  /** the difference [m/s] of the velocity of the two bots */
  speedDiff: number;
  /**
   * the angle [rad] in the range [0, π] of the bot velocity vectors
   * an angle of 0 rad (  0°) means, the bots barely touched each other
   * an angle of π rad (180°) means, the bots crashed frontal into each other
   */
  crashAngle: number;
}

/** a bot pushed another bot over a significant distance */
export interface GameEvent_BotPushedBot {
  /** the team that pushed the other team */
  byTeam: Team;
  /** the bot that pushed the other bot */
  violator: number;
  /** the bot of the opposite team that was pushed */
  victim: number;
  /** the location of the push (center between both bots) */
  location: Vector2 | undefined;
  /** the pushed distance [m] */
  pushedDistance: number;
}

/** a bot tipped over */
export interface GameEvent_BotTippedOver {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that tipped over */
  byBot: number;
  /** the location of the bot */
  location: Vector2 | undefined;
  /** the location of the ball at the moment when this foul occurred */
  ballLocation: Vector2 | undefined;
}

/** a defender other than the keeper was fully located inside its own defense and touched the ball */
export interface GameEvent_DefenderInDefenseArea {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that is inside the penalty area */
  byBot: number;
  /** the location of the bot */
  location: Vector2 | undefined;
  /** the distance [m] from bot case to the nearest point outside the defense area */
  distance: number;
}

/** a defender other than the keeper was partially located inside its own defense area and touched the ball */
export interface GameEvent_DefenderInDefenseAreaPartially {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that is partially inside the penalty area */
  byBot: number;
  /** the location of the bot */
  location: Vector2 | undefined;
  /** the distance [m] that the bot is inside the penalty area */
  distance: number;
  /** the location of the ball at the moment when this foul occurred */
  ballLocation: Vector2 | undefined;
}

/** an attacker touched the ball inside the opponent defense area */
export interface GameEvent_AttackerTouchedBallInDefenseArea {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that is inside the penalty area */
  byBot: number;
  /** the location of the bot */
  location: Vector2 | undefined;
  /** the distance [m] that the bot is inside the penalty area */
  distance: number;
}

/** a bot kicked the ball too fast */
export interface GameEvent_BotKickedBallTooFast {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that kicked too fast */
  byBot: number;
  /** the location of the ball at the time of the highest speed */
  location: Vector2 | undefined;
  /** the absolute initial ball speed (kick speed) [m/s] */
  initialBallSpeed: number;
  /** was the ball chipped? */
  chipped: boolean;
}

/** a bot dribbled to ball too far */
export interface GameEvent_BotDribbledBallTooFar {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that dribbled too far */
  byBot: number;
  /** the location where the dribbling started */
  start: Vector2 | undefined;
  /** the location where the maximum dribbling distance was reached */
  end: Vector2 | undefined;
}

/** an attacker touched the opponent robot inside defense area */
export interface GameEvent_AttackerTouchedOpponentInDefenseArea {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that touched the opponent robot */
  byBot: number;
  /** the bot of the opposite team that was touched */
  victim: number;
  /** the location of the contact point between both bots */
  location: Vector2 | undefined;
}

/** an attacker touched the ball multiple times when it was not allowed to */
export interface GameEvent_AttackerDoubleTouchedBall {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that touched the ball twice */
  byBot: number;
  /** the location of the ball when it was first touched */
  location: Vector2 | undefined;
}

/** an attacker was located too near to the opponent defense area during stop or free kick */
export interface GameEvent_AttackerTooCloseToDefenseArea {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that is too close to the defense area */
  byBot: number;
  /** the location of the bot */
  location: Vector2 | undefined;
  /** the distance [m] of the bot to the penalty area */
  distance: number;
  /** the location of the ball at the moment when this foul occurred */
  ballLocation: Vector2 | undefined;
}

/** a bot held the ball for too long */
export interface GameEvent_BotHeldBallDeliberately {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that holds the ball */
  byBot: number;
  /** the location of the ball */
  location: Vector2 | undefined;
  /** the duration [s] that the bot hold the ball */
  duration: number;
}

/** a bot interfered the ball placement of the other team */
export interface GameEvent_BotInterferedPlacement {
  /** the team that found guilty */
  byTeam: Team;
  /** the bot that interfered the placement */
  byBot: number;
  /** the location of the bot */
  location: Vector2 | undefined;
}

/** a team collected multiple cards (yellow and red), which results in a penalty kick */
export interface GameEvent_MultipleCards {
  /** the team that received multiple yellow cards */
  byTeam: Team;
}

/** a team collected multiple fouls, which results in a yellow card */
export interface GameEvent_MultipleFouls {
  /** the team that collected multiple fouls */
  byTeam: Team;
}

/** a team failed to place the ball multiple times in a row */
export interface GameEvent_MultiplePlacementFailures {
  /** the team that failed multiple times */
  byTeam: Team;
}

/** timeout waiting for the attacking team to perform the free kick */
export interface GameEvent_KickTimeout {
  /** the team that that should have kicked */
  byTeam: Team;
  /** the location of the ball */
  location: Vector2 | undefined;
  /** the time [s] that was waited */
  time: number;
}

/** game was stuck */
export interface GameEvent_NoProgressInGame {
  /** the location of the ball */
  location: Vector2 | undefined;
  /** the time [s] that was waited */
  time: number;
}

/** ball placement failed */
export interface GameEvent_PlacementFailed {
  /** the team that failed */
  byTeam: Team;
  /** the remaining distance [m] from ball to placement position */
  remainingDistance: number;
}

/** a team was found guilty for minor unsporting behavior */
export interface GameEvent_UnsportingBehaviorMinor {
  /** the team that found guilty */
  byTeam: Team;
  /** an explanation of the situation and decision */
  reason: string;
}

/** a team was found guilty for major unsporting behavior */
export interface GameEvent_UnsportingBehaviorMajor {
  /** the team that found guilty */
  byTeam: Team;
  /** an explanation of the situation and decision */
  reason: string;
}

/** a keeper held the ball in its defense area for too long */
export interface GameEvent_KeeperHeldBall {
  /** the team that found guilty */
  byTeam: Team;
  /** the location of the ball */
  location: Vector2 | undefined;
  /** the duration [s] that the keeper hold the ball */
  duration: number;
}

/** a team successfully placed the ball */
export interface GameEvent_PlacementSucceeded {
  /** the team that did the placement */
  byTeam: Team;
  /** the time [s] taken for placing the ball */
  timeTaken: number;
  /** the distance [m] between placement location and actual ball position */
  precision: number;
  /** the distance [m] between the initial ball location and the placement position */
  distance: number;
}

/** both teams are prepared - all conditions are met to continue (with kickoff or penalty kick) */
export interface GameEvent_Prepared {
  /** the time [s] taken for preparing */
  timeTaken: number;
}

/** bots are being substituted by a team */
export interface GameEvent_BotSubstitution {
  /** the team that substitutes robots */
  byTeam: Team;
}

/** A challenge flag, requested by a team previously, is flagged */
export interface GameEvent_ChallengeFlag {
  /** the team that substitutes robots */
  byTeam: Team;
}

/** An emergency stop, requested by team previously, occurred */
export interface GameEvent_EmergencyStop {
  /** the team that substitutes robots */
  byTeam: Team;
}

/** a team has too many robots on the field */
export interface GameEvent_TooManyRobots {
  /** the team that has too many robots */
  byTeam: Team;
  /** number of robots allowed at the moment */
  numRobotsAllowed: number;
  /** number of robots currently on the field */
  numRobotsOnField: number;
  /** the location of the ball at the moment when this foul occurred */
  ballLocation: Vector2 | undefined;
}

/** a robot chipped the ball over the field boundary out of the playing surface */
export interface GameEvent_BoundaryCrossing {
  /** the team that has too many robots */
  byTeam: Team;
  /** the location of the ball */
  location: Vector2 | undefined;
}

/** the penalty kick failed (by time or by keeper) */
export interface GameEvent_PenaltyKickFailed {
  /** the team that last touched the ball */
  byTeam: Team;
  /** the location of the ball at the moment of this event */
  location: Vector2 | undefined;
}

const baseGameEvent: object = { type: 0, origin: "" };

export const GameEvent = {
  encode(
    message: GameEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(320).int32(message.type);
    }
    for (const v of message.origin) {
      writer.uint32(330).string(v!);
    }
    if (message.ballLeftFieldTouchLine !== undefined) {
      GameEvent_BallLeftField.encode(
        message.ballLeftFieldTouchLine,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.ballLeftFieldGoalLine !== undefined) {
      GameEvent_BallLeftField.encode(
        message.ballLeftFieldGoalLine,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.aimlessKick !== undefined) {
      GameEvent_AimlessKick.encode(
        message.aimlessKick,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.attackerTooCloseToDefenseArea !== undefined) {
      GameEvent_AttackerTooCloseToDefenseArea.encode(
        message.attackerTooCloseToDefenseArea,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.defenderInDefenseArea !== undefined) {
      GameEvent_DefenderInDefenseArea.encode(
        message.defenderInDefenseArea,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.boundaryCrossing !== undefined) {
      GameEvent_BoundaryCrossing.encode(
        message.boundaryCrossing,
        writer.uint32(346).fork()
      ).ldelim();
    }
    if (message.keeperHeldBall !== undefined) {
      GameEvent_KeeperHeldBall.encode(
        message.keeperHeldBall,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.botDribbledBallTooFar !== undefined) {
      GameEvent_BotDribbledBallTooFar.encode(
        message.botDribbledBallTooFar,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.botPushedBot !== undefined) {
      GameEvent_BotPushedBot.encode(
        message.botPushedBot,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.botHeldBallDeliberately !== undefined) {
      GameEvent_BotHeldBallDeliberately.encode(
        message.botHeldBallDeliberately,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.botTippedOver !== undefined) {
      GameEvent_BotTippedOver.encode(
        message.botTippedOver,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.attackerTouchedBallInDefenseArea !== undefined) {
      GameEvent_AttackerTouchedBallInDefenseArea.encode(
        message.attackerTouchedBallInDefenseArea,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.botKickedBallTooFast !== undefined) {
      GameEvent_BotKickedBallTooFast.encode(
        message.botKickedBallTooFast,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.botCrashUnique !== undefined) {
      GameEvent_BotCrashUnique.encode(
        message.botCrashUnique,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.botCrashDrawn !== undefined) {
      GameEvent_BotCrashDrawn.encode(
        message.botCrashDrawn,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.defenderTooCloseToKickPoint !== undefined) {
      GameEvent_DefenderTooCloseToKickPoint.encode(
        message.defenderTooCloseToKickPoint,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.botTooFastInStop !== undefined) {
      GameEvent_BotTooFastInStop.encode(
        message.botTooFastInStop,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.botInterferedPlacement !== undefined) {
      GameEvent_BotInterferedPlacement.encode(
        message.botInterferedPlacement,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.possibleGoal !== undefined) {
      GameEvent_Goal.encode(
        message.possibleGoal,
        writer.uint32(314).fork()
      ).ldelim();
    }
    if (message.goal !== undefined) {
      GameEvent_Goal.encode(message.goal, writer.uint32(66).fork()).ldelim();
    }
    if (message.invalidGoal !== undefined) {
      GameEvent_Goal.encode(
        message.invalidGoal,
        writer.uint32(354).fork()
      ).ldelim();
    }
    if (message.attackerDoubleTouchedBall !== undefined) {
      GameEvent_AttackerDoubleTouchedBall.encode(
        message.attackerDoubleTouchedBall,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.placementSucceeded !== undefined) {
      GameEvent_PlacementSucceeded.encode(
        message.placementSucceeded,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.penaltyKickFailed !== undefined) {
      GameEvent_PenaltyKickFailed.encode(
        message.penaltyKickFailed,
        writer.uint32(362).fork()
      ).ldelim();
    }
    if (message.noProgressInGame !== undefined) {
      GameEvent_NoProgressInGame.encode(
        message.noProgressInGame,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.placementFailed !== undefined) {
      GameEvent_PlacementFailed.encode(
        message.placementFailed,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.multipleCards !== undefined) {
      GameEvent_MultipleCards.encode(
        message.multipleCards,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.multipleFouls !== undefined) {
      GameEvent_MultipleFouls.encode(
        message.multipleFouls,
        writer.uint32(274).fork()
      ).ldelim();
    }
    if (message.botSubstitution !== undefined) {
      GameEvent_BotSubstitution.encode(
        message.botSubstitution,
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.tooManyRobots !== undefined) {
      GameEvent_TooManyRobots.encode(
        message.tooManyRobots,
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.challengeFlag !== undefined) {
      GameEvent_ChallengeFlag.encode(
        message.challengeFlag,
        writer.uint32(370).fork()
      ).ldelim();
    }
    if (message.emergencyStop !== undefined) {
      GameEvent_EmergencyStop.encode(
        message.emergencyStop,
        writer.uint32(378).fork()
      ).ldelim();
    }
    if (message.unsportingBehaviorMinor !== undefined) {
      GameEvent_UnsportingBehaviorMinor.encode(
        message.unsportingBehaviorMinor,
        writer.uint32(282).fork()
      ).ldelim();
    }
    if (message.unsportingBehaviorMajor !== undefined) {
      GameEvent_UnsportingBehaviorMajor.encode(
        message.unsportingBehaviorMajor,
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.prepared !== undefined) {
      GameEvent_Prepared.encode(
        message.prepared,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.indirectGoal !== undefined) {
      GameEvent_IndirectGoal.encode(
        message.indirectGoal,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.chippedGoal !== undefined) {
      GameEvent_ChippedGoal.encode(
        message.chippedGoal,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.kickTimeout !== undefined) {
      GameEvent_KickTimeout.encode(
        message.kickTimeout,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.attackerTouchedOpponentInDefenseArea !== undefined) {
      GameEvent_AttackerTouchedOpponentInDefenseArea.encode(
        message.attackerTouchedOpponentInDefenseArea,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.attackerTouchedOpponentInDefenseAreaSkipped !== undefined) {
      GameEvent_AttackerTouchedOpponentInDefenseArea.encode(
        message.attackerTouchedOpponentInDefenseAreaSkipped,
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.botCrashUniqueSkipped !== undefined) {
      GameEvent_BotCrashUnique.encode(
        message.botCrashUniqueSkipped,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.botPushedBotSkipped !== undefined) {
      GameEvent_BotPushedBot.encode(
        message.botPushedBotSkipped,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.defenderInDefenseAreaPartially !== undefined) {
      GameEvent_DefenderInDefenseAreaPartially.encode(
        message.defenderInDefenseAreaPartially,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.multiplePlacementFailures !== undefined) {
      GameEvent_MultiplePlacementFailures.encode(
        message.multiplePlacementFailures,
        writer.uint32(266).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEvent } as GameEvent;
    message.origin = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 40:
          message.type = reader.int32() as any;
          break;
        case 41:
          message.origin.push(reader.string());
          break;
        case 6:
          message.ballLeftFieldTouchLine = GameEvent_BallLeftField.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.ballLeftFieldGoalLine = GameEvent_BallLeftField.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.aimlessKick = GameEvent_AimlessKick.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.attackerTooCloseToDefenseArea = GameEvent_AttackerTooCloseToDefenseArea.decode(
            reader,
            reader.uint32()
          );
          break;
        case 31:
          message.defenderInDefenseArea = GameEvent_DefenderInDefenseArea.decode(
            reader,
            reader.uint32()
          );
          break;
        case 43:
          message.boundaryCrossing = GameEvent_BoundaryCrossing.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.keeperHeldBall = GameEvent_KeeperHeldBall.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.botDribbledBallTooFar = GameEvent_BotDribbledBallTooFar.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.botPushedBot = GameEvent_BotPushedBot.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.botHeldBallDeliberately = GameEvent_BotHeldBallDeliberately.decode(
            reader,
            reader.uint32()
          );
          break;
        case 27:
          message.botTippedOver = GameEvent_BotTippedOver.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.attackerTouchedBallInDefenseArea = GameEvent_AttackerTouchedBallInDefenseArea.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.botKickedBallTooFast = GameEvent_BotKickedBallTooFast.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.botCrashUnique = GameEvent_BotCrashUnique.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.botCrashDrawn = GameEvent_BotCrashDrawn.decode(
            reader,
            reader.uint32()
          );
          break;
        case 29:
          message.defenderTooCloseToKickPoint = GameEvent_DefenderTooCloseToKickPoint.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.botTooFastInStop = GameEvent_BotTooFastInStop.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.botInterferedPlacement = GameEvent_BotInterferedPlacement.decode(
            reader,
            reader.uint32()
          );
          break;
        case 39:
          message.possibleGoal = GameEvent_Goal.decode(reader, reader.uint32());
          break;
        case 8:
          message.goal = GameEvent_Goal.decode(reader, reader.uint32());
          break;
        case 44:
          message.invalidGoal = GameEvent_Goal.decode(reader, reader.uint32());
          break;
        case 14:
          message.attackerDoubleTouchedBall = GameEvent_AttackerDoubleTouchedBall.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.placementSucceeded = GameEvent_PlacementSucceeded.decode(
            reader,
            reader.uint32()
          );
          break;
        case 45:
          message.penaltyKickFailed = GameEvent_PenaltyKickFailed.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.noProgressInGame = GameEvent_NoProgressInGame.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.placementFailed = GameEvent_PlacementFailed.decode(
            reader,
            reader.uint32()
          );
          break;
        case 32:
          message.multipleCards = GameEvent_MultipleCards.decode(
            reader,
            reader.uint32()
          );
          break;
        case 34:
          message.multipleFouls = GameEvent_MultipleFouls.decode(
            reader,
            reader.uint32()
          );
          break;
        case 37:
          message.botSubstitution = GameEvent_BotSubstitution.decode(
            reader,
            reader.uint32()
          );
          break;
        case 38:
          message.tooManyRobots = GameEvent_TooManyRobots.decode(
            reader,
            reader.uint32()
          );
          break;
        case 46:
          message.challengeFlag = GameEvent_ChallengeFlag.decode(
            reader,
            reader.uint32()
          );
          break;
        case 47:
          message.emergencyStop = GameEvent_EmergencyStop.decode(
            reader,
            reader.uint32()
          );
          break;
        case 35:
          message.unsportingBehaviorMinor = GameEvent_UnsportingBehaviorMinor.decode(
            reader,
            reader.uint32()
          );
          break;
        case 36:
          message.unsportingBehaviorMajor = GameEvent_UnsportingBehaviorMajor.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1:
          message.prepared = GameEvent_Prepared.decode(reader, reader.uint32());
          break;
        case 9:
          message.indirectGoal = GameEvent_IndirectGoal.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.chippedGoal = GameEvent_ChippedGoal.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.kickTimeout = GameEvent_KickTimeout.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.attackerTouchedOpponentInDefenseArea = GameEvent_AttackerTouchedOpponentInDefenseArea.decode(
            reader,
            reader.uint32()
          );
          break;
        case 42:
          message.attackerTouchedOpponentInDefenseAreaSkipped = GameEvent_AttackerTouchedOpponentInDefenseArea.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.botCrashUniqueSkipped = GameEvent_BotCrashUnique.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.botPushedBotSkipped = GameEvent_BotPushedBot.decode(
            reader,
            reader.uint32()
          );
          break;
        case 30:
          message.defenderInDefenseAreaPartially = GameEvent_DefenderInDefenseAreaPartially.decode(
            reader,
            reader.uint32()
          );
          break;
        case 33:
          message.multiplePlacementFailures = GameEvent_MultiplePlacementFailures.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent {
    const message = { ...baseGameEvent } as GameEvent;
    message.origin = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = gameEvent_TypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    if (object.origin !== undefined && object.origin !== null) {
      for (const e of object.origin) {
        message.origin.push(String(e));
      }
    }
    if (
      object.ballLeftFieldTouchLine !== undefined &&
      object.ballLeftFieldTouchLine !== null
    ) {
      message.ballLeftFieldTouchLine = GameEvent_BallLeftField.fromJSON(
        object.ballLeftFieldTouchLine
      );
    } else {
      message.ballLeftFieldTouchLine = undefined;
    }
    if (
      object.ballLeftFieldGoalLine !== undefined &&
      object.ballLeftFieldGoalLine !== null
    ) {
      message.ballLeftFieldGoalLine = GameEvent_BallLeftField.fromJSON(
        object.ballLeftFieldGoalLine
      );
    } else {
      message.ballLeftFieldGoalLine = undefined;
    }
    if (object.aimlessKick !== undefined && object.aimlessKick !== null) {
      message.aimlessKick = GameEvent_AimlessKick.fromJSON(object.aimlessKick);
    } else {
      message.aimlessKick = undefined;
    }
    if (
      object.attackerTooCloseToDefenseArea !== undefined &&
      object.attackerTooCloseToDefenseArea !== null
    ) {
      message.attackerTooCloseToDefenseArea = GameEvent_AttackerTooCloseToDefenseArea.fromJSON(
        object.attackerTooCloseToDefenseArea
      );
    } else {
      message.attackerTooCloseToDefenseArea = undefined;
    }
    if (
      object.defenderInDefenseArea !== undefined &&
      object.defenderInDefenseArea !== null
    ) {
      message.defenderInDefenseArea = GameEvent_DefenderInDefenseArea.fromJSON(
        object.defenderInDefenseArea
      );
    } else {
      message.defenderInDefenseArea = undefined;
    }
    if (
      object.boundaryCrossing !== undefined &&
      object.boundaryCrossing !== null
    ) {
      message.boundaryCrossing = GameEvent_BoundaryCrossing.fromJSON(
        object.boundaryCrossing
      );
    } else {
      message.boundaryCrossing = undefined;
    }
    if (object.keeperHeldBall !== undefined && object.keeperHeldBall !== null) {
      message.keeperHeldBall = GameEvent_KeeperHeldBall.fromJSON(
        object.keeperHeldBall
      );
    } else {
      message.keeperHeldBall = undefined;
    }
    if (
      object.botDribbledBallTooFar !== undefined &&
      object.botDribbledBallTooFar !== null
    ) {
      message.botDribbledBallTooFar = GameEvent_BotDribbledBallTooFar.fromJSON(
        object.botDribbledBallTooFar
      );
    } else {
      message.botDribbledBallTooFar = undefined;
    }
    if (object.botPushedBot !== undefined && object.botPushedBot !== null) {
      message.botPushedBot = GameEvent_BotPushedBot.fromJSON(
        object.botPushedBot
      );
    } else {
      message.botPushedBot = undefined;
    }
    if (
      object.botHeldBallDeliberately !== undefined &&
      object.botHeldBallDeliberately !== null
    ) {
      message.botHeldBallDeliberately = GameEvent_BotHeldBallDeliberately.fromJSON(
        object.botHeldBallDeliberately
      );
    } else {
      message.botHeldBallDeliberately = undefined;
    }
    if (object.botTippedOver !== undefined && object.botTippedOver !== null) {
      message.botTippedOver = GameEvent_BotTippedOver.fromJSON(
        object.botTippedOver
      );
    } else {
      message.botTippedOver = undefined;
    }
    if (
      object.attackerTouchedBallInDefenseArea !== undefined &&
      object.attackerTouchedBallInDefenseArea !== null
    ) {
      message.attackerTouchedBallInDefenseArea = GameEvent_AttackerTouchedBallInDefenseArea.fromJSON(
        object.attackerTouchedBallInDefenseArea
      );
    } else {
      message.attackerTouchedBallInDefenseArea = undefined;
    }
    if (
      object.botKickedBallTooFast !== undefined &&
      object.botKickedBallTooFast !== null
    ) {
      message.botKickedBallTooFast = GameEvent_BotKickedBallTooFast.fromJSON(
        object.botKickedBallTooFast
      );
    } else {
      message.botKickedBallTooFast = undefined;
    }
    if (object.botCrashUnique !== undefined && object.botCrashUnique !== null) {
      message.botCrashUnique = GameEvent_BotCrashUnique.fromJSON(
        object.botCrashUnique
      );
    } else {
      message.botCrashUnique = undefined;
    }
    if (object.botCrashDrawn !== undefined && object.botCrashDrawn !== null) {
      message.botCrashDrawn = GameEvent_BotCrashDrawn.fromJSON(
        object.botCrashDrawn
      );
    } else {
      message.botCrashDrawn = undefined;
    }
    if (
      object.defenderTooCloseToKickPoint !== undefined &&
      object.defenderTooCloseToKickPoint !== null
    ) {
      message.defenderTooCloseToKickPoint = GameEvent_DefenderTooCloseToKickPoint.fromJSON(
        object.defenderTooCloseToKickPoint
      );
    } else {
      message.defenderTooCloseToKickPoint = undefined;
    }
    if (
      object.botTooFastInStop !== undefined &&
      object.botTooFastInStop !== null
    ) {
      message.botTooFastInStop = GameEvent_BotTooFastInStop.fromJSON(
        object.botTooFastInStop
      );
    } else {
      message.botTooFastInStop = undefined;
    }
    if (
      object.botInterferedPlacement !== undefined &&
      object.botInterferedPlacement !== null
    ) {
      message.botInterferedPlacement = GameEvent_BotInterferedPlacement.fromJSON(
        object.botInterferedPlacement
      );
    } else {
      message.botInterferedPlacement = undefined;
    }
    if (object.possibleGoal !== undefined && object.possibleGoal !== null) {
      message.possibleGoal = GameEvent_Goal.fromJSON(object.possibleGoal);
    } else {
      message.possibleGoal = undefined;
    }
    if (object.goal !== undefined && object.goal !== null) {
      message.goal = GameEvent_Goal.fromJSON(object.goal);
    } else {
      message.goal = undefined;
    }
    if (object.invalidGoal !== undefined && object.invalidGoal !== null) {
      message.invalidGoal = GameEvent_Goal.fromJSON(object.invalidGoal);
    } else {
      message.invalidGoal = undefined;
    }
    if (
      object.attackerDoubleTouchedBall !== undefined &&
      object.attackerDoubleTouchedBall !== null
    ) {
      message.attackerDoubleTouchedBall = GameEvent_AttackerDoubleTouchedBall.fromJSON(
        object.attackerDoubleTouchedBall
      );
    } else {
      message.attackerDoubleTouchedBall = undefined;
    }
    if (
      object.placementSucceeded !== undefined &&
      object.placementSucceeded !== null
    ) {
      message.placementSucceeded = GameEvent_PlacementSucceeded.fromJSON(
        object.placementSucceeded
      );
    } else {
      message.placementSucceeded = undefined;
    }
    if (
      object.penaltyKickFailed !== undefined &&
      object.penaltyKickFailed !== null
    ) {
      message.penaltyKickFailed = GameEvent_PenaltyKickFailed.fromJSON(
        object.penaltyKickFailed
      );
    } else {
      message.penaltyKickFailed = undefined;
    }
    if (
      object.noProgressInGame !== undefined &&
      object.noProgressInGame !== null
    ) {
      message.noProgressInGame = GameEvent_NoProgressInGame.fromJSON(
        object.noProgressInGame
      );
    } else {
      message.noProgressInGame = undefined;
    }
    if (
      object.placementFailed !== undefined &&
      object.placementFailed !== null
    ) {
      message.placementFailed = GameEvent_PlacementFailed.fromJSON(
        object.placementFailed
      );
    } else {
      message.placementFailed = undefined;
    }
    if (object.multipleCards !== undefined && object.multipleCards !== null) {
      message.multipleCards = GameEvent_MultipleCards.fromJSON(
        object.multipleCards
      );
    } else {
      message.multipleCards = undefined;
    }
    if (object.multipleFouls !== undefined && object.multipleFouls !== null) {
      message.multipleFouls = GameEvent_MultipleFouls.fromJSON(
        object.multipleFouls
      );
    } else {
      message.multipleFouls = undefined;
    }
    if (
      object.botSubstitution !== undefined &&
      object.botSubstitution !== null
    ) {
      message.botSubstitution = GameEvent_BotSubstitution.fromJSON(
        object.botSubstitution
      );
    } else {
      message.botSubstitution = undefined;
    }
    if (object.tooManyRobots !== undefined && object.tooManyRobots !== null) {
      message.tooManyRobots = GameEvent_TooManyRobots.fromJSON(
        object.tooManyRobots
      );
    } else {
      message.tooManyRobots = undefined;
    }
    if (object.challengeFlag !== undefined && object.challengeFlag !== null) {
      message.challengeFlag = GameEvent_ChallengeFlag.fromJSON(
        object.challengeFlag
      );
    } else {
      message.challengeFlag = undefined;
    }
    if (object.emergencyStop !== undefined && object.emergencyStop !== null) {
      message.emergencyStop = GameEvent_EmergencyStop.fromJSON(
        object.emergencyStop
      );
    } else {
      message.emergencyStop = undefined;
    }
    if (
      object.unsportingBehaviorMinor !== undefined &&
      object.unsportingBehaviorMinor !== null
    ) {
      message.unsportingBehaviorMinor = GameEvent_UnsportingBehaviorMinor.fromJSON(
        object.unsportingBehaviorMinor
      );
    } else {
      message.unsportingBehaviorMinor = undefined;
    }
    if (
      object.unsportingBehaviorMajor !== undefined &&
      object.unsportingBehaviorMajor !== null
    ) {
      message.unsportingBehaviorMajor = GameEvent_UnsportingBehaviorMajor.fromJSON(
        object.unsportingBehaviorMajor
      );
    } else {
      message.unsportingBehaviorMajor = undefined;
    }
    if (object.prepared !== undefined && object.prepared !== null) {
      message.prepared = GameEvent_Prepared.fromJSON(object.prepared);
    } else {
      message.prepared = undefined;
    }
    if (object.indirectGoal !== undefined && object.indirectGoal !== null) {
      message.indirectGoal = GameEvent_IndirectGoal.fromJSON(
        object.indirectGoal
      );
    } else {
      message.indirectGoal = undefined;
    }
    if (object.chippedGoal !== undefined && object.chippedGoal !== null) {
      message.chippedGoal = GameEvent_ChippedGoal.fromJSON(object.chippedGoal);
    } else {
      message.chippedGoal = undefined;
    }
    if (object.kickTimeout !== undefined && object.kickTimeout !== null) {
      message.kickTimeout = GameEvent_KickTimeout.fromJSON(object.kickTimeout);
    } else {
      message.kickTimeout = undefined;
    }
    if (
      object.attackerTouchedOpponentInDefenseArea !== undefined &&
      object.attackerTouchedOpponentInDefenseArea !== null
    ) {
      message.attackerTouchedOpponentInDefenseArea = GameEvent_AttackerTouchedOpponentInDefenseArea.fromJSON(
        object.attackerTouchedOpponentInDefenseArea
      );
    } else {
      message.attackerTouchedOpponentInDefenseArea = undefined;
    }
    if (
      object.attackerTouchedOpponentInDefenseAreaSkipped !== undefined &&
      object.attackerTouchedOpponentInDefenseAreaSkipped !== null
    ) {
      message.attackerTouchedOpponentInDefenseAreaSkipped = GameEvent_AttackerTouchedOpponentInDefenseArea.fromJSON(
        object.attackerTouchedOpponentInDefenseAreaSkipped
      );
    } else {
      message.attackerTouchedOpponentInDefenseAreaSkipped = undefined;
    }
    if (
      object.botCrashUniqueSkipped !== undefined &&
      object.botCrashUniqueSkipped !== null
    ) {
      message.botCrashUniqueSkipped = GameEvent_BotCrashUnique.fromJSON(
        object.botCrashUniqueSkipped
      );
    } else {
      message.botCrashUniqueSkipped = undefined;
    }
    if (
      object.botPushedBotSkipped !== undefined &&
      object.botPushedBotSkipped !== null
    ) {
      message.botPushedBotSkipped = GameEvent_BotPushedBot.fromJSON(
        object.botPushedBotSkipped
      );
    } else {
      message.botPushedBotSkipped = undefined;
    }
    if (
      object.defenderInDefenseAreaPartially !== undefined &&
      object.defenderInDefenseAreaPartially !== null
    ) {
      message.defenderInDefenseAreaPartially = GameEvent_DefenderInDefenseAreaPartially.fromJSON(
        object.defenderInDefenseAreaPartially
      );
    } else {
      message.defenderInDefenseAreaPartially = undefined;
    }
    if (
      object.multiplePlacementFailures !== undefined &&
      object.multiplePlacementFailures !== null
    ) {
      message.multiplePlacementFailures = GameEvent_MultiplePlacementFailures.fromJSON(
        object.multiplePlacementFailures
      );
    } else {
      message.multiplePlacementFailures = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = gameEvent_TypeToJSON(message.type));
    if (message.origin) {
      obj.origin = message.origin.map((e) => e);
    } else {
      obj.origin = [];
    }
    message.ballLeftFieldTouchLine !== undefined &&
      (obj.ballLeftFieldTouchLine = message.ballLeftFieldTouchLine
        ? GameEvent_BallLeftField.toJSON(message.ballLeftFieldTouchLine)
        : undefined);
    message.ballLeftFieldGoalLine !== undefined &&
      (obj.ballLeftFieldGoalLine = message.ballLeftFieldGoalLine
        ? GameEvent_BallLeftField.toJSON(message.ballLeftFieldGoalLine)
        : undefined);
    message.aimlessKick !== undefined &&
      (obj.aimlessKick = message.aimlessKick
        ? GameEvent_AimlessKick.toJSON(message.aimlessKick)
        : undefined);
    message.attackerTooCloseToDefenseArea !== undefined &&
      (obj.attackerTooCloseToDefenseArea = message.attackerTooCloseToDefenseArea
        ? GameEvent_AttackerTooCloseToDefenseArea.toJSON(
            message.attackerTooCloseToDefenseArea
          )
        : undefined);
    message.defenderInDefenseArea !== undefined &&
      (obj.defenderInDefenseArea = message.defenderInDefenseArea
        ? GameEvent_DefenderInDefenseArea.toJSON(message.defenderInDefenseArea)
        : undefined);
    message.boundaryCrossing !== undefined &&
      (obj.boundaryCrossing = message.boundaryCrossing
        ? GameEvent_BoundaryCrossing.toJSON(message.boundaryCrossing)
        : undefined);
    message.keeperHeldBall !== undefined &&
      (obj.keeperHeldBall = message.keeperHeldBall
        ? GameEvent_KeeperHeldBall.toJSON(message.keeperHeldBall)
        : undefined);
    message.botDribbledBallTooFar !== undefined &&
      (obj.botDribbledBallTooFar = message.botDribbledBallTooFar
        ? GameEvent_BotDribbledBallTooFar.toJSON(message.botDribbledBallTooFar)
        : undefined);
    message.botPushedBot !== undefined &&
      (obj.botPushedBot = message.botPushedBot
        ? GameEvent_BotPushedBot.toJSON(message.botPushedBot)
        : undefined);
    message.botHeldBallDeliberately !== undefined &&
      (obj.botHeldBallDeliberately = message.botHeldBallDeliberately
        ? GameEvent_BotHeldBallDeliberately.toJSON(
            message.botHeldBallDeliberately
          )
        : undefined);
    message.botTippedOver !== undefined &&
      (obj.botTippedOver = message.botTippedOver
        ? GameEvent_BotTippedOver.toJSON(message.botTippedOver)
        : undefined);
    message.attackerTouchedBallInDefenseArea !== undefined &&
      (obj.attackerTouchedBallInDefenseArea = message.attackerTouchedBallInDefenseArea
        ? GameEvent_AttackerTouchedBallInDefenseArea.toJSON(
            message.attackerTouchedBallInDefenseArea
          )
        : undefined);
    message.botKickedBallTooFast !== undefined &&
      (obj.botKickedBallTooFast = message.botKickedBallTooFast
        ? GameEvent_BotKickedBallTooFast.toJSON(message.botKickedBallTooFast)
        : undefined);
    message.botCrashUnique !== undefined &&
      (obj.botCrashUnique = message.botCrashUnique
        ? GameEvent_BotCrashUnique.toJSON(message.botCrashUnique)
        : undefined);
    message.botCrashDrawn !== undefined &&
      (obj.botCrashDrawn = message.botCrashDrawn
        ? GameEvent_BotCrashDrawn.toJSON(message.botCrashDrawn)
        : undefined);
    message.defenderTooCloseToKickPoint !== undefined &&
      (obj.defenderTooCloseToKickPoint = message.defenderTooCloseToKickPoint
        ? GameEvent_DefenderTooCloseToKickPoint.toJSON(
            message.defenderTooCloseToKickPoint
          )
        : undefined);
    message.botTooFastInStop !== undefined &&
      (obj.botTooFastInStop = message.botTooFastInStop
        ? GameEvent_BotTooFastInStop.toJSON(message.botTooFastInStop)
        : undefined);
    message.botInterferedPlacement !== undefined &&
      (obj.botInterferedPlacement = message.botInterferedPlacement
        ? GameEvent_BotInterferedPlacement.toJSON(
            message.botInterferedPlacement
          )
        : undefined);
    message.possibleGoal !== undefined &&
      (obj.possibleGoal = message.possibleGoal
        ? GameEvent_Goal.toJSON(message.possibleGoal)
        : undefined);
    message.goal !== undefined &&
      (obj.goal = message.goal
        ? GameEvent_Goal.toJSON(message.goal)
        : undefined);
    message.invalidGoal !== undefined &&
      (obj.invalidGoal = message.invalidGoal
        ? GameEvent_Goal.toJSON(message.invalidGoal)
        : undefined);
    message.attackerDoubleTouchedBall !== undefined &&
      (obj.attackerDoubleTouchedBall = message.attackerDoubleTouchedBall
        ? GameEvent_AttackerDoubleTouchedBall.toJSON(
            message.attackerDoubleTouchedBall
          )
        : undefined);
    message.placementSucceeded !== undefined &&
      (obj.placementSucceeded = message.placementSucceeded
        ? GameEvent_PlacementSucceeded.toJSON(message.placementSucceeded)
        : undefined);
    message.penaltyKickFailed !== undefined &&
      (obj.penaltyKickFailed = message.penaltyKickFailed
        ? GameEvent_PenaltyKickFailed.toJSON(message.penaltyKickFailed)
        : undefined);
    message.noProgressInGame !== undefined &&
      (obj.noProgressInGame = message.noProgressInGame
        ? GameEvent_NoProgressInGame.toJSON(message.noProgressInGame)
        : undefined);
    message.placementFailed !== undefined &&
      (obj.placementFailed = message.placementFailed
        ? GameEvent_PlacementFailed.toJSON(message.placementFailed)
        : undefined);
    message.multipleCards !== undefined &&
      (obj.multipleCards = message.multipleCards
        ? GameEvent_MultipleCards.toJSON(message.multipleCards)
        : undefined);
    message.multipleFouls !== undefined &&
      (obj.multipleFouls = message.multipleFouls
        ? GameEvent_MultipleFouls.toJSON(message.multipleFouls)
        : undefined);
    message.botSubstitution !== undefined &&
      (obj.botSubstitution = message.botSubstitution
        ? GameEvent_BotSubstitution.toJSON(message.botSubstitution)
        : undefined);
    message.tooManyRobots !== undefined &&
      (obj.tooManyRobots = message.tooManyRobots
        ? GameEvent_TooManyRobots.toJSON(message.tooManyRobots)
        : undefined);
    message.challengeFlag !== undefined &&
      (obj.challengeFlag = message.challengeFlag
        ? GameEvent_ChallengeFlag.toJSON(message.challengeFlag)
        : undefined);
    message.emergencyStop !== undefined &&
      (obj.emergencyStop = message.emergencyStop
        ? GameEvent_EmergencyStop.toJSON(message.emergencyStop)
        : undefined);
    message.unsportingBehaviorMinor !== undefined &&
      (obj.unsportingBehaviorMinor = message.unsportingBehaviorMinor
        ? GameEvent_UnsportingBehaviorMinor.toJSON(
            message.unsportingBehaviorMinor
          )
        : undefined);
    message.unsportingBehaviorMajor !== undefined &&
      (obj.unsportingBehaviorMajor = message.unsportingBehaviorMajor
        ? GameEvent_UnsportingBehaviorMajor.toJSON(
            message.unsportingBehaviorMajor
          )
        : undefined);
    message.prepared !== undefined &&
      (obj.prepared = message.prepared
        ? GameEvent_Prepared.toJSON(message.prepared)
        : undefined);
    message.indirectGoal !== undefined &&
      (obj.indirectGoal = message.indirectGoal
        ? GameEvent_IndirectGoal.toJSON(message.indirectGoal)
        : undefined);
    message.chippedGoal !== undefined &&
      (obj.chippedGoal = message.chippedGoal
        ? GameEvent_ChippedGoal.toJSON(message.chippedGoal)
        : undefined);
    message.kickTimeout !== undefined &&
      (obj.kickTimeout = message.kickTimeout
        ? GameEvent_KickTimeout.toJSON(message.kickTimeout)
        : undefined);
    message.attackerTouchedOpponentInDefenseArea !== undefined &&
      (obj.attackerTouchedOpponentInDefenseArea = message.attackerTouchedOpponentInDefenseArea
        ? GameEvent_AttackerTouchedOpponentInDefenseArea.toJSON(
            message.attackerTouchedOpponentInDefenseArea
          )
        : undefined);
    message.attackerTouchedOpponentInDefenseAreaSkipped !== undefined &&
      (obj.attackerTouchedOpponentInDefenseAreaSkipped = message.attackerTouchedOpponentInDefenseAreaSkipped
        ? GameEvent_AttackerTouchedOpponentInDefenseArea.toJSON(
            message.attackerTouchedOpponentInDefenseAreaSkipped
          )
        : undefined);
    message.botCrashUniqueSkipped !== undefined &&
      (obj.botCrashUniqueSkipped = message.botCrashUniqueSkipped
        ? GameEvent_BotCrashUnique.toJSON(message.botCrashUniqueSkipped)
        : undefined);
    message.botPushedBotSkipped !== undefined &&
      (obj.botPushedBotSkipped = message.botPushedBotSkipped
        ? GameEvent_BotPushedBot.toJSON(message.botPushedBotSkipped)
        : undefined);
    message.defenderInDefenseAreaPartially !== undefined &&
      (obj.defenderInDefenseAreaPartially = message.defenderInDefenseAreaPartially
        ? GameEvent_DefenderInDefenseAreaPartially.toJSON(
            message.defenderInDefenseAreaPartially
          )
        : undefined);
    message.multiplePlacementFailures !== undefined &&
      (obj.multiplePlacementFailures = message.multiplePlacementFailures
        ? GameEvent_MultiplePlacementFailures.toJSON(
            message.multiplePlacementFailures
          )
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GameEvent>): GameEvent {
    const message = { ...baseGameEvent } as GameEvent;
    message.origin = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    if (object.origin !== undefined && object.origin !== null) {
      for (const e of object.origin) {
        message.origin.push(e);
      }
    }
    if (
      object.ballLeftFieldTouchLine !== undefined &&
      object.ballLeftFieldTouchLine !== null
    ) {
      message.ballLeftFieldTouchLine = GameEvent_BallLeftField.fromPartial(
        object.ballLeftFieldTouchLine
      );
    } else {
      message.ballLeftFieldTouchLine = undefined;
    }
    if (
      object.ballLeftFieldGoalLine !== undefined &&
      object.ballLeftFieldGoalLine !== null
    ) {
      message.ballLeftFieldGoalLine = GameEvent_BallLeftField.fromPartial(
        object.ballLeftFieldGoalLine
      );
    } else {
      message.ballLeftFieldGoalLine = undefined;
    }
    if (object.aimlessKick !== undefined && object.aimlessKick !== null) {
      message.aimlessKick = GameEvent_AimlessKick.fromPartial(
        object.aimlessKick
      );
    } else {
      message.aimlessKick = undefined;
    }
    if (
      object.attackerTooCloseToDefenseArea !== undefined &&
      object.attackerTooCloseToDefenseArea !== null
    ) {
      message.attackerTooCloseToDefenseArea = GameEvent_AttackerTooCloseToDefenseArea.fromPartial(
        object.attackerTooCloseToDefenseArea
      );
    } else {
      message.attackerTooCloseToDefenseArea = undefined;
    }
    if (
      object.defenderInDefenseArea !== undefined &&
      object.defenderInDefenseArea !== null
    ) {
      message.defenderInDefenseArea = GameEvent_DefenderInDefenseArea.fromPartial(
        object.defenderInDefenseArea
      );
    } else {
      message.defenderInDefenseArea = undefined;
    }
    if (
      object.boundaryCrossing !== undefined &&
      object.boundaryCrossing !== null
    ) {
      message.boundaryCrossing = GameEvent_BoundaryCrossing.fromPartial(
        object.boundaryCrossing
      );
    } else {
      message.boundaryCrossing = undefined;
    }
    if (object.keeperHeldBall !== undefined && object.keeperHeldBall !== null) {
      message.keeperHeldBall = GameEvent_KeeperHeldBall.fromPartial(
        object.keeperHeldBall
      );
    } else {
      message.keeperHeldBall = undefined;
    }
    if (
      object.botDribbledBallTooFar !== undefined &&
      object.botDribbledBallTooFar !== null
    ) {
      message.botDribbledBallTooFar = GameEvent_BotDribbledBallTooFar.fromPartial(
        object.botDribbledBallTooFar
      );
    } else {
      message.botDribbledBallTooFar = undefined;
    }
    if (object.botPushedBot !== undefined && object.botPushedBot !== null) {
      message.botPushedBot = GameEvent_BotPushedBot.fromPartial(
        object.botPushedBot
      );
    } else {
      message.botPushedBot = undefined;
    }
    if (
      object.botHeldBallDeliberately !== undefined &&
      object.botHeldBallDeliberately !== null
    ) {
      message.botHeldBallDeliberately = GameEvent_BotHeldBallDeliberately.fromPartial(
        object.botHeldBallDeliberately
      );
    } else {
      message.botHeldBallDeliberately = undefined;
    }
    if (object.botTippedOver !== undefined && object.botTippedOver !== null) {
      message.botTippedOver = GameEvent_BotTippedOver.fromPartial(
        object.botTippedOver
      );
    } else {
      message.botTippedOver = undefined;
    }
    if (
      object.attackerTouchedBallInDefenseArea !== undefined &&
      object.attackerTouchedBallInDefenseArea !== null
    ) {
      message.attackerTouchedBallInDefenseArea = GameEvent_AttackerTouchedBallInDefenseArea.fromPartial(
        object.attackerTouchedBallInDefenseArea
      );
    } else {
      message.attackerTouchedBallInDefenseArea = undefined;
    }
    if (
      object.botKickedBallTooFast !== undefined &&
      object.botKickedBallTooFast !== null
    ) {
      message.botKickedBallTooFast = GameEvent_BotKickedBallTooFast.fromPartial(
        object.botKickedBallTooFast
      );
    } else {
      message.botKickedBallTooFast = undefined;
    }
    if (object.botCrashUnique !== undefined && object.botCrashUnique !== null) {
      message.botCrashUnique = GameEvent_BotCrashUnique.fromPartial(
        object.botCrashUnique
      );
    } else {
      message.botCrashUnique = undefined;
    }
    if (object.botCrashDrawn !== undefined && object.botCrashDrawn !== null) {
      message.botCrashDrawn = GameEvent_BotCrashDrawn.fromPartial(
        object.botCrashDrawn
      );
    } else {
      message.botCrashDrawn = undefined;
    }
    if (
      object.defenderTooCloseToKickPoint !== undefined &&
      object.defenderTooCloseToKickPoint !== null
    ) {
      message.defenderTooCloseToKickPoint = GameEvent_DefenderTooCloseToKickPoint.fromPartial(
        object.defenderTooCloseToKickPoint
      );
    } else {
      message.defenderTooCloseToKickPoint = undefined;
    }
    if (
      object.botTooFastInStop !== undefined &&
      object.botTooFastInStop !== null
    ) {
      message.botTooFastInStop = GameEvent_BotTooFastInStop.fromPartial(
        object.botTooFastInStop
      );
    } else {
      message.botTooFastInStop = undefined;
    }
    if (
      object.botInterferedPlacement !== undefined &&
      object.botInterferedPlacement !== null
    ) {
      message.botInterferedPlacement = GameEvent_BotInterferedPlacement.fromPartial(
        object.botInterferedPlacement
      );
    } else {
      message.botInterferedPlacement = undefined;
    }
    if (object.possibleGoal !== undefined && object.possibleGoal !== null) {
      message.possibleGoal = GameEvent_Goal.fromPartial(object.possibleGoal);
    } else {
      message.possibleGoal = undefined;
    }
    if (object.goal !== undefined && object.goal !== null) {
      message.goal = GameEvent_Goal.fromPartial(object.goal);
    } else {
      message.goal = undefined;
    }
    if (object.invalidGoal !== undefined && object.invalidGoal !== null) {
      message.invalidGoal = GameEvent_Goal.fromPartial(object.invalidGoal);
    } else {
      message.invalidGoal = undefined;
    }
    if (
      object.attackerDoubleTouchedBall !== undefined &&
      object.attackerDoubleTouchedBall !== null
    ) {
      message.attackerDoubleTouchedBall = GameEvent_AttackerDoubleTouchedBall.fromPartial(
        object.attackerDoubleTouchedBall
      );
    } else {
      message.attackerDoubleTouchedBall = undefined;
    }
    if (
      object.placementSucceeded !== undefined &&
      object.placementSucceeded !== null
    ) {
      message.placementSucceeded = GameEvent_PlacementSucceeded.fromPartial(
        object.placementSucceeded
      );
    } else {
      message.placementSucceeded = undefined;
    }
    if (
      object.penaltyKickFailed !== undefined &&
      object.penaltyKickFailed !== null
    ) {
      message.penaltyKickFailed = GameEvent_PenaltyKickFailed.fromPartial(
        object.penaltyKickFailed
      );
    } else {
      message.penaltyKickFailed = undefined;
    }
    if (
      object.noProgressInGame !== undefined &&
      object.noProgressInGame !== null
    ) {
      message.noProgressInGame = GameEvent_NoProgressInGame.fromPartial(
        object.noProgressInGame
      );
    } else {
      message.noProgressInGame = undefined;
    }
    if (
      object.placementFailed !== undefined &&
      object.placementFailed !== null
    ) {
      message.placementFailed = GameEvent_PlacementFailed.fromPartial(
        object.placementFailed
      );
    } else {
      message.placementFailed = undefined;
    }
    if (object.multipleCards !== undefined && object.multipleCards !== null) {
      message.multipleCards = GameEvent_MultipleCards.fromPartial(
        object.multipleCards
      );
    } else {
      message.multipleCards = undefined;
    }
    if (object.multipleFouls !== undefined && object.multipleFouls !== null) {
      message.multipleFouls = GameEvent_MultipleFouls.fromPartial(
        object.multipleFouls
      );
    } else {
      message.multipleFouls = undefined;
    }
    if (
      object.botSubstitution !== undefined &&
      object.botSubstitution !== null
    ) {
      message.botSubstitution = GameEvent_BotSubstitution.fromPartial(
        object.botSubstitution
      );
    } else {
      message.botSubstitution = undefined;
    }
    if (object.tooManyRobots !== undefined && object.tooManyRobots !== null) {
      message.tooManyRobots = GameEvent_TooManyRobots.fromPartial(
        object.tooManyRobots
      );
    } else {
      message.tooManyRobots = undefined;
    }
    if (object.challengeFlag !== undefined && object.challengeFlag !== null) {
      message.challengeFlag = GameEvent_ChallengeFlag.fromPartial(
        object.challengeFlag
      );
    } else {
      message.challengeFlag = undefined;
    }
    if (object.emergencyStop !== undefined && object.emergencyStop !== null) {
      message.emergencyStop = GameEvent_EmergencyStop.fromPartial(
        object.emergencyStop
      );
    } else {
      message.emergencyStop = undefined;
    }
    if (
      object.unsportingBehaviorMinor !== undefined &&
      object.unsportingBehaviorMinor !== null
    ) {
      message.unsportingBehaviorMinor = GameEvent_UnsportingBehaviorMinor.fromPartial(
        object.unsportingBehaviorMinor
      );
    } else {
      message.unsportingBehaviorMinor = undefined;
    }
    if (
      object.unsportingBehaviorMajor !== undefined &&
      object.unsportingBehaviorMajor !== null
    ) {
      message.unsportingBehaviorMajor = GameEvent_UnsportingBehaviorMajor.fromPartial(
        object.unsportingBehaviorMajor
      );
    } else {
      message.unsportingBehaviorMajor = undefined;
    }
    if (object.prepared !== undefined && object.prepared !== null) {
      message.prepared = GameEvent_Prepared.fromPartial(object.prepared);
    } else {
      message.prepared = undefined;
    }
    if (object.indirectGoal !== undefined && object.indirectGoal !== null) {
      message.indirectGoal = GameEvent_IndirectGoal.fromPartial(
        object.indirectGoal
      );
    } else {
      message.indirectGoal = undefined;
    }
    if (object.chippedGoal !== undefined && object.chippedGoal !== null) {
      message.chippedGoal = GameEvent_ChippedGoal.fromPartial(
        object.chippedGoal
      );
    } else {
      message.chippedGoal = undefined;
    }
    if (object.kickTimeout !== undefined && object.kickTimeout !== null) {
      message.kickTimeout = GameEvent_KickTimeout.fromPartial(
        object.kickTimeout
      );
    } else {
      message.kickTimeout = undefined;
    }
    if (
      object.attackerTouchedOpponentInDefenseArea !== undefined &&
      object.attackerTouchedOpponentInDefenseArea !== null
    ) {
      message.attackerTouchedOpponentInDefenseArea = GameEvent_AttackerTouchedOpponentInDefenseArea.fromPartial(
        object.attackerTouchedOpponentInDefenseArea
      );
    } else {
      message.attackerTouchedOpponentInDefenseArea = undefined;
    }
    if (
      object.attackerTouchedOpponentInDefenseAreaSkipped !== undefined &&
      object.attackerTouchedOpponentInDefenseAreaSkipped !== null
    ) {
      message.attackerTouchedOpponentInDefenseAreaSkipped = GameEvent_AttackerTouchedOpponentInDefenseArea.fromPartial(
        object.attackerTouchedOpponentInDefenseAreaSkipped
      );
    } else {
      message.attackerTouchedOpponentInDefenseAreaSkipped = undefined;
    }
    if (
      object.botCrashUniqueSkipped !== undefined &&
      object.botCrashUniqueSkipped !== null
    ) {
      message.botCrashUniqueSkipped = GameEvent_BotCrashUnique.fromPartial(
        object.botCrashUniqueSkipped
      );
    } else {
      message.botCrashUniqueSkipped = undefined;
    }
    if (
      object.botPushedBotSkipped !== undefined &&
      object.botPushedBotSkipped !== null
    ) {
      message.botPushedBotSkipped = GameEvent_BotPushedBot.fromPartial(
        object.botPushedBotSkipped
      );
    } else {
      message.botPushedBotSkipped = undefined;
    }
    if (
      object.defenderInDefenseAreaPartially !== undefined &&
      object.defenderInDefenseAreaPartially !== null
    ) {
      message.defenderInDefenseAreaPartially = GameEvent_DefenderInDefenseAreaPartially.fromPartial(
        object.defenderInDefenseAreaPartially
      );
    } else {
      message.defenderInDefenseAreaPartially = undefined;
    }
    if (
      object.multiplePlacementFailures !== undefined &&
      object.multiplePlacementFailures !== null
    ) {
      message.multiplePlacementFailures = GameEvent_MultiplePlacementFailures.fromPartial(
        object.multiplePlacementFailures
      );
    } else {
      message.multiplePlacementFailures = undefined;
    }
    return message;
  },
};

const baseGameEvent_BallLeftField: object = { byTeam: 0, byBot: 0 };

export const GameEvent_BallLeftField = {
  encode(
    message: GameEvent_BallLeftField,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BallLeftField {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BallLeftField,
    } as GameEvent_BallLeftField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BallLeftField {
    const message = {
      ...baseGameEvent_BallLeftField,
    } as GameEvent_BallLeftField;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_BallLeftField): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BallLeftField>
  ): GameEvent_BallLeftField {
    const message = {
      ...baseGameEvent_BallLeftField,
    } as GameEvent_BallLeftField;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },
};

const baseGameEvent_AimlessKick: object = { byTeam: 0, byBot: 0 };

export const GameEvent_AimlessKick = {
  encode(
    message: GameEvent_AimlessKick,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.kickLocation !== undefined) {
      Vector2.encode(message.kickLocation, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_AimlessKick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEvent_AimlessKick } as GameEvent_AimlessKick;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.kickLocation = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_AimlessKick {
    const message = { ...baseGameEvent_AimlessKick } as GameEvent_AimlessKick;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.kickLocation !== undefined && object.kickLocation !== null) {
      message.kickLocation = Vector2.fromJSON(object.kickLocation);
    } else {
      message.kickLocation = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_AimlessKick): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.kickLocation !== undefined &&
      (obj.kickLocation = message.kickLocation
        ? Vector2.toJSON(message.kickLocation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_AimlessKick>
  ): GameEvent_AimlessKick {
    const message = { ...baseGameEvent_AimlessKick } as GameEvent_AimlessKick;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.kickLocation !== undefined && object.kickLocation !== null) {
      message.kickLocation = Vector2.fromPartial(object.kickLocation);
    } else {
      message.kickLocation = undefined;
    }
    return message;
  },
};

const baseGameEvent_Goal: object = {
  byTeam: 0,
  kickingTeam: 0,
  kickingBot: 0,
  maxBallHeight: 0,
  numRobotsByTeam: 0,
  lastTouchByTeam: Long.UZERO,
  message: "",
};

export const GameEvent_Goal = {
  encode(
    message: GameEvent_Goal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.kickingTeam !== 0) {
      writer.uint32(48).int32(message.kickingTeam);
    }
    if (message.kickingBot !== 0) {
      writer.uint32(16).uint32(message.kickingBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.kickLocation !== undefined) {
      Vector2.encode(message.kickLocation, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxBallHeight !== 0) {
      writer.uint32(45).float(message.maxBallHeight);
    }
    if (message.numRobotsByTeam !== 0) {
      writer.uint32(56).uint32(message.numRobotsByTeam);
    }
    if (!message.lastTouchByTeam.isZero()) {
      writer.uint32(64).uint64(message.lastTouchByTeam);
    }
    if (message.message !== "") {
      writer.uint32(74).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameEvent_Goal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEvent_Goal } as GameEvent_Goal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 6:
          message.kickingTeam = reader.int32() as any;
          break;
        case 2:
          message.kickingBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.kickLocation = Vector2.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxBallHeight = reader.float();
          break;
        case 7:
          message.numRobotsByTeam = reader.uint32();
          break;
        case 8:
          message.lastTouchByTeam = reader.uint64() as Long;
          break;
        case 9:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_Goal {
    const message = { ...baseGameEvent_Goal } as GameEvent_Goal;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.kickingTeam !== undefined && object.kickingTeam !== null) {
      message.kickingTeam = teamFromJSON(object.kickingTeam);
    } else {
      message.kickingTeam = 0;
    }
    if (object.kickingBot !== undefined && object.kickingBot !== null) {
      message.kickingBot = Number(object.kickingBot);
    } else {
      message.kickingBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.kickLocation !== undefined && object.kickLocation !== null) {
      message.kickLocation = Vector2.fromJSON(object.kickLocation);
    } else {
      message.kickLocation = undefined;
    }
    if (object.maxBallHeight !== undefined && object.maxBallHeight !== null) {
      message.maxBallHeight = Number(object.maxBallHeight);
    } else {
      message.maxBallHeight = 0;
    }
    if (
      object.numRobotsByTeam !== undefined &&
      object.numRobotsByTeam !== null
    ) {
      message.numRobotsByTeam = Number(object.numRobotsByTeam);
    } else {
      message.numRobotsByTeam = 0;
    }
    if (
      object.lastTouchByTeam !== undefined &&
      object.lastTouchByTeam !== null
    ) {
      message.lastTouchByTeam = Long.fromString(object.lastTouchByTeam);
    } else {
      message.lastTouchByTeam = Long.UZERO;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: GameEvent_Goal): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.kickingTeam !== undefined &&
      (obj.kickingTeam = teamToJSON(message.kickingTeam));
    message.kickingBot !== undefined && (obj.kickingBot = message.kickingBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.kickLocation !== undefined &&
      (obj.kickLocation = message.kickLocation
        ? Vector2.toJSON(message.kickLocation)
        : undefined);
    message.maxBallHeight !== undefined &&
      (obj.maxBallHeight = message.maxBallHeight);
    message.numRobotsByTeam !== undefined &&
      (obj.numRobotsByTeam = message.numRobotsByTeam);
    message.lastTouchByTeam !== undefined &&
      (obj.lastTouchByTeam = (
        message.lastTouchByTeam || Long.UZERO
      ).toString());
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<GameEvent_Goal>): GameEvent_Goal {
    const message = { ...baseGameEvent_Goal } as GameEvent_Goal;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.kickingTeam !== undefined && object.kickingTeam !== null) {
      message.kickingTeam = object.kickingTeam;
    } else {
      message.kickingTeam = 0;
    }
    if (object.kickingBot !== undefined && object.kickingBot !== null) {
      message.kickingBot = object.kickingBot;
    } else {
      message.kickingBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.kickLocation !== undefined && object.kickLocation !== null) {
      message.kickLocation = Vector2.fromPartial(object.kickLocation);
    } else {
      message.kickLocation = undefined;
    }
    if (object.maxBallHeight !== undefined && object.maxBallHeight !== null) {
      message.maxBallHeight = object.maxBallHeight;
    } else {
      message.maxBallHeight = 0;
    }
    if (
      object.numRobotsByTeam !== undefined &&
      object.numRobotsByTeam !== null
    ) {
      message.numRobotsByTeam = object.numRobotsByTeam;
    } else {
      message.numRobotsByTeam = 0;
    }
    if (
      object.lastTouchByTeam !== undefined &&
      object.lastTouchByTeam !== null
    ) {
      message.lastTouchByTeam = object.lastTouchByTeam as Long;
    } else {
      message.lastTouchByTeam = Long.UZERO;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

const baseGameEvent_IndirectGoal: object = { byTeam: 0, byBot: 0 };

export const GameEvent_IndirectGoal = {
  encode(
    message: GameEvent_IndirectGoal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.kickLocation !== undefined) {
      Vector2.encode(message.kickLocation, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_IndirectGoal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEvent_IndirectGoal } as GameEvent_IndirectGoal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.kickLocation = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_IndirectGoal {
    const message = { ...baseGameEvent_IndirectGoal } as GameEvent_IndirectGoal;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.kickLocation !== undefined && object.kickLocation !== null) {
      message.kickLocation = Vector2.fromJSON(object.kickLocation);
    } else {
      message.kickLocation = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_IndirectGoal): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.kickLocation !== undefined &&
      (obj.kickLocation = message.kickLocation
        ? Vector2.toJSON(message.kickLocation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_IndirectGoal>
  ): GameEvent_IndirectGoal {
    const message = { ...baseGameEvent_IndirectGoal } as GameEvent_IndirectGoal;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.kickLocation !== undefined && object.kickLocation !== null) {
      message.kickLocation = Vector2.fromPartial(object.kickLocation);
    } else {
      message.kickLocation = undefined;
    }
    return message;
  },
};

const baseGameEvent_ChippedGoal: object = {
  byTeam: 0,
  byBot: 0,
  maxBallHeight: 0,
};

export const GameEvent_ChippedGoal = {
  encode(
    message: GameEvent_ChippedGoal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.kickLocation !== undefined) {
      Vector2.encode(message.kickLocation, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxBallHeight !== 0) {
      writer.uint32(45).float(message.maxBallHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_ChippedGoal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEvent_ChippedGoal } as GameEvent_ChippedGoal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.kickLocation = Vector2.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxBallHeight = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_ChippedGoal {
    const message = { ...baseGameEvent_ChippedGoal } as GameEvent_ChippedGoal;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.kickLocation !== undefined && object.kickLocation !== null) {
      message.kickLocation = Vector2.fromJSON(object.kickLocation);
    } else {
      message.kickLocation = undefined;
    }
    if (object.maxBallHeight !== undefined && object.maxBallHeight !== null) {
      message.maxBallHeight = Number(object.maxBallHeight);
    } else {
      message.maxBallHeight = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_ChippedGoal): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.kickLocation !== undefined &&
      (obj.kickLocation = message.kickLocation
        ? Vector2.toJSON(message.kickLocation)
        : undefined);
    message.maxBallHeight !== undefined &&
      (obj.maxBallHeight = message.maxBallHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_ChippedGoal>
  ): GameEvent_ChippedGoal {
    const message = { ...baseGameEvent_ChippedGoal } as GameEvent_ChippedGoal;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.kickLocation !== undefined && object.kickLocation !== null) {
      message.kickLocation = Vector2.fromPartial(object.kickLocation);
    } else {
      message.kickLocation = undefined;
    }
    if (object.maxBallHeight !== undefined && object.maxBallHeight !== null) {
      message.maxBallHeight = object.maxBallHeight;
    } else {
      message.maxBallHeight = 0;
    }
    return message;
  },
};

const baseGameEvent_BotTooFastInStop: object = {
  byTeam: 0,
  byBot: 0,
  speed: 0,
};

export const GameEvent_BotTooFastInStop = {
  encode(
    message: GameEvent_BotTooFastInStop,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.speed !== 0) {
      writer.uint32(37).float(message.speed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotTooFastInStop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotTooFastInStop,
    } as GameEvent_BotTooFastInStop;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.speed = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotTooFastInStop {
    const message = {
      ...baseGameEvent_BotTooFastInStop,
    } as GameEvent_BotTooFastInStop;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = Number(object.speed);
    } else {
      message.speed = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_BotTooFastInStop): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.speed !== undefined && (obj.speed = message.speed);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotTooFastInStop>
  ): GameEvent_BotTooFastInStop {
    const message = {
      ...baseGameEvent_BotTooFastInStop,
    } as GameEvent_BotTooFastInStop;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.speed !== undefined && object.speed !== null) {
      message.speed = object.speed;
    } else {
      message.speed = 0;
    }
    return message;
  },
};

const baseGameEvent_DefenderTooCloseToKickPoint: object = {
  byTeam: 0,
  byBot: 0,
  distance: 0,
};

export const GameEvent_DefenderTooCloseToKickPoint = {
  encode(
    message: GameEvent_DefenderTooCloseToKickPoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_DefenderTooCloseToKickPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_DefenderTooCloseToKickPoint,
    } as GameEvent_DefenderTooCloseToKickPoint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.distance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_DefenderTooCloseToKickPoint {
    const message = {
      ...baseGameEvent_DefenderTooCloseToKickPoint,
    } as GameEvent_DefenderTooCloseToKickPoint;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = Number(object.distance);
    } else {
      message.distance = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_DefenderTooCloseToKickPoint): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_DefenderTooCloseToKickPoint>
  ): GameEvent_DefenderTooCloseToKickPoint {
    const message = {
      ...baseGameEvent_DefenderTooCloseToKickPoint,
    } as GameEvent_DefenderTooCloseToKickPoint;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = object.distance;
    } else {
      message.distance = 0;
    }
    return message;
  },
};

const baseGameEvent_BotCrashDrawn: object = {
  botYellow: 0,
  botBlue: 0,
  crashSpeed: 0,
  speedDiff: 0,
  crashAngle: 0,
};

export const GameEvent_BotCrashDrawn = {
  encode(
    message: GameEvent_BotCrashDrawn,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.botYellow !== 0) {
      writer.uint32(8).uint32(message.botYellow);
    }
    if (message.botBlue !== 0) {
      writer.uint32(16).uint32(message.botBlue);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.crashSpeed !== 0) {
      writer.uint32(37).float(message.crashSpeed);
    }
    if (message.speedDiff !== 0) {
      writer.uint32(45).float(message.speedDiff);
    }
    if (message.crashAngle !== 0) {
      writer.uint32(53).float(message.crashAngle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotCrashDrawn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotCrashDrawn,
    } as GameEvent_BotCrashDrawn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.botYellow = reader.uint32();
          break;
        case 2:
          message.botBlue = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.crashSpeed = reader.float();
          break;
        case 5:
          message.speedDiff = reader.float();
          break;
        case 6:
          message.crashAngle = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotCrashDrawn {
    const message = {
      ...baseGameEvent_BotCrashDrawn,
    } as GameEvent_BotCrashDrawn;
    if (object.botYellow !== undefined && object.botYellow !== null) {
      message.botYellow = Number(object.botYellow);
    } else {
      message.botYellow = 0;
    }
    if (object.botBlue !== undefined && object.botBlue !== null) {
      message.botBlue = Number(object.botBlue);
    } else {
      message.botBlue = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.crashSpeed !== undefined && object.crashSpeed !== null) {
      message.crashSpeed = Number(object.crashSpeed);
    } else {
      message.crashSpeed = 0;
    }
    if (object.speedDiff !== undefined && object.speedDiff !== null) {
      message.speedDiff = Number(object.speedDiff);
    } else {
      message.speedDiff = 0;
    }
    if (object.crashAngle !== undefined && object.crashAngle !== null) {
      message.crashAngle = Number(object.crashAngle);
    } else {
      message.crashAngle = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_BotCrashDrawn): unknown {
    const obj: any = {};
    message.botYellow !== undefined && (obj.botYellow = message.botYellow);
    message.botBlue !== undefined && (obj.botBlue = message.botBlue);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.crashSpeed !== undefined && (obj.crashSpeed = message.crashSpeed);
    message.speedDiff !== undefined && (obj.speedDiff = message.speedDiff);
    message.crashAngle !== undefined && (obj.crashAngle = message.crashAngle);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotCrashDrawn>
  ): GameEvent_BotCrashDrawn {
    const message = {
      ...baseGameEvent_BotCrashDrawn,
    } as GameEvent_BotCrashDrawn;
    if (object.botYellow !== undefined && object.botYellow !== null) {
      message.botYellow = object.botYellow;
    } else {
      message.botYellow = 0;
    }
    if (object.botBlue !== undefined && object.botBlue !== null) {
      message.botBlue = object.botBlue;
    } else {
      message.botBlue = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.crashSpeed !== undefined && object.crashSpeed !== null) {
      message.crashSpeed = object.crashSpeed;
    } else {
      message.crashSpeed = 0;
    }
    if (object.speedDiff !== undefined && object.speedDiff !== null) {
      message.speedDiff = object.speedDiff;
    } else {
      message.speedDiff = 0;
    }
    if (object.crashAngle !== undefined && object.crashAngle !== null) {
      message.crashAngle = object.crashAngle;
    } else {
      message.crashAngle = 0;
    }
    return message;
  },
};

const baseGameEvent_BotCrashUnique: object = {
  byTeam: 0,
  violator: 0,
  victim: 0,
  crashSpeed: 0,
  speedDiff: 0,
  crashAngle: 0,
};

export const GameEvent_BotCrashUnique = {
  encode(
    message: GameEvent_BotCrashUnique,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.violator !== 0) {
      writer.uint32(16).uint32(message.violator);
    }
    if (message.victim !== 0) {
      writer.uint32(24).uint32(message.victim);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(34).fork()).ldelim();
    }
    if (message.crashSpeed !== 0) {
      writer.uint32(45).float(message.crashSpeed);
    }
    if (message.speedDiff !== 0) {
      writer.uint32(53).float(message.speedDiff);
    }
    if (message.crashAngle !== 0) {
      writer.uint32(61).float(message.crashAngle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotCrashUnique {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotCrashUnique,
    } as GameEvent_BotCrashUnique;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.violator = reader.uint32();
          break;
        case 3:
          message.victim = reader.uint32();
          break;
        case 4:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 5:
          message.crashSpeed = reader.float();
          break;
        case 6:
          message.speedDiff = reader.float();
          break;
        case 7:
          message.crashAngle = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotCrashUnique {
    const message = {
      ...baseGameEvent_BotCrashUnique,
    } as GameEvent_BotCrashUnique;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.violator !== undefined && object.violator !== null) {
      message.violator = Number(object.violator);
    } else {
      message.violator = 0;
    }
    if (object.victim !== undefined && object.victim !== null) {
      message.victim = Number(object.victim);
    } else {
      message.victim = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.crashSpeed !== undefined && object.crashSpeed !== null) {
      message.crashSpeed = Number(object.crashSpeed);
    } else {
      message.crashSpeed = 0;
    }
    if (object.speedDiff !== undefined && object.speedDiff !== null) {
      message.speedDiff = Number(object.speedDiff);
    } else {
      message.speedDiff = 0;
    }
    if (object.crashAngle !== undefined && object.crashAngle !== null) {
      message.crashAngle = Number(object.crashAngle);
    } else {
      message.crashAngle = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_BotCrashUnique): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.violator !== undefined && (obj.violator = message.violator);
    message.victim !== undefined && (obj.victim = message.victim);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.crashSpeed !== undefined && (obj.crashSpeed = message.crashSpeed);
    message.speedDiff !== undefined && (obj.speedDiff = message.speedDiff);
    message.crashAngle !== undefined && (obj.crashAngle = message.crashAngle);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotCrashUnique>
  ): GameEvent_BotCrashUnique {
    const message = {
      ...baseGameEvent_BotCrashUnique,
    } as GameEvent_BotCrashUnique;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.violator !== undefined && object.violator !== null) {
      message.violator = object.violator;
    } else {
      message.violator = 0;
    }
    if (object.victim !== undefined && object.victim !== null) {
      message.victim = object.victim;
    } else {
      message.victim = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.crashSpeed !== undefined && object.crashSpeed !== null) {
      message.crashSpeed = object.crashSpeed;
    } else {
      message.crashSpeed = 0;
    }
    if (object.speedDiff !== undefined && object.speedDiff !== null) {
      message.speedDiff = object.speedDiff;
    } else {
      message.speedDiff = 0;
    }
    if (object.crashAngle !== undefined && object.crashAngle !== null) {
      message.crashAngle = object.crashAngle;
    } else {
      message.crashAngle = 0;
    }
    return message;
  },
};

const baseGameEvent_BotPushedBot: object = {
  byTeam: 0,
  violator: 0,
  victim: 0,
  pushedDistance: 0,
};

export const GameEvent_BotPushedBot = {
  encode(
    message: GameEvent_BotPushedBot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.violator !== 0) {
      writer.uint32(16).uint32(message.violator);
    }
    if (message.victim !== 0) {
      writer.uint32(24).uint32(message.victim);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(34).fork()).ldelim();
    }
    if (message.pushedDistance !== 0) {
      writer.uint32(45).float(message.pushedDistance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotPushedBot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEvent_BotPushedBot } as GameEvent_BotPushedBot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.violator = reader.uint32();
          break;
        case 3:
          message.victim = reader.uint32();
          break;
        case 4:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 5:
          message.pushedDistance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotPushedBot {
    const message = { ...baseGameEvent_BotPushedBot } as GameEvent_BotPushedBot;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.violator !== undefined && object.violator !== null) {
      message.violator = Number(object.violator);
    } else {
      message.violator = 0;
    }
    if (object.victim !== undefined && object.victim !== null) {
      message.victim = Number(object.victim);
    } else {
      message.victim = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.pushedDistance !== undefined && object.pushedDistance !== null) {
      message.pushedDistance = Number(object.pushedDistance);
    } else {
      message.pushedDistance = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_BotPushedBot): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.violator !== undefined && (obj.violator = message.violator);
    message.victim !== undefined && (obj.victim = message.victim);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.pushedDistance !== undefined &&
      (obj.pushedDistance = message.pushedDistance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotPushedBot>
  ): GameEvent_BotPushedBot {
    const message = { ...baseGameEvent_BotPushedBot } as GameEvent_BotPushedBot;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.violator !== undefined && object.violator !== null) {
      message.violator = object.violator;
    } else {
      message.violator = 0;
    }
    if (object.victim !== undefined && object.victim !== null) {
      message.victim = object.victim;
    } else {
      message.victim = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.pushedDistance !== undefined && object.pushedDistance !== null) {
      message.pushedDistance = object.pushedDistance;
    } else {
      message.pushedDistance = 0;
    }
    return message;
  },
};

const baseGameEvent_BotTippedOver: object = { byTeam: 0, byBot: 0 };

export const GameEvent_BotTippedOver = {
  encode(
    message: GameEvent_BotTippedOver,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.ballLocation !== undefined) {
      Vector2.encode(message.ballLocation, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotTippedOver {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotTippedOver,
    } as GameEvent_BotTippedOver;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.ballLocation = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotTippedOver {
    const message = {
      ...baseGameEvent_BotTippedOver,
    } as GameEvent_BotTippedOver;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.ballLocation !== undefined && object.ballLocation !== null) {
      message.ballLocation = Vector2.fromJSON(object.ballLocation);
    } else {
      message.ballLocation = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_BotTippedOver): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.ballLocation !== undefined &&
      (obj.ballLocation = message.ballLocation
        ? Vector2.toJSON(message.ballLocation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotTippedOver>
  ): GameEvent_BotTippedOver {
    const message = {
      ...baseGameEvent_BotTippedOver,
    } as GameEvent_BotTippedOver;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.ballLocation !== undefined && object.ballLocation !== null) {
      message.ballLocation = Vector2.fromPartial(object.ballLocation);
    } else {
      message.ballLocation = undefined;
    }
    return message;
  },
};

const baseGameEvent_DefenderInDefenseArea: object = {
  byTeam: 0,
  byBot: 0,
  distance: 0,
};

export const GameEvent_DefenderInDefenseArea = {
  encode(
    message: GameEvent_DefenderInDefenseArea,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_DefenderInDefenseArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_DefenderInDefenseArea,
    } as GameEvent_DefenderInDefenseArea;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.distance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_DefenderInDefenseArea {
    const message = {
      ...baseGameEvent_DefenderInDefenseArea,
    } as GameEvent_DefenderInDefenseArea;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = Number(object.distance);
    } else {
      message.distance = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_DefenderInDefenseArea): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_DefenderInDefenseArea>
  ): GameEvent_DefenderInDefenseArea {
    const message = {
      ...baseGameEvent_DefenderInDefenseArea,
    } as GameEvent_DefenderInDefenseArea;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = object.distance;
    } else {
      message.distance = 0;
    }
    return message;
  },
};

const baseGameEvent_DefenderInDefenseAreaPartially: object = {
  byTeam: 0,
  byBot: 0,
  distance: 0,
};

export const GameEvent_DefenderInDefenseAreaPartially = {
  encode(
    message: GameEvent_DefenderInDefenseAreaPartially,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    if (message.ballLocation !== undefined) {
      Vector2.encode(message.ballLocation, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_DefenderInDefenseAreaPartially {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_DefenderInDefenseAreaPartially,
    } as GameEvent_DefenderInDefenseAreaPartially;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.distance = reader.float();
          break;
        case 5:
          message.ballLocation = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_DefenderInDefenseAreaPartially {
    const message = {
      ...baseGameEvent_DefenderInDefenseAreaPartially,
    } as GameEvent_DefenderInDefenseAreaPartially;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = Number(object.distance);
    } else {
      message.distance = 0;
    }
    if (object.ballLocation !== undefined && object.ballLocation !== null) {
      message.ballLocation = Vector2.fromJSON(object.ballLocation);
    } else {
      message.ballLocation = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_DefenderInDefenseAreaPartially): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.distance !== undefined && (obj.distance = message.distance);
    message.ballLocation !== undefined &&
      (obj.ballLocation = message.ballLocation
        ? Vector2.toJSON(message.ballLocation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_DefenderInDefenseAreaPartially>
  ): GameEvent_DefenderInDefenseAreaPartially {
    const message = {
      ...baseGameEvent_DefenderInDefenseAreaPartially,
    } as GameEvent_DefenderInDefenseAreaPartially;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = object.distance;
    } else {
      message.distance = 0;
    }
    if (object.ballLocation !== undefined && object.ballLocation !== null) {
      message.ballLocation = Vector2.fromPartial(object.ballLocation);
    } else {
      message.ballLocation = undefined;
    }
    return message;
  },
};

const baseGameEvent_AttackerTouchedBallInDefenseArea: object = {
  byTeam: 0,
  byBot: 0,
  distance: 0,
};

export const GameEvent_AttackerTouchedBallInDefenseArea = {
  encode(
    message: GameEvent_AttackerTouchedBallInDefenseArea,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_AttackerTouchedBallInDefenseArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_AttackerTouchedBallInDefenseArea,
    } as GameEvent_AttackerTouchedBallInDefenseArea;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.distance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_AttackerTouchedBallInDefenseArea {
    const message = {
      ...baseGameEvent_AttackerTouchedBallInDefenseArea,
    } as GameEvent_AttackerTouchedBallInDefenseArea;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = Number(object.distance);
    } else {
      message.distance = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_AttackerTouchedBallInDefenseArea): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_AttackerTouchedBallInDefenseArea>
  ): GameEvent_AttackerTouchedBallInDefenseArea {
    const message = {
      ...baseGameEvent_AttackerTouchedBallInDefenseArea,
    } as GameEvent_AttackerTouchedBallInDefenseArea;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = object.distance;
    } else {
      message.distance = 0;
    }
    return message;
  },
};

const baseGameEvent_BotKickedBallTooFast: object = {
  byTeam: 0,
  byBot: 0,
  initialBallSpeed: 0,
  chipped: false,
};

export const GameEvent_BotKickedBallTooFast = {
  encode(
    message: GameEvent_BotKickedBallTooFast,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.initialBallSpeed !== 0) {
      writer.uint32(37).float(message.initialBallSpeed);
    }
    if (message.chipped === true) {
      writer.uint32(40).bool(message.chipped);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotKickedBallTooFast {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotKickedBallTooFast,
    } as GameEvent_BotKickedBallTooFast;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.initialBallSpeed = reader.float();
          break;
        case 5:
          message.chipped = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotKickedBallTooFast {
    const message = {
      ...baseGameEvent_BotKickedBallTooFast,
    } as GameEvent_BotKickedBallTooFast;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (
      object.initialBallSpeed !== undefined &&
      object.initialBallSpeed !== null
    ) {
      message.initialBallSpeed = Number(object.initialBallSpeed);
    } else {
      message.initialBallSpeed = 0;
    }
    if (object.chipped !== undefined && object.chipped !== null) {
      message.chipped = Boolean(object.chipped);
    } else {
      message.chipped = false;
    }
    return message;
  },

  toJSON(message: GameEvent_BotKickedBallTooFast): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.initialBallSpeed !== undefined &&
      (obj.initialBallSpeed = message.initialBallSpeed);
    message.chipped !== undefined && (obj.chipped = message.chipped);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotKickedBallTooFast>
  ): GameEvent_BotKickedBallTooFast {
    const message = {
      ...baseGameEvent_BotKickedBallTooFast,
    } as GameEvent_BotKickedBallTooFast;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (
      object.initialBallSpeed !== undefined &&
      object.initialBallSpeed !== null
    ) {
      message.initialBallSpeed = object.initialBallSpeed;
    } else {
      message.initialBallSpeed = 0;
    }
    if (object.chipped !== undefined && object.chipped !== null) {
      message.chipped = object.chipped;
    } else {
      message.chipped = false;
    }
    return message;
  },
};

const baseGameEvent_BotDribbledBallTooFar: object = { byTeam: 0, byBot: 0 };

export const GameEvent_BotDribbledBallTooFar = {
  encode(
    message: GameEvent_BotDribbledBallTooFar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.start !== undefined) {
      Vector2.encode(message.start, writer.uint32(26).fork()).ldelim();
    }
    if (message.end !== undefined) {
      Vector2.encode(message.end, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotDribbledBallTooFar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotDribbledBallTooFar,
    } as GameEvent_BotDribbledBallTooFar;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.start = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.end = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotDribbledBallTooFar {
    const message = {
      ...baseGameEvent_BotDribbledBallTooFar,
    } as GameEvent_BotDribbledBallTooFar;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Vector2.fromJSON(object.start);
    } else {
      message.start = undefined;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Vector2.fromJSON(object.end);
    } else {
      message.end = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_BotDribbledBallTooFar): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.start !== undefined &&
      (obj.start = message.start ? Vector2.toJSON(message.start) : undefined);
    message.end !== undefined &&
      (obj.end = message.end ? Vector2.toJSON(message.end) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotDribbledBallTooFar>
  ): GameEvent_BotDribbledBallTooFar {
    const message = {
      ...baseGameEvent_BotDribbledBallTooFar,
    } as GameEvent_BotDribbledBallTooFar;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = Vector2.fromPartial(object.start);
    } else {
      message.start = undefined;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = Vector2.fromPartial(object.end);
    } else {
      message.end = undefined;
    }
    return message;
  },
};

const baseGameEvent_AttackerTouchedOpponentInDefenseArea: object = {
  byTeam: 0,
  byBot: 0,
  victim: 0,
};

export const GameEvent_AttackerTouchedOpponentInDefenseArea = {
  encode(
    message: GameEvent_AttackerTouchedOpponentInDefenseArea,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.victim !== 0) {
      writer.uint32(32).uint32(message.victim);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_AttackerTouchedOpponentInDefenseArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_AttackerTouchedOpponentInDefenseArea,
    } as GameEvent_AttackerTouchedOpponentInDefenseArea;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 4:
          message.victim = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_AttackerTouchedOpponentInDefenseArea {
    const message = {
      ...baseGameEvent_AttackerTouchedOpponentInDefenseArea,
    } as GameEvent_AttackerTouchedOpponentInDefenseArea;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.victim !== undefined && object.victim !== null) {
      message.victim = Number(object.victim);
    } else {
      message.victim = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_AttackerTouchedOpponentInDefenseArea): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.victim !== undefined && (obj.victim = message.victim);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_AttackerTouchedOpponentInDefenseArea>
  ): GameEvent_AttackerTouchedOpponentInDefenseArea {
    const message = {
      ...baseGameEvent_AttackerTouchedOpponentInDefenseArea,
    } as GameEvent_AttackerTouchedOpponentInDefenseArea;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.victim !== undefined && object.victim !== null) {
      message.victim = object.victim;
    } else {
      message.victim = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },
};

const baseGameEvent_AttackerDoubleTouchedBall: object = { byTeam: 0, byBot: 0 };

export const GameEvent_AttackerDoubleTouchedBall = {
  encode(
    message: GameEvent_AttackerDoubleTouchedBall,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_AttackerDoubleTouchedBall {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_AttackerDoubleTouchedBall,
    } as GameEvent_AttackerDoubleTouchedBall;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_AttackerDoubleTouchedBall {
    const message = {
      ...baseGameEvent_AttackerDoubleTouchedBall,
    } as GameEvent_AttackerDoubleTouchedBall;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_AttackerDoubleTouchedBall): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_AttackerDoubleTouchedBall>
  ): GameEvent_AttackerDoubleTouchedBall {
    const message = {
      ...baseGameEvent_AttackerDoubleTouchedBall,
    } as GameEvent_AttackerDoubleTouchedBall;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },
};

const baseGameEvent_AttackerTooCloseToDefenseArea: object = {
  byTeam: 0,
  byBot: 0,
  distance: 0,
};

export const GameEvent_AttackerTooCloseToDefenseArea = {
  encode(
    message: GameEvent_AttackerTooCloseToDefenseArea,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    if (message.ballLocation !== undefined) {
      Vector2.encode(message.ballLocation, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_AttackerTooCloseToDefenseArea {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_AttackerTooCloseToDefenseArea,
    } as GameEvent_AttackerTooCloseToDefenseArea;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.distance = reader.float();
          break;
        case 5:
          message.ballLocation = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_AttackerTooCloseToDefenseArea {
    const message = {
      ...baseGameEvent_AttackerTooCloseToDefenseArea,
    } as GameEvent_AttackerTooCloseToDefenseArea;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = Number(object.distance);
    } else {
      message.distance = 0;
    }
    if (object.ballLocation !== undefined && object.ballLocation !== null) {
      message.ballLocation = Vector2.fromJSON(object.ballLocation);
    } else {
      message.ballLocation = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_AttackerTooCloseToDefenseArea): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.distance !== undefined && (obj.distance = message.distance);
    message.ballLocation !== undefined &&
      (obj.ballLocation = message.ballLocation
        ? Vector2.toJSON(message.ballLocation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_AttackerTooCloseToDefenseArea>
  ): GameEvent_AttackerTooCloseToDefenseArea {
    const message = {
      ...baseGameEvent_AttackerTooCloseToDefenseArea,
    } as GameEvent_AttackerTooCloseToDefenseArea;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = object.distance;
    } else {
      message.distance = 0;
    }
    if (object.ballLocation !== undefined && object.ballLocation !== null) {
      message.ballLocation = Vector2.fromPartial(object.ballLocation);
    } else {
      message.ballLocation = undefined;
    }
    return message;
  },
};

const baseGameEvent_BotHeldBallDeliberately: object = {
  byTeam: 0,
  byBot: 0,
  duration: 0,
};

export const GameEvent_BotHeldBallDeliberately = {
  encode(
    message: GameEvent_BotHeldBallDeliberately,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(37).float(message.duration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotHeldBallDeliberately {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotHeldBallDeliberately,
    } as GameEvent_BotHeldBallDeliberately;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 4:
          message.duration = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotHeldBallDeliberately {
    const message = {
      ...baseGameEvent_BotHeldBallDeliberately,
    } as GameEvent_BotHeldBallDeliberately;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Number(object.duration);
    } else {
      message.duration = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_BotHeldBallDeliberately): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotHeldBallDeliberately>
  ): GameEvent_BotHeldBallDeliberately {
    const message = {
      ...baseGameEvent_BotHeldBallDeliberately,
    } as GameEvent_BotHeldBallDeliberately;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = 0;
    }
    return message;
  },
};

const baseGameEvent_BotInterferedPlacement: object = { byTeam: 0, byBot: 0 };

export const GameEvent_BotInterferedPlacement = {
  encode(
    message: GameEvent_BotInterferedPlacement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.byBot !== 0) {
      writer.uint32(16).uint32(message.byBot);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotInterferedPlacement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotInterferedPlacement,
    } as GameEvent_BotInterferedPlacement;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.byBot = reader.uint32();
          break;
        case 3:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotInterferedPlacement {
    const message = {
      ...baseGameEvent_BotInterferedPlacement,
    } as GameEvent_BotInterferedPlacement;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = Number(object.byBot);
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_BotInterferedPlacement): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.byBot !== undefined && (obj.byBot = message.byBot);
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotInterferedPlacement>
  ): GameEvent_BotInterferedPlacement {
    const message = {
      ...baseGameEvent_BotInterferedPlacement,
    } as GameEvent_BotInterferedPlacement;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.byBot !== undefined && object.byBot !== null) {
      message.byBot = object.byBot;
    } else {
      message.byBot = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },
};

const baseGameEvent_MultipleCards: object = { byTeam: 0 };

export const GameEvent_MultipleCards = {
  encode(
    message: GameEvent_MultipleCards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_MultipleCards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_MultipleCards,
    } as GameEvent_MultipleCards;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_MultipleCards {
    const message = {
      ...baseGameEvent_MultipleCards,
    } as GameEvent_MultipleCards;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_MultipleCards): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_MultipleCards>
  ): GameEvent_MultipleCards {
    const message = {
      ...baseGameEvent_MultipleCards,
    } as GameEvent_MultipleCards;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    return message;
  },
};

const baseGameEvent_MultipleFouls: object = { byTeam: 0 };

export const GameEvent_MultipleFouls = {
  encode(
    message: GameEvent_MultipleFouls,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_MultipleFouls {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_MultipleFouls,
    } as GameEvent_MultipleFouls;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_MultipleFouls {
    const message = {
      ...baseGameEvent_MultipleFouls,
    } as GameEvent_MultipleFouls;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_MultipleFouls): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_MultipleFouls>
  ): GameEvent_MultipleFouls {
    const message = {
      ...baseGameEvent_MultipleFouls,
    } as GameEvent_MultipleFouls;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    return message;
  },
};

const baseGameEvent_MultiplePlacementFailures: object = { byTeam: 0 };

export const GameEvent_MultiplePlacementFailures = {
  encode(
    message: GameEvent_MultiplePlacementFailures,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_MultiplePlacementFailures {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_MultiplePlacementFailures,
    } as GameEvent_MultiplePlacementFailures;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_MultiplePlacementFailures {
    const message = {
      ...baseGameEvent_MultiplePlacementFailures,
    } as GameEvent_MultiplePlacementFailures;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_MultiplePlacementFailures): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_MultiplePlacementFailures>
  ): GameEvent_MultiplePlacementFailures {
    const message = {
      ...baseGameEvent_MultiplePlacementFailures,
    } as GameEvent_MultiplePlacementFailures;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    return message;
  },
};

const baseGameEvent_KickTimeout: object = { byTeam: 0, time: 0 };

export const GameEvent_KickTimeout = {
  encode(
    message: GameEvent_KickTimeout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    if (message.time !== 0) {
      writer.uint32(29).float(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_KickTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEvent_KickTimeout } as GameEvent_KickTimeout;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 3:
          message.time = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_KickTimeout {
    const message = { ...baseGameEvent_KickTimeout } as GameEvent_KickTimeout;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Number(object.time);
    } else {
      message.time = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_KickTimeout): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_KickTimeout>
  ): GameEvent_KickTimeout {
    const message = { ...baseGameEvent_KickTimeout } as GameEvent_KickTimeout;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = 0;
    }
    return message;
  },
};

const baseGameEvent_NoProgressInGame: object = { time: 0 };

export const GameEvent_NoProgressInGame = {
  encode(
    message: GameEvent_NoProgressInGame,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== 0) {
      writer.uint32(21).float(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_NoProgressInGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_NoProgressInGame,
    } as GameEvent_NoProgressInGame;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 2:
          message.time = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_NoProgressInGame {
    const message = {
      ...baseGameEvent_NoProgressInGame,
    } as GameEvent_NoProgressInGame;
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Number(object.time);
    } else {
      message.time = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_NoProgressInGame): unknown {
    const obj: any = {};
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_NoProgressInGame>
  ): GameEvent_NoProgressInGame {
    const message = {
      ...baseGameEvent_NoProgressInGame,
    } as GameEvent_NoProgressInGame;
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = 0;
    }
    return message;
  },
};

const baseGameEvent_PlacementFailed: object = {
  byTeam: 0,
  remainingDistance: 0,
};

export const GameEvent_PlacementFailed = {
  encode(
    message: GameEvent_PlacementFailed,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.remainingDistance !== 0) {
      writer.uint32(21).float(message.remainingDistance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_PlacementFailed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_PlacementFailed,
    } as GameEvent_PlacementFailed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.remainingDistance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_PlacementFailed {
    const message = {
      ...baseGameEvent_PlacementFailed,
    } as GameEvent_PlacementFailed;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (
      object.remainingDistance !== undefined &&
      object.remainingDistance !== null
    ) {
      message.remainingDistance = Number(object.remainingDistance);
    } else {
      message.remainingDistance = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_PlacementFailed): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.remainingDistance !== undefined &&
      (obj.remainingDistance = message.remainingDistance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_PlacementFailed>
  ): GameEvent_PlacementFailed {
    const message = {
      ...baseGameEvent_PlacementFailed,
    } as GameEvent_PlacementFailed;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (
      object.remainingDistance !== undefined &&
      object.remainingDistance !== null
    ) {
      message.remainingDistance = object.remainingDistance;
    } else {
      message.remainingDistance = 0;
    }
    return message;
  },
};

const baseGameEvent_UnsportingBehaviorMinor: object = { byTeam: 0, reason: "" };

export const GameEvent_UnsportingBehaviorMinor = {
  encode(
    message: GameEvent_UnsportingBehaviorMinor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_UnsportingBehaviorMinor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_UnsportingBehaviorMinor,
    } as GameEvent_UnsportingBehaviorMinor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_UnsportingBehaviorMinor {
    const message = {
      ...baseGameEvent_UnsportingBehaviorMinor,
    } as GameEvent_UnsportingBehaviorMinor;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason);
    } else {
      message.reason = "";
    }
    return message;
  },

  toJSON(message: GameEvent_UnsportingBehaviorMinor): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_UnsportingBehaviorMinor>
  ): GameEvent_UnsportingBehaviorMinor {
    const message = {
      ...baseGameEvent_UnsportingBehaviorMinor,
    } as GameEvent_UnsportingBehaviorMinor;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    return message;
  },
};

const baseGameEvent_UnsportingBehaviorMajor: object = { byTeam: 0, reason: "" };

export const GameEvent_UnsportingBehaviorMajor = {
  encode(
    message: GameEvent_UnsportingBehaviorMajor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_UnsportingBehaviorMajor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_UnsportingBehaviorMajor,
    } as GameEvent_UnsportingBehaviorMajor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_UnsportingBehaviorMajor {
    const message = {
      ...baseGameEvent_UnsportingBehaviorMajor,
    } as GameEvent_UnsportingBehaviorMajor;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason);
    } else {
      message.reason = "";
    }
    return message;
  },

  toJSON(message: GameEvent_UnsportingBehaviorMajor): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_UnsportingBehaviorMajor>
  ): GameEvent_UnsportingBehaviorMajor {
    const message = {
      ...baseGameEvent_UnsportingBehaviorMajor,
    } as GameEvent_UnsportingBehaviorMajor;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    return message;
  },
};

const baseGameEvent_KeeperHeldBall: object = { byTeam: 0, duration: 0 };

export const GameEvent_KeeperHeldBall = {
  encode(
    message: GameEvent_KeeperHeldBall,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== 0) {
      writer.uint32(29).float(message.duration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_KeeperHeldBall {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_KeeperHeldBall,
    } as GameEvent_KeeperHeldBall;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        case 3:
          message.duration = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_KeeperHeldBall {
    const message = {
      ...baseGameEvent_KeeperHeldBall,
    } as GameEvent_KeeperHeldBall;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Number(object.duration);
    } else {
      message.duration = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_KeeperHeldBall): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    message.duration !== undefined && (obj.duration = message.duration);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_KeeperHeldBall>
  ): GameEvent_KeeperHeldBall {
    const message = {
      ...baseGameEvent_KeeperHeldBall,
    } as GameEvent_KeeperHeldBall;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = object.duration;
    } else {
      message.duration = 0;
    }
    return message;
  },
};

const baseGameEvent_PlacementSucceeded: object = {
  byTeam: 0,
  timeTaken: 0,
  precision: 0,
  distance: 0,
};

export const GameEvent_PlacementSucceeded = {
  encode(
    message: GameEvent_PlacementSucceeded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.timeTaken !== 0) {
      writer.uint32(21).float(message.timeTaken);
    }
    if (message.precision !== 0) {
      writer.uint32(29).float(message.precision);
    }
    if (message.distance !== 0) {
      writer.uint32(37).float(message.distance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_PlacementSucceeded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_PlacementSucceeded,
    } as GameEvent_PlacementSucceeded;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.timeTaken = reader.float();
          break;
        case 3:
          message.precision = reader.float();
          break;
        case 4:
          message.distance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_PlacementSucceeded {
    const message = {
      ...baseGameEvent_PlacementSucceeded,
    } as GameEvent_PlacementSucceeded;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.timeTaken !== undefined && object.timeTaken !== null) {
      message.timeTaken = Number(object.timeTaken);
    } else {
      message.timeTaken = 0;
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = Number(object.precision);
    } else {
      message.precision = 0;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = Number(object.distance);
    } else {
      message.distance = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_PlacementSucceeded): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.timeTaken !== undefined && (obj.timeTaken = message.timeTaken);
    message.precision !== undefined && (obj.precision = message.precision);
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_PlacementSucceeded>
  ): GameEvent_PlacementSucceeded {
    const message = {
      ...baseGameEvent_PlacementSucceeded,
    } as GameEvent_PlacementSucceeded;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.timeTaken !== undefined && object.timeTaken !== null) {
      message.timeTaken = object.timeTaken;
    } else {
      message.timeTaken = 0;
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = object.precision;
    } else {
      message.precision = 0;
    }
    if (object.distance !== undefined && object.distance !== null) {
      message.distance = object.distance;
    } else {
      message.distance = 0;
    }
    return message;
  },
};

const baseGameEvent_Prepared: object = { timeTaken: 0 };

export const GameEvent_Prepared = {
  encode(
    message: GameEvent_Prepared,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeTaken !== 0) {
      writer.uint32(13).float(message.timeTaken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameEvent_Prepared {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGameEvent_Prepared } as GameEvent_Prepared;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeTaken = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_Prepared {
    const message = { ...baseGameEvent_Prepared } as GameEvent_Prepared;
    if (object.timeTaken !== undefined && object.timeTaken !== null) {
      message.timeTaken = Number(object.timeTaken);
    } else {
      message.timeTaken = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_Prepared): unknown {
    const obj: any = {};
    message.timeTaken !== undefined && (obj.timeTaken = message.timeTaken);
    return obj;
  },

  fromPartial(object: DeepPartial<GameEvent_Prepared>): GameEvent_Prepared {
    const message = { ...baseGameEvent_Prepared } as GameEvent_Prepared;
    if (object.timeTaken !== undefined && object.timeTaken !== null) {
      message.timeTaken = object.timeTaken;
    } else {
      message.timeTaken = 0;
    }
    return message;
  },
};

const baseGameEvent_BotSubstitution: object = { byTeam: 0 };

export const GameEvent_BotSubstitution = {
  encode(
    message: GameEvent_BotSubstitution,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BotSubstitution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BotSubstitution,
    } as GameEvent_BotSubstitution;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BotSubstitution {
    const message = {
      ...baseGameEvent_BotSubstitution,
    } as GameEvent_BotSubstitution;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_BotSubstitution): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BotSubstitution>
  ): GameEvent_BotSubstitution {
    const message = {
      ...baseGameEvent_BotSubstitution,
    } as GameEvent_BotSubstitution;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    return message;
  },
};

const baseGameEvent_ChallengeFlag: object = { byTeam: 0 };

export const GameEvent_ChallengeFlag = {
  encode(
    message: GameEvent_ChallengeFlag,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_ChallengeFlag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_ChallengeFlag,
    } as GameEvent_ChallengeFlag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_ChallengeFlag {
    const message = {
      ...baseGameEvent_ChallengeFlag,
    } as GameEvent_ChallengeFlag;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_ChallengeFlag): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_ChallengeFlag>
  ): GameEvent_ChallengeFlag {
    const message = {
      ...baseGameEvent_ChallengeFlag,
    } as GameEvent_ChallengeFlag;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    return message;
  },
};

const baseGameEvent_EmergencyStop: object = { byTeam: 0 };

export const GameEvent_EmergencyStop = {
  encode(
    message: GameEvent_EmergencyStop,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_EmergencyStop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_EmergencyStop,
    } as GameEvent_EmergencyStop;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_EmergencyStop {
    const message = {
      ...baseGameEvent_EmergencyStop,
    } as GameEvent_EmergencyStop;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    return message;
  },

  toJSON(message: GameEvent_EmergencyStop): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_EmergencyStop>
  ): GameEvent_EmergencyStop {
    const message = {
      ...baseGameEvent_EmergencyStop,
    } as GameEvent_EmergencyStop;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    return message;
  },
};

const baseGameEvent_TooManyRobots: object = {
  byTeam: 0,
  numRobotsAllowed: 0,
  numRobotsOnField: 0,
};

export const GameEvent_TooManyRobots = {
  encode(
    message: GameEvent_TooManyRobots,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.numRobotsAllowed !== 0) {
      writer.uint32(16).int32(message.numRobotsAllowed);
    }
    if (message.numRobotsOnField !== 0) {
      writer.uint32(24).int32(message.numRobotsOnField);
    }
    if (message.ballLocation !== undefined) {
      Vector2.encode(message.ballLocation, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_TooManyRobots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_TooManyRobots,
    } as GameEvent_TooManyRobots;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.numRobotsAllowed = reader.int32();
          break;
        case 3:
          message.numRobotsOnField = reader.int32();
          break;
        case 4:
          message.ballLocation = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_TooManyRobots {
    const message = {
      ...baseGameEvent_TooManyRobots,
    } as GameEvent_TooManyRobots;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (
      object.numRobotsAllowed !== undefined &&
      object.numRobotsAllowed !== null
    ) {
      message.numRobotsAllowed = Number(object.numRobotsAllowed);
    } else {
      message.numRobotsAllowed = 0;
    }
    if (
      object.numRobotsOnField !== undefined &&
      object.numRobotsOnField !== null
    ) {
      message.numRobotsOnField = Number(object.numRobotsOnField);
    } else {
      message.numRobotsOnField = 0;
    }
    if (object.ballLocation !== undefined && object.ballLocation !== null) {
      message.ballLocation = Vector2.fromJSON(object.ballLocation);
    } else {
      message.ballLocation = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_TooManyRobots): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.numRobotsAllowed !== undefined &&
      (obj.numRobotsAllowed = message.numRobotsAllowed);
    message.numRobotsOnField !== undefined &&
      (obj.numRobotsOnField = message.numRobotsOnField);
    message.ballLocation !== undefined &&
      (obj.ballLocation = message.ballLocation
        ? Vector2.toJSON(message.ballLocation)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_TooManyRobots>
  ): GameEvent_TooManyRobots {
    const message = {
      ...baseGameEvent_TooManyRobots,
    } as GameEvent_TooManyRobots;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (
      object.numRobotsAllowed !== undefined &&
      object.numRobotsAllowed !== null
    ) {
      message.numRobotsAllowed = object.numRobotsAllowed;
    } else {
      message.numRobotsAllowed = 0;
    }
    if (
      object.numRobotsOnField !== undefined &&
      object.numRobotsOnField !== null
    ) {
      message.numRobotsOnField = object.numRobotsOnField;
    } else {
      message.numRobotsOnField = 0;
    }
    if (object.ballLocation !== undefined && object.ballLocation !== null) {
      message.ballLocation = Vector2.fromPartial(object.ballLocation);
    } else {
      message.ballLocation = undefined;
    }
    return message;
  },
};

const baseGameEvent_BoundaryCrossing: object = { byTeam: 0 };

export const GameEvent_BoundaryCrossing = {
  encode(
    message: GameEvent_BoundaryCrossing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_BoundaryCrossing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_BoundaryCrossing,
    } as GameEvent_BoundaryCrossing;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_BoundaryCrossing {
    const message = {
      ...baseGameEvent_BoundaryCrossing,
    } as GameEvent_BoundaryCrossing;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_BoundaryCrossing): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_BoundaryCrossing>
  ): GameEvent_BoundaryCrossing {
    const message = {
      ...baseGameEvent_BoundaryCrossing,
    } as GameEvent_BoundaryCrossing;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },
};

const baseGameEvent_PenaltyKickFailed: object = { byTeam: 0 };

export const GameEvent_PenaltyKickFailed = {
  encode(
    message: GameEvent_PenaltyKickFailed,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.byTeam !== 0) {
      writer.uint32(8).int32(message.byTeam);
    }
    if (message.location !== undefined) {
      Vector2.encode(message.location, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameEvent_PenaltyKickFailed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGameEvent_PenaltyKickFailed,
    } as GameEvent_PenaltyKickFailed;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.byTeam = reader.int32() as any;
          break;
        case 2:
          message.location = Vector2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameEvent_PenaltyKickFailed {
    const message = {
      ...baseGameEvent_PenaltyKickFailed,
    } as GameEvent_PenaltyKickFailed;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = teamFromJSON(object.byTeam);
    } else {
      message.byTeam = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromJSON(object.location);
    } else {
      message.location = undefined;
    }
    return message;
  },

  toJSON(message: GameEvent_PenaltyKickFailed): unknown {
    const obj: any = {};
    message.byTeam !== undefined && (obj.byTeam = teamToJSON(message.byTeam));
    message.location !== undefined &&
      (obj.location = message.location
        ? Vector2.toJSON(message.location)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GameEvent_PenaltyKickFailed>
  ): GameEvent_PenaltyKickFailed {
    const message = {
      ...baseGameEvent_PenaltyKickFailed,
    } as GameEvent_PenaltyKickFailed;
    if (object.byTeam !== undefined && object.byTeam !== null) {
      message.byTeam = object.byTeam;
    } else {
      message.byTeam = 0;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = Vector2.fromPartial(object.location);
    } else {
      message.location = undefined;
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
