import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jobs-offered',
  templateUrl: './jobs-offered.page.html',
  styleUrls: ['./jobs-offered.page.scss'],
})
export class JobsOfferedPage implements OnInit {
  offered_jobs: object = [{  }];
  abc: any;
  

  constructor(private acitivatedRoute: ActivatedRoute, private http: HttpClient,) { }

  ngOnInit() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('eyer_id')) {
        console.log('error');
        return
      }
      const job_id = paraMap.get('eyer_id');
      this.http.get(`http://127.0.0.1:8000/JobOffer/?job_id=${job_id}`).subscribe( (value:any) => {
        for(value.id in value) {
          var j:number =0;
          this.http.get(`http://127.0.0.1:8000/EmployeeDetails/${value[j].eyee_id}/`).subscribe( (data) => {
            this.offered_jobs[j++] = data;
            console.log(j);
          });
        }        
      });
    });
  }

}
