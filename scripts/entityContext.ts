import {Shooter} from './entities/shooter';
import {Bullet} from './entities/bullet';
import {Block} from './entities/block';

export class EntityContext {
  public defender: Shooter;
  public challenger: Shooter;
  public bullets: Array<Bullet>;
  public blocks: Array<Block>;
}