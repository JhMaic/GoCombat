import { Rule } from './types';
import { bulletsCollisionDetector } from './utils';
import { GameOverEvent } from './events/gameOverEvent';

const playerGotShotRule: Rule = {
  eval: (entityContext) => {
    const locDefender = entityContext.defender.location;
    const locChallenger = entityContext.challenger.location;

    const gotShotFlgDefender = bulletsCollisionDetector(entityContext, locDefender);
    const gotShotFlgChallenger = bulletsCollisionDetector(entityContext, locChallenger);

    if (gotShotFlgChallenger || gotShotFlgDefender) {
      let eventInstance: GameOverEvent;

      if (gotShotFlgChallenger && !gotShotFlgDefender)
        eventInstance = new GameOverEvent(GameOverEvent.GAME_OVER_STATUS.CHALLENGER_GOT_SHOT);
      else if (gotShotFlgDefender && !gotShotFlgChallenger)
        eventInstance = new GameOverEvent(GameOverEvent.GAME_OVER_STATUS.DEFENDER_GOT_SHOT);
      else eventInstance = new GameOverEvent(GameOverEvent.GAME_OVER_STATUS.BOTH_GOT_SHOT);

      return eventInstance;
    }
  },
};

export const ruleList = [playerGotShotRule];
