import { EmployeeService } from 'src/app/employee.service';
import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees=[];
  constructor(private employee:EmployeeService) { }

  ngOnInit(): void {
 this.employee.getEmployee().
 subscribe(data=>this.employees=data);
  }
likeMe(i){
if(this.employees[i].liked==0){
this.employees[i].liked=1;
}
else{
this.employees[i].liked=0;
}
}

deleteMe(i){
this.employees.splice(i,1);
console.log(i);
}
}
