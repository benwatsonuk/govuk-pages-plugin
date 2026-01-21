import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { r as removeDisabledFalse, l as removeFormResetListener, i as isSlotUsed, k as addFormResetListener, o as onComponentRequiredPropUndefined, t as slotHasContent, e as isPropDefined } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icRadioOptionCss = "html.sc-ic-radio-option{line-height:1.15;-webkit-text-size-adjust:100%}body.sc-ic-radio-option{margin:0}main.sc-ic-radio-option{display:block}h1.sc-ic-radio-option{font-size:2em;margin:0.67em 0}hr.sc-ic-radio-option{box-sizing:content-box;height:0;overflow:visible}pre.sc-ic-radio-option{font-family:monospace, monospace;font-size:1em}a.sc-ic-radio-option{background-color:transparent}abbr[title].sc-ic-radio-option{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b.sc-ic-radio-option,strong.sc-ic-radio-option{font-weight:bolder}code.sc-ic-radio-option,kbd.sc-ic-radio-option,samp.sc-ic-radio-option{font-family:monospace, monospace;font-size:1em}small.sc-ic-radio-option{font-size:80%}sub.sc-ic-radio-option,sup.sc-ic-radio-option{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ic-radio-option{bottom:-0.25em}sup.sc-ic-radio-option{top:-0.5em}img.sc-ic-radio-option{border-style:none}button.sc-ic-radio-option,input.sc-ic-radio-option,optgroup.sc-ic-radio-option,select.sc-ic-radio-option,textarea.sc-ic-radio-option{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-ic-radio-option,input.sc-ic-radio-option{overflow:visible}button.sc-ic-radio-option,select.sc-ic-radio-option{text-transform:none}button.sc-ic-radio-option,[type=\"button\"].sc-ic-radio-option,[type=\"reset\"].sc-ic-radio-option,[type=\"submit\"].sc-ic-radio-option{-webkit-appearance:button}button.sc-ic-radio-option::-moz-focus-inner,[type=\"button\"].sc-ic-radio-option::-moz-focus-inner,[type=\"reset\"].sc-ic-radio-option::-moz-focus-inner,[type=\"submit\"].sc-ic-radio-option::-moz-focus-inner{border-style:none;padding:0}button.sc-ic-radio-option:-moz-focusring,[type=\"button\"].sc-ic-radio-option:-moz-focusring,[type=\"reset\"].sc-ic-radio-option:-moz-focusring,[type=\"submit\"].sc-ic-radio-option:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-ic-radio-option{padding:0.35em 0.75em 0.625em}legend.sc-ic-radio-option{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-ic-radio-option{vertical-align:baseline}textarea.sc-ic-radio-option{overflow:auto}[type=\"checkbox\"].sc-ic-radio-option,[type=\"radio\"].sc-ic-radio-option{box-sizing:border-box;padding:0}[type=\"number\"].sc-ic-radio-option::-webkit-inner-spin-button,[type=\"number\"].sc-ic-radio-option::-webkit-outer-spin-button{height:auto}[type=\"search\"].sc-ic-radio-option{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"].sc-ic-radio-option::-webkit-search-decoration{-webkit-appearance:none}.sc-ic-radio-option::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details.sc-ic-radio-option{display:block}summary.sc-ic-radio-option{display:list-item}template.sc-ic-radio-option{display:none}[hidden].sc-ic-radio-option{display:none}html.sc-ic-radio-option,body.sc-ic-radio-option,div.sc-ic-radio-option,span.sc-ic-radio-option,applet.sc-ic-radio-option,object.sc-ic-radio-option,iframe.sc-ic-radio-option,h1.sc-ic-radio-option,h2.sc-ic-radio-option,h3.sc-ic-radio-option,h4.sc-ic-radio-option,h5.sc-ic-radio-option,h6.sc-ic-radio-option,p.sc-ic-radio-option,blockquote.sc-ic-radio-option,pre.sc-ic-radio-option,a.sc-ic-radio-option,abbr.sc-ic-radio-option,acronym.sc-ic-radio-option,address.sc-ic-radio-option,big.sc-ic-radio-option,cite.sc-ic-radio-option,code.sc-ic-radio-option,del.sc-ic-radio-option,dfn.sc-ic-radio-option,em.sc-ic-radio-option,img.sc-ic-radio-option,ins.sc-ic-radio-option,kbd.sc-ic-radio-option,q.sc-ic-radio-option,s.sc-ic-radio-option,samp.sc-ic-radio-option,small.sc-ic-radio-option,strike.sc-ic-radio-option,strong.sc-ic-radio-option,sub.sc-ic-radio-option,sup.sc-ic-radio-option,tt.sc-ic-radio-option,var.sc-ic-radio-option,b.sc-ic-radio-option,u.sc-ic-radio-option,i.sc-ic-radio-option,center.sc-ic-radio-option,dl.sc-ic-radio-option,dt.sc-ic-radio-option,dd.sc-ic-radio-option,ol.sc-ic-radio-option,ul.sc-ic-radio-option,li.sc-ic-radio-option,fieldset.sc-ic-radio-option,form.sc-ic-radio-option,label.sc-ic-radio-option,legend.sc-ic-radio-option,table.sc-ic-radio-option,caption.sc-ic-radio-option,tbody.sc-ic-radio-option,tfoot.sc-ic-radio-option,thead.sc-ic-radio-option,tr.sc-ic-radio-option,th.sc-ic-radio-option,td.sc-ic-radio-option,article.sc-ic-radio-option,aside.sc-ic-radio-option,canvas.sc-ic-radio-option,details.sc-ic-radio-option,embed.sc-ic-radio-option,figure.sc-ic-radio-option,figcaption.sc-ic-radio-option,footer.sc-ic-radio-option,header.sc-ic-radio-option,hgroup.sc-ic-radio-option,menu.sc-ic-radio-option,nav.sc-ic-radio-option,output.sc-ic-radio-option,ruby.sc-ic-radio-option,section.sc-ic-radio-option,summary.sc-ic-radio-option,time.sc-ic-radio-option,mark.sc-ic-radio-option,audio.sc-ic-radio-option,video.sc-ic-radio-option{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}.sc-ic-radio-option-h{display:flex;flex-direction:column;width:-moz-fit-content;width:fit-content}.sc-ic-radio-option-h .additional-field-wrapper-static.sc-ic-radio-option-s>[slot=\"additional-field\"]{margin-top:calc(var(--ic-space-sm) / 2);margin-left:var(--ic-space-xl)}.ic-radio-option-disabled.sc-ic-radio-option-h,.ic-radio-option-disabled.sc-ic-radio-option-h .radio-label.sc-ic-radio-option{--ic-typography-color:var(--ic-radio-button-text-option-disabled)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:focus+span.checkmark.sc-ic-radio-option,.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:hover input.sc-ic-radio-option:focus+span.checkmark.sc-ic-radio-option,.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:active input.sc-ic-radio-option:focus+span.checkmark.sc-ic-radio-option,.sc-ic-radio-option-h:focus .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:checked+span.checkmark.sc-ic-radio-option{box-shadow:var(--ic-border-focus)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option{display:grid;grid-template-columns:min-content auto;position:relative;cursor:pointer;align-items:center;margin:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-xxs)}.ic-radio-option-small.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option{margin:0 0 0 var(--ic-space-xxs)}.sc-ic-radio-option-h .radio-option-container.disabled.sc-ic-radio-option,.sc-ic-radio-option-h .radio-option-container.disabled.sc-ic-radio-option input.sc-ic-radio-option:disabled{cursor:default}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;position:absolute;cursor:pointer;height:var(--ic-space-lg);width:var(--ic-space-lg);border-radius:50%;border:none}.ic-radio-option-small.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option{height:var(--ic-space-md);width:var(--ic-space-md)}.sc-ic-radio-option-h .checkmark.sc-ic-radio-option{display:block;position:relative;top:0;left:0;height:var(--ic-space-lg);width:var(--ic-space-lg);background-color:var(--ic-radio-button-background-default);border:var(--ic-space-1px) solid var(--ic-radio-button-border-default);border-radius:50%;transition:var(--ic-easing-transition-fast);box-sizing:border-box}.ic-radio-option-small.sc-ic-radio-option-h .checkmark.sc-ic-radio-option{height:var(--ic-space-md);width:var(--ic-space-md)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option::after{display:inline-block}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:hover input.sc-ic-radio-option~.checkmark.sc-ic-radio-option{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-hover);border:var(--ic-border-width) solid var(--ic-radio-button-default-hover)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:hover input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-hover);border:0.125rem solid var(--ic-radio-button-default-hover)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:hover:not(.disabled) input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option::after{background-color:var(--ic-radio-button-default-hover)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:active input.sc-ic-radio-option~.checkmark.sc-ic-radio-option{box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-pressed);border:var(--ic-border-width) solid var(--ic-radio-button-default-pressed)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:active input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option{border:0.125rem solid var(--ic-radio-button-default-pressed);box-shadow:0 0 0 0.25rem var(--ic-radio-button-active-pressed)}.ic-radio-option-small.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option{border-width:var(--ic-space-1px)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:active input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option::after{background-color:var(--ic-radio-button-default-pressed)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option{border:0.125rem solid var(--ic-radio-button-default-active)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:checked:disabled~.checkmark.sc-ic-radio-option{border:0.125rem solid var(--ic-radio-button-border-disabled)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:disabled~.checkmark.sc-ic-radio-option{border:var(--ic-border-width) dashed var(--ic-radio-button-border-disabled)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:disabled~.checkmark.sc-ic-radio-option::after{background:var(--ic-radio-button-disabled)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:hover input.sc-ic-radio-option:disabled~.checkmark.sc-ic-radio-option{box-shadow:none;border:0.125rem solid none}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:active input.sc-ic-radio-option:disabled~.checkmark.sc-ic-radio-option::after{background-color:var(--ic-radio-button-disabled)}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option .checkmark.sc-ic-radio-option::after{content:\"\";position:absolute;display:none;top:calc(50% - var(--ic-space-xs));left:calc(50% - var(--ic-space-xs));width:var(--ic-space-md);height:var(--ic-space-md);border-radius:50%;background:var(--ic-radio-button-default-active)}.ic-radio-option-small.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option .checkmark.sc-ic-radio-option::after{top:50%;left:50%;width:0.625rem;height:0.625rem;border-radius:50%;background:var(--ic-radio-button-default-active);transform:translate(-50%, -50%)}.sc-ic-radio-option-h .radio-label.sc-ic-radio-option{margin-left:var(--ic-space-md);--ic-typography-color:var(--ic-radio-button-text-option)}.ic-radio-option-small.sc-ic-radio-option-h .radio-label.sc-ic-radio-option{margin-left:var(--ic-space-xs)}.sc-ic-radio-option-h .additional-field-wrapper-static.sc-ic-radio-option{margin-left:var(--ic-space-xs)}.sc-ic-radio-option-h .branch-corner.sc-ic-radio-option{color:var(--ic-radio-button-required-bar);height:var(--ic-space-md);width:var(--ic-space-xl);border-radius:0 0 0 0.188rem;border-bottom:0.125rem solid var(--ic-radio-button-required-bar);border-left:0.125rem solid var(--ic-radio-button-required-bar);margin-left:calc(-1 * var(--ic-space-1px))}.sc-ic-radio-option-h .dynamic-container.sc-ic-radio-option{display:flex;position:relative;margin:var(--ic-space-xxs) 0 var(--ic-space-xxs) var(--ic-space-md);gap:var(--ic-space-xs)}.ic-radio-option-small.sc-ic-radio-option-h .dynamic-container.sc-ic-radio-option{margin-left:12px}.sc-ic-radio-option-h .dynamic-container.hidden.sc-ic-radio-option{display:none}.sc-ic-radio-option-h .dynamic-text.sc-ic-radio-option{color:var(--ic-radio-button-required-text);--ic-typography-color:var(--ic-radio-button-required-text);margin-top:calc(var(--ic-space-sm) / 2);margin-bottom:var(--ic-space-xs);border-radius:2%}@media (max-width: 576px){.sc-ic-radio-option-h .additional-field-wrapper-dynamic.sc-ic-radio-option-s>ic-text-field,.sc-ic-radio-option-h .additional-field-wrapper-static.sc-ic-radio-option-s>ic-text-field{--input-width:100%}}@media (forced-colors: active){.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option,.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:active input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option{border-color:Highlight}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option::after,.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:active input.sc-ic-radio-option:checked~.checkmark.sc-ic-radio-option::after{background-color:Highlight}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:disabled~.checkmark.sc-ic-radio-option,.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:checked:disabled~.checkmark.sc-ic-radio-option{border-color:GrayText}.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option input.sc-ic-radio-option:disabled~.checkmark.sc-ic-radio-option::after,.sc-ic-radio-option-h .radio-option-container.sc-ic-radio-option:active input.sc-ic-radio-option:disabled~.checkmark.sc-ic-radio-option::after{background-color:GrayText}}.sc-ic-radio-option-h input[type=\"radio\"].sc-ic-radio-option:dir(rtl){right:0}.sc-ic-radio-option-h .radio-label.sc-ic-radio-option:dir(rtl){padding-right:var(--ic-space-sm);padding-left:0}.sc-ic-radio-option-h .branch-corner.sc-ic-radio-option:dir(rtl){border-radius:0 0 0.188rem;border-right:0.125rem solid var(--ic-action-default);border-left:none}.sc-ic-radio-option-h .dynamic-container.sc-ic-radio-option:dir(rtl){margin:var(--ic-space-xxxs) var(--ic-space-sm) var(--ic-space-xxs) 0}";
const IcRadioOptionStyle0 = icRadioOptionCss;

const ADDITIONAL_FIELD = "additional-field";
const RadioOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icCheck = createEvent(this, "icCheck", 7);
        this.icSelectedChange = createEvent(this, "icSelectedChange", 7);
        this.defaultRadioValue = "";
        this.hasAdditionalField = false;
        this.skipFocus = false;
        /**
         * The style of additionalField that will be displayed if used.
         */
        this.additionalFieldDisplay = "static";
        /**
         * If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /**
         * The text to be displayed when dynamic.
         */
        this.dynamicText = "This selection requires additional answers";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * If `true`, the radio option will be displayed in a selected state.
         */
        this.selected = false;
        this.initiallySelected = this.selected;
        this.handleClick = (event) => {
            var _a, _b;
            const clickedAdditionalField = event.target.matches(".dynamic-container:not(ic-radio-option, .checkmark), .dynamic-container *:not(ic-radio-option, .checkmark)");
            if (!this.disabled &&
                (!clickedAdditionalField || event.target === this.radioElement)) {
                event.stopPropagation();
                if (this.skipFocus === false) {
                    (_a = this.radioElement) === null || _a === void 0 ? void 0 : _a.focus();
                }
                this.skipFocus = false;
                if (this.hasAdditionalField) {
                    this.value = ((_b = this.getAdditionalField()) === null || _b === void 0 ? void 0 : _b.value) || this.defaultRadioValue;
                }
                this.icCheck.emit({
                    value: this.value,
                });
            }
        };
        this.handleKeyDown = (event) => {
            const preventPropagationElements = ["IC-DATE-INPUT", "IC-DATE-PICKER"];
            if (this.getAdditionalField() == document.activeElement &&
                preventPropagationElements.includes(this.getAdditionalField().nodeName)) {
                event.stopPropagation();
            }
        };
        this.handleFormReset = () => {
            this.skipFocus = true;
            this.selected = this.initiallySelected;
        };
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    watchSelectedHandler() {
        this.icSelectedChange.emit();
    }
    handleCheck(ev) {
        if (this.additionalFieldDisplay === "static" &&
            Array.from(this.el.querySelectorAll("ic-radio-option")).includes(ev.target))
            this.icCheck.emit({ value: this.value });
    }
    disconnectedCallback() {
        removeFormResetListener(this.el, this.handleFormReset);
    }
    componentWillLoad() {
        if (isSlotUsed(this.el, ADDITIONAL_FIELD)) {
            this.hasAdditionalField = true;
            this.getAdditionalField();
        }
        this.defaultRadioValue = this.value;
        addFormResetListener(this.el, this.handleFormReset);
        removeDisabledFalse(this.disabled, this.el);
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.value, propName: "value" }], "Radio Option");
    }
    componentWillRender() {
        const hasSlot = slotHasContent(this.el, ADDITIONAL_FIELD);
        if (hasSlot && !this.hasAdditionalField) {
            this.hasAdditionalField = true;
            this.getAdditionalField();
        }
        else if (!hasSlot && this.hasAdditionalField) {
            this.hasAdditionalField = false;
        }
    }
    componentDidRender() {
        if (this.additionalFieldDisplay === "static") {
            const additionalField = this.getAdditionalField();
            if (!this.selected || this.disabled) {
                additionalField === null || additionalField === void 0 ? void 0 : additionalField.setAttribute("disabled", "");
            }
            else {
                additionalField === null || additionalField === void 0 ? void 0 : additionalField.removeAttribute("disabled");
            }
        }
    }
    additionalFieldValueHandler(event) {
        if (this.selected) {
            this.value = event.detail.value || this.defaultRadioValue;
            this.icCheck.emit({
                value: this.value,
            });
        }
        event.stopImmediatePropagation();
    }
    /**
     * Sets focus on the radio option.
     */
    async setFocus() {
        var _a;
        (_a = this.radioElement) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * @internal Sets the tabIndex of the radio option.
     */
    async setTabIndex(value) {
        var _a;
        (_a = this.radioElement) === null || _a === void 0 ? void 0 : _a.setAttribute("tabIndex", value.toString());
    }
    getAdditionalField() {
        const additionalField = this.el.querySelector('ic-text-field[slot="additional-field"]');
        if (additionalField)
            additionalField.hiddenInput = false;
        return additionalField;
    }
    render() {
        var _a, _b;
        const { additionalFieldDisplay, disabled, dynamicText, form, groupLabel, handleClick, handleKeyDown, hasAdditionalField, label, name, selected, value, theme, } = this;
        const id = `ic-radio-option-${isPropDefined(label) || value}-${groupLabel}`;
        return (h(Host, { key: '0a7177993a68c85ed54198b8ee213811aa2e130a', onClick: handleClick, onKeyDown: handleKeyDown, class: {
                ["ic-radio-option-disabled"]: !!disabled,
                [`ic-theme-${theme}`]: theme !== "inherit",
                ["ic-radio-option-small"]: ((_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) === "IC-RADIO-GROUP" &&
                    ((_b = this.el.parentElement) === null || _b === void 0 ? void 0 : _b.className.includes("ic-radio-group-small")),
            } }, h("div", { key: '64bac9a6440919352131dc732648034a90d7e92e', class: { "radio-option-container": true, disabled: !!disabled } }, h("div", { key: '419dc17817ca4c9945025268e0e00de83db01790' }, h("input", { key: '0885bab10d42cd69eda2e0d78702c6c2afcff615', tabindex: selected ? "0" : "-1", type: "radio", name: name, id: id, value: value, disabled: disabled, checked: selected, ref: (el) => (this.radioElement = el), form: form }), h("span", { key: 'df142dc79e23d240abd15f5088d703b6d388456b', class: "checkmark" })), h("ic-typography", { key: '4d5a779bbef4ccb65fbe7ebf6b3aeceafb9227e0', class: "radio-label", variant: "body" }, h("label", { key: '6d2778eb36c462f3c7fa25ed9ae5d8733b0fcb20', htmlFor: id }, label))), hasAdditionalField && (h("div", { key: '9772fd4d064854c3db492f430b90098eccd13701', class: {
                "dynamic-container": true,
                hidden: additionalFieldDisplay === "dynamic" && !selected,
            } }, additionalFieldDisplay === "dynamic" && (h("div", { key: 'a237b8043bf912d5fb1be67014ae0bde41c5a2a4', class: "branch-corner" })), h("div", { key: '70524014fa4d75197460d321f47824ab20503806' }, additionalFieldDisplay === "dynamic" && (h("ic-typography", { key: '2f652884ff6ac334fd6cb688e52d05d0bdabf3de', variant: "caption", role: "alert" }, h("p", { key: '36cc2915b063c8d85e61dd18a3c384460b996d4f', class: "dynamic-text" }, dynamicText))), h("div", { key: 'd8386ddb6c70fd7893544d3c6d1720b349bb378b', class: {
                [`additional-field-wrapper-${additionalFieldDisplay}`]: true,
            } }, h("slot", { key: 'f9b72315938873b57c52af87730ee72b24a413af', name: ADDITIONAL_FIELD })))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "selected": ["watchSelectedHandler"]
    }; }
};
RadioOption.style = IcRadioOptionStyle0;

export { RadioOption as ic_radio_option };

//# sourceMappingURL=ic-radio-option.entry.js.map