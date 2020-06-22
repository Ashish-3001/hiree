import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/servvices/authentication.service';
import { GetService } from 'src/app/servvices/get.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.page.html',
  styleUrls: ['./job-offer.page.scss'],
})
export class JobOfferPage implements OnInit {

  constructor(
    private acitivatedRoute: ActivatedRoute, 
    private authService: AuthenticationService,
    public get: GetService,
    private http:HttpClient) { 
      
    }

  ngOnInit() {
    
  }

  offer_job() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      var postdata = {
        eyee_id: "",
        eyee_name: "",
        job_id: 0,
        job_post: "",
        eyer_id: 0,
        eyer_name: "",
        offer_letter: "Congratulations, You can be a part of THIS Hotel with the summoned designation.We are impressed with your profile and looking forward to meet you.",
      }
      var eyee_no_offered:any;
      postdata.eyee_id = paraMap.get('eyer_id');
      this.http.get(`http://127.0.0.1:8000/EmployeeDetails/${postdata.eyee_id}/`).subscribe( (data:any) => {
        postdata.eyee_name = data.eyee_name;
        eyee_no_offered = data.eyee_no_offered;
      });
      this.authService.data.then((value) => {
        postdata.eyer_id = value.id;
        postdata.eyer_name = value.eyer_hotel_name;
        if(this.get.job_post_state.value == 1) {
          this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}&job_active=true`).subscribe((data)=>{
            postdata.job_id = data[0].id;
            postdata.job_post = data[0].job_post;
            this.http.post('http://127.0.0.1:8000/JobOffer/', postdata).subscribe( (data) => {
              console.log(data);
            });
          });
        }
        else if(this.get.job_post_state.value == 2) {
          this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}&job_active=true`).subscribe((data)=>{
            postdata.job_id = data[1].id;
            postdata.job_post = data[1].job_post;
            this.http.post('http://127.0.0.1:8000/JobOffer/', postdata).subscribe( (data) => {
              console.log(data);
            });
          });
        }
        else if(this.get.job_post_state.value == 3) {
          this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}&job_active=true`).subscribe((data)=>{
            postdata.job_id = data[2].id;
            postdata.job_post = data[2].job_post;
            this.http.post('http://127.0.0.1:8000/JobOffer/', postdata).subscribe( (data) => {
              console.log(data);
            });
          });
        }
        var pacth = {
          eyee_no_offered: ++eyee_no_offered,
        }
        this.http.patch(`http://127.0.0.1:8000/EmployeeDetails/${postdata.eyee_id}/`, pacth).subscribe( (data) => {
          console.log(data);
        });
      });
    });
  }


}
