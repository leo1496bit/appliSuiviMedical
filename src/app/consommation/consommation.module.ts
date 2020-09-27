import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsommationPageRoutingModule } from './consommation-routing.module';

import { ConsommationPage } from './consommation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsommationPageRoutingModule
  ],
  declarations: [ConsommationPage]
})
export class ConsommationPageModule {}
