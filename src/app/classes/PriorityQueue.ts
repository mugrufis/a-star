import { sortBy } from 'lodash-es';
import { BoardNode } from './BoardNode';

export class PriorityQueue {
  private store: BoardNode[] = [];

  public push(boardNode: BoardNode): void {
    boardNode.isInFrontier = true;
    this.store.push(boardNode);
    this.store = sortBy(this.store, ['costs.totalCost']); // sort me basi to cost
  }

  public pop(): BoardNode | undefined {
    console.log(this.store);

    console.log(this.store.map(val => val.id));
    const boardNode = this.store.shift();
    if (boardNode) {
      boardNode.isInFrontier = false;
      boardNode.isExpanded = true;
    }

    return boardNode;
  }

  public isEmpty(): boolean {
    return this.store.length === 0;
  }
}
