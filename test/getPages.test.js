const expect = require('chai').expect

const getPages = require('../src/functions/pages/getPages.ts')
const {validPages, invalidPages} = require('./data/pages.ts')
const outputs = require('./data/outputs.ts')

describe('Basic getPages functions', () => {
    describe('getPages', () => {
      it('should return a simple array of pages when VALID pages JSON is provided', () => {
        const result = getPages.getPages(validPages)
        const output = outputs.getPagesTest.output
        expect(result).to.not.be.empty
        expect(result).to.eql(output)
      })
      
      it('should return a useful error when INVALID pages JSON is provided', () => {
        expect(() => getPages.getPages(invalidPages)).to.throw("Invalid array of PAGES passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected")
      })
    });
});
