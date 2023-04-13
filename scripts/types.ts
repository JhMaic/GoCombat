import {EntityContext} from './entityContext';

export type Velocity = number

export type Location = {
  x: number
  y: number
}

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

export type DirectionallyLocatable = {
  location: Location;
  direction: Direction;
}

export interface Rule {
  eval: (entityContext: EntityContext) => boolean;
  event: RuleEvent;
}

/**
 * Corresponding to a specific Rule
 */
export interface RuleEvent {

}