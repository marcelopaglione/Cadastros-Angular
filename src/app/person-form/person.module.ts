

import { PersonFormComponent } from './person-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugComponent } from '../debug/debug.component';

@NgModule({
  declarations: [
    PersonFormComponent,
    DebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonModuleModule { }
