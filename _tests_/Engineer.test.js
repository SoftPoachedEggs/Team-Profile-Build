const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer', () => {
  it('should create a new Engineer object', () => {
    const engineer = new Engineer('John', 123, 'john@test.com', 'johngit');
    expect(engineer instanceof Engineer).toBe(true);
    expect(engineer instanceof Employee).toBe(true);
  });

  it('should return the gitname when getGitName() is called', () => {
    const engineer = new Engineer('John', 123, 'john@test.com', 'johngit');
    expect(engineer.getGitName()).toEqual('johngit');
  });

  it('should return "Engineer" when getRole() is called', () => {
    const engineer = new Engineer('John', 123, 'john@test.com', 'johngit');
    expect(engineer.getRole()).toEqual('Engineer');
  });
});
