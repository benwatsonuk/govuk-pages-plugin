"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPage = exports.getPages = void 0;
const validate_1 = require("../../validate");
const getPages = (pages) => {
    const validatedPages = (0, validate_1.validatePagesArray)(pages);
    return validatedPages;
};
exports.getPages = getPages;
const getPage = (pageId, pages) => {
    const validatedPages = (0, validate_1.validatePagesArray)(pages);
    return validatedPages;
};
exports.getPage = getPage;
