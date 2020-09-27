import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMedecinPage } from './new-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: NewMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMedecinPageRoutingModule {}
