import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-a7a720e7.js';
import { D as DEVICE_SIZES, g as getBrandForegroundAppearance, i as isSlotUsed, N as getSlot, f as getCurrentDeviceSize, c as onComponentPropUndefinedChange, h as checkResizeObserver, o as onComponentRequiredPropUndefined, L as isEmptyString, I as IcBrandForegroundEnum, e as isPropDefined } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icTopNavigationCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;color:var(--ic-top-navigation-text);width:100%;position:relative;--ic-typography-color:var(--ic-top-navigation-text);--ic-button-secondary-text-monochrome:var(--ic-brand-text-color);--ic-button-secondary-border-monochrome:var(--ic-brand-text-color);--navigation-link-colour:var(--ic-top-navigation-text);--ic-top-navigation-status-tag-text:var(--ic-color-text-primary-light);--ic-top-navigation-status-tag-secondary:var(--ic-state-layer-lighten-20)}:host(.dark){--ic-top-navigation-status-tag-text:var(--ic-color-text-primary-dark);--ic-top-navigation-status-tag-secondary:var(--ic-state-layer-darken-10);--ic-top-navigation-title-hover:var(--ic-action-dark-bg-hover);--ic-top-navigation-title-pressed:var(--ic-action-dark-bg-pressed)}:host(.dark) ::slotted(ic-navigation-button){--ic-button-icon-monochrome:var(--ic-color-text-primary-light)}::slotted(ic-navigation-button){--ic-button-icon-monochrome:white}:host .top-navigation{background-color:var(--ic-top-navigation-background);height:-moz-max-content;height:max-content}:host(.fullwidth-searchbar) slot[name=\"search\"]::slotted(form){width:100%}:host .title-link{display:inline-flex;align-items:center;text-decoration:none;padding:var(--ic-space-xxs);transition:var(--ic-easing-transition-fast)}:host .title-link,:host .title-link:visited,:host .title-link:active,:host .title-link ::slotted(a),:host .title-link:visited ::slotted(a),:host .title-link:active ::slotted(a){color:var(--ic-top-navigation-icon-and-label);text-decoration:none;outline:none;--ic-typography-color:var(--ic-top-navigation-icon-and-label)}:host .title-link:hover:not(:focus){background-color:var(--ic-top-navigation-title-hover)}:host .title-link:active:not(:focus){background-color:var(--ic-top-navigation-title-pressed)}:host .title-link:hover{border-radius:var(--ic-border-radius)}:host .menu-button-container{--ic-button-secondary-text-monochrome:var(--ic-brand-text-color);--ic-button-secondary-border-monochrome:var(--ic-brand-text-color)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline)}:host .title-link ic-typography{font-weight:600}:host .nav-panel-container{border-top:var(--ic-space-1px) solid var(--ic-top-navigation-keyline);padding:0 var(--ic-space-lg);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin));display:flex}:host(.dark) .nav-panel-container{border-top:var(--ic-border-keyline-darken)}.top-panel-container{display:flex;padding-top:0.5rem;padding-bottom:0.5rem}.navigation-tabs{margin-top:calc(-1 * var(--ic-space-1px))}.app-details-container{display:flex;align-items:center;flex:1 1 auto;margin-right:var(--ic-space-md)}.app-icon-container{display:flex;padding-right:var(--ic-space-xs)}.icon-buttons-container{display:flex;margin-left:var(--ic-space-md)}.icon-buttons-container ::slotted(nav){display:flex}.title-wrap{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-word;-webkit-hyphens:auto;hyphens:auto}:host .app-status{border-radius:var(--ic-space-md);background-color:var(--ic-top-navigation-status-tag);color:var(--ic-top-navigation-status-tag-text);--ic-typography-color:var(--ic-top-navigation-status-tag-text);padding:var(--ic-space-xxs) var(--ic-space-lg);margin-left:var(--ic-space-md);flex:1 1 0;max-width:-moz-fit-content;max-width:fit-content}:host .app-version{border-radius:var(--ic-space-md);background-color:var(--ic-top-navigation-status-tag-secondary);color:var(--ic-top-navigation-status-tag);padding:var(--ic-space-xxs) var(--ic-space-sm);margin-left:var(--ic-space-xs);flex:1 1 0;max-width:-moz-fit-content;max-width:fit-content;--ic-typography-color:var(--ic-top-navigation-status-tag)}slot[name=\"app-icon\"]::slotted(*){fill:var(--ic-top-navigation-logo);width:2em;height:2em;cursor:pointer}slot[name=\"toggle-icon\"] svg{fill:var(--ic-top-navigation-icon)}.search-menu-container{justify-content:right;display:flex;align-items:center}.menu-button-container{margin-left:var(--ic-space-md)}.menu-button-container .navigation-landmark-button-text{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;color:var(--ic-brand-text-color)}.menu-button-container .navigation-landmark-button-text:dir(rtl){right:-9999px}.search-actions-container{display:flex}.menu-buttons-slot{display:flex;flex-direction:column}.navigation-landmark-text{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}.navigation-item-list{display:flex;list-style:none;height:2.75rem}.navigation-item-list::-webkit-scrollbar{display:none}:host ic-section-container{padding-bottom:0 !important;padding-top:0 !important}@media screen and (min-width: 993px){.app-details-container{margin-right:var(--ic-space-lg)}}@media screen and (max-width: 1200px){:host .nav-panel-container{padding:0 var(--ic-space-md)}}:host(.mobile-mode) .app-status,:host(.mobile-mode) .app-version{display:none}:host(.mobile-mode) .title-link{margin-right:var(--ic-space-xs)}:host(.mobile-mode) .search-menu-container{max-width:10rem}:host(.mobile-mode) .search-bar-container{display:flex;justify-content:center;align-items:center;border-top:var(--ic-border-keyline-darken);height:4rem;padding-left:var(--ic-space-md);padding-right:var(--ic-space-md);margin-left:calc(-1 * var(--section-container-margin));margin-right:calc(-1 * var(--section-container-margin))}@media screen and (max-width: 576px){:host .title-link{margin-right:var(--ic-space-xxxs);word-break:break-word;-webkit-hyphens:none;hyphens:none}.top-panel-container{min-height:2.5rem}.search-bar-container{margin-top:0;height:3.5rem;padding-left:var(--ic-space-xs);padding-right:var(--ic-space-xs)}.menu-button-container{margin-left:var(--ic-space-sm)}slot[name=\"app-icon\"]::slotted(*){width:1.5em;height:1.5em}slot[name=\"toggle-icon\"] svg{width:1.5em;height:1.5em}}@media (forced-colors: active){:host .top-navigation{border-bottom:var(--ic-border-hc)}.app-status,.app-version{border:var(--ic-border-hc)}slot[name=\"app-icon\"]::slotted(*){fill:currentcolor}slot[name=\"toggle-icon\"] svg{fill:currentcolor}}";
const IcTopNavigationStyle0 = icTopNavigationCss;

const TopNavigation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icNavigationMenuClosed = createEvent(this, "icNavigationMenuClosed", 7);
        this.icNavigationMenuOpened = createEvent(this, "icNavigationMenuOpened", 7);
        this.icTopNavResized = createEvent(this, "icTopNavResized", 7);
        this.hasAppIcon = false;
        this.hasAppTitleSlot = false;
        this.hasIconButtons = false;
        this.hasNavigation = false;
        this.hasSearchSlotContent = false;
        this.resizeObserver = null;
        this.searchBar = null;
        this.deviceSize = DEVICE_SIZES.XL;
        this.foregroundColor = getBrandForegroundAppearance();
        this.hasFullWidthSearchBar = false;
        this.mobileSearchBarVisible = false;
        this.mobileSearchHiddenOnBlur = false;
        this.navMenuVisible = false;
        this.searchButtonClick = false;
        this.searchValue = "";
        /**
         * The alignment of the top navigation content.
         */
        this.contentAligned = "full-width";
        /**
         * Can set a custom breakpoint for the top navigation to switch to mobile mode.
         * Must be one of our specified breakpoints in px: `0`, `576`, `768`, `992`, `1200`.
         */
        this.customMobileBreakpoint = DEVICE_SIZES.L;
        /**
         *  The URL to navigate to when the app title is clicked.
         */
        this.href = "/";
        /**
         * If `true`, the flyout navigation menu on small devices will be contained by the parent element.
         */
        this.inline = false;
        /**
         * The short title of the app to be displayed at small screen sizes in place of the app title.
         */
        this.shortAppTitle = "";
        /**
         * The status info to be displayed.
         */
        this.status = "";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The version info to be displayed.
         */
        this.version = "";
        this.checkSlots = () => {
            this.hasAppIcon = isSlotUsed(this.el, "app-icon");
            this.hasAppTitleSlot = isSlotUsed(this.el, "app-title");
            this.hasNavigation = isSlotUsed(this.el, "navigation");
            this.hasIconButtons = isSlotUsed(this.el, "buttons");
            this.hasSearchSlotContent = isSlotUsed(this.el, "search");
            if (this.hasAppIcon) {
                const slottedAppIcon = this.el.querySelector('[slot="app-icon"]');
                if (slottedAppIcon && slottedAppIcon.tagName === "A")
                    slottedAppIcon.tabIndex = -1;
            }
        };
        this.initialiseSearchBar = () => {
            if (!this.hasSearchSlotContent)
                return;
            const slot = getSlot(this.el, "search");
            if ((slot === null || slot === void 0 ? void 0 : slot.tagName) === "IC-SEARCH-BAR") {
                this.searchBar = slot;
            }
            else if ((slot === null || slot === void 0 ? void 0 : slot.tagName) === "FORM") {
                this.searchBar = slot.querySelector("ic-search-bar");
            }
            if (this.searchBar !== null) {
                this.searchBar.hideLabel = true;
            }
        };
        this.toggleSearchBar = () => {
            var _a;
            this.mobileSearchBarVisible = !this.mobileSearchBarVisible;
            if (!this.searchBar)
                return;
            (_a = this.mobileSearchButtonEl) === null || _a === void 0 ? void 0 : _a.setAttribute("aria-label", `${this.mobileSearchBarVisible ? "Hide" : "Show"} search`);
            this.hasFullWidthSearchBar = this.mobileSearchBarVisible;
            this.searchBar.fullWidth = this.mobileSearchBarVisible;
            if (this.mobileSearchBarVisible) {
                setTimeout(() => {
                    var _a;
                    (_a = this.searchBar) === null || _a === void 0 ? void 0 : _a.focus();
                }, 100);
            }
        };
        this.menuButtonClick = () => {
            this.showNavMenu(true);
        };
        this.showNavMenu = (show) => {
            this.navMenuVisible = show;
            (show ? this.icNavigationMenuOpened : this.icNavigationMenuClosed).emit();
            document.body.style.height = show ? "100%" : "auto";
            document.body.style.overflow = show ? "hidden" : "auto";
        };
        this.searchButtonMouseDownHandler = () => {
            this.searchButtonClick = true;
        };
        this.searchButtonClickHandler = () => {
            this.toggleSearchBar();
            this.searchButtonClick = false;
        };
        this.resizeObserverCallback = (currSize) => {
            if (currSize === this.deviceSize)
                return;
            this.deviceSize = currSize;
            if (currSize > this.customMobileBreakpoint) {
                this.showNavMenu(false);
                if (this.mobileSearchBarVisible) {
                    this.toggleSearchBar();
                }
            }
            this.icTopNavResized.emit({
                size: currSize,
            });
            if (this.searchBar && document.activeElement === this.searchBar) {
                this.searchBar.setAttribute("hidden", "true");
                //remove attribute again as this trigger a redraw & applies css
                this.searchBar.removeAttribute("hidden");
                setTimeout(() => {
                    var _a;
                    (_a = this.searchBar) === null || _a === void 0 ? void 0 : _a.focus();
                }, 100);
            }
        };
        this.runResizeObserver = () => {
            this.resizeObserver = new ResizeObserver(() => {
                this.resizeObserverCallback(getCurrentDeviceSize());
            });
            this.resizeObserver.observe(this.el);
        };
    }
    watchPropHandler(newValue, oldValue) {
        //added for Gatsby rehydration issue where prop is initially undefined but then changes to actual value
        //this watch can be removed once Gatsby hydration issue is resolved
        onComponentPropUndefinedChange(oldValue, newValue, this.initialiseSearchBar);
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentWillLoad() {
        this.checkSlots();
        this.deviceSize = getCurrentDeviceSize();
        this.initialiseSearchBar();
    }
    componentDidLoad() {
        checkResizeObserver(this.runResizeObserver);
        if (!this.hasAppTitleSlot) {
            onComponentRequiredPropUndefined([{ prop: this.appTitle, propName: "app-title" }], "Top Navigation");
        }
    }
    componentWillRender() {
        this.checkSlots();
    }
    navBarMenuCloseHandler() {
        var _a;
        this.showNavMenu(false);
        (_a = this.menuButtonEl) === null || _a === void 0 ? void 0 : _a.setFocus();
    }
    searchInputBlurHandler({ detail, }) {
        if (detail !== null) {
            if (this.mobileSearchBarVisible && !this.searchButtonClick) {
                //don't hide if blur was triggered by click on search button - let the click handler toggle the state
                this.toggleSearchBar();
            }
            this.searchValue = detail.value;
        }
    }
    searchValueChangeHandler({ detail }) {
        this.searchValue = detail.value;
    }
    brandChangeHandler({ detail }) {
        this.foregroundColor = detail.mode;
    }
    render() {
        const { appTitle, contentAligned, customMobileBreakpoint, deviceSize, el, foregroundColor, hasAppIcon, hasAppTitleSlot, hasFullWidthSearchBar, hasIconButtons, hasNavigation, hasSearchSlotContent, href, inline, menuButtonClick, mobileSearchBarVisible, navMenuVisible, searchButtonClickHandler, searchButtonMouseDownHandler, shortAppTitle, status, version, theme, } = this;
        const hasStatus = status !== "";
        const hasVersion = version !== "";
        const hasMenuContent = hasNavigation || hasIconButtons || hasStatus || hasVersion;
        const isSmallDeviceSize = deviceSize <= DEVICE_SIZES.S;
        const searchButtonSize = isSmallDeviceSize ? "medium" : "large";
        const hasTitle = appTitle !== "" && isPropDefined(appTitle);
        const overMobileBreakpoint = deviceSize <= customMobileBreakpoint;
        const appTitleVariant = overMobileBreakpoint
            ? isSmallDeviceSize
                ? "subtitle-small"
                : "h4"
            : "h3";
        const mobileSearchButtonTitle = `${mobileSearchBarVisible ? "Hide" : "Show"} search`;
        const menuSize = isSmallDeviceSize ? "small" : "medium";
        const shortAppTitleSlot = isSlotUsed(el, "short-app-title");
        const Component = hasAppTitleSlot ? "div" : "a";
        const attrs = Component == "a" && {
            href: href,
        };
        return (h(Host, { key: 'ade1da5d58211501cd1d6747c46d105c49ef8e98', class: {
                "fullwidth-searchbar": hasFullWidthSearchBar,
                "mobile-mode": overMobileBreakpoint,
                [IcBrandForegroundEnum.Dark]: foregroundColor === IcBrandForegroundEnum.Dark,
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, h("div", { key: 'c0a641f02b5c568bcf2e75dd743f42bcacfa3df6', class: "top-navigation" }, h("ic-section-container", { key: 'f31505caa30741b6ae5a7091d01735c6b0b2eb07', aligned: contentAligned, "full-height": true }, h("header", { key: '6ab710016c32c632fefc7827114bba07cff300b1', role: "banner" }, h("div", { key: 'a5b18754252754ecf8f577a113a5e7ffe6214efd', class: "top-panel-container" }, h("div", { key: '473ebdef80637e47a30bf1f2570d9698ef819766', class: "app-details-container" }, (hasTitle || hasAppTitleSlot) && (h(Component, Object.assign({ key: '8082824e0d859123195ed0cc076858e861ed6f83', class: "title-link" }, attrs), hasAppIcon && (h("div", { key: '4e6846d703b47491d7867d993fc91c680bb7f965', class: "app-icon-container" }, h("slot", { key: '5755567877527b6c4dea32d246295f13344a1116', name: "app-icon" }))), isSmallDeviceSize &&
            (!isEmptyString(shortAppTitle) || shortAppTitleSlot) ? (h("ic-typography", { variant: "subtitle-small", "aria-label": (!hasAppTitleSlot || !shortAppTitleSlot) &&
                `${appTitle} (${shortAppTitle})` }, h("h1", null, shortAppTitleSlot ? (h("slot", { name: "short-app-title" })) : (shortAppTitle)))) : (h("ic-typography", { variant: appTitleVariant }, h("h1", { class: "title-wrap" }, hasAppTitleSlot ? (h("slot", { name: "app-title" })) : (appTitle)))))), hasStatus && (h("div", { key: '0d1119c72ec12921b9d8ac4c753549b5266a0a77', class: "app-status" }, h("ic-typography", { key: '0159177ab7abdf8ffacbc54fe2a00db8b51f4034', "aria-label": "app tag", variant: "label-uppercase", class: "app-status-text" }, status))), hasVersion && (h("div", { key: 'f83651366bf13750e9c637643290d01d9158cbb3', class: "app-version" }, h("ic-typography", { key: '61d5ddb22f858319246f352ea9db8cf2a380dbb7', variant: "label", class: "app-version-text", "aria-label": "app version" }, version)))), (hasSearchSlotContent || hasMenuContent) && (h("div", { key: '38c8b6032287ae554d95affd0343d8e1a06e9672', class: "search-menu-container" }, h("div", { key: '177f304cb5d52052c1595d90a313187f5faf7fb8', class: "search-actions-container" }, !overMobileBreakpoint ? (h(Fragment, null, h("slot", { name: "search" }), hasIconButtons && (h("div", { class: "icon-buttons-container" }, h("slot", { name: "buttons" }))))) : (h(Fragment, null, hasSearchSlotContent && (h("ic-button", { id: "search-toggle-button", ref: (el) => (this.mobileSearchButtonEl = el), onMouseDown: searchButtonMouseDownHandler, variant: "icon-tertiary", monochrome: true, size: searchButtonSize, "aria-label": mobileSearchButtonTitle, theme: foregroundColor, onClick: searchButtonClickHandler }, h("slot", { name: "toggle-icon" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "#ffffff" }, h("path", { d: "M0 0h24v24H0V0z", fill: "none" }), h("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }))))), hasMenuContent && (h("div", { class: "menu-button-container" }, h("span", { id: "navigation-landmark-button-text", class: "navigation-landmark-button-text", "aria-hidden": "true" }, "Main navigation button"), h("nav", { "aria-labelledby": "navigation-landmark-button-text", "aria-hidden": `${navMenuVisible}` }, h("ic-button", { id: "menu-button", ref: (el) => (this.menuButtonEl = el), theme: foregroundColor, variant: "secondary", monochrome: true, "aria-expanded": "false", "aria-haspopup": "true", "aria-label": `Open ${hasNavigation ? "navigation" : "app"} menu`, size: menuSize, onClick: menuButtonClick }, "Menu", h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#ffffff", slot: "left-icon" }, h("path", { d: "M0 0h24v24H0V0z", fill: "none" }), h("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })))))))))))), mobileSearchBarVisible && (h("div", { key: '2573f4f3d0c07b9a8189739e71b1280ee10db8b7', class: "search-bar-container" }, h("slot", { key: '4ec2d201033b3f084a372a781d11a9171b7357db', name: "search" }))), hasNavigation && !overMobileBreakpoint && (h("div", { key: '2ed8494ed944a24944535339faaf87ff50bc2666', class: "navigation-tabs" }, h("span", { key: '8d4749293defd91560f3ed064a40b37ef7bef3f2', id: "navigation-landmark-text", class: "navigation-landmark-text", "aria-hidden": "true" }, "Main pages"), h("nav", { key: '2f026275dcebbb493ab8dd2d337dc07e85fddd47', "aria-labelledby": "navigation-landmark-text", class: "nav-panel-container" }, h("ic-horizontal-scroll", { key: '5299073b2ce1df34d3ab70e0ede5eaf4d122e1ae', monochrome: true, appearance: foregroundColor }, h("ul", { key: '1bf9392b6e25f033f9c4d3ba6efb0d15af07db16', class: "navigation-item-list", tabindex: "-1" }, h("slot", { key: 'a8ef11edfbf5535d706b5d6f33af40474303f312', name: "navigation" }))))))))), navMenuVisible && (h("ic-navigation-menu", { key: '8e11a83a983df46afb2805b0ed89451ad85ab247', version: version, status: status, class: {
                inline,
            } }, hasIconButtons && (h("div", { key: '80fc236836f94cfb1ff6c7e7063e223a6c0bec43', class: "menu-buttons-slot", slot: "buttons" }, h("slot", { key: '32a3522be214d86952657179b94d88efc7bcccf2', name: "buttons" }))), h("ul", { key: 'e8ba927b4a442016016deec34bd13501fac2e4f1', slot: "navigation" }, h("slot", { key: '8373dc199994f19287897c6a3b3c7309c07a7388', name: "navigation" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "appTitle": ["watchPropHandler"]
    }; }
};
TopNavigation.style = IcTopNavigationStyle0;

export { TopNavigation as ic_top_navigation };

//# sourceMappingURL=ic-top-navigation.entry.js.map