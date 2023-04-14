import { Shooter } from './entities/shooter';
import { Bullet } from './entities/bullet';
import { CellMap } from './entities/cellMap';
import { WindowSize } from './types';

export class EntityContext {
  defender: Shooter;
  challenger: Shooter;
  bullets: Array<Bullet>;
  cellMap: CellMap;

  constructor(windowSize: WindowSize, defender: Shooter, challenger: Shooter) {
    this.cellMap = new CellMap(windowSize);
    this.bullets = Array<Bullet>();
  }

  getPLayers() {
    return [this.defender, this.challenger];
  }
}
