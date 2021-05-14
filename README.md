# Infomaxim Form Engine (netAmbition)

This library provides form rendering capabilities using Angular and JSON with integration with Infomaxim to fetch form definitions and post data.

The library provides Angular components that help developers to quickly generate Reactive Forms. 

Component supports validators, help messages and error messages.

Based on ReactiveFormsModule from @angular/forms. Available custom and all angular built-in form elements. Automatically create full customised form with simple javascript object configuration. Also support some of the CSS styling for form attributes.

Currently uses Bootstrap. Future versions will provide support for other design frameworks.

## Installation

Install npm package into your Angular application
```bash
$ npm install infomaxim-form-engine --save
```

Once installed you need to import the main module
```typescript
import { InfomaximFormBuilderModule } from 'infomaxim-form-engine';

@NgModule({
    imports: [
        InfomaximFormBuilderModule
    ]
})
export class AppModule {
```

## Dependencies

- [ngx-Bootstrap](https://github.com/valor-software/ngx-bootstrap/)

## Usage

### Create your data model object
```typescript
public formConfig: any = {
    title: "Sample Form",                             // Form name to display
    controls: {
      saveButton: 'Save',                             // Save button name
      resetButton: 'Reset'                            // Reset button name
    },
    fields: [                                         // Defining fields of our form
      {
        type: 'text',                                 // Field type (text, email, password, number, dropdown, radio, checkbox, switch, range, date, time, datetime & file)
        name: 'fullName',                             // Unique field name
        label: 'Full Name',                           // Field label
        value: '',                                    // Field value
        required: true,                               // Necessary field or not
        minLength: 5,                                 // Minimum length of field (Note: only for required field)
        maxLength: 10,                                // Maximum length of field (Note: only for required field)
        pattern: '^\\d{1,4}$',                        // Specify Regex Pattern for the field (Note: only for required field)
        validationMessage: 'Full Name is required.',  // Validation error message
        multiline: false,                             // Multiline field or not
        lines: 5,                                     // Number of rows for field (Note: only for multiline input field)
        placeholder: 'Full Name',                     //Placeholder to show inside field
        options: [                                    // Options to populate the field (Note: only for radio, dropdown, checkbox & switch)
          { key: 'male', label: 'Male' },
          { key: 'female', label: 'Female' },
          { key: 'other', label: 'Other' }
        ],
        min: '0',                                     // Minimum field value (Note: only for date & range)
        max: '100',                                   // Maximum field value (Note: only for date & range)
        step: 5,                                      // Step field value (Note: only for range)
        sliderLabel: '$',                             // Slider label for field (Note: only for range)
        multiple: true,                               // Multiple file upload support for field (Note: only for file)
        onUpload: this.onUpload.bind(this),           // Function to call on file upload (Note: only for file)
        style: 'row',                                 // Layout type (row & column) (Note: only for checkbox, switch & radio)
      }
    ]
}

onUpload(event: any) {                                // Upload function called when any file is selected
  let files: any;
  if (event?.target?.files) {
    files = event.target.files;
  } else {
    files = event
  }
  console.log(files);
}

receiveData(data: any) {                              // Received function called when user press save button
    console.log(data);
}
```

### HTML Form

Snippet below will generate form fields
```html
<infomaxim-form-engine [formConfig]="formConfig" (formData)="receiveData($event)"></infomaxim-form-engine>
```

### Form

![Form](https://github.com/arjunkhetia/Angular-Bootstrap-form-engine/blob/master/src/assets/form.png "Form")

### Validation Error Form

![Error Form](https://github.com/arjunkhetia/Angular-Bootstrap-form-engine/blob/master/src/assets/errorform.png "Error Form")

### Filled Form

![Filled Form](https://github.com/arjunkhetia/Angular-Bootstrap-form-engine/blob/master/src/assets/filledform.png "Filled Form")
