# Infomaxim Form Engine (netAmbition)

Easy Angular Reactive Form rendering from a JSON definition using the Bootstrap 5 design framework.

Wide range of form controls.
Multiple columns.
Multiple sections.

## Rendering
Added ^Angular 20.0.0 dependency

## Input
JSON object defining columns, section and fields.

## Field Types
text, email, password, number, dropdown, radio, checkbox, checkboxgroup, switch, range, date, time, datetime & file

## Special Fields
content, heading, image/file

## Rendering
Wide array of form components.
Validation management; help and error messages.
Defaults to vanilla Bootstrap 5 CSS markup.

## Methods
submit()
Check form validation; if valid the form values are emitted. See HTML form example below.

## Output
Returns JSON from form submit ready for posting or further processing.

## Dependencies
^Angular 20
Bootstrap 5

## Coming soon
Integration of Quill editor
More layout controls

## Installation
Install npm package into your Angular application

```bash
$ npm install infomaxim6-form-engine --save

```

Once installed you need to import the main module

```typescript

import { InfomaximFormBuilderModule } from 'infomaxim6-form-engine';

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
    title: "Sample Form",                             //  Optional form title to display. Adds a form wrapper.
    showControls: false,                              //  Show or hide form controls                        
    controls: {
      saveButton: 'Save',                             //  Save button name
      saveButtonClass: 'btn btn-primary',             //  Save button atle
      resetButton: 'Reset',                           //  Reset button name
      resetButtonClass: 'btn btn-outline-warning'     //  Reset button style
    },
    columns: [
          {
            class: 'col-12 col-lg-6 pb-4 pb-lg-0',
            sections: [
              {
                class: 'mr-1',
                fields: [    

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
                    placeholder: 'Full Name',                     // Placeholder to show inside field
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
            ]
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

Example component inclusion:-

```html
<infomaxim6-form-engine [formConfig]="formConfig" (formData)="receiveData($event)"></infomaxim6-form-engine>
```

