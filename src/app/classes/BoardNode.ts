import {Node} from './Node';

export class BoardNode extends Node{
  private static readonly PROBABILITY_TO_BE_WALL = 0.3;
  public isWall = false;
  public isStartNode = false;
  public isGoalNode = false;
  public isInFrontier = false;
  public isPartOfWinningPath = false;
  public connectedToNodes: BoardNode[] = [];

  public costs: Costs = {
    moveCost: 0,
    heuristicCost: 0,
    totalCost: 0,
  };

  private closestNeighbor: BoardNode | undefined;

   constructor(id: number) {
     super(id);

     if (Math.random() <= BoardNode.PROBABILITY_TO_BE_WALL) {
       this.isWall = true;
     }
   }

  public getClosestNeighbor(): BoardNode | undefined {
    return this.closestNeighbor;
  }

  public setClosestNeighbor(value: BoardNode | undefined): void {
    this.closestNeighbor = value;
  }

  public addConnectedNode(newNode: BoardNode): void {
    this.connectedToNodes.push(newNode);
  }
}

// todo probably make a class out of this
export interface Costs {
  moveCost: number;
  heuristicCost: number;
  totalCost: number; // auto set when another cost is updated
}
