import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-a7a720e7.js';
import { c as closeIcon } from './close-icon-539ec8d1.js';
import { h as checkResizeObserver, u as getSlotElements, i as isSlotUsed, o as onComponentRequiredPropUndefined } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icDialogCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);opacity:0}:host(.ic-dialog-fade-in){opacity:1}:host(.disable-height-constraint){background:none;justify-content:unset;align-items:unset}.dialog.disable-height-constraint{max-height:none;position:relative}.dialog.disable-height-constraint .content-area{overflow-y:visible}@media (prefers-reduced-motion: no-preference){:host{transition:opacity var(--ic-easing-transition-slow)}.dialog{transform:translateY(-3rem);transition:transform 1000s}:host(.ic-dialog-fade-in) .dialog{transform:translateY(0);transition:transform var(--ic-easing-transition-slow)}}:host(.ic-dialog-hidden){display:none}.dialog{background-color:var(--ic-dialog-background);color:var(--ic-dialog-text-primary);--ic-typography-color:var(--ic-dialog-text-primary);border:var(--ic-space-1px) solid var(--ic-dialog-border);border-radius:var(--ic-border-radius);padding:var(--ic-space-xs) 0 var(--ic-space-md);display:flex;flex-direction:column;box-sizing:border-box;overflow-x:visible}.small{width:50%;max-width:25rem;min-height:11rem;max-height:70vh}.medium{width:70vw;max-width:44rem;min-height:12.5rem;max-height:70vh}.large{width:90vw;max-width:62.5rem;min-height:12.5rem;max-height:90vh}.heading-area{display:flex;margin-bottom:var(--ic-space-xs);padding:0 var(--ic-space-md)}.heading{overflow-wrap:break-word}.close-icon{margin-left:auto}.close-icon>svg{color:var(--ic-dialog-clear-button)}.content-area{padding:0 var(--ic-space-md);margin:0;overflow-y:auto}#dialog-content{margin-bottom:var(--ic-space-sm)}#dialog-content ::slotted(ic-typography){overflow-wrap:break-word}#dialog-content ::slotted(*){position:relative}.dialog-controls{margin-top:auto;padding:var(--ic-space-xs) var(--ic-space-md) 0;display:flex;justify-content:flex-end;gap:var(--ic-space-md)}.dialog-control-button{width:-moz-fit-content;width:fit-content}.backdrop{overflow-y:auto;position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-dialog);padding-top:16px;padding-bottom:16px}.heading ic-typography{--ic-typography-color:var(--ic-dialog-text-primary)}.label ic-typography{--ic-typography-color:var(--ic-dialog-label)}@media (min-width: 800px){.large:not(.disable-width-constraint)>.content-area{width:75%}}@media (max-width: 576px){.dialog{width:100vw;height:100vh;max-width:none;max-height:none;box-sizing:border-box}.backdrop{padding:0}.dialog.disable-height-constraint{height:auto;min-height:100vh}}@media (max-width: 364px){.dialog-control-button{width:unset}}";
const IcDialogStyle0 = icDialogCss;

const Dialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icDialogCancelled = createEvent(this, "icDialogCancelled", 7);
        this.icDialogClosed = createEvent(this, "icDialogClosed", 7);
        this.icDialogConfirmed = createEvent(this, "icDialogConfirmed", 7);
        this.icDialogOpened = createEvent(this, "icDialogOpened", 7);
        this.contentAreaMutationObserver = null;
        this.DATA_GETS_FOCUS = "data-gets-focus";
        this.DIALOG_CONTROLS = "dialog-controls";
        this.dialogHeight = 0;
        this.focusedElementIndex = 0;
        this.IC_TEXT_FIELD = "IC-TEXT-FIELD";
        this.IC_ACCORDION = "IC-ACCORDION";
        this.IC_ACCORDION_GROUP = "IC-ACCORDION-GROUP";
        this.IC_CHECKBOX = "IC-CHECKBOX";
        this.IC_SEARCH_BAR = "IC-SEARCH-BAR";
        this.IC_TAB_CONTEXT = "IC-TAB-CONTEXT";
        this.interactiveElementList = [];
        this.resizeObserver = null;
        this.focusAttemptCount = 0;
        this.dialogRendered = false;
        this.fadeIn = false;
        /**
         * If set to `false`, the dialog will not close when the backdrop is clicked.
         */
        this.closeOnBackdropClick = true;
        /**
         * If 'true', sets the 'primary' or rightmost button to the destructive variant. Stops initial focus being set on the 'primary' or rightmost default or slotted button.
         */
        this.destructive = false;
        /**
         * Sets the dismiss label tooltip and aria label.
         */
        this.dismissLabel = "Dismiss";
        /**
         * If set to `true`, the content area max height and overflow properties are removed allowing the dialog to stretch below the fold.
         * This prop also prevents popover elements from being cut off within the content area.
         */
        this.disableHeightConstraint = false;
        /**
         * If set to `true`, the content area width property is removed, allowing content to take the full width of the dialog when using the large variant.
         */
        this.disableWidthConstraint = false;
        /**
         * If `true`, the close button will not be displayed.
         */
        this.hideCloseButton = false;
        /**
         * If set to `true`, default button controls will not be shown, but slotted dialog controls will still be displayed.
         */
        this.hideDefaultControls = false;
        /**
         * If `true`, the dialog will be displayed.
         */
        this.open = false;
        /**
         * Sets the maximum and minimum height and width for the dialog.
         */
        this.size = "small";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.dialogOpened = () => {
            var _a, _b;
            this.dialogRendered = true;
            if (this.disableHeightConstraint) {
                (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.show();
            }
            else {
                (_b = this.dialogEl) === null || _b === void 0 ? void 0 : _b.showModal();
            }
            setTimeout(() => {
                this.fadeIn = true;
                /**
                 * This is required to set scroll back to top if:
                 * - dialog content goes below the fold
                 * - is closed using cancel or confirm and reopened.
                 *
                 * Without this, the scroll bar will start from the dialog's last scroll-x coordinate.
                 */
                if (this.backdropEl &&
                    this.disableHeightConstraint &&
                    this.backdropEl.scrollTop !== 0) {
                    this.backdropEl.scrollTop = 0;
                }
            }, 10);
            setTimeout(() => {
                this.getInteractiveElements();
                this.setInitialFocus();
                checkResizeObserver(this.runResizeObserver);
            }, 75);
            setTimeout(() => {
                this.icDialogOpened.emit();
            }, 80);
        };
        this.runResizeObserver = () => {
            if (this.dialogEl) {
                this.resizeObserver = new ResizeObserver(() => {
                    clearTimeout(this.resizeTimeout);
                    this.resizeTimeout = window.setTimeout(this.resizeObserverCallback, 80);
                });
                this.resizeObserver.observe(this.dialogEl);
            }
        };
        this.resizeObserverCallback = () => {
            if (this.dialogEl && this.dialogEl.clientHeight !== this.dialogHeight) {
                this.dialogHeight = this.dialogEl.clientHeight;
            }
        };
        this.refreshInteractiveElementsOnSlotChange = () => {
            var _a, _b, _c;
            const contentWrapper = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#dialog-content");
            if (contentWrapper) {
                this.contentArea = contentWrapper.querySelector("slot");
                // Detect changes to slotted elements
                (_b = this.contentArea) === null || _b === void 0 ? void 0 : _b.addEventListener("slotchange", this.getInteractiveElements);
                this.contentAreaMutationObserver = new MutationObserver(() => {
                    this.getInteractiveElements();
                });
                // Detect changes to children of slotted elements
                (_c = getSlotElements(contentWrapper)) === null || _c === void 0 ? void 0 : _c.forEach((el) => {
                    var _a;
                    (_a = this.contentAreaMutationObserver) === null || _a === void 0 ? void 0 : _a.observe(el, {
                        childList: true,
                        subtree: true,
                    });
                });
            }
        };
        this.removeSlotChangeListener = () => {
            var _a;
            if (this.contentArea) {
                this.contentArea.removeEventListener("slotchange", this.getInteractiveElements);
                (_a = this.contentAreaMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
            }
        };
        this.setInitialFocus = () => {
            this.sourceElement = document.activeElement;
            if (!this.interactiveElementList.length) {
                // No interactive elements yet, retry shortly
                setTimeout(() => {
                    this.getInteractiveElements();
                    if (this.interactiveElementList.length) {
                        this.setInitialFocus();
                    }
                }, 10);
                return;
            }
            this.focusedElementIndex = this.interactiveElementList.findIndex((element) => element.hasAttribute(this.DATA_GETS_FOCUS));
            if (this.focusedElementIndex === -1) {
                this.focusedElementIndex = 0;
            }
            const elToFocus = this.interactiveElementList[this.focusedElementIndex];
            if (elToFocus) {
                this.focusElement(elToFocus);
            }
        };
        this.getFocusedElementIndex = () => {
            var _a;
            for (let i = 0; i < this.interactiveElementList.length; i++) {
                if (this.interactiveElementList[i] ===
                    (((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement) || document.activeElement)) {
                    this.focusedElementIndex = i;
                }
            }
        };
        this.closeIconClick = () => {
            this.open = false;
        };
        this.getInteractiveElements = () => {
            var _a;
            this.interactiveElementList = Array.from(((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("ic-button")) || []);
            const slottedInteractiveElements = Array.from(this.el.querySelectorAll(`a[href], button, input:not(.ic-input), textarea, select, details, [tabindex]:not([tabindex="-1"]),
          ic-button, ic-checkbox, ic-select, ic-search-bar, ic-tab-context,
          ic-back-to-top, ic-breadcrumb, ic-chip[dismissible="true"], ic-footer-link, ic-link, ic-navigation-button,
          ic-navigation-item, ic-switch, ic-text-field, ic-accordion-group, ic-accordion, ic-date-input, ic-date-picker`));
            if (slottedInteractiveElements.length > 0) {
                if (slottedInteractiveElements[0].slot !== this.DIALOG_CONTROLS) {
                    slottedInteractiveElements[0].setAttribute(this.DATA_GETS_FOCUS, "");
                }
                else if (!this.destructive) {
                    slottedInteractiveElements[slottedInteractiveElements.length - 1].setAttribute(this.DATA_GETS_FOCUS, "");
                }
            }
            for (let i = 0; i < slottedInteractiveElements.length; i++) {
                this.interactiveElementList.splice(1 + i, 0, slottedInteractiveElements[i]);
            }
        };
        this.getNextFocusEl = (focusedElementIndex) => this.interactiveElementList[focusedElementIndex];
        this.onTabKeyPress = (shiftKey) => {
            var _a;
            this.getFocusedElementIndex();
            if (((_a = this.interactiveElementList[this.focusedElementIndex]) === null || _a === void 0 ? void 0 : _a.tagName) ===
                this.IC_SEARCH_BAR) {
                return false;
            }
            this.setFocusIndexBasedOnShiftKey(shiftKey);
            this.loopNextFocusIndexIfLastElement();
            this.focusAttemptCount = 0;
            this.focusElement(this.getNextFocusEl(this.focusedElementIndex), shiftKey);
            return true;
        };
        this.shouldSkipElement = (element) => {
            if (!element) {
                return true;
            }
            const isHidden = getComputedStyle(element).visibility === "hidden" ||
                element.offsetHeight === 0 ||
                element.hasAttribute("disabled") ||
                (element.tagName === this.IC_ACCORDION_GROUP &&
                    element.hasAttribute("single-expansion"));
            const radioEl = element.closest("ic-radio-option");
            return (isHidden ||
                (element.getAttribute("type") === "radio" &&
                    !!radioEl &&
                    !(radioEl.hasAttribute("selected") || element.tabIndex === 0)));
        };
        this.focusElement = (element, shiftKey = false) => {
            if (!element) {
                return;
            }
            if (this.focusAttemptCount++ > this.interactiveElementList.length) {
                return;
            }
            if (this.shouldSkipElement(element)) {
                this.setFocusIndexBasedOnShiftKey(shiftKey);
                this.loopNextFocusIndexIfLastElement();
                this.focusElement(this.getNextFocusEl(this.focusedElementIndex), shiftKey);
            }
            else {
                switch (element.tagName) {
                    case this.IC_ACCORDION_GROUP:
                    case this.IC_ACCORDION:
                    case this.IC_SEARCH_BAR:
                    case this.IC_TEXT_FIELD:
                    case this.IC_CHECKBOX:
                    case this.IC_TAB_CONTEXT:
                        element.setFocus();
                        break;
                    default:
                        element.focus();
                }
            }
        };
        this.renderDialog = () => {
            const { hideDefaultControls, size, heading, label, destructive, dismissLabel, hideCloseButton, disableHeightConstraint, disableWidthConstraint, closeIconClick, DIALOG_CONTROLS, } = this;
            const controlsSlotUsed = isSlotUsed(this.el, DIALOG_CONTROLS);
            return (h("dialog", { class: {
                    dialog: true,
                    [`${size}`]: true,
                    "disable-height-constraint": !!disableHeightConstraint,
                    "disable-width-constraint": !!disableWidthConstraint,
                }, "aria-labelledby": "dialog-label dialog-heading", "aria-describedby": "dialog-alert dialog-content", ref: (el) => (this.dialogEl = el) }, h("div", { class: "heading-area" }, h("div", { class: "heading-content" }, h("div", { class: "label" }, h("slot", { name: "label" }, h("ic-typography", { variant: "label", id: "dialog-label" }, label))), h("div", { class: "heading" }, h("slot", { name: "heading" }, h("ic-typography", { variant: "h4", id: "dialog-heading" }, heading)))), !hideCloseButton && (h("ic-button", { class: "close-icon", variant: "icon-tertiary", innerHTML: closeIcon, "aria-label": dismissLabel, onClick: closeIconClick, "data-gets-focus": destructive || (hideDefaultControls && !controlsSlotUsed)
                    ? ""
                    : null }))), h("div", { class: "content-area" }, isSlotUsed(this.el, "alert") && h("slot", { name: "alert" }), h("div", { id: "dialog-content" }, h("slot", null))), (controlsSlotUsed || !hideDefaultControls) && (h("div", { class: {
                    [DIALOG_CONTROLS]: true,
                } }, controlsSlotUsed ? (h("slot", { name: DIALOG_CONTROLS })) : (h(Fragment, null, h("ic-button", { variant: "tertiary", onClick: () => this.cancelDialog(), class: "dialog-control-button", "data-gets-focus": null }, "Cancel"), h("ic-button", { variant: destructive ? "destructive" : "primary", onClick: () => this.confirmDialog(), class: "dialog-control-button", "data-gets-focus": "" }, "Confirm")))))));
        };
    }
    watchOpenHandler() {
        if (this.open) {
            this.dialogOpened();
        }
        else {
            this.fadeIn = false;
            if (this.resizeObserver !== null) {
                this.resizeObserver.disconnect();
            }
            setTimeout(() => {
                var _a, _b;
                this.dialogRendered = false;
                (_a = this.dialogEl) === null || _a === void 0 ? void 0 : _a.close();
                (_b = this.sourceElement) === null || _b === void 0 ? void 0 : _b.focus();
                this.dialogHeight = 0;
                this.icDialogClosed.emit();
            }, 80);
        }
    }
    disconnectedCallback() {
        this.removeSlotChangeListener();
    }
    componentDidLoad() {
        this.refreshInteractiveElementsOnSlotChange();
        if (this.open) {
            this.dialogOpened();
        }
        !isSlotUsed(this.el, "heading") &&
            onComponentRequiredPropUndefined([{ prop: this.heading, propName: "heading" }], "Dialog");
    }
    componentDidRender() {
        document.body.style.overflow =
            getComputedStyle(this.el).display !== "none" &&
                this.disableHeightConstraint
                ? "hidden"
                : "auto";
    }
    handleKeyboard(ev) {
        if (this.dialogRendered) {
            switch (ev.key) {
                case "Tab":
                    if (this.onTabKeyPress(ev.shiftKey)) {
                        ev.preventDefault();
                    }
                    break;
                case "Escape":
                    if (!ev.repeat) {
                        this.open = false;
                    }
                    ev.stopImmediatePropagation();
                    break;
            }
        }
    }
    handleClick(ev) {
        if (this.dialogEl &&
            this.closeOnBackdropClick &&
            ev.composedPath().indexOf(this.dialogEl) <= 0) {
            const { top, height, left, width } = this.dialogEl.getBoundingClientRect();
            const isInDialog = top <= ev.clientY &&
                ev.clientY <= top + height &&
                left <= ev.clientX &&
                ev.clientX <= left + width;
            if (!isInDialog) {
                this.open = false;
            }
        }
    }
    /**
     * Cancels the dialog. Used by the default 'Cancel' button or can be called manually to trigger cancelling of dialog.
     */
    async cancelDialog() {
        this.icDialogCancelled.emit();
        this.open = false;
    }
    /**
     * Confirms the dialog. Used by the default 'Confirm' button or can be called manually to trigger confirming of dialog.
     */
    async confirmDialog() {
        this.icDialogConfirmed.emit();
    }
    loopNextFocusIndexIfLastElement() {
        if (this.focusedElementIndex > this.interactiveElementList.length - 1)
            this.focusedElementIndex = 0;
        else if (this.focusedElementIndex < 0) {
            this.focusedElementIndex = this.interactiveElementList.length - 1;
        }
    }
    setFocusIndexBasedOnShiftKey(shiftKey) {
        if (shiftKey) {
            this.focusedElementIndex -= 1;
        }
        else {
            this.focusedElementIndex += 1;
        }
    }
    render() {
        const { dialogRendered, disableHeightConstraint, fadeIn, theme, size } = this;
        return (h(Host, { key: 'b7042e156db6ea72797e7e83ce6af29747c40d6a', class: {
                "ic-dialog-hidden": !dialogRendered,
                "ic-dialog-fade-in": fadeIn,
                "disable-height-constraint": !!disableHeightConstraint,
                [`ic-theme-${theme}`]: theme !== "inherit",
                [`ic-dialog-size-${size}`]: size != undefined,
            } }, disableHeightConstraint ? (h("div", { class: "backdrop", ref: (el) => (this.backdropEl = el) }, this.renderDialog())) : (this.renderDialog())));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["watchOpenHandler"]
    }; }
};
Dialog.style = IcDialogStyle0;

export { Dialog as ic_dialog };

//# sourceMappingURL=ic-dialog.entry.js.map