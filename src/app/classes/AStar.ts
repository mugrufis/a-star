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

    // TODO possibly reached must change to acomodate the 2 goals rule;
    const reached: {[n: number]: BoardNode} = {
      [expandingNode.id]: expandingNode
    };

    while (!frontier.isEmpty()) {
      coutRepetitions++;
      expandingNode = frontier.pop() as BoardNode;

      if (expandingNode.isGoalNode) {
        console.log(coutRepetitions);
        return expandingNode;
      }

      expandingNode.connectedToNodes.forEach((connectedNode) => {
        const newCosts = EvaluationFunction.evaluateCosts(expandingNode as BoardNode, connectedNode, board.endNodes, board.boardSize);

        // TODO change with a smarter implementation
        const tempBoardNode =  new BoardNode(-1);
        tempBoardNode.costsMap = newCosts;
        const newCostsMinimum = tempBoardNode.getLowestTotalCost();

        if (!reached[connectedNode.id] || reached[connectedNode.id].getLowestTotalCost() > newCostsMinimum) {
          connectedNode.setClosestNodeToGetHere(expandingNode);
          reached[connectedNode.id] = connectedNode;

          frontier.push(connectedNode);
        }
      });
    }
    console.log(coutRepetitions);
    return expandingNode;
  }
}
