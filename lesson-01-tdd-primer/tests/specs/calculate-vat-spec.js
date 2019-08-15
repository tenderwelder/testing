require('./../../src/sign-test')(__filename);

var calculateVat = require('./../../src/calculate-vat'),
    test = {
        positive: {
            value: 15,
            rate: 0.3,
            expected: 4.5
        },
        negative: {
            value: -100,
            rate: 0.22,
            expected: -22
        },
        no_number: {
            value: new Array(1, 2, 3, 4),
            rate: 0.22,
            expected: false
        }
    };

describe('for numeric values', function () {
    it('For positive value of 15 and rate 15% the VAT is 4.50', function () {
        expect(calculateVat(test.positive.value, test.positive.rate)).toBe(test.positive.expected);
    });
    it('For positive value of -100 and rate 22% the VAT is -22', function () {
        expect(calculateVat(test.negative.value, test.negative.rate)).toBe(test.negative.expected);
    });
});

describe('for an object passed', function () {
    it('For positive value of \'Array\' (non-number) and rate 22% the VAT is not calculated [false] returned', function () {
        expect(calculateVat(test.no_number.value, test.no_number.rate)).toBe(test.no_number.expected);
    });
});

