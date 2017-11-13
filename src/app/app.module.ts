import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { MatriculaWizardComponent } from './matricula-wizard/matricula-wizard.component';
import { MainComponent } from './main/main.component';
import { AccountModule } from 'app/account/account.module';
import { SharedModule } from 'app/shared/shared.module';
import { MatriculaService } from 'app/services/matricula.service';
import { MateriaService } from 'app/services/materia.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    MatriculaWizardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ComponentsModule,
    AccountModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [MatriculaService, MateriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
