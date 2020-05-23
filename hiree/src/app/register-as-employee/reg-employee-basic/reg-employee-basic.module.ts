import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegEmployeeBasicPageRoutingModule } from './reg-employee-basic-routing.module';

import { RegEmployeeBasicPage } from './reg-employee-basic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegEmployeeBasicPageRoutingModule
  ],
  declarations: [RegEmployeeBasicPage]
})
export class RegEmployeeBasicPageModule {}
