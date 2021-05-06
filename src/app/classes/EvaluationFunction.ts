import { BoardNode } from './BoardNode';
import { Cost } from './Cost';

export class EvaluationFunction {
  public static evaluateAndAttachCosts(expandedNode: BoardNode, newFrontierNode: BoardNode, goalNodes: BoardNode[], boardSize: number): void {
    goalNodes.forEach(goalNode =>
      newFrontierNode.costsMap.set(goalNode, new Cost(
        CostFunction.run(expandedNode, newFrontierNode, boardSize, goalNodes),
        HeuristicFunctions.heuristicOne(expandedNode, goalNode, boardSize)
      )
      )
    );
  }
}

export class CostFunction {
  // [0, 1 , 2,
  //  3. 4 , 5,
  //  6, 7 , 8]
  public static run(expandedNode: BoardNode, newFrontierNode: BoardNode, boardSize: number, goalNodes: BoardNode[]): number {
    const fromId = expandedNode.id;
    const toId = newFrontierNode.id;
    let expandedNodeMoveCostUpToNow = 0;

    if (expandedNode.costsMap.size > 0) {
      expandedNodeMoveCostUpToNow = (expandedNode.costsMap.get(goalNodes[0]) as Cost).moveCost;
    }

    if (fromId + 1 === toId || fromId - 1 === toId) {
      return expandedNodeMoveCostUpToNow + 0.5;
    }

    if (fromId + boardSize === toId || fromId - boardSize === toId) {
      return expandedNodeMoveCostUpToNow + 1;
    }

    throw new Error('Irregular move');
  }
}

export class HeuristicFunctions {
  public static heuristicOne(node: BoardNode, goalNode: BoardNode, boardSize: number): number {
    return 0;
  }
}
