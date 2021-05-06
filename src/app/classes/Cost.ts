export class Cost {
  public totalCost;

  constructor(
    public moveCost: number,
    public heuristicCost: number
  ) {
    this.totalCost = moveCost + heuristicCost;
  }
}
