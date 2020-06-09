import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'auth-token';
const DATA_KEY = 'n';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private platform: Platform,
    private router: Router,
    private http:HttpClient,)
  {
    this.platform.ready().then(() => {
      this.check();
    });
  } 

  login(type:string) {
    if(type == 'employee'){
      this.router.navigate(['/employee-home']);
      this.http.get('http://127.0.0.1:8000/EmployeeDetails/').subscribe( (data) =>{
        console.log(data);
        this.storage.set(DATA_KEY, data ).then(res => {
          console.log(res);
        });
      });
    }
    else if(type == 'employer') {
      this.router.navigate(['employer-profile']);
      this.http.get('http://127.0.0.1:8000/EmployerDetails/').subscribe( (data) =>{
        console.log(data);
        this.storage.set(DATA_KEY, data ).then(res => {
          console.log(res);
        });
      });
    }
    this.storage.set(TOKEN_KEY, type ).then(res => {
      this.authenticationState.next(true);
    });
    this.menu();
  }

  logout() {
    this.router.navigate(['login']);
    this.storage.remove(DATA_KEY);
    return this.storage.remove(TOKEN_KEY).then(res => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  check() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if(res == 'employee') {
        this.authenticationState.next(true);
        this.router.navigate(['/employee-home']);
      }
      else if (res == 'employer') {
        this.authenticationState.next(true);
        this.router.navigate(['employer-profile/employer-home']);
      }
    });
  }

  menu() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if(res == 'employee') {
        return res;
      }
      else if (res == 'employer') {
        return res;
      }
    });
  }

  get data() {
    return this.storage.get(DATA_KEY).then(res => {
      return res;
    });
  }

}
