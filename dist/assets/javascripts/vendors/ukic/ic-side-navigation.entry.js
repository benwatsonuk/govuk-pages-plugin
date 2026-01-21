import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { c as closeIcon } from './close-icon-539ec8d1.js';
import { C as Chevron } from './chevron-icon-589e3b46.js';
import { z as getCssProperty, f as getCurrentDeviceSize, D as DEVICE_SIZES, g as getBrandForegroundAppearance, i as isSlotUsed, L as isEmptyString, h as checkResizeObserver, o as onComponentRequiredPropUndefined, v as hasClassificationBanner, I as IcBrandForegroundEnum, e as isPropDefined } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  <title>menu icon</title>
</svg>
`;

const icSideNavigationCss = ":host{display:block;--ic-typography-color:currentcolor;--side-navigation-position:fixed;--side-navigation-position-left:0;--side-navigation-position-top:var(--ic-space-xxl);--side-navigation-height:var(--ic-space-xxl);--sm-side-navigation-top-bar-height:3.5rem;--sm-side-navigation-collapsed-labels-width:6rem;--sm-side-navigation-expand-transition-duration:var(\n    --ic-transition-duration-slow\n  );--side-navigation-width:20rem;--sm-side-navigation-bottom-bar-height:3.5rem;--keyline-lighten:var(--ic-space-1px) solid var(--ic-side-navigation-keyline);--keyline-darken:var(--ic-space-1px) solid var(--ic-state-layer-darken-20);--ic-button-secondary-text-monochrome:var(--ic-brand-text-color);--ic-button-secondary-border-monochrome:var(--ic-brand-text-color);z-index:var(--ic-z-index-side-navigation)}:host>*{box-sizing:border-box}.side-navigation{display:flex;flex-direction:column;width:var(--side-navigation-width);color:var(--ic-side-navigation-text);position:var(--side-navigation-position);top:var(--side-navigation-position-top);left:calc(var(--side-navigation-width) * -1);bottom:0;background-color:var(--ic-side-navigation-background);z-index:var(--ic-z-index-side-navigation)}:host(.ic-side-navigation-inline) .side-navigation{position:absolute;height:100%}:host(.anchor-right) .side-navigation{right:calc(var(--side-navigation-width) * -1)}.classification-spacing{margin-bottom:var(--ic-space-lg)}.navigation-list{padding:0;margin:0;list-style:none}.side-navigation-inner{background-color:var(--ic-side-navigation-background);display:flex;flex-direction:column;flex:1 1 4rem;overflow:auto}:host(.ic-side-navigation-inline) .side-navigation-inner{flex:1}:host(.xs-menu-open) .side-navigation{transition:left var(--ic-easing-transition-slow);left:0}:host(:has(.xs-menu-open,.xs-menu-close)) ::slotted(ic-navigation-item){--navigation-item-side-nav-right:var(--ic-space-xl)}:host(.xs-menu-close) .side-navigation{left:calc(var(--side-navigation-width) * -1);transition:left var(--ic-easing-transition-slow)}:host(.xs-menu-close) .side-navigation>*{visibility:hidden}:host(.anchor-right.xs-menu-open) .side-navigation{right:0;left:auto}:host(.anchor-right.xs-menu-close) .side-navigation{right:calc(var(--side-navigation-width) * -1);left:auto;transition:right var(--ic-easing-transition-slow)}.bottom-wrapper{border-top:var(--keyline-lighten);bottom:0;left:0;z-index:2;background-color:var(--ic-side-navigation-background);display:flex;flex-direction:column}:host(.ic-side-navigation-inline) .bottom-wrapper{position:sticky}:host(.ic-side-navigation-dark) .bottom-wrapper{border-top:var(--keyline-darken)}.top-bar{display:flex;flex-direction:row;align-items:center;min-height:var(--side-navigation-height);padding:var(--ic-space-xs);box-sizing:border-box;background-color:var(--ic-side-navigation-background);position:fixed;top:0;left:0;right:0;border-bottom:var(--keyline-lighten);box-shadow:var(--ic-elevation-overlay);z-index:2;overflow:hidden;visibility:visible}:host(.ic-side-navigation-inline) .top-bar{position:absolute}:host(.ic-side-navigation-dark) .top-bar{border-bottom:var(--keyline-darken)}.top-bar.dark a:focus{box-shadow:var(--ic-border-focus)}.app-title-wrapper{display:flex;margin-left:var(--ic-space-xs);border-left:var(--keyline-lighten);padding-left:var(--ic-space-xxs);color:var(--ic-side-navigation-text);align-items:center}:host(.ic-side-navigation-dark) .app-title-wrapper{border-left:var(--keyline-darken)}.app-title-wrapper ic-typography h1{margin:0}@media screen and (min-width: 340px){.app-title-wrapper ic-typography{margin-left:var(--ic-space-xs)}}:host .title-link{display:flex;align-items:center;transition:box-shadow var(--ic-easing-transition-fast),\n    background-color var(--ic-easing-transition-fast);text-decoration:none;padding:var(--ic-space-xxs);color:var(--ic-side-navigation-text)}:host .title-link:visited,:host .title-link:active{color:var(--ic-side-navigation-text)}slot[name=\"app-title\"]::slotted(a),slot[name=\"app-icon\"]::slotted(a){color:var(--ic-side-navigation-text);outline:none;text-decoration:none;display:flex}slot[name=\"app-title\"]::slotted(ic-typography),slot[name=\"app-title\"]::slotted(a){margin-left:var(--ic-space-xs) !important}slot[name=\"app-title\"]::slotted(a){font:var(--ic-font-subtitle-small)}@media screen and (min-width: 577px){:host(.sm-collapsed) slot[name=\"app-title\"]::slotted(ic-typography),:host(.sm-collapsed) slot[name=\"app-title\"]::slotted(a){position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-collapsed) slot[name=\"app-title\"]:dir(rtl)::slotted(ic-typography),:host(.sm-collapsed) slot[name=\"app-title\"]:dir(rtl)::slotted(a){right:-9999px}:host(.sm-expanded) slot[name=\"app-title\"]::slotted(a){font:var(--ic-font-h3) !important;font-weight:var(--ic-font-weight-semibold) !important;margin-left:var(--ic-space-xs) !important}}:host .title-link:hover{border-radius:var(--ic-border-radius);background-color:var(--ic-side-navigation-hover)}:host .title-link:active{background-color:var(--ic-side-navigation-pressed)}:host .title-link:focus,:host .title-link:focus-within{border-radius:var(--ic-border-radius);box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);background-color:transparent}:host .title-link ic-typography{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.app-title-wrapper ::slotted(svg){fill:var(--ic-side-navigation-text)}.app-icon-container{display:none}.button-label{display:flex;align-items:center}.mobile-top-bar-menu-icon{display:flex}.menu-button{width:6.5rem}.app-status-wrapper{inset:0 var(--ic-space-sm) 0 3.5rem;width:auto;display:flex;gap:var(--ic-space-xs);padding:var(--ic-space-sm) 0;justify-content:flex-end;align-items:flex-end;pointer-events:none;height:-moz-fit-content;height:fit-content;margin:0 var(--ic-space-xs)}.app-status-wrapper .app-version{display:flex;overflow-wrap:break-word;padding-bottom:var(--ic-space-xxs)}.app-status-wrapper .app-status{display:flex;border-radius:1rem;background-color:var(--ic-side-navigation-text);color:var(--ic-side-navigation-status-tag-text);padding:var(--ic-space-xxs) var(--ic-space-lg);min-width:1rem}.app-status-wrapper .app-status-text{overflow-wrap:break-word}:host(.ic-side-navigation-dark) .app-status-wrapper .app-status{--ic-typography-color:var(--ic-architectural-white)}.navigation-landmark-title{position:absolute;width:var(--ic-space-1px);height:var(--ic-space-1px);padding:0;margin:calc(-1 * var(--ic-space-1px));overflow:hidden}::slotted(ic-navigation-group){--navigation-group-height:2.75rem;--navigation-group-justify-content:space-between;--navigation-group-hover:var(--ic-side-navigation-hover);--navigation-group-text-hover:var(--ic-side-navigation-text);--navigation-item-child-height:3.5rem;--navigation-item-child-active:var(--ic-action-dark-bg-pressed);--navigation-item-child-color:var(--ic-side-navigation-text);--navigation-group-expand-toggle-padding:0.25rem}::slotted(ic-navigation-item),::slotted(ic-navigation-group){--navigation-item-justify-content:flex-start;--navigation-item-min-height:56px;--navigation-item-height:auto}.bottom-side-nav{position:relative;align-content:flex-end;min-height:var(--sm-side-navigation-top-bar-height)}.bottom-side-nav ic-divider{position:absolute;top:0}.primary-navigation{flex:1;display:flex;flex-direction:column;overflow-y:auto;scrollbar-width:none}.primary-navigation::-webkit-scrollbar{display:none}.primary-navigation,.secondary-navigation{overflow-x:hidden}.bottom-side-nav .menu-expand-button{position:absolute;display:none}.menu-visibility-visible{visibility:visible;width:100%}.app-title-show{min-width:15.5rem}:host(.side-display){display:flex;flex-direction:column;height:100vh;position:var(--side-navigation-position);left:0;top:0;bottom:0}:host(.side-display) .app-icon-container{height:40px;display:flex;align-items:center}:host(.side-display) .top-bar{--side-navigation-height:var(--sm-side-navigation-top-bar-height);position:relative;padding:0;box-shadow:none}:host(.ic-side-navigation-inline.side-display) .top-bar{position:sticky}:host(.anchor-right.side-display) .top-bar{box-shadow:0.188rem 0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.anchor-right.side-display) .bottom-wrapper{box-shadow:0.188rem -0.188rem 0.5rem rgb(0 0 0 / 20%)}:host(.side-display) .side-navigation,:host(.side-display) .top-bar{width:var(--sm-side-navigation-top-bar-height)}:host(.sm-collapsed.side-display){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.collapsed-labels.side-display){width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-expanded.side-display){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow);box-shadow:var(--ic-elevation-overlay)}:host(.side-display) .side-navigation{--side-navigation-position-top:0;flex:1;position:relative;top:auto;left:auto;bottom:auto}:host(.ic-side-navigation-inline.side-display) .side-navigation{position:relative}:host(.anchor-right.side-display) .side-navigation{left:auto;right:0}:host(.side-display) .app-title-wrapper{margin-left:0;border-left:none;padding:var(--ic-space-xs) var(--ic-space-sm)}:host(.side-display) .app-title-wrapper ::slotted(svg){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.side-display) .app-title-wrapper ic-typography{font-weight:var(--ic-font-weight-semibold)}:host(.sm-collapsed.side-display) .app-title-wrapper ic-typography{position:absolute;left:-9999px;opacity:0;transition:opacity var(--ic-easing-transition-slow)}:host(.sm-collapsed.side-display) .app-title-wrapper ic-typography:dir(rtl){right:-9999px}:host(.sm-expanded.side-display) ic-typography{position:relative;left:0}:host(.sm-expanded.side-display) :is(.side-navigation,.top-bar){width:var(--side-navigation-width);transition:width var(--ic-easing-transition-slow)}:host(.sm-collapsed.side-display) :is(.side-navigation,.top-bar){width:var(--sm-side-navigation-top-bar-height);transition:width var(--ic-easing-transition-slow)}:host(.anchor-right.sm-expanded.side-display) :is(.side-navigation,.top-bar){left:auto;right:0}:host(.side-display) .app-status-wrapper,:host(.sm-collapsed.side-display) .app-status-wrapper{display:none;margin-left:0}:host(.sm-expanded.side-display) .app-status-wrapper{display:flex;max-width:16rem;margin-right:calc(var(--ic-space-xxxs) + var(--ic-space-xs))}:host(.side-display) .bottom-side-nav{justify-items:flex-end;align-items:flex-end;justify-content:flex-end;display:flex;outline:none}:host(.side-display) .bottom-side-nav .menu-expand-button{padding-left:var(--ic-space-md);height:var(--sm-side-navigation-top-bar-height);width:100%;color:var(--ic-side-navigation-text);background-color:transparent;outline:var(--ic-hc-focus-outline);border:none;cursor:pointer;display:flex;transition:var(--ic-easing-transition-fast)}:host(.sm-expanded.side-display) .bottom-side-nav .menu-expand-button{height:100%}:host(.side-display) .bottom-side-nav .menu-expand-button svg{justify-items:flex-start;align-self:center;display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.side-display) .bottom-side-nav .menu-expand-button:hover{background-color:var(--ic-side-navigation-hover)}:host(.side-display) .bottom-side-nav .menu-expand-button:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset);background-color:transparent}:host(.sm-collapsed.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1);transition:transform var(--ic-easing-transition-slow)}:host(.sm-expanded.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1);transition:transform var(--ic-easing-transition-slow);align-self:flex-end;margin-bottom:0.875rem}:host(.anchor-right.sm-collapsed.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(-1)}:host(.anchor-right.sm-expanded.side-display) .bottom-side-nav .menu-expand-button svg{transform:scaleX(1)}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-item){--navigation-item-label-opacity:1}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-item),:host(.sm-collapsed.side-display) ::slotted(ic-navigation-group){--navigation-item-label-opacity:0;--navigation-item-min-height:3.5rem;--navigation-item-height:3.5rem}:host(.sm-expanded.side-display) ::slotted(ic-navigation-item),:host(.sm-expanded.side-display) ::slotted(ic-navigation-group){--navigation-item-label-opacity:1;--navigation-item-height:auto;--navigation-item-min-height:3.5rem;--navigation-item-width:20rem;--navigation-item-side-nav-right:var(--ic-space-xl);--navigation-group-width:20rem}:host(.sm-collapsed.side-display) ::slotted(ic-navigation-group){--navigation-group-title-position:absolute;--navigation-group-title-position-left:-9999px;--navigation-group-title-opacity:none}:host(.sm-expanded.side-display) ::slotted(ic-navigation-group){--navigation-group-title-position:relative;--navigation-group-title-position-left:0;--navigation-group-expand-toggle-padding:0.25rem;--navigation-group-title-opacity:flex}:host(.sm-collapsed.collapsed-labels.side-display) .side-navigation,:host(.sm-collapsed.collapsed-labels.side-display) .top-bar{width:var(--sm-side-navigation-collapsed-labels-width)}:host(.sm-collapsed.collapsed-labels.side-display) .menu-expand-button{padding:0}:host(.sm-collapsed.collapsed-labels.side-display) .app-title-wrapper{width:100%;justify-content:center}:host(.sm-collapsed.collapsed-labels.side-display) ::slotted(ic-navigation-group){--navigation-group-justify-content:center;--navigation-item-label-opacity:1;--navigation-group-item-min-width:100%;--navigation-group-expand-toggle-padding:1rem}:host(.collapsed-labels.side-display) .bottom-side-nav .menu-expand-button{justify-content:center}:host(.side-display) .collapsed-icon-labels-start{visibility:hidden;opacity:0}:host(.side-display) .collapsed-icon-labels-end{visibility:visible;opacity:1;transition:visibility 0s, opacity var(--ic-easing-transition-slow)}@media screen and (max-width: 419px){.top-bar{height:var(--side-navigation-height)}}@media screen and (max-width: 319px){.side-navigation{width:100%}}@media screen and (min-width: 340px){.app-icon-container{display:flex}}@media screen and (min-width: 993px){:host(.side-display){position:sticky;left:auto;top:0;bottom:0}:host(.sm-expanded.side-display){box-shadow:none}}@media (forced-colors: active){.side-navigation,.top-bar{border-right:var(--ic-border-hc)}.menu-expand-button{color:Highlight !important}slot[name=\"app-icon\"]::slotted(svg){fill:currentcolor}}";
const IcSideNavigationStyle0 = icSideNavigationCss;

const SideNavigation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icSideNavExpanded = createEvent(this, "icSideNavExpanded", 7);
        this.ANIMATION_DURATION = parseInt(getCssProperty("--ic-transition-duration-slow")) || 0;
        this.IC_NAVIGATION_ITEM = "ic-navigation-item";
        this.resizeObserver = null;
        this.COLLAPSED_ICON_LABELS_END = "collapsed-icon-labels-end";
        this.COLLAPSED_ICON_LABELS_START = "collapsed-icon-labels-start";
        this.deviceSize = getCurrentDeviceSize();
        this.deviceSizeAppTitle = DEVICE_SIZES.S;
        this.foregroundColor = getBrandForegroundAppearance();
        this.hasSecondaryNavigation = false;
        this.menuExpanded = false;
        this.menuOpen = false;
        /**
         * If `true`, the side navigation will close when a navigation item is clicked. This behaviour is only applicable on larger device sizes.
         */
        this.closeOnNavItemClick = false;
        /**
         * If `true`, the icon and label will appear when side navigation is collapsed.
         */
        this.collapsedIconLabels = false;
        /**
         * If `true`, automatic parent wrapper styling will be disabled.
         */
        this.disableAutoParentStyling = false;
        /**
         * If `true`, the side navigation will not display as a top bar on small devices.
         */
        this.disableTopBarBehaviour = false;
        /**
         * If `true`, the side navigation will display in an expanded state.
         */
        this.expanded = false;
        /**
         * The URL that the app title link points to.
         */
        this.href = "/";
        /**
         * @internal If `true`, side navigation will be contained by its parent element.
         */
        this.inline = false;
        /**
         * The short title of the app to be displayed at small screen sizes in place of the app title.
         */
        this.shortAppTitle = "";
        /**
         * If `true`, the menu expand button will be removed (PLEASE NOTE: This takes effect on screen sizes 992px and above).
         */
        this.static = false;
        this.emitSideNavigationExpanded = (objDetails) => {
            this.icSideNavExpanded.emit({
                sideNavExpanded: objDetails.sideNavExpanded,
                sideNavMobile: !!objDetails.sideNavMobile,
            });
        };
        this.toggleMenu = () => {
            this.menuOpen = !this.menuOpen;
            this.setMobileMenuAriaAttributes(this.menuOpen);
            this.arrangeSlottedNavigationItem(this.menuOpen);
            this.setToggleMenuFlyoutMenuVisibility(this.menuOpen);
            this.emitSideNavigationExpanded({
                sideNavExpanded: this.menuOpen,
                sideNavMobile: true,
            });
        };
        this.setToggleMenuFlyoutMenuVisibility = (menuOpen) => {
            var _a;
            const sideNav = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#side-navigation");
            const sideNavInner = sideNav.querySelector(".side-navigation-inner");
            const bottomWrapper = sideNav.querySelector(".bottom-wrapper");
            const menuVisibilityVisible = "menu-visibility-visible";
            if (menuOpen) {
                bottomWrapper.classList.add(menuVisibilityVisible);
                sideNavInner.classList.add(menuVisibilityVisible);
            }
            else {
                setTimeout(() => {
                    sideNavInner.classList.remove(menuVisibilityVisible);
                    bottomWrapper.classList.remove(menuVisibilityVisible);
                }, this.ANIMATION_DURATION);
            }
        };
        this.setMobileMenuAriaAttributes = (menuOpen) => {
            if (this.menuButton) {
                this.menuButton.setAttribute("aria-expanded", `${menuOpen}`);
                this.menuButton.setAttribute("aria-label", `${menuOpen ? "Close" : "Open"} navigation menu`);
            }
        };
        this.setAndRemoveNoWrapAfterMenuExpanded = () => {
            var _a;
            const appTitle = ((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".title-link ic-typography")) ||
                this.el.querySelector("[slot='app-title']");
            appTitle === null || appTitle === void 0 ? void 0 : appTitle.classList.add("ic-typography-no-wrap");
            setTimeout(() => {
                appTitle === null || appTitle === void 0 ? void 0 : appTitle.classList.remove("ic-typography-no-wrap");
            }, this.ANIMATION_DURATION);
        };
        this.toggleMenuExpanded = (expanded) => {
            var _a, _b, _c, _d;
            this.menuExpanded = expanded;
            if (this.menuExpanded) {
                this.setAndRemoveNoWrapAfterMenuExpanded();
                (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".app-title-inner-wrapper")) === null || _b === void 0 ? void 0 : _b.classList.add("app-title-show");
            }
            else {
                this.el.style.setProperty("--navigation-item-width", "320px");
                (_d = (_c = this.el.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector(".app-title-inner-wrapper")) === null || _d === void 0 ? void 0 : _d.classList.remove("app-title-show");
                this.el.addEventListener("transitionend", (e) => {
                    if (e.propertyName === "width") {
                        this.el.style.setProperty("--navigation-item-width", null);
                    }
                });
            }
            this.arrangeSlottedNavigationItem(this.menuExpanded);
            this.displayTooltipWithExpandedLongLabel(this.menuExpanded);
            if (this.collapsedIconLabels) {
                this.animateCollapsedIconLabels();
            }
            this.setExpandedButtonHeight();
            this.emitSideNavigationExpanded({ sideNavExpanded: this.menuExpanded });
        };
        /**
         * In order to style nested slotted elements (e.g. using React Router components), this method
         * rearranges the a tag and labels and adds inline styling expand/collapsed animations as external CSS classes are not
         * do not take affect.
         * @param menuExpanded boolean - true or false depending on side navigation state
         */
        this.arrangeSlottedNavigationItem = (menuExpanded) => {
            const navItems = this.el.querySelectorAll("ic-navigation-item");
            navItems.forEach((navItem) => {
                var _a;
                const isNamedSlot = isSlotUsed(navItem, "navigation-item");
                const isUnnamedSlot = navItem.children[0] && !navItem.children[0].getAttribute("slot");
                if (isNamedSlot || isUnnamedSlot) {
                    let navItemSlot;
                    if (isNamedSlot) {
                        navItemSlot = navItem.querySelector("[slot='navigation-item']");
                    }
                    else {
                        navItemSlot = navItem.children[0];
                    }
                    const iconWrapper = document.createElement("div");
                    const icon = navItemSlot === null || navItemSlot === void 0 ? void 0 : navItemSlot.querySelector("svg");
                    const badge = navItemSlot === null || navItemSlot === void 0 ? void 0 : navItemSlot.querySelector("ic-badge");
                    const label = (_a = navItem.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                    const icTypography = document.createElement("ic-typography");
                    icTypography.classList.add("ic-typography-label", "hydrated", "navigation-item-side-nav-slotted-text");
                    iconWrapper.style.position = "relative";
                    iconWrapper.style.height = "var(--ic-space-lg)";
                    icon && iconWrapper.append(icon);
                    badge && iconWrapper.append(badge);
                    if (label) {
                        icTypography.textContent = label;
                    }
                    if (navItemSlot) {
                        navItemSlot.textContent = "";
                        navItemSlot.append(iconWrapper);
                        navItemSlot.append(icTypography);
                    }
                    if (this.collapsedIconLabels) {
                        this.styleSlottedCollapsedIconLabels(!!menuExpanded, icTypography);
                    }
                    else {
                        this.styleSlottedIconLabels(!!menuExpanded, icTypography);
                    }
                }
            });
        };
        this.styleSlottedCollapsedIconLabels = (menuExpanded, icTypography) => {
            if (menuExpanded) {
                icTypography.style.marginTop = "0";
                icTypography.style.whiteSpace = "nowrap";
                icTypography.style.overflow = "hidden";
                icTypography.style.textOverflow = "ellipsis";
            }
            else {
                icTypography.style.marginTop = "10px";
                icTypography.style.whiteSpace = "nowrap";
                icTypography.style.overflow = "hidden";
                icTypography.style.textOverflow = "ellipsis";
            }
        };
        this.setExpandedButtonHeight = () => {
            var _a;
            const appStatusWrapper = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#side-navigation > .bottom-wrapper > .bottom-side-nav > .app-status-wrapper");
            if (appStatusWrapper.offsetHeight !== 0) {
                this.el.style.setProperty("--sm-side-navigation-bottom-bar-height", `${appStatusWrapper.offsetHeight}px`);
            }
        };
        this.styleSlottedIconLabels = (menuExpanded, icTypography) => {
            if (menuExpanded) {
                icTypography.style.opacity = "1";
                icTypography.style.visibility = "visible";
                icTypography.style.transition =
                    "visibility 0s, opacity var(--ic-easing-transition-slow)";
            }
            else {
                icTypography.style.opacity = "0";
                icTypography.style.visibility = "hidden";
                icTypography.style.transition =
                    "visibility 0s, opacity var(--ic-easing-transition-slow)";
            }
        };
        this.transitionHandler = (type) => {
            var _a, _b;
            const primaryNavigationWrapper = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".primary-navigation");
            const secondaryNavigationWrapper = (_b = this.el.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(".bottom-wrapper > .secondary-navigation");
            const classToRemove = type === "start"
                ? this.COLLAPSED_ICON_LABELS_END
                : this.COLLAPSED_ICON_LABELS_START;
            const classToAdd = type === "start"
                ? this.COLLAPSED_ICON_LABELS_START
                : this.COLLAPSED_ICON_LABELS_END;
            if (primaryNavigationWrapper) {
                primaryNavigationWrapper.classList.remove(classToRemove);
                primaryNavigationWrapper.classList.add(classToAdd);
            }
            if (secondaryNavigationWrapper) {
                secondaryNavigationWrapper.classList.remove(classToRemove);
                secondaryNavigationWrapper.classList.add(classToAdd);
            }
        };
        this.transitionEndHandler = () => {
            this.transitionHandler("end");
        };
        this.animateCollapsedIconLabels = () => {
            this.transitionHandler("start");
            this.transitionEndHandler();
            this.el.addEventListener("transitionend", this.transitionEndHandler);
        };
        this.paddingIconWidth = (navItems) => {
            const navItemLink = (navItems[0].shadowRoot &&
                (navItems[0].shadowRoot.querySelector("ic-tooltip a") ||
                    navItems[0].shadowRoot.querySelector("ic-tooltip div"))) ||
                navItems[0].querySelector("a") ||
                navItems[0].querySelector("div");
            const navItemSVG = navItems[0].querySelector("svg");
            if (navItemLink && navItemSVG) {
                const navStyles = {
                    gap: window.getComputedStyle(navItemLink).gap,
                    iconWidth: window.getComputedStyle(navItemSVG).width,
                    paddingLeft: window.getComputedStyle(navItemLink).paddingLeft,
                };
                return Object.values(navStyles).reduce((prev, curr) => {
                    return (prev += parseInt(curr));
                }, 0);
            }
            return 0;
        };
        this.displayTooltipWithExpandedLongLabel = (menuExpanded) => {
            let timer;
            if (menuExpanded) {
                timer = setTimeout(() => {
                    const sideNavWidth = this.el.clientWidth;
                    const navigationItems = Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM));
                    const paddingIconDelta = navigationItems.length
                        ? this.paddingIconWidth(navigationItems)
                        : 0;
                    navigationItems.forEach((navigationItem) => {
                        var _a, _b;
                        const icTypographyScrollWidth = ((_a = (navigationItem.shadowRoot &&
                            navigationItem.shadowRoot.querySelector("ic-tooltip .link ic-typography.ic-typography-label"))) === null || _a === void 0 ? void 0 : _a.scrollWidth) ||
                            ((_b = navigationItem.querySelector("ic-typography.ic-typography-label")) === null || _b === void 0 ? void 0 : _b.scrollWidth);
                        if (icTypographyScrollWidth &&
                            icTypographyScrollWidth > sideNavWidth - paddingIconDelta) {
                            navigationItem.setAttribute("display-navigation-tooltip", "true");
                        }
                    });
                }, this.ANIMATION_DURATION);
            }
            else {
                clearTimeout(timer);
                const navigationItems = Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM));
                navigationItems.forEach((navigationItem) => {
                    navigationItem.setAttribute("display-navigation-tooltip", "false");
                });
            }
        };
        this.setMenuExpanded = (expanded) => {
            this.menuExpanded = expanded;
        };
        this.handleNavItemClicked = () => {
            if (!this.menuOpen &&
                this.deviceSize > DEVICE_SIZES.S &&
                this.menuExpanded) {
                setTimeout(() => {
                    this.toggleMenuExpanded(false);
                }, 0);
            }
        };
        /**
         * As the mobile top bar is fixed, a padding top is required
         * to push main content down the height of the mobile top bar
         * @param value - padding-top css value
         */
        this.setParentPaddingTop = (value) => {
            var _a;
            (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.style.setProperty("padding-top", value);
        };
        this.setParentPaddingLeft = (value) => {
            var _a;
            (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.style.setProperty("padding-left", value);
        };
        this.renderAppTitle = (isAppNameSubtitleVariant) => {
            const displayShortAppTitle = this.deviceSize <= DEVICE_SIZES.S && !isEmptyString(this.shortAppTitle);
            return (h("ic-typography", { variant: displayShortAppTitle || isAppNameSubtitleVariant
                    ? "subtitle-small"
                    : "h3", "aria-label": displayShortAppTitle
                    ? `${this.appTitle} (${this.shortAppTitle})`
                    : undefined }, h("h1", null, displayShortAppTitle ? this.shortAppTitle : this.appTitle)));
        };
        this.resizeObserverCallback = (currSize) => {
            var _a, _b, _c, _d;
            this.deviceSize = currSize;
            const isSDeviceEnableTop = currSize === DEVICE_SIZES.S && !this.disableTopBarBehaviour;
            if (!this.disableAutoParentStyling) {
                const topBarHeight = (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".top-bar")) === null || _b === void 0 ? void 0 : _b.scrollHeight;
                this.setParentPaddingTop(isSDeviceEnableTop ? `${topBarHeight}px` : "0");
                if (isSDeviceEnableTop)
                    this.setParentPaddingLeft("0");
                if (isSDeviceEnableTop && this.inline) {
                    (_c = this.el.parentElement) === null || _c === void 0 ? void 0 : _c.style.setProperty("height", `calc(100% - ${topBarHeight}px)`);
                }
                else if (!isSDeviceEnableTop) {
                    (_d = this.el.parentElement) === null || _d === void 0 ? void 0 : _d.style.setProperty("height", "100%");
                }
            }
            const notSmallDisableTop = currSize > DEVICE_SIZES.S || this.disableTopBarBehaviour;
            if (!this.disableAutoParentStyling) {
                const paddingLeft = `calc(var(--ic-space-xxl) ${this.collapsedIconLabels ? "* 2" : "+ var(--ic-space-xs)"})`;
                if (currSize > DEVICE_SIZES.L) {
                    this.setParentPaddingTop("0");
                    this.setParentPaddingLeft("0");
                }
                else if (notSmallDisableTop &&
                    currSize <= DEVICE_SIZES.M &&
                    this.static) {
                    this.setParentPaddingLeft(paddingLeft);
                }
                else if (notSmallDisableTop && currSize <= DEVICE_SIZES.L) {
                    this.setParentPaddingLeft(this.static && this.menuExpanded
                        ? "calc(var(--ic-space-xl) * 10)"
                        : paddingLeft);
                }
            }
        };
        this.runResizeObserver = () => {
            this.resizeObserver = new ResizeObserver(() => {
                const currSize = getCurrentDeviceSize();
                this.deviceSizeAppTitle = currSize;
                this.resizeObserverCallback(currSize);
            });
            this.resizeObserver.observe(document.body, { box: "content-box" });
        };
        this.setCollapsedIconLabels = () => {
            const navigationItems = Array.from(this.el.querySelectorAll(this.IC_NAVIGATION_ITEM));
            navigationItems.forEach((navigationItem) => {
                navigationItem.setAttribute("collapsed-icon-label", "true");
            });
        };
        this.styleSlottedCollapsedIconLabel = () => {
            const dynamicSlottedIcTypographyComps = Array.from(this.el.querySelectorAll(".navigation-item-side-nav-slotted-text"));
            dynamicSlottedIcTypographyComps.forEach((icTypography) => {
                var _a, _b;
                if ((_b = (_a = icTypography.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.contains("navigation-item-side-nav-collapsed-with-label")) {
                    icTypography.style.whiteSpace = "nowrap";
                    icTypography.style.overflow = "hidden";
                    icTypography.style.textOverflow = "ellipsis";
                    icTypography.style.marginTop = "10px";
                }
            });
        };
        this.renderTopBar = ({ isSDevice, foregroundColor, menuOpen, href, isAppNameSubtitleVariant, }) => {
            const hasTitle = this.appTitle !== "" && isPropDefined(this.appTitle);
            const Component = isSlotUsed(this.el, "app-title") ? "div" : "a";
            const attrs = Component == "a" && {
                href: href,
            };
            return (h("div", { class: {
                    "top-bar": true,
                    [this.foregroundColor]: true,
                } }, isSDevice && (h("nav", { "aria-labelledby": "menu-navigation-toggle-button-landmark", "aria-hidden": "false" }, h("ic-button", { "aria-label": "Open navigation menu", class: "menu-button", id: "menu-button", variant: "secondary", size: "small", "full-width": "true", theme: foregroundColor == "default" || foregroundColor == "light"
                    ? "light"
                    : "dark", monochrome: true, onClick: this.toggleMenu, ariaOwnsId: "side-navigation", "aria-haspopup": "true", "aria-expanded": "false", ref: (el) => (this.menuButton = el) }, h("span", { class: "mobile-top-bar-menu-icon", slot: "left-icon", innerHTML: menuOpen ? closeIcon : menuIcon }), menuOpen ? "Close" : "Menu"), h("span", { id: "menu-navigation-toggle-button-landmark", class: "navigation-landmark-title", "aria-hidden": "true" }, "Navigation menu toggle button"))), h("div", { class: "app-title-wrapper" }, (hasTitle || isSlotUsed(this.el, "app-title")) && (h(Component, Object.assign({}, attrs, { class: "title-link" }), h("div", { class: "app-icon-container", "aria-hidden": "true" }, h("slot", { name: "app-icon" })), h("div", { class: "app-title-inner-wrapper" }, isSlotUsed(this.el, "app-title") ? (h("slot", { name: "app-title" })) : (this.renderAppTitle(isAppNameSubtitleVariant))))))));
        };
    }
    watchExpandedHandler() {
        this.toggleMenuExpanded(this.expanded);
    }
    componentWillLoad() {
        this.setMenuExpanded(this.expanded);
        if (this.collapsedIconLabels) {
            this.setCollapsedIconLabels();
        }
        this.hasSecondaryNavigation = isSlotUsed(this.el, "secondary-navigation");
    }
    componentDidLoad() {
        this.emitSideNavigationExpanded({
            sideNavExpanded: this.menuExpanded,
            sideNavMobile: this.deviceSize === DEVICE_SIZES.S && !this.disableTopBarBehaviour,
        });
        checkResizeObserver(this.runResizeObserver);
        this.styleSlottedCollapsedIconLabel();
        this.arrangeSlottedNavigationItem(this.menuExpanded);
        this.displayTooltipWithExpandedLongLabel(this.menuExpanded);
        this.setExpandedButtonHeight();
        if (this.closeOnNavItemClick) {
            this.el.addEventListener("navItemClicked", this.handleNavItemClicked);
        }
        !isSlotUsed(this.el, "app-title") &&
            onComponentRequiredPropUndefined([{ prop: this.appTitle, propName: "app-title" }], "Side Navigation");
    }
    disconnectedCallback() {
        var _a;
        if (this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
        }
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeEventListener("transitionend", this.transitionEndHandler);
        if (this.closeOnNavItemClick) {
            this.el.removeEventListener("navItemClicked", this.handleNavItemClicked);
        }
    }
    brandChangeHandler({ detail }) {
        this.foregroundColor = detail.mode;
    }
    render() {
        const { appTitle, menuOpen, foregroundColor, menuExpanded, href, status, version, collapsedIconLabels, inline, } = this;
        const isSDevice = !this.disableTopBarBehaviour && this.deviceSize === DEVICE_SIZES.S;
        const isSDeviceDisableTop = this.disableTopBarBehaviour && this.deviceSize === DEVICE_SIZES.S;
        const isMdDevice = this.deviceSize === DEVICE_SIZES.M;
        const isLgDevice = this.deviceSize >= DEVICE_SIZES.L;
        const isAppNameSubtitleVariant = this.deviceSizeAppTitle === DEVICE_SIZES.S;
        const displayExpandBtn = isMdDevice || isSDeviceDisableTop || (isLgDevice && !this.static);
        const topBarProps = {
            isSDevice,
            foregroundColor,
            menuOpen,
            href: href,
            isAppNameSubtitleVariant,
            appTitle: appTitle || "",
        };
        return (h(Host, { key: '2742b166ab7c1b3dadd63ca46597082f57b4a93c', class: {
                "xs-menu-open": menuOpen && isSDevice,
                "xs-menu-close": !menuOpen && isSDevice,
                "sm-collapsed": !isSDevice && !menuExpanded,
                "sm-expanded": !isSDevice && menuExpanded,
                "side-display": this.deviceSize > DEVICE_SIZES.S || !!this.disableTopBarBehaviour,
                [`ic-side-navigation-${IcBrandForegroundEnum.Dark}`]: foregroundColor === IcBrandForegroundEnum.Dark,
                ["collapsed-labels"]: !isSDevice && !menuExpanded && !!collapsedIconLabels,
                ["ic-side-navigation-inline"]: !!inline,
            } }, isSDevice && this.renderTopBar(Object.assign({}, topBarProps)), h("div", { key: '9c893c2c7dea96389a45a16f527070d6e3de5368', class: "side-navigation", id: "side-navigation" }, !isSDevice && this.renderTopBar(Object.assign({}, topBarProps)), h("div", { key: 'dbd2108ad31efee6d38a03c3dc6eb09648d19f11', class: "side-navigation-inner" }, isSlotUsed(this.el, "primary-navigation") && (h("nav", { key: 'ecd7bb4e1e16ddc4eb7602cdf307e6a28f16e853', class: "primary-navigation", "aria-labelledby": "primary-navigation-landmark" }, h("span", { key: '4dcc53007366eddf432ab265e5a246fd94ca5911', "aria-hidden": "true", class: "navigation-landmark-title", id: "primary-navigation-landmark" }, "Primary"), h("ul", { key: '88796e6410e8359878b43c1f517fbd4cb4513e3f', class: "navigation-list" }, h("slot", { key: '8e83a35ead924765f96919d274b65ed09d5e929f', name: "primary-navigation" }))))), h("div", { key: '5574dd7d0b1f5269fd9db2be0e82eab01189f484', class: {
                ["bottom-wrapper"]: true,
                ["classification-spacing"]: hasClassificationBanner(),
            } }, isSlotUsed(this.el, "secondary-navigation") && (h("nav", { key: '2f53e21f14b1b2bac7984a39a372004eae05532d', class: "secondary-navigation", "aria-labelledby": "secondary-navigation-landmark" }, h("span", { key: '892d0c1292c15c558ade91896d610ed75714d3f4', "aria-hidden": "true", class: "navigation-landmark-title", id: "secondary-navigation-landmark" }, "Secondary"), h("ul", { key: '795f0ba505bb550fe9b61a39e2f7020d03d9dbba', class: "navigation-list" }, h("slot", { key: 'ebdd3da64163638ddf46509f56627de51ac17825', name: "secondary-navigation" })))), h("div", { key: '50ea370bfce079ca1073f8ef676879141a4dc00c', class: "bottom-side-nav" }, this.hasSecondaryNavigation && h("ic-divider", { key: '3897e3e6deac28eb1656a753b438def9e3d6ee75' }), displayExpandBtn && (h("button", { key: '8ccbcb422d4c753b5490d6ef83798540626936da', class: "menu-expand-button", innerHTML: Chevron, onClick: () => this.toggleMenuExpanded(!this.menuExpanded), "aria-label": `${menuExpanded ? "Collapse" : "Expand"} side navigation` })), h("div", { key: '200fc21381180858eab9e3d7ead4b426c9ae4b6d', class: "app-status-wrapper" }, status && (h("div", { key: '2642ffbf3a021736cacfb9653a265e003a6cc7f9', class: {
                ["app-status"]: true,
            } }, h("ic-typography", { key: 'aaa321854c75f56d1d606d4d43f320fa6f9569a4', "aria-label": "app tag", variant: "label-uppercase", class: "app-status-text" }, status))), version && (h("ic-typography", { key: '1b53325edb44a3d0466f6fe74d76720b47af6ad6', variant: "label", class: "app-version", "aria-label": "app version" }, version))))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "expanded": ["watchExpandedHandler"]
    }; }
};
SideNavigation.style = IcSideNavigationStyle0;

export { SideNavigation as ic_side_navigation };

//# sourceMappingURL=ic-side-navigation.entry.js.map