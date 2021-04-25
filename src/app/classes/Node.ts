import {Edge} from './Edge';

export class Node {
  public edges: Edge[] = [];

  constructor(
    public readonly id: number,
  ) {
  }

  public addEdge(newEdge: Edge): void {
    this.edges.push(newEdge);
  }

}
