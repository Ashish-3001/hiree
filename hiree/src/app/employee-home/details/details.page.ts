import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from 'src/app/servvices/get.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details: any = { };


  constructor(private acitivatedRoute: ActivatedRoute, private job_details: GetService, private http: HttpClient) { }

  ngOnInit() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('eyee_id')) {
        console.log('error');
        return
      }
      const eyee_id = paraMap.get('eyee_id');
      var i:number =0;
      this.http.get('http://127.0.0.1:8000/JobPost/').subscribe((data)=>{
        for(i; i >= 0; i++){
          if(data[i].id == eyee_id){
            this.details = data[i];
            break;
          }
        }
      });
    });
  }
  

}
