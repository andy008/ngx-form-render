import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
    selector: 'lib-form-engine',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss'],
    standalone: false
})
export class FormBuilderComponent implements OnInit {

  @Input() formConfig: any;
  public formTitle: String = '';
  public fields: any[] = [];
  public form: FormGroup;
  public saveButton: String = '';
  public resetButton: String = '';
  public cancelButton: String = '';
  public saveClass: string;
  public resetClass: string;
  public cancelClass: string;
  @Output() sendFormData = new EventEmitter<object>();
  @ViewChild('formDirective') public formDirective: NgForm;

  constructor() { }

  ngOnInit(): void {
    let fieldsCtrls = {};
    this.formTitle = this.formConfig['title'];

    this.saveClass = ((this.formConfig.saveButtonClass =='') ? 'btn btn-primary m-1' : this.formConfig.controls.saveButtonClass);
    this.resetClass = ((this.formConfig.resetButtonClass =='') ? 'btn btn-outline-warning m-1' : this.formConfig.controls.resetButtonClass);
    this.cancelClass = ((this.formConfig.cancelButtonClass =='') ? 'btn btn-outline-warning m-1' : this.formConfig.controls.cancelButtonClass);

    for (const key1 in this.formConfig['columns']) {
      let column = this.formConfig.columns[key1];
      for (const key2 in column['sections']) {    
        let section = column.sections[key2];   
        for (const key3 in section['fields']) {
          let field = section.fields[key3];
          if (field?.required) {
            let validators = [Validators.required]; 
            if(field.type == 'checkbox'){
              validators = [Validators.requiredTrue];  //pattern('true')
            }
            if (field?.type === 'email') {
              validators.push(Validators.email);
            }
            if (field?.minLength) {
              validators.push(Validators.minLength(field.minLength));
            }
            if (field?.maxLength) {
              validators.push(Validators.maxLength(field.maxLength));
            }
            if (field?.pattern) {
              validators.push(Validators.pattern(field.pattern));
            }
            fieldsCtrls[field.name] = new FormControl(field.value || '', validators);
          } else {
            fieldsCtrls[field.name] = new FormControl(field.value || '');
          };
        };        
      };
    };
           
    if (this.formConfig && this.formConfig['controls'] && this.formConfig['controls']['saveButton']) {
      this.saveButton = this.formConfig['controls']['saveButton'];
    }
    if (this.formConfig && this.formConfig['controls'] && this.formConfig['controls']['resetButton']) {
      this.resetButton = this.formConfig['controls']['resetButton'];
    }
    if (this.formConfig && this.formConfig['controls'] && this.formConfig['controls']['cancelButton']) {
      this.cancelButton = this.formConfig['controls']['cancelButton'];
    }    

    this.form = new FormGroup(fieldsCtrls);
  }

  submit() {
    if (this.getFormValidationErrors(this.form).length) {
      this.form.markAllAsTouched();
    } else {
      this.sendFormData.emit(this.form);
    }
  }

  cancel() {
    this.sendFormData.emit(null);
  }  

  reset() {
    try {
      document.getElementById('clearFile').click();
    } catch (error) { }
    this.formDirective.resetForm();
    this.form.reset();
  }

  getFormValidationErrors(form: FormGroup) {
    const result = [];
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          result.push({
            'control': key,
            'error': keyError,
            'value': controlErrors[keyError]
          });
        });
      }
    });
    console.log(result);
    return result;
  }

}
