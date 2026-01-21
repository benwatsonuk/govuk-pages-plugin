import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { u as getSlotElements, e as isPropDefined } from './helpers-dcedb279.js';
import { c as createPopper } from './popper-0fbeff6d.js';
import './constants-7960cba4.js';

const icPopoverMenuCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){:host .opening-from-parent{animation:slide-in var(--ic-transition-duration-slow) ease-in-out}:host .opening-from-child{animation:slide-out var(--ic-transition-duration-slow) ease-in-out}}:host{border-radius:var(--ic-border-radius);color:var(--ic-popover-nav-text);--ic-typography-color:var(--ic-popover-nav-text);position:relative;z-index:var(--ic-z-index-popover);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);display:none}:host(.on-dialog){inset:auto !important}:host(.on-dialog-fix-translate){transform:translate(0, var(--ic-space-xs)) !important}:host(.on-dialog-translate-y){transform:translate(0, calc(-1 * var(--translate-y))) !important}.menu{border:var(--ic-border-default);border-color:var(--ic-popover-border);border-radius:var(--ic-border-radius);background-color:var(--ic-popover-background);visibility:hidden;height:0;display:flex;flex-direction:column}:host(:focus-within){box-shadow:var(--ic-border-focus)}.menu:focus-visible{outline:none}:host(.ic-popover-menu-open){display:block;min-width:calc(20rem - var(--ic-space-xl));width:var(--popover-width, 20rem);max-width:calc(100vw - var(--ic-space-xl))}:host(.ic-popover-menu-open) .menu{visibility:visible;height:-moz-fit-content;height:fit-content;max-height:var(--max-height, -moz-fit-content);max-height:var(--max-height, fit-content);overflow-y:auto;overflow-x:hidden}.parent-label{--ic-typography-color:var(--ic-popover-parent-label);margin:var(--ic-space-xs) var(--ic-space-xs) 0}@keyframes slide-in{from{opacity:0;transform:translateX(10rem)}to{opacity:1;transform:translateX(0)}}@keyframes slide-out{from{opacity:0;transform:translateX(-10rem)}to{opacity:1;transform:translateX(0)}}";
const IcPopoverMenuStyle0 = icPopoverMenuCss;

