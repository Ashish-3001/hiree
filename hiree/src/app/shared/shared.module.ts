import { NgModule } from '@angular/core';
import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationPickerComponent } from './Picker/location-picker/location-picker.component';
import { CommonModule } from '@angular/common';
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LocationPickerComponent,MapModalComponent,OtpVerifyComponent ],
    imports: [CommonModule, IonicModule, FormsModule,],
    exports: [LocationPickerComponent, MapModalComponent],
    entryComponents: [MapModalComponent,OtpVerifyComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule{}