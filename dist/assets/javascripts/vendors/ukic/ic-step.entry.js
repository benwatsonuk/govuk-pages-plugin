import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { C as Check } from './check-icon-4a9f8371.js';
import { e as isPropDefined } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const warningIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99935 4.32666L13.0193 13H2.97935L7.99935 4.32666ZM7.99935 1.66666L0.666016 14.3333H15.3327L7.99935 1.66666ZM8.66602 11H7.33268V12.3333H8.66602V11ZM8.66602 6.99999H7.33268V9.66666H8.66602V6.99999Z" fill="currentColor"/>
</svg>`;

const icStepCss = ":host{display:flex;flex:auto;--ic-typography-color:currentcolor}.step{display:flex;flex:1 1 0}.step-icon{display:flex;justify-content:center}.heading,.subheading,.step-status,.next-step{white-space:pre-line}.next-step{color:var(--ic-stepper-compact-step-next-text)}.visually-hidden{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}.visually-hidden:dir(rtl){right:-9999px}:host(.ic-step-compact){-moz-column-gap:var(--ic-space-sm);column-gap:var(--ic-space-sm);--compact-step-inner-color:var(--ic-step-indicator-status-current);--compact-step-outer-color:var(--ic-step-indicator-status-remaining);--compact-step-circular-line-width:var(--ic-space-xxs)}:host(.ic-step-compact) .step{-moz-column-gap:var(--ic-space-sm);column-gap:var(--ic-space-sm)}:host(.ic-step-compact) .step:not(.current){display:none;opacity:0;visibility:hidden}.compact-step-progress-indicator{margin:var(--ic-space-xs) 0 0}:host ic-loading-indicator::part(ic-loading-container){border-radius:50%}:host() ic-loading-indicator::part(ic-loading-container){background-color:var(--ic-step-indicator-background)}:host(.ic-step-compact) .heading-area{display:flex;flex-direction:column;width:14.25rem}:host(.ic-step-compact) .heading{color:var(--ic-stepper-compact-step-title)}:host(.ic-step-compact) .disabled .heading{color:var(--ic-stepper-compact-step-title-disabled)}.info-line{display:flex;-moz-column-gap:var(--ic-space-xs);column-gap:var(--ic-space-xs)}.step-status{display:flex;color:var(--ic-stepper-compact-step-requirement-text);-moz-column-gap:var(--ic-space-xxxs);column-gap:var(--ic-space-xxxs)}.compact-step-completed .step-status{color:var(--ic-stepper-compact-step-completed-text)}.compact-step-disabled :is(.heading,.step-status){color:var(--ic-stepper-compact-step-requirement-text-disabled)}.step-num{color:var(--ic-stepper-compact-step-stage-text);white-space:nowrap}:host(.ic-step-compact) .step-icon{margin:var(--ic-space-xxxs)}:host(.ic-step-compact) .step-icon svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.ic-step-default) .step{flex-direction:column}:host(.ic-step-default.last-step){flex-grow:initial}.step-top{display:flex;width:100%;align-items:center;align-self:flex-start;height:2.5rem}:host(.ic-step-default) .step-icon{border-radius:50%;background-color:var(--ic-step-number-inactive)}.step-icon-inner{width:var(--ic-space-xl);height:var(--ic-space-xl);display:flex;justify-content:center;align-items:center;border-radius:50%;color:var(--ic-step-number-text-inactive)}:host(.ic-step-default) .current{color:var(--ic-status-info-default)}:host(.ic-step-default) .heading-area{margin:var(--ic-space-xs) 0;padding-right:var(--ic-space-xs);width:100%}:host(.ic-step-default) .heading,.subheading{width:-moz-fit-content;width:fit-content}.heading{color:var(--ic-step-title)}.current .heading{color:var(--ic-step-title-current)}.completed .heading{color:var(--ic-step-title-success)}.disabled .heading{color:var(--ic-step-title-disabled)}.subheading{color:var(--ic-step-title-status-text-inactive)}.current .subheading{color:var(--ic-step-title-status-text-current)}.disabled .subheading{color:var(--ic-step-title-status-text-disabled)}:host(.ic-step-default) .completed{color:var(--ic-status-success-default)}.active .step-icon-inner{box-shadow:inset var(--ic-step-number-inactive-outline) 0 0 0 0.125rem}.current .step-icon-inner{background-color:var(--ic-step-number-background-active);color:var(--ic-step-number-text-current)}.disabled{color:var(--ic-color-text-disabled-mid)}.disabled .step-icon-inner{border:var(--ic-border-width) dashed var(--ic-step-number-disabled);width:calc(var(--ic-space-xl) - var(--ic-space-xxxs));height:calc(var(--ic-space-xl) - var(--ic-space-xxxs));color:var(--ic-step-number-text-disabled)}.disabled .step-icon{background-color:transparent !important}.completed .step-icon-inner{background:var(--ic-step-number-background-success);box-shadow:inset var(--ic-step-number-background-success) 0 0 0\n    var(--ic-space-xxxs);border-radius:100%}:host(.ic-step-default) .current .step-icon{border:var(--ic-space-xxxs) solid var(--ic-step-number-current-outline);padding:var(--ic-space-xxxs);margin:0 calc(-1 * var(--ic-space-xxxs));background-color:var(--ic-step-number-current-outer-fill);}.step-connect{height:var(--ic-space-xxxs);background-color:var(--ic-stepper-connector-remaining-status);margin:0 var(--ic-space-xs);border-radius:var(--ic-space-xxs);width:100%}.aligned-full-width.step-connect{min-width:6.25rem;width:100%}.disabled .step-connect{height:0;background-color:rgb(0 0 0 / 0%);border-top:0.125rem dashed var(--ic-stepper-connector-disabled);border-radius:0}.completed .step-connect{background-color:var(--ic-stepper-connector-success)}.step-connect-inner{width:70%;display:flex;flex:auto;height:var(--ic-space-xxxs);border-radius:var(--ic-space-xxs);background-color:var(--ic-stepper-connector-current-status)}.step-icon-inner .check-icon{padding-top:var(--ic-space-xxs)}.step-icon-inner .check-icon svg{width:var(--ic-space-md);height:auto}.step-icon-inner .check-icon>svg>path{fill:var(--ic-step-number-icon-success)}@media (forced-colors: active){.compact-step-disabled :is(.heading,.step-status){color:GrayText}.step-connect:not(.disabled .step-connect){border:var(--ic-border-hc)}.active .step-icon-inner,.completed .step-icon-inner,.current .step-icon-inner{forced-color-adjust:none;box-shadow:inset canvastext 0 0 0 0.125rem;background-color:transparent;color:canvastext}:host(.ic-step-default) .current .step-icon{padding:0;border:none}.disabled,.disabled .heading-area,.disabled .step-icon-inner,.disabled .heading{color:GrayText}.step-connect-inner,.completed .step-connect{background-color:canvastext}.step-icon-inner .check-icon>svg>path{fill:canvastext}}";
const IcStepStyle0 = icStepCss;

const Step = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * @internal If `true`, and a compact stepper  is being used, the current step will be the only step in view.
         */
        this.current = false;
        /**
         * Words within the component that can be replaced to translate the component into a different language
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
         * @internal Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The state of the step within the stepper.
         */
        this.type = "active";
    }
    typeChangeHandler() {
        if (this.variant === "compact" && this.type === "current") {
            this.current = true;
        }
        else {
            this.current = false;
        }
    }
    render() {
        var _a, _b;
        const { compactStepStyling, current, heading, icI18n, lastStep, lastStepNum, nextStepHeading, progress, status, stepNum, subheading, theme, type, variant, } = this;
        // ARIA LABEL
        let ariaLabel = "";
        if (type === "completed") {
            ariaLabel = `. ${icI18n.completed}`;
        }
        else if (type === "disabled") {
            ariaLabel = `. ${icI18n.notRequired}`;
        }
        else if (status === "required") {
            ariaLabel = `. ${icI18n.required}`;
        }
        else if (status === "optional") {
            ariaLabel = `. ${icI18n.optional}`;
        }
        // STEP STATUS
        let stepStatus;
        if (status && isPropDefined(status)) {
            stepStatus = status[0].toUpperCase() + status.slice(1);
        }
        // STEP TYPE
        let stepType;
        if (type === "disabled" || compactStepStyling === "disabled") {
            stepType = icI18n.notRequired;
        }
        else if (compactStepStyling === "completed") {
            stepType = icI18n.completed;
        }
        // STATUS ICON FOR COMPACT STEP
        let statusIcon;
        if (type === "completed" || compactStepStyling === "completed") {
            statusIcon = (h("span", { key: '864d4561a571389ff3128b00ffb529010930b4b5', class: "check-icon step-icon", "aria-hidden": "true", innerHTML: Check }));
        }
        else if (type === "disabled" || compactStepStyling === "disabled") {
            statusIcon = (h("span", { key: '7bf14abf049e8e5d3fc870c574393adb49e68b8c', class: "warning-icon step-icon", "aria-hidden": "true", innerHTML: warningIcon }));
        }
        // COMPACT STEP COMPONENT
        const compactStep = (h("div", { key: '4f3ac82fbcc83d16b72393415b08bb383b3844e1', class: {
                ["step"]: true,
                ["current"]: !!current,
                [`compact-step-${compactStepStyling}`]: !!compactStepStyling,
                ["disabled"]: type === "disabled" || compactStepStyling === "disabled",
            } }, h("ic-loading-indicator", { key: '53ebcdba2a35459adeb1ac198e7a48620eb5ed8f', class: {
                "compact-step-progress-indicator": true,
                "not-required": type === "disabled" || compactStepStyling === "disabled",
            }, "aria-hidden": "true", size: "small", "inner-label": stepNum, progress: progress }), h("div", { key: '1206ec1c72eafac85fa94f936db215fd6d66a9da', class: "heading-area" }, h("ic-typography", { key: 'ecd033d92e805fc2538f92253f43a667594d30da', variant: "h4", class: "heading" }, heading), h("div", { key: '98f5a4369ed8e41271c9e5121d6ef4e68191e766', class: "info-line" }, h("ic-typography", { key: '5b58bcbe7124d039d41e6cddd1c737a82e689f46', variant: "caption", class: "step-num" }, `${stepNum} ${icI18n.of} ${lastStepNum}`, h("span", { key: '86b332b0596baaa8f14e6232ca4742fca349b401', class: "visually-hidden" }, ` ${icI18n.steps}`)), (this.subheading ||
            type === "completed" ||
            type === "disabled" ||
            (this.variant === "compact" &&
                !!compactStepStyling &&
                compactStepStyling !== "active") ||
            !!status) && (h("div", { key: 'e7348cf5cb486de2bd35047429b8baedb64e7945', class: "step-status" }, statusIcon !== undefined && statusIcon, (subheading || stepType) && (h("ic-typography", { key: '1e636d26071c9274b29b3e9fbd5edcff666bf650', variant: "caption" }, subheading !== null && isPropDefined(subheading)
            ? subheading
            : type === "disabled" ||
                (variant === "compact" &&
                    compactStepStyling === "disabled") ||
                type === "completed" ||
                (variant === "compact" &&
                    compactStepStyling === "completed")
                ? stepType
                : status && stepStatus))))), lastStep ? (h("ic-typography", { variant: "subtitle-small", class: "next-step" }, icI18n.lastStep)) : (isPropDefined(nextStepHeading) && (h("ic-typography", { variant: "subtitle-small", class: "next-step" }, icI18n.next, h("span", { class: "visually-hidden" }, " ", icI18n.step), ":", " ", this.nextStepHeading))))));
        // ICON FOR DEFAULT STEP
        let icon;
        if (type !== "completed") {
            icon = (h("ic-typography", { key: '11944edb6340175b2619cd7bf1a92a077c2581e7', variant: "subtitle-small" }, h("span", { key: '5636bdbab2cbae08c7122adae7376b380d2c0e6b', class: "step-icon-inner", "aria-hidden": "true" }, this.stepNum)));
        }
        else {
            icon = (h("div", { key: 'b479680a69976f4a1fecff4944fe49d6ad7a1803', class: "step-icon-inner", "aria-hidden": "true" }, h("span", { key: 'f147fc626a8a1ee01f7a00e642353f0393f2a9bf', class: "check-icon", innerHTML: Check })));
        }
        // STEP CONNECT FOR DEFAULT STEP
        const partialBar = type === "current" && (h("div", { key: '38562e1d3953a8e3fad8a666be017c6eb8b023d8', class: "step-connect-inner" }));
        const finalStep = !lastStep && (h("div", { key: '92355de2de8a20e3efd244e90181ed4728908396', class: {
                ["step-connect"]: true,
                ["aligned-full-width"]: !!(((_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains("ic-stepper-default")) &&
                    !this.el.parentElement.classList.contains("ic-stepper-aligned-left")),
            } }, partialBar));
        // DEFAULT STEP COMPONENT
        const defaultStep = (h("div", { key: '26938dd799f54d8440d45c9d9615a4831f7cab98', class: {
                ["step"]: true,
                [`${type}`]: true,
            } }, h("div", { key: '34aca5fbe4025940b5226476d1da17725831a7db', class: "step-top" }, h("div", { key: 'e59c7c95a9b32b9e897a6dc6d37000cd45294caf', class: "step-icon" }, icon), finalStep), (heading || subheading || status) && (h("div", { key: '568405e10345dfe382fd78d096391cc870914f6a', class: "heading-area" }, heading && (h("ic-typography", { key: '6dcac8ec5550fe94c80e75c65ecec33dee7b4157', variant: "subtitle-large", class: "heading" }, heading)), heading && (subheading || status) && (h("ic-typography", { key: 'efe9c1f647e25a84eded6c390ff1b487e0ea5a0d', variant: "caption", class: "subheading" }, subheading !== null && isPropDefined(subheading)
            ? subheading
            : stepStatus))))));
        return (h(Host, { key: '359b602ab02607c5ec02673283f99172c3b4a924', role: "listitem", "aria-label": `${icI18n.step} ${stepNum}${ariaLabel}`, "aria-current": (current || type === "current") && "step", class: {
                ["aligned-full-width"]: !!(((_b = this.el.parentElement) === null || _b === void 0 ? void 0 : _b.classList.contains("ic-stepper-default")) &&
                    !this.el.parentElement.classList.contains("ic-stepper-aligned-left")),
                [`ic-step-${variant}`]: true,
                [`ic-theme-${theme}`]: this.theme !== "inherit",
            } }, variant === "compact" ? compactStep : defaultStep));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "type": ["typeChangeHandler"]
    }; }
};
Step.style = IcStepStyle0;

export { Step as ic_step };

//# sourceMappingURL=ic-step.entry.js.map