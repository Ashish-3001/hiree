import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetService } from 'src/app/servvices/get.service';
import { AuthenticationService } from 'src/app/servvices/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-apply',
  templateUrl: './employee-apply.page.html',
  styleUrls: ['./employee-apply.page.scss'],
})
export class EmployeeApplyPage implements OnInit {
  postdata = {
    eyee_id: 0,
    eyee_name: "",
    job_id: "",
    job_post: "",
    eyer_id: 0,
    eyer_name: "",
    reason: "",
    what_can_he_do: "",
    quries: "",
  }

  constructor(
    private acitivatedRoute: ActivatedRoute, 
    private authService: AuthenticationService,
    public get: GetService,
    private http:HttpClient,) 
    { }

  ngOnInit() {
    this.acitivatedRoute.paramMap.subscribe(paraMap => {
      this.postdata.job_id = paraMap.get('eyee_id');
      console.log(this.postdata.job_id);
      this.http.get(`http://127.0.0.1:8000/JobPost/${this.postdata.job_id}/`).subscribe( (data:any) => {
        this.postdata.eyer_id = data.eyer_id;
        this.postdata.eyer_name = data.eyer_name;
        this.postdata.job_post = data.job_post;
      });
      this.authService.data.then((value) => {
        this.postdata.eyee_id = value.id;
        console.log(this.postdata.eyee_id);
        this.postdata.eyee_name = value.eyee_name;
      });
    });
  }
  apply(form: NgForm) {
    console.log("good");
    this.postdata.reason = form.value.reason;
    this.postdata.what_can_he_do = form.value.for_hotel;
    this.postdata.quries = form.value.queries;
    this.http.post('http://127.0.0.1:8000/JobApplied/', this.postdata).subscribe( (data) => {
      console.log(data);
    });
  }

}
