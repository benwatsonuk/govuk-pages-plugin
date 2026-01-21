import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { o as onComponentRequiredPropUndefined, S as getInputHelperTextID, T as getInputValidationTextID, K as IcInformationStatus } from './helpers-dcedb279.js';
import { w as warningIcon, g as errorIcon, s as successIcon } from './constants-7960cba4.js';

const icInputLabelCss = "ic-input-label{margin-bottom:var(--ic-space-xs);--ic-typography-color:var(\n    --ic-input-label-text-color,\n    var(--ic-color-text-primary)\n  )}ic-input-label.with-helper{margin-bottom:0}ic-input-label.ic-input-label-readonly{--ic-typography-color:var(--ic-input-label-readonly-typography-color)}ic-input-label .helpertext,ic-input-label .helpertext ::slotted(*){margin-top:var(--ic-space-xxxs);padding-bottom:var(--ic-input-label-helpertext-padding, 0);--ic-typography-color:var(\n    --ic-input-label-helper-text-color,\n    var(--ic-color-text-secondary)\n  )}ic-input-label .helpertext-normal{--ic-typography-color:var(\n    --ic-input-label-helper-text-color,\n    var(--ic-color-text-secondary)\n  )}ic-input-label .helpertext-readonly{--ic-typography-color:var(--ic-input-label-readonly-helpertext-color)}ic-input-label .readonly-label{--ic-typography-color:var(--ic-input-label-readonly-label-color)}ic-input-label .error-label{--ic-typography-color:var(--ic-input-label-error-label-color)}";
const IcInputLabelStyle0 = icInputLabelCss;

const InputLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /**
         * The helper text that will be displayed.
         */
        this.helperText = "";
        /**
         * The label will be visually hidden.
         */
        this.hideLabel = false;
        /**
         * If `true`, the readonly state will be set.
         */
        this.readonly = false;
        /**
         * If `true`, the input label will require a value.
         */
        this.required = false;
        /**
         * The status of the label - e.g. 'error'.
         */
        this.status = "";
        /**
         * @internal If `true`, wraps label text in label tag
         */
        this.useLabelTag = true;
        this.isHelperTextSlotUsed = (slot) => {
            const assignedEls = slot === null || slot === void 0 ? void 0 : slot.assignedElements();
            if (assignedEls && assignedEls.length) {
                for (const el of assignedEls) {
                    if (el.tagName === "SLOT") {
                        // Recursion needed for when slot is forwarded multiple times - through child components
                        // (e.g. in date picker)
                        if (this.isHelperTextSlotUsed(el)) {
                            return true;
                        }
                    }
                    else {
                        // Found an assigned element which is not a nested <slot>
                        return true;
                    }
                }
            }
            return false;
        };
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Input Label");
    }
    render() {
        const { disabled, readonly, label, required, helperText, status, hideLabel, useLabelTag, } = this;
        const labelText = required ? label + " *" : label;
        const helperTextId = this.for && getInputHelperTextID(this.for);
        const helperTextClass = {
            helpertext: true,
            "helpertext-normal": !disabled && !readonly,
            "helpertext-readonly": readonly,
        };
        const helperTextSlot = this.el.querySelector("slot[name='helper-text']");
        return (h(Host, { key: 'da58fe3cac026661d1c624c69c56c6e64ff3c07a', class: {
                "ic-input-label-disabled": !!disabled,
                "ic-input-label-readonly": readonly,
                "with-helper": this.isHelperTextSlotUsed(helperTextSlot) || helperText !== "",
            } }, !hideLabel && (h("ic-typography", { key: 'bb221e5f51681a0caa721c66f03fd475e4e08749', variant: "label", class: {
                "readonly-label": readonly,
                "error-label": status === "error" && !(readonly || disabled),
            } }, readonly || !useLabelTag ? (`${labelText}`) : (h("label", { htmlFor: this.for }, labelText)))), this.isHelperTextSlotUsed(helperTextSlot) ? (h("span", { id: helperTextId, class: helperTextClass }, h("slot", { name: "helper-text" }))) : (helperText !== "" && (h("ic-typography", { variant: "caption", class: helperTextClass }, h("span", { id: helperTextId }, helperText))))));
    }
    get el() { return getElement(this); }
};
InputLabel.style = IcInputLabelStyle0;

