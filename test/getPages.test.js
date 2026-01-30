const expect = require('chai').expect

const getPages = require('../src/functions/pages/getPages.ts')
const {validPages, invalidPages} = require('./data/pages.ts')
const outputs = require('./data/outputs.ts')

describe('Basic getPages functions', () => {
    describe('getPages', () => {
      it('should return a simple array of pages when VALID pages JSON is provided', () => {
        const result = getPages.getPages(validPages)
        const output = outputs.getPagesTest.output
        expect(result).to.eql(output)
      })
      
      it('should return a useful error when INVALID pages JSON is provided', () => {
        expect(() => getPages.getPages(invalidPages)).to.throw("Invalid array of PAGES passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected")
      })
    });
});

describe('Basic getPage functions', () => {
    describe('getPage', () => {
      it('should return an object with information about the given page', () => {
        const result = getPages.getPage(1, validPages)
        const output = outputs.getPageTestA
        expect(result).to.eql(output)
      })
      
      it('should return a useful error if an INVALID page ID is provided', () => {
        expect(() => getPages.getPage(100, validPages)).to.throw("Page ID does not exist")
      })

      it('should return a useful error when INVALID pages JSON is provided', () => {
        expect(() => getPages.getPage(1, invalidPages)).to.throw("Invalid array of PAGES passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected")
      })
    });
});
