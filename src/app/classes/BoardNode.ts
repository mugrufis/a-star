import {Node} from './Node';

export class BoardNode extends Node{
  private static readonly PROBABILITY_TO_BE_WALL = 0.3;
  public isWall: boolean;
  public isStartNode = false;
  public isGoalNode = false;
  public costs: Costs = {
    moveCost: 0,
    heuristicCost: 0,
    totalCost: 0,
  };

   constructor(id: number) {
     super(id);

     if (Math.random() > BoardNode.PROBABILITY_TO_BE_WALL) {
       this.isWall = false;
     } else {
       this.isWall = true;
     }
   }

}

// todo probably make a class out of this
export interface Costs {
  moveCost: number;
  heuristicCost: number;
  totalCost: number; // auto set when another cost is updated
}
