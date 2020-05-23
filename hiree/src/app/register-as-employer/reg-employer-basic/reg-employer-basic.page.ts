import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RegisterAsEmployerPage } from '../register-as-employer.page';
import { PostService } from 'src/app/servvices/post.service';

const TOKEN_KEY = 'auth-token';

@Component({
  selector: 'app-reg-employer-basic',
  templateUrl: './reg-employer-basic.page.html',
  styleUrls: ['./reg-employer-basic.page.scss'],
})
export class RegEmployerBasicPage implements OnInit {
  ac =6;
  eyer_name ="";
  eyer_phone ="";
  eyer_pas ="";
  eyer_email ="";

  

  constructor(private http: HttpClient, private router: Router, private postdata:PostService) { }

  ngOnInit() {
  }

  basic_details() {
    var postdata = {
      user_phone_no: this.eyer_phone,
      user_email: this.eyer_email,
      user_password: this.eyer_pas,
      user_type: "employee",
      user_otp: 23456,
    }

    this.postdata.post_basic_details(postdata);
  }

}

