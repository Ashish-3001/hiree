import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { GetService } from '../servvices/get.service';


@Injectable()
@Component({
  selector: 'app-folder',
  templateUrl: './employer-home.page.html',
  styleUrls: ['./employer-home.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  

  results: object = [{ }];
  loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, 
    public menuCtrl: MenuController,
    private get: GetService) 
  { 
    
    
  }

  ngOnInit() {
    this.get.get_employee();
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.results = this.get.results_eyee_details;
  }
}
