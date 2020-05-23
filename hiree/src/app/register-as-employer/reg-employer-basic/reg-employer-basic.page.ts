import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RegisterAsEmployerPage } from '../register-as-employer.page';
import { PostService } from 'src/app/servvices/post.service';
import { NgForm } from '@angular/forms';
const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-reg-employer-basic',
  templateUrl: './reg-employer-basic.page.html',
  styleUrls: ['./reg-employer-basic.page.scss'],
})
export class RegEmployerBasicPage implements OnInit {
 
  

  constructor(private http: HttpClient, private router: Router, private postdata:PostService) { }

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
  }

}

