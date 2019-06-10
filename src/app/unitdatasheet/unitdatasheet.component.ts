import { Component, OnInit, Input } from '@angular/core';
import { Unit } from '../unit';

@Component({
  selector: 'app-unitdatasheet',
  templateUrl: './unitdatasheet.component.html',
  styleUrls: ['./unitdatasheet.component.css']
})
export class UnitdatasheetComponent implements OnInit {

  @Input() unit: Unit;

  constructor() { }

  ngOnInit() {
  }

}
