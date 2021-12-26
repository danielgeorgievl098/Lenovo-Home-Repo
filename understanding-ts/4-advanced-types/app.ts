////////////////////INTERSECTION TYPES
console.log(
  `-------------------------- INTERSECTION TYPES ---------------------------`
);

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  experience: number;
};

//it must satisfy all conditions of the combined ones
type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
  name: "Harry",
  privileges: ["save-world"],
  experience: 35,
};
