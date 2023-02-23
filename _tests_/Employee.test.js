const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('should return the name when getName() is called', () => {
    const employee = new Employee('John', 123, 'john@test.com');
    expect(employee.getName()).toEqual('John');
  });

  it('should return the id when getId() is called', () => {
    const employee = new Employee('John', 123, 'john@test.com');
    expect(employee.getId()).toEqual(123);
  });

  it('should return the email when getEmail() is called', () => {
    const employee = new Employee('John', 123, 'john@test.com');
    expect(employee.getEmail()).toEqual('john@test.com');
  });

  it('should return "Employee" when getRole() is called', () => {
    const employee = new Employee('John', 123, 'john@test.com');
    expect(employee.getRole()).toEqual('Employee');
  });
});