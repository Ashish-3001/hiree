import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servvices/post.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { OtpVerifyComponent } from 'src/app/shared/otp-verify/otp-verify.component';

@Component({
  selector: 'app-reg-employer-basic',
  templateUrl: './reg-employer-basic.page.html',
  styleUrls: ['./reg-employer-basic.page.scss'],
})
export class RegEmployerBasicPage implements OnInit {
 
  

  constructor(private modalCtrl: ModalController, private postdata:PostService) { }

  ngOnInit() {
  }

  basic_details(form: NgForm) {
    var postdata = {
      user_phone_no: form.value.phone,
      user_email: form.value.email,
      user_password: form.value.password,
      user_type: "employer",
      user_otp: 23456,
    }

    this.postdata.post_basic_details(postdata);

    this.postdata.post_basic_details(postdata);
    this.modalCtrl.create({component: OtpVerifyComponent }).then(modalEl => {
      modalEl.present();
    });
  }

}

