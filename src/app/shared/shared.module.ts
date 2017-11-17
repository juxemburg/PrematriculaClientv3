import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';
import { HttpService } from 'app/shared/services/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorComponent } from './error/error.component';
import { NotificationService } from 'app/shared/services/notification.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingComponent, FooterComponent, ErrorComponent],
  providers: [HttpService, NotificationService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    BrowserAnimationsModule,
    LoadingComponent,
    BrowserModule,
    LoadingComponent,
  ],
})
export class SharedModule { }
