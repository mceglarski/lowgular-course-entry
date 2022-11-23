import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import { EmployeesFacesComponent } from './ui/employees-faces/employees-faces.component';

@NgModule({
  declarations: [AppComponent, EmployeesFacesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
