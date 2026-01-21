import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { t as slotHasContent, r as removeDisabledFalse, h as checkResizeObserver, o as onComponentRequiredPropUndefined, s as hasValidationStatus } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icRadioGroupCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-text-color:var(--ic-radio-button-input-field-label);--ic-input-label-helper-text-color:var(\n    --ic-radio-button-input-field-subtitle\n  );--ic-input-validation-status-text-color:var(--ic-radio-button-state-text);--ic-input-validation-error:var(--ic-radio-button-state-icon-error)}:host ic-input-label.error{--ic-input-label-text-color:var(--ic-radio-button-input-field-label-error)}:host ic-input-label.disabled{--ic-input-label-text-color:var(\n    --ic-radio-button-input-field-label-disabled\n  );--ic-input-label-helper-text-color:var(\n    --ic-radio-button-input-field-subtitle-disabled\n  )}:host ic-input-validation.show-validation{margin-top:var(--ic-space-sm)}:host(.ic-radio-group-small) ic-input-validation.show-validation{margin-top:calc(var(--ic-space-sm) / 2)}:host ic-input-label:not(.with-helper) .ic-typography-label,:host ic-input-label .helpertext{margin-bottom:var(--ic-space-sm)}:host(.ic-radio-group-small) ic-input-label:not(.with-helper) .ic-typography-label,:host(.ic-radio-group-small) ic-input-label .helpertext{margin-bottom:calc(var(--ic-space-sm) / 2)}:host ic-input-label .helpertext{display:block}:host .radio-buttons-container{display:flex;flex-direction:column;gap:var(--ic-space-xxs)}:host(.ic-radio-group-small) .radio-buttons-container{gap:var(--ic-space-xxxs)}:host .radio-buttons-container.horizontal{display:flex;flex-direction:row;gap:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.ic-radio-group-small) .radio-buttons-container.horizontal{gap:var(--ic-space-xl)}";
const IcRadioGroupStyle0 = icRadioGroupCss;

const RadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icChange = createEvent(this, "icChange", 7);
        this.resizeObserver = null;
        this.ADDITIONAL_FIELD = "additional-field";
        this.RADIO_HORIZONTAL = "horizontal";
        this.RADIO_VERTICAL = "vertical";
        this.checkedValue = "";
        this.selectedChild = -1;
        /**
         * If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /**
         * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
         */
        this.hideLabel = false;
        /**
         * The orientation of the radio buttons in the radio group. If there are more than two radio buttons in a radio group or either of the radio buttons use the `additional-field` slot, then the orientation will always be vertical.
         */
        this.orientation = "vertical";
        /**
         * If `true`, the radio group will require a value.
         */
        this.required = false;
        /**
         * The size of the radio group component.
         */
        this.size = "medium";
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
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.runResizeObserver = () => {
            this.resizeObserver = new ResizeObserver(() => {
                this.checkOrientation();
            });
            this.resizeObserver.observe(this.el);
        };
        this.handleKeyDown = (event) => {
            const additionalFields = Array.from(this.el.querySelectorAll('ic-text-field[slot="additional-field"]'));
            const activeEl = document.activeElement;
            if (additionalFields.length > 0 &&
                this.radioOptions.map((el) => slotHasContent(el, this.ADDITIONAL_FIELD)) &&
                additionalFields.map((el) => el == activeEl)) {
                return;
            }
            event.stopPropagation();
            switch (event.key) {
                case "ArrowDown":
                case "ArrowRight":
                    this.radioOptions[this.getNextItemToSelect(this.selectedChild, true)].click();
                    event.preventDefault();
                    break;
                case "ArrowUp":
                case "ArrowLeft":
                    this.radioOptions[this.getNextItemToSelect(this.selectedChild, false)].click();
                    event.preventDefault();
            }
        };
        this.getNextItemToSelect = (currentItem, movingDown) => {
            const numRadios = this.radioOptions.length - 1;
            if (currentItem < 1) {
                currentItem = 0;
            }
            let nextItem = movingDown ? currentItem + 1 : currentItem - 1;
            //check if wrap around necessary
            if (nextItem < 0) {
                nextItem = numRadios;
            }
            else if (nextItem > numRadios) {
                nextItem = 0;
            }
            //if next item is disabled then find next
            if (this.radioOptions[nextItem].disabled) {
                nextItem = this.getNextItemToSelect(nextItem, movingDown);
            }
            return nextItem;
        };
        this.addSlotChangeListener = () => {
            var _a;
            (_a = this.radioContainer) === null || _a === void 0 ? void 0 : _a.addEventListener("slotchange", this.setRadioOptions);
        };
        this.setFirstRadioOptionTabIndex = (value) => {
            this.radioOptions[0].setTabIndex(value);
        };
        this.setRadioOptions = () => {
            this.selectedChild = -1;
            this.checkedValue = "";
            this.radioOptions = Array.from(this.el.children).filter((el) => el.tagName === "IC-RADIO-OPTION");
            if (this.radioOptions.length > 0) {
                this.radioOptions.forEach((radioOption, index) => {
                    if (!radioOption.selected) {
                        radioOption.selected = this.checkedValue === radioOption.value;
                    }
                    radioOption.name = this.name;
                    radioOption.groupLabel = this.label;
                    if (radioOption.selected) {
                        this.selectedChild = index;
                        this.checkedValue = radioOption.value;
                    }
                    if (this.disabled) {
                        radioOption.disabled = true;
                    }
                });
                this.setFirstRadioOptionTabIndex(this.selectedChild > 0 ? -1 : 0);
                if (this.initialOrientation === this.RADIO_HORIZONTAL &&
                    this.radioOptions !== undefined &&
                    (this.radioOptions.length > 2 ||
                        (this.radioOptions.length === 2 &&
                            (slotHasContent(this.radioOptions[0], this.ADDITIONAL_FIELD) ||
                                slotHasContent(this.radioOptions[1], this.ADDITIONAL_FIELD))))) {
                    this.currentOrientation = this.RADIO_VERTICAL;
                }
            }
        };
    }
    watchDisabledHandler(newValue) {
        this.radioOptions.forEach((radioOption) => (radioOption.disabled = newValue));
        removeDisabledFalse(this.disabled, this.el);
    }
    orientationChangeHandler() {
        this.initialOrientation = this.orientation;
        this.checkOrientation();
    }
    watchThemeHandler(newValue) {
        this.radioOptions.forEach((radioOption) => (radioOption.theme = newValue));
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this.radioContainer) === null || _b === void 0 ? void 0 : _b.removeEventListener("slotchange", this.setRadioOptions);
    }
    componentWillLoad() {
        removeDisabledFalse(this.disabled, this.el);
        this.orientationChangeHandler();
        this.currentOrientation = this.initialOrientation;
    }
    componentDidLoad() {
        this.setRadioOptions();
        checkResizeObserver(this.runResizeObserver);
        this.addSlotChangeListener();
        onComponentRequiredPropUndefined([
            { prop: this.label, propName: "label" },
            { prop: this.name, propName: "name" },
        ], "Radio Group");
        this.watchThemeHandler(this.theme);
    }
    selectHandler({ detail, target }) {
        var _a;
        const selectedOption = target;
        if (selectedOption.parentElement === this.el) {
            this.checkedValue = detail.value;
            this.icChange.emit({
                value: this.checkedValue,
                selectedOption: {
                    radio: selectedOption,
                    textFieldValue: (_a = selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.querySelector("ic-text-field")) === null || _a === void 0 ? void 0 : _a.value,
                },
            });
            if (this.radioOptions !== undefined) {
                this.radioOptions.forEach((radioOption, index) => {
                    radioOption.selected = selectedOption === radioOption;
                    if (radioOption.selected) {
                        this.selectedChild = index;
                    }
                });
                this.setFirstRadioOptionTabIndex(this.selectedChild > 0 ? -1 : 0);
            }
        }
    }
    changeHandler() {
        var _a;
        const selectedOption = (_a = this.radioOptions) === null || _a === void 0 ? void 0 : _a.findIndex((radioOption) => radioOption.selected);
        if (selectedOption < 0) {
            this.setFirstRadioOptionTabIndex(0);
            this.selectedChild = selectedOption;
        }
    }
    checkOrientation() {
        if (this.initialOrientation === this.RADIO_HORIZONTAL) {
            let totalWidth = 0;
            if (Array.isArray(this.radioOptions) && this.radioOptions.length > 0) {
                this.radioOptions.forEach(({ clientWidth }, i, arr) => {
                    totalWidth += clientWidth;
                    if (i < arr.length - 1)
                        totalWidth += 40;
                });
            }
            else {
                totalWidth = 0;
            }
            if (this.initialOrientation == this.RADIO_HORIZONTAL) {
                if (this.radioOptions !== undefined &&
                    (this.radioOptions.length > 2 ||
                        (this.radioOptions.length === 2 &&
                            (slotHasContent(this.radioOptions[0], this.ADDITIONAL_FIELD) ||
                                slotHasContent(this.radioOptions[1], this.ADDITIONAL_FIELD))))) {
                    this.currentOrientation = this.RADIO_VERTICAL;
                }
                else {
                    if (this.radioContainer) {
                        if (totalWidth >= this.radioContainer.clientWidth) {
                            this.currentOrientation = this.RADIO_VERTICAL;
                        }
                        else if (totalWidth < this.radioContainer.clientWidth) {
                            this.currentOrientation = this.RADIO_HORIZONTAL;
                        }
                    }
                }
            }
        }
    }
    render() {
        const { currentOrientation, disabled, handleKeyDown, helperText, hideLabel, label, required, size, validationAriaLive, validationStatus, validationText, theme, } = this;
        const showValidation = hasValidationStatus(validationStatus, disabled);
        return (h(Host, { key: '4ea2e0ca7614fb4ce6563ea146f86d72707a399a', onKeyDown: handleKeyDown, class: {
                "ic-radio-group-small": size === "small",
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, h("fieldset", { key: 'ebad7a878454455a15892bf53c43bdcb914b77c4', role: "radiogroup", id: this.name, "aria-required": `${required}` }, !hideLabel && (h("legend", { key: 'aac1f37c7b1d4d5bc621bd3030dc9eef60417659' }, h("ic-input-label", { key: 'fd04e3f74c89b633996eb22e60902e988a8ac8ef', class: {
                [`${validationStatus}`]: true,
                ["disabled"]: !!disabled,
            }, label: label, helperText: helperText, required: required, disabled: disabled }, h("slot", { key: '66325d58018dff189c975e3e4fc01249b51b6b9f', name: "helper-text", slot: "helper-text" })))), h("div", { key: '6d2d332396c87b798d5d160bdb5977c0a8ad6751', class: {
                "radio-buttons-container": true,
                horizontal: currentOrientation === this.RADIO_HORIZONTAL,
            }, ref: (el) => (this.radioContainer = el) }, h("slot", { key: 'fb0a1b41503ba88ce9bda3c0bc8236ae0a7e3795' }))), h("ic-input-validation", { key: 'f9f7c2bdffd83d705149f74fe2caad93e57dd85b', class: {
                "show-validation": showValidation,
            }, ariaLiveMode: validationAriaLive, status: showValidation ? validationStatus : "", message: showValidation ? validationText : "" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "orientation": ["orientationChangeHandler"],
        "theme": ["watchThemeHandler"]
    }; }
};
RadioGroup.style = IcRadioGroupStyle0;

export { RadioGroup as ic_radio_group };

//# sourceMappingURL=ic-radio-group.entry.js.map