import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/servvices/post.service';

@Component({
  selector: 'app-reg-employee-basic',
  templateUrl: './reg-employee-basic.page.html',
  styleUrls: ['./reg-employee-basic.page.scss'],
})
export class RegEmployeeBasicPage implements OnInit {

  ac =6;
  eyer_name ="";
  eyer_phone ="";
  eyer_pas ="";
  eyer_email ="";


  constructor(private postdata: PostService) { }

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
