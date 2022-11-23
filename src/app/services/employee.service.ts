import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../model/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _client: HttpClient) {}

  public getAll(): Observable<EmployeeModel[]> {
    return this._client.get<EmployeeModel[]>('/assets/data/employees.json');
  }
}
