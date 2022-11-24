import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { PersonModel } from '../../model/person.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  public data$: Observable<PersonModel[]> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {}

  public remove(id: string): void {
    this._employeeService.delete(id).subscribe(
      (response) => alert('User was successfully removed'),
      (error) => alert(error.message)
    );
  }
}
