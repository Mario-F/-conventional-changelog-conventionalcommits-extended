'use strict';
var debug_1 = require("debug");
var d = (0, debug_1.default)('conventional-changelog-conventionalcommits-extended:index');
function presetOpts(config) {
    var result = {
        conventionalChangelog: null,
        parserOpts: null,
        recommendedBumpOpts: null,
        writerOpts: null,
    };
    d(result);
    return result;
}
module.exports = function (parameter) {
    d(parameter);
    if (typeof parameter === 'function') {
        throw new Error('not implemented');
    }
    else {
        var config = parameter || {};
        return presetOpts(config);
    }
};
