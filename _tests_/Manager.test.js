const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('This should show up', () => {
    const e = new Manager();

    expect(typeof(e)).toBe('object')
});
