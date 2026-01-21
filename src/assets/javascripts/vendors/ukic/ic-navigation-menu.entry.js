import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { N as getSlot, P as getSlotContent, i as isSlotUsed } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icNavigationMenuCss = ":host{display:block;position:fixed;top:0;left:0;width:100%;min-height:100% !important;background:rgb(0 0 0 / 60%);z-index:var(--ic-z-index-navigation-menu)}.popout-modal{position:absolute;inset:0}.popout-menu{position:fixed;top:0;right:0;width:16rem;bottom:0;background-color:var(--ic-top-navigation-menu-background);color:var(--ic-top-navigation-nav-item);--ic-typography-color:var(--ic-top-navigation-nav-item);box-shadow:var(--ic-elevation-overlay);overflow-y:auto;overflow-x:hidden}:host(.inline) .popout-menu{position:absolute}.menu-close-button-container{position:relative;left:11.875rem;padding:var(--ic-space-md) 0}.nav-group-first{padding-bottom:0}.menu-buttons-container{padding:var(--ic-space-sm) 0;border-bottom:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-buttons-container-nav-item-above{margin-top:var(--ic-space-md);border-top:var(--ic-border-width) solid var(--ic-architectural-200)}.menu-status-version-container{display:flex;flex-wrap:wrap;gap:var(--ic-space-xs);padding:var(--ic-space-md) var(--ic-space-md) var(--ic-space-xl)}.status-version-no-buttons{border-top:var(--ic-space-1px) solid var(--ic-architectural-200)}.menu-status{background-color:var(--ic-status-tag-neutral);--ic-typography-color:var(--ic-color-text-inverted);border-radius:var(--ic-space-md);width:-moz-fit-content;width:fit-content;padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-version{border-radius:var(--ic-space-md);background-color:var(--ic-status-tag-outlined-background-neutral-contrast);--ic-typography-color:var(--ic-color-text-primary-light);padding:var(--ic-space-xxs) var(--ic-space-sm)}.menu-status-text,.menu-version-text{overflow-wrap:break-word}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}";
const IcNavigationMenuStyle0 = icNavigationMenuCss;

