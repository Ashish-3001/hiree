import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private platform: Platform,
    private router: Router,)
  {
    this.platform.ready().then(() => {
      this.check();
    });
  } 

  login(type:string) {
    if(type == 'employee'){
      this.router.navigate(['/employee-home']);
    }
    else if(type == 'employer') {
      this.router.navigate(['employer-profile']);
    }
    return this.storage.set(TOKEN_KEY, type ).then(res => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    this.router.navigate(['login']);
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
        this.router.navigate(['employer-profile']);
      }
    });
  }

}
