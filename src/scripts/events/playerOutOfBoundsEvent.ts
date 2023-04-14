import { CallableEvent } from '../types';
import { EntityContext } from '../entityContext';
import { Shooter } from '../entities/shooter';
import { adjustPlayerLocation } from '../utils';

export class PlayerOutOfBoundsEvent implements CallableEvent {
  constructor(public player: Shooter) {}
  call(context: EntityContext): void {
    adjustPlayerLocation(context, this.player);
  }
}
