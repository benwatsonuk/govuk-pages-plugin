"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePagesArray = validatePagesArray;
exports.validateStagesArray = validateStagesArray;
exports.validatePageFlowArray = validatePageFlowArray;
const ajv_1 = __importDefault(require("ajv"));
const schema_json_1 = __importDefault(require("./schema.json"));
const ajv = new ajv_1.default({ allErrors: true, strict: false });
const validate = ajv.compile(schema_json_1.default);
function validatePagesArray(pages) {
    var _a;
    if (!validate({ mode: "pages", pages: pages })) {
        const message = (_a = validate.errors) === null || _a === void 0 ? void 0 : _a.map(err => `${err.instancePath || "Pages"} ${err.message}`).join("\n");
        throw new Error(`Invalid array of PAGES passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`);
    }
    return pages;
}
function validateStagesArray(stages) {
    var _a;
    if (!validate({ mode: "stages", stages: stages })) {
        const message = (_a = validate.errors) === null || _a === void 0 ? void 0 : _a.map(err => `${err.instancePath || "Stages"} ${err.message}`).join("\n");
        throw new Error(`Invalid array of STAGES passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`);
    }
    return stages;
}
function validatePageFlowArray(flows) {
    var _a;
    if (!validate({ mode: "flows", flows: flows })) {
        const message = (_a = validate.errors) === null || _a === void 0 ? void 0 : _a.map(err => `${err.instancePath || "Flows"} ${err.message}`).join("\n");
        throw new Error(`Invalid array of FLOWS passed to govuk-pages-plugin - please check the documentation to ensure the JSON schema you are passing matches what is expected:\n${message}`);
    }
    return flows;
}
