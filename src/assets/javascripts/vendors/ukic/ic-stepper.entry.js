import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { p as pxToRem, h as checkResizeObserver } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icStepperCss = ":host{display:flex;width:100%}.step-item-list{display:flex;margin:0;padding:0}:host(.ic-stepper-default:not(.ic-stepper-aligned-left)) .step-item-list{flex:auto}:host(.ic-stepper-compact) ul ::slotted(ic-step){display:none}:host(.ic-stepper-compact) ul ::slotted(ic-step.show){display:flex}:host(.ic-stepper-compact) ul ::slotted(ic-step.hide){display:none;opacity:0;visibility:hidden}";
const IcStepperStyle0 = icStepperCss;

const Stepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        var _a;
        this.resizeObserver = null;
        this.visuallyHidden = "visually-hidden";
        this.alignedFullWidth = true;
        this.autoSetStepTitles = true;
        this.lastStepWidth = 0;
        this.noOfResizes = 0;
        this.stepperWidth = (_a = document
            .querySelector("ic-stepper")) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width;
        this.stepTypes = [];
        this.variantOverride = this.variant !== "compact";
        /**
         * The alignment of the default stepper within its container.
         */
        this.aligned = "full-width";
        /**
         * The length of the connector between each step in pixels. Minimum length is 100px.
         */
        this.connectorWidth = 100;
        /**
         * If `true`, the information about each step, i.e. step title, step subtitle and step status, will be hidden on all default steps. The information about each step will still be visible in the compact variant of the stepper.
         */
        this.hideStepInfo = false;
        /**
         * Provide alternative values for text in all child steps. For the purpose of translating the application into other languages.
         */
        this.icI18n = {
            next: "Next",
            step: "Step",
            steps: "Steps",
            of: "of",
            lastStep: "Last step",
            completed: "Completed",
            notRequired: "Not required",
            required: "Required",
            optional: "Optional",
        };
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The variant of the stepper.
         */
        this.variant = "default";
        // Get all steps currently within this stepper
        this.getChildren = () => {
            this.steps = Array.from(this.el.querySelectorAll("ic-step"));
            this.stepsWithStepTitles = Array.from(this.el.querySelectorAll("ic-step[heading]"));
        };
        // Inform the user that stepTitles are required on all steps in a compact stepper
        this.checkStepTitles = () => {
            if (this.stepsWithStepTitles.length < this.steps.length &&
                this.variantOverride &&
                this.variant === "compact") {
                this.noOfResizes = this.noOfResizes + 1;
                if (this.noOfResizes === 1) {
                    console.error(`The prop 'heading' is required for all steps of the Stepper component (compact variant)`);
                }
            }
        };
        this.setStepTypes = () => {
            this.getChildren();
            this.stepTypes = [];
            for (let i = 0; i < this.steps.length; i++) {
                this.stepTypes.push("active");
            }
        };
        this.setStepperWidth = () => {
            this.alignedFullWidth =
                this.variant === "default" && this.aligned === "full-width";
            const lastStep = this.steps[this.steps.length - 1];
            lastStep.style.maxWidth = "none";
            if (this.alignedFullWidth) {
                this.stepperWidth = this.el.offsetWidth;
                lastStep.style.maxWidth = pxToRem(`${this.stepperWidth / this.steps.length}px`);
                this.lastStepWidth = lastStep.offsetWidth;
            }
        };
        this.initialiseStepStates = () => {
            this.steps.forEach((step, index) => {
                var _a, _b, _c;
                // Set language
                if (this.icI18n !== undefined) {
                    step.icI18n = this.icI18n;
                }
                // Set variant
                step.variant = this.variant;
                // Assign stepNum to each step
                step.stepNum = index + 1;
                // Assign lastStep to final step
                step.lastStep = index === this.steps.length - 1;
                step.lastStepNum = this.steps.length;
                if (step.type !== "current") {
                    step.current = false;
                    this.stepTypes[index] = step.type;
                }
                else {
                    step.current = true;
                }
                const stepTitleArea = step.shadowRoot &&
                    step.shadowRoot.querySelector(".step > .heading-area");
                if (this.stepsWithStepTitles.length == 0 && this.variantOverride) {
                    if (this.variant === "compact") {
                        this.autoSetStepTitles = true;
                        if (this.autoSetStepTitles) {
                            step.heading = "Step " + step.stepNum;
                            stepTitleArea &&
                                ((_a = stepTitleArea === null || stepTitleArea === void 0 ? void 0 : stepTitleArea.querySelector(".heading")) === null || _a === void 0 ? void 0 : _a.setAttribute("aria-hidden", "true"));
                        }
                    }
                    if (this.variant === "default") {
                        this.autoSetStepTitles = false;
                        if (!this.autoSetStepTitles) {
                            step.heading = undefined;
                            stepTitleArea &&
                                ((_b = stepTitleArea === null || stepTitleArea === void 0 ? void 0 : stepTitleArea.querySelector(".heading")) === null || _b === void 0 ? void 0 : _b.removeAttribute("aria-hidden"));
                        }
                    }
                }
                if (this.variant === "compact") {
                    if (step.current === true || step.type === "current") {
                        step.classList.remove("hide");
                        step.classList.add("show");
                    }
                    else if (step.classList.contains("show")) {
                        step.classList.remove("show");
                        step.classList.add("hide");
                    }
                    if (!step.lastStep) {
                        step.nextStepHeading = this.steps[index + 1].heading;
                        step.progress = (step.stepNum / this.steps.length) * 100;
                    }
                    else if (step.lastStep && this.stepTypes[index] !== "completed") {
                        step.progress = 95;
                    }
                    else {
                        step.progress = 100;
                    }
                    if (this.hideStepInfo && stepTitleArea !== null) {
                        stepTitleArea.classList.remove(this.visuallyHidden);
                    }
                    step.compactStepStyling = this.stepTypes[index];
                }
                if (this.variant === "default") {
                    if (!step.lastStep) {
                        if (this.alignedFullWidth && this.stepperWidth !== undefined) {
                            step.style.width = pxToRem(`${(this.stepperWidth - this.lastStepWidth) /
                                (this.steps.length - 1)}px`);
                            step.style.minWidth = pxToRem("148px");
                        }
                    }
                    else if (step.lastStep) {
                        step.classList.add("last-step");
                        if (this.alignedFullWidth) {
                            step.style.maxWidth = `${this.lastStepWidth}px`;
                        }
                        else if (this.connectorWidth) {
                            step.style.maxWidth =
                                this.connectorWidth > 100
                                    ? pxToRem(`${this.connectorWidth + 48}px`)
                                    : pxToRem("148px");
                        }
                    }
                    if (this.aligned === "left" && this.connectorWidth) {
                        step.style.width =
                            this.connectorWidth > 100
                                ? pxToRem(`${this.connectorWidth + 48}px`)
                                : pxToRem("148px");
                        const stepConnect = (_c = step.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(".step > .step-top > .step-connect");
                        if (stepConnect) {
                            stepConnect.style.width =
                                this.connectorWidth > 100
                                    ? pxToRem(`${this.connectorWidth}px`)
                                    : pxToRem("100px");
                        }
                    }
                    if (this.hideStepInfo && stepTitleArea !== null) {
                        stepTitleArea.classList.add(this.visuallyHidden);
                    }
                }
            });
        };
        this.setHideStepInfo = () => {
            this.steps.forEach((step) => {
                var _a, _b, _c;
                const stepTitleArea = (_a = step.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".step > .heading-area");
                if (stepTitleArea) {
                    if (this.hideStepInfo) {
                        (_b = stepTitleArea.classList) === null || _b === void 0 ? void 0 : _b.add(this.visuallyHidden);
                    }
                    else {
                        (_c = stepTitleArea.classList) === null || _c === void 0 ? void 0 : _c.remove(this.visuallyHidden);
                    }
                }
            });
        };
        this.overrideVariant = () => {
            if (this.variantOverride) {
                let minDefaultStepperWidth = 148 * this.steps.length;
                if (this.aligned === "left" &&
                    this.connectorWidth &&
                    this.connectorWidth > 100) {
                    minDefaultStepperWidth = (this.connectorWidth + 48) * this.steps.length;
                }
                if (this.el.clientWidth < minDefaultStepperWidth) {
                    this.variant = "compact";
                }
                else {
                    this.variant = "default";
                }
            }
        };
        this.resizeObserverCallback = () => {
            this.getChildren();
            this.checkStepTitles();
            this.overrideVariant();
            this.setStepperWidth();
            this.initialiseStepStates();
            this.handleThemeChange();
        };
        this.runResizeObserver = () => {
            this.resizeObserver = new ResizeObserver(() => {
                this.resizeObserverCallback();
            });
            this.resizeObserver.observe(this.el);
        };
    }
    handleThemeChange() {
        this.getChildren();
        this.steps.forEach((step) => {
            step.theme = this.theme;
        });
    }
    handlePropChange() {
        this.setHideStepInfo();
        this.getChildren();
    }
    disconnectedCallback() {
        if (this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
        }
    }
    componentWillLoad() {
        this.setStepTypes();
        this.handleThemeChange();
        if (this.variant === "compact") {
            this.variantOverride = false;
        }
    }
    componentWillRender() {
        this.initialiseStepStates();
    }
    componentDidLoad() {
        checkResizeObserver(this.runResizeObserver);
    }
    render() {
        return (h(Host, { key: '8905befe9177785369ef0d277f7f21d823cd727b', class: {
                [`ic-stepper-${this.variant}`]: true,
                ["ic-stepper-aligned-left"]: this.variant === "default" && this.aligned === "left",
                [`ic-theme-${this.theme}`]: this.theme !== "inherit",
            } }, h("ul", { key: '19d67dcea521d17802c2d98946ce24254ef4969a', class: "step-item-list" }, h("slot", { key: 'fe75a601beeed1e3dbfc9df495909af26ad11523' }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "theme": ["handleThemeChange"],
        "hideStepInfo": ["handlePropChange"],
        "variant": ["handlePropChange"]
    }; }
};
Stepper.style = IcStepperStyle0;

export { Stepper as ic_stepper };

//# sourceMappingURL=ic-stepper.entry.js.map