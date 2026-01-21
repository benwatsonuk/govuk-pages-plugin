import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { D as DEVICE_SIZES, g as getBrandForegroundAppearance, f as getCurrentDeviceSize, y as getNavItemParentDetails } from './helpers-dcedb279.js';
import { C as Chevron } from './chevron-icon-589e3b46.js';
import './constants-7960cba4.js';

const icNavigationGroupCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--ic-typography-color:currentcolor}:host(.in-side-menu){border-bottom:var(--ic-border-width) solid\n    var(--ic-divider-background-monochrome);padding:var(--ic-space-md) 0}:host .navigation-group{height:100%;width:-moz-fit-content;width:fit-content;color:var(--ic-brand-text-color);display:flex;gap:var(--ic-space-xxs);align-items:center;justify-content:center;padding:0 var(--ic-space-md);transition:var(--ic-easing-transition-slow);position:relative;background:none;border:none;text-align:left;box-sizing:border-box}:host .navigation-group:hover,:host .navigation-group:active,:host .selected{background-color:var(--ic-architectural-20);color:var(--ic-color-text-primary-light);outline:none;cursor:pointer}:host(.in-side-menu) .navigation-group{min-height:2.5rem;width:100%;gap:1.25rem}:host(.in-side-menu) .navigation-group .ic-typography-label{width:100%}:host(.in-side-menu:not(.ic-navigation-group-expandable)) .navigation-group,:host(.in-side-menu) .navigation-group-side-menu-collapsed,:host(.in-side-menu) .navigation-group-side-menu-expanded{color:var(--ic-top-navigation-nav-group-link);justify-content:flex-start;padding:var(--ic-space-xs) var(--ic-space-md)}:host(.in-side-menu) .navigation-group-side-menu-expanded{margin-bottom:var(--ic-space-xs)}:host(.in-side-menu) .navigation-group-side-menu-collapsed::after,:host(.in-side-menu) .navigation-group-side-menu-expanded::after{border-style:solid;border-width:0.125em 0.125em 0 0;content:\"\";display:inline-block;min-height:0.45em;position:relative;top:-0.1em;transform:rotate(135deg);vertical-align:top;min-width:0.45em}:host(.in-side-menu) .navigation-group-side-menu-expanded::after{top:0.15em;transform:rotate(-45deg)}:host(:not(.in-side-menu)) .navigation-group:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);outline:var(--ic-hc-focus-outline);z-index:var(--ic-z-index-navigation-item);transition:box-shadow var(--ic-easing-transition-fast)}:host(.in-side-menu) .navigation-group-side-menu-expanded:hover:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:hover:not(:focus){background-color:var(--ic-top-navigation-nav-group-hover);cursor:pointer}:host(.in-side-menu) .navigation-group-side-menu-expanded:active:not(:focus),:host(.in-side-menu) .navigation-group-side-menu-collapsed:active:not(:focus){background-color:var(--ic-top-navigation-nav-group-pressed)}:host(.in-side-menu) .navigation-group-side-menu-expanded:focus,:host(.in-side-menu) .navigation-group-side-menu-collapsed:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);outline:var(--ic-hc-focus-outline);background:none}:host .navigation-group-dropdown{background-color:var(--ic-top-navigation-menu-background);border-bottom:var(--ic-space-1px) solid var(--ic-top-navigation-menu-border);position:absolute;left:0;right:0;padding:var(--ic-space-xs) var(--ic-space-md);box-shadow:0 0.375rem 0.5rem -0.375rem rgba(0 0 0 / 20%);z-index:calc(var(--ic-z-index-navigation-item) - 1)}:host .navigation-group-dropdown-items-list{list-style:none;display:flex;flex-flow:column wrap;align-content:flex-start;padding-left:var(--ic-space-md);max-height:16.5rem}:host .chevron-toggle-icon-wrapper{display:flex;align-items:center}:host .chevron-toggle-icon-wrapper svg{transform:rotate(90deg);height:var(--ic-space-lg);width:var(--ic-space-lg)}:host .chevron-toggle-icon-closed svg{transform:rotate(-90deg)}#nav-group-title{text-wrap:nowrap}:host(.in-side-menu) #nav-group-title{text-wrap:wrap}:host(.ic-navigation-group-side-nav) #nav-group-title{text-wrap:wrap}:host(.ic-navigation-group-expanded) .grouped-links-wrapper{height:var(--navigation-child-items-height, auto) !important;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.ic-navigation-group-side-nav) .link,:host(.ic-navigation-group-side-nav) ::slotted(a){height:var(--navigation-child-items-height, auto)}:host(.ic-navigation-group-collapsed) .grouped-links-wrapper{height:0;transition:var(--ic-easing-transition-slow);overflow:hidden}:host(.ic-navigation-group-side-nav) .navigation-group{min-height:var(--navigation-group-height);height:-moz-fit-content;height:fit-content;min-width:100%;width:var(--navigation-group-width, auto);justify-content:var(--navigation-group-justify-content);padding:var(--ic-space-md) var(--navigation-group-expand-toggle-padding)\n    var(--ic-space-xs) var(--ic-space-md)}:host(.ic-navigation-group-side-nav:not(.ic-navigation-group-expandable)) .navigation-group{padding-right:var(--ic-space-md)}:host(.ic-navigation-group-side-nav) .navigation-group:hover,:host(.ic-navigation-group-side-nav) .navigation-group:active,:host(.ic-navigation-group-side-nav) .selected{background-color:var(--navigation-group-hover);color:var(--navigation-group-text-hover)}:host(.ic-navigation-group-side-nav:not(.ic-navigation-group-expandable)) .navigation-group:hover,:host(.ic-navigation-group-side-nav:not(.ic-navigation-group-expandable)) .navigation-group:active,:host(.in-side-menu:not(.ic-navigation-group-expandable)) .navigation-group:hover,:host(.in-side-menu:not(.ic-navigation-group-expandable)) .navigation-group:active{background:none;cursor:auto}:host(.ic-navigation-group-side-nav) .navigation-group:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background:none}:host(.ic-navigation-group-side-nav) .ic-typography-caption{position:var(--navigation-group-title-position);left:var(--navigation-group-title-position-left)}";
const IcNavigationGroupStyle0 = icNavigationGroupCss;

const IC_NAVIGATION_ITEM = "ic-navigation-item";
const DYNAMIC_GROUPED_LINKS_HEIGHT_MS = 100;
const NODE_NAME = "IC-NAVIGATION-GROUP";
const NavigationGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navigationGroupOpened = createEvent(this, "navigationGroupOpened", 7);
        this.navigationGroupExpanded = createEvent(this, "navigationGroupExpanded", 7);
        this.allGroupedNavigationItemHeights = "";
        this.collapsedNavItemsHeight = null;
        this.expandedNavItemsHeight = null;
        this.mouseGate = false;
        this.deviceSize = DEVICE_SIZES.XL;
        this.dropdownOpen = false;
        this.focusStyle = getBrandForegroundAppearance();
        this.inTopNavSideMenu = false;
        this.isSideNavExpanded = false;
        /**
         *  If `true`, the group will be expandable when in an ic-side-navigation component, or, when in an ic-top-navigation component, in the side menu displayed at small screen sizes.
         */
        this.expandable = false;
        /**
         * If `true`, the expandable group will be expanded by default when in an ic-side-navigation component. To enable this prop, `expandable` must also be set to `true`.
         */
        this.expanded = true;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.sideNavExpandHandler = (event) => {
            this.isSideNavExpanded = event.detail.sideNavExpanded;
            if (!this.linkWrapper || !this.expanded)
                return;
            const navItemsHeight = this.isSideNavExpanded
                ? this.expandedNavItemsHeight
                : this.collapsedNavItemsHeight;
            if (navItemsHeight) {
                this.setGroupedLinksElementHeight(navItemsHeight);
            }
            else {
                setTimeout(() => {
                    if (this.isSideNavExpanded) {
                        this.expandedNavItemsHeight = this.allGroupedNavigationItemHeights;
                    }
                    else {
                        this.collapsedNavItemsHeight = this.allGroupedNavigationItemHeights;
                    }
                    this.setGroupedLinksElementHeight(this.allGroupedNavigationItemHeights);
                }, DYNAMIC_GROUPED_LINKS_HEIGHT_MS);
            }
        };
        this.topNavResizedHandler = ({ detail: { size }, }) => {
            var _a;
            if (size === this.deviceSize)
                return;
            this.deviceSize = size;
            this.inTopNavSideMenu =
                size <=
                    (((_a = this.parentEl) === null || _a === void 0 ? void 0 : _a.customMobileBreakpoint) ||
                        DEVICE_SIZES.L);
        };
        this.toggleExpanded = () => {
            this.expanded = !this.expanded;
            if (!this.linkWrapper)
                return;
            this.setGroupedLinksElementHeight(!this.expanded
                ? "0"
                : this.isSideNavExpanded
                    ? this.expandedNavItemsHeight
                    : this.collapsedNavItemsHeight);
            this.el.querySelectorAll(IC_NAVIGATION_ITEM).forEach((navigationItem) => {
                var _a;
                const navItem = ((_a = navigationItem.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("a")) ||
                    navigationItem.querySelector("a");
                navItem === null || navItem === void 0 ? void 0 : navItem.setAttribute("tabindex", this.expanded ? "0" : "-1");
            });
        };
        this.handleClick = (ev) => {
            if (this.navigationType === "top" && ev.detail) {
                this.toggleDropdown();
            }
            else {
                this.toggleExpanded();
            }
        };
        this.handleBlur = (ev) => {
            if (!this.el.contains(ev.relatedTarget)) {
                this.hideDropdown();
            }
        };
        this.handleKeydown = (ev) => {
            const { key } = ev;
            if (key !== "Enter" && key !== " " && key !== "Escape")
                return;
            switch (this.navigationType) {
                case "top":
                    if (key === " " || key === "Enter") {
                        this.toggleDropdown();
                    }
                    else if (!this.inTopNavSideMenu) {
                        this.hideDropdown();
                    }
                    break;
                case "side":
                    this.toggleExpanded();
                    ev.preventDefault();
                    break;
                default:
                    this.toggleExpanded();
                    break;
            }
        };
        this.handleMouseLeave = (ev) => {
            const relTarget = ev.relatedTarget;
            this.mouseGate = false;
            if (this.el.contains(relTarget) ||
                relTarget === this.dropdown ||
                this.el.contains(document.activeElement))
                return;
            if (document.activeElement !== this.el &&
                (relTarget === null || relTarget === void 0 ? void 0 : relTarget.nodeName) === NODE_NAME &&
                this.dropdownOpen) {
                this.mouseGate = true;
                this.hideDropdown();
            }
            else {
                this.mouseGate = false;
                setTimeout(() => {
                    this.dropdownOpen ? this.hideDropdown() : null;
                }, 500);
            }
        };
        this.handleMouseEnter = (ev) => {
            const relTarget = ev.relatedTarget;
            document.addEventListener("keydown", this.handleKeydown);
            if ((relTarget === null || relTarget === void 0 ? void 0 : relTarget.nodeName) === NODE_NAME && this.mouseGate) {
                this.showDropdown();
            }
            else if (!this.dropdownOpen && !this.mouseGate) {
                this.mouseGate = true;
                setTimeout(() => {
                    if (this.mouseGate)
                        this.showDropdown();
                }, 500);
            }
        };
        this.renderGroupTitleText = () => (h("ic-typography", { id: "nav-group-title", variant: this.navigationType === "side" ? "caption" : "label" }, this.label));
        this.renderNavigationItems = () => {
            if (this.dropdownOpen || (this.inTopNavSideMenu && !this.expandable)) {
                return (h("div", { class: {
                        [this.inTopNavSideMenu
                            ? "navigation-group-dropdown-side-menu"
                            : "navigation-group-dropdown"]: true,
                        selected: this.dropdownOpen && !this.inTopNavSideMenu,
                    }, onMouseLeave: !this.inTopNavSideMenu ? this.handleMouseLeave : undefined, ref: (el) => (this.dropdown = el) }, h("nav", { class: {
                        "navigation-group-dropdown-items": !this.inTopNavSideMenu,
                    }, "aria-labelledby": "nav-group-title" }, h("ul", null, h("slot", null)))));
            }
            if (this.navigationType !== "top") {
                return (h("ul", { ref: (el) => (this.linkWrapper = el), class: "grouped-links-wrapper" }, h("slot", null)));
            }
            return null;
        };
        this.setGroupedLinksElementHeight = (height) => {
            var _a;
            (_a = this.linkWrapper) === null || _a === void 0 ? void 0 : _a.style.setProperty("--navigation-child-items-height", height);
        };
    }
    disconnectedCallback() {
        var _a, _b;
        if (this.navigationType === "side") {
            (_a = this.parentEl) === null || _a === void 0 ? void 0 : _a.removeEventListener("icSideNavExpanded", this.sideNavExpandHandler);
        }
        else if (this.navigationType === "top") {
            (_b = this.parentEl) === null || _b === void 0 ? void 0 : _b.removeEventListener("icTopNavResized", this.topNavResizedHandler);
        }
    }
    componentWillLoad() {
        var _a, _b;
        this.deviceSize = getCurrentDeviceSize();
        const { navType, parent } = getNavItemParentDetails(this.el);
        this.navigationType = navType;
        this.parentEl = parent;
        if (this.navigationType === "side") {
            (_a = this.parentEl) === null || _a === void 0 ? void 0 : _a.addEventListener("icSideNavExpanded", this.sideNavExpandHandler);
        }
        else if (this.navigationType === "top") {
            (_b = this.parentEl) === null || _b === void 0 ? void 0 : _b.addEventListener("icTopNavResized", this.topNavResizedHandler);
            if (this.deviceSize <=
                this.parentEl.customMobileBreakpoint)
                this.inTopNavSideMenu = true;
        }
    }
    componentDidLoad() {
        this.allGroupedNavigationItemHeights = `${Array.from(this.el.querySelectorAll(IC_NAVIGATION_ITEM)).reduce((childrenHeights, { offsetHeight }) => childrenHeights + offsetHeight, 0)}px`;
        /**
         * debounce is required as the incorrect height was retrieved instantly after
         * componentDidLoad is invoked.
         */
        setTimeout(() => {
            if (!this.linkWrapper || !this.expanded)
                return;
            if (!this.isSideNavExpanded)
                this.collapsedNavItemsHeight = this.allGroupedNavigationItemHeights;
            else
                this.expandedNavItemsHeight = this.allGroupedNavigationItemHeights;
            this.setGroupedLinksElementHeight(this.allGroupedNavigationItemHeights);
        }, DYNAMIC_GROUPED_LINKS_HEIGHT_MS);
    }
    childBlurHandler() {
        this.hideDropdown();
    }
    handleNavigationGroupOpened(event) {
        if (event.detail.source !== this.el) {
            this.hideDropdown();
        }
    }
    navItemClickHandler() {
        this.hideDropdown();
    }
    brandChangeHandler(ev) {
        this.focusStyle = ev.detail.mode;
    }
    /**
     * Sets focus on the nav item.
     */
    async setFocus() {
        var _a;
        (_a = this.groupEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
        if (this.inTopNavSideMenu) {
            this.navigationGroupExpanded.emit({ expanded: this.dropdownOpen });
        }
    }
    showDropdown() {
        if (!this.dropdownOpen) {
            this.navigationGroupOpened.emit({
                source: this.el,
            });
            this.toggleDropdown();
        }
    }
    hideDropdown() {
        document.removeEventListener("keydown", this.handleKeydown);
        if (this.dropdownOpen) {
            this.toggleDropdown();
        }
    }
    render() {
        const { dropdownOpen, expanded, inTopNavSideMenu, expandable, theme, isSideNavExpanded, focusStyle, } = this;
        const getExpandedClassSuffix = (prop) => prop ? "expanded" : "collapsed";
        const navGroupTitleClassNames = {
            "navigation-group": true,
            [focusStyle]: !inTopNavSideMenu,
            [`navigation-group-side-menu-${getExpandedClassSuffix(dropdownOpen)}`]: inTopNavSideMenu && expandable,
            selected: dropdownOpen && !inTopNavSideMenu,
        };
        const isSideNav = this.navigationType === "side";
        const isTopNav = this.navigationType === "top";
        const isTopNavDesktop = !inTopNavSideMenu && isTopNav;
        const ariaExpanded = (isSideNav && expanded) || (isTopNav && dropdownOpen);
        return (h(Host, { key: '4d9f64e96f0e60b2e120ef1ff3ead8fc9eeba8ff', class: {
                "in-side-menu": inTopNavSideMenu,
                "ic-navigation-group-expandable": expandable,
                "ic-navigation-group-side-nav": isSideNav,
                [`ic-navigation-group-${getExpandedClassSuffix(expanded)}`]: true,
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, role: "listitem" }, expandable || isTopNavDesktop ? (h("button", { onMouseEnter: isTopNavDesktop ? this.handleMouseEnter : undefined, onMouseLeave: isTopNav ? this.handleMouseLeave : undefined, onBlur: this.handleBlur, onClick: this.handleClick, onKeyDown: this.handleKeydown, class: navGroupTitleClassNames, ref: (el) => (this.groupEl = el), "aria-expanded": `${ariaExpanded}`, "aria-haspopup": `${isTopNavDesktop}` }, this.renderGroupTitleText(), isSideNav && expandable && (h("div", { class: {
                "chevron-toggle-icon-wrapper": true,
                "chevron-toggle-icon-closed": !!expanded,
            }, innerHTML: Chevron })))) : ((!isSideNav || isSideNavExpanded) && (h("div", { class: navGroupTitleClassNames }, this.renderGroupTitleText()))), this.renderNavigationItems()));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
};
NavigationGroup.style = IcNavigationGroupStyle0;

export { NavigationGroup as ic_navigation_group };

//# sourceMappingURL=ic-navigation-group.entry.js.map