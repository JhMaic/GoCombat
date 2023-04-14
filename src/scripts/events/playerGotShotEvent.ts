import { EndEvent, EndGameByPlayerGotShot, EndGameFlag } from '../types';
import { EntityContext } from '../entityContext';
import { Shooter } from '../entities/shooter';

export class PlayerGotShotEvent implements EndEvent {
  constructor(public shotList: Array<Shooter>) {}

  call(context: EntityContext): EndGameByPlayerGotShot {
    return {
      endFlag: EndGameFlag.PLAYER_GOT_SHOT,
      info: {
        players: this.shotList,
      },
    };
  }
}
