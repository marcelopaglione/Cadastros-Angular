import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonFormComponent } from './person-form/person-form.component';

const routes: Routes = [
  { path: 'personForm', component: PersonFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'personForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
