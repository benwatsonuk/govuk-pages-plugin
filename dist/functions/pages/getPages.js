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
    const page = validatedPages.find(p => p.id === pageId);
    if (page) {
        return page;
    }
    throw new Error(`Page ID ${pageId} does not exist`);
};
exports.getPage = getPage;
