import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAsEmployerPageRoutingModule } from './register-as-employer-routing.module';

import { RegisterAsEmployerPage } from './register-as-employer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAsEmployerPageRoutingModule
  ],
  declarations: [RegisterAsEmployerPage]
})
export class RegisterAsEmployerPageModule {}
