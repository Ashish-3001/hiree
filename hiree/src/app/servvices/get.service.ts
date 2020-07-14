import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  logged_user_id = new BehaviorSubject(0);
  logged_ey_id = new BehaviorSubject(0);
  job_post_state = new BehaviorSubject<number>(0);


  results_eyee_details: any = [];
  results_eyer_details: object = [{ }];
  results_job_post: any = [];
  results_job_post_sepcific: object = { };
  dat: any;
  i:number = 0;


  constructor( private http:HttpClient, 
    private authService: AuthenticationService, 
    private menu: AppComponent,
    private router: Router) 
  {
  }

  login(login_id:any) {
    console.log('heyy');
    this.http.get('http://hiree-back-end.herokuapp.com/UserLogin/').subscribe( (data) =>{      
      this.dat = data;
      var state:boolean = false;
      for(this.i; this.i >= 0; this.i++){
        if(this.dat[this.i]) {
          if(login_id == this.dat[this.i].user_phone_no){
            this.authService.login(this.dat[this.i].user_type, this.dat[this.i].id);
            this.logged_user_id.next(this.dat[this.i].id);
            state = true;
            console.log(this.menu.state);
            console.log(this.dat[this.i].id);
            break;
          }
        }
        else {
          break;
        }
      }
      if(state== false) {
        this.router.navigate(['register']);
      }
    });
  }

  get_employee(e_c:any,e_s:any,e_ex:any,e_e:any,e_l:any,e_a:any,e_g:any) {
    console.log(e_c);
    this.results_eyee_details = [];
    return this.http.get(`http://127.0.0.1:8000/EmployeeDetails/?user_id=&eyee_choice=${e_c}&eyee_salary_expected=${e_s}&eyee_pre_experience=${e_ex}&eyee_education=${e_e}&eyee_city=${e_l}&eyee_type_hotel=&eyee_age=${e_a}&eyee_gender=${e_g}&negated_eyee_salary_expected=&negated_eyee_pre_experience=&negated_eyee_education=&negated_eyee_address_2=&negated_eyee_type_hotel=&negated_eyee_age=&negated_eyee_gender=`).toPromise().then( (data) =>{
      for(var i=0; i>=0;i++) {
        if(data[i]) {
          if(this.results_eyee_details.some((item) => item.id === data[i].id)) {
            console.log("hi");
          }
          else {
            this.results_eyee_details.push(data[i]);
            console.log(data[i]);
          }
        }
        else {
          break;
        }
      }
      this.http.get(`http://127.0.0.1:8000/EmployeeDetails/?user_id=&eyee_choice=${e_c}&eyee_salary_expected=${e_s}&eyee_pre_experience=${e_ex}&eyee_education=${e_e}&eyee_city=&eyee_type_hotel=&eyee_age=&eyee_gender=&negated_eyee_salary_expected=&negated_eyee_pre_experience=&negated_eyee_education=&negated_eyee_address_2=&negated_eyee_type_hotel=&negated_eyee_age=&negated_eyee_gender=`).toPromise().then( (data) =>{
        for(var i=0; i>=0;i++) {
          if(data[i]) {
            if(this.results_eyee_details.some((item) => item.id === data[i].id)) {
              console.log("hi");
            }
            else {
              this.results_eyee_details.push(data[i]);
              console.log(data[i]);
            }
          }
          else {
            break;
          }
        }
        this.http.get(`http://127.0.0.1:8000/EmployeeDetails/?user_id=&eyee_choice=${e_c}&eyee_salary_expected=${e_s}&eyee_pre_experience=${e_ex}&eyee_education=&eyee_city=&eyee_type_hotel=&eyee_age=&eyee_gender=&negated_eyee_salary_expected=&negated_eyee_pre_experience=&negated_eyee_education=${e_e}&negated_eyee_address_2=&negated_eyee_type_hotel=&negated_eyee_age=&negated_eyee_gender=`).toPromise().then( (data) =>{
          for(var i=0; i>=0;i++) {
            if(data[i]) {
              if(this.results_eyee_details.some((item) => item.id === data[i].id)) {
                console.log("hi");
              }
              else {
                this.results_eyee_details.push(data[i]);
                console.log(data[i]);
              }
            }
            else {
              break;
            }
          }
          this.http.get(`http://127.0.0.1:8000/EmployeeDetails/?user_id=&eyee_choice=${e_c}&eyee_salary_expected=${e_s}&eyee_pre_experience=&eyee_education=${e_e}&eyee_city=&eyee_type_hotel=&eyee_age=&eyee_gender=&negated_eyee_salary_expected=&negated_eyee_pre_experience=${e_ex}&negated_eyee_education=&negated_eyee_address_2=&negated_eyee_type_hotel=&negated_eyee_age=&negated_eyee_gender=`).toPromise().then( (data) =>{
            for(var i=0; i>=0;i++) {
              if(data[i]) {
                if(this.results_eyee_details.some((item) => item.id === data[i].id)) {
                  console.log("hi");
                }
                else {
                  this.results_eyee_details.push(data[i]);
                  console.log(data[i]);
                }
              }
              else {
                break;
              }
            }
            this.http.get(`http://127.0.0.1:8000/EmployeeDetails/?user_id=&eyee_choice=${e_c}&eyee_salary_expected=&eyee_pre_experience=${e_ex}&eyee_education=${e_e}&eyee_city=&eyee_type_hotel=&eyee_age=&eyee_gender=&negated_eyee_salary_expected${e_s}=&negated_eyee_pre_experience=&negated_eyee_education=&negated_eyee_address_2=&negated_eyee_type_hotel=&negated_eyee_age=&negated_eyee_gender=`).toPromise().then( (data) =>{
              for(var i=0; i>=0;i++) {
                if(data[i]) {
                  if(this.results_eyee_details.some((item) => item.id === data[i].id)) {
                    console.log("hi");
                  }
                  else {
                    this.results_eyee_details.push(data[i]);
                    console.log(data[i]);
                  }
                }
                else {
                  break;
                }
              }
              this.http.get(`http://127.0.0.1:8000/EmployeeDetails/?user_id=&eyee_choice=${e_c}&eyee_salary_expected=${e_s}&eyee_pre_experience=&eyee_education=&eyee_city=&eyee_type_hotel=&eyee_age=&eyee_gender=&negated_eyee_salary_expected=&negated_eyee_pre_experience=${e_ex}&negated_eyee_education=${e_e}&negated_eyee_address_2=&negated_eyee_type_hotel=&negated_eyee_age=&negated_eyee_gender=`).toPromise().then( (data) =>{
                for(var i=0; i>=0;i++) {
                  if(data[i]) {
                    if(this.results_eyee_details.some((item) => item.id === data[i].id)) {
                      console.log("hi");
                    }
                    else {
                      this.results_eyee_details.push(data[i]);
                      console.log(data[i]);
                    }
                  }
                  else {
                    break;
                  }
                }
                this.http.get(`http://127.0.0.1:8000/EmployeeDetails/?user_id=&eyee_choice=${e_c}&eyee_salary_expected=&eyee_pre_experience=${e_ex}&eyee_education=&eyee_city=&eyee_type_hotel=&eyee_age=&eyee_gender=&negated_eyee_salary_expected=${e_s}&negated_eyee_pre_experience=&negated_eyee_education=${e_e}&negated_eyee_address_2=&negated_eyee_type_hotel=&negated_eyee_age=&negated_eyee_gender=`).toPromise().then( (data) =>{
                  for(var i=0; i>=0;i++) {
                    if(data[i]) {
                      if(this.results_eyee_details.some((item) => item.id === data[i].id)) {
                        console.log("hi");
                      }
                      else {
                        this.results_eyee_details.push(data[i]);
                        console.log(data[i]);
                      }
                    }
                    else {
                      break;
                    }
                  }
                  this.http.get(`http://127.0.0.1:8000/EmployeeDetails/?user_id=&eyee_choice=${e_c}&eyee_salary_expected=&eyee_pre_experience=&eyee_education=${e_e}&eyee_city=&eyee_type_hotel=&eyee_age=&eyee_gender=&negated_eyee_salary_expected=${e_s}&negated_eyee_pre_experience=${e_ex}&negated_eyee_education=&negated_eyee_address_2=&negated_eyee_type_hotel=&negated_eyee_age=&negated_eyee_gender=`).toPromise().then( (data) =>{
                    for(var i=0; i>=0;i++) {
                      if(data[i]) {
                        if(this.results_eyee_details.some((item) => item.id === data[i].id)) {
                          console.log("hi");
                        }
                        else {
                          this.results_eyee_details.push(data[i]);
                          console.log(data[i]);
                        }
                      }
                      else {
                        break;
                      }
                    }
                    return this.results_eyee_details;
                  });
                });
              });
            });
          });
        });
      });
    });
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

  get_job_post(j_P:any,j_s:any,j_l:any,j_e:any,j_a:any,j_g:any,j_ex:any,j_c:any,s:any) {
    console.log(s);
    this.results_job_post =[];
    return this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=&job_active=true&job_post=${j_P}&job_salary=${j_s}&eyer_location=${j_l}&job_gender=${j_g}&job_education=${j_e}&job_experience=${j_ex}&job_age=${j_a}&negated_job_salary=&negated_eyer_location=&negated_job_gender=&negated_job_education=&negated_job_experience=&negated_job_age=&search=${s}`).toPromise().then( (data) =>{
      for(var i=0; i>=0;i++) {
        if(data[i]) {
          if(this.results_job_post.some((item) => item.id === data[i].id)) {
            console.log("hi");
          }
          else {
            this.results_job_post.push(data[i]);
            console.log(data[i]);
          }
        }
        else {
          break;
        }
      }
      this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=&job_active=true&job_post=${j_P}&job_salary=${j_s}&eyer_location=&job_gender=&job_education=${j_e}&job_experience=${j_ex}&job_age=&negated_job_salary=&negated_eyer_location=&negated_job_gender=&negated_job_education=&negated_job_experience=&negated_job_age=&search=${s}`).toPromise().then( (data:any) =>{ 
        for(var i=0; i>=0;i++) { 
          if(data[i]) {
            if(this.results_job_post.some((item) => item.id === data[i].id)) {
              console.log("hi");
            }
            else {
              this.results_job_post.push(data[i]);
              console.log(data[i]);
            }
          }
          else {
            break;
          }
        }
        this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=&job_active=true&job_post=${j_P}&job_salary=${j_s}&eyer_location=&job_gender=&job_education=&job_experience=${j_ex}&job_age=&negated_job_salary=&negated_eyer_location=&negated_job_gender=&negated_job_education=${j_e}&negated_job_experience=&negated_job_age=&search=${s}`).toPromise().then( (data:any) =>{ 
          for(var i=0; i>=0;i++) {
            if(data[i]) {
              if(this.results_job_post.some((item) => item.id === data[i].id)) {
                console.log("hi");
              }
              else {
                this.results_job_post.push(data[i]);
                console.log(data[i]);
              }
            }
            else {
              break;
            }
          }
          this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=&job_active=true&job_post=${j_P}&job_salary=${j_s}&eyer_location=&job_gender=&job_education=${j_e}&job_experience=&job_age=&negated_job_salary=&negated_eyer_location=&negated_job_gender=&negated_job_education=&negated_job_experience=${j_ex}&negated_job_age=&search=${s}`).toPromise().then( (data:any) =>{ 
            for(var i=0; i>=0;i++) {
              if(data[i]) {
                if(this.results_job_post.some((item) => item.id === data[i].id)) {
                  console.log("hi");
                }
                else {
                  this.results_job_post.push(data[i]);
                  console.log(data[i]);
                }
              }
              else {
                break;
              }
            }
            this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=&job_active=true&job_post=${j_P}&job_salary=&eyer_location=&job_gender=&job_education=${j_e}&job_experience=${j_ex}&job_age=&negated_job_salary=${j_s}&negated_eyer_location=&negated_job_gender=&negated_job_education=&negated_job_experience=&negated_job_age=&search=${s}`).toPromise().then( (data:any) =>{ 
              for(var i=0; i>=0;i++) {
                if(data[i]) {
                  if(this.results_job_post.some((item) => item.id === data[i].id)) {
                    console.log("hi");
                  }
                  else {
                    this.results_job_post.push(data[i]);
                    console.log(data[i]);
                  }
                }
                else {
                  break;
                }
              }
              this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=&job_active=true&job_post=${j_P}&job_salary=${j_s}&eyer_location=&job_gender=&job_education=&job_experience=&job_age=&negated_job_salary=&negated_eyer_location=&negated_job_gender=&negated_job_education=${j_e}&negated_job_experience=${j_ex}&negated_job_age=&search=&search=${s}`).toPromise().then( (data:any) =>{ 
                for(var i=0; i>=0;i++) {
                  if(data[i]) {
                    if(this.results_job_post.some((item) => item.id === data[i].id)) {
                      console.log("hi");
                    }
                    else {
                      this.results_job_post.push(data[i]);
                      console.log(data[i]);
                    }
                  }
                  else {
                    break;
                  }
                }
                this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=&job_active=true&job_post=${j_P}&job_salary=&eyer_location=&job_gender=&job_education=&job_experience=${j_ex}&job_age=&negated_job_salary=${j_s}&negated_eyer_location=&negated_job_gender=&negated_job_education=${j_e}&negated_job_experience=&negated_job_age=&search=&search=${s}`).toPromise().then( (data:any) =>{ 
                  for(var i=0; i>=0;i++) {
                    if(data[i]) {
                      if(this.results_job_post.some((item) => item.id === data[i].id)) {
                        console.log("hi");
                      }
                      else {
                        this.results_job_post.push(data[i]);
                        console.log(data[i]);
                      }
                    }
                    else {
                      break;
                    }
                  }
                  this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=&job_active=true&job_post=${j_P}&job_salary=&eyer_location=&job_gender=&job_education=${j_e}&job_experience=&job_age=&negated_job_salary=${j_s}&negated_eyer_location=&negated_job_gender=&negated_job_education=&negated_job_experience=${j_ex}&negated_job_age=&search=&search=${s}`).toPromise().then( (data:any) =>{ 
                    for(var i=0; i>=0;i++) {
                      if(data[i]) {
                        if(this.results_job_post.some((item) => item.id === data[i].id)) {
                          console.log("hi");
                        }
                        else {
                          this.results_job_post.push(data[i]);
                          console.log(data[i]);
                        }
                      }
                      else {
                        break;
                      }
                    }
                    return this.results_job_post;
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  get data() {
    return this.results_job_post;
  }

  /* get_specific_job(id: any) { 
    var i: number = 0;
     this.http.get('http://127.0.0.1:8000/JobPost/').subscribe((data)=>{
      for(i; i >= 0; i++){
        if(data[i].id){
          console.log(data);
          this.results_job_post_sepcific = data[i];
          console.log(this.results_job_post_sepcific);
          break;
        }
      }
      console.log(this.results_job_post_sepcific);
      return data[i];
    });
  } */
}
