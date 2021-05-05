import { Edge } from './Edge';
import { chunk } from 'lodash-es';
import {BoardNode} from './BoardNode';
import {SearchEndpointIds} from '../app.component';

export class Board {
  private boardNodes: BoardNode[];
  public edges: Edge[];
  public readonly startNode: BoardNode;
  public readonly endNodes: BoardNode[];

  constructor(
    public boardSize: number,
    private endpointIds: SearchEndpointIds
  ) {
    const boardArea = boardSize * boardSize;
    this.boardNodes = this.getInitialBoardNodes(boardArea, endpointIds);
    this.startNode = this.boardNodes[endpointIds.startNode];
    this.endNodes = this.boardNodes.filter((node) => endpointIds.endNodes.indexOf(node.id) !== -1);
    this.edges = this.generateAvailableEdges(this.getBoardIn2D());
    this.attachToNodesTheirNeighbors(this.edges);
  }

  private getInitialBoardNodes(boardArea: number, endpointIds: SearchEndpointIds): BoardNode[] {
    const board = [];
    for (let i = 0; i < boardArea; i++) {
      const boardNode = new BoardNode(i);

      if (i === endpointIds.startNode){
        boardNode.isStartNode = true;
      }

      if (endpointIds.endNodes.indexOf(i) > -1){
        boardNode.isGoalNode = true;
      }

      board.push(boardNode);
    }
    return board;
  }

  private generateAvailableEdges(board2D: BoardNode[][]): Edge[] {
    const edges: Edge[] = [];
    for (let i = 0; i < this.boardSize; i++) {
      // push horizontal edge
      const row = board2D[i];
      row.forEach((node, index, iteratedRow) => {
        if (!node.isWall && iteratedRow[index + 1] && !iteratedRow[index + 1].isWall) {
          const oneEnd = node;
          const otherEnd = iteratedRow[index + 1];
          const newEdge = new Edge([oneEnd, otherEnd]);
          edges.push(newEdge);
        }
      });

      // push vertical edge
      if (!row[i].isWall && board2D[i + 1] && !board2D[i + 1][i].isWall) {
        edges.push(new Edge([row[i], board2D[i + 1][i]]));
      }
    }
    return edges;
  }

  public getBoardIn1D(): BoardNode[] {
    return this.boardNodes;
  }

  public getBoardIn2D(): BoardNode[][] {
    return chunk(this.boardNodes, this.boardSize);
  }

  public getBoardNodeById(id: number): BoardNode {
    return this.boardNodes[id];
  }

  private attachToNodesTheirNeighbors(edges: Edge[]): void {
    edges.forEach((edge) => {
      const oneEnd = edge.ends[0];
      const otherEnd = edge.ends[0];
      oneEnd.addConnectedNode(otherEnd);
      otherEnd.addConnectedNode(oneEnd);
    });
  }
}
