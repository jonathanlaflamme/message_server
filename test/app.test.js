const expect = require('chai').expect

describe('General', () => {
    describe('App is running', () => {
        it('is expected to run', () => {
            var foo = "bar"
            expect(foo).to.be.a('string')
        })
    })
})
