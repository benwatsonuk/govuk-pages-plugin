import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { r as removeDisabledFalse, k as addFormResetListener, o as onComponentRequiredPropUndefined, l as removeFormResetListener, m as renderHiddenInput, n as removeHiddenInput, i as isSlotUsed } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icCheckboxCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-checkbox-disabled){pointer-events:none}.container{display:flex;width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs);margin-bottom:var(--ic-space-xxs);align-items:center}:host(.ic-data-table-checkbox) .container{padding:0;margin-bottom:0}:host(.ic-checkbox-small) .container{margin-bottom:var(--ic-space-xxxs)}.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-checkbox-background-unselected);border:var(--ic-border-width) solid var(--ic-checkbox-border-unselected);border-radius:var(--ic-border-radius);outline:none;cursor:pointer;transition:var(--ic-easing-transition-fast);flex-shrink:0}:host .container svg{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.ic-checkbox-small) .checkbox,:host(.ic-checkbox-small) .container svg{width:var(--ic-space-md);height:var(--ic-space-md)}:host(.ic-checkbox-large) .checkbox,:host(.ic-checkbox-large) .container svg{width:var(--ic-space-xl);height:var(--ic-space-xl)}.checkbox:checked{background-color:var(--ic-checkbox-background-selected);border:var(--ic-border-width) solid var(--ic-checkbox-background-selected);transition:var(--ic-easing-transition-slow)}.checkbox:checked:disabled{background-color:var(--ic-checkbox-background-selected-disabled);border:var(--ic-border-width) solid\n    var(--ic-checkbox-background-selected-disabled)}.checkbox:indeterminate,.checkbox.indeterminate:checked{background-color:var(--ic-checkbox-background-indeterminate);border:0.125rem solid var(--ic-checkbox-background-indeterminate)}.checkbox:indeterminate:disabled,.checkbox.indeterminate:checked:disabled{background-color:var(--ic-checkbox-background-indeterminate-disabled);border:0.125rem solid var(--ic-checkbox-background-indeterminate-disabled)}.checkbox:checked:hover{background-color:var(--ic-checkbox-background-selected-hover)}.checkbox:indeterminate:hover,.checkbox.indeterminate:checked:hover{background-color:var(--ic-checkbox-background-indeterminate-hover);border:0.125rem solid var(--ic-checkbox-background-indeterminate-hover)}.checkbox:checked:active{background-color:var(--ic-checkbox-background-selected-pressed)}.checkbox:indeterminate:active,.checkbox.indeterminate:checked:active{background-color:var(--ic-checkbox-background-indeterminate-pressed);border:0.125rem solid var(--ic-checkbox-background-indeterminate-pressed)}.checkbox:hover{box-shadow:0 0 0 0.25rem var(--ic-checkbox-action-background-hover);border:var(--ic-border-width) solid\n    var(--ic-checkbox-border-unselected-hover)}.checkbox:active{box-shadow:0 0 0 0.25rem var(--ic-checkbox-action-background-pressed);border:var(--ic-border-width) solid\n    var(--ic-checkbox-border-unselected-pressed)}.checkbox:focus{box-shadow:var(--ic-border-focus)}.checkbox:disabled{border:var(--ic-border-width) dashed\n    var(--ic-checkbox-border-unselected-disabled)}.checkbox-label{--ic-typography-color:var(--ic-checkbox-text)}.checkbox-label>label{padding-left:var(--ic-space-sm);display:inline-block}::slotted([slot=\"label\"]){padding-left:var(--ic-space-sm) !important;color:var(--ic-checkbox-text)}:host(.ic-checkbox-disabled) .checkbox-label{color:var(--ic-checkbox-text-disabled);--ic-typography-color:var(--ic-checkbox-text-disabled)}:host(.ic-checkbox-disabled) ::slotted([slot=\"label\"]){color:var(--ic-checkbox-text-disabled);--ic-typography-color:var(--ic-checkbox-text-disabled)}.checkbox-label:hover{cursor:pointer}.checkmark{position:relative;right:calc(-1 * var(--ic-space-lg));margin-left:calc(-1 * var(--ic-space-lg));fill:var(--ic-checkbox-icon-pressed);z-index:1;background-color:transparent;pointer-events:none;flex-shrink:0}:host(.ic-checkbox-small) .checkmark{margin-left:calc(-1 * var(--ic-space-md));right:calc(-1 * var(--ic-space-md))}:host(.ic-checkbox-large) .checkmark{margin-left:calc(-1 * var(--ic-space-xl));right:calc(-1 * var(--ic-space-xl))}.indeterminate-symbol{position:relative;width:0.875rem;height:var(--ic-space-xxxs);right:-1.188rem;margin-left:-0.875rem;z-index:1;background-color:var(--ic-checkbox-icon-indeterminate);pointer-events:none;flex-shrink:0}:host(.ic-checkbox-small) .indeterminate-symbol{width:0.6rem;right:-0.8rem;margin-left:-0.6rem}:host(.ic-checkbox-large) .indeterminate-symbol{width:1.25rem;right:-1.625rem;margin-left:-1.25rem}.additional-field-wrapper{margin-left:calc(var(--ic-space-md) + var(--ic-space-lg));margin-top:calc(var(--ic-space-sm) / 2)}.branch-corner{height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-checkbox-required-bar);border-left:0.125rem solid var(--ic-checkbox-required-bar)}.dynamic-container{display:flex;position:relative;margin:var(--ic-space-xxxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.dynamic-text{color:var(--ic-checkbox-required-text);--ic-typography-color:var(--ic-checkbox-required-text);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}.dynamic-field-container{flex:100%}.sr-only{position:absolute;left:-9999px}@media (max-width: 576px){::slotted(*){--input-width:100%}.dynamic-field-container{flex:initial}}@media (forced-colors: active){.checkbox{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert;transition:none}.checkbox:checked{transition:none}.checkbox:focus-visible{outline:0.125rem solid highlight}.checkbox:disabled:not(:checked){-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.checkmark{fill:none}.indeterminate-symbol{display:none}}.checkmark:dir(rtl){right:0}.checkbox-label:dir(rtl){padding-right:var(--ic-space-sm);padding-left:0}.indeterminate-symbol:dir(rtl){right:0.288rem}.branch-corner:dir(rtl){border-radius:0 0 0.188rem;border-right:0.125rem solid var(--ic-action-default);border-left:none}.dynamic-container:dir(rtl){margin:var(--ic-space-xxxs) var(--ic-space-sm) var(--ic-space-xxs) 0}";
const IcCheckboxStyle0 = icCheckboxCss;

const Checkbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icCheck = createEvent(this, "icCheck", 7);
        /**
         * The style of additionalField that will be displayed if used.
         */
        this.additionalFieldDisplay = "static";
        /**
         * If `true`, the checkbox will be set to the checked state. This is only the initial state and will be updated to unchecked if the checkbox is clicked.
         */
        this.checked = false;
        this.initiallyChecked = this.checked;
        /**
         * If `true`, the checkbox will be set to the disabled state.
         */
        this.disabled = false;
        /**
         * The text to be displayed when dynamic.
         */
        this.dynamicText = "This selection requires additional answers";
        /**
         * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
         */
        this.hideLabel = false;
        /**
         * If `true`, the indeterminate state will be displayed when checked.
         */
        this.indeterminate = false;
        this.displayIndeterminate = this.indeterminate;
        /**
         * If `true`, the checkbox will behave like a native checkbox where the `indeterminate` prop sets the indeterminate visual styling, independent of the `checked` state.
         */
        this.nativeIndeterminateBehaviour = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The value for the checkbox.
         */
        this.value = "";
        this.handleClick = () => {
            this.checked = !this.checked;
            this.displayIndeterminate =
                !this.nativeIndeterminateBehaviour && this.indeterminate && this.checked;
            this.icCheck.emit();
        };
        this.handleFormReset = () => {
            this.checked = this.initiallyChecked;
        };
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    watchIndeterminateHandler() {
        this.displayIndeterminate =
            this.indeterminate && (this.nativeIndeterminateBehaviour || this.checked);
    }
    componentWillLoad() {
        removeDisabledFalse(this.disabled, this.el);
        addFormResetListener(this.el, this.handleFormReset);
        const { parentElement } = this.el;
        if ((parentElement === null || parentElement === void 0 ? void 0 : parentElement.tagName) === "IC-CHECKBOX-GROUP") {
            const { name, label, size } = parentElement;
            if (!this.name)
                this.name = name;
            if (!this.size)
                this.size = size;
            this.groupLabel = label;
        }
    }
    componentDidLoad() {
        if (this.hasLabelSlot()) {
            this.arrangeLabel();
        }
        else {
            onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Checkbox");
        }
    }
    componentDidRender() {
        if (this.additionalFieldDisplay === "static") {
            this.el
                .querySelectorAll("ic-text-field")
                .forEach((textfield) => textfield.setAttribute("disabled", `${!this.checked}`));
        }
        else if (this.additionalFieldContainer) {
            this.additionalFieldContainer.style.display = !this.checked
                ? "none"
                : "flex";
        }
    }
    disconnectedCallback() {
        removeFormResetListener(this.el, this.handleFormReset);
    }
    /**
     * Sets focus on the checkbox.
     */
    async setFocus() {
        var _a;
        (_a = this.checkboxEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    getCheckboxGroupId() {
        return `ic-checkbox-${this.label}-${this.groupLabel}`.replace(/ /g, "-");
    }
    hasLabelSlot() {
        this.labelSlot = this.el.querySelector('[slot="label"]');
        return !!this.labelSlot;
    }
    arrangeLabel() {
        var _a;
        if (this.labelSlot) {
            this.label = ((_a = this.labelSlot.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
            this.labelSlot.setAttribute("for", this.getCheckboxGroupId());
            if (this.disabled) {
                this.labelSlot.setAttribute("aria-disabled", "true");
            }
        }
    }
    render() {
        const { additionalFieldDisplay, checked, disabled, displayIndeterminate, dynamicText, el, form, handleClick, hideLabel, label, name, size, theme, value, } = this;
        const inputId = this.getCheckboxGroupId();
        const isDynamicAdditionalField = additionalFieldDisplay === "dynamic";
        checked
            ? renderHiddenInput(el, value, name, disabled)
            : removeHiddenInput(el);
        const LabelContent = () => this.hasLabelSlot() ? (h("slot", { name: "label" })) : (h("ic-typography", { class: "checkbox-label", variant: "body" }, h("label", { htmlFor: inputId }, label)));
        return (h(Host, { key: 'b9aee197d23b8380b224aaa9f332d24c20406518', class: {
                "ic-checkbox-disabled": disabled,
                [`ic-checkbox-${size}`]: !!size,
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, h("div", { key: 'a027b311fa8a9cc5ef753a426fc3f73e8d6f97a4', class: "container" }, displayIndeterminate ? (h("div", { class: "indeterminate-symbol" })) : (checked && (h("svg", { class: "checkmark", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "fill-rule": "evenodd", "clip-rule": "evenodd" }, h("title", null, "checkmark icon"), h("path", { d: "M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" })))), h("input", { key: '5f3ce7e559134302640a03d2312782552e9ab018', role: "checkbox", class: {
                checkbox: true,
                checked,
                indeterminate: displayIndeterminate,
            }, ref: (el) => (this.checkboxEl = el), type: "checkbox", name: name, id: inputId, value: value, disabled: disabled, checked: checked, indeterminate: displayIndeterminate, onClick: handleClick, form: form, "aria-label": hideLabel || this.hasLabelSlot() ? label : undefined }), !hideLabel && h(LabelContent, { key: 'e75420d60d9fdc9170a7f54c96575936c8da122d' })), h("span", { key: 'c3fccdab4f27feaeab35df33734723d9f14487cc', id: `${inputId}-additional-field-description`, role: "alert", class: "sr-only" }, isDynamicAdditionalField && checked ? dynamicText : ""), isSlotUsed(el, "additional-field") && (h("div", { key: 'ceb57398c6a3dea8cec4eb4a8e0ba940f6f15c0a', class: "dynamic-container", ref: (el) => (this.additionalFieldContainer = el) }, isDynamicAdditionalField && h("div", { key: '41f097eb38e5dfd739b7de22cffb03ff3043d3e6', class: "branch-corner" }), h("div", { key: '15b7e382cf7c9bf23a68016f5f2a449ae92dc03b', class: "dynamic-field-container" }, isDynamicAdditionalField && (h("ic-typography", { key: 'd0551674a9d5d6d6d01cf842aff133072ce4d1be', variant: "caption" }, h("p", { key: '81f3345ea6625aa9d8644d5c410c7b24c1365975', class: "dynamic-text" }, isDynamicAdditionalField && checked ? dynamicText : ""))), h("div", { key: '970766071c9e70042e87e243e3415b73c189b51f', class: {
                "additional-field-wrapper": !isDynamicAdditionalField,
            } }, h("slot", { key: '3ff910a1d7a01312baeb70a965aaaa157ae66e6e', name: "additional-field" })))))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "indeterminate": ["watchIndeterminateHandler"]
    }; }
};
Checkbox.style = IcCheckboxStyle0;

export { Checkbox as ic_checkbox };

//# sourceMappingURL=ic-checkbox.entry.js.map