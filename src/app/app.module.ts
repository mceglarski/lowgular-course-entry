import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesFacesComponent } from './ui/employees-faces/employees-faces.component';
import { EmployeeService } from './services/employee.service';
import { ProjectService } from './services/project.service';
import { ProjectListComponent } from './ui/project-list/project-list.component';

@NgModule({
  declarations: [AppComponent, EmployeesFacesComponent, ProjectListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
  ],
  providers: [EmployeeService, ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
