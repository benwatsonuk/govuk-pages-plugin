"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPagesToStages = exports.getStageById = exports.getStagesWithPages = exports.getStages = exports.defaultStage = void 0;
const validate_1 = require("../../validate");
exports.defaultStage = {
    id: 'unassigned',
    title: 'Unassigned',
    description: 'These pages have not been assigned a stage or sub-stage'
};
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
const getStageById = (stageId, stages) => {
    return stages.find(stage => stage.id === stageId);
};
exports.getStageById = getStageById;
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
            let hasNewPage = false;
            let hasIteration = false;
            pagesForStage.forEach(page => {
                if (page.newPage) {
                    hasNewPage = true;
                }
                if (page.hasIteration) {
                    hasIteration = true;
                }
            });
            return {
                id: stage.id,
                title: stage.title,
                description: stage.description,
                subStages: subStagesWithPages,
                hasNewPage: hasNewPage,
                hasIteration: hasIteration,
                pages: pagesForStage
            };
        }
    }).filter(stage => stage !== undefined);
    // add allPages to a misc category and bolt on to stagesWithPages
    if (allPages.length > 0) {
        stagesWithPages.push({
            id: exports.defaultStage.id,
            title: exports.defaultStage.title,
            description: exports.defaultStage.description,
            pages: allPages
        });
    }
    return stagesWithPages;
};
exports.mapPagesToStages = mapPagesToStages;
