import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { A as getFilteredMenuOptions, B as getLabelFromValue, C as handleHiddenFormButtonClick, r as removeDisabledFalse, E as debounceEvent, o as onComponentRequiredPropUndefined, q as getInputDescribedByText, m as renderHiddenInput } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const clearIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8327 5.34199L14.6577 4.16699L9.99935 8.82533L5.34102 4.16699L4.16602 5.34199L8.82435 10.0003L4.16602 14.6587L5.34102 15.8337L9.99935 11.1753L14.6577 15.8337L15.8327 14.6587L11.1743 10.0003L15.8327 5.34199Z" fill="currentColor"/>
</svg>
`;

const searchIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13.1292 11.8792H12.4708L12.2375 11.6542C13.0542 10.7042 13.5458 9.47083 13.5458 8.12916C13.5458 5.13749 11.1208 2.71249 8.12916 2.71249C5.13749 2.71249 2.71249 5.13749 2.71249 8.12916C2.71249 11.1208 5.13749 13.5458 8.12916 13.5458C9.47083 13.5458 10.7042 13.0542 11.6542 12.2375L11.8792 12.4708V13.1292L16.0458 17.2875L17.2875 16.0458L13.1292 11.8792ZM8.12916 11.8792C6.05416 11.8792 4.37916 10.2042 4.37916 8.12916C4.37916 6.05416 6.05416 4.37916 8.12916 4.37916C10.2042 4.37916 11.8792 6.05416 11.8792 8.12916C11.8792 10.2042 10.2042 11.8792 8.12916 11.8792Z" fill="currentColor"/>
</svg>`;

const icSearchBarCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-search-bar-search){display:block;--divider-height:1.5rem;--ic-input-label-helpertext-padding:var(--ic-space-xs);--border-color:var(--ic-search-bar-outline);--input-bg-color:var(--ic-search-bar-background);--border-color-disabled:var(--ic-search-bar-outline-disabled);--menu-item-text-color:var(--ic-search-bar-dropdown-option-text);--menu-item-desc-text-color:var(--ic-search-bar-dropdown-option-description);--menu-bg-color:var(--ic-search-bar-dropdown-background);--menu-border-color:var(--ic-search-bar-dropdown-outline)}:host(.ic-search-bar-disabled){--ic-input-label-text-color:var(--ic-search-bar-label-disabled);--ic-input-label-helper-text-color:var(--ic-search-bar-subtitle-disabled)}:host(.ic-search-bar-search:hover){--border-color:var(--ic-search-bar-outline-hover)}:host(.ic-search-bar-search:active){--border-color:var(--ic-search-bar-outline-pressed)}:host(.ic-search-bar-search.ic-search-bar-small){--divider-height:1rem}:host(.ic-search-bar-full-width){width:100%}::-moz-placeholder{color:var(--ic-search-bar-placeholder-text);opacity:1}::placeholder{color:var(--ic-search-bar-placeholder-text);opacity:1}input{border:0;border-radius:var(--ic-border-radius);color:var(--ic-search-bar-filled-text);background-color:var(--input-bg-color);line-height:1.5rem;letter-spacing:0.005rem;width:100%;padding-right:var(--ic-space-xs);padding-left:var(--ic-space-xs);caret-color:var(--ic-search-bar-filled-text-cursor)}input:focus{border:0;outline:0}input:disabled::-moz-placeholder{color:var(--ic-search-bar-disabled-text)}input:disabled,input:disabled::placeholder{color:var(--ic-search-bar-disabled-text)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.no-left-pad{padding-left:0}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration,input[type=\"search\"]::-webkit-search-results-button,input[type=\"search\"]::-webkit-search-results-decoration{display:none}input[type=\"search\"].truncate-value{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.clear-button-container{align-items:center;margin-right:var(--ic-space-1px);display:none;visibility:hidden}.clear-button{border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus,.clear-button:active{background-color:var(--ic-color-focus-inner);box-shadow:inset 0 0 0 0.125rem var(--ic-color-focus-outer);border-radius:0.25rem}.clear-button-unfocused *{fill:var(--ic-search-bar-clear-button)}.clear-button:focus,.clear-button:active *{fill:var(--ic-atoms-input-clear-button-focus)}.clear-button-visible{visibility:visible;display:flex}.search-submit-button-container{display:flex;align-items:center}.search-submit-button-unfocused *{fill:var(--ic-search-bar-filled-icon)}.search-submit-button-disabled *{fill:var(--ic-search-bar-icon-disabled)}.search-submit-button-disabled .ic-tooltip-container{display:none !important}.search-submit-button:focus,.search-submit-button:active{background-color:var(--ic-color-focus-inner) !important;box-shadow:inset 0 0 0 0.125rem var(--ic-color-focus-outer) !important;border-radius:var(--ic-space-xxs)}.search-submit-button:focus,.search-submit-button:active *{fill:white}.divider{width:var(--ic-border-width);background-color:var(--ic-search-bar-dropdown-divider);height:var(--divider-height)}.menu-container{width:var(--input-width, 20rem);position:relative;top:var(--ic-space-xxxs)}.menu-container.fullwidth{width:100%}.no-results{cursor:not-allowed}.search-results-status{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);margin-bottom:calc(-1 * var(--ic-space-1px));margin-right:calc(-1 * var(--ic-space-1px));overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}@media (forced-colors: active){.search-submit-button-unfocused *{fill:canvastext}.search-submit-button-disabled *{fill:GrayText}}@media screen AND (max-width: 22rem){.menu-container{max-width:var(--menu-width, var(--input-width, 20rem));width:100%}}";
const IcSearchBarStyle0 = icSearchBarCss;

let inputIds = 0;
const SearchBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icChange = createEvent(this, "icChange", 7);
        this.icClear = createEvent(this, "icClear", 7);
        this.icInput = createEvent(this, "icInput", 7);
        this.icOptionSelect = createEvent(this, "icOptionSelect", 7);
        this.icMenuChange = createEvent(this, "icMenuChange", 7);
        this.icClearBlur = createEvent(this, "icClearBlur", 7);
        this.icRetryLoad = createEvent(this, "icRetryLoad", 7);
        this.icSubmitSearch = createEvent(this, "icSubmitSearch", 7);
        this.icSubmitSearchBlur = createEvent(this, "icSubmitSearchBlur", 7);
        this.icSearchBarBlur = createEvent(this, "icSearchBarBlur", 7);
        this.icSearchBarFocus = createEvent(this, "icSearchBarFocus", 7);
        this.icKeydown = createEvent(this, "icKeydown", 7);
        this.hasTimedOut = false;
        this.inputId = `ic-search-bar-input-${inputIds++}`;
        this.menuCloseFromMenuChangeEvent = false;
        this.menuId = `${this.inputId}-menu`;
        this.preLoad = true;
        this.preventSubmit = false;
        this.prevNoOption = false;
        this.retryButtonClick = false;
        this.retryViaKeyPress = false;
        this.truncateValue = false;
        this.clearButtonFocused = false;
        this.open = false;
        this.searchSubmitFocused = false;
        this.showClearButton = false;
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
         * The number of characters until suggestions appear. The submit button will be disabled until the inputted value is equal to or greater than this number.
         */
        this.charactersUntilSuggestion = 2;
        /**
         * If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /**
         * Specify whether to disable the built in filtering. For example, if options will already be filtered from external source.
         * If `true`, all options provided will be displayed.
         */
        this.disableAutoFiltering = false;
        /**
         * The amount of time, in milliseconds, to wait to trigger the `icChange` event after each keystroke.
         */
        this.debounce = 0;
        /**
         * The text displayed when there are no options in the option list.
         */
        this.emptyOptionListText = "No results found";
        /**
         * If `true`, the search bar will be focused when component loaded.
         */
        this.focusOnLoad = false;
        /**
         * Specify whether the search bar fills the full width of the container.
         * If `true`, this overrides the --input-width CSS variable.
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
         * The hint text for the hidden assistive description element.
         */
        this.assistiveHintText = "When autocomplete results are available use the up and down arrows to choose and press enter to select";
        /**
         * The custom name for the label field to correspond with the IcMenuOption type.
         */
        this.labelField = "label";
        /**
         * Trigger loading state when fetching options asynchronously
         */
        this.loading = false;
        /**
         * Change the message displayed when external loading times out.
         */
        this.loadingErrorLabel = "Loading Error";
        /**
         * Change the message displayed whilst the options are being loaded externally.
         */
        this.loadingLabel = "Loading...";
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * The placeholder value to display.
         */
        this.placeholder = "Search";
        /**
         * If `true` the parent form will not submit when the icSubmitSearch event fires.
         */
        this.preventFormSubmitOnSearch = false;
        /**
         * If `true`, the readonly state will be set.
         */
        this.readonly = false;
        /**
         * If `true`, the search bar will require a value.
         */
        this.required = false;
        /**
         * Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.
         */
        this.searchMode = "navigation";
        /**
         * The size of the search bar component.
         */
        this.size = "medium";
        /**
         * If `true`, the value of the search will have its spelling and grammar checked.
         */
        this.spellcheck = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The custom name for the value field to correspond with the IcMenuOption type.
         */
        this.valueField = "value";
        this.filteredOptions = [];
        /**
         * The suggested search options.
         */
        this.options = [];
        /**
         * The value of the search input.
         */
        this.value = "";
        this.handleClear = (ev) => {
            var _a;
            const keyboardEvent = ev;
            const mouseEvent = ev;
            if (mouseEvent.type === "click" ||
                keyboardEvent.code === "Enter" ||
                keyboardEvent.code === "Space") {
                this.value = "";
                (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.setAttribute("value", "");
                this.loading = false;
                clearTimeout(this.timeoutTimer);
                this.filteredOptions = this.options;
                this.showMenuWithNoInput() && this.setMenuChange(true);
                this.el.setFocus();
                this.icClear.emit();
                ev.preventDefault();
                this.preventSubmit = true;
            }
        };
        this.onInput = ({ target }) => {
            this.value = target.value;
            this.icInput.emit({ value: this.value });
            if (this.options.length > 0) {
                this.setMenuChange(true);
                this.preLoad = false;
                if (this.disableAutoFiltering === false) {
                    const rawFilteredOptions = getFilteredMenuOptions(this.options, false, this.value, "anywhere", this.labelField);
                    this.filteredOptions =
                        rawFilteredOptions.length > 0
                            ? rawFilteredOptions
                            : [
                                {
                                    [this.labelField]: this.emptyOptionListText,
                                    [this.valueField]: "",
                                },
                            ];
                }
            }
            if (!this.showClearButton)
                this.showClearButton = true;
            this.debounceAriaLiveUpdate();
        };
        this.onInputBlur = ({ target, relatedTarget }) => {
            this.icSearchBarBlur.emit({
                value: target.value,
                relatedTarget,
            });
        };
        this.onInputFocus = ({ target }) => {
            this.icSearchBarFocus.emit({ value: target.value });
            this.showClearButton = true;
        };
        this.handleClearBlur = ({ relatedTarget }) => {
            this.icClearBlur.emit({ relatedTarget });
            this.clearButtonFocused = false;
        };
        this.handleSubmitSearchBlur = ({ relatedTarget }) => {
            this.icSubmitSearchBlur.emit({ relatedTarget });
            this.searchSubmitFocused = false;
        };
        this.setInputValue = (newValue) => {
            if (this.inputEl) {
                const label = getLabelFromValue(newValue, this.options, this.valueField, this.labelField);
                if (label)
                    this.inputEl.value = label;
                else if (this.inputEl.value !== newValue) {
                    this.inputEl.value = newValue;
                }
            }
        };
        this.handleMouseDown = (ev) => {
            ev.preventDefault();
        };
        this.handleSubmitSearchFocus = () => {
            this.searchSubmitFocused = true;
        };
        this.handleSubmitSearch = () => {
            if (this.highlightedValue)
                this.value = this.highlightedValue;
            this.highlightedValue = undefined;
            this.icSubmitSearch.emit({ value: this.value });
            const form = this.el.closest("FORM");
            if (this.searchSubmitButton && !!form && !this.preventSubmit) {
                handleHiddenFormButtonClick(form, this.searchSubmitButton);
            }
        };
        this.handleSubmitSearchKeyDown = (ev) => {
            if (ev.key === " ") {
                ev.preventDefault();
                this.handleSubmitSearch();
            }
        };
        this.handleRetry = (ev) => {
            this.retryViaKeyPress = ev.detail.keyPressed === "Enter";
            this.icRetryLoad.emit({ value: ev.detail.value });
            this.triggerLoading();
            this.retryButtonClick = true;
        };
        this.triggerLoading = () => {
            const loadingOption = [
                {
                    [this.labelField]: this.loadingLabel,
                    [this.valueField]: "",
                    loading: true,
                },
            ];
            if (this.filteredOptions !== loadingOption)
                this.filteredOptions = loadingOption;
            if (this.timeout) {
                this.timeoutTimer = window.setTimeout(() => {
                    this.filteredOptions = [
                        {
                            [this.labelField]: this.loadingErrorLabel,
                            [this.valueField]: "",
                            timedOut: true,
                        },
                    ];
                }, this.timeout);
            }
        };
        this.handleOptionSelect = (ev) => {
            if (ev.detail.label === this.emptyOptionListText) {
                this.el.setFocus();
                return;
            }
            this.value = ev.detail.value;
            this.icOptionSelect.emit({ value: this.value });
        };
        this.handleMenuOptionHighlight = (ev) => {
            const { optionId } = ev.detail;
            if (optionId)
                this.highlightedValue = optionId.replace(`${this.menuId}-`, "");
            this.ariaActiveDescendant = optionId || "";
        };
        this.handleMenuChange = (ev) => {
            this.setMenuChange(ev.detail.open);
            if (!ev.detail.open) {
                this.menuCloseFromMenuChangeEvent = true;
            }
        };
        this.setMenuChange = (open) => {
            if (this.open !== open) {
                this.open = open;
                this.icMenuChange.emit({ open });
            }
        };
        this.handleHostFocus = () => {
            if (this.options &&
                (this.value || this.showMenuWithNoInput()) &&
                !this.menuCloseFromMenuChangeEvent) {
                this.setMenuChange(true);
            }
            this.truncateValue = false;
            this.showMenuWithNoInput() && this.debounceAriaLiveUpdate();
            this.icSearchBarFocus.emit();
        };
        this.handleHostBlur = ({ relatedTarget }) => {
            var _a;
            if (this.open &&
                this.options &&
                relatedTarget !== this.menu &&
                !this.retryViaKeyPress &&
                !this.retryButtonClick) {
                this.setMenuChange(false);
            }
            if (this.retryButtonClick || this.retryViaKeyPress) {
                (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
            }
            this.showClearButton = false;
            this.menuCloseFromMenuChangeEvent = false;
            this.truncateValue = true;
            this.icSearchBarBlur.emit({
                relatedTarget,
                value: this.value,
            });
            this.retryViaKeyPress = false;
            this.retryButtonClick = false;
            this.showMenuWithNoInput() && this.updateSearchResultAriaLive();
        };
        this.handleFocusClearButton = () => {
            this.clearButtonFocused = true;
        };
        this.renderAssistiveHintEl = () => {
            var _a, _b;
            const input = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`#${this.inputId}`);
            if (input &&
                Object.keys(input).length > 0 &&
                this.hasOptionsOrFilterDisabled()) {
                this.assistiveHintEl = document.createElement("span");
                this.assistiveHintEl.innerText = this.assistiveHintText;
                this.assistiveHintEl.id = `${this.inputId}-assistive-hint`;
                this.assistiveHintEl.style.display = "none";
                (_b = input.after) === null || _b === void 0 ? void 0 : _b.call(input, this.assistiveHintEl);
            }
        };
        this.updateSearchResultAriaLive = () => {
            var _a;
            const searchResultsStatusEl = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".search-results-status");
            if (searchResultsStatusEl) {
                if (!this.open ||
                    (this.value === "" && !this.showMenuWithNoInput()) ||
                    this.value.length < this.charactersUntilSuggestion) {
                    searchResultsStatusEl.innerText = "";
                }
                else if (this.hasOptionsOrFilterDisabled() &&
                    this.filteredOptions.length > 0 &&
                    this.open &&
                    !this.filteredOptions[0].loading) {
                    searchResultsStatusEl.innerText = this.hadNoOptions()
                        ? this.emptyOptionListText
                        : `${this.filteredOptions.length} result${this.filteredOptions.length > 1 ? "s" : ""} available`;
                }
            }
        };
        this.hasOptionsOrFilterDisabled = () => this.options.length > 0 || this.disableAutoFiltering;
        this.hadNoOptions = () => this.filteredOptions.length === 1 &&
            this.filteredOptions[0][this.labelField] === this.emptyOptionListText &&
            this.searchMode === "navigation";
        this.isSubmitDisabled = () => !this.value ||
            this.value.length < this.charactersUntilSuggestion ||
            this.disabled ||
            this.hadNoOptions() ||
            this.hasTimedOut ||
            this.loading;
        this.showMenuWithNoInput = () => this.charactersUntilSuggestion === 0;
        this.updateSearchButtonType = () => {
            this.searchButtonType =
                !!this.el.closest("FORM") &&
                    !this.preventFormSubmitOnSearch
                    ? "submit"
                    : "button";
        };
    }
    watchCharactersUntilSuggestionHandler() {
        if (this.showMenuWithNoInput()) {
            this.filteredOptions = this.options;
        }
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    debounceChanged() {
        this.icChange = debounceEvent(this.icChange, this.debounce);
    }
    loadingHandler(newValue) {
        if (newValue && !this.hasTimedOut) {
            this.preLoad = false;
            this.triggerLoading();
        }
    }
    preventFormSubmitOnSearchHandler() {
        this.updateSearchButtonType();
    }
    filteredOptionsHandler(newOptions) {
        this.hasTimedOut = newOptions.some((opt) => opt.timedOut);
    }
    watchOptionsHandler(newOptions) {
        if (this.disableAutoFiltering) {
            if (!this.hasTimedOut) {
                this.loading = false;
                clearTimeout(this.timeoutTimer);
                if (newOptions.length > 0) {
                    this.filteredOptions = newOptions;
                }
                else {
                    if (this.hadNoOptions()) {
                        return;
                    }
                    this.setMenuChange(true);
                    if (!this.preLoad) {
                        this.filteredOptions = [
                            {
                                [this.labelField]: this.emptyOptionListText,
                                [this.valueField]: "",
                            },
                        ];
                    }
                    this.preLoad = true;
                }
            }
        }
        else if (this.showMenuWithNoInput()) {
            this.filteredOptions = newOptions;
        }
        this.debounceAriaLiveUpdate();
    }
    watchValueHandler(newValue) {
        this.setInputValue(newValue);
        this.icChange.emit({ value: newValue });
    }
    connectedCallback() {
        this.debounceChanged();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.assistiveHintEl) === null || _a === void 0 ? void 0 : _a.remove();
    }
    componentWillLoad() {
        this.setInputValue(this.value);
        removeDisabledFalse(this.disabled, this.el);
        this.updateSearchButtonType();
    }
    componentDidLoad() {
        if (this.focusOnLoad) {
            this.el.setFocus();
        }
        if (this.hasOptionsOrFilterDisabled()) {
            this.renderAssistiveHintEl();
            if (this.disableAutoFiltering || this.showMenuWithNoInput()) {
                this.filteredOptions = this.options;
            }
        }
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Search Bar");
    }
    componentWillRender() {
        if (this.prevNoOption && this.menu && !this.hasTimedOut) {
            this.menu.handleSetFirstOption();
            this.prevNoOption = false;
        }
        if (this.filteredOptions.find((filteredOption) => filteredOption[this.labelField] === this.emptyOptionListText ||
            filteredOption[this.labelField] === this.loadingErrorLabel ||
            filteredOption[this.labelField] === this.loadingLabel)) {
            this.prevNoOption = true;
        }
    }
    handleKeyDown(event) {
        this.icKeydown.emit({ event });
        if (this.menu && this.open) {
            this.menu.handleKeyboardOpen(event);
        }
    }
    handleKeyUp(ev) {
        if (ev.key === "Enter") {
            if (this.preventSubmit || this.isSubmitDisabled()) {
                return;
            }
            this.handleSubmitSearch();
            this.setMenuChange(false);
        }
        if (ev.key === "Escape") {
            this.setMenuChange(false);
        }
        if (this.preventSubmit) {
            this.preventSubmit = false;
        }
    }
    /**
     * Sets focus on the native `input`.
     */
    async setFocus() {
        var _a;
        this.retryViaKeyPress = false;
        this.retryButtonClick = false;
        (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    debounceAriaLiveUpdate() {
        clearTimeout(this.debounceAriaLive);
        this.debounceAriaLive = window.setTimeout(() => {
            this.updateSearchResultAriaLive();
        }, 500);
    }
    render() {
        const { inputId, name, label, required, size, placeholder, helperText, disabled, value, readonly, spellcheck, fullWidth, options, open, hideLabel, menuId, ariaActiveDescendant, truncateValue, autofocus, autocapitalize, autocomplete, filteredOptions, theme, charactersUntilSuggestion, labelField, valueField, loadingLabel, loadingErrorLabel, searchMode, showClearButton, searchSubmitFocused, clearButtonFocused, searchButtonType, } = this;
        const disabledMode = readonly || disabled;
        const describedBy = getInputDescribedByText(this.el, inputId, helperText !== "", false).trim();
        let describedById = undefined;
        if (describedBy !== "" && this.hasOptionsOrFilterDisabled()) {
            describedById = `${describedBy} ${inputId}-assistive-hint`;
        }
        else if (this.hasOptionsOrFilterDisabled()) {
            describedById = `${inputId}-assistive-hint`;
        }
        else if (describedBy !== "") {
            describedById = describedBy;
        }
        const hasSuggestedSearch = (!!value || this.showMenuWithNoInput()) &&
            this.hasOptionsOrFilterDisabled();
        const menuOpen = hasSuggestedSearch && open && filteredOptions.length > 0;
        const menuRendered = menuOpen && value.length >= charactersUntilSuggestion;
        const labelValue = getLabelFromValue(value, options, valueField, labelField);
        renderHiddenInput(this.el, value, name, disabledMode);
        return (h(Host, { key: '71d9a6e7a555373e98a3ee7ea114fc1f69f06570', class: {
                "ic-search-bar-search": true,
                "ic-search-bar-full-width": fullWidth,
                "ic-search-bar-disabled": disabled,
                "ic-search-bar-small": size === "small",
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, onFocus: this.handleHostFocus, onBlur: this.handleHostBlur }, h("ic-input-container", { key: '23dfe2a04d5c039174366f85fa42df074fd30c98', readonly: readonly, disabled: disabledMode }, !hideLabel && (h("ic-input-label", { key: '1c222b2269cbab7436dc225b75e09568d323a1f0', for: inputId, label: label, helperText: helperText, required: required, disabled: disabledMode && !readonly, readonly: readonly }, h("slot", { key: 'e38a00e300ddc76daaf3c52332adab4ac16038c4', name: "helper-text", slot: "helper-text" }))), h("ic-input-component-container", { key: '17dff32cab5a5b34673c1255f0a1d696b9df84b4', ref: (el) => (this.anchorEl = el), size: size, disabled: disabledMode, readonly: readonly, fullWidth: fullWidth }, h("input", { key: 'e5d666c8a1609a1683b735940afd707e67b7eaa6', id: inputId, name: name, ref: (el) => (this.inputEl = el), value: options && !!labelValue ? labelValue : value, class: {
                "no-left-pad": readonly,
                readonly,
                "truncate-value": truncateValue,
            }, placeholder: placeholder, required: required, disabled: disabledMode, readonly: readonly, onInput: this.onInput, onBlur: this.onInputBlur, onFocus: this.onInputFocus, "aria-label": hideLabel ? label : undefined, "aria-activedescendant": ariaActiveDescendant, "aria-expanded": options.length > 0 && menuRendered ? `${menuOpen}` : undefined, "aria-owns": menuRendered ? menuId : undefined, "aria-describedby": describedById, "aria-controls": menuRendered ? menuId : undefined, "aria-haspopup": options.length > 0 ? "listbox" : undefined, "aria-autocomplete": hasSuggestedSearch ? "list" : undefined, role: options.length > 0 && menuRendered ? "combobox" : undefined, autocomplete: autocomplete, autocapitalize: autocapitalize, autoFocus: autofocus, spellcheck: spellcheck, inputmode: "search" }), h("div", { key: '98887c2626a05e3ddc15c7ddad3a756262c197e8', class: {
                "clear-button-container": true,
                "clear-button-visible": !!value && !disabledMode && showClearButton,
            } }, h("ic-button", { key: '119b7ae17e8c7cbd8a56e6bd8136340c269958e3', id: "clear-button", class: {
                "clear-button": true,
                "clear-button-unfocused": !clearButtonFocused,
            }, "aria-label": "Clear", innerHTML: clearIcon, onClick: this.handleClear, onMouseDown: this.handleMouseDown, size: size, onFocus: this.handleFocusClearButton, onBlur: this.handleClearBlur, onKeyDown: this.handleClear, type: "button", variant: "icon-tertiary", theme: clearButtonFocused ? "light" : "dark" }), h("div", { key: 'bf3e848c1e275217c686f3aab3b10a09396d6b4e', class: "divider" })), h("div", { key: '4075cd96e0274043b8da4e25d32a5cee5d4bb0e5', class: {
                "search-submit-button-container": true,
                "search-submit-button-disabled": this.isSubmitDisabled(),
            } }, h("ic-button", { key: '77e1e8bfef4ce5304dbf877b5ecfc440d37d864c', id: "search-submit-button", "aria-label": "Search", ref: (el) => (this.searchSubmitButton = el), class: {
                "search-submit-button": true,
                "search-submit-button-small": size === "small",
                "search-submit-button-unfocused": !searchSubmitFocused,
                "search-submit-button-disabled": this.isSubmitDisabled(),
            }, disabled: this.isSubmitDisabled(), innerHTML: searchIcon, size: size, onClick: this.handleSubmitSearch, onMouseDown: this.handleMouseDown, onBlur: this.handleSubmitSearchBlur, onFocus: this.handleSubmitSearchFocus, onKeyDown: this.handleSubmitSearchKeyDown, type: searchButtonType, variant: "icon-tertiary", theme: searchSubmitFocused ? "light" : "dark" }))), h("div", { key: '20e98815de9ec0c35fa247026de3d9e273161ea6', class: {
                "menu-container": true,
                fullwidth: fullWidth,
            } }, menuRendered && this.anchorEl && this.inputEl && (h("ic-menu", { key: 'b2f7d74335c27d93e9f5dc5b63bab80daeb3eeae', class: {
                "no-results": this.hadNoOptions() ||
                    (filteredOptions.length === 1 &&
                        (filteredOptions[0][labelField] === loadingLabel ||
                            filteredOptions[0][labelField] === loadingErrorLabel)),
            }, activationType: "manual", anchorEl: this.anchorEl, autofocusOnSelected: false, searchMode: searchMode, inputEl: this.inputEl, inputLabel: label, ref: (el) => (this.menu = el), fullWidth: fullWidth, menuId: menuId, open: true, options: filteredOptions, onMenuOptionSelect: this.handleOptionSelect, onMenuStateChange: this.handleMenuChange, onMenuOptionId: this.handleMenuOptionHighlight, onRetryButtonClicked: this.handleRetry, parentEl: this.el, value: value, labelField: labelField, valueField: valueField, searchBar: true })))), h("div", { key: 'f76306ff99a2c103fdea197759f6036d479dc51f', "aria-live": "polite", role: "status", class: "search-results-status" })));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "charactersUntilSuggestion": ["watchCharactersUntilSuggestionHandler"],
        "disabled": ["watchDisabledHandler"],
        "debounce": ["debounceChanged"],
        "loading": ["loadingHandler"],
        "preventFormSubmitOnSearch": ["preventFormSubmitOnSearchHandler"],
        "filteredOptions": ["filteredOptionsHandler"],
        "options": ["watchOptionsHandler"],
        "value": ["watchValueHandler"]
    }; }
};
SearchBar.style = IcSearchBarStyle0;

export { SearchBar as ic_search_bar };

//# sourceMappingURL=ic-search-bar.entry.js.map