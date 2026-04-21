"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPage = exports.getPages = void 0;
const validate_1 = require("../../validate");
// export const getPages = (pages: PagesArray) => {
//   const validatedPages = validatePagesArray(pages)
//   return validatedPages
// }
const getPages = (pages, phase, version) => {
    const validatedPages = (0, validate_1.validatePagesArray)(pages);
    validatedPages.map(p => {
        if (p.iterations) {
            if (phase && version) {
                console.log('P:' + phase + ' V:' + version);
                const iteration = p.iterations.find(i => i.phase === phase && i.version === version);
                if (iteration) {
                    p.hasIteration = true;
                }
                else {
                    p.hasIteration = false;
                }
            }
            return p;
        }
    });
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
