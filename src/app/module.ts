


export class Welcome {
    applicantID:       number;
    fullName:          string;
    applicationStatus: string;
    panCard:           string;
    dateOfBirth:       Date;
    email:             string;
    phone:             string;
    address:           string;
    city:              string;
    state:             string;
    zipCode:           string;
    annualIncome:      number;
    employmentStatus:  string;
    creditScore:       number;
    assets:            string;
    dateApplied:       Date;
    loans:             Loan[];

    constructor() {
        this.applicantID = 0;
        this.fullName = "";
        this.applicationStatus = "new";
        this.panCard = "";
        this.dateOfBirth = new Date();
        this.email = '';
        this.phone = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.zipCode = "";
        this.annualIncome = 0;
        this.employmentStatus = "";
        this.creditScore = 0;
        this.assets = "";
        this.dateApplied = new Date();
        this.loans = [];
    }
}

export class Loan {
    loanID:      number;
    applicantID: number;
    bankName:    string;
    loanAmount:  number;
    emi:         number;

    constructor() {
        this.loanID = 0;
        this.applicantID = 0;
        this.bankName = "";
        this.loanAmount = 0;
        this.emi = 0;
    }
}
export interface ApiRespond{
    
        message: string,
        result: boolean,
        data: null
      
}