"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.govukPagesPlugin = exports.stageIndex = exports.stageIndexData = exports.pageIndex = exports.pageIndexData = void 0;
const express_1 = require("express");
const getPages_1 = require("./functions/pages/getPages");
const getStages_1 = require("./functions/stages/getStages");
/*--- UTILITIES (used by supplied routes AND made available to plugin users) ---*/
const pageIndexData = (pages) => {
    return (0, getPages_1.getPages)(pages);
};
exports.pageIndexData = pageIndexData;
const pageIndex = (pages, pageType) => {
    pageType = pageType || "page-index";
    return (req, res) => {
        res.render(pageType, { pages: pages });
    };
};
exports.pageIndex = pageIndex;
const stageIndexData = (stages, pages) => {
    return (0, getStages_1.getStagesWithPages)(stages, pages);
};
exports.stageIndexData = stageIndexData;
const stageIndex = (stages, pages, pageType) => {
    pageType = pageType || "stage-index";
    return (req, res) => {
        res.render(pageType, { stages: (0, exports.stageIndexData)(stages, pages) });
    };
};
exports.stageIndex = stageIndex;
// Add user flows, etc here later
/*--- THE MAIN USER ROUTES ---*/
const govukPagesPlugin = (pages, stages, pageType) => {
    pageType = pageType || "page-index"; // Options can be 'all', 'page-index', 'stage-index' - in future could be 'user-flow-index', etc
    const router = (0, express_1.Router)();
    // This is the default offering from the plugin - it is expected that must users will use this. It should be robust
    router.get("/", (0, exports.pageIndex)((0, exports.pageIndexData)(pages), pageType));
    return router;
};
exports.govukPagesPlugin = govukPagesPlugin;
