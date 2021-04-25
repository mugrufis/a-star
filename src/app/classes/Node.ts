import {Edge} from './Edge';

export class Node {
  public edges: Edge[] = [];

  constructor(
    public readonly id: number, // <- oi ""sintetagmenes""
  ) {
  }

  public addEdge(newEdge: Edge): void {
    this.edges.push(newEdge);
  }

}
