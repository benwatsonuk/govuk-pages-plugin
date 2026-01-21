import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { r as removeDisabledFalse, o as onComponentRequiredPropUndefined, q as getInputDescribedByText, s as hasValidationStatus } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icCheckboxGroupCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-text-color:var(--ic-checkbox-group-label);--ic-input-label-helper-text-color:var(--ic-checkbox-group-subtitle);--ic-input-validation-error:var(--ic-checkbox-state-icon-error);--ic-input-validation-status-text-color:var(--ic-checkbox-state-text)}:host(.ic-checkbox-group-disabled){--ic-input-label-text-color:var(--ic-checkbox-group-label-disabled);--ic-input-label-helper-text-color:var(\n    --ic-checkbox-group-subtitle-disabled\n  )}ic-input-label.error{color:var(--ic-checkbox-group-label-error);--ic-typography-color:var(--ic-checkbox-group-label-error);--ic-input-label-helper-text-color:var(--ic-checkbox-group-subtitle-error)}ic-input-label:not(.with-helper) .ic-typography-label,ic-input-label .helpertext{margin-bottom:var(--ic-space-sm)}:host(.ic-checkbox-group-small) ic-input-label:not(.with-helper) .ic-typography-label,:host(.ic-checkbox-group-small) ic-input-label .helpertext{margin-bottom:calc(var(--ic-space-sm) / 2)}:host(.ic-checkbox-group-large) ic-input-label:not(.with-helper) .ic-typography-label,:host(.ic-checkbox-group-large) ic-input-label .helpertext{margin-bottom:calc(var(--ic-space-sm) * 1.5)}ic-input-label .helpertext{display:block}ic-input-validation.show-validation{margin-top:var(--ic-space-sm)}:host(.ic-checkbox-group-small) ic-input-validation.show-validation{margin-top:calc(var(--ic-space-sm) / 2)}:host(.ic-checkbox-group-large) ic-input-validation.show-validation{margin-top:calc(var(--ic-space-sm) * 1.5)}.checkboxes-container{margin-bottom:calc(-1 * var(--ic-space-xxs))}:host(.ic-checkbox-group-small) .checkboxes-container{margin-bottom:calc(-1 * var(--ic-space-xxxs))}.screen-reader-only-text{position:absolute;left:-9999px;background-color:#fff;color:#000;text-transform:none}.screen-reader-only-text:dir(rtl){right:-9999px}";
const IcCheckboxGroupStyle0 = icCheckboxGroupCss;

const CHECKBOX_SELECTOR = "ic-checkbox";
const CheckboxGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icChange = createEvent(this, "icChange", 7);
        /**
         * If `true`, the checkbox group will be set to the disabled state.
         */
        this.disabled = false;
        /**
         * The helper text that will be displayed for additional field guidance.
         */
        this.helperText = "";
        /**
         * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
         */
        this.hideLabel = false;
        /**
         * If `true`, the checkbox group will require a value.
         */
        this.required = false;
        /**
         * The size of the checkboxes to be displayed. This does not affect the font size of the label.
         */
        this.size = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The value of the `aria-live` attribute on the validation message.
         */
        this.validationAriaLive = "polite";
        /**
         * The validation status - e.g. 'error' | 'warning' | 'success'.
         */
        this.validationStatus = "";
        /**
         * The text to display as the validation message.
         */
        this.validationText = "";
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    labelNameHandler(newValue, oldValue, propName) {
        Array.from(this.el.querySelectorAll(CHECKBOX_SELECTOR)).forEach((checkbox) => {
            if (propName === "label")
                checkbox.groupLabel = newValue;
            else if (checkbox.name === oldValue) {
                // If the checkbox name has been set by the parent, then override it
                checkbox.name = newValue;
            }
        });
    }
    watchThemeHandler(newValue) {
        Array.from(this.el.querySelectorAll(CHECKBOX_SELECTOR)).forEach((checkbox) => {
            checkbox.theme = newValue;
        });
    }
    handleChange(ev) {
        //don't pass on the event if it has come from slotted text field
        //otherwise any icChange handler bound to the checkbox group will also run
        if (ev.target.tagName === "IC-TEXT-FIELD") {
            ev.stopImmediatePropagation();
        }
    }
    componentWillLoad() {
        removeDisabledFalse(this.disabled, this.el);
        this.watchThemeHandler(this.theme);
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([
            { prop: this.label, propName: "label" },
            { prop: this.name, propName: "name" },
        ], "Checkbox Group");
    }
    selectHandler({ target }) {
        const checkedOptions = Array.from(this.el.querySelectorAll(CHECKBOX_SELECTOR)).filter(({ checked, disabled }) => checked && !disabled);
        this.icChange.emit({
            value: checkedOptions.map(({ value }) => value),
            checkedOptions: checkedOptions.map((opt) => {
                var _a;
                return ({
                    checkbox: opt,
                    textFieldValue: (_a = opt.querySelector("ic-text-field")) === null || _a === void 0 ? void 0 : _a.value,
                });
            }),
            selectedOption: target,
        });
    }
    render() {
        const { disabled, helperText, hideLabel, label, name, required, size, theme, validationAriaLive, validationStatus, validationText, } = this;
        const describedBy = getInputDescribedByText(this.el, name, helperText !== "", validationStatus !== "");
        const renderSRText = validationStatus === "error" || required || hideLabel;
        const showValidation = hasValidationStatus(validationStatus, disabled);
        return (h(Host, { key: 'ee4fc914d346b2f35dd8d44ff73a44b479caee95', class: {
                "ic-checkbox-group-disabled": !!disabled,
                [`ic-checkbox-group-${size}`]: true,
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, renderSRText && (h("span", { key: '3718d5e6fce1597c836d01050ed17bcd01c97e6e', id: "screenReaderOnlyText", class: "screen-reader-only-text", "aria-hidden": "true" }, label, " ", validationStatus === "error" ? "invalid data " : null, " ", required ? "required" : null)), h("fieldset", { key: '318e6c61787f136916d39acdd2823fa644c8d865', id: name, "aria-labelledby": `${renderSRText ? "screenReaderOnlyText" : ""} ${describedBy}`.trim(), disabled: disabled }, !hideLabel && (h("legend", { key: '6348eb25d5a2de666033441d694b407f72ae834b' }, h("ic-input-label", { key: '96ef66ab6b4e3a02a2385eb9b8f5936c1fc57ad0', class: { [`${validationStatus}`]: true }, label: label, helperText: helperText, required: required, disabled: disabled, useLabelTag: false }, h("slot", { key: 'f9f0532834d50a57dbc2f075a9f94788071cceb6', name: "helper-text", slot: "helper-text" })))), h("div", { key: '9b72caba2adb5951814689ef5c8b1fa5d7ea11ed', class: "checkboxes-container" }, h("slot", { key: '5cf045069c87416b7889e7b29b44e6f137ca0b4f' }))), h("ic-input-validation", { key: '4b9680fcb5468fbf6e9c2e1eb6d45f929b2b09dc', class: {
                "show-validation": showValidation,
            }, for: name, ariaLiveMode: validationAriaLive, status: showValidation ? validationStatus : "", message: showValidation ? validationText : "" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "label": ["labelNameHandler"],
        "name": ["labelNameHandler"],
        "theme": ["watchThemeHandler"]
    }; }
};
CheckboxGroup.style = IcCheckboxGroupStyle0;

export { CheckboxGroup as ic_checkbox_group };

//# sourceMappingURL=ic-checkbox-group.entry.js.map