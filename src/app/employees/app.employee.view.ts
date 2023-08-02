import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EmployeeInfo } from './employee';
import { EmloyeeService } from './app.employee.service';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.employee.View.html'
})
export class EmployeeViewComponent implements OnInit {
  public employee : any = {};
  public employeeId : number = 0;

  constructor(private _employeeService : EmloyeeService,
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=> this.employeeId = params['id']);
    this.employee = this._employeeService.getEmployee(this.employeeId);
  }
}