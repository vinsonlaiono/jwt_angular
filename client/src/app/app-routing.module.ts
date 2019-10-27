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
import { StatsComponent } from './components/stats/stats.component';
import { LandingComponent } from './components/landing/landing.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/myapps' },
  { path: '', component: LandingComponent, children: [
    { path: 'myapps', component : LandingPageComponent },
    { path: 'home', component: HomeNavComponent, children : [
      { path : 'profile' , component: SecretComponent },
      { path : 'jobs' , component: JobsComponent },
      { path : 'settings' , component: SettingsComponent },
      { path : 'stats' , component: StatsComponent }
    ] },
  ]},
  { path: 'home', pathMatch: 'full', redirectTo: '/home/profile' },
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
