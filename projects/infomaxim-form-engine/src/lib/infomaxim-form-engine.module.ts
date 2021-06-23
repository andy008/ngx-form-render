//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfomaximFormEngineComponent } from './infomaxim-form-engine.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextboxComponent } from './fields/textbox/textbox.component';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import { RadioComponent } from './fields/radio/radio.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { CheckboxGroupComponent } from './fields/checkboxgroup/checkboxgroup.component';
import { FileComponent } from './fields/file/file.component';
import { SwitchComponent } from './fields/switch/switch.component';
import { RangeComponent } from './fields/range/range.component';
import { DateComponent } from './fields/date/date.component';
import { TimeComponent } from './fields/time/time.component';
import { DatetimeComponent } from './fields/datetime/datetime.component';
import { DragdropDirective } from './fields/file/dragdrop.directive';
import { HeadingComponent } from './fields/heading/heading.component';
import { ContentComponent } from './fields/content/content.component';
import { ImageComponent } from './fields/image/image.component';

@NgModule({
  declarations: [
    InfomaximFormEngineComponent,
    FormBuilderComponent,
    FieldBuilderComponent,
    TextboxComponent,
    DropdownComponent,
    RadioComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    FileComponent,
    SwitchComponent,
    RangeComponent,
    DateComponent,
    TimeComponent,
    DatetimeComponent,
    DragdropDirective,
    HeadingComponent,
    ContentComponent,
    ImageComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InfomaximFormEngineComponent,
    FormBuilderComponent,
    FieldBuilderComponent,
    TextboxComponent,
    DropdownComponent,
    RadioComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    FileComponent,
    SwitchComponent,
    RangeComponent,
    DateComponent,
    TimeComponent,
    DatetimeComponent,
    HeadingComponent,
    ContentComponent,
    ImageComponent
  ]
})
export class InfomaximFormBuilderModule { }
