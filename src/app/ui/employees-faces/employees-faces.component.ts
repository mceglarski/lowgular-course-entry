import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees-faces',
  templateUrl: './employees-faces.component.html',
  styleUrls: ['./employees-faces.component.scss'],
})
export class EmployeesFacesComponent {
  public data$: Observable<EmployeeModel[]>
    = this._client.get<EmployeeModel[]>('assets/data/employees.json');

  constructor(private _client: HttpClient) {}
}
