import { Routes } from '@angular/router';
import { ApplicationListComponent } from './application-list/application-list.component';
import { LoanApplicationComponent } from './loan-application/LoanApplicationComponent';
export const routes: Routes = [
    {
        path:"",
        redirectTo:"loan",
        pathMatch:'full'
    },
    {
        path:"applist",
        component:ApplicationListComponent
    },
    {
        path:"Loan",
        component:LoanApplicationComponent
    }
];
