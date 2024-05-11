import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { NewComponent } from './new/new.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'payroll',
    component: PayrollComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },

];
