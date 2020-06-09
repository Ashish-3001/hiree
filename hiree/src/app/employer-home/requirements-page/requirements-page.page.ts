import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/servvices/post.service';



@Component({
  selector: 'app-requirements-page',
  templateUrl: './requirements-page.page.html',
  styleUrls: ['./requirements-page.page.scss'],
})
export class RequirementsPagePage implements OnInit {

  constructor(private postdata:PostService ,public menuCtrl: MenuController) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {

    var postdata = {
      eyer_id: 6,
      job_posted_name: form.value.post.postedName,
      job_posted_dasignation: form.value.post.postedDesignation,
      job_salary: form.value.post.salary,
      job_post: form.value.post.toString(),
      job_experience: form.value.previousExperience,
      job_employment: form.value.post.employment,
      job_gender: form.value.gender,
      job_age: form.value.age,
      job_education: form.value.education,
      job_workingDays: form.value.post.workingDays,
      job_skills: form.value.additionalSkills,
      job_language: form.value.language,
      job_shift: form.value.shift,
    }
  this.postdata.post_job_post(postdata);
  }


  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}