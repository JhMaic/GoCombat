import { Shooter } from './shooter';
import { Entity, Location } from '../types';

export class Block extends Entity {
  belongTo?: Shooter;

  location: Location;
}
