"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
////////////////////////////////////////////////Classes
console.log("---------------------------------------------------- CLASSES INTRO ------------------------------------------");
var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.DPName = name;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.DPName);
    };
    Department.prototype.newEmployee = function (imp) {
        this.employees.push(imp);
    };
    Department.prototype.getEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department("Accounting");
accounting.describe();
console.log(accounting);
accounting.newEmployee("Harry");
accounting.newEmployee("Ron");
accounting.getEmployeeInfo();
////////////////////////////////////////////////SHORT-HAND INITILIZATION
console.log("---------------------------------------------------- SHORT-HAND INITILIZATIONG------------------------------------------");
var ShorthandDepartment = /** @class */ (function () {
    function ShorthandDepartment(
    //this is a short-hand way of initializing properties
    id, name, 
    //private/public/readonly exist specifically in TS only,
    accountBalance, 
    //protected means that it is "private", but still accessible by all "instances" of this class
    employees) {
        this.id = id;
        this.name = name;
        this.accountBalance = accountBalance;
        this.employees = employees;
    }
    ShorthandDepartment.prototype.newEmployee = function (imp) {
        this.employees.push(imp);
    };
    ShorthandDepartment.prototype.getEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return ShorthandDepartment;
}());
var short = new ShorthandDepartment(5543, "Something", 40000, []);
console.log(short);
//////////////////////////////////////////////// INHERITANCE
console.log("---------------------------------------------------- INHERITANCE------------------------------------------");
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    //in the constructor func we need to pass all the same inputs + the new ones we want
    function ITDepartment(id, name, accountBalance, employees, admins) {
        var _this = 
        //in the super func we pass in all the old inputs
        _super.call(this, id, name, accountBalance, employees) || this;
        //new inputs go under super func
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(ShorthandDepartment));
var it = new ITDepartment(44, "Information", 3335, [], ["Harry", "Ron"]);
console.log(it);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, name, accountingBalance, employees, 
    //here we are using the shorthand notation of initialization, so we don't have to specify 'reports' with this.
    //ONLY AVAILABLE ON THIS CLASS
    reports) {
        var _this = _super.call(this, id, name, accountingBalance, employees) || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReports = function (report) {
        this.reports.push(report);
    };
    AccountingDepartment.prototype.getReports = function () {
        console.log(this.reports);
    };
    //OVERRIDING existing METHODS, but ONLY on this INSTANCE
    AccountingDepartment.prototype.newEmployee = function (str) {
        if (str === "Marc")
            return;
        this.employees.push(str);
    };
    return AccountingDepartment;
}(ShorthandDepartment));
var accounting2 = new AccountingDepartment(5544, "Accounting", 5522, [], []);
accounting2.addReports("Very Good");
accounting2.addReports("Bad");
console.log(accounting2);
accounting2.getReports();
accounting2.newEmployee("Marc");
accounting2.newEmployee("Hermione");
accounting2.getEmployeeInfo();
//# sourceMappingURL=classes.js.map