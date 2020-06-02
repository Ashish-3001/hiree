import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAsEmployeePageRoutingModule } from './register-as-employee-routing.module';

import { RegisterAsEmployeePage } from './register-as-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAsEmployeePageRoutingModule,
  ],
  declarations: [RegisterAsEmployeePage]
})
export class RegisterAsEmployeePageModule {}
