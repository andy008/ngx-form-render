import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public formConfig: any = {
    title: "",
    formClass: 'row',    
    showControls: false,
    controls: {
      saveButton: 'Save',
      saveButtonClass: 'btn btn-primary m-1',
      cancelButton: 'Cancel',
      cancelButtonClass: 'btn btn-outline-warning m-1'      

    },
    columns: [
      {
        class: 'col-12 col-lg-6 pb-4 pb-lg-0',
        sections: [
          {
            class: 'mr-1',
            fields: [
              {
                type: 'heading',
                htag: 'h4',
                class: 'contact-us__header card-title',
                content: 'Instructions'
              },   
              {
                type: 'content',
                class: 'contact-us__address',
                content:'<p>After submitting this request you will receive a notification email.<\/p><p>Please remove the SIM card and the memory card if applicable and include the Proof of Purchase. This can be obtained from your history page. <\/p><p>To check your mobile phone IMEI, please enter the following sequence in your mobile phone *#06#. The IMEI is a 15 digit serial number. <\/p><p>The Proof of Purchase will also have the IMEI recorded.<\/p><p>Our authorised repairer, MHD Services will contact you, organise a courier for pick up from your premises and email the consignment note that needs to be printed and attached to the package containing the device. Please ensure that the device is securely packaged and ready at the nominated location for collection.<\/p>'
              }
            ]
          },
          {
            class: 'ml-1',            
            fields: [                    
              {
                type: 'text',
                name: 'fullName',
                label: 'Full Name',
                value: '',
                required: true,
                validationMessage: 'Full Name is required.',
                multiline: false,
                placeholder: 'Full Name'
              },
              {
                type: 'email',
                name: 'email',
                label: 'Email Address',
                value: '',
                required: true,
                validationMessage: 'Email Address is required.',
                placeholder: 'Email Address'
              },
              {
                type: 'text',
                name: 'description',
                label: 'Description',
                value: '',
                required: false,
                multiline: true,
                lines: 5,
                placeholder: 'Description'
              },
              {
                type: 'radio',
                name: 'gender',
                label: 'Gender',
                required: false,
                style: 'row',
                value: '',
                options: [
                  { key: 'male', label: 'Male' },
                  { key: 'female', label: 'Female' },
                  { key: 'other', label: 'Other' }
                ],
                validationMessage: 'Select Gender.'
              },     
              {
                type: 'date',
                name: 'birthdate',
                label: 'Birth Date',
                // value: '2018-07-22',
                // min: '2018-01-01',
                // max: '2018-12-31',
                required: false,
                validationMessage: 'Please Select Birth Date.',
              },
              {
                type: 'time',
                name: 'birthtime',
                label: 'Birth Time',
                // value: '06:35',
                required: false,
                validationMessage: 'Please Select Birth Time.',
              }
            ]
          }
        ]
      },
      {
        class: 'col-12 col-lg-6',
        sections: [{
          class: 'ml-1',
          fields: [       
            {
              type: 'dropdown',
              name: 'country',
              label: 'Country',
              value: '',
              required: false,
              options: [
                { key: 'india', label: 'India' },
                { key: 'usa', label: 'USA' },
                { key: 'canada', label: 'Canada' }
              ],
              placeholder: 'Select Country',
              validationMessage: 'Please Select Country.',
            },
            {
              type: 'range',
              name: 'salary',
              label: 'Salary',
              sliderLabel: '$',
              min: 0,
              max: 100,
              step: 5,
              value: "0",
              required: false,
              validationMessage: 'Please Select Salary.',
            },
            {
              type: 'datetime',
              name: 'projectdatetime',
              label: 'Project Date & Time',
              // value: '1990-03-28T06:35',
              required: false,
              validationMessage: 'Project Date & Time is required.',
            },
            {
              type: 'file',
              name: 'projectimage',
              label: 'Project Image',
              multiple: false,
              value: null,
              required: false,
              onUpload: this.onUpload.bind(this),
              validationMessage: 'Please Select Project Image Files.',
            },
            {
              type: 'checkbox',
              name: 'remoteworker',
              label: 'Remote Worker',
              required: true,
              value: false,
              options: [],
              validationMessage: 'You must be a remote worker.'
            },            
            {
              type: 'checkboxgroup',
              name: 'languages',
              label: 'Languages',
              required: false,
              style: 'row',
              value: {
                // cooking: false, dancing: true
              },
              options: [
                { key: 'english', label: 'English' },
                { key: 'gujarati', label: 'Gujarati' },
                { key: 'hindi', label: 'Hindi' },
                { key: 'french', label: 'French' },
                { key: 'spanish', label: 'Spanish' }
              ],
              validationMessage: 'Please Select Languages.'
            },
            {
              type: 'switch',
              name: 'socialaccount',
              label: 'Social Account',
              required: false,
              style: 'row',
              value: {
                // maths: true
              },
              options: [
                { key: 'facebook', label: 'Facebook' },
                { key: 'linkedin', label: 'LinkedIn' },
                { key: 'whatsapp', label: 'WhatsApp' }
              ],
              validationMessage: 'Please Select Social Account.'
            }
          ]
        }]
      }
    ]
  };

  receiveData(data: any) {
    if(data==null){
      console.log('Cancelled')
    }else{
      console.log(data.value);
    }
  }

  onUpload(event: any) {
    let files: any;
    if (event?.target?.files) {
      files = event.target.files;
    } else {
      files = event
    }
    console.log(files);
  }
}
