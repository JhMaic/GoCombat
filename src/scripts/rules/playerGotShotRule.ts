import { Rule } from '../types';
import { bulletsCollisionDetector } from '../utils';
import { Shooter } from '../entities/shooter';
import { PlayerGotShotEvent } from '../events/playerGotShotEvent';

export default {
  eval: (entityContext) => {
    const locDefender = entityContext.defender.location;
    const locChallenger = entityContext.challenger.location;

    const gotShotFlgDefender = bulletsCollisionDetector(entityContext, locDefender);
    const gotShotFlgChallenger = bulletsCollisionDetector(entityContext, locChallenger);

    const playerList = Array<Shooter>();

    if (gotShotFlgChallenger) playerList.push(entityContext.challenger);

    if (gotShotFlgDefender) playerList.push(entityContext.defender);

    if (playerList.length > 0) return new PlayerGotShotEvent(playerList);
  },
} as Rule;
