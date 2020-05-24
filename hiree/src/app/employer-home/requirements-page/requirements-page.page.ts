import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-requirements-page',
  templateUrl: './requirements-page.page.html',
  styleUrls: ['./requirements-page.page.scss'],
})
export class RequirementsPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    var postdata = {
      
      eyer_post: form.value.post,
      eyer_experience: form.value.previousExperience,
      eyee_gender: form.value.gender,
      eyer_age: form.value.age,
      eyer_education: form.value.education,
      eyer_skills: form.value.additionalSkills,
    }

}
}