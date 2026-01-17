"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlows = void 0;
const validate_1 = require("../../validate");
const getFlows = (flows, pages, stages) => {
    const validatedPageFlows = (0, validate_1.validatePageFlowArray)(flows);
    const validatedPages = (0, validate_1.validatePagesArray)(pages);
    if (stages) {
        const validatedStages = (0, validate_1.validateStagesArray)(stages);
        return mapPagesToFlow(validatedPageFlows, validatedPages, validatedStages);
    }
    return mapPagesToFlow(validatedPageFlows, validatedPages);
};
exports.getFlows = getFlows;
const mapPagesToFlow = (flows, pages, stages) => {
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
