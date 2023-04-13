import {Rule} from '../types';
import {PlayerGotShotEvent} from './playerGotShotEvent';

const playerGotShotRule: Rule = {
  eval: entityContext => {
    const locDefender = entityContext.defender.location;
    const locChallenger = entityContext.challenger.location;
    const gotShotFlgDefender = entityContext.bullets.some(bullet => JSON.stringify(bullet.location) === JSON.stringify(locDefender));
  },
  event: PlayerGotShotEvent








};

