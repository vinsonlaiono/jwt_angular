import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecretComponent } from './secret/secret.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { SecretGaurdService } from './guards/secret-gaurd.service';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent, children: [
    { path: 'home', component: HomeNavComponent, children : [
      { path : 'profile' , component: SecretComponent },
      { path : 'jobs' , component: JobsComponent },
      { path : 'settings' , component: SettingsComponent }
    ] },
  ]},
  // { path: '', component: LoginComponent, canActivate: [AuthGuardService] , children: [
  //   { path: 'home', component: SecretComponent, canActivate: [SecretGaurdService] },
  // ]},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
