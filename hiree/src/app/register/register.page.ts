import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public data:object = [{ }];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://hiree-back-end.herokuapp.com/UserLogin/').subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

}