const icInputValidationCss = "ic-input-validation{max-width:var(--input-width, 20rem);display:flex}ic-input-validation.ic-input-validation-with-status{margin-top:var(--ic-space-xs)}ic-input-validation.ic-input-validation-full-width{width:100%;max-width:none}ic-input-validation span.status-icon{padding-right:var(--ic-space-xxs)}ic-input-validation span.status-icon>svg{height:1.25rem;width:1.25rem}ic-input-validation span.icon-success>svg{fill:var(--ic-input-validation-success-icon-color)}ic-input-validation span.icon-error>svg{fill:var(--ic-input-validation-error, var(--ic-atoms-status-icon-error))}ic-input-validation span.icon-warning>svg{fill:var(--ic-input-validation-warning-icon-color)}ic-input-validation .statustext{flex-grow:1;color:var(\n    --ic-input-validation-status-text-color,\n    var(--ic-color-text-primary)\n  );--ic-typography-color:var(\n    --ic-input-validation-status-text-color,\n    var(--ic-color-text-primary)\n  )}ic-input-validation .sr-only{position:absolute;left:-9999px}";
const IcInputValidationStyle0 = icInputValidationCss;

const ICON = {
    [IcInformationStatus.Warning]: warningIcon,
    [IcInformationStatus.Error]: errorIcon,
    [IcInformationStatus.Success]: successIcon,
};
const INVISIBLE_CHAR = "\u200B";
const InputValidation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         *  The ARIA live mode to apply to the message.
         */
        this.ariaLiveMode = "polite";
        /**
         *  If `true`, the input validation will fill the width of the container.
         */
        this.fullWidth = false;
        /**
         * The status of the validation - e.g. 'error' | 'warning' | 'success'.
         */
        this.status = "";
    }
    watchMessageHandler(newValue) {
        // Force detectable DOM changes
        // Invisible character used as screen readers can ignore whitespace changes e.g. "" and " "
        this.messageEl.textContent = INVISIBLE_CHAR;
        setTimeout(() => {
            this.messageEl.textContent = newValue;
        }, 200); // Delay to help ensure screen readers detect change
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.message, propName: "message" }], "Input Validation");
        this.messageEl.textContent = INVISIBLE_CHAR;
    }
    render() {
        const { ariaLiveMode, fullWidth, status, message } = this;
        const displayIcon = status !== "" ? ICON[status] : "";
        return (h(Host, { key: '0513b4d21426f48a3751fbb4f16786d8cdde6f30', class: {
                [`ic-input-validation-${status}`]: status !== "",
                "ic-input-validation-full-width": !!fullWidth,
                "ic-input-validation-with-status": status !== "",
            } }, displayIcon !== "" && (h("span", { key: '3e6de247d788f9836f338e109d7be5914fa2f320', class: {
                "status-icon": true,
                [`icon-${status}`]: true,
            }, innerHTML: displayIcon })), h("ic-typography", { key: '5ee4e673c1f2934d74eafbc08241cdfae1aa5f9f', variant: "caption", class: "statustext" }, h("span", { key: '850149ffb8c4cdab21ab0c05a8787747e399ca41', id: this.for && getInputValidationTextID(this.for) }, message), h("span", { key: 'a26f5aa58e81cf3e9d982d86b75b3ab7e14897ad', ref: (el) => (this.messageEl = el), class: "sr-only", "aria-live": ariaLiveMode })), h("slot", { key: '4dba13235c6ec27d634b0dd38523963798676b36', name: "validation-message-adornment" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "message": ["watchMessageHandler"]
    }; }
};
InputValidation.style = IcInputValidationStyle0;

export { InputLabel as ic_input_label, InputValidation as ic_input_validation };

//# sourceMappingURL=ic-input-label_2.entry.js.map