import {sortBy} from 'lodash-es';
import {BoardNode} from './BoardNode';

export class PriorityQueue {

  private store: BoardNode[] = [];

  public push(val: BoardNode): void {
    this.store.push(val);
    this.store = sortBy(this.store, ['costs.totalCost']); // sort me basi to cost
  }

  public pop(): BoardNode | undefined {
    return this.store.shift();
  }
}
