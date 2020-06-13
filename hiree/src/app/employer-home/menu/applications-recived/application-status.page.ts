import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/servvices/authentication.service';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.page.html',
  styleUrls: ['./application-status.page.scss'],
})
export class ApplicationsRecPage implements OnInit {
  eyer_id: number;
  results_job: object = [{  }];

  constructor(private authService: AuthenticationService, private http:HttpClient) { }

  ngOnInit() {
    this.authService.data.then((value) => {
      console.log(value);
      this.eyer_id = value.id;
      this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}&job_active=true`).subscribe((data)=>{
       console.log(data);
       this.results_job = data;
      });
    });
  }

  ionViewWillLeave() {
    
  }


}
