import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './MainPage/MainPage.component';
import { ECPComponent } from './edit-content/edit-content.components'
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'EditContent', component:ECPComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
