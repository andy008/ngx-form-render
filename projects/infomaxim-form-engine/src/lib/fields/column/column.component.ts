import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() class: string = '';

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
