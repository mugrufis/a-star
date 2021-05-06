import { Node } from './Node';

export class Edge {
  constructor(
    public ends: [Node, Node]
  ) {
  }
}
