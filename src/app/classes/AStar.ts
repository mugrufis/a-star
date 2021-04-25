import {Board} from './Board';
import {BoardNode} from './BoardNode';
import {PriorityQueue} from './PriorityQueue';

export class AStar {
  public static run(board: Board, startNode: BoardNode): BoardNode[] | undefined {
    const node = startNode;
    const frontier = new PriorityQueue();
    frontier.push(startNode);
    return ;
  }
}

// ara to startNode 8a einai kai mesa sto board. To idio object/reference
