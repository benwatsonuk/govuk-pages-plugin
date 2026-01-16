const expect = require('chai').expect

const getFlows = require('../src/functions/flows/getFlows.ts')
const {validFlow, invalidFlow} = require('./data/flows.ts')
const {validPages, invalidPages} = require('./data/pages.ts')
const {validStages, invalidStages} = require('./data/stages.ts')
const outputs = require('./data/outputs.ts')

describe('Basic getFlows functions', () => {
    describe('getFlows', () => {
      it('should return an array of flows when VALID flows and pages JSON is provided - no stages object is provided, this is optional so should pass', () => {
        const result = getFlows.getFlows(validFlow, validPages)
        const output = outputs.getPageFlowTestA.output
        expect(result).to.eql(output)
      })

      it('should return an array of flows when VALID flows, pages and stages JSON is provided', () => {
        const result = getFlows.getFlows(validFlow, validPages, validStages)
        const output = outputs.getPageFlowTestB.output
        expect(result).to.eql(output)
      })

      it('should return a useful error when INVALID flows and VALID pages JSON is provided', () => {
        expect(() => getFlows.getFlows(invalidFlow, validPages)).to.throw("Invalid array of FLOWS passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected")
      })

      it('should return a useful error when VALID flows and INVALID pages JSON is provided', () => {
        expect(() => getFlows.getFlows(validFlow, invalidPages)).to.throw("Invalid array of PAGES passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected")
      })

      it('should return a useful error when VALID flows and pages and INVALID stages JSON is provided', () => {
        expect(() => getFlows.getFlows(validFlow, validPages, invalidStages)).to.throw("Invalid array of STAGES passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected")
      })

      it('should return a useful error when VALID flows and stages and INVALID pages JSON is provided', () => {
        expect(() => getFlows.getFlows(validFlow, invalidPages, validStages)).to.throw("Invalid array of PAGES passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected")
      })

      it('should return a useful error when VALID pages and stages and INVALID flows JSON is provided', () => {
        expect(() => getFlows.getFlows(invalidFlow, validPages, validStages)).to.throw("Invalid array of FLOWS passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected")
      })
    })
  })