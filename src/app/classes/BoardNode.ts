import {Node} from './Node';

export class BoardNode extends Node{
  private static readonly PROBABILITY_TO_BE_WALL = 0.3;
  public isWall: boolean;
  public isStartNode = false;
  public isGoalNode = false;

   constructor(id: number) {
     super(id);

     if (Math.random() > BoardNode.PROBABILITY_TO_BE_WALL) {
       this.isWall = false;
     } else {
       this.isWall = true;
     }
   }

}
