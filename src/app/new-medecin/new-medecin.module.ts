import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMedecinPageRoutingModule } from './new-medecin-routing.module';

import { NewMedecinPage } from './new-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMedecinPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewMedecinPage]
})
export class NewMedecinPageModule {}
