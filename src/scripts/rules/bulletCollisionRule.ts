import { Rule } from '../types';
import { Bullet } from '../entities/bullet';

export default {
  eval: (entityContext) => {
    /* Rule 1: bullets (from defender and challenger) stay on a same location */
    /* Rule 2: bullets (...) go through each other */
    /* TODO: Algorithm optimization */

    /* FIRST: select the player with the fewest number of bullets*/
    const totalBullets = entityContext.bullets.length;
    const totalBulletsFromDefender = entityContext.defender.bullets.length;
    const playerWithFewestBullets =
      totalBulletsFromDefender >= totalBullets / 2 ? entityContext.challenger : entityContext.defender;

    /* walk through the bullets and check the rules */
    const bulletDestoryList = Array<Bullet>();
    playerWithFewestBullets.bullets.forEach((bullet) => {
      const direction = bullet.direction;
      const locBullet = bullet.location;
    });
  },
} as Rule;
