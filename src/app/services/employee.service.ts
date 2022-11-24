import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PersonModel} from "../model/person.model";
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _client: HttpClient) {}

  public getAll(): Observable<PersonModel[]> {
    return this._client.get<PersonModel[]>('/assets/data/people.json');
  }

  public create(employee: CreateEmployeeModel): Observable<any> {
    return this._client.post('https://dummy.restapiexample.com/api/v1/create', employee);
  }

  public delete(id: string): Observable<any> {
    return this._client.delete('https://dummy.restapiexample.com/api/v1/delete/' + id);
  }
}
