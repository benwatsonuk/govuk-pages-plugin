import { r as registerInstance, c as createEvent, f as forceUpdate, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { L as isEmptyString, F as checkSlotInChildMutations, r as removeDisabledFalse, E as debounceEvent, l as removeFormResetListener, w as inheritAttributes, k as addFormResetListener, o as onComponentRequiredPropUndefined, K as IcInformationStatus, q as getInputDescribedByText, m as renderHiddenInput, n as removeHiddenInput, i as isSlotUsed } from './helpers-dcedb279.js';
import { e as IGNORED_KEYBOARD_CHARACTERS, I as IC_INHERITED_ARIA } from './constants-7960cba4.js';

const icTextFieldCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-input-label-helpertext-padding:var(--ic-space-xs);--border-color:var(--ic-text-field-border-neutral);--border-color-hover:var(--ic-text-field-border-neutral-hover);--border-color-pressed:var(--ic-text-field-border-neutral-pressed);--border-color-disabled:var(--ic-text-field-border-disabled);--border-color-error:var(--ic-text-field-border-error);--border-color-error-hover:var(--ic-text-field-border-error-hover);--border-color-error-pressed:var(--ic-text-field-border-error-pressed);--border-color-success:var(--ic-text-field-border-success);--border-color-success-hover:var(--ic-text-field-border-success-hover);--border-color-success-pressed:var(--ic-text-field-border-success-pressed);--border-color-warning:var(--ic-text-field-border-warning);--border-color-warning-hover:var(--ic-text-field-border-warning-hover);--border-color-warning-pressed:var(--ic-text-field-border-warning-pressed);--ic-input-label-text-color:var(--ic-text-field-label);--ic-input-label-helper-text-color:var(--ic-text-field-subtitle);--ic-input-validation-status-text-color:var(--ic-text-field-state-text);--ic-input-validation-error:var(--ic-text-field-state-icon-error);--ic-input-validation-warning-icon-color:var(\n    --ic-text-field-state-icon-warning\n  );--ic-input-validation-success-icon-color:var(\n    --ic-text-field-state-icon-success\n  );--ic-input-component-container-success-icon-inline-color:var(\n    --ic-text-field-state-icon-success\n  )}:host(.ic-text-field-disabled){--ic-input-label-text-color:var(--ic-text-field-label-disabled);--ic-input-label-helper-text-color:var(--ic-text-field-subtitle-disabled);--text-field-placeholder-color:var(\n    --ic-text-field-text-area-placeholder-text-disabled\n  )}:host(.ic-text-field-full-width){width:100%}::-moz-placeholder{color:var(\n    --text-field-placeholder-color,\n    var(--ic-text-field-placeholder-text)\n  );opacity:1}::placeholder{color:var(\n    --text-field-placeholder-color,\n    var(--ic-text-field-placeholder-text)\n  );opacity:1}input,textarea{border:0;border-radius:var(--ic-border-radius);color:var(--text-field-text-color, var(--ic-text-field-text));background-color:var(--input-bg-color, var(--ic-text-field-background));line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs);caret-color:var(\n    --text-field-typing-cursor,\n    var(--ic-text-field-typing-cursor)\n  )}textarea{min-height:var(--ic-space-lg);resize:vertical;padding-top:0.375rem}input:focus,textarea:focus{border:0;outline:0}input:disabled,textarea:disabled{color:var(\n    --text-field-disabled-text-color,\n    var(--ic-text-field-text-disabled)\n  )}input.readonly,textarea.readonly{color:var(--ic-text-field-read-only-input-text-internal);background:transparent}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=\"number\"]{-moz-appearance:textfield}textarea.no-resize{resize:none}.char-count-text{--ic-typography-color:var(--ic-text-field-character-limit);padding-right:var(--ic-space-xxxs)}:host(.ic-text-field-disabled) .char-count-text{--ic-typography-color:var(--ic-text-field-character-limit-disabled)}.no-left-pad{padding-left:0}::slotted([slot=\"icon\"]){fill:var(--ic-text-field-text-disabled)}.has-value ::slotted([slot=\"icon\"]){fill:var(--ic-text-field-input-internal-icon)}.char-count{margin-right:calc(-1 * var(--ic-space-xxxs))}.remaining-char-count-desc{position:absolute;left:-9999px}.show-validation{margin-top:var(--ic-space-xs)}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration,input[type=\"search\"]::-webkit-search-results-button,input[type=\"search\"]::-webkit-search-results-decoration{display:none}input[type=\"search\"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media (forced-colors: active){input.readonly,textarea.readonly{color:canvastext}.has-value ::slotted([slot=\"icon\"]){fill:currentcolor}}";
const IcTextFieldStyle0 = icTextFieldCss;

