import { Entity, Location } from './types';
import { EntityContext } from './entityContext';
import { Bullet } from './entities/bullet';
import { Shooter } from './entities/shooter';

export const removeFromArray = <T>(list: Array<T>, item: T) => {
  const index = list.indexOf(item);

  if (index > -1) {
    list.splice(index, 1);
  }
};

export const locationalCollisionDetector = (a: Location, b: Location) => JSON.stringify(a) === JSON.stringify(b);
export const bulletsCollisionDetector = (context: EntityContext, locTarget: Location) =>
  context.bullets.some((bullet) => locationalCollisionDetector(bullet.location, locTarget));

export const entityBoundsDetector = (entity: Entity) => {
  const loc_x = entity.location.x;
  const loc_y = entity.location.y;

  const ifOutSideOfX = loc_x >= EntityContext.WindowSize.X || loc_x < 0;
  const ifOutSideOfY = loc_y >= EntityContext.WindowSize.Y || loc_y < 0;

  return ifOutSideOfX || ifOutSideOfY;
};

export const;

export const destroyEntity = (context: EntityContext, entity: Entity) => {
  if (entity instanceof Bullet) {
    removeFromArray(context.bullets, entity);
  }
};

export const adjustPlayerLocation = (context: EntityContext, player: Shooter) => {
  const facing = player.direction;
  player.turnBack();
  player.direction = facing;
};
