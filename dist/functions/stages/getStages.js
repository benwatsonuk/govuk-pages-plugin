"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPagesToStages = exports.getStagesWithPages = exports.getStages = void 0;
const validate_1 = require("../../validate");
// Get and validate stages from the provided input
const getStages = (stages) => {
    const validatedStages = (0, validate_1.validateStagesArray)(stages);
    return validatedStages;
};
exports.getStages = getStages;
// Get and validate stages and relevant pages from the provided input. Return an array of Stage objects containing relevant pages.
const getStagesWithPages = (stages, pages) => {
    const validatedStages = (0, validate_1.validateStagesArray)(stages);
    const validatedPages = (0, validate_1.validatePagesArray)(pages);
    return (0, exports.mapPagesToStages)(validatedStages, validatedPages);
};
exports.getStagesWithPages = getStagesWithPages;
// Below this point is just the helper function used internally for the above functions
// This function does the heavy lifting of mapping pages to their relevant stages
const mapPagesToStages = (stages, pages) => {
    let allPages = [...pages]; // Create a copy to avoid mutating the original
    const stagesWithPages = stages.map((stage) => {
        // Filter pages that belong to this stage
        const pagesForStage = pages.filter((page) => page.stage && page.stage.main === stage.id);
        // Only add the stage if it has pages (after all, why return empty stages?)
        if (pagesForStage.length > 0) {
            // Remove the filtered pages from allPages to get unused pages
            allPages = allPages.filter(page => !pagesForStage.some(p => p.id === page.id));
            // Map sub-stages with their relevant pages
            let subStagesWithPages;
            if (stage.subStages) {
                subStagesWithPages = stage.subStages.map((subStage) => {
                    // Filter pages that belong to this sub-stage
                    const pagesForSubStage = pagesForStage.filter((page) => page.stage && page.stage.subStage === subStage.id);
                    if (pagesForSubStage.length > 0) {
                        return {
                            id: subStage.id,
                            title: subStage.title,
                            description: subStage.description,
                            pages: pagesForSubStage
                        };
                    }
                }).filter(subStage => subStage !== undefined);
            }
            return {
                id: stage.id,
                title: stage.title,
                description: stage.description,
                subStages: subStagesWithPages,
                pages: pagesForStage
            };
        }
    }).filter(stage => stage !== undefined);
    // add allPages to a misc category and bolt on to stagesWithPages
    if (allPages.length > 0) {
        stagesWithPages.push({
            id: "unassigned",
            title: "Unassigned",
            description: "Pages not assigned to any stage or sub-stage",
            pages: allPages
        });
    }
    return stagesWithPages;
};
exports.mapPagesToStages = mapPagesToStages;
