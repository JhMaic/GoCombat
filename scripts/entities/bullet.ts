import {Direction, DirectionallyLocatable, Location, Velocity} from '../types';
import {Shooter} from './shooter';

export class Bullet implements DirectionallyLocatable {
  velocity: Velocity;
  from: Shooter;
  direction: Direction;
  location: Location;
}