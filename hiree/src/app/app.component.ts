import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './servvices/authentication.service';
import { Router } from '@angular/router';
import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profile',
      url: '/employee-home/Profile',
      icon: 'person'
    },
    {
      title: 'Favorites',
      url: '/employee-home/Favorites',
      icon: 'heart'
    },
    {
      title: 'Application Status',
      url: '/employee-home/Application Status',
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
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  logout() {
    this.authService.logout();
  }

}
