
var color = require('bash-color');


/**
 * Calculates VAT
 *
 * @param numeric net     Net value - base for VAT calculation
 * @param numeric vatRate VAT rate expressed as decimal e.g. 0.15 for 15%
 *
 * @return numeric|false
 */
function calculateVat(net, vatRate) {
    if (typeof net === 'number' && typeof vatRate === 'number') {
        return net*vatRate;
    }
    return false;
}


/**
 * Assertion
 *
 * @param bool expression Assertion to be evaluated to true|false
 * @param string comment Test to be displayed
 */
function runTest(expression, comment) {

    if (expression === true) {
        console.log(
            color.green('PASS: ', true) + color.white(comment, true)
        );
    } else {
        console.log(
            color.red('FAIL: ', true) + color.white(comment, true)
        );
    }
    return;
}


var test = {
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


console.log('');
console.log('');

runTest(
    (calculateVat(test.positive.value, test.positive.rate) === test.positive.expected),  // espression
        "For positive value of 15 and rate 15% the VAT is 4.50"                          // message
);

runTest(
    (calculateVat(test.negative.value, test.negative.rate) === test.negative.expected),  // espression
        "For positive value of -100 and rate 22% the VAT is -22"                         // message
);

runTest(
    (calculateVat(test.no_number.value, test.no_number.rate) === test.no_number.expected),  // espression
        "For positive value of 'Array' (non-number) and rate 22% the VAT is not calculated [false] returned"                         // message
);


console.log('');

