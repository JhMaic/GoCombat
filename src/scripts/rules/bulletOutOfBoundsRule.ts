import { entityBoundsDetector } from '../utils';
import { Rule } from '../types';
import { EntityDestroyEvent } from '../events/entityDestroyEvent';

export default {
  eval: (entityContext) => {
    return entityContext.bullets
      .filter((bullet) => entityBoundsDetector(bullet))
      .map((bullet) => new EntityDestroyEvent(bullet));
  },
} as Rule;
