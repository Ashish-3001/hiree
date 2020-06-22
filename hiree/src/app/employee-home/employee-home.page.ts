import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetService } from '../servvices/get.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../servvices/authentication.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.page.html',
  styleUrls: ['./employee-home.page.scss'],
})
export class EmployeeHomePage implements OnInit {
  public selectedIndex = [];
  
  k:number =0;
  fav: object = [{ }];
  eyee_details:any;
  results_job: object = [{  }];

  constructor(
    public menuCtrl: MenuController,
    private get: GetService,
    private http: HttpClient,
    private authService: AuthenticationService) 
  { 


  }

  ngOnInit() {
    this.get.get_job_post();

  }

  like(f, a) {
    for(var i=0; i<this.k;i++) {
      if(this.fav[i].job_id == f) {
        
        var pacthdata = {
          unliked: false,
        }
        this.http.patch(`http://127.0.0.1:8000/EmployeeDetailsFav/${this.fav[i].id}/`, pacthdata).subscribe( () => { 
          console.log("success");
        });
        this.selectedIndex.push(f);
        console.log(this.selectedIndex);
        return;
      }
    }
    var postdata = {
      eyee_id: this.eyee_details.id,
      eyee_name: this.eyee_details.eyee_name,
      job_id: f,
      job_post: this.results_job[a].job_post,
    }
    this.http.post('http://127.0.0.1:8000/EmployeeDetailsFav/', postdata).subscribe( (value:any) => {
      console.log("post ('liking for the 1st time')");
      this.http.get(`http://127.0.0.1:8000/EmployeeDetailsFav/?eyee_id=${this.eyee_details.id}`).subscribe( (data:any) => {
        this.fav = data;
        this.selectedIndex.push(value.job_id);
        console.log(this.selectedIndex);
      });
      this.k++;
    });
  }

  dislike(f) {
    for(var i=0; i<this.k;i++) {
      if(this.fav[i].job_id == f) {
        var pacthdata = {
          unliked: true,
        }
        this.http.patch(`http://127.0.0.1:8000/EmployeeDetailsFav/${this.fav[i].id}/`, pacthdata).subscribe( () => { 
          console.log("success");
        });
        const index = this.selectedIndex.indexOf(f);
        if (index > -1) {
          this.selectedIndex.splice(index, 1);
          console.log(this.selectedIndex);
        }
      }
    }
  }

  update(id) {
    this.http.get(`http://127.0.0.1:8000/JobPost/${id}/`).subscribe( (data:any) => {
      var pacthjob = {
        job_post_opened: ++data.job_post_opened,
      }
      this.http.patch(`http://127.0.0.1:8000/JobPost/${id}/`, pacthjob).subscribe( (data) => {
        console.log(data);
      });
    });

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true); 

  }

  ionViewDidEnter() {
    this.results_job = this.get.results_job_post;
    
    this.authService.data.then((value:any) => {
      this.eyee_details = value;
      console.log(value);
      this.http.get(`http://127.0.0.1:8000/EmployeeDetailsFav/?eyee_id=${this.eyee_details.id}&unliked=`).subscribe( (data:any) => {
        this.fav = data;
        for(var i=0; i>=0;i++) {
          if(this.fav[i].job_id) {
            if(this.fav[i].unliked == false) {
              this.selectedIndex.push(this.fav[i].job_id);
            }
            this.k++;
            console.log(this.k);
          }
          else {
            break;
          }
        }
      });
    });
  }
}
