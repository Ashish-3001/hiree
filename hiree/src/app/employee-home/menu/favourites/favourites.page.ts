import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servvices/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  public selectedIndex = [];

  k:number =0;
  fav: object = [{ }];
  eyee_details:any;
  results_job: any = [{  }];

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService) 
  { 
    
  }

  ngOnInit() {

    this.authService.data.then((value:any) => {
      this.eyee_details = value;
      this.http.get(`http://127.0.0.1:8000/EmployeeDetailsFav/?eyee_id=${this.eyee_details.id}&unliked=false`).subscribe( (data:any) => {
        this.fav = data;
        var b:number =0;
        for(var i=0; i>=0;i++) {
          if(this.fav[i].job_id) {
            if(this.fav[i].unliked == false) {
              this.selectedIndex.push(this.fav[i].job_id);
              this.http.get(`http://127.0.0.1:8000/JobPost/${this.fav[i].job_id}/`).subscribe( (data) => {
                this.results_job[b++] = data;
                console.log(this.results_job);
              });
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

  
  dislike(f, a) {
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
        const index2 = this.results_job.indexOf(this.results_job[a]);
        if (index2 > -1) {
          console.log(index2);
          this.results_job.splice(index2, 1);
          console.log(this.results_job);
        }
      }
    }
  }



}
