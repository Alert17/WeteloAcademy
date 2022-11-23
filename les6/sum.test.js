const sum = require('./sum');

test('test with integer', () => {
    expect(sum(5, 6)).toBe(11);
});

test('test with negative numbers', () => {
    expect(sum(3, -4)).toBeLessThan(0)
})

test('test with float', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
})

test('test with string', () => {
    expect(sum('a', 'b')).toBe('ab')
})

test('dynamic typing test', () => {
    expect(sum(true, 2)).toBe(3)
    expect(sum(null, 4)).toBe(4)
    expect(sum('string', 10)).toMatch(/10/)
    expect(sum(undefined, 11)).toEqual(NaN)
})