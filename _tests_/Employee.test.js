const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('This should show up', () => {
    const e = new Employee();

    expect(typeof(e)).toBe('object')
});
