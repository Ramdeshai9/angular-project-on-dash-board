import { Component, OnInit } from '@angular/core';
//import { UserService } from '../user.service';
import { Employees } from '../employe';
import { employeService } from '../employe.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  
{
  employees: Employees[]=[]

  constructor(private _employeeService:employeService) { 
this.employees=this._employeeService.getEmployees();
  }

  
 
}
