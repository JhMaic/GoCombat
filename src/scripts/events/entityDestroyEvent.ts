import { CallableEvent, Entity } from '../types';
import { EntityContext } from '../entityContext';
import { destroyEntity } from '../utils';

export class EntityDestroyEvent implements CallableEvent {
  constructor(public entity: Entity) {}
  call(context: EntityContext) {
    destroyEntity(context, this.entity);
  }
}
