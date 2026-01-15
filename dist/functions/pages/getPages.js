"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPages = void 0;
const validate_1 = require("../../validate");
const getPages = (pages) => {
    const validatedPages = (0, validate_1.validatePagesArray)(pages);
    return validatedPages;
};
exports.getPages = getPages;
