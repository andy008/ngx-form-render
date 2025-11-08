import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lib-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss'],
    standalone: false
})
export class HeadingComponent implements OnInit {

  @Input() field: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
