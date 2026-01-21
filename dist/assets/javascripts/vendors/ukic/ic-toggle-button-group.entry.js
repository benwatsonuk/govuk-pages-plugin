import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { r as removeDisabledFalse } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icToggleButtonGroupCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:root{display:block}:host{display:flex;flex-direction:row;width:-moz-fit-content;width:fit-content;min-width:-moz-min-content;min-width:min-content;border:var(--ic-border-width) solid var(--ic-toggle-button-unselected-border);border-radius:var(--ic-border-radius)}:host(.ic-toggle-button-group-full-width){width:100%;max-width:100%}:host(.ic-toggle-button-group-loading){min-width:-moz-max-content;min-width:max-content}:host(:focus){box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast);outline:none}::slotted(ic-toggle-button){flex-grow:1;width:-moz-min-content;width:min-content;--toggle-button-border:none !important;--toggle-button-border-hover:none !important;--toggle-button-border-active:none !important}::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border)}:host(.ic-toggle-button-group-disabled){border:var(--ic-space-1px) dashed\n    var(--ic-toggle-button-unselected-border-disabled);pointer-events:none}:host(.ic-toggle-button-group-disabled) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-space-1px) dashed\n    var(--ic-toggle-button-unselected-border-disabled)}:host(.ic-toggle-button-group-monochrome){border:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-monochrome)}:host(.ic-toggle-button-group-monochrome) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-monochrome)}:host(.ic-toggle-button-group-disabled.ic-toggle-button-group-monochrome){border:var(--ic-border-width) dashed\n    var(--ic-toggle-button-unselected-border-disabled-monochrome)}:host(.ic-toggle-button-group-disabled.ic-toggle-button-group-monochrome) ::slotted(ic-toggle-button:not(:last-of-type)){border-right:var(--ic-border-width) solid\n    var(--ic-toggle-button-unselected-border-disabled-monochrome)}:host(.ic-toggle-button-group-hide-outline){--ic-toggle-button-unselected-border:transparent;--ic-toggle-button-unselected-border-disabled:transparent;--ic-toggle-button-unselected-border-monochrome:transparent;--ic-toggle-button-unselected-border-disabled-monochrome:transparent}";
const IcToggleButtonGroupStyle0 = icToggleButtonGroupCss;

