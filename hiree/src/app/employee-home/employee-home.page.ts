import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetService } from '../servvices/get.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.page.html',
  styleUrls: ['./employee-home.page.scss'],
})
export class EmployeeHomePage implements OnInit {

  results_eyer: object = [{ }];
  results_job: object = [{  }];
  loading: boolean = false;

  constructor(
    public menuCtrl: MenuController,
    private get: GetService,
  ) { 


  }

  ngOnInit() {
    this.get.get_employee();
    this.get.get_job_post();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.results_eyer = this.get.results_eyer_details;
    this.results_job = this.get.results_job_post;
  }
}
