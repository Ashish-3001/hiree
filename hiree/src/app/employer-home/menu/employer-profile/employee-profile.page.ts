import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/servvices/get.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.page.html',
  styleUrls: ['./employee-profile.page.scss'],
})
export class EmployerProfilePage implements OnInit {

  employer_details: any;

  constructor(private http:HttpClient, private get: GetService) { }

  ngOnInit() {
    this.employer_details = this.get.logged_ey_id.value;
    console.log(this.employer_details);    
  }

}
