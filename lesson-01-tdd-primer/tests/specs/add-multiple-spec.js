require('./../../src/sign-test')(__filename);

var addMultiple = require('./../../src/add-multiple'),
    test = {
        positive_only: {
            value: [100, 345, 901],
            expected: 1346
        },
        mixed: {
            value: [-5, -100, 45, 99],
            expected: 39
        },
        no_number: {
            value: [
                1,
                4,
                6,
                {is: 'object'}
            ],
            expected: false
        }
    };

describe('for numeric values', function () {
    it('For positive values of 100, 345, 901 expected is 1346', function () {
        expect(addMultiple(test.positive_only.value)).toBe(test.positive_only.expected);
    });
    it('For mixed values of -5, -100, 45, 99 is 39', function () {
        expect(addMultiple(test.mixed.value)).toBe(test.mixed.expected);
    });
});

describe('for an object passed in collection', function () {
    it('Value of [false] is returned', function () {
        expect(addMultiple(test.no_number.value)).toBe(test.no_number.expected);
    });
});

