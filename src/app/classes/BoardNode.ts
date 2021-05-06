import { Node } from './Node';
import { Cost } from './Cost';

export class BoardNode extends Node {
  private static readonly PROBABILITY_TO_BE_WALL = 0.3;
  public isWall = false;
  public isStartNode = false;
  public isGoalNode = false;
  public isInFrontier = false;
  public isPartOfWinningPath = false;
  public connectedToNodes: BoardNode[] = [];

  public costsMap: Map<BoardNode, Cost> = new Map<BoardNode, Cost>();

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
