import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _client: HttpClient) {  }

  public data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>('/assets/data/employees.json');
}
