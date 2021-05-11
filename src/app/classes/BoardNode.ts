import { Node } from './Node';
import { Cost } from './Cost';

export class BoardNode extends Node {
  private static readonly PROBABILITY_TO_BE_WALL = 0;
  public isWall = false;
  public isStartNode = false;
  public isGoalNode = false;
  public isInFrontier = false;
  public isPartOfWinningPath = false;
  public connectedToNodes: BoardNode[] = [];

  //  Connects cost associated with each GOAL node
  public costsMap: Map<BoardNode, Cost> = new Map<BoardNode, Cost>();

  private closestNodeToGetHere: BoardNode | undefined;

  constructor(id: number) {
    super(id);

    if (Math.random() <= BoardNode.PROBABILITY_TO_BE_WALL) {
      this.isWall = true;
    }
  }

  public getClosestNodeToGetHere(): BoardNode | undefined {
    return this.closestNodeToGetHere;
  }

  public setClosestNodeToGetHere(value: BoardNode | undefined): void {
    this.closestNodeToGetHere = value;
  }

  public addConnectedNode(newNode: BoardNode): void {
    this.connectedToNodes.push(newNode);
  }

  // TODO change with a smarter implementation
  public getLowestTotalCost(): number {
    let result = Math.min(...Array.from(this.costsMap.values()).map(val => val.totalCost));
    if (result === Infinity){
      return 0;
    }
    return result;
  }

}
