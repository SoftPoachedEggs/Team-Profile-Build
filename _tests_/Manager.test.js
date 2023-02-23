const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe('Manager', () => {
  it('should create a new Manager object', () => {
    const manager = new Manager('John', 123, 'john@test.com', 101);
    expect(manager instanceof Manager).toBe(true);
    expect(manager instanceof Employee).toBe(true);
  });

  it('should return the office number when getOfficeNumber() is called', () => {
    const manager = new Manager('John', 123, 'john@test.com', 101);
    expect(manager.getOfficeNumber()).toEqual(101);
  });

  it('should return "Manager" when getRole() is called', () => {
    const manager = new Manager('John', 123, 'john@test.com', 101);
    expect(manager.getRole()).toEqual('Manager');
  });
});