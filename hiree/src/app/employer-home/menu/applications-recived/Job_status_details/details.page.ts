import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from 'src/app/servvices/get.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/servvices/authentication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details: any = { };
  eyer_id: any;


  constructor(private acitivatedRoute: ActivatedRoute, private job_details: GetService, private http: HttpClient, private authService: AuthenticationService,) { }

  ngOnInit() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('eyer_id')) {
        console.log('error');
        return
      }
      const job_id = paraMap.get('eyer_id');
      var i:number =0;
      this.authService.data.then((value) => {
        console.log(value);
        this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}`).subscribe((data)=>{
         console.log(data);
         for(i; i >= 0; i++){
          if(data[i].id == job_id){
            this.details = data[i];
            console.log(data[i].id);
            this.eyer_id = data[i].id;
            break;
          }
        };
        });
      });
    });
  }
  
  deactivate() {
    var data = {
      job_active: false,
    }
    this.http.patch(`http://127.0.0.1:8000/JobPost/${this.eyer_id}/`, data ).subscribe( (data) =>{
      console.log(data);
    });
  }

}
