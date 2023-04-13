import {Shooter} from './shooter';
import {Location} from '../types';

export class Block {
  belongTo?: Shooter;
  location: Location;
}