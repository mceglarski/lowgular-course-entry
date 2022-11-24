export interface EmployeeModel {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface EmployeeResponse {
  status: string;
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}
