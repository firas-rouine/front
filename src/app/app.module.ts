import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatorFormComponent } from './translator-form/translator-form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslatorProfileUpdateComponent } from './tarnslator-profile-update/tarnslator-profile-update.component';


// import { VideoListComponent } from './video-list/video-list.component';
// import { VideoComponent } from './video-compnent/video-compnent.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    TranslatorFormComponent,
    HomeComponent,
    NavbarComponent,
    TranslatorProfileUpdateComponent,
    //  VideoListComponent,
    //  VideoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
