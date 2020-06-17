import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/servvices/get.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/servvices/authentication.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.page.html',
  styleUrls: ['./employee-profile.page.scss'],
})
export class EmployerProfilePage implements OnInit {
  job_post_toggle: boolean = false;

  details:any = {};

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.data.then((value) => {
      this.details = value;
      console.log(value);
    });    
  }

  state() {
    this.job_post_toggle = !this.job_post_toggle;
  }
}
