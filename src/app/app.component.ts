import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialsModule } from './materials.module';
import { SharedModule } from './shared.module';
import { EmployeeService } from './services/employee.service';
import { CoreService } from './core/core.service';
import { PayrollComponent } from './payroll/payroll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, MaterialsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private router: Router,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    
  }
  // openPayrollForm() {
  //   const dialogRef = this._dialog.open(PayrollComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         // this.getEmployeeList();
  //       }
  //     },
  //   });
  // }

  goToDashboard() {
    this.router.navigate(['/']);
  }
  

  goToEmployee() {
    this.router.navigate(['/employee']);
  }

  goToPayroll() {
    this.router.navigate(['/payroll']);
  }
    


}
