import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AddCardComponent } from './add-card/add-card.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    /*{path: 'details/:city', component: DetailsComponent},
    {path: 'add', component: AddComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},*/
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, WeatherCardComponent, AddCardComponent ],
  bootstrap:    [ AppComponent ]
})



export class AppModule { }
