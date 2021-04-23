import {Edge} from './Edge';

export class Node {
  private static readonly PROBABILITY_TO_BE_WALL = 0.3;
  public isWall: boolean;
  public edges: Edge[] = [];

  constructor(
    public readonly id: number,
  ) {
    if (Math.random() > Node.PROBABILITY_TO_BE_WALL) {
      this.isWall = false;
    } else {
      this.isWall = true;
    }
  }

  public addEdge(newEdge: Edge): void {
    this.edges.push(newEdge);
  }

  public turnToWall(): void {
    this.isWall = true;
  }
}
