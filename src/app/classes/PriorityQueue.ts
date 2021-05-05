import {sortBy} from 'lodash-es';
import {BoardNode} from './BoardNode';

export class PriorityQueue {

  private store: BoardNode[] = [];

  public push(boardNode: BoardNode): void {
    boardNode.isInFrontier = true;
    this.store.push(boardNode);
    this.store = sortBy(this.store, ['costs.totalCost']); // sort me basi to cost
  }

  public pop(): BoardNode | undefined {
    const boardNode = this.store.shift();

    if (boardNode) {
      boardNode.isInFrontier = false;
    }

    return boardNode;
  }

  public isEmpty(): boolean {
    return this.store.length === 0;
  }
}
