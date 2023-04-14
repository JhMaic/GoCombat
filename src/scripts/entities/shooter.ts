import { Direction, DirectionallyLocatable, Entity, Location } from '../types';

export class Shooter extends Entity implements DirectionallyLocatable {
  direction: Direction;
  location: Location;
}
