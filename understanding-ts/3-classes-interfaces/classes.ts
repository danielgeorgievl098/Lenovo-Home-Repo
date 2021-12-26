////////////////////////////////////////////////Classes
console.log(
  `---------------------------------------------------- CLASSES INTRO ------------------------------------------`
);

class Department {
  DPName: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.DPName = name;
  }

  describe() {
    console.log(`Department: ${this.DPName}`);
  }

  newEmployee(imp: string) {
    this.employees.push(imp);
  }

  getEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");
accounting.describe();
console.log(accounting);

accounting.newEmployee("Harry");
accounting.newEmployee("Ron");
accounting.getEmployeeInfo();

////////////////////////////////////////////////SHORT-HAND INITILIZATION

console.log(
  `---------------------------------------------------- SHORT-HAND INITILIZATIONG------------------------------------------`
);

class ShorthandDepartment {
  constructor(
    //this is a short-hand way of initializing properties
    private id: number,
    public name: string,
    //private/public/readonly exist specifically in TS only,
    private readonly accountBalance: number,
    //protected means that it is "private", but still accessible by all "instances" of this class
    protected employees: string[]
  ) {}

  newEmployee(imp: string) {
    this.employees.push(imp);
  }

  getEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const short = new ShorthandDepartment(5543, "Something", 40000, []);
console.log(short);

//////////////////////////////////////////////// INHERITANCE
console.log(
  `---------------------------------------------------- INHERITANCE------------------------------------------`
);

class ITDepartment extends ShorthandDepartment {
  //this is a value available ONLY on THIS CLASS
  admins: string[];

  //in the constructor func we need to pass all the same inputs + the new ones we want
  constructor(
    id: number,
    name: string,
    accountBalance: number,
    employees: string[],
    admins: string[]
  ) {
    //in the super func we pass in all the old inputs
    super(id, name, accountBalance, employees);

    //new inputs go under super func
    this.admins = admins;
  }
}

const it = new ITDepartment(44, "Information", 3335, [], ["Harry", "Ron"]);
console.log(it);

class AccountingDepartment extends ShorthandDepartment {
  constructor(
    id: number,
    name: string,
    accountingBalance: number,
    employees: string[],
    //here we are using the shorthand notation of initialization, so we don't have to specify 'reports' with this.
    //ONLY AVAILABLE ON THIS CLASS
    private reports: string[]
  ) {
    super(id, name, accountingBalance, employees);
  }

  addReports(report: string) {
    this.reports.push(report);
  }

  getReports() {
    console.log(this.reports);
  }

  //OVERRIDING existing METHODS, but ONLY on this INSTANCE
  newEmployee(str: string) {
    if (str === "Marc") return;
    this.employees.push(str);
  }
}

const accounting2 = new AccountingDepartment(5544, "Accounting", 5522, [], []);
accounting2.addReports("Very Good");
accounting2.addReports("Bad");

console.log(accounting2);

accounting2.getReports();

accounting2.newEmployee("Marc");
accounting2.newEmployee("Hermione");
accounting2.getEmployeeInfo();
