"use strict";
const express_1 = require("express");
const getPages_1 = require("./functions/pages/getPages");
function pageIndex(pages, view) {
    return (req, res) => {
        res.render(view, { pages: pages });
    };
}
module.exports = function govukPagesPlugin(pages, stages) {
    const router = (0, express_1.Router)();
    router.get("/", pageIndex((0, getPages_1.getPages)(pages), "page-index"));
    return router;
};
