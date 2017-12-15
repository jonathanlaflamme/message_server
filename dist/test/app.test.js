'use strict';

var expect = require('chai').expect;

describe('General', function () {
    describe('App is running', function () {
        it('is expected to run', function () {
            var foo = "bar";
            expect(foo).to.be.a('string');
        });
    });
});