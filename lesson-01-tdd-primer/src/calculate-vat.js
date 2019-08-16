'use strict';

/**
 * Calculates VAT
 *
 * @param numeric net     Net value - base for VAT calculation
 * @param numeric vatRate VAT rate expressed as decimal e.g. 0.15 for 15%
 *
 * @return numeric|false
 */
module.exports = function calculateVat(net, vatRate) {
    if (typeof net === 'number' && typeof vatRate === 'number') {
        return net*vatRate;
    }
    return false;
};

