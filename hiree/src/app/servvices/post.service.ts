import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { GetService } from './get.service';
import { AuthenticationService } from './authentication.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  user_id = new BehaviorSubject(0);
  user_phone = new BehaviorSubject(0);

  data:any;

  constructor(private http: HttpClient, private log_details: GetService, private authService: AuthenticationService,)  { }

  post_basic_details(postdata:any) {
    this.http.post('http://127.0.0.1:8000/UserLogin/', postdata).subscribe( (data) =>{
      console.log("success");
      this.data =data;
      this.user_id.next(this.data.id);
      this.user_phone.next(this.data.user_phone_no);
      console.log(this.data.user_phone_no);
      console.log(this.user_id.value);
    });
  }

  post_employer_details(postdata: any) {
    postdata.user_id = this.user_id.value;
    postdata.user_phone = this.user_phone.value;
    this.http.post('http://127.0.0.1:8000/EmployerDetails/', postdata).subscribe( (data) =>{
      console.log("success");
      this.data =data;
      this.user_id.next(this.data.id);
      console.log(this.user_id.value);
    });
  }

  post_employee_details(postdata: any) {
    postdata.user_id = this.user_id.value;
    postdata.user_phone = this.user_phone.value;
    this.http.post('http://127.0.0.1:8000/EmployeeDetails/', postdata).subscribe( (data) =>{
      console.log("success");
      this.data =data;
      this.user_id.next(this.data.id);
      console.log(this.user_id.value);
    });
  }

  post_job_post(postdata: any, total_job_post: number, eyer_id: number, active_job_post: number) {
    this.http.post('http://127.0.0.1:8000/JobPost/', postdata).subscribe( (data) =>{
      console.log("success");
      console.log(eyer_id);
      total_job_post += 1;
      active_job_post += 1;
      this.test_put(total_job_post, eyer_id, active_job_post)
    });
  }

  test_put(total_job_post:number, eyer_id: number, active_job_post:number) {
    var data = {
      eyer_tot_no_job_post: total_job_post,
      eyer_active_job_post: active_job_post,
    }
    this.http.patch(`http://127.0.0.1:8000/EmployerDetails/${eyer_id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
  }
}
