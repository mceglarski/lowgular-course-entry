import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateEmployeeModel } from '../../model/create-employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  public employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  constructor(private _employeeService: EmployeeService) {}

  public onFormSubmitted(form: CreateEmployeeModel): void {
    this._employeeService.create(form).subscribe(
      (response) =>
        alert('User was successfully added to the database. Name: ' +
            form.name + ', age: ' + form.age + ', salary: ' + form.salary
        ),
      (error) => alert(error.message)
    );
  }
}
