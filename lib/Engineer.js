//tests for Engineer class
const Engineer = require('../lib/Engineer');

test('create Engineer object', () => {
    const engineer = new Engineer('matt', 1243, 'matt@gmail.com', 'mattsthoughts');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer's github", () => {
    const engineer = new Engineer('matt', 1243, 'matt@gmail.com', 'mattsthoughts');

    expect(engineer.getGithub()).toEqual(engineer.github);
});

test("get engineer's role", () => {
    const engineer = new Engineer('matt', 1243, 'matt@gmail.com', 'mattsthoughts');

    expect(engineer.getRole()).toEqual('Engineer');
});