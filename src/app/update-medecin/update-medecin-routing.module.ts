import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMedecinPage } from './update-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMedecinPageRoutingModule {}
