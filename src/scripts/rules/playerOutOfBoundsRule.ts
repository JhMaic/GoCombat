import { Rule } from '../types';
import { entityBoundsDetector } from '../utils';
import { PlayerOutOfBoundsEvent } from '../events/playerOutOfBoundsEvent';

export default {
  eval: (entityContext) => {
    return entityContext
      .getPLayers()
      .filter((player) => entityBoundsDetector(player))
      .map((player) => new PlayerOutOfBoundsEvent(player));
  },
} as Rule;
