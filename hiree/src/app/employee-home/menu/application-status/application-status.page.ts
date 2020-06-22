import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servvices/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.page.html',
  styleUrls: ['./application-status.page.scss'],
})

export class ApplicationStatusPage implements OnInit {
  public page_state: string ='Offers Recived';
  job_post_toggle: boolean = false;
  eyee_id: number;
  jobs_offered: object = [{  }];
  applied_jobs: object = [{  }];
  shortlisted: object = [{  }];
  value1: object = [{  }];
  value2: object = [{  }];
  value3: object = [{  }];
  eyee_no_accept:any;
  n:number;
  

  constructor(private http: HttpClient, private authservice:AuthenticationService) { }

  ngOnInit() {
    this.authservice.data.then( (value) => {
      this.eyee_id = value.id;
      this.eyee_no_accept = value.eyee_no_accept;
      this.http.get(`http://127.0.0.1:8000/JobOffer/?job_id=&eyee_id=${this.eyee_id}&job_active=true&short_listed=false`).subscribe( (value:any) =>{
        this.value1 = value;
        console.log(value);
        var k: number = 0;
        for(value.id in value) {
          var j:number =0;
          this.http.get(`http://127.0.0.1:8000/JobPost/${value[k++].job_id}/`).subscribe( (data:any) => {
            this.jobs_offered[j++] = data;
          });
        }
      });
      this.http.get(`http://127.0.0.1:8000/JobApplied/?job_id=&eyee_id=${this.eyee_id}&job_active=true&short_listed=false`).subscribe( (value:any) =>{
        this.value2 = value;
        console.log(value);
        var k: number = 0;
        for(value.id in value) {
          var j:number =0;
          this.http.get(`http://127.0.0.1:8000/JobPost/${value[k++].job_id}/`).subscribe( (data:any) => {
            this.applied_jobs[j++] = data;
          });
        }
      });
      this.http.get(`http://127.0.0.1:8000/ShortListed/?job_id=&eyee_id=${this.eyee_id}&confirmed=false&job_active=true`).subscribe( (value:any) =>{
        this.value3 = value;
        console.log(value);
        var k: number = 0;
        for(value.id in value) {
          var j:number =0;
          this.http.get(`http://127.0.0.1:8000/JobPost/${value[k++].job_id}/`).subscribe( (data:any) => {
            this.shortlisted[j++] = data;
          });
        }
      });
    });
  }
  state(page:string) {
    if(page == "Offers Recived") {
      this.page_state = "Offers Recived";
    }
    else if(page == "Shortlisted") {
      this.page_state = "Shortlisted";
    }
    else if(page == "Applied Jobs") {
      this.page_state = "Applied Jobs";
    }
  }
  state1(i) {
    this.job_post_toggle = !this.job_post_toggle;
    this.n = i;
  }

  accept() {
    var data = {
      job_active: false,
      short_listed: true,
    }
    var postdata ={
      job_id: this.value1[this.n].job_id,
      eyee_id: this.value1[this.n].eyee_id,
      short_list_type: "offered",
      short_list_type_id: this.value1[this.n].id,
    }
    var pacth = {
      eyee_no_accept: ++this.eyee_no_accept,
    }
    this.http.patch(`http://127.0.0.1:8000/JobOffer/${this.value1[this.n].id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
    this.http.post('http://127.0.0.1:8000/ShortListed/', postdata).subscribe( (data) => {
      console.log(data);
    });
    this.http.patch(`http://127.0.0.1:8000/EmployeeDetails/${this.eyee_id}/`, pacth).subscribe( (data) => {
      console.log(data);
    });
  }

  reject() {
    var data = {
      job_active: false,
    }
    this.http.patch(`http://127.0.0.1:8000/JobApplied/${this.value1[this.n].id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
  }
}
