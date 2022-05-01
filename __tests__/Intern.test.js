//tests the Intern class.
const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Nick', 848, 'nick@gmail.com', 'University of Toronto');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets Intern's university", () => {
    const intern = new Intern('Nick', 848, 'nick@gmail.com', 'University of Toronto');
    expect(intern.getSchool()).toEqual(intern.school);
});

test("gets Intern's role", () => {
    const intern = new Intern('Nick', 848, 'nick@gmail.com', 'University of Toronto');
    expect(intern.getRole()).toEqual('Intern');
});