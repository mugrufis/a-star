import {BoardNode, Costs} from './BoardNode';

export class EvaluationFunction {
  public static evaluate(expandedNode: BoardNode, newFrontierNode: BoardNode, goalNode: BoardNode, boardSize: number): Costs {
    return {
      heuristicCost: HeuristicFunctions.heuristicOne(expandedNode, goalNode, boardSize),
      moveCost: CostFunction.run(expandedNode, newFrontierNode, boardSize),
      totalCost:
        CostFunction.run(expandedNode, newFrontierNode, boardSize) +
        HeuristicFunctions.heuristicOne(expandedNode, goalNode, boardSize),
      // todo make that nice. Maybe only total is needed in the end..
    };
  }
}

export class CostFunction {
  // [0, 1 , 2,
  //  3. 4 , 5,
  //  6, 7 , 8]
  public static run(expandedNode: BoardNode, newFrontierNode: BoardNode, boardSize: number): number {
    const fromId = expandedNode.id;
    const toId = newFrontierNode.id;

    if (fromId + 1 === toId || fromId - 1 === toId) {
      return expandedNode.costs.moveCost + 0.5;
    }

    if (fromId + boardSize === toId || fromId - boardSize === toId) {
      return expandedNode.costs.moveCost + 1;
    }

    throw new Error('Irregular move');
  }
}

export class HeuristicFunctions {
  public static heuristicOne(node: BoardNode, goalNode: BoardNode, boardSize: number): number {
    return 0;
  }
}


