const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

describe('Intern', () => {
  it('should create a new Intern object', () => {
    const intern = new Intern('John', 123, 'john@test.com', 'Harvard');
    expect(intern instanceof Intern).toBe(true);
    expect(intern instanceof Employee).toBe(true);
  });

  it('should return the school when getSchool() is called', () => {
    const intern = new Intern('John', 123, 'john@test.com', 'Harvard');
    expect(intern.getSchool()).toEqual('Harvard');
  });

  it('should return "Intern" when getRole() is called', () => {
    const intern = new Intern('John', 123, 'john@test.com', 'Harvard');
    expect(intern.getRole()).toEqual('Intern');
  });
});




