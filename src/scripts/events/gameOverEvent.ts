import { EndEvent, EndGameByPlayerGotShot, EndGameFlag } from '../types';
import { EntityContext } from '../entityContext';
import { Shooter } from '../entities/shooter';

enum GameOverStatus {
  DEFENDER_GOT_SHOT,
  CHALLENGER_GOT_SHOT,
  BOTH_GOT_SHOT,
}

export class GameOverEvent implements EndEvent {
  static GAME_OVER_STATUS = GameOverStatus;
  constructor(public gameOverStatus: GameOverStatus) {}

  call(context: EntityContext): EndGameByPlayerGotShot {
    let shotList: Array<Shooter>;

    if (this.gameOverStatus === GameOverStatus.BOTH_GOT_SHOT) shotList = [context.challenger, context.defender];

    if (this.gameOverStatus === GameOverStatus.DEFENDER_GOT_SHOT) shotList = [context.defender];

    if (this.gameOverStatus === GameOverStatus.CHALLENGER_GOT_SHOT) shotList = [context.challenger];

    return {
      endFlag: EndGameFlag.PLAYER_GOT_SHOT,
      info: {
        players: shotList,
      },
    };
  }
}
