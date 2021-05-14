import { Board } from './Board';
import { BoardNode } from './BoardNode';
import { PriorityQueue } from './PriorityQueue';
import { EvaluationFunction } from './EvaluationFunction';

export class AStar {
  public static run(board: Board): BoardNode | undefined {
    let coutRepetitions = 0;
    let expandingNode: BoardNode | undefined = board.startNode;

    const frontier = new PriorityQueue();
    frontier.push(expandingNode);

    const reached: {[n: number]: BoardNode} = {
      [expandingNode.id]: expandingNode
    };

    while (!frontier.isEmpty()) {
      coutRepetitions++;
      expandingNode = frontier.pop() as BoardNode;

      if (expandingNode.isGoalNode) {
        console.log("Goal Reached in " + coutRepetitions + " moves.");
        return expandingNode;
      }

      expandingNode.connectedToNodes.forEach((connectedNode) => {
        const newCosts = EvaluationFunction.evaluateCosts(expandingNode as BoardNode, connectedNode, board.endNodes, board.boardSize);

        // TODO change with a smarter implementation
        const tempBoardNode =  new BoardNode(-1, 0);
        tempBoardNode.costsMap = newCosts;
        const newCostsMinimum = tempBoardNode.getLowestTotalCost();

        if (!reached[connectedNode.id]) {
          frontier.push(connectedNode);
        }

        if (!reached[connectedNode.id] || reached[connectedNode.id].getLowestTotalCost() > newCostsMinimum) {
          connectedNode.setClosestNodeToGetHere(expandingNode);
          connectedNode.costsMap = newCosts;
          reached[connectedNode.id] = connectedNode;
        }
      });
    }
    console.log("Should this ever run? ", coutRepetitions);
    return ;
  }
}
