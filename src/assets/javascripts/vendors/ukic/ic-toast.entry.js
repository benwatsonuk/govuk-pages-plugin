import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { c as closeIcon } from './close-icon-539ec8d1.js';
import { V as VARIANT_ICONS } from './constants-7960cba4.js';
import { i as isSlotUsed, o as onComponentRequiredPropUndefined, N as getSlot, e as isPropDefined } from './helpers-dcedb279.js';

const icToastCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){:host{animation:fadein var(--ic-transition-duration-slow) ease-in-out}:host(.hidden){animation:fadeout var(--ic-transition-duration-slow) ease-in-out}}:host{--bottom-position:var(--ic-space-xl);position:fixed;bottom:var(--bottom-position);left:50%;transform:translate(-50%);z-index:var(--ic-z-index-toast)}:host(.ic-toast-hidden){display:none}:host(:focus){outline:none}.container{max-width:32.5rem;min-width:18rem;box-shadow:var(--ic-elevation-overlay);min-height:3.5rem;background-color:var(--ic-toast-background);display:flex;align-items:center;position:relative;border:var(--ic-space-1px) solid var(--ic-color-border-neutral-grey);border-radius:var(--ic-border-radius)}.toast-icon-container{height:100%;display:flex;align-items:center}.container-neutral{border-color:var(--ic-toast-status-neutral)}.container-info{border-color:var(--ic-toast-status-info)}.container-warning{border-color:var(--ic-toast-status-warning)}.container-error{border-color:var(--ic-toast-status-error)}.container-success{border-color:var(--ic-toast-status-success)}.container-ai{border-color:var(--ic-toast-status-ai)}.divider{height:100%;width:var(--ic-space-xs);position:absolute;border-radius:0}.divider-neutral{background-color:var(--ic-toast-status-neutral)}.divider-info{background-color:var(--ic-toast-status-info)}.divider-warning{background-color:var(--ic-toast-status-warning)}.divider-error{background-color:var(--ic-toast-status-error)}.divider-success{background-color:var(--ic-toast-status-success)}.divider-ai{background-color:var(--ic-toast-status-ai)}.toast-icon,::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg);margin-left:var(--ic-space-md)}:host(.ic-toast-variant-neutral) .toast-icon svg,::slotted(svg){fill:var(--ic-toast-icon-neutral)}:host(.ic-toast-variant-info) .toast-icon svg{fill:var(--ic-toast-icon-info)}:host(.ic-toast-variant-warning) .toast-icon svg{fill:var(--ic-toast-icon-warning)}:host(.ic-toast-variant-error) .toast-icon svg{fill:var(--ic-toast-icon-error)}:host(.ic-toast-variant-success) .toast-icon svg{fill:var(--ic-toast-icon-success)}:host(.ic-toast-variant-ai) .toast-icon svg{fill:var(--ic-toast-icon-ai)}.toast-content{margin-left:var(--ic-space-xs);width:100%}.no-icon{margin-left:var(--ic-space-md)}.toast-text{padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}.toast-heading{--ic-typography-color:var(--ic-toast-title)}.toast-message{--ic-typography-color:var(--ic-toast-description)}.toast-action-container{padding-bottom:var(--ic-space-md)}#dismiss-button{padding:var(--ic-space-xs)}#dismiss-button>svg{color:var(--ic-toast-dismiss-button)}ic-loading-indicator{--outer-color:transparent;--inner-color:var(--ic-action-monochrome)}.toast-dismiss-timer{padding:var(--ic-space-sm)}@media (max-width: 576px){:host{--bottom-position:var(--ic-space-lg);width:calc(100% - 2 * var(--ic-space-md))}}@media (min-width: 993px){:host{--bottom-position:calc(var(--ic-space-xl) + var(--ic-space-xs))}}@media (forced-colors: active){.container{border:var(--ic-border-hc)}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:var(--bottom-position);opacity:1}}@keyframes fadeout{from{bottom:var(--bottom-position);opacity:1}to{bottom:0;opacity:0}}";
const IcToastStyle0 = icToastCss;

