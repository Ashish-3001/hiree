import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../servvices/authentication.service';


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
  i:number = 0;

  constructor(public menuCtrl: MenuController, 
     private http: HttpClient, 
     public navCtrl: NavController,
     private authService: AuthenticationService,
     ) { 
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  LogIn_var() {
    console.log(this.login_id , this.login_pas);

    this.http.get('http://127.0.0.1:8000/UserLogin/').subscribe( (data) =>{
      
      this.dat = data;
      for(this.i; this.i >= 0; this.i++){
        if(this.login_id == this.dat[this.i].user_phone_no || this.login_id == this.dat[this.i].user_email){
          if(this.login_pas == this.dat[this.i].user_password) {
            this.authService.login(this.dat[this.i].user_type);
            break;
          }
          break;
        }
      }
    });
  }
}
