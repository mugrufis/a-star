import { Board } from './Board';
import { BoardNode } from './BoardNode';
import { PriorityQueue } from './PriorityQueue';
import { EvaluationFunction } from './EvaluationFunction';

export class AStar {
  public static run(board: Board): BoardNode | undefined {
    let node: BoardNode | undefined = board.startNode;
    const frontier = new PriorityQueue();
    frontier.push(node);

    // TODO possibly reached must change to acomodate the 2 goals rule;
    const reached: {[n: number]: BoardNode} = {
      [node.id]: node
    };

    while (!frontier.isEmpty()) {
      node = frontier.pop() as BoardNode;

      if (node.isGoalNode) {
        return node;
      }

      node.connectedToNodes.forEach((connectedNode) => {
        EvaluationFunction.evaluateAndAttachCosts(node as BoardNode, connectedNode, board.endNodes, board.boardSize);

        if (!reached[connectedNode.id] || reached[connectedNode.id].costs.totalCost > connectedNode.costs.totalCost) {
          connectedNode.setClosestNeighbor(node);
          reached[connectedNode.id] = connectedNode;
          frontier.push(connectedNode);
        }
      });
    }
  }
}
