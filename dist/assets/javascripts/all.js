import { defineCustomElements } from "./vendors/ukic/loader.js";
import { InitPageFlowTypeToggles } from "./modules/pageFlowTypeToggle.js"

document.addEventListener("DOMContentLoaded", () => {
    defineCustomElements();
    InitPageFlowTypeToggles();
});

