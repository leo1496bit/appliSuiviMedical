import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionSuitePage } from './inscription-suite.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionSuitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionSuitePageRoutingModule {}
