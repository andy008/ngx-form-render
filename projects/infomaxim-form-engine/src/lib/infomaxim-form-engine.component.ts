import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'infomaxim-form-engine',
    template: `
    <lib-form-engine #libFE [formConfig]="formConfig" (sendFormData)="sendFormDataBack($event)"></lib-form-engine>
  `,
    styles: [],
    standalone: false
})
export class InfomaximFormEngineComponent implements OnInit {

  @Input() formConfig: any[] = [];
  @Output() formData = new EventEmitter<object>();

  @ViewChild('libFE', { static: false }) libFE;

  constructor() { }

  ngOnInit(): void {
  }

  sendFormDataBack(formData: any) {
    this.formData.emit(formData);
  }

  submit(){
    this.libFE.submit();
  }

}
