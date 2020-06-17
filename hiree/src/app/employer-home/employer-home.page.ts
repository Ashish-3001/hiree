import { Component, OnInit, Injectable, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { GetService } from '../servvices/get.service';
import { BehaviorSubject, Observable } from 'rxjs';


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
  favourite_state: boolean = false;
  
  
  results: object = [{ }];
  loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, 
    public menuCtrl: MenuController,
    public get: GetService) 
  { 
    
    
  }

  ngOnInit() {
    this.get.get_employee();
    this.get.job_post_state.subscribe( (number) => {
      console.log(number);
    });
  }

  state() {
    this.job_post_toggle = !this.job_post_toggle;
  }

  favourite(i) {
    if(this.selectedIndex[i] == null) {
      this.selectedIndex[i] = 1;
      console.log(this.selectedIndex);
    }
    else if(this.selectedIndex[i] == 0) {
      this.selectedIndex[i] = 1;
    }
    else if(this.selectedIndex[i] == 1) {
      this.selectedIndex[i] = 0;
    }
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.results = this.get.results_eyee_details;
  }
}
