import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  styleUrls: ['./employees-faces.component.scss'],
})
export class EmployeesFacesComponent {
  public data$: Observable<PersonModel[]> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {}
}
