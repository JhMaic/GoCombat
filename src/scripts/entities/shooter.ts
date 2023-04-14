import { Direction, DirectionallyLocatable, Entity, Location } from '../types';
import { Bullet } from './bullet';

export class Shooter extends Entity implements DirectionallyLocatable {
  static Forward: Record<Direction, () => void>;
  static DirectionCircle: Array<Direction>;
  static {
    this.Forward = {
      DOWN: this.prototype.goDown,
      UP: this.prototype.goUp,
      LEFT: this.prototype.goLeft,
      RIGHT: this.prototype.goRight,
    };
    this.DirectionCircle = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
  }

  direction: Direction;
  bullets: Array<Bullet>;

  constructor(location: Location) {
    super(location);
    this.direction = 'UP';
    this.bullets = [];
  }
  goLeft() {
    this.location.x -= 1;
    this.direction = 'LEFT';
  }
  goRight() {
    this.location.x += 1;
    this.direction = 'RIGHT';
  }
  goUp() {
    this.location.y += 1;
    this.direction = 'UP';
  }
  goDown() {
    this.location.y -= 1;
    this.direction = 'DOWN';
  }
  goForward() {
    this.__forward(this.direction);
  }
  turnLeft() {
    const index = Shooter.DirectionCircle.indexOf(this.direction);
    this.__forward(Shooter.DirectionCircle.at(index - 1));
  }
  turnRight() {
    const index = Shooter.DirectionCircle.indexOf(this.direction);
    this.__forward(Shooter.DirectionCircle.at(index - 3));
  }
  turnBack() {
    const index = Shooter.DirectionCircle.indexOf(this.direction);
    this.__forward(Shooter.DirectionCircle.at(index - 2));
  }

  private __forward(direction: Direction) {
    return Shooter.Forward[direction]();
  }
}
