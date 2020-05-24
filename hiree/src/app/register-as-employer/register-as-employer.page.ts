import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { PostService } from '../servvices/post.service';

@Component({
  selector: 'app-register-as-employer',
  templateUrl: './register-as-employer.page.html',
  styleUrls: ['./register-as-employer.page.scss'],
})
export class RegisterAsEmployerPage implements OnInit {

  constructor(public menuCtrl: MenuController, private postdata: PostService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  onSubmit(form: NgForm) {
    var postdata = {
      user_id: "",
      eyer_gst_no: form.value.gst,
      eyer_hotel_name: form.value.hotel_name,
      eyer_address_1: form.value.address_1,
      eyer_address_2: form.value.address_2,
      eyer_city: form.value.city,
      eyer_state: form.value.state,
      eyer_website: form.value.website,
      eyer_type: form.value.type,
      eyer_category: form.value.category,
      eyer_cuisines: form.value.cuisines.toString(),
      eyer_no_seats: form.value.seats,
    }

    this.postdata.post_employer_details(postdata);
  }
}
