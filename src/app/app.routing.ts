import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { MatriculaWizardComponent } from 'app/matricula-wizard/matricula-wizard.component';
import { LoginComponent } from 'app/account/login/login.component';
import { MainComponent } from 'app/main/main.component';
import { ErrorComponent } from 'app/shared/error/error.component';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { PrematriculaGuardService } from 'app/prematricula-guard.service';
import { DashboardGuardService } from 'app/dashboard-guard.service';
import { LoginAdminComponent } from 'app/account/login-admin/login-admin.component';
import { DashboardAdminComponent } from 'app/dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [DashboardGuardService],
    component: MainComponent,
    children: [
      { path: 'index', component: DashboardComponent },
      {
        path: 'wizard/:idEst/:idProg',
        canActivate: [PrematriculaGuardService],
        component: MatriculaWizardComponent
      },
      { path: 'admin', component: DashboardAdminComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'table-list', component: TableListComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'login', component: WelcomeComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'upgrade', component: UpgradeComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin/login', component: LoginAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
