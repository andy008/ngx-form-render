import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { InfomaximFormBuilderModule } from '@andyf008/infomaxim6-form-engine';
import { InfomaximFormBuilderModule } from '../../projects/infomaxim-form-engine/src/lib/infomaxim-form-engine.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //NgbModule,
    InfomaximFormBuilderModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
