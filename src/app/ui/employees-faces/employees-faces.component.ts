import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  styleUrls: ['./employees-faces.component.scss'],
})
export class EmployeesFacesComponent {
  public data$: Observable<EmployeeModel[]> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {}
}
