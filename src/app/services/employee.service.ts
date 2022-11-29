import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import { ApiResponse } from './api.response';
import { EmployeeModel, EmployeeResponse } from '../model/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _client: HttpClient) {}

  public getOne(id: string): Observable<EmployeeModel> {
    return this._client
      .get<ApiResponse<EmployeeResponse>>(
        'https://dummy.restapiexample.com/api/v1/employee/' + id
      )
      .pipe(
        map((response): EmployeeModel => {
          return {
            name: response.data.employee_name,
            id: response.data.id,
            image: response.data.profile_image,
            email:
              response.data.employee_name.replace(/\s/g, '') + '@lowgular.io',
          };
        })
      );
  }

  public getAll(): Observable<PersonModel[]> {
    return this._client
      .get<ApiResponse<EmployeeResponse[]>>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              name: employeeResponse.employee_name,
              personalNumber: employeeResponse.id,
              img: employeeResponse.profile_image,
              mail:
                employeeResponse.employee_name.replace(/\s/g, '') +
                '@lowgular.io',
            };
          });
        })
      );
  }

  public create(employee: CreateEmployeeModel): Observable<any> {
    return this._client.post(
      'https://dummy.restapiexample.com/api/v1/create',
      employee
    );
  }

  public delete(id: string): Observable<any> {
    return this._client.delete(
      'https://dummy.restapiexample.com/api/v1/delete/' + id
    );
  }
}
