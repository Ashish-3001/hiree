import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GetService } from '../servvices/get.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  verify = "";
  public login_id = "";
  public login_pas = "";
  dat: any;
  

  constructor(public menuCtrl: MenuController, 
     private http: HttpClient, 
     public navCtrl: NavController,
     private login: GetService,
     ) { 
 
  }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  LogIn_var() {
    this.login.login(this.login_id,this.login_pas);
  }
}
