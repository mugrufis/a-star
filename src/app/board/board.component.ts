import {Component, Input, OnInit} from '@angular/core';
import {Board} from '../classes/Board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input()
  public board!: Board;

  constructor() { }

  ngOnInit(): void {
  }

}
