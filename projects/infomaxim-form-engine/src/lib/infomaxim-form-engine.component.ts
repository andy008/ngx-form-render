import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'infomaxim-form-engine',
  template: `
    <lib-form-engine [formConfig]="formConfig" (sendFormData)="sendFormDataBack($event)"></lib-form-engine>
  `,
  styles: [
  ]
})
export class InfomaximFormEngineComponent implements OnInit {

  @Input() formConfig: any[] = [];
  @Output() formData = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  sendFormDataBack(formData: any) {
    this.formData.emit(formData);
  }

}
