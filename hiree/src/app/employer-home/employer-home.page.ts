import { Component, OnInit, Injectable, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { GetService } from '../servvices/get.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../servvices/authentication.service';


@Injectable()
@Component({
  selector: 'app-folder',
  templateUrl: './employer-home.page.html',
  styleUrls: ['./employer-home.page.scss'],
})
export class FolderPage implements OnInit {
  public selectedIndex = [];
  public folder: string;
  job_post_toggle: boolean = false;
  
  k:number =0;
  fav: object = [{ }];
  active_job_post:any;
  active_job_post_name:any =[];
  eyer_details:any;
  results: any;
  test:any;

  constructor(private activatedRoute: ActivatedRoute, 
    public menuCtrl: MenuController,
    public get: GetService,
    private http: HttpClient,
    private authService: AuthenticationService) 
  { 
    
    
  }

  ngOnInit() {
  }

  test1() {
    console.log(this.test);
  }

  state() {
    this.job_post_toggle = !this.job_post_toggle;
  }

  like(f, a) {
    for(var i=0; i<this.k;i++) {
      if(this.fav[i].eyee_id == f) {
        
        var pacthdata = {
          unliked: false,
        }
        this.http.patch(`http://127.0.0.1:8000/EmployerDetailsFav/${this.fav[i].id}/`, pacthdata).subscribe( () => { 
          console.log("success");
        });
        this.selectedIndex.push(f);
        console.log(this.selectedIndex);
        return;
      }
    }
    var postdata = {
      eyer_id: this.eyer_details.id,
      eyer_name: this.eyer_details.eyer_hotel_name,
      eyee_id: f,
      eyee_name: this.results[a].eyee_name,
    }
    this.http.post('http://127.0.0.1:8000/EmployerDetailsFav/', postdata).subscribe( (value:any) => {
      console.log("post ('liking for the 1st time')");
      this.http.get(`http://127.0.0.1:8000/EmployerDetailsFav/?eyer_id=${this.eyer_details.id}`).subscribe( (data:any) => {
        this.fav = data;
        this.selectedIndex.push(value.eyee_id);
        console.log(this.selectedIndex);
      });
      this.k++;
    });
  }

  dislike(f) {
    for(var i=0; i<this.k;i++) {
      if(this.fav[i].eyee_id == f) {
        var pacthdata = {
          unliked: true,
        }
        this.http.patch(`http://127.0.0.1:8000/EmployerDetailsFav/${this.fav[i].id}/`, pacthdata).subscribe( () => { 
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


  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.get.job_post_state.subscribe( (number) => {
      this.authService.data.then((value:any) => {
        this.eyer_details = value;
        this.http.get(`http://127.0.0.1:8000/JobPost/?eyer_id=${value.id}&job_active=true`).subscribe( (value:any) => {
          for(var i=0;i<3;i++) {
            if(value[i]) {
              this.active_job_post_name.push(value[i].job_post) 
            }
            else {
              break;
            }
          }
          this.active_job_post = value[this.get.job_post_state.value];
          console.log(this.active_job_post);
          this.get.get_employee(this.active_job_post.job_post,
            this.active_job_post.job_salary,
            this.active_job_post.job_experience,
            this.active_job_post.job_education,
            this.active_job_post.eyer_location,
            this.active_job_post.job_age,
            this.active_job_post.job_gender).then( (res) => {
            this.results = this.get.results_eyee_details;
            console.log(this.results);
            this.http.get(`http://127.0.0.1:8000/EmployerDetailsFav/?eyer_id=${this.eyer_details.id}`).subscribe( (data:any) => {
              this.fav = data;
              for(var i=0; i>=0;i++) {
                if(this.fav[i]) {
                  if(this.fav[i].unliked == false) {
                    this.selectedIndex.push(this.fav[i].eyee_id);
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
        });
      });
      
    });
  }
}
