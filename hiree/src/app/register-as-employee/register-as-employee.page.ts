import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register-as-employee',
  templateUrl: './register-as-employee.page.html',
  styleUrls: ['./register-as-employee.page.scss'],
})
export class RegisterAsEmployeePage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
