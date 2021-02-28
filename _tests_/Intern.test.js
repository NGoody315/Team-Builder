const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('This should show up', () => {
    const e = new Intern();

    expect(typeof(e)).toBe('object')
});
