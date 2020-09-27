import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionSuitePageRoutingModule } from './inscription-suite-routing.module';

import { InscriptionSuitePage } from './inscription-suite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionSuitePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InscriptionSuitePage]
})
export class InscriptionSuitePageModule {}