const TOGGLE_GROUP = "IC-TOGGLE-BUTTON-GROUP";
const ToggleButtonGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icChange = createEvent(this, "icChange", 7);
        this.lastKeyPressed = {
            key: null,
            shift: false,
        };
        this.externallySetActiveToggle = null;
        /**
         * The accessible label of the toggle button group component to provide context for screen reader users.
         */
        this.accessibleLabel = "Toggle button group";
        /**
         * If `true`, the toggle button group will be set to the disabled state.
         */
        this.disabled = false;
        /**
         * If `true`, the toggle button group will fill the width of the container.
         */
        this.fullWidth = false;
        /**
         * If `true`, the toggle button group will be in loading state.
         */
        this.loading = false;
        /**
         * If `true`, the toggle button group will display as black in the light theme, and white in dark theme.
         */
        this.monochrome = false;
        /**
         * If `true`, the toggle button group will display with an outline.
         */
        this.outline = true;
        /**
         * If `auto`, controls are toggled automatically when navigated to. If `manual`, the controls must be actioned to change their toggled state. The value of this prop is ignored if `selectType` is set to`multi`.
         */
        this.selectMethod = "manual";
        /**
         * Sets whether single or multiple options can be toggled. If `multi`, then the `selectMethod` is always `manual`.
         */
        this.selectType = "single";
        /**
         * The size of the toggle buttons to be displayed. This does not affect the font size of the accessible label.
         */
        this.size = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The position of the tooltip in relation to the toggle buttons.
         */
        this.tooltipPlacement = "bottom";
        /**
         * The variant of the toggle button.
         */
        this.variant = "default";
        this.keyListener = (ev) => {
            this.lastKeyPressed = {
                key: ev.key,
                shift: ev.shiftKey,
            };
        };
        this.handleHostFocus = ({ target, relatedTarget }) => {
            var _a;
            if (this.disabled) {
                target === null || target === void 0 ? void 0 : target.blur();
                return;
            }
            if (this.loading)
                return;
            const el = target;
            const relEl = relatedTarget;
            const toggleButtons = Array.from((el === null || el === void 0 ? void 0 : el.querySelectorAll("ic-toggle-button")) || []);
            const noToggleButtonsChecked = toggleButtons.every((el) => !el.checked);
            const { shift } = this.lastKeyPressed;
            if (((noToggleButtonsChecked || this.selectType !== "single") && !shift) ||
                (noToggleButtonsChecked && shift && (relEl === null || relEl === void 0 ? void 0 : relEl.tagName) == TOGGLE_GROUP)) {
                (_a = toggleButtons[0]) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else if (!shift || (relEl === null || relEl === void 0 ? void 0 : relEl.tagName) == TOGGLE_GROUP) {
                // if checked is true and selectMethod is "single", focus that toggle
                toggleButtons.filter((el) => el.checked)[0].focus();
            }
        };
        this.handleKeyDown = ({ key }) => {
            if (key !== "ArrowDown" &&
                key !== "ArrowRight" &&
                key !== "ArrowLeft" &&
                key !== "ArrowUp")
                return;
            const toggleButtonOptions = this.getAllToggleButtons();
            let targetToggle;
            if (this.externallySetActiveToggle) {
                targetToggle =
                    toggleButtonOptions[this.getNextItemToSelect(toggleButtonOptions.indexOf(toggleButtonOptions.filter((el) => el === this.externallySetActiveToggle)[0]), key === "ArrowDown" || key === "ArrowRight")];
            }
            else {
                targetToggle =
                    toggleButtonOptions[this.getNextItemToSelect(toggleButtonOptions.indexOf(toggleButtonOptions.filter((el) => el === document.activeElement)[0]), key === "ArrowDown" || key === "ArrowRight")];
            }
            if (this.selectMethod === "auto") {
                // trigger selectHandler when unable to add 'target'
                targetToggle.checked = true;
                this.selectHandler(new CustomEvent("icToggleChecked", {
                    detail: {
                        checked: targetToggle.checked,
                    },
                }), targetToggle);
            }
            else {
                targetToggle.focus();
            }
        };
        this.getNextItemToSelect = (currentItem, movingDown) => {
            const toggleButtonOptions = this.getAllToggleButtons();
            const numToggles = toggleButtonOptions.length - 1;
            if (currentItem < 1) {
                currentItem = 0;
            }
            let nextItem = movingDown ? currentItem + 1 : currentItem - 1;
            if (nextItem < 0) {
                nextItem = numToggles;
            }
            else if (nextItem > numToggles) {
                nextItem = 0;
            }
            if (toggleButtonOptions[nextItem].disabled) {
                nextItem = this.getNextItemToSelect(nextItem, movingDown);
            }
            return nextItem;
        };
        this.getAllToggleButtons = () => Array.from(this.el.querySelectorAll("ic-toggle-button"));
    }
    watchDisabledHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.disabled = this.disabled;
        });
        removeDisabledFalse(this.disabled, this.el);
    }
    watchFullWidthHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.fullWidth = this.fullWidth;
        });
    }
    watchLoadingHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.loading = this.loading;
        });
    }
    watchMonochromeHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.monochrome = this.monochrome;
        });
    }
    watchOutlineHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.outline = this.outline;
        });
    }
    watchSizeHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.size = this.size;
        });
    }
    watchThemeHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.theme = this.theme;
        });
    }
    watchTooltipPlacementHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.tooltipPlacement = this.tooltipPlacement;
        });
    }
    watchVariantHandler() {
        this.getAllToggleButtons().forEach((el) => {
            el.variant = this.variant;
        });
    }
    selectHandler(ev, tabTarget) {
        const allToggles = this.getAllToggleButtons();
        let clickedToggle = ev.target;
        if (tabTarget)
            tabTarget.focus(); // tabTarget used in proxySelectHandler
        if (this.selectType === "single") {
            if (!clickedToggle && tabTarget) {
                clickedToggle = tabTarget;
            }
            allToggles.forEach((el) => {
                if (el.id !== clickedToggle.id && el.checked) {
                    el.checked = false;
                }
            });
            this.icChange.emit({
                checked: ev.detail.checked,
                selectedOption: clickedToggle,
            });
        }
        else {
            const toggledOptions = allToggles.filter((el) => el.checked && !el.disabled);
            this.icChange.emit({
                checked: toggledOptions.map((opt) => opt.checked),
                toggledOptions: toggledOptions.map((opt) => ({
                    toggleButton: opt,
                })),
                selectedOption: clickedToggle,
            });
        }
    }
    /**
     * @internal Used to enable other components to set the active toggle button when toggle button group is in a shadow dom.
     */
    async setActiveToggle(toggle) {
        this.externallySetActiveToggle = toggle;
    }
    componentWillLoad() {
        if (this.selectType === "multi")
            this.selectMethod = "manual";
        document.addEventListener("keydown", this.keyListener);
        removeDisabledFalse(this.disabled, this.el);
    }
    componentDidLoad() {
        this.getAllToggleButtons().forEach((el, i) => {
            var _a, _b, _c;
            const btn = (_c = (_b = (_a = el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ic-button")) === null || _b === void 0 ? void 0 : _b.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("button");
            if (btn) {
                const btnAriaLabel = btn.getAttribute("aria-label");
                const aria = btnAriaLabel ? `${btnAriaLabel}, ` : "";
                btn.setAttribute("aria-label", `${aria}${this.accessibleLabel}`);
            }
            el.id = i.toString();
            el.tabIndex = -1;
            el.addEventListener("keydown", (ev) => {
                this.handleKeyDown(ev);
            });
            el.classList.add("expand-toggle-group-child");
        });
    }
    disconnectedCallback() {
        document === null || document === void 0 ? void 0 : document.removeEventListener("keydown", this.keyListener);
    }
    render() {
        const { accessibleLabel, disabled, fullWidth, loading, monochrome, outline, theme, } = this;
        return (h(Host, { key: '5ae12c9f09c65a04cbe1f19850998c0d942327c8', role: "group", "aria-label": accessibleLabel, tabindex: disabled ? -1 : 0, class: {
                "ic-toggle-button-group-disabled": disabled,
                "ic-toggle-button-group-full-width": fullWidth,
                "ic-toggle-button-group-loading": loading,
                "ic-toggle-button-group-monochrome": monochrome,
                "ic-toggle-button-group-hide-outline": !outline,
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, onFocus: this.handleHostFocus }, h("slot", { key: '02c4f4cd7df626d4032246bdbcd7e07d2167ba52' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "fullWidth": ["watchFullWidthHandler"],
        "loading": ["watchLoadingHandler"],
        "monochrome": ["watchMonochromeHandler"],
        "outline": ["watchOutlineHandler"],
        "size": ["watchSizeHandler"],
        "theme": ["watchThemeHandler"],
        "tooltipPlacement": ["watchTooltipPlacementHandler"],
        "variant": ["watchVariantHandler"]
    }; }
};
ToggleButtonGroup.style = IcToggleButtonGroupStyle0;

export { ToggleButtonGroup as ic_toggle_button_group };

//# sourceMappingURL=ic-toggle-button-group.entry.js.map