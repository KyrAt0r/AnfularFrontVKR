import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../new-service.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  LogIn(){
    this.http.post('http://saber011-001-site1.htempurl.com/token?username='+ this.username + 'password=' + this.password,'')
    .subscribe((Response)=> {
  
    })
  }


}
