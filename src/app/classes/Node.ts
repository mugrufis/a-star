import {Edge} from './Edge';
import {AppComponent} from '../app.component';

export class Node {
  public readonly isWall: boolean;

  constructor(
    public readonly id: number,
    public edges?: Edge[]
  ) {
    if (Math.random() > AppComponent.PROBABILITY_TO_BE_WALL) {
      this.isWall = false;
    } else {
      this.isWall = true;
    }
  }
}
