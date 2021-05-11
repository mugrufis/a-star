import {BoardNode} from './BoardNode';

export class Edge {
  constructor(
    public ends: [BoardNode, BoardNode]
  ) {
  }
}
