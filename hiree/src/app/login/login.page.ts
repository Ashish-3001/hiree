import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GetService } from '../servvices/get.service';
import { AuthenticationService } from '../servvices/authentication.service';
import { AppComponent } from '../app.component';
import { Storage } from '@ionic/storage';
import { EmployeeHomePage } from '../employee-home/employee-home.page';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  verify = "";
  public login_id = "";
  dat: any;
  

  constructor(public menuCtrl: MenuController, 
     private http: HttpClient, 
     public navCtrl: NavController,
     private login: GetService,
     private storage: Storage,
     private authService: AuthenticationService,
     private menu: AppComponent,
     private eyee: EmployeeHomePage) { 
 
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  LogIn_var(form: NgForm) {
    this.login.login(this.login_id); 
  }

  ionViewWillLeave() {
    this.menu.ngOnInit();
    console.log(this.menu.state);
  }

  ionViewDidLeave() {
    
  }
}

 