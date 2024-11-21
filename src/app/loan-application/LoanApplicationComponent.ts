import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Welcome, Loan } from '../module';
import { ReportService } from "../report.service";
import { response } from "express";
import { error } from "node:console";

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {
  application: Welcome = new Welcome();
  loan: Loan = new Loan();

  ReportServices = inject(ReportService);

  addLoan(){
    const strobj=JSON.stringify(this.loan);
    const newobj =JSON.parse(strobj);
    this.application.loans.unshift(newobj);
    this.loan = new Loan();
  }
  onsubmit(){
    debugger;
    this.ReportServices.AddNewApplication(this.application).subscribe(res =>{
      console.log("Loan Data",res)
      if(res.result){
        alert("loan Application Success")
      }
      else{
        alert(res)
      }
    }
  )}




}
