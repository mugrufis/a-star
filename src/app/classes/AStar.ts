import {Board} from './Board';
import {BoardNode} from './BoardNode';
import {PriorityQueue} from './PriorityQueue';

export class AStar {
  public static run(board: Board): BoardNode | undefined {
    let node: BoardNode | undefined = board.startNode;
    const frontier = new PriorityQueue();
    frontier.push(node);
    const reached: {[n: number]: BoardNode} = {
      [node.id]: node
    };

    while (!frontier.isEmpty()) {
      node = frontier.pop() as BoardNode;

      if (node.isGoalNode) {
        return node;
      }

      node.connectedToNodes.forEach((connectedNode) => {
        // Todo: Last tricky part!!!
        //  Evaluate cost here
        //  Be carefull with new costs and object references
        if (!reached[connectedNode.id] || reached[connectedNode.id].costs.totalCost > connectedNode.costs.totalCost) {
          connectedNode.setClosestNeighbor(node);
          reached[connectedNode.id] = connectedNode;
          frontier.push(connectedNode);
        }
      });
    }
    return ;
  }
}
