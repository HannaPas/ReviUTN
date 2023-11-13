import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './plantillas/ratingGeneral/rating.component';
import { ToggleComponent } from './plantillas/toggle/toggle.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    RatingComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  exports:[
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
