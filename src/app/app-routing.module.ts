import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CActivateGuard } from './cactivate.guard';
import { AdminComponent } from './admin/admin.component';
import { LogintwoComponent } from './logintwo/logintwo.component';
import { HometwoComponent } from './hometwo/hometwo.component';

const routes: Routes = [
  { path: '', component: HometwoComponent },
  { path: 'home', component: HomeComponent, canActivate: [CActivateGuard] },
  { path: 'login', component: LoginComponent },
  //other example
  { path: 'logintwo', component: LogintwoComponent },
  { path: 'hometwo', component: HometwoComponent },
  { path: 'admin', component: AdminComponent, canActivate: [CActivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