let inputIds = 0;
const MUTABLE_ATTRIBUTES = [...IC_INHERITED_ARIA, "title"];
const TextField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.getValidationText = createEvent(this, "getValidationText", 7);
        this.icBlur = createEvent(this, "icBlur", 7);
        this.icChange = createEvent(this, "icChange", 7);
        this.icFocus = createEvent(this, "icFocus", 7);
        this.icInput = createEvent(this, "icInput", 7);
        this.icKeydown = createEvent(this, "icKeydown", 7);
        this.icScroll = createEvent(this, "icScroll", 7);
        this.inheritedAttributes = {};
        this.hostMutationObserver = null;
        this.numChars = 0;
        this.maxCharactersReached = false;
        this.maxCharactersWarning = false;
        this.minCharactersUnattained = false;
        this.maxValueExceeded = false;
        this.minValueUnattained = false;
        this.isFocussed = false;
        /**
         * The automatic capitalisation of the text value as it is entered/edited by the user.
         * Available options: "off", "none", "on", "sentences", "words", "characters".
         */
        this.autocapitalize = "off";
        /**
         * The state of autocompletion the browser can apply on the text value.
         */
        this.autocomplete = "off";
        /**
         * The state of autocorrection the browser can apply when the user is entering/editing the text value.
         */
        this.autocorrect = "off";
        /**
         * If `true`, the form control will have input focus when the page loads.
         */
        this.autofocus = false;
        /**
         * If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /**
         * Specify whether the text field fills the full width of the container.
         * If `true`, this overrides the --input-width CSS variable.
         */
        this.fullWidth = false;
        /**
         * The helper text that will be displayed for additional field guidance.
         */
        this.helperText = "";
        /**
         * If `true`, the character count which is displayed when `maxCharacters` is set will be visually hidden.
         */
        this.hideCharCount = false;
        /**
         * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
         */
        this.hideLabel = false;
        /**
         * @internal If `true`, the hidden form input will stop rendering for form submission.
         */
        this.hiddenInput = true;
        /**
         * The ID for the input.
         */
        this.inputId = `ic-text-field-input-${inputIds++}`;
        /**
         * A hint to the browser for which keyboard to display.
         * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
         * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        this.inputmode = "text";
        /**
         * The count of characters in the field. Will display a warning if the bound is reached. (NOTE: If the value of the text field has been set using the `value` prop, it will be truncated to this number of characters)
         */
        this.maxCharacters = 0;
        /**
         * The text to display as the warning message when the maximum number of characters (the `maxCharacters` prop value) is reached.
         */
        // prettier-ignore
        this.maxCharactersMessage = `Maximum input is ${this.maxCharacters} characters`;
        /**
         * The text to display as the error message when the maximum value (the `max` prop value) has been exceeded.
         */
        this.maxMessage = `Maximum value of ${this.max} exceeded`;
        /**
         * The minimum number of characters that can be entered in the field.
         */
        this.minCharacters = 0;
        /**
         * The text to display as the error message when the minimum number of characters (the `minCharacters` prop value) has not been met.
         */
        // prettier-ignore
        this.minCharactersMessage = `Minimum input is ${this.minCharacters} characters`;
        /**
         * The text to display as the error message when the minimum value (the `min` prop value) has not been met.
         */
        this.minMessage = `Minimum value of ${this.min} not met`;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * The placeholder value to be displayed.
         */
        this.placeholder = "";
        /**
         * If `true`, the read only state will be set.
         */
        this.readonly = false;
        /**
         * If `true`, the input will require a value.
         */
        this.required = false;
        /**
         * If `true`, the multiline text area will be resizeable.
         */
        this.resize = false;
        /**
         * The number of rows to transform the text field into a text area with a specific height.
         */
        this.rows = 1;
        /**
         * The size of the text field component.
         */
        this.size = "medium";
        /**
         * If `true`, the value of the text field will have its spelling and grammar checked.
         */
        this.spellcheck = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * @internal If `true`, an ellipsis will be displayed at the end of the value if the value is longer than the container.
         */
        this.truncateValue = false;
        /**
         * The type of control to display. The default type is text.
         */
        this.type = "text";
        /**
         * The value of the `aria-live` attribute on the validation message. When set to "default", the `aria-live` value will be handled automatically, e.g. "assertive" for `validation-status="error"`.
         */
        this.validationAriaLive = "default";
        /**
         * If `true`, the icon in input control will be displayed - only applies when validationStatus ='success'.
         */
        this.validationInline = false;
        /**
         *  @internal If `true`, the validation will display inline.
         */
        this.validationInlineInternal = false;
        /**
         * The validation state - e.g. 'error' | 'warning' | 'success'.
         */
        this.validationStatus = "";
        /**
         * The text to display as the validation message.
         */
        this.validationText = "";
        /**
         * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
         */
        this.debounce = 0;
        /**
         * The value of the text field.
         */
        this.value = "";
        this.initialValue = this.value;
        this.checkChildHydration = () => {
            var _a, _b;
            if (this.hideLabel ||
                ((_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ic-typography")) === null || _b === void 0 ? void 0 : _b.classList.contains("hydrated"))) {
                this.setFocus();
                clearInterval(this.interval);
            }
        };
        this.getNumberOfCharacters = (value) => value !== null && value !== undefined ? value.length : 0;
        this.getMaxValueExceeded = (value) => {
            this.numChars = this.getNumberOfCharacters(value);
            if (this.type === "number") {
                this.minValueUnattained = !!value && Number(value) < Number(this.min);
                this.maxValueExceeded = Number(value) > Number(this.max);
            }
        };
        this.getMaxCharactersReached = (value) => {
            this.numChars = this.getNumberOfCharacters(value);
            this.maxCharactersReached =
                this.maxCharacters > 0 && this.numChars >= this.maxCharacters;
            if (this.maxCharactersWarning && !this.maxCharactersReached) {
                this.maxCharactersWarning = false;
            }
        };
        this.onInput = (ev) => {
            this.value = ev.target.value;
            this.icInput.emit({ value: this.value });
        };
        this.onBlur = (ev) => {
            const target = ev.target;
            target.removeEventListener("wheel", this.onWheel);
            const { value } = target;
            this.numChars = value.length;
            this.minCharactersUnattained =
                this.minCharacters > 0 && this.numChars < this.minCharacters;
            this.icBlur.emit({ value });
            this.isFocussed = false;
        };
        this.onFocus = (ev) => {
            const target = ev.target;
            target.addEventListener("wheel", this.onWheel);
            this.icFocus.emit({ value: target.value });
            this.isFocussed = true;
        };
        this.onTextAreaScroll = () => {
            this.icScroll.emit();
        };
        this.onWheel = (ev) => {
            const target = ev.target;
            if (target.type === "number") {
                target.blur();
                setTimeout(() => {
                    target.focus();
                }, 0);
            }
        };
        this.hasStatus = (status) => status !== "" && !this.disabled;
        this.handleFormReset = () => {
            this.value = this.initialValue;
        };
        this.showValidationMargin = () => {
            const maxNumChars = this.readonly ? 0 : this.maxCharacters;
            const emptyString = isEmptyString(this.validationStatus) ||
                isEmptyString(this.validationText);
            const valueOutsideRange = this.minValueUnattained || this.maxValueExceeded;
            const charsOutsideRange = maxNumChars > 0 || this.minCharactersUnattained;
            return ((!emptyString || valueOutsideRange || charsOutsideRange) &&
                !this.validationInlineInternal);
        };
        // triggered when attributes of host element change
        this.hostMutationCallback = (mutationList) => {
            let forceComponentUpdate = false;
            mutationList.forEach(({ attributeName, type, addedNodes, removedNodes }) => {
                if (attributeName && MUTABLE_ATTRIBUTES.includes(attributeName)) {
                    const attribute = this.el.getAttribute(attributeName);
                    if (attribute) {
                        this.inheritedAttributes[attributeName] = attribute;
                    }
                    forceComponentUpdate = true;
                }
                else if (type === "childList") {
                    forceComponentUpdate = checkSlotInChildMutations(addedNodes, removedNodes, "icon");
                }
            });
            if (forceComponentUpdate) {
                forceUpdate(this);
            }
        };
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    debounceChanged() {
        this.icChange = debounceEvent(this.icChange, this.debounce);
    }
    watchValueHandler(newValue) {
        let value;
        if (this.maxCharacters > 0) {
            value = newValue.substring(0, this.maxCharacters);
            if (value.length < newValue.length) {
                this.maxCharactersWarning = true;
            }
            this.value = value;
        }
        else {
            value = newValue;
        }
        if (this.inputEl && this.inputEl.value !== value) {
            this.inputEl.value = value;
        }
        this.getMaxValueExceeded(value);
        this.getMaxCharactersReached(value);
        this.icChange.emit({ value });
    }
    connectedCallback() {
        this.debounceChanged();
    }
    disconnectedCallback() {
        var _a;
        removeFormResetListener(this.el, this.handleFormReset);
        (_a = this.hostMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentWillLoad() {
        if (this.value !== this.initialValue) {
            this.watchValueHandler(this.value);
        }
        else if (this.maxCharacters > 0) {
            this.value = this.value.substring(0, this.maxCharacters);
        }
        this.getMaxValueExceeded(this.value);
        this.getMaxCharactersReached(this.value);
        this.inheritedAttributes = inheritAttributes(this.el, MUTABLE_ATTRIBUTES);
        if (this.readonly) {
            this.maxValueExceeded = false;
            this.minValueUnattained = false;
        }
        addFormResetListener(this.el, this.handleFormReset);
        removeDisabledFalse(this.disabled, this.el);
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Text Field");
        if (this.validationInlineInternal) {
            this.getValidationText.emit({ value: this.validationText });
        }
        this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
        this.hostMutationObserver.observe(this.el, {
            attributes: true,
            childList: true,
        });
        if (this.autofocus && !this.disabled && !this.readonly) {
            this.interval = setInterval(this.checkChildHydration, 50);
        }
    }
    handleKeyDown(ev) {
        var _a, _b;
        this.icKeydown.emit({
            event: ev,
            cursorPosition: (_a = this.inputEl.selectionStart) !== null && _a !== void 0 ? _a : 0,
            selectionEnd: (_b = this.inputEl.selectionEnd) !== null && _b !== void 0 ? _b : 0,
        });
        if (!ev.ctrlKey && !IGNORED_KEYBOARD_CHARACTERS.includes(ev.key)) {
            this.maxCharactersWarning = this.maxCharactersReached;
        }
    }
    /**
     * Sets focus on the native `input`.
     */
    async setFocus() {
        var _a;
        (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    render() {
        const { inputId, name, label, required, size, placeholder, helperText, hideCharCount, rows, resize, disabled, value, min, max, numChars, readonly, maxCharacters, maxCharactersMessage, maxCharactersWarning, maxCharactersReached, maxMessage, minCharacters, minCharactersMessage, minCharactersUnattained, minMessage, minValueUnattained, maxValueExceeded, validationAriaLive, validationStatus, validationText, validationInline, validationInlineInternal, spellcheck, inputmode, fullWidth, truncateValue, hiddenInput, theme, hideLabel, type, autocapitalize, ariaActiveDescendant, inheritedAttributes, ariaExpanded, ariaOwns, autocomplete, role, isFocussed, } = this;
        const el = this.el;
        const disabledMode = readonly || disabled;
        const currentStatus = maxValueExceeded ||
            minValueUnattained ||
            minCharactersUnattained ||
            maxCharactersWarning
            ? maxCharactersWarning
                ? IcInformationStatus.Warning
                : IcInformationStatus.Error
            : validationStatus;
        const currentValidationText = maxCharactersWarning
            ? maxCharactersMessage
            : maxValueExceeded
                ? maxMessage
                : minValueUnattained
                    ? minMessage
                    : minCharactersUnattained
                        ? minCharactersMessage
                        : validationText;
        const maxNumChars = readonly ? 0 : maxCharacters;
        const messageAriaLive = validationAriaLive === "default"
            ? maxCharactersWarning ||
                maxValueExceeded ||
                minValueUnattained ||
                currentStatus === IcInformationStatus.Error
                ? "assertive"
                : "polite"
            : validationAriaLive;
        const showStatusText = this.hasStatus(currentStatus) &&
            !(currentStatus == IcInformationStatus.Success && validationInline) &&
            !validationInlineInternal;
        const multiline = rows > 1;
        const hiddenCharCountDescId = maxCharacters > 0 ? `${inputId}-char-count-desc` : "";
        const charsRemaining = maxNumChars - numChars;
        const remainingCharCountDescId = maxCharacters > 0 ? `${inputId}-remaining-char-count-desc` : "";
        const remainingCharCountDesc = `${charsRemaining} character${charsRemaining === 1 ? "" : "s"} remaining.`;
        const describedBy = `${getInputDescribedByText(this.el, inputId, helperText !== "", showStatusText)} ${hiddenCharCountDescId} ${numChars > 0 ? remainingCharCountDescId : ""}`.trim();
        const disabledText = disabledMode && !readonly;
        const showLeftIcon = !!this.el.querySelector(`[slot="icon"]`) && !disabledText;
        const invalid = `${currentStatus === IcInformationStatus.Error}`;
        hiddenInput
            ? renderHiddenInput(this.el, value, name, disabledMode)
            : removeHiddenInput(this.el);
        return (h(Host, { key: '4a38a5d8bd42f37b2ab1e9f3af485695b6185a8a', class: {
                "ic-text-field-full-width": fullWidth,
                "ic-text-field-disabled": disabledMode,
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, h("ic-input-container", { key: 'a7da6f94bac334322b00b223cfb3462d026fbba1', readonly: readonly, disabled: disabledMode }, !hideLabel && (h("ic-input-label", { key: '97a5cc41a79cfc56c3e8e309154cbcc015bbadad', for: inputId, label: label, helperText: helperText, required: required, disabled: disabledText, readonly: readonly }, h("slot", { key: 'd9994cb1bb7218712bbed976057a3ca8d9ad3c2b', name: "helper-text", slot: "helper-text" }))), h("ic-input-component-container", { key: '0d3a988b563b2f9f2033b52a75f4fd5e27056ba8', size: size, validationStatus: currentStatus, multiLine: multiline, disabled: disabledMode, readonly: readonly, validationInline: validationInline, fullWidth: fullWidth }, showLeftIcon && (h("span", { key: '319fa22903ab0b2c2315377abb9f9e7bad15f221', class: {
                readonly,
                "has-value": this.getNumberOfCharacters(value) > 0,
            }, slot: "left-icon" }, h("slot", { key: '1224a807133d300df0a6070c998260ece29e8c80', name: "icon" }))), !multiline ? (h("input", Object.assign({ id: inputId, name: name, ref: (el) => (this.inputEl = el), type: type, min: min, max: max, value: value, class: {
                "no-left-pad": !showLeftIcon && readonly,
                readonly,
                "truncate-value": truncateValue,
            }, placeholder: placeholder ? placeholder : "", required: required, disabled: disabledMode, readonly: readonly, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, "aria-label": label, "aria-describedby": describedBy, "aria-invalid": invalid, "aria-activedescendant": ariaActiveDescendant, "aria-expanded": ariaExpanded, "aria-owns": ariaOwns, autocomplete: autocomplete, autocapitalize: autocapitalize, spellcheck: spellcheck, inputmode: inputmode, role: role || undefined, maxlength: maxCharactersReached ? maxCharacters : undefined, minlength: minCharactersUnattained ? minCharacters : undefined }, inheritedAttributes))) : (h("textarea", Object.assign({ id: inputId, class: {
                "no-resize": resize === false || !!readonly,
                "no-left-pad": !showLeftIcon && !!readonly,
                readonly: !!readonly,
            }, name: name, ref: (el) => (this.inputEl = el), value: value, rows: rows, required: required, disabled: disabledMode, placeholder: placeholder, readonly: readonly, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onScroll: this.onTextAreaScroll, "aria-label": label, "aria-describedby": describedBy, "aria-invalid": invalid, autocomplete: autocomplete, autocapitalize: autocapitalize, spellcheck: spellcheck, inputmode: inputmode, maxlength: maxCharactersReached ? maxCharacters : undefined, minlength: minCharactersUnattained ? minCharacters : undefined }, inheritedAttributes))), isSlotUsed(el, "clear-button") && (h("slot", { key: 'e50c8194546e08898e7ef0ed4dd940a881ffd5c4', name: "clear-button" })), isSlotUsed(el, "search-submit-button") && (h("slot", { key: 'e2ba7a0f555593f767ff1c93c4c58b71967da1a7', name: "search-submit-button" }))), isSlotUsed(el, "menu") && h("slot", { key: '7b22fe423951f0f38c5419ff3c35e9f32a72735d', name: "menu" }), h("ic-input-validation", { key: '85aec8ebd4633fa36585e3253e1cc8107c374495', class: { "show-validation": this.showValidationMargin() }, status: this.hasStatus(currentStatus) === false ||
                (currentStatus === IcInformationStatus.Success &&
                    validationInline) ||
                validationInlineInternal
                ? ""
                : currentStatus, message: showStatusText ? currentValidationText : "", ariaLiveMode: messageAriaLive, for: inputId, fullWidth: fullWidth }, !readonly && maxNumChars > 0 && (h("div", { key: 'f857927758c96f735592e7af679dba91c333fbf1', slot: "validation-message-adornment" }, !hideCharCount && (h("ic-typography", { key: 'eed01e87433155c8311c5ef958145d484c65264a', variant: "caption", class: "char-count-text" }, h("span", { key: '1752a0a453ed7dd28b909029f847330ffbff406c', class: "char-count" }, numChars, "/", maxNumChars))), h("span", { key: 'cd708a611a6133a7cf3b892d8f83cbf592791907', class: "remaining-char-count-desc", "aria-live": "polite", hidden: !isFocussed, id: remainingCharCountDescId }, remainingCharCountDesc), h("span", { key: 'ebe5600dece8662d9966667308e79872793b098c', hidden: true, id: hiddenCharCountDescId }, "Field can contain a maximum of ", maxNumChars, " characters.")))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "debounce": ["debounceChanged"],
        "value": ["watchValueHandler"]
    }; }
};
TextField.style = IcTextFieldStyle0;

export { TextField as ic_text_field };

//# sourceMappingURL=ic-text-field.entry.js.map