import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { GetService } from './get.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  user_id = new BehaviorSubject(0);

  data:any;

  constructor(private http: HttpClient, private log_details: GetService)  { }

  post_basic_details(postdata:any) {
    this.http.post('http://127.0.0.1:8000/UserLogin/', postdata).subscribe( (data) =>{
      console.log("success");
      this.data =data;
      this.user_id.next(this.data.id);
      console.log(this.user_id.value);
    });
  }

  post_employer_details(postdata: any) {
    postdata.user_id = this.user_id.value;
    this.http.post('http://127.0.0.1:8000/EmployerDetails/', postdata).subscribe( (data) =>{
      console.log("success");
      this.data =data;
      this.user_id.next(this.data.id);
      console.log(this.user_id.value);
    });
  }

  post_employee_details(postdata: any) {
    postdata.user_id = this.user_id.value;
    this.http.post('http://127.0.0.1:8000/EmployeeDetails/', postdata).subscribe( (data) =>{
      console.log("success");
      this.data =data;
      this.user_id.next(this.data.id);
      console.log(this.user_id.value);
    });
  }

  post_job_post(postdata: any) {
    postdata.eyer_id = this.log_details.logged_ey_id.value;
    this.http.post('http://127.0.0.1:8000/JobPost/', postdata).subscribe( (data) =>{
      console.log("success");
      this.data = data;
      console.log(this.data.id);
    });
  }
}