const AUTO_DISMISS_TIMER_REFRESH_RATE_MS = 1000;
const TOAST_HEADING_CHAR_LIMIT = 70;
const TOAST_MESSAGE_CHAR_LIMIT = 140;
const Toast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icDismiss = createEvent(this, "icDismiss", 7);
        this.interactiveElements = [];
        this.timerProgress = 100;
        this.visible = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * If toast dismissMode is set to `automatic`, use this prop to define the time before the toast dismisses (in MILLISECONDS)
         * (NOTE: Has a minimum value of `5000ms`)
         */
        this.autoDismissTimeout = 5000;
        /**
         * If toast can be manually dismissed, this prop sets a custom aria-label for the ic-button component
         */
        this.dismissButtonAriaLabel = "dismiss";
        /**
         * How the toast will be dismissed. If manual will display a dismiss button.
         */
        this.dismissMode = "manual";
        this.dismissAction = () => {
            this.icDismiss.emit();
        };
        this.handleProgressChange = () => {
            this.timerProgress -=
                (AUTO_DISMISS_TIMER_REFRESH_RATE_MS / this.autoDismissTimeout) * 100;
        };
        this.onFocus = () => {
            if (this.focusInteractiveElement) {
                this.isManual = true;
            }
        };
        this.onBlur = () => {
            this.handleTimer({ type: "mouseleave" });
        };
    }
    dismissModeChangeHandler(newValue) {
        this.isManual = newValue === "manual";
    }
    disconnectedCallback() {
        window.clearTimeout(this.dismissTimeout);
        window.clearInterval(this.timerRefreshInterval);
    }
    componentWillLoad() {
        var _a, _b;
        this.handleLongText(this.heading.length > TOAST_HEADING_CHAR_LIMIT, !!this.message && ((_a = this.message) === null || _a === void 0 ? void 0 : _a.length) > TOAST_MESSAGE_CHAR_LIMIT);
        if (this.autoDismissTimeout < 5000)
            this.autoDismissTimeout = 5000;
        if (isSlotUsed(this.el, "action"))
            this.dismissMode = "manual";
        this.isManual = this.dismissMode === "manual";
        if (isSlotUsed(this.el, "neutral-icon"))
            this.variant = "neutral";
        if (this.variant === "neutral") {
            this.neutralVariantLabel =
                (_b = this.neutralIconAriaLabel) !== null && _b !== void 0 ? _b : VARIANT_ICONS[this.variant].ariaLabel;
        }
        if (this.isManual) {
            const toastMessage = isPropDefined(this.message)
                ? `. ${this.message}`
                : "";
            this.el.setAttribute("aria-label", this.variant
                ? this.neutralVariantLabel || VARIANT_ICONS[this.variant].ariaLabel
                : this.heading);
            (this.variant || this.message) &&
                this.el.setAttribute("aria-description", this.variant ? `${this.heading}${toastMessage}` : this.message || "");
        }
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.heading, propName: "heading" }], "Toast");
    }
    componentDidUpdate() {
        var _a;
        if (this.focusInteractiveElement && this.isManual) {
            this.resetAutoDismissTimer();
            const actionContent = getSlot(this.el, "action");
            const dismissButton = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ic-button");
            if (actionContent)
                this.interactiveElements.push(actionContent);
            if (dismissButton)
                this.interactiveElements.push(dismissButton);
            this.focusInteractiveElement = false;
            this.findNextInteractiveElement(this.shiftKeyPressed).setFocus();
            this.shiftKeyPressed = false;
        }
    }
    watchVisibleHandler() {
        var _a;
        if (this.visible) {
            const actionContent = getSlot(this.el, "action");
            const dismissButton = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ic-button");
            if (actionContent)
                this.interactiveElements.push(actionContent);
            if (dismissButton)
                this.interactiveElements.push(dismissButton);
        }
        else {
            this.interactiveElements = [];
        }
    }
    handleDismiss() {
        this.visible = false;
        this.resetAutoDismissTimer();
    }
    handleKeyboard(ev) {
        if (this.visible) {
            if (this.isManual) {
                switch (ev.key) {
                    case "Tab":
                        ev.preventDefault();
                        this.findNextInteractiveElement(ev.shiftKey).setFocus();
                        break;
                    case "Escape":
                        !ev.repeat && this.dismissAction();
                        ev.stopImmediatePropagation();
                        break;
                }
            }
            else {
                if (ev.key === "Tab") {
                    this.shiftKeyPressed = ev.shiftKey;
                    this.focusInteractiveElement = true;
                }
            }
        }
    }
    handleTimer(ev) {
        switch (ev.type) {
            case "mouseenter":
                if (!this.isManual) {
                    this.resetAutoDismissTimer();
                }
                this.isManual = true;
                break;
            case "mouseleave":
                if (this.dismissMode === "automatic") {
                    this.isManual = false;
                    this.interactiveElements = [];
                    if (this.visible) {
                        this.dismissTimeout = window.setTimeout(this.dismissAction, this.autoDismissTimeout);
                        this.timerRefreshInterval = window.setInterval(this.handleProgressChange, AUTO_DISMISS_TIMER_REFRESH_RATE_MS);
                    }
                }
                break;
        }
    }
    /**
     * @internal Used to display the individual toast.
     * @returns The element that previously had focus before the toast appeared
     */
    async setVisible() {
        if (!this.visible)
            this.visible = true;
        if (!this.isManual) {
            this.dismissTimeout = window.setTimeout(this.dismissAction, this.autoDismissTimeout);
            this.timerRefreshInterval = window.setInterval(this.handleProgressChange, AUTO_DISMISS_TIMER_REFRESH_RATE_MS);
            return null;
        }
        else {
            window.setTimeout(() => this.interactiveElements[0].setFocus(), 200);
            return document.activeElement;
        }
    }
    handleLongText(headingTooLong, messageTooLong) {
        if (messageTooLong || headingTooLong) {
            console.error(`Too many characters in toast ${headingTooLong ? "heading" : ""}${headingTooLong && messageTooLong ? " and " : ""}${messageTooLong ? "message" : ""}. Refer to character limits specified in the prop description`);
        }
    }
    findNextInteractiveElement(isBackwards) {
        const firstEl = this.interactiveElements[0];
        const lastEl = this.interactiveElements[this.interactiveElements.length - 1];
        if (this.isActive(isBackwards ? firstEl : lastEl))
            return isBackwards ? lastEl : firstEl;
        let currentIndex = 0;
        return this.interactiveElements.some((el, index) => {
            if (!this.isActive(el))
                return false;
            currentIndex = index;
            return true;
        })
            ? this.interactiveElements[currentIndex + (isBackwards ? -1 : 1)]
            : firstEl;
    }
    resetAutoDismissTimer() {
        window.clearTimeout(this.dismissTimeout);
        window.clearInterval(this.timerRefreshInterval);
        this.timerProgress = 100;
    }
    isActive(targetEl) {
        return targetEl === this.el
            ? !!this.el.shadowRoot.activeElement
            : document.activeElement === targetEl;
    }
    render() {
        const { variant, heading, message, visible, isManual, dismissButtonAriaLabel, theme, } = this;
        return (h(Host, { key: '9934a16e3f339bec971138aec7d46092216d5554', class: {
                [`ic-theme-${theme}`]: theme !== "inherit",
                ["ic-toast-hidden"]: !visible,
                [`ic-toast-variant-${variant}`]: variant !== undefined,
            }, tabindex: "0", onFocus: this.onFocus, onBlur: this.onBlur, role: isManual ? "dialog" : "alert", "aria-live": isManual ? null : "polite" }, h("div", { key: '97a03d41017adf58f826e42291906b3225ab091c', class: {
                ["container"]: true,
                [`container-${variant}`]: variant !== undefined,
            } }, variant && visible && (h("div", { key: '289b4544bee27fd02b20deae22b5bbb822844c9e', class: "toast-icon-container" }, h("div", { key: '03dae21944b95c1d96e2a6b2480b0c20e12ccbd7', class: {
                ["divider"]: true,
                [`divider-${variant}`]: true,
            } }), variant === "neutral" ? (h("slot", { name: "neutral-icon" })) : (h("span", { class: "toast-icon", innerHTML: VARIANT_ICONS[variant].icon })))), h("div", { key: '6191a3f5c39adfa8c5ab4ca5c9e35fd214e00fa2', class: {
                ["toast-content"]: true,
                ["no-icon"]: variant === "neutral" && !isSlotUsed(this.el, "neutral-icon"),
            } }, h("div", { key: '1e08fbbfa2ba920c1b90f2eaf35aa801830d47b0', class: "toast-text" }, h("ic-typography", { key: 'ebc61cb12c3bdd05511ae567d09f5504ad010c47', variant: "subtitle-large", class: "toast-heading" }, visible && (isManual ? h("h5", null, heading) : h("p", null, heading))), message && (h("ic-typography", { key: '48ffe5377a09237ac490c8d4a62e962979ce6dc0', variant: "body", class: "toast-message" }, visible && h("p", { key: '7fbffa0f6e6d30389a9d0e5a3b5e1c279911ed9a' }, message)))), isSlotUsed(this.el, "action") && (h("div", { key: '83ba75d3d7aa54caf13cc7723defee623103dffc', class: "toast-action-container" }, h("slot", { key: '18367dd5f8acdc33129ead64728abc71a82f7e57', name: "action" })))), !isManual ? (h("ic-loading-indicator", { class: "toast-dismiss-timer", theme: "dark", monochrome: true, size: "icon", progress: this.timerProgress, description: "Dismiss timer" })) : (h("ic-button", { id: "dismiss-button", innerHTML: closeIcon, onClick: this.dismissAction, variant: "icon-tertiary", "aria-label": dismissButtonAriaLabel })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "dismissMode": ["dismissModeChangeHandler"],
        "visible": ["watchVisibleHandler"]
    }; }
};
Toast.style = IcToastStyle0;

export { Toast as ic_toast };

//# sourceMappingURL=ic-toast.entry.js.map