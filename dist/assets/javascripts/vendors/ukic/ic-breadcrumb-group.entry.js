import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { D as DEVICE_SIZES, f as getCurrentDeviceSize, h as checkResizeObserver } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icBreadcrumbGroupCss = ":host{display:block}:host ol{display:flex;list-style-type:none;align-items:center;flex-wrap:wrap;padding:0;margin:0}:host(.ic-breadcrumb-group-back) ol ::slotted(ic-breadcrumb){display:none}:host(.ic-breadcrumb-group-back) ol ::slotted(ic-breadcrumb.show){display:flex}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.hide){display:none;opacity:0;visibility:hidden}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.visuallyhidden){display:block;opacity:0;transition:all var(--ic-easing-transition-slow)}:host(.ic-breadcrumb-group-collapsed) ol ::slotted(ic-breadcrumb.fade){opacity:1}";
const IcBreadcrumbGroupStyle0 = icBreadcrumbGroupCss;

const BreadcrumbGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ADD_CLASS_DELAY = 50;
        this.IC_BREADCRUMB = "ic-breadcrumb";
        this.SHOW_BACK_ICON = "show-back-icon";
        this.collapsedBreadcrumbs = [];
        this.resizeObserver = null;
        this.lastParentBreadcrumb = null;
        this.deviceSize = DEVICE_SIZES.XL;
        /**
         * If `true`, display only a single breadcrumb for the parent page with a back icon.
         */
        this.backBreadcrumbOnly = false;
        /**
         * If `true`, all breadcrumbs between the first and last breadcrumb will be collapsed.
         */
        this.collapsed = false;
        /**
         * If `true`, the breadcrumb group will display as black in the light theme, and white in the dark theme.
         */
        this.monochrome = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.setBreadcrumbTheme = () => {
            Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB)).forEach((breadcrumb) => {
                breadcrumb.theme = this.theme;
            });
        };
        this.setBreadcrumbMonochrome = () => {
            Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB)).forEach((breadcrumb) => {
                breadcrumb.monochrome = this.monochrome;
            });
        };
        this.setBackBreadcrumb = () => {
            if (this.backBreadcrumbOnly) {
                this.setLastParentCollapsedBackBreadcrumb();
            }
            else {
                this.revertLastParentCollapsedBreadcrumb();
            }
        };
        this.setBackBreadcrumbAttr = () => {
            if (this.lastParentBreadcrumb) {
                this.lastParentBreadcrumb.classList.add("show");
                this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON, "true");
            }
        };
        this.getLastParentBreadcrumb = () => {
            const allBreadcrumbs = this.el.querySelectorAll(this.IC_BREADCRUMB);
            return allBreadcrumbs.length > 1
                ? allBreadcrumbs[allBreadcrumbs.length - 2]
                : null;
        };
        this.setCollapsed = () => {
            var _a, _b;
            this.collapsedBreadcrumbs.forEach((breadcrumb) => {
                breadcrumb.classList.remove("visuallyhidden");
                breadcrumb.classList.remove("fade");
            });
            if (this.collapsed) {
                this.renderCollapsedBreadcrumb();
                const allBreadcrumbs = Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));
                this.collapsedBreadcrumbs = allBreadcrumbs
                    .splice(1, allBreadcrumbs.length - 2)
                    .filter((breadcrumb) => !breadcrumb.classList.contains("collapsed-breadcrumb-wrapper"));
                if (!this.backBreadcrumbOnly) {
                    this.collapsedBreadcrumbs.forEach((breadcrumb) => breadcrumb.classList.add("hide"));
                }
                if (this.collapsedBreadcrumbWrapper) {
                    (_a = allBreadcrumbs[0]) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement("afterend", this.collapsedBreadcrumbWrapper);
                }
            }
            else {
                (_b = this.collapsedBreadcrumbWrapper) === null || _b === void 0 ? void 0 : _b.remove();
            }
        };
        this.clickHandler = () => {
            var _a;
            (_a = this.collapsedBreadcrumbWrapper) === null || _a === void 0 ? void 0 : _a.remove();
            this.collapsedBreadcrumbs.forEach((breadcrumb) => {
                breadcrumb.classList.add("visuallyhidden");
                breadcrumb.classList.remove("hide");
                setTimeout(() => {
                    breadcrumb.classList.add("fade");
                }, this.ADD_CLASS_DELAY);
                breadcrumb.addEventListener("transitionend", this.transitionendHandler);
            });
            this.collapsed = false;
            // Set focus to first unhidden breadcrumb
            this.collapsedBreadcrumbs[0].setFocus();
        };
        this.renderCollapsedBreadcrumb = () => {
            if (this.collapsedBreadcrumbEl === undefined) {
                this.collapsedBreadcrumbWrapper = document.createElement("ic-breadcrumb");
                this.collapsedBreadcrumbWrapper.classList.add("collapsed-breadcrumb-wrapper");
                this.collapsedBreadcrumbEl = document.createElement("button");
                const ariaLabel = document.createElement("span");
                ariaLabel.id = "collapsed-button-label";
                ariaLabel.innerText = "Collapsed breadcrumbs";
                ariaLabel.className = "hide";
                this.collapsedBreadcrumbEl.setAttribute("aria-labelledby", ariaLabel.id);
                const ariaDescribed = document.createElement("span");
                ariaDescribed.id = "collapsed-button-described";
                ariaDescribed.innerText = "Select to view collapsed breadcrumbs";
                ariaDescribed.className = "hide";
                this.collapsedBreadcrumbEl.setAttribute("aria-describedby", ariaDescribed.id);
                this.collapsedBreadcrumbEl.id = "collapsed-ellipsis";
                this.collapsedBreadcrumbEl.innerText = "...";
                this.collapsedBreadcrumbEl.classList.add("collapsed-breadcrumb");
                this.collapsedBreadcrumbEl.addEventListener("click", this.clickHandler);
                this.collapsedBreadcrumbWrapper.append(ariaDescribed);
                this.collapsedBreadcrumbWrapper.append(ariaLabel);
                this.collapsedBreadcrumbWrapper.append(this.collapsedBreadcrumbEl);
            }
        };
        this.transitionendHandler = (event) => {
            if (event.propertyName === "opacity") {
                event.target.classList.remove("visuallyhidden");
            }
        };
        this.setLastParentCollapsedBackBreadcrumb = () => {
            this.lastParentBreadcrumb = this.getLastParentBreadcrumb();
            this.setBackBreadcrumbAttr();
            if (this.lastParentBreadcrumb) {
                this.lastParentBreadcrumb.classList.remove("hide");
                this.lastParentBreadcrumb.classList.add("show");
            }
        };
        this.revertLastParentCollapsedBreadcrumb = () => {
            if (this.lastParentBreadcrumb) {
                this.lastParentBreadcrumb.setAttribute(this.SHOW_BACK_ICON, "false");
                if (this.collapsed) {
                    this.lastParentBreadcrumb.classList.add("hide");
                }
            }
        };
        this.resizeObserverCallback = (currSize) => {
            if (currSize !== this.deviceSize) {
                this.deviceSize = currSize;
                const isSmallDevice = this.deviceSize <= DEVICE_SIZES.S;
                this.el.setAttribute("back-breadcrumb-only", `${isSmallDevice}`);
                if (isSmallDevice) {
                    if (this.collapsed) {
                        this.setLastParentCollapsedBackBreadcrumb();
                    }
                    else {
                        this.setBackBreadcrumb();
                    }
                }
                else {
                    const allBreadcrumbs = Array.from(this.el.querySelectorAll(this.IC_BREADCRUMB));
                    if (this.collapsed && allBreadcrumbs.length > 2) {
                        this.revertLastParentCollapsedBreadcrumb();
                        this.setCollapsed();
                    }
                    else {
                        allBreadcrumbs.forEach((breadcrumb) => {
                            breadcrumb.setAttribute(this.SHOW_BACK_ICON, "false");
                        });
                    }
                }
            }
        };
        this.runResizeObserver = () => {
            this.resizeObserver = new ResizeObserver(() => {
                this.resizeObserverCallback(getCurrentDeviceSize());
            });
            this.resizeObserver.observe(this.el);
        };
    }
    watchBackBreadcrumbHandler() {
        this.setBackBreadcrumb();
    }
    watchCollapsedHandler() {
        this.setCollapsed();
    }
    watchMonochromeHandler() {
        this.setBreadcrumbMonochrome();
    }
    watchThemeHandler() {
        this.setBreadcrumbTheme();
    }
    componentWillLoad() {
        this.setBreadcrumbTheme();
        this.setBreadcrumbMonochrome();
        if (this.backBreadcrumbOnly) {
            this.setBackBreadcrumb();
        }
        else {
            checkResizeObserver(this.runResizeObserver);
        }
        if (this.collapsed &&
            this.el.querySelectorAll(this.IC_BREADCRUMB).length > 2) {
            if (getCurrentDeviceSize() === DEVICE_SIZES.S) {
                this.setLastParentCollapsedBackBreadcrumb();
            }
            else {
                this.setCollapsed();
            }
        }
        this.lastParentBreadcrumb = this.getLastParentBreadcrumb();
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.lastParentBreadcrumb) === null || _a === void 0 ? void 0 : _a.removeEventListener("transitionend", this.transitionendHandler);
        (_b = this.collapsedBreadcrumbEl) === null || _b === void 0 ? void 0 : _b.removeEventListener("click", this.clickHandler);
    }
    render() {
        const { backBreadcrumbOnly, collapsed, theme } = this;
        return (h(Host, { key: 'c2828a2c275ac4341d26054b2de81bd93591a783', class: {
                "ic-breadcrumb-group-back": backBreadcrumbOnly,
                "ic-breadcrumb-group-collapsed": collapsed,
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, h("nav", { key: '44c0b96801da788bbfa96b138348d05214270b60', "aria-label": "breadcrumbs" }, h("ol", { key: '1f0549af4262e1f3181168dce91b7af6c6820dc3' }, h("slot", { key: '8603a718735d00643bedf8b3b3fed554234d710e' })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "backBreadcrumbOnly": ["watchBackBreadcrumbHandler"],
        "collapsed": ["watchCollapsedHandler"],
        "monochrome": ["watchMonochromeHandler"],
        "theme": ["watchThemeHandler"]
    }; }
};
BreadcrumbGroup.style = IcBreadcrumbGroupStyle0;

export { BreadcrumbGroup as ic_breadcrumb_group };

//# sourceMappingURL=ic-breadcrumb-group.entry.js.map