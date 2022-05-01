//tests Manager class 
const Manager = require('../lib/Manager');

test('create Manager object', () => {
    const manager = new Manager('mike', 99, 'mike@gmail.com', 4);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get manager's role", () => {
    const manager = new Manager('mike', 99, 'mike@gmail.com', 4);
    expect(manager.getRole()).toEqual('Manager');
});

test("gets manager's office number", () => {
    const manager = new Manager('mike', 99, 'mike@gmail.com', 4);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});