import { Entity, Location } from './types';
import { EntityContext } from './entityContext';
import { Bullet } from './entities/bullet';

export const removeFromArray = <T>(list: Array<T>, item: T) => {
  const index = list.indexOf(item);

  if (index > -1) {
    list.splice(index, 1);
  }
};

export const locationalCollisionDetector = (a: Location, b: Location) => JSON.stringify(a) === JSON.stringify(b);
export const bulletsCollisionDetector = (context: EntityContext, locTarget: Location) =>
  context.bullets.some((bullet) => locationalCollisionDetector(bullet.location, locTarget));

export const destroyEntity = (context: EntityContext, entity: Entity) => {
  if (entity instanceof Bullet) {
    removeFromArray(context.bullets, entity);
  }
};
