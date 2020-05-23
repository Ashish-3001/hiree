import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register-as-employee',
  templateUrl: './register-as-employee.page.html',
  styleUrls: ['./register-as-employee.page.scss'],
})
export class RegisterAsEmployeePage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  onSubmit(form: NgForm) {
    var postdata = {
      user_id: 1,
      eyee_aadhar: form.value.aadhar,
      eyee_age: form.value.age,
      eyee_gender: form.value.gender,
      eyee_address1: form.value.address1,
      eyee_address2: form.value.address2,
      eyee_city: form.value.city,
      eyee_state: form.value.state,
      eyee_type: form.value.type,
      eyee_education: form.value.education,
      eyee_choice: form.value.choice,
      eyee_time: form.value.time,
      eyee_pre_experience: form.value.previousExperience,
      eyee_place_pre_experience: form.value.placePreviousExperience,
      eyee_add_skills: form.value.additionalSkills,
      eyee_salary_expected: form.value.salaryExpected,
      }
   }
 }