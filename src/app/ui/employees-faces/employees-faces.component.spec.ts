import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFacesComponent } from './employees-faces.component';

describe('EmployeesFacesComponent', () => {
  let component: EmployeesFacesComponent;
  let fixture: ComponentFixture<EmployeesFacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesFacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesFacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
