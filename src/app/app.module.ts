import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonModuleModule } from './person-form/person.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    PersonModuleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
