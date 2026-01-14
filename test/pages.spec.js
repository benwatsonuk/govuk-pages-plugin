const expect = require('chai').expect

const pages = require('./data/pages')
const outputs = require('./data/outputs')

describe('Basic getPages functions', () => {
    describe('getPages', () => {
      it('should return a simple array of pages when valid pages JSON is provided', () => {
        const result = pages.getPages(pages)
        const output = outputs.getPagesTest.output
        expect(result).to.not.be.empty
        expect(result).to.eql(output)
      })
    });
});
