"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listStagesWithNewAndUpdatedPagesInFlows = exports.getFlows = void 0;
const getStages_1 = require("../stages/getStages");
const validate_1 = require("../../validate");
const getFlows = (flows, pages, stages) => {
    const validatedPageFlows = (0, validate_1.validatePageFlowArray)(flows);
    const validatedPages = (0, validate_1.validatePagesArray)(pages);
    if (stages) {
        const validatedStages = (0, validate_1.validateStagesArray)(stages);
        return { hasStages: true, flows: mapPagesWithStagesToFlow(validatedPageFlows, validatedPages, validatedStages) };
    }
    return { hasStages: false, flows: mapPagesToFlow(validatedPageFlows, validatedPages) };
};
exports.getFlows = getFlows;
// Get the pages from the flow data for the 'steps' property
const mapPagesToFlow = (flows, pages) => {
    const toReturn = [];
    for (const flow of flows) {
        const mappedFlow = [];
        for (const step of flow.steps) {
            const page = pages.find(p => p.id === step.pageId);
            if (page) {
                mappedFlow.push({ ...page });
            }
        }
        toReturn.push({ ...flow, steps: mappedFlow });
    }
    return toReturn;
};
// Get the pages and stages from the flow data for the 'stepsWithSatges' property
const mapPagesWithStagesToFlow = (flows, pages, stages) => {
    var _a;
    const toReturn = [];
    for (const flow of flows) {
        const mappedFlow = [];
        for (const step of flow.steps) {
            const page = pages.find(p => p.id === step.pageId);
            if (page) {
                mappedFlow.push({ ...page });
            }
        }
        // Group pages by stage
        const stepsWithStages = [];
        let currentStage = null;
        let currentSteps = [];
        for (const step of flow.steps) {
            const page = pages.find(p => p.id === step.pageId);
            if (page) {
                // Check the stage info
                let stage = getStages_1.defaultStage;
                if (page.stage) {
                    const a = (0, getStages_1.getStageById)((_a = page.stage) === null || _a === void 0 ? void 0 : _a.main, stages);
                    stage = a || getStages_1.defaultStage;
                }
                // If the current stage is the same as the previous page's stage, add to the same group
                if (currentStage && currentStage.id === stage.id) {
                    currentSteps.push(page);
                }
                else {
                    // If there was a previous group, push it
                    if (currentStage) {
                        stepsWithStages.push({
                            id: stepsWithStages.length + 1,
                            stage: currentStage,
                            steps: currentSteps
                        });
                    }
                    // Start a new group
                    currentStage = stage;
                    currentSteps = [page];
                }
            }
        }
        // Push the last group
        if (currentStage) {
            stepsWithStages.push({
                id: stepsWithStages.length + 1,
                stage: currentStage,
                steps: currentSteps
            });
        }
        let hasNewPage = false;
        let hasIteration = false;
        mappedFlow.forEach(page => {
            if (page.newPage) {
                hasNewPage = true;
            }
            if (page.hasIteration) {
                hasIteration = true;
            }
        });
        toReturn.push({ ...flow, steps: mappedFlow, stepsWithStages, hasIteration: hasIteration, hasNewPage: hasNewPage });
    }
    return toReturn;
};
const listStagesWithNewAndUpdatedPagesInFlows = (flows) => {
    const toReturn = []; // ids of stage indexes with new or updated pages in the flow
    flows.map((i, index) => {
        i.steps.map((f) => {
            if (f.hasIteration || f.newPage) {
                if (!toReturn.includes(index)) {
                    toReturn.push(index);
                }
            }
        });
    });
    return toReturn;
};
exports.listStagesWithNewAndUpdatedPagesInFlows = listStagesWithNewAndUpdatedPagesInFlows;
