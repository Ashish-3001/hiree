import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eyee-applied',
  templateUrl: './eyee-applied.page.html',
  styleUrls: ['./eyee-applied.page.scss'],
})
export class EyeeAppliedPage implements OnInit {
  job_post_toggle: boolean = false;
  applied_jobs: object = [{  }];
  value: object = [{  }];
  n:number;
  eyee_no_accept:any;

  constructor(private acitivatedRoute: ActivatedRoute, private http: HttpClient) 
  { }

  ngOnInit() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('eyer_id')) {
        console.log('error');
        return
      }
      const job_id = paraMap.get('eyer_id');
      this.http.get(`http://127.0.0.1:8000/JobApplied/?job_id=${job_id}&job_active=true&short_listed=false`).subscribe( (value:any) => {
        this.value = value;
        console.log(value);
        var k: number = 0;
        for(value.id in value) {
          var j:number =0;
          this.http.get(`http://127.0.0.1:8000/EmployeeDetails/${value[k++].eyee_id}/`).subscribe( (data:any) => {
            this.applied_jobs[j++] = data;
            this.eyee_no_accept = data.eyee_no_accept;
          });
        }        
      });
    });
  }

  state(i) {
    this.job_post_toggle = !this.job_post_toggle;
    this.n = i;
  }

  accept() {
    var data = {
      job_active: false,
      short_listed: true,
    }
    var postdata ={
      job_id: this.value[this.n].job_id,
      eyee_id: this.value[this.n].eyee_id,
      short_list_type: "applied",
      short_list_type_id: this.value[this.n].id,
    }
    var pacth = {
      eyee_no_accept: ++this.eyee_no_accept,
    }
    this.http.patch(`http://127.0.0.1:8000/JobApplied/${this.value[this.n].id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
    this.http.post('http://127.0.0.1:8000/ShortListed/', postdata).subscribe( (data) => {
      console.log(data);
    });
    this.http.patch(`http://127.0.0.1:8000/EmployeeDetails/${this.value[this.n].eyee_id}/`, pacth).subscribe( (data) => {
      console.log(data);
    });
  }

  reject() {
    var data = {
      job_active: false,
    }
    this.http.patch(`http://127.0.0.1:8000/JobApplied/${this.value[this.n].id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
  }
}
