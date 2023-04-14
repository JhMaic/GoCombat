import { EntityContext } from './entityContext';
import { Shooter } from './entities/shooter';

export type Velocity = number;

export type Location = {
  x: number;
  y: number;
};

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export type DirectionallyLocatable = {
  location: Location;
  direction: Direction;
};

export enum EndGameFlag {
  PLAYER_GOT_SHOT,
  RUNTIME_ERROR,
}

export type EndGameStatus = {
  endFlag: EndGameFlag;
};

export type EndGameByPlayerGotShot = {
  info: {
    players: Array<Shooter>;
  };
} & EndGameStatus;

export type EndGameByErrorCaused = {
  info: {
    error: any;
  };
} & EndGameStatus;

export interface Rule {
  /**
   * WHEN fail to pass the test
   * RETURN an event instance
   * @param entityContext current entity context
   * @return RuleEvent
   */
  eval: (entityContext: EntityContext) => Event | undefined;
}

/**
 * Corresponding to a specific Rule
 */
interface Event {
  call: (context: EntityContext) => any;
}

export interface CallableEvent extends Event {
  call: (context: EntityContext) => void;
}

export interface EndEvent extends Event {
  call: (context: EntityContext) => EndGameStatus;
}

export class Entity {
  location: Location;
}
