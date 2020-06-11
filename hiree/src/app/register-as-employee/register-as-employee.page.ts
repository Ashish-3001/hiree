import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { PostService } from '../servvices/post.service';

@Component({
  selector: 'app-register-as-employee',
  templateUrl: './register-as-employee.page.html',
  styleUrls: ['./register-as-employee.page.scss'],
})
export class RegisterAsEmployeePage implements OnInit {

  constructor(public menuCtrl: MenuController, private postdata:PostService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  onSubmit(form: NgForm) {
    var postdata = {
      user_id: "",
      user_phone: "",
      eyee_name: form.value.Name,
      eyee_aadhar_no: form.value.aadhar,
      eyee_age: form.value.age,
      eyee_gender: form.value.gender,
      eyee_address_1: form.value.address1,
      eyee_address_2: form.value.address2,
      eyee_city: form.value.city,
      eyee_state: form.value.state,
      eyee_type_hotel: form.value.type.toString(),
      eyee_education: form.value.education,
      eyee_choice: form.value.choice.toString(),
      eyee_time: form.value.time,
      eyee_pre_experience: form.value.previousExperience,
      eyee_place_pre_experience: form.value.placePreviousExprience,
      eyee_add_skills: form.value.additionalSkills,
      eyee_salary_expected: 5000,
    }
    
    this.postdata.post_employee_details(postdata);
  }

}

  