import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servvices/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.page.html',
  styleUrls: ['./application-status.page.scss'],
})

export class ApplicationStatusPage implements OnInit {
  

  constructor() { }

  ngOnInit() {
    
  }

}
