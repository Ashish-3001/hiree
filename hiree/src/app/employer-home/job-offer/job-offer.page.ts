import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private http:HttpClient,
    private router:Router) { 
      
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
      var eyer_job_offer:any;
      var job_no_emplyee_offered:any;
      postdata.eyee_id = paraMap.get('eyer_id');
      this.http.get(`http://127.0.0.1:8000/EmployeeDetails/${postdata.eyee_id}/`).subscribe( (data:any) => {
        postdata.eyee_name = data.eyee_name;
        eyee_no_offered = data.eyee_no_offered;
        this.authService.data.then((value) => {
          eyer_job_offer = value.eyer_job_offer;
          postdata.eyer_id = value.id;
          postdata.eyer_name = value.eyer_hotel_name;
          if(this.get.job_post_state.value == 0) {
            this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}&job_active=true`).subscribe((data)=>{
              job_no_emplyee_offered = data[0].job_no_emplyee_offered;
              postdata.job_id = data[0].id;
              postdata.job_post = data[0].job_post;
              this.http.post('http://127.0.0.1:8000/JobOffer/', postdata).subscribe( (data) => {
                console.log(data);
              });
              var pacthjob = {
                job_no_emplyee_offered: ++job_no_emplyee_offered,
              }
              this.http.patch(`http://127.0.0.1:8000/JobPost/${postdata.job_id}/`, pacthjob).subscribe( (data) => {
                console.log(data);
              });
            });
          }
          else if(this.get.job_post_state.value == 1) {
            this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}&job_active=true`).subscribe((data)=>{
              job_no_emplyee_offered = data[1].job_no_emplyee_offered;
              postdata.job_id = data[1].id;
              postdata.job_post = data[1].job_post;
              this.http.post('http://127.0.0.1:8000/JobOffer/', postdata).subscribe( (data) => {
                console.log(data);
              });
              var pacthjob = {
                job_no_emplyee_offered: ++job_no_emplyee_offered,
              }
              this.http.patch(`http://127.0.0.1:8000/JobPost/${postdata.job_id}/`, pacthjob).subscribe( (data) => {
                console.log(data);
              });
            });
          }
          else if(this.get.job_post_state.value == 2) {
            this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}&job_active=true`).subscribe((data)=>{
              job_no_emplyee_offered = data[2].job_no_emplyee_offered;
              postdata.job_id = data[2].id;
              postdata.job_post = data[2].job_post;
              this.http.post('http://127.0.0.1:8000/JobOffer/', postdata).subscribe( (data) => {
                console.log(data);
              });
              var pacthjob = {
                job_no_emplyee_offered: ++job_no_emplyee_offered,
              }
              this.http.patch(`http://127.0.0.1:8000/JobPost/${postdata.job_id}/`, pacthjob).subscribe( (data) => {
                console.log(data);
              });
            });
          }
          var pactheyee = {
            eyee_no_offered: ++eyee_no_offered,
          }
          this.http.patch(`http://127.0.0.1:8000/EmployeeDetails/${postdata.eyee_id}/`, pactheyee).subscribe( (data) => {
            console.log(data);
          });
          var pactheyer = {
            eyer_job_offer: ++eyer_job_offer,
          }
          this.http.patch(`http://127.0.0.1:8000/EmployerDetails/${value.id}/`, pactheyer).subscribe( (data) => {
            console.log(data);
          });
        });
      });
    });
    setTimeout(()=>{ this.router.navigate(['../employer-profile/employer-home']); }, 2000)
  }


}