const NAV_GROUP_TAG = "IC-NAVIGATION-GROUP";
const NAV_ITEM_TAG = "IC-NAVIGATION-ITEM";
const NavigationMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icNavigationMenuClose = createEvent(this, "icNavigationMenuClose", 7);
        this.hasButtons = false;
        this.hasNavigation = false;
        this.lastTabStop = null;
        this.navGroupFirst = false;
        this.navItemAboveButtons = false;
        /**
         * The status info to display.
         */
        this.status = "";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The version info to display.
         */
        this.version = "";
        this.setLastTabStop = (lastNavGroupExpanded) => {
            let lastEl = this.navigationEls[this.navigationEls.length - 1];
            if (lastEl.tagName === NAV_GROUP_TAG && lastNavGroupExpanded) {
                const childNavItems = lastEl.children;
                lastEl = childNavItems[childNavItems.length - 1];
            }
            if (lastEl.tagName === NAV_ITEM_TAG) {
                //check for slotted content i.e. react router link
                const slotContent = getSlot(lastEl, "navigation-item");
                if (slotContent !== null) {
                    lastEl = slotContent;
                }
            }
            this.lastTabStop = lastEl;
        };
        this.closeMenu = () => {
            this.icNavigationMenuClose.emit();
        };
        this.focusCloseButton = () => {
            var _a;
            (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.focusLastTabStop = () => {
            let focusEl;
            if (this.lastTabStop !== null) {
                switch (this.lastTabStop.tagName) {
                    case "IC-NAVIGATION-BUTTON":
                    case NAV_ITEM_TAG:
                    case NAV_GROUP_TAG:
                        focusEl = this.lastTabStop;
                        focusEl.focus();
                        break;
                    case "A":
                        this.lastTabStop.focus();
                        break;
                }
            }
        };
    }
    componentWillLoad() {
        this.navBarEl = document.querySelector("ic-top-navigation");
        this.navigationEls = getSlotContent(this.el, "navigation");
        if (this.navigationEls) {
            this.hasNavigation = true;
            const lastEl = this.navigationEls[this.navigationEls.length - 1];
            if (lastEl.tagName === NAV_ITEM_TAG) {
                this.navItemAboveButtons = true;
            }
            else if (lastEl.tagName === NAV_GROUP_TAG) {
                lastEl.addEventListener("navigationGroupExpanded", ((event) => {
                    this.setLastTabStop(event.detail.expanded);
                }));
            }
            const firstEl = this.navigationEls[0];
            if (firstEl.tagName === NAV_GROUP_TAG) {
                this.navGroupFirst = true;
            }
        }
        const buttonContent = getSlotContent(this.el, "buttons");
        if (buttonContent !== null) {
            this.hasButtons = true;
            this.lastTabStop = buttonContent[buttonContent.length - 1];
        }
        else {
            if (this.hasNavigation && this.navigationEls) {
                this.setLastTabStop(false);
            }
        }
    }
    componentDidLoad() {
        this.focusCloseButton();
    }
    componentWillRender() {
        this.hasNavigation = isSlotUsed(this.el, "navigation");
        this.hasButtons = isSlotUsed(this.el, "buttons");
    }
    navItemClickHandler() {
        this.closeMenu();
    }
    handleKeyDown(ev) {
        if (ev.key === "Tab") {
            if (ev.shiftKey) {
                if (document.activeElement === this.navBarEl) {
                    ev.preventDefault();
                    this.focusLastTabStop();
                }
            }
            else if (document.activeElement === this.lastTabStop ||
                this.lastTabStop === null) {
                ev.preventDefault();
                this.focusCloseButton();
            }
        }
        else if (ev.key === "Escape") {
            this.closeMenu();
        }
    }
    render() {
        return (h(Host, { key: '3e06550714484b8a9d157e0391697e303fbf8259', class: { [`ic-theme-${this.theme}`]: this.theme !== "inherit" } }, h("div", { key: 'b56300f2817a5a42401570a56f5b29c90e37e336', class: "popout-modal", onClick: this.closeMenu }), h("div", { key: '081658f80afaa6d7f39971cc0f566068166b6688', class: "popout-menu", role: "dialog", "aria-modal": "true", "aria-label": `${this.hasNavigation ? "Navigation" : "App"} menu` }, h("span", { key: '67841c0d0cfb29fba7e3c722436c7e87bca1842d', "aria-hidden": "true", id: "navigation-landmark-text", class: "navigation-landmark-text" }, "Main navigation"), h("nav", { key: 'cb5aa473a04868d6af4dcd2ebc2b61ef5d785904', "aria-labelledby": "navigation-landmark-text", "aria-hidden": this.hasNavigation ? "false" : "true" }, h("div", { key: '2551b868b4c932b5fcff041bdae690e748d40430', class: {
                ["menu-close-button-container"]: true,
                ["nav-group-first"]: this.navGroupFirst,
            } }, h("ic-button", { key: '6f2a95a7824e18fa2f83a297984a7677110e887f', ref: (el) => (this.closeButton = el), id: "menu-close-button", class: "menu-close-button", variant: "icon-tertiary", size: "large", "aria-label": `Close ${this.hasNavigation ? "navigation" : "app"} menu`, onClick: this.closeMenu }, h("svg", { key: '2d4918dc6b797eb6f245dd531387cbb0370eb687', width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '51a063a29957f6992294ed31dae13570dc0ecd8c', d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" })))), this.hasNavigation && h("slot", { key: '70ef3173a42a47e1bb13042dc41c53313ee42697', name: "navigation" })), this.hasButtons && (h("div", { key: '95384803c8ab3a87492552b613cb53f95adacd52', class: {
                ["menu-buttons-container"]: true,
                ["menu-buttons-container-nav-item-above"]: this.navItemAboveButtons,
            } }, h("slot", { key: '9bdde63f875fe678742dff04018e562ec37eb500', name: "buttons" }))), (this.status !== "" || this.version !== "") && (h("div", { key: '502dd0df2ce93217d9a642e4a6b36dcd72229e70', class: {
                ["menu-status-version-container"]: true,
                ["status-version-no-buttons"]: !this.hasButtons,
            } }, this.status !== "" && (h("div", { key: 'a0b154b7307de42c92c9e26f9cd552dcc556b21d', class: "menu-status" }, h("ic-typography", { key: 'af91a5c0c556c8ac0faa29998e126de1ab86c0bc', variant: "label-uppercase", "aria-label": "app tag", class: "menu-status-text" }, this.status))), this.version !== "" && (h("div", { key: 'b16dec612bce0fe83c888b0a3e74d8f205710633', class: "menu-version" }, h("ic-typography", { key: '74d7e31b0126f240fa7bbc410a8b71268ca027a1', variant: "label", class: "menu-version-text", "aria-label": "app version" }, this.version))))))));
    }
    get el() { return getElement(this); }
};
NavigationMenu.style = IcNavigationMenuStyle0;

export { NavigationMenu as ic_navigation_menu };

//# sourceMappingURL=ic-navigation-menu.entry.js.map