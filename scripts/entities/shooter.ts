import {Direction, DirectionallyLocatable, Location,} from '../types';

export class Shooter implements DirectionallyLocatable {
  direction: Direction;
  location: Location;
}