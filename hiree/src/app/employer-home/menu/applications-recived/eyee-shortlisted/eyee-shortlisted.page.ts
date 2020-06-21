import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eyee-shortlisted',
  templateUrl: './eyee-shortlisted.page.html',
  styleUrls: ['./eyee-shortlisted.page.scss'],
})
export class EyeeShortlistedPage implements OnInit {
  job_post_toggle: boolean = false;
  applied_jobs: object = [{  }];
  value: object = [{  }];
  n:number;

  constructor(private acitivatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('eyer_id')) {
        console.log('error');
        return
      }
      const job_id = paraMap.get('eyer_id');
      this.http.get(`http://127.0.0.1:8000/ShortListed/?job_id=${job_id}&confirmed=false&job_active=true`).subscribe( (value:any) => {
        this.value = value;
        console.log(value);
        var k: number = 0;
        for(value.id in value) {
          var j:number =0;
          this.http.get(`http://127.0.0.1:8000/EmployeeDetails/${value[k++].eyee_id}/`).subscribe( (data) => {
            this.applied_jobs[j++] = data;
          });
        }        
      });
    });
  }

  state(i) {
    this.job_post_toggle = !this.job_post_toggle;
    this.n = i;
  }
  
  confirm() {
    var data = {
      confirmed: true,
      job_active: false,
    }
    this.http.patch(`http://127.0.0.1:8000/ShortListed/${this.value[this.n].id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
    var deletedata = {
      job_active: false,
    }
    this.http.patch(`http://127.0.0.1:8000/JobPost/${this.value[this.n].job_id}/`, deletedata ).subscribe( (data) =>{
      console.log(data);
    });
    var pacth = {
      eyee_no_shortlisted: this.value[this.n].eyee_id,
    }
    this.http.patch(`http://127.0.0.1:8000/EmployeeDetails/${this.value[this.n].eyee_id}/`, pacth).subscribe( (data) => {
      console.log(data);
    });
  }

  reject() {
    var data = {
      job_active: false,
    }
    this.http.patch(`http://127.0.0.1:8000/ShortListed/${this.value[this.n].id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
  }
}
