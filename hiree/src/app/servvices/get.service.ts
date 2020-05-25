import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  logged_user_id = new BehaviorSubject(0);
  logged_ey_id = new BehaviorSubject(0);


  results_eyee_details: object = [{ }];
  results_eyer_details: object = [{ }];
  results_job_post: object = [{ }];
  dat: any;
  i:number = 0;


  constructor( private http:HttpClient, private authService: AuthenticationService) 
  {
  }

  login(login_id:any, login_pas:any) {
    this.http.get('http://127.0.0.1:8000/UserLogin/').subscribe( (data) =>{      
      this.dat = data;
      for(this.i; this.i >= 0; this.i++){
        if(login_id == this.dat[this.i].user_phone_no || login_id == this.dat[this.i].user_email){
          if(login_pas == this.dat[this.i].user_password) {
            this.authService.login(this.dat[this.i].user_type);
            this.logged_user_id.next(this.dat[this.i].id);
            console.log(this.dat[this.i].id);
            if(this.dat[this.i].user_type == 'employer') {
              this.http.get('http://127.0.0.1:8000/EmployerDetails/').subscribe( (data) =>{
                this.logged_ey_id.next(data[this.i].id);
                console.log(data[this.i].id);
                this.get_employee();
              });
            }
            else {
              this.http.get('http://127.0.0.1:8000/EmployeeDetails/').subscribe( (data) =>{
                this.logged_ey_id.next(data[this.i].id);
                console.log(data[this.i].id);
                this.get_employer();
                this.get_job_post();
              });
            }
            break;
          }
          break;
        }
      }
    });
  }

  get_employee() {
    let promise= new Promise((resolve, reject ) =>{
      this.http.get('http://127.0.0.1:8000/EmployeeDetails/').toPromise().then( (data) =>{
      console.log(data);
      this.results_eyee_details = data;
      resolve();
    },
    msg => {
      reject();
    }
    );
    });
    return this.results_eyee_details;
  }

  get_employer() {
    let promise= new Promise((resolve, reject ) =>{
      this.http.get('http://127.0.0.1:8000/EmployerDetails/').toPromise().then( (data) =>{
      console.log(data);
      this.results_eyer_details = data;
      resolve();
    },
    msg => {
      reject();
    }
    );
    });
    return this.results_eyer_details;
  }

  get_job_post() {
    let promise= new Promise((resolve, reject ) =>{
      this.http.get('http://127.0.0.1:8000/JobPost/').toPromise().then( (data) =>{
      console.log(data);
      this.results_job_post = data;
      resolve();
    },
    msg => {
      reject();
    }
    );
    });
    return this.results_job_post;
  }
}
