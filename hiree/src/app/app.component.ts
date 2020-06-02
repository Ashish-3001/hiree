import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './servvices/authentication.service';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public state: any ="";
  public appPagesEyee = [
    {
      title: 'Home',
      url: '/employee-home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/employee-home/menu/profile',
      icon: 'person'
    },
    {
      title: 'Favorites',
      url: '/employee-home/menu/favourites',
      icon: 'heart'
    },
    {
      title: 'Application Status',
      url: '/employee-home/menu/apllication-status',
      icon: 'reader'
    },
    {
      title: 'Feedback',
      url: '/employee-home/Feedback',
      icon: 'pencil'
    },
    {
      title: 'Help',
      url: '/employee-home/Help',
      icon: 'warning'
    }
  ];

  public appPagesEyer = [
    {
      title: 'Home',
      url: '/employee-home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/employee-home/menu/profile',
      icon: 'person'
    },
    {
      title: 'Favorites',
      url: '/employee-home/menu/favourites',
      icon: 'heart'
    },
    {
      title: 'Application Status',
      url: '/employee-home/menu/apllication-status',
      icon: 'reader'
    },
    {
      title: 'Feedback',
      url: '/employee-home/Feedback',
      icon: 'pencil'
    },
    {
      title: 'Help',
      url: '/employee-home/Help',
      icon: 'warning'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router,
  ) {
    this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('employer/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPagesEyee.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.authService.menu().then((value) => {
      this.state = value;
      console.log(this.state);
    });
  }

  logout() {
    this.authService.logout();
    this.state = null;
  }

  menu_check() {
    console.log(this.state);
  }

}
