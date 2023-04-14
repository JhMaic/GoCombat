import { Entity, Location, WindowSize } from '../types';
import { Shooter } from './shooter';
import { removeFromArray } from '../utils';

class Cell extends Entity {
  of?: Shooter;
  contains: Array<Entity>;

  constructor(location: Location) {
    super(location);
  }

  addEntity(entity: Entity) {
    this.contains.push(entity);
  }

  removeEntity(entity: Entity) {
    removeFromArray(this.contains, entity);
  }
}

export class CellMap {
  cells: Array<Cell>;
  windowSize: WindowSize;
  constructor(windowSize: WindowSize) {
    this.cells = Array<Cell>();

    /* [0, y,   2y,   ...,] */
    /* [1, y+1, 2y+1, ...,] */
    /* [2, y+2, 2y+2, ...,] */
    for (let x = 0; x < windowSize.X; x++) {
      for (let y = 0; y < windowSize.Y; y++) {
        this.cells.push(new Cell({ x, y }));
      }
    }

    this.windowSize = windowSize;
  }
  at(location: Location) {
    return this.cells.at(location.y * this.windowSize.Y + location.x);
  }

  entityDetector(location: Location) {
    return this.at(location).contains;
  }

  addEntityAtLocation(entity: Entity) {
    return this.at(entity.location).addEntity(entity);
  }

  removeEntityAtLocation(entity: Entity) {
    return this.at(entity.location).removeEntity(entity);
  }
}
