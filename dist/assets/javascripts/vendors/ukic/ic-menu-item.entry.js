import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { e as isPropDefined, r as removeDisabledFalse, o as onComponentRequiredPropUndefined, i as isSlotUsed } from './helpers-dcedb279.js';
import { C as Check } from './check-icon-4a9f8371.js';
import { C as Chevron } from './chevron-icon-589e3b46.js';
import './constants-7960cba4.js';

const icMenuItemCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host ::part(button){color:var(--ic-popover-menu-item-check);--ic-typography-color:var(--ic-popover-menu-item-check);padding:calc(var(--ic-space-xxxs) / 2);display:flex;align-items:flex-start;gap:var(--ic-space-xs);border-radius:0;min-height:2.5rem;height:auto}.focus-border{display:flex;align-items:flex-start;gap:var(--ic-space-xs);border-radius:var(--ic-border-radius);margin:calc(var(--ic-space-xxxs) / 2);padding:var(--ic-space-xxs);border:var(--ic-space-xxxs) dashed transparent;--icon-height:auto}:host(.ic-menu-item-disabled) ::part(button){color:var(--ic-popover-menu-item-check-disabled) !important;--ic-typography-color:var(--ic-popover-menu-item-check-disabled) !important;pointer-events:none}:host(.ic-menu-item-disabled) .menu-item-label,:host(.ic-menu-item-disabled) .shortcut,:host(.ic-menu-item-disabled) .menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-label-disabled) !important}:host(.ic-menu-item-variant-destructive) ::part(button){color:var(--ic-popover-menu-destructive-item-icon);--ic-typography-color:var(--ic-popover-menu-destructive-item-label)}:host ::part(button):hover{background-color:var(--ic-popover-background-hover)}:host ::part(button):focus-visible,:host ::part(button):focus{color:var(--ic-popover-menu-item-icon-focused);--ic-typography-color:purple;background-color:var(--ic-popover-background-focus);box-shadow:none}:host(.ic-menu-item-disabled) ::part(button):focus-visible,:host(.ic-menu-item-disabled) ::part(button):focus{color:var(--ic-popover-menu-item-icon-disabled) !important;--ic-typography-color:orange !important}:host(.ic-menu-item-variant-destructive) ::part(button):focus-visible,:host(.ic-menu-item-variant-destructive) ::part(button):focus{background-color:var(--ic-popover-destructive-background-focus)}ic-button:focus-within .menu-item-label,ic-button:focus-within .shortcut,ic-button:focus-within .menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-label-focused)}:host(.ic-menu-item-disabled) ic-button:focus-within .focus-border{border-color:var(--ic-popover-menu-border)}:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-label,:host(.ic-menu-item-disabled) ic-button:focus-within .shortcut,:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-label-disabled) !important}:host ::part(button):active{background-color:var(--ic-popover-background-pressed);color:var(--ic-popover-menu-item-label) !important;--ic-typography-color:var(--ic-popover-menu-item-label) !important}:host(.ic-menu-item-variant-destructive) ::part(button):active{background-color:var(--ic-popover-background-pressed);color:var(--ic-popover-menu-destructive-item-label) !important;--ic-typography-color:var(\n    --ic-popover-menu-destructive-item-label\n  ) !important}.menu-item-info{display:flex;flex-direction:column;flex:1;align-items:baseline;white-space:pre-line;text-align:left}.menu-labels{display:flex;align-items:baseline;gap:var(--ic-space-xs)}.menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-description)}.shortcut{--ic-typography-color:var(--ic-popover-menu-item-shortcut);display:flex;flex:min-content}:host(.ic-menu-item-variant-destructive) .menu-item-label{text-transform:uppercase;font-weight:600;letter-spacing:0.025em}ic-button:active .menu-item-label{--ic-typography-color:var(--ic-popover-menu-item-label)}ic-button:active .menu-item-description{--ic-typography-color:var(--ic-popover-menu-item-description)}ic-button:active .shortcut{--ic-typography-color:var(--ic-popover-menu-item-shortcut)}:host(.ic-menu-item-variant-destructive) ic-button:active .menu-item-label{--ic-typography-color:var(\n    --ic-popover-menu-destructive-item-label\n  ) !important}.icon,.check-icon,.submenu-icon,.icon ::slotted(svg),.check-icon svg,.submenu-icon svg{width:var(--ic-space-lg);height:var(--ic-space-lg)}.check-icon.hide{visibility:hidden}@media (forced-colors: active){:host ::part(button){border:canvas}:host ::part(button):focus-visible{outline:var(--ic-space-xxxs) solid transparent}.focus-border{border-color:canvas}:host(.ic-menu-item-disabled) ic-button:focus-within .focus-border{border-color:GrayText}:host(.ic-menu-item-disabled) .menu-item-info,:host(.ic-menu-item-disabled) .menu-item-label,:host(.ic-menu-item-disabled) .shortcut,:host(.ic-menu-item-disabled) .menu-item-description,:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-info,:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-label,:host(.ic-menu-item-disabled) ic-button:focus-within .shortcut,:host(.ic-menu-item-disabled) ic-button:focus-within .menu-item-description{--ic-typography-color:GrayText !important}:host(.ic-menu-item-disabled) ::part(button):focus-visible,:host(.ic-menu-item-disabled) ::part(button):focus{outline-color:GrayText !important}}";
const IcMenuItemStyle0 = icMenuItemCss;

const MenuItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.childBlur = createEvent(this, "childBlur", 7);
        this.handleMenuItemClick = createEvent(this, "handleMenuItemClick", 7);
        this.icToggleChecked = createEvent(this, "icToggleChecked", 7);
        this.triggerPopoverMenuInstance = createEvent(this, "triggerPopoverMenuInstance", 7);
        /**
         * If `true`, the menu item will be in a checked state. This is only applicable when variant is set to `toggle`.
         */
        this.checked = false;
        /**
         * If `true`, the menu item will be in disabled state.
         */
        this.disabled = false;
        /**
         * The variant of the menu item.
         */
        this.variant = "default";
        this.handleClick = (e) => {
            if (isPropDefined(this.submenuTriggerFor)) {
                this.triggerPopoverMenuInstance.emit();
            }
            else if (this.variant === "toggle") {
                e.preventDefault();
                this.checked = !this.checked;
                this.icToggleChecked.emit({
                    checked: this.checked,
                });
            }
            this.handleMenuItemClick.emit(this.el);
        };
        this.getMenuItemAriaLabel = () => {
            let ariaLabel = this.label;
            if (isPropDefined(this.description)) {
                ariaLabel = `${ariaLabel}, ${this.description}`;
            }
            if (isPropDefined(this.keyboardShortcutLabel)) {
                ariaLabel = `${ariaLabel}, ${this.keyboardShortcutLabel}`;
            }
            if (this.variant === "destructive") {
                ariaLabel = `${ariaLabel}, destructive`;
            }
            if (isPropDefined(this.submenuTriggerFor)) {
                ariaLabel = `${ariaLabel}, triggers submenu`;
            }
            if (this.el.classList.contains("ic-popover-submenu-back-button")) {
                ariaLabel = "Go back to parent menu";
            }
            const parentEl = this.el.parentElement;
            if (parentEl &&
                parentEl.tagName === "IC-MENU-GROUP" &&
                parentEl.label) {
                return `${ariaLabel}, ${parentEl.label} menu group`;
            }
            else {
                return ariaLabel;
            }
        };
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    componentWillLoad() {
        // This ensures that trigger menu items are always set to the default variant
        if (isPropDefined(this.submenuTriggerFor) && this.variant !== "default") {
            this.variant = "default";
        }
        removeDisabledFalse(this.disabled, this.el);
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Menu Item");
    }
    handleHostClick(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    render() {
        // A sub-component to layout the menu information correctly in ic-button
        const MenuItemInformation = () => {
            return (h("div", { class: "menu-item-info" }, h("div", { class: "menu-labels" }, h("ic-typography", { class: "menu-item-label" }, this.label), this.keyboardShortcutLabel && (h("ic-typography", { variant: "caption", class: "shortcut" }, this.keyboardShortcutLabel))), this.description && (h("ic-typography", { class: "menu-item-description", variant: "caption" }, this.description))));
        };
        return (h(Host, { class: {
                ["ic-menu-item-disabled"]: !!this.disabled,
                [`ic-menu-item-variant-${this.variant}`]: this.variant !== undefined,
            } }, h("ic-button", { fullWidth: true, variant: "tertiary", onClick: this.handleClick, href: isPropDefined(this.href), hreflang: isPropDefined(this.hreflang), target: isPropDefined(this.target), rel: isPropDefined(this.rel), referrerpolicy: this.referrerpolicy, role: this.variant === "toggle" ? "menuitemcheckbox" : "menuitem", "aria-disabled": `${this.disabled}`, "aria-checked": this.variant === "toggle"
                ? this.checked
                    ? "true"
                    : "false"
                : undefined, "aria-label": this.getMenuItemAriaLabel(), "aria-haspopup": isPropDefined(this.submenuTriggerFor) ||
                this.el.classList.contains("ic-popover-submenu-back-button")
                ? "menu"
                : false }, h("div", { class: "focus-border" }, isSlotUsed(this.el, "icon") && (h("span", { class: "icon" }, h("slot", { name: "icon" }))), h(MenuItemInformation, null), this.variant === "toggle" && (h("span", { class: {
                ["check-icon"]: true,
                ["hide"]: !this.checked,
            }, "aria-hidden": "true", innerHTML: Check })), isPropDefined(this.submenuTriggerFor) && (h("span", { class: { ["submenu-icon"]: true }, "aria-hidden": "true", innerHTML: Chevron }))))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"]
    }; }
};
MenuItem.style = IcMenuItemStyle0;

export { MenuItem as ic_menu_item };

//# sourceMappingURL=ic-menu-item.entry.js.map