import { r as registerInstance, c as createEvent, f as forceUpdate, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { F as checkSlotInChildMutations, B as getLabelFromValue, A as getFilteredMenuOptions, G as isMacDevice, H as getOptionsWithoutGroupTitlesCount, r as removeDisabledFalse, l as removeFormResetListener, w as inheritAttributes, k as addFormResetListener, o as onComponentRequiredPropUndefined, m as renderHiddenInput, q as getInputDescribedByText, i as isSlotUsed, J as isMobileOrTablet, K as IcInformationStatus, s as hasValidationStatus } from './helpers-dcedb279.js';
import { I as IC_INHERITED_ARIA } from './constants-7960cba4.js';

const Expand = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor" />
</svg>
`;

const Clear = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6666 4.27334L11.7266 3.33334L7.99998 7.06001L4.27331 3.33334L3.33331 4.27334L7.05998 8.00001L3.33331 11.7267L4.27331 12.6667L7.99998 8.94001L11.7266 12.6667L12.6666 11.7267L8.93998 8.00001L12.6666 4.27334Z" fill="currentColor" />
</svg>
`;

const icSelectCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative;--ic-input-label-helpertext-padding:var(--ic-space-xs);--menu-max-height:100px;--border-color:var(--ic-select-field-border);--border-color-hover:var(--ic-select-field-border-hover);--border-color-pressed:var(--ic-select-field-border-pressed);--border-color-disabled:var(--ic-select-field-border-disabled);--border-color-error:var(--ic-select-field-border-error);--border-color-error-hover:var(--ic-select-field-border-error-hover);--border-color-error-pressed:var(--ic-select-field-border-error-pressed);--border-color-success:var(--ic-select-field-border-success);--border-color-success-hover:var(--ic-select-field-border-success-hover);--border-color-success-pressed:var(--ic-select-field-border-success-pressed);--border-color-warning:var(--ic-select-field-border-warning);--border-color-warning-hover:var(--ic-select-field-border-warning-hover);--border-color-warning-pressed:var(--ic-select-field-border-warning-pressed);--ic-input-label-text-color:var(--ic-select-field-label);--ic-input-label-helper-text-color:var(\n    --ic-select-input-field-label-subtitle\n  );--ic-input-validation-status-text-color:var(--ic-select-state-text);--ic-input-validation-error:var(--ic-select-state-icon-error);--ic-input-validation-warning-icon-color:var(--ic-select-state-icon-warning);--ic-input-validation-success-icon-color:var(--ic-select-state-icon-success);--menu-item-text-color:var(--ic-select-list-option-text);--menu-bg-color:var(--ic-select-list-option-background);--menu-border-color:var(--ic-select-dropdown-list-border)}:host(.ic-select-disabled){--ic-input-label-text-color:var(--ic-select-field-label-disabled);--ic-input-label-helper-text-color:var(\n    --ic-select-input-field-label-subtitle-disabled\n  )}:host(.ic-select-full-width){width:100%}ic-input-component-container.menu-open{--border-color:var(--ic-select-field-border-pressed)}ic-input-validation .status-icon,ic-input-validation .statustext{visibility:visible}ic-input-validation.menu-open .status-icon,ic-input-validation.menu-open .statustext{visibility:hidden;transition:visibility 0s}ic-input-label{margin-bottom:var(--ic-space-xs)}select{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-select-field-background);color:var(--ic-select-content-text);line-height:1.5rem;letter-spacing:0.005rem;width:100%;height:100%;padding-left:0.375rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-repeat:no-repeat;background-position:right 0.375rem center;background-image:var(--ic-select-mobile-dropdown-icon);caret-color:var(--ic-select-input-field-text-cursor)}select option,.select-option-selected{color:var(--ic-select-list-option-text)}select:disabled{color:var(--ic-select-content-text-disabled);background-image:var(--ic-select-mobile-dropdown-icon-disabled)}select:focus{border:0;outline:0}select:not([disabled]){cursor:pointer}.select-container{width:100%;display:flex;align-items:center;position:relative}.select-input{width:100%;height:100%;padding:0 0.375rem;display:flex;cursor:pointer;align-items:center;justify-content:space-between;background:none;border:none;background-color:var(--ic-select-field-background);color:var(--ic-select-content-text)}.select-input:focus{outline:none}.select-input[disabled]{pointer-events:none}:host(.ic-select-searchable) .select-input{cursor:auto}.select-input.with-clear-button{padding-right:0}.value-text{max-width:calc(100% - (var(--ic-space-lg) + var(--ic-space-xxs)));box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-bottom:0 !important}.value-text.with-clear-button{padding-right:calc(var(--ic-space-xl) + var(--ic-space-xs))}.searchable-select-container{align-items:center;display:flex;width:100%;position:relative}.expand-icon{height:var(--ic-space-lg);padding-left:var(--ic-space-xxs);color:var(--ic-select-expand-icon-color)}.expand-icon>svg{display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.ic-select-disabled) .expand-icon,:host(.ic-select-disabled) .expand-icon>svg>path{color:var(--ic-select-disabled-expand-icon-color)}:host(.ic-select-searchable) .expand-icon{padding-left:0;height:2.25rem}:host(.ic-select-searchable) .expand-icon>svg{height:2.25rem;padding:0 calc(var(--ic-space-xxxs) + var(--ic-space-xxs)) 0\n    var(--ic-space-xxs)}:host(.ic-select-searchable:not(.ic-select-disabled)) .expand-icon>svg{cursor:pointer}.expand-icon-open{color:var(--ic-select-expand-icon-color)}.expand-icon-open,:host(.ic-select-searchable) .expand-icon-open{transform:rotateX(180deg)}.placeholder{color:var(--ic-select-content-placeholder-text)}:host(.ic-select-disabled.ic-select-searchable) .select-input::-moz-placeholder{color:var(--ic-select-content-text-disabled)}:host(.ic-select-disabled) .value-text,:host(.ic-select-disabled) .select-input,:host(.ic-select-disabled) .placeholder,:host(.ic-select-disabled.ic-select-searchable) .select-input::placeholder{color:var(--ic-select-content-text-disabled)}.select-input-end{display:flex;align-items:center}.clear-button-container{display:flex;align-items:center}.divider{width:var(--ic-space-1px);background-color:var(--ic-select-content-divider);margin:var(--ic-space-xxs) 0;border-radius:var(--ic-space-1px);height:var(--ic-space-lg)}:host(.ic-select-small) .divider{height:var(--ic-space-md)}:host(.ic-select-large) .divider{height:var(--ic-space-xl)}.clear-button{color:var(--ic-select-clear-button);position:absolute;right:calc(var(--ic-space-xl) + var(--ic-space-xxs) - var(--ic-space-1px));border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus,.clear-button:active{background-color:var(--ic-color-focus-inner);box-shadow:inset 0 0 0 0.125rem var(--ic-color-focus-outer);border-radius:0.25rem}.clear-button:focus,.clear-button:active *{fill:var(--ic-atoms-input-clear-button-focus)}.clear-button.searchable{position:static}.searchable-select-results-status,.multi-select-selected-count{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}::slotted([slot=\"icon\"]){fill:var(--ic-select-content-placeholder-text)}.has-value ::slotted([slot=\"icon\"]){fill:var(--ic-select-content-text)}.readonly ::slotted([slot=\"icon\"]){padding:0.375rem;margin-bottom:0.75rem}@media (forced-colors: active){.has-value ::slotted([slot=\"icon\"]){fill:currentcolor}}";
const IcSelectStyle0 = icSelectCss;

let inputIds = 0;
const MUTABLE_ATTRIBUTES = [...IC_INHERITED_ARIA, "tabindex", "title"];
const Select = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icBlur = createEvent(this, "icBlur", 7);
        this.icChange = createEvent(this, "icChange", 7);
        this.icClear = createEvent(this, "icClear", 7);
        this.icClose = createEvent(this, "icClose", 7);
        this.icFocus = createEvent(this, "icFocus", 7);
        this.icInput = createEvent(this, "icInput", 7);
        this.icOpen = createEvent(this, "icOpen", 7);
        this.icOptionSelect = createEvent(this, "icOptionSelect", 7);
        this.icOptionDeselect = createEvent(this, "icOptionDeselect", 7);
        this.icRetryLoad = createEvent(this, "icRetryLoad", 7);
        this.blurredBecauseButtonPressed = false;
        this.hasSetDefaultValue = false;
        this.hasTimedOut = false;
        this.inheritedAttributes = {};
        this.initialOptionsEmpty = false;
        this.inputId = `ic-select-input-${inputIds++}`;
        this.menuId = `${this.inputId}-menu`;
        this.retryButtonClick = false;
        this.searchableMenuItemSelected = false;
        this.ungroupedOptions = [];
        this.hostMutationObserver = null;
        this.clearButtonFocused = false;
        this.noOptions = null;
        this.open = false;
        this.pressedCharacters = "";
        this.searchableSelectInputValue = null;
        /**
         * If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /**
         * If `true`, the built in filtering will be disabled for a searchable variant. For example, if options will already be filtered from external source.
         */
        this.disableAutoFiltering = false;
        /**
         * The text displayed when there are no options in the option list.
         */
        this.emptyOptionListText = "No results found";
        /**
         * If `true`, the select will fill the width of the container.
         */
        this.fullWidth = false;
        /**
         * The helper text that will be displayed for additional field guidance.
         */
        this.helperText = "";
        /**
         * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
         */
        this.hideLabel = false;
        /**
         * If `true`, descriptions of options will be included when filtering options in a searchable select. Only applies to built in filtering.
         */
        this.includeDescriptionsInSearch = false;
        /**
         * If `true`, group titles of grouped options will be included when filtering options in a searchable select. Only applies to built in filtering.
         */
        this.includeGroupTitlesInSearch = false;
        /**
         * The message displayed when external loading times out.
         */
        this.loadingErrorLabel = "Loading Error";
        /**
         * The message displayed whilst the options are being loaded externally.
         */
        this.loadingLabel = "Loading...";
        /**
         * If `true`, multiple options can be selected.
         */
        this.multiple = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * The placeholder value to be displayed.
         */
        this.placeholder = "Select an option";
        /**
         * If `true`, the readonly state will be set.
         */
        this.readonly = false;
        /**
         * If `true`, the select will require a value.
         */
        this.required = false;
        /**
         * If `true`, a searchable variant of the select will be displayed which can be typed in to filter options. This functionality is only available on the single-select variant of the select component.
         */
        this.searchable = false;
        /**
         * Whether the search string of the searchable select should match the start of or anywhere in the options. Only applies to built in filtering.
         */
        this.searchMatchPosition = "anywhere";
        /**
         * If `true`, the icOptionSelect event will be fired on enter instead of ArrowUp and ArrowDown on the single select.
         */
        this.selectOnEnter = false;
        /**
         * If `true`, a button which clears the select input when clicked will be displayed. The button will always appear on the searchable select.
         */
        this.showClearButton = false;
        /**
         * The size of the select.
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
        /**
         * If `true`, the loading state will be triggered when fetching options asynchronously.
         */
        this.loading = false;
        /**
         * The possible selection options.
         */
        this.options = [];
        this.filteredOptions = this.options;
        this.uniqueOptions = this.options;
        /**
         * The amount of time, in milliseconds, to wait to trigger the `icInput` event after each keystroke.
         */
        this.debounce = 0;
        this.currDebounce = this.debounce;
        /**
         * The value of the select, reflected by the value of the currently selected option.
         * For the searchable variant, the value is also reflected by the user input.
         * For the multi-select variant, the value must be an array of option values.
         */
        this.value = null;
        this.initialValue = this.value;
        this.inputValueToFilter = this.value;
        // triggered when attributes of host element change
        this.hostMutationCallback = (mutationList) => {
            let forceComponentUpdate = false;
            mutationList.forEach(({ attributeName, type, addedNodes, removedNodes }) => {
                if (attributeName) {
                    const attribute = this.el.getAttribute(attributeName);
                    if (attribute && MUTABLE_ATTRIBUTES.includes(attributeName)) {
                        this.inheritedAttributes[attributeName] = attribute;
                        forceComponentUpdate = true;
                    }
                }
                else if (type === "childList") {
                    forceComponentUpdate = checkSlotInChildMutations(addedNodes, removedNodes, "icon");
                }
            });
            if (forceComponentUpdate) {
                forceUpdate(this);
            }
        };
        this.handleRetry = (ev) => {
            var _a;
            if (ev.detail.keyPressed)
                (_a = this.searchableSelectElement) === null || _a === void 0 ? void 0 : _a.focus();
            this.blurredBecauseButtonPressed = true;
            this.retryButtonClick = true;
            this.hasSetDefaultValue = true;
            this.icRetryLoad.emit({
                value: this.searchable
                    ? this.searchableSelectInputValue
                    : this.hiddenInputValue,
            });
        };
        this.emitIcChange = (value) => {
            // If "Select all" button clicked, replace value with new value (array of all option values)
            if (this.multiple && !Array.isArray(value) && value !== null) {
                // Update selected options - adds / removes them, in order of option list
                // Create new array if value prop is undefined
                if (this.value) {
                    let valueArray = this.value.slice();
                    if (this.value.includes(value)) {
                        valueArray.splice(valueArray.indexOf(value), 1);
                    }
                    else {
                        valueArray.push(value);
                        valueArray = this.getValueSortedByOptions(valueArray);
                    }
                    this.value = valueArray.length === 0 ? null : valueArray;
                }
                else {
                    this.value = [value];
                }
            }
            else {
                this.value = value;
            }
            this.icChange.emit({ value: this.multiple ? this.value : value });
        };
        this.emitIcInput = (value) => {
            clearTimeout(this.debounceIcInput);
            this.debounceIcInput = window.setTimeout(() => this.icInput.emit({ value }), this.currDebounce);
        };
        this.setOptions = () => {
            if (!this.hasTimedOut && this.options !== this.noOptions) {
                this.loading = false;
                clearTimeout(this.timeoutTimer);
                if (this.options.length > 0) {
                    this.setOptionsValuesFromLabels();
                    this.uniqueOptions = this.deduplicateOptions(this.options);
                }
                else {
                    this.noOptions = [{ label: this.emptyOptionListText, value: "" }];
                    this.uniqueOptions = this.noOptions;
                }
                this.filteredOptions = this.uniqueOptions;
                if (this.isExternalFiltering()) {
                    // When searchable select
                    this.noOptions = null;
                    this.updateSearchableSelectResultAriaLive();
                    this.setDefaultValue();
                }
                else if (this.initialOptionsEmpty) {
                    this.setDefaultValue();
                    this.initialOptionsEmpty = false;
                }
            }
            else if (!this.searchable) {
                this.options = this.noOptions || [];
            }
        };
        /**
         * Processes the provided array of IcMenuOptions, removing duplicates and reporting them with a console.warn
         * @param options array of IcMenuOptions
         * @returns a new options object, with all entries possessing a duplicate 'value' field removed
         */
        this.deduplicateOptions = (options) => {
            const uniqueValues = [];
            const dedupedOptions = [];
            options.forEach((option) => {
                if (option.children) {
                    //If an option has children, we will loop through them
                    const dedupedChildren = [];
                    option.children.forEach((child) => {
                        if (uniqueValues.includes(child.value)) {
                            console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${child.value}) which has been removed.`);
                        }
                        else {
                            uniqueValues.push(child.value);
                            dedupedChildren.push(child);
                        }
                    });
                    // construct a modified option, inserting the deduplicated children alongside the original information
                    dedupedOptions.push(Object.assign(Object.assign({}, option), { children: dedupedChildren }));
                }
                else {
                    // If an option does not have children, assess to see if it's value has been included already
                    if (uniqueValues.includes(option.value)) {
                        console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${option.value}) which has been removed.`);
                    }
                    else {
                        uniqueValues.push(option.value);
                        dedupedOptions.push(option);
                    }
                }
            });
            return dedupedOptions;
        };
        /**
         * Loop through options array and for all options with no value, infer it from the label
         */
        this.setOptionsValuesFromLabels = () => {
            if (this.options.length > 0) {
                this.options.map((option) => {
                    if (!option.value) {
                        option.value = option.label;
                    }
                });
            }
        };
        this.setUngroupedOptions = (event) => {
            this.ungroupedOptions = event.detail.options;
        };
        this.setTextColor = () => {
            if (this.nativeSelectElement) {
                this.nativeSelectElement.className =
                    this.nativeSelectElement.selectedIndex === 0
                        ? "placeholder"
                        : "select-option-selected";
            }
        };
        this.setMenuChange = (open) => {
            if (this.open !== open) {
                this.open = open;
            }
        };
        this.getLabelFromValue = (value) => getLabelFromValue(value, this.uniqueOptions);
        this.getMultipleOptionsString = (selectedValues) => selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.map((value) => this.getLabelFromValue(value)).filter((label) => !!label).join(", ");
        this.getFilteredChildMenuOptions = (option) => (Object.assign(Object.assign({}, option), { children: option.children &&
                getFilteredMenuOptions(option.children, this.searchable && !!this.includeDescriptionsInSearch, this.searchable
                    ? this.searchableSelectInputValue || ""
                    : this.pressedCharacters, this.searchable ? this.searchMatchPosition : "start") }));
        // (For multi-select) get value array, i.e. selected option values, in order they appear in option list
        this.getValueSortedByOptions = (value) => {
            const valueArray = value;
            const valuesFromAllOptions = this.ungroupedOptions.map((option) => option.value);
            valueArray.sort((a, b) => valuesFromAllOptions.indexOf(a) - valuesFromAllOptions.indexOf(b));
            return valueArray;
        };
        this.handleNativeSelectChange = () => {
            if (this.nativeSelectElement) {
                this.icOptionSelect.emit({ value: this.nativeSelectElement.value });
                this.emitIcChange(this.nativeSelectElement.value);
            }
            this.setTextColor();
        };
        // Handle option select for when a custom input box and menu is rendered
        // (rather than native <select> - rendered when viewed on a mobile / tablet screen)
        this.handleCustomSelectChange = (event) => {
            var _a, _b;
            const { value, label, optionId } = event.detail;
            if (label === this.emptyOptionListText) {
                (_a = this.searchableSelectElement) === null || _a === void 0 ? void 0 : _a.focus();
                return;
            }
            if (this.searchable) {
                this.value = value || null;
                this.searchableMenuItemSelected = true;
                // After editing the input, if selecting the same option as before, set the input value to label again
                if (this.value === this.currValue) {
                    this.searchableSelectInputValue =
                        this.getLabelFromValue(this.value) || null;
                }
                this.inputValueToFilter = null;
                this.hiddenInputValue =
                    this.getValueFromLabel(this.searchableSelectInputValue) || null;
            }
            if (value) {
                if (this.multiple && ((_b = this.value) === null || _b === void 0 ? void 0 : _b.includes(value))) {
                    this.icOptionDeselect.emit({ value });
                }
                else {
                    this.icOptionSelect.emit({ value });
                }
            }
            this.ariaActiveDescendant = optionId;
            this.emitIcChange(value || null);
        };
        this.handleSelectAllChange = ({ detail, }) => {
            const allValues = this.ungroupedOptions
                .filter((option) => !option.disabled)
                .map((option) => option.value);
            if (detail.select) {
                // Only emit icOptionSelect for all values that are newly selected
                const unselectedValues = this.value
                    ? allValues.filter((value) => this.value && !this.value.includes(value))
                    : allValues;
                unselectedValues.forEach((value) => this.icOptionSelect.emit({ value }));
            }
            else {
                // Only emit icOptionDeselect for values that were selected
                this.value.forEach((value) => this.icOptionDeselect.emit({ value }));
            }
            this.emitIcChange(detail.select ? allValues : null);
        };
        this.handleMenuChange = (event) => {
            this.open = event.detail.open;
            this.pressedCharacters = "";
            if (this.searchable)
                this.handleFocusIndicatorDisplay();
        };
        // clears the debounce delay when navigating the menu with arrow keys etc
        // to prevent delay in change event, which should only occur when typing in input
        this.handleMenuKeyPress = (ev) => {
            ev.cancelBubble = true;
            if (!this.multiple) {
                this.handleCharacterKeyDown(ev.detail.key);
            }
        };
        this.handleFocusIndicatorDisplay = () => {
            var _a;
            const focusIndicator = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".focus-indicator");
            if (focusIndicator) {
                if (this.open) {
                    focusIndicator.classList.add("focus-indicator-enabled");
                }
                else {
                    focusIndicator.classList.remove("focus-indicator-enabled");
                }
            }
        };
        this.handleMouseDown = (event) => {
            if (!this.open) {
                event.preventDefault();
            }
        };
        this.isExternalFiltering = () => this.searchable && !!this.disableAutoFiltering;
        this.handleClick = (event) => {
            var _a, _b;
            if (!this.open && this.menu) {
                if (this.isExternalFiltering()) {
                    this.menu.options = this.filteredOptions;
                }
                else if (!this.hasTimedOut &&
                    !this.loading &&
                    !((_a = this.noOptions) === null || _a === void 0 ? void 0 : _a.length) &&
                    (!this.searchable || this.searchableMenuItemSelected)) {
                    this.noOptions = null;
                    this.menu.options = this.uniqueOptions;
                }
            }
            if (event.detail !== 0) {
                (_b = this.menu) === null || _b === void 0 ? void 0 : _b.handleClickOpen();
            }
        };
        this.handleExpandIconMouseDown = (event) => {
            var _a;
            if (!this.disabled) {
                event.preventDefault();
                (_a = this.searchableSelectElement) === null || _a === void 0 ? void 0 : _a.focus();
                this.handleClick(event);
            }
        };
        this.handleClear = (event) => {
            var _a, _b;
            event.stopPropagation();
            this.hasTimedOut = false;
            clearTimeout(this.timeoutTimer);
            this.clearInput();
            this.emitIcChange(null);
            this.icClear.emit();
            if (this.searchable) {
                this.hiddenInputValue = null;
                (_a = this.searchableSelectElement) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                (_b = this.customSelectElement) === null || _b === void 0 ? void 0 : _b.focus();
            }
        };
        this.handleCharacterKeyDown = (key) => {
            // Only close menu when space is pressed if not being used alongside character keys to quickly select options
            if (this.open && key === " " && this.pressedCharacters.length === 0) {
                this.setMenuChange(false);
            }
            if (key.length !== 1 || this.searchable) {
                this.pressedCharacters = "";
                return;
            }
            window.clearTimeout(this.characterKeyPressTimer);
            this.characterKeyPressTimer = window.setTimeout(() => (this.pressedCharacters = ""), 1000);
            if (key !== " " || !!this.pressedCharacters) {
                this.pressedCharacters += key;
                this.handleFilter();
                if (!this.noOptions) {
                    this.emitIcChange(this.filteredOptions[0].value);
                }
            }
        };
        this.handleNativeSelectKeyDown = (event) => {
            if ((event.key !== "Escape" && event.key !== "Tab") || this.open) {
                event.cancelBubble = true;
            }
            this.handleCharacterKeyDown(event.key);
        };
        this.handleKeyDown = (event) => {
            var _a;
            if ((event.key !== "Escape" && event.key !== "Tab") || this.open) {
                event.cancelBubble = true;
            }
            const isArrowKey = event.key === "ArrowDown" || event.key === "ArrowUp";
            if (this.menu && !this.open) {
                if (this.isExternalFiltering() && (event.key === "Enter" || isArrowKey)) {
                    this.menu.options = this.filteredOptions;
                }
                else if (!this.hasTimedOut) {
                    this.noOptions = null;
                    this.menu.options = this.uniqueOptions;
                }
            }
            if (this.open && event.key === "Enter") {
                this.setMenuChange(false);
            }
            else {
                if (!isArrowKey || this.noOptions === null) {
                    if (event.key !== " " || this.pressedCharacters.length <= 0) {
                        // Keyboard events get passed onto ic-menu except in the case of ctrl-a on a searchable select
                        const isCtrlA = event.key === "a" &&
                            ((isMacDevice() && event.metaKey) ||
                                (!isMacDevice() && event.ctrlKey));
                        if (!(this.searchable && isCtrlA)) {
                            (_a = this.menu) === null || _a === void 0 ? void 0 : _a.handleKeyboardOpen(event);
                        }
                    }
                    if (!this.multiple) {
                        this.handleCharacterKeyDown(event.key);
                    }
                }
            }
        };
        this.handleClearButtonFocus = () => {
            this.clearButtonFocused = true;
        };
        this.handleClearButtonBlur = (ev) => {
            var _a;
            const retryButton = (_a = this.menu) === null || _a === void 0 ? void 0 : _a.querySelector("#retry-button");
            if ((!this.searchableSelectElement ||
                ev.relatedTarget !== this.searchableSelectElement) &&
                (!retryButton || ev.relatedTarget !== retryButton)) {
                this.setMenuChange(false);
                this.handleFocusIndicatorDisplay();
            }
            this.clearButtonFocused = false;
        };
        this.handleFilter = () => {
            var _a;
            const options = this.deduplicateOptions(this.searchable ? [...this.uniqueOptions] : this.ungroupedOptions);
            const isGrouped = options.some((option) => !!option.children);
            let newFilteredOptions = [];
            let menuOptionsFiltered;
            if (this.searchable) {
                menuOptionsFiltered = getFilteredMenuOptions(options, !!this.includeDescriptionsInSearch, this.inputValueToFilter || "", this.searchMatchPosition);
                this.searchableMenuItemSelected = false;
            }
            else {
                menuOptionsFiltered = getFilteredMenuOptions(options, false, this.pressedCharacters, "start");
            }
            if (!isGrouped &&
                ((_a = menuOptionsFiltered[0]) === null || _a === void 0 ? void 0 : _a.label) !== this.emptyOptionListText) {
                newFilteredOptions = menuOptionsFiltered;
            }
            else if (isGrouped) {
                newFilteredOptions = options.map((option) => this.includeGroupTitlesInSearch &&
                    menuOptionsFiltered.indexOf(option) !== -1
                    ? option
                    : this.getFilteredChildMenuOptions(option));
            }
            if (newFilteredOptions.length > 0 &&
                (!isGrouped ||
                    newFilteredOptions.some(({ children }) => children && children.length > 0))) {
                this.noOptions = null;
                this.filteredOptions = newFilteredOptions;
            }
            else {
                this.noOptions = [{ label: this.emptyOptionListText, value: "" }];
                this.filteredOptions = this.noOptions;
            }
        };
        /**
         * Put the select component into loading state.
         * Replace options with the loading message. If timeout is enabled, set the timeout and once passed, replace options with the loading error message
         */
        this.triggerLoading = () => {
            this.hasTimedOut = false;
            this.noOptions = [{ label: this.loadingLabel, value: "", loading: true }];
            if (this.filteredOptions !== this.noOptions && this.searchable) {
                this.filteredOptions = this.noOptions;
            }
            else if (this.uniqueOptions !== this.noOptions && !this.searchable) {
                this.uniqueOptions = this.noOptions;
            }
            if (this.timeout) {
                this.timeoutTimer = window.setTimeout(() => {
                    this.loading = false;
                    this.hasTimedOut = true;
                    this.noOptions = [
                        { label: this.loadingErrorLabel, value: "", timedOut: true },
                    ];
                    this.filteredOptions = this.noOptions;
                    if (!this.searchable)
                        this.uniqueOptions = this.noOptions;
                }, this.timeout);
            }
        };
        this.getValueFromLabel = (label) => { var _a; return label && ((_a = this.uniqueOptions.find((option) => option.label === label)) === null || _a === void 0 ? void 0 : _a.value); };
        this.handleSearchableSelectInput = (event) => {
            this.searchableSelectInputValue = event.target.value;
            this.emitIcInput(this.searchableSelectInputValue);
            // De-select previous selection when input is edited
            // Only emit icChange once when editing input
            if (this.value != null) {
                this.emitIcChange(null);
            }
            this.hiddenInputValue = null;
            this.inputValueToFilter = this.searchableSelectInputValue;
            this.setMenuChange(true);
            if (!this.disableAutoFiltering) {
                this.handleFilter();
                clearTimeout(this.debounceAria);
                window.setTimeout(() => {
                    this.updateSearchableSelectResultAriaLive();
                }, 800);
            }
        };
        this.updateSearchableSelectResultAriaLive = () => {
            var _a;
            const searchableSelectResultsStatusEl = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".searchable-select-results-status");
            if (searchableSelectResultsStatusEl) {
                searchableSelectResultsStatusEl.innerText =
                    this.noOptions !== null ? this.emptyOptionListText : "";
            }
        };
        this.updateMultiSelectedCountAriaLive = () => {
            var _a, _b;
            const multiSelectSelectedCountEl = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".multi-select-selected-count");
            const selectedCount = `${(_b = this.currValue) === null || _b === void 0 ? void 0 : _b.length} of ${getOptionsWithoutGroupTitlesCount(this.options)} selected`;
            if (multiSelectSelectedCountEl &&
                multiSelectSelectedCountEl.innerText !== selectedCount) {
                multiSelectSelectedCountEl.innerText = selectedCount;
            }
        };
        this.getDefaultValue = (value) => this.getLabelFromValue(value) || null;
        this.setDefaultValue = () => {
            if (!this.hasSetDefaultValue && this.currValue) {
                this.searchableSelectInputValue = this.searchable
                    ? this.getDefaultValue(this.currValue)
                    : null;
                this.initialValue = this.currValue;
                this.hasSetDefaultValue = true;
            }
        };
        this.onFocus = () => {
            this.icFocus.emit();
        };
        this.onBlur = ({ relatedTarget }) => {
            var _a;
            const target = relatedTarget;
            if (target !== null &&
                ((target.tagName === "UL" && target.className.includes("menu")) ||
                    (target.tagName === "LI" && target.className.includes("option")))) {
                return;
            }
            const retryButton = (_a = this.menu) === null || _a === void 0 ? void 0 : _a.querySelector("#retry-button");
            if (this.searchable &&
                !!this.menu &&
                target !== this.menu &&
                !Array.from(this.menu.querySelectorAll("[role='option']")).includes(target) &&
                (!this.clearButton || target !== this.clearButton) &&
                (!retryButton || target !== retryButton)) {
                if (!this.retryButtonClick) {
                    this.setMenuChange(false);
                    // Clear input field on blur when searchable if no option is selected
                    if (!this.value) {
                        this.clearInput();
                    }
                }
                this.handleFocusIndicatorDisplay();
            }
            this.retryButtonClick = false;
            this.icBlur.emit();
        };
        this.onTimeoutBlur = (ev) => {
            if (ev.detail.ev.relatedTarget !==
                this.searchableSelectElement &&
                !this.blurredBecauseButtonPressed) {
                this.setMenuChange(false);
                this.handleFocusIndicatorDisplay();
                this.icBlur.emit();
            }
            this.blurredBecauseButtonPressed = false;
        };
        this.handleFormReset = () => {
            this.value = this.initialValue;
            if (this.searchable) {
                this.searchableSelectInputValue = this.getDefaultValue(this.value);
                this.hiddenInputValue = this.value;
            }
        };
        this.clearInput = () => {
            var _a;
            this.noOptions = null;
            if (this.searchable) {
                (_a = this.searchableSelectElement) === null || _a === void 0 ? void 0 : _a.setAttribute("value", "");
                this.searchableSelectInputValue = null;
                this.filteredOptions = this.uniqueOptions;
            }
        };
        this.renderNativeOption = (option) => (h("option", { value: option.value, disabled: option.disabled, selected: option.value === this.currValue }, option.label));
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    loadingHandler(newValue) {
        newValue ? this.triggerLoading() : this.setOptions();
    }
    watchOptionsHandler() {
        this.setOptions();
    }
    debounceChangedHandler(newValue) {
        if (this.currDebounce !== newValue) {
            this.currDebounce = newValue;
        }
    }
    valueChangedHandler() {
        if (this.value !== this.currValue) {
            if (this.value && this.multiple) {
                this.currValue = this.getMultipleOptionsString(this.value)
                    ? this.getValueSortedByOptions(this.value)
                    : null;
                this.updateMultiSelectedCountAriaLive();
            }
            else {
                this.currValue = this.getLabelFromValue(this.value)
                    ? this.value
                    : null;
            }
        }
        if (this.searchable && this.value) {
            // Only set if value not null - prevents whole input value being cleared when edited
            this.searchableSelectInputValue =
                this.getLabelFromValue(String(this.currValue)) || null;
        }
    }
    openChangedHandler() {
        this.open ? this.icOpen.emit() : this.icClose.emit();
    }
    disconnectedCallback() {
        var _a;
        removeFormResetListener(this.el, this.handleFormReset);
        (_a = this.hostMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentWillLoad() {
        const valueInOptions = this.multiple
            ? this.getMultipleOptionsString(this.value)
            : this.getLabelFromValue(this.value);
        this.currValue = valueInOptions ? this.value : null;
        this.inheritedAttributes = inheritAttributes(this.el, MUTABLE_ATTRIBUTES);
        removeDisabledFalse(this.disabled, this.el);
        this.setOptionsValuesFromLabels();
        addFormResetListener(this.el, this.handleFormReset);
        if (!this.options.length) {
            this.initialOptionsEmpty = true;
            this.noOptions = [{ label: this.emptyOptionListText, value: "" }];
            this.uniqueOptions = this.noOptions;
            this.filteredOptions = this.noOptions;
        }
        else {
            this.setDefaultValue();
            this.uniqueOptions = this.deduplicateOptions(this.options);
        }
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Select");
        if (this.loading) {
            this.triggerLoading();
        }
        if (this.searchable) {
            this.hiddenInputValue = this.currValue;
        }
        this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
        this.hostMutationObserver.observe(this.el, {
            attributes: true,
            childList: true,
        });
    }
    componentDidRender() {
        if (this.nativeSelectElement && !this.disabled) {
            this.setTextColor();
        }
    }
    /**
     * Sets focus on the input box.
     */
    async setFocus() {
        if (this.nativeSelectElement) {
            this.nativeSelectElement.focus();
        }
        else if (this.customSelectElement) {
            this.customSelectElement.focus();
        }
        else if (this.searchableSelectElement) {
            this.searchableSelectElement.focus();
        }
    }
    render() {
        var _a, _b, _c, _d;
        const { size, disabled, fullWidth, helperText, hideLabel, label, menuId, multiple, name, options, placeholder, readonly, required, searchable, showClearButton, validationAriaLive, validationStatus, validationText, currValue, theme, hiddenInputValue, open, inputId, searchableSelectInputValue, loading, value, emptyOptionListText, uniqueOptions, selectOnEnter, form, inheritedAttributes, ariaActiveDescendant, hasTimedOut, filteredOptions, clearButtonFocused, } = this;
        // HTML inputs only accept 'string' for their value
        // Does not cause errors when it is a multi-select - sets value correctly, to a comma-separated string
        renderHiddenInput(this.el, searchable ? hiddenInputValue : currValue, name || inputId, disabled);
        const invalid = `${validationStatus === IcInformationStatus.Error}`;
        const showValidation = hasValidationStatus(validationStatus, !!disabled);
        const describedBy = getInputDescribedByText(this.el, inputId, helperText !== "", showValidation).trim();
        const valueLabelString = multiple
            ? this.getMultipleOptionsString(currValue)
            : this.getLabelFromValue(currValue);
        const isClearable = !disabled &&
            (searchable
                ? !!searchableSelectInputValue
                : !!currValue && !loading && showClearButton);
        return (h(Host, { key: 'beb04e2fdc2db5765b24622f4d31bfdf36c61ba6', class: {
                "ic-select-disabled": disabled,
                "ic-select-searchable": searchable,
                [`ic-select-${size}`]: size !== "medium",
                "ic-select-full-width": fullWidth,
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, onBlur: this.onBlur }, h("ic-input-container", { key: 'e85323a8778251dca9d78ccc76906c7523a8f02a', readonly: readonly }, !hideLabel && (h("ic-input-label", { key: '9bd3a6662c29157c323beee7355ec0983a0a83e9', for: inputId, label: label, helperText: helperText, required: required, disabled: disabled, readonly: readonly }, h("slot", { key: 'ba0fc93028a2ff25112730a950381a25bee23b54', name: "helper-text", slot: "helper-text" }))), h("ic-input-component-container", { key: 'c7d54f4d61bcb41cfbb3c4af1600a783e696121f', ref: (el) => (this.anchorEl = el), class: { "menu-open": open }, size: size, fullWidth: fullWidth, disabled: disabled, readonly: readonly, validationStatus: validationStatus }, isSlotUsed(this.el, "icon") &&
            !disabled &&
            (!readonly || !!value) && (h("span", { key: '891b11b3008d52ac3db2197c372b21a12a9f431e', slot: "left-icon", class: {
                readonly,
                "has-value": !!value,
            } }, h("slot", { key: '9fc291a9f0b756bf31331260ea3c313cdecf8fa2', name: "icon" }))), readonly ? (h("ic-typography", null, h("p", null, valueLabelString))) : isMobileOrTablet() && !multiple ? (h("select", Object.assign({ ref: (el) => (this.nativeSelectElement = el), disabled: disabled, onChange: this.handleNativeSelectChange, required: required, id: inputId, "aria-label": label, "aria-describedby": describedBy, "aria-invalid": invalid, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.handleNativeSelectKeyDown, form: form }, inheritedAttributes), h("option", { value: "", selected: true, disabled: !showClearButton }, placeholder), options.map((option) => option.children ? (h("optgroup", { label: option.label }, option.children.map((child) => this.renderNativeOption(child)))) : (this.renderNativeOption(option))))) : searchable ? (h("div", { class: "searchable-select-container" }, h("input", { class: {
                "value-text": true,
                "select-input": true,
                "with-clear-button": !!searchableSelectInputValue,
            }, role: "combobox", autocomplete: "off", "aria-label": label, "aria-describedby": describedBy, "aria-activedescendant": ariaActiveDescendant, "aria-autocomplete": "list", "aria-expanded": `${open}`, "aria-invalid": invalid, "aria-required": `${required}`, "aria-controls": menuId, ref: (el) => (this.searchableSelectElement = el), id: inputId, value: searchableSelectInputValue || undefined, placeholder: placeholder, disabled: disabled, onInput: this.handleSearchableSelectInput, onClick: this.handleClick, onKeyDown: this.handleKeyDown, onFocus: this.onFocus, onBlur: this.onBlur, form: form }), isClearable && (h("div", { class: "clear-button-container" }, h("ic-button", { id: "clear-button", ref: (el) => (this.clearButton = el), "aria-label": searchableSelectInputValue &&
                (currValue === null || loading)
                ? "Clear input"
                : "Clear selection", class: "clear-button", innerHTML: Clear, onClick: this.handleClear, onFocus: this.handleClearButtonFocus, onBlur: this.handleClearButtonBlur, size: size, variant: "icon-tertiary", theme: clearButtonFocused ? "light" : "dark" }), h("div", { class: "divider" }))), h("span", { onMouseDown: this.handleExpandIconMouseDown, class: {
                "expand-icon": true,
                "expand-icon-open": open,
            }, innerHTML: Expand, "aria-hidden": "true" }), h("div", { "aria-live": "polite", role: "status", class: "searchable-select-results-status" }))) : (h("div", { class: "select-container" }, h("button", { role: "combobox", class: "select-input", ref: (el) => (this.customSelectElement = el), id: inputId, "aria-label": `${label}, ${(multiple && currValue
                ? `${currValue.length} of ${getOptionsWithoutGroupTitlesCount(options)} selected, ${valueLabelString}`
                : valueLabelString) || placeholder}`, "aria-describedby": describedBy, "aria-invalid": invalid, "aria-haspopup": "listbox", "aria-expanded": `${open}`, "aria-owns": menuId, "aria-controls": menuId, "aria-required": `${required}`, disabled: disabled, onBlur: this.onBlur, onFocus: this.onFocus, onClick: this.handleClick, onMouseDown: this.handleMouseDown, onKeyDown: this.handleKeyDown }, h("ic-typography", { variant: "body", class: {
                "value-text": true,
                "with-clear-button": isClearable,
                placeholder: !loading && multiple
                    ? !value || value.length < 1
                    : !this.getLabelFromValue(currValue),
            } }, valueLabelString || placeholder), h("div", { class: "select-input-end" }, isClearable && h("div", { class: "divider" }), h("span", { class: {
                "expand-icon": true,
                "expand-icon-open": open,
            }, innerHTML: Expand, "aria-hidden": "true" }))), isClearable && (h("ic-button", { id: "clear-button", "aria-label": "Clear selection", class: "clear-button", innerHTML: Clear, onClick: this.handleClear, onFocus: this.handleClearButtonFocus, onBlur: this.handleClearButtonBlur, size: size, variant: "icon-tertiary", theme: clearButtonFocused ? "light" : "dark" }))))), (!isMobileOrTablet() || multiple) && (h("ic-menu", { key: 'b56cf5adc26838ad0f873aa16df8da7fd7b83d22', class: {
                "no-results": loading ||
                    hasTimedOut ||
                    (searchable &&
                        ((_b = (_a = this.filteredOptions) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.label) === emptyOptionListText) ||
                    (!searchable &&
                        ((_d = (_c = this.uniqueOptions) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.label) === emptyOptionListText),
            }, ref: (el) => (this.menu = el), inputEl: searchable
                ? this.searchableSelectElement
                : this.customSelectElement, inputLabel: label, anchorEl: this.anchorEl, size: size, menuId: menuId, open: open, options: searchable ? filteredOptions : uniqueOptions, value: multiple ? currValue : currValue, fullWidth: fullWidth, selectOnEnter: selectOnEnter, onMenuStateChange: this.handleMenuChange, onMenuOptionSelect: this.handleCustomSelectChange, onMenuOptionSelectAll: this.handleSelectAllChange, onMenuKeyPress: this.handleMenuKeyPress, onUngroupedOptionsSet: this.setUngroupedOptions, onRetryButtonClicked: this.handleRetry, parentEl: this.el, onTimeoutBlur: this.onTimeoutBlur, activationType: searchable || multiple || selectOnEnter ? "manual" : "automatic", closeOnSelect: !multiple, multiSelect: multiple ? true : false, searchableSelect: searchable ? true : false })), multiple && (h("div", { key: 'c4e7606e119c8658e590716ff02dcaf45f30ae89', "aria-live": "polite", role: "status", class: "multi-select-selected-count" })), h("ic-input-validation", { key: 'b74ff136f8b758c400d9c0262a227f2286b301d5', class: {
                "menu-open": open,
            }, ariaLiveMode: validationAriaLive, status: showValidation ? validationStatus : "", message: showValidation ? validationText : "", for: inputId }))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "loading": ["loadingHandler"],
        "options": ["watchOptionsHandler"],
        "debounce": ["debounceChangedHandler"],
        "value": ["valueChangedHandler"],
        "open": ["openChangedHandler"]
    }; }
};
Select.style = IcSelectStyle0;

export { Select as ic_select };

//# sourceMappingURL=ic-select.entry.js.map