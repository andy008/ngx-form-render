import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss']
})
export class DatetimeComponent implements OnInit {

  @Input() field: any = {};
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get isTouched() { return this.form.controls[this.field.name].touched; }
  get isErrors() { return this.form.controls[this.field.name].errors; }

  constructor() { }

  ngOnInit(): void {
  }

}
