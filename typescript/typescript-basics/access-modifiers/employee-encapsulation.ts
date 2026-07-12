class Employee {
  private salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  // Only getter provided
  public getSalary(): number {
    return this.salary;
  }

  // Only HR can update salary internally
  private updateSalary(newSalary: number) {
    this.salary = newSalary;
  }
}

const emp = new Employee(5000);
console.log(emp.getSalary()); // 5000

// emp.salary = 10000; // Cannot access private property
// emp.updateSalary(10000); // Cannot access private method
