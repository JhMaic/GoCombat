import { Direction, DirectionallyLocatable, Entity, Location, Velocity } from '../types';
import { Shooter } from './shooter';

export class Bullet extends Entity implements DirectionallyLocatable {
  velocity: Velocity;
  direction: Direction;
  from: Shooter;
  constructor(shooter: Shooter, location: Location) {
    super(location);
    this.from = shooter;
    this.direction = shooter.direction;
  }
}
