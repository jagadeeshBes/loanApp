import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoanApplicationComponent } from './loan-application/LoanApplicationComponent';
import { ApplicationListComponent } from './application-list/application-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoanApplicationComponent,ApplicationListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BankLoanApp';
}