const MENU_SELECTOR = "div.menu-body";
const PopoverMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icPopoverClosed = createEvent(this, "icPopoverClosed", 7);
        this.ARIA_LABEL = "aria-label";
        this.popoverMenuEls = [];
        this.openingFromChild = false;
        this.openingFromParent = false;
        this.popperProps = {};
        /**
         * Setting to `true` can help in situations where tooltip content is clipped by a parent element.
         */
        this.fixedPositioning = false;
        /**
         * @internal The level of menu being displayed.
         */
        this.submenuLevel = 1;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * If `true`, the popover menu will be displayed.
         */
        this.open = undefined;
        this.setButtonFocus = () => {
            var _a;
            (_a = this.popoverMenuEls[this.currentFocus]) === null || _a === void 0 ? void 0 : _a.focus();
        };
        // Checks that the popover menu has an anchor
        this.findAnchorEl = (anchor) => {
            let anchorElement = null;
            if (!anchor) {
                this.submenuId === undefined &&
                    console.error("No anchor specified for popover component");
            }
            else {
                anchorElement = document.querySelector(anchor.indexOf("#") === 0 ? anchor : "#" + anchor);
                if (anchorElement === null) {
                    console.error(`Popover anchor element '${anchor}' not found`);
                }
            }
            return anchorElement;
        };
        this.isNotPopoverMenuEl = (ev) => {
            const { id, tagName } = ev.target;
            return (id !== this.anchor &&
                tagName !== "IC-MENU-ITEM" &&
                tagName !== "IC-MENU-GROUP" &&
                tagName !== "IC-POPOVER-MENU");
        };
        this.getNextItemToSelect = (currentItem, movingDown) => {
            const numButtons = this.popoverMenuEls.length - 1;
            if (currentItem < 1) {
                currentItem = 0;
            }
            let nextItem = movingDown ? currentItem + 1 : currentItem - 1;
            // Check if wrap around necessary
            if (nextItem < 0) {
                nextItem = numButtons;
            }
            else if (nextItem > numButtons) {
                nextItem = 0;
            }
            return nextItem;
        };
        this.addMenuItems = (elements) => {
            var _a;
            for (let i = 0; i < elements.length; i++) {
                const el = elements[i];
                if (el.tagName === "IC-MENU-ITEM") {
                    this.popoverMenuEls.push(el);
                }
                else if (el.tagName === "IC-MENU-GROUP") {
                    const groupSlotWrapper = (_a = el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".menu-items-wrapper");
                    if (groupSlotWrapper) {
                        const menuGroupElements = getSlotElements(groupSlotWrapper);
                        menuGroupElements && this.addMenuItems(menuGroupElements);
                    }
                }
            }
        };
        this.getMenuAriaLabel = () => {
            const ariaLabel = this.el.getAttribute(this.ARIA_LABEL);
            if (isPropDefined(this.submenuId)) {
                return `${ariaLabel}, within nested level ${this.submenuLevel} ${this.parentLabel} submenu,`;
            }
            else {
                return ariaLabel;
            }
        };
        this.handleBackButtonClick = () => {
            var _a;
            (_a = this.parentPopover) === null || _a === void 0 ? void 0 : _a.openFromChild();
            this.open = false;
        };
        this.initPopperJS = () => {
            if (this.anchorEl) {
                this.popperInstance = createPopper(this.anchorEl, this.el, Object.assign({ strategy: this.fixedPositioning ? "fixed" : "absolute", placement: "bottom-start", modifiers: [
                        {
                            name: "offset",
                            options: {
                                offset: [0, 4],
                            },
                        },
                        {
                            name: "flip",
                            options: {
                                fallbackPlacements: ["top-start", "top-end", "bottom-end"],
                                rootBoundary: "viewport",
                            },
                        },
                    ] }, this.popperProps));
            }
        };
    }
    watchOpenHandler() {
        var _a;
        const popoverArr = (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.querySelectorAll(`ic-popover-menu`);
        if (this.open) {
            if (popoverArr.length > 0) {
                popoverArr.forEach((popover) => {
                    if (popover !== this.el) {
                        popover.open = false;
                    }
                });
            }
            if (this.parentPopover !== undefined &&
                !this.popoverMenuEls.some((menuItem) => menuItem.id)) {
                this.backButton && this.popoverMenuEls.unshift(this.backButton);
            }
            this.currentFocus = 0;
            // Needed so that anchorEl isn't always focused
            setTimeout(this.setButtonFocus, 50);
        }
        else if (this.popperInstance) {
            if (popoverArr.length > 0) {
                popoverArr.forEach((popover) => {
                    if (popover !== this.el) {
                        popover.open = false;
                    }
                });
            }
            this.popperInstance.destroy();
            this.popperInstance = null;
        }
    }
    disconnectedCallback() {
        if (this.popperInstance) {
            this.popperInstance.destroy();
            this.popperInstance = null;
        }
    }
    componentDidLoad() {
        var _a;
        const slotWrapper = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(MENU_SELECTOR);
        if (slotWrapper) {
            const popoverMenuElements = getSlotElements(slotWrapper);
            if (popoverMenuElements !== null) {
                this.addMenuItems(popoverMenuElements);
            }
        }
        if (this.submenuId === undefined &&
            this.el.getAttribute(this.ARIA_LABEL) === null) {
            console.error(`No aria-label specified for popover menu component - aria-label required`);
        }
        this.watchOpenHandler();
    }
    componentWillRender() {
        this.anchorEl = this.findAnchorEl(this.anchor);
    }
    componentDidRender() {
        if (this.open && !this.popperInstance) {
            this.initPopperJS();
        }
    }
    handleMenuItemClick(ev) {
        if (!ev.detail.submenuTriggerFor && ev.detail.label !== "Back") {
            this.closeMenu(false, ev.detail);
        }
    }
    // This is listening for the event emitted when a menu item is acting as a trigger button
    handleSubmenuChange(ev) {
        // Finds the trigger menu item that has emitted the event
        const target = ev.target;
        this.open = false;
        // Find the popover menu that the menu item triggers (i.e. submenu-trigger-for === submenu-id).
        const childEl = document.querySelector(`ic-popover-menu[submenu-id=${target.submenuTriggerFor}]`);
        // Set the parent popover menu of the submenu and open the submenu
        childEl.parentPopover = this.el;
        childEl.anchor = this.anchor;
        childEl.ariaLabel = this.el.getAttribute(this.ARIA_LABEL);
        childEl.openFromParent();
        childEl.submenuLevel = this.submenuLevel + 1;
        // Set the label in the submenu using the label of the menu item that has emitted the event
        childEl.parentLabel = target.label;
    }
    handleClick(ev) {
        if (this.open && this.isNotPopoverMenuEl(ev)) {
            // If menu is open and the next click on the document is not a popover El, close the popover
            this.closeMenu();
        }
    }
    // Manages the keyboard navigation in the popover menu
    handleKeyDown(ev) {
        switch (ev.key) {
            case "ArrowDown":
            case "ArrowUp":
                ev.preventDefault();
                this.currentFocus = this.getNextItemToSelect(this.currentFocus, ev.key === "ArrowDown");
                this.setButtonFocus();
                break;
            case "Home":
                //Sets home focus as first element, or back button
                this.currentFocus = 0;
                this.setButtonFocus();
                break;
            case "End":
                //Sets end focus as last element
                this.currentFocus = this.popoverMenuEls.length - 1;
                this.setButtonFocus();
                break;
            case "Escape":
            case "Tab":
                ev.preventDefault();
                if (this.open) {
                    this.closeMenu(true);
                    this.el.blur();
                }
                break;
        }
    }
    /**
     * @internal Opens the menu from the child menu.
     */
    async openFromChild() {
        this.open = true;
        this.openingFromChild = true;
        setTimeout(() => (this.openingFromChild = false), 1000);
    }
    /**
     * @internal Opens the menu from the parent menu.
     */
    async openFromParent() {
        this.open = true;
        this.openingFromParent = true;
        setTimeout(() => (this.openingFromParent = false), 1000);
    }
    /**
     * @internal Close the menu, emit icPopoverClosed of the root popover
     * @param setFocusToAnchor when true return focus to anchor element when menu is closed
     */
    async closeMenu(setFocusToAnchor = false, menuElement) {
        var _a;
        this.open = false;
        if (this.parentPopover) {
            this.parentPopover.closeMenu(setFocusToAnchor, menuElement);
        }
        else {
            if (setFocusToAnchor) {
                (_a = this.anchorEl) === null || _a === void 0 ? void 0 : _a.focus();
            }
            this.icPopoverClosed.emit(menuElement);
        }
    }
    /**
     * @internal This method allows props to be added to the PopperJS createPopper instance outside of the popover menu
     * @param props object - createPopper props set externally
     */
    async setExternalPopperProps(props) {
        this.popperProps = props;
    }
    render() {
        return (h(Host, { key: '4d5467e45b173b365eba3fe507480bc87a0001f7', class: {
                ["ic-popover-menu-open"]: !!this.open,
                [`ic-theme-${this.theme}`]: this.theme !== "inherit",
            } }, h("div", { key: '96ffeae7beede0b8a48e96dcbb262a5092974fd0', id: this.parentPopover === undefined
                ? `ic-popover-submenu-${this.submenuId}`
                : "", class: {
                menu: true,
            } }, h("span", { key: '84b9c30b0377109233bb0135c68acd6419b1aa55', class: {
                "opening-from-parent": this.openingFromParent,
                "opening-from-child": this.openingFromChild,
            } }, isPropDefined(this.submenuId) && (h("span", { key: 'cd6eaf24a7e6ea400614da471083aaa75f164b98' }, h("span", { key: 'b7be64cdfaf3a94fcd36f3ea0e5c6bf475418268', role: "menu" }, h("ic-menu-item", { key: '9868fd30a311aadfe9663ce8617c620940760549', class: "ic-popover-submenu-back-button", ref: (el) => (this.backButton = el), label: "Back", onClick: this.handleBackButtonClick, id: `ic-popover-submenu-back-button-${this.submenuLevel}` }, h("svg", { key: '5655f052a203d6b0d0c5c2182ec6339741691311', slot: "icon", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "submenu-back-icon" }, h("path", { key: 'b804bfa5d3cbfcf37322e19d5978875088e85d97', d: "M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z", fill: "currentColor" })))), h("ic-typography", { key: '3cd5e496d8af145ebb77fe49f4637826dbf4c2ff', variant: "subtitle-small", class: "parent-label" }, this.parentLabel))), h("div", { key: '6249765618e71a536ed2ea67bc9ef31ba24cf7ff', class: "menu-body", "aria-label": this.getMenuAriaLabel(), role: "menu" }, h("slot", { key: 'c175948ff00694bad8419f4738bc82a469c2b53a' }))))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["watchOpenHandler"]
    }; }
};
PopoverMenu.style = IcPopoverMenuStyle0;

export { PopoverMenu as ic_popover_menu };

//# sourceMappingURL=ic-popover-menu.entry.js.map