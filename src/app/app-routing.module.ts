import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './MainPage/MainPage.component';
import { ECPComponent } from './edit-content/edit-content.components'


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'EditContent', component:ECPComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
