import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { promise } from 'protractor';


@Injectable()
@Component({
  selector: 'app-folder',
  templateUrl: './employer-home.page.html',
  styleUrls: ['./employer-home.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  

  results: object = [{ }];
  loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, 
    public menuCtrl: MenuController,
    private http:HttpClient) 
  { 
    let promise= new Promise((resolve, reject ) =>{
      this.http.get('http://127.0.0.1:8000/EmployeeDetails/').toPromise().then( (data) =>{
      console.log(data);
      this.results = data;
      resolve();
    },
    msg => {
      reject();
    }
    );
    });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
