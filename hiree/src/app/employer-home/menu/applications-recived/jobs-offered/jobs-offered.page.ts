import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobs-offered',
  templateUrl: './jobs-offered.page.html',
  styleUrls: ['./jobs-offered.page.scss'],
})
export class JobsOfferedPage implements OnInit {
  job_post_toggle: boolean = false;
  offered_jobs: object = [{  }];
  n:number;
  

  constructor(private acitivatedRoute: ActivatedRoute, private http: HttpClient,) { }

  ngOnInit() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('eyer_id')) {
        console.log('error');
        return
      }
      const job_id = paraMap.get('eyer_id');
      this.http.get(`http://127.0.0.1:8000/JobOffer/?job_id=${job_id}`).subscribe( (value:any) => {
        var k: number = 0;
        for(value.id in value) {
          var j:number =0;
          this.http.get(`http://127.0.0.1:8000/EmployeeDetails/${value[k++].eyee_id}/`).subscribe( (data) => {
            this.offered_jobs[j++] = data;
          });
        }        
      });
    });
  }

  state(i) {
    this.job_post_toggle = !this.job_post_toggle;
    this.n = i;
    console.log(this.n);
  }
}
