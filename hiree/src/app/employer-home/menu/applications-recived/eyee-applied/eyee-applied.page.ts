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

  constructor(private acitivatedRoute: ActivatedRoute, private http: HttpClient) 
  { }

  ngOnInit() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('eyer_id')) {
        console.log('error');
        return
      }
      const job_id = paraMap.get('eyer_id');
      this.http.get(`http://127.0.0.1:8000/JobApplied/?job_id=${job_id}&job_active=true`).subscribe( (value:any) => {
        this.value = value;
        console.log(value);
        var k: number = 0;
        for(value.id in value) {
          var j:number =0;
           
          this.http.get(`http://127.0.0.1:8000/EmployeeDetails/${value[k++].eyee_id}/`).subscribe( (data) => {
            this.applied_jobs[j++] = data;
            console.log(data);
            console.log(j);
            console.log(k);
          });
          console.log(k);
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
    }
    this.http.patch(`http://127.0.0.1:8000/JobApplied/${this.value[this.n].id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
  }
}
