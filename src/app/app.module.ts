import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStoryComponent } from './story/add-story/add-story.component';
import {HttpRequestInterceptor} from './helpers/httprequest.interceptor';
import {CookieService} from 'ngx-cookie-service';
import { AccessDeniedComponent } from './access denied/access-denied/access-denied.component';
@NgModule({
  declarations: [
    AppComponent,
    AddStoryComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
