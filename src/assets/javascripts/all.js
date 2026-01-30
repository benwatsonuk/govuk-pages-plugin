import { defineCustomElements } from "./vendors/ukic/loader.js";
import { InitIcSwitches } from "./modules/pageOptions.js"

document.addEventListener("DOMContentLoaded", () => {
    defineCustomElements();
    InitIcSwitches();
});

