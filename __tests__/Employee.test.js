//testin for Employee class.
const Employee = require('../lib/Employee');

test('create Employee object', () => {
    const employee = new Employee('Lucas', 10, 'lucaspittam@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("get Employee name", () => {
    const employee = new Employee('Lucas', 1059, 'lucaspittam@gmail.com');

    expect(employee.getName()).toEqual(employee.name);
});

test("get Employee role", () => {
    const employee = new Employee('Lucas', 1059, 'lucaspittam@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});

test("get Employee id", () => {
    const employee = new Employee('Lucas', 1059, 'lucaspittam@gmail.com');

    expect(employee.getId()).toEqual(employee.id);
});

test("get employee email", () => {
    const employee = new Employee('Lucas', 1059, 'lucaspittam@gmail.com');

    expect(employee.getEmail()).toEqual(employee.email);
});
