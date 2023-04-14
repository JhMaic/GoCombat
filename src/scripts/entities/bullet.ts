import { Direction, DirectionallyLocatable, Entity, Location, Velocity } from '../types';
import { Shooter } from './shooter';

export class Bullet extends Entity implements DirectionallyLocatable {
  velocity: Velocity;
  from: Shooter;
  direction: Direction;
  location: Location;
}
