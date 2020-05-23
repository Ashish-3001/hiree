import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servvices/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-employee-basic',
  templateUrl: './reg-employee-basic.page.html',
  styleUrls: ['./reg-employee-basic.page.scss'],
})
export class RegEmployeeBasicPage implements OnInit {

  
  constructor(private postdata: PostService) { }

  ngOnInit() {
  }

  basic_details(form: NgForm) {
    var postdata = {
      user_phone_no: form.value.phone,
      user_email: form.value.email,
      user_password: form.value.password,
      user_type: "employee",
      user_otp: 23456,
    }

    this.postdata.post_basic_details(postdata);
  }
}
