import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { SigninComponent } from './modules/signin/signin.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
