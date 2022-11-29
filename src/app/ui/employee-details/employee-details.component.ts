import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent {
  public details$: Observable<EmployeeModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._employeeService.getOne(data['id']))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService
  ) {}
}
