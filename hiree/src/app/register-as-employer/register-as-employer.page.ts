import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register-as-employer',
  templateUrl: './register-as-employer.page.html',
  styleUrls: ['./register-as-employer.page.scss'],
})
export class RegisterAsEmployerPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  
}
