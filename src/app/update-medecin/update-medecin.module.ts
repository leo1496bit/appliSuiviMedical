import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMedecinPageRoutingModule } from './update-medecin-routing.module';

import { UpdateMedecinPage } from './update-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMedecinPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdateMedecinPage]
})
export class UpdateMedecinPageModule {}
