'use strict';

/**
 * Calculates sum of arguments passed in array
 *
 * @param Array args Arguments
 *
 * @return numeric|null
 */
module.exports = function addMultiple(args) {
    try {
        if (!args.length) {
            throw new Error('not an array');
        }
        var value = 0;
        for (var i in args) {
            if (typeof args[i] === 'number') {
                value = value + args[i];
            } else {
                if (typeof args[i] !== 'function') {
                    throw new Error('not a number - ' + (typeof args[i]) + ' ' + args[i]);
                }
            }
        }
        return value;

    } catch (err) {
        return null;
    }
};

