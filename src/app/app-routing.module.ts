import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TranslatorFormComponent } from './translator-form/translator-form.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { TranslatorProfileUpdateComponent } from './tarnslator-profile-update/tarnslator-profile-update.component';
// import { VideoComponent } from './video-compnent/video-compnent.component';
// import {  VideoListComponent } from './video-list/video-list.component';



const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'createTranslator',
    component: TranslatorFormComponent,
    canActivate: [AuthGuard], // Apply the guard to this route
  }, 
  {
    path: 'translators/edit/:id',
    component: TranslatorProfileUpdateComponent,
    
  },
   { path: 'home' , component : HomeComponent},
  { path: 'nav' , component : NavbarComponent},
  // { path: 'video' , component : VideoComponent},
  // { path: 'videoList' , component : VideoListComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
