const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('This should show up', () => {
    const e = new Engineer();

    expect(typeof(e)).toBe('object')
});
