import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsommationPage } from './consommation.page';

const routes: Routes = [
  {
    path: '',
    component: ConsommationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsommationPageRoutingModule {}
