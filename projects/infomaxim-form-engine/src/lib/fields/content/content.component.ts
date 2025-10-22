import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lib-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    standalone: false
})
export class ContentComponent implements OnInit {

  @Input() field: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
