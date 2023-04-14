import { CallableEvent } from '../types';
import { EntityContext } from '../entityContext';

export class PlayerOutOfScreenEvent implements CallableEvent {
  call(context: EntityContext): void {}
}
