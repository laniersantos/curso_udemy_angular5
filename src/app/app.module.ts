import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppServersComponent } from './app-servers/app-servers.component';
import { AppServerComponent } from './app-server/app-server.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { InputTwoWayDatabindComponent } from './input-two-way-databind/input-two-way-databind.component';


@NgModule({
  declarations: [
    AppComponent,
    AppServerComponent,
    AppServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    InputTwoWayDatabindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
