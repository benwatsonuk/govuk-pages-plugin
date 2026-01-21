import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { d as convertToRGBA, g as getBrandForegroundAppearance, e as isPropDefined, o as onComponentRequiredPropUndefined } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icBadgeCss = "@media (prefers-reduced-motion: no-preference){:host(.ic-badge-show){animation:expand var(--ic-transition-duration-slow)}:host(.ic-badge-hide){animation:shrink var(--ic-transition-duration-slow)}}:host{display:flex;height:var(--ic-space-md);min-width:var(--ic-space-md);width:-moz-fit-content;width:fit-content;border-radius:calc(2 * var(--ic-space-xxl));position:absolute}:host ic-typography{--ic-typography-color:var(--ic-badge-text)}:host(.ic-badge-neutral){background-color:var(--ic-badge-dark) !important}:host(.ic-badge-light) ic-typography{--ic-typography-color:var(--ic-badge-text-monochrome)}:host(.ic-badge-light) ::slotted(*){fill:var(--ic-badge-icon-monochrome)}:host(.ic-badge-info){background-color:var(--ic-badge-info) !important}:host(.ic-badge-light){background-color:var(--ic-badge-light) !important}:host(.ic-badge-warning){background-color:var(--ic-badge-warning) !important}:host(.ic-badge-warning) ic-typography{--ic-typography-color:var(--ic-badge-warning-text)}:host(.ic-badge-warning) ::slotted(*){fill:var(--ic-badge-warning-icon)}:host(.ic-badge-error){background-color:var(--ic-badge-error) !important}:host(.ic-badge-success){background-color:var(--ic-badge-success) !important}:host(.ic-badge-ai){background-color:var(--ic-badge-ai) !important}:host(.ic-badge-small){height:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.ic-badge-large){height:calc(var(--ic-space-md) + var(--ic-space-xxs));min-width:calc(var(--ic-space-md) + var(--ic-space-xxs))}:host(.ic-badge-dot.ic-badge-medium){height:var(--ic-space-xs);width:var(--ic-space-xs);min-width:var(--ic-space-xs)}:host(.ic-badge-dot.ic-badge-small){height:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));min-width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs))}:host(.ic-badge-dot.ic-badge-large){height:var(--ic-space-sm);width:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host ::slotted(*){fill:var(--ic-badge-icon)}:host(.ic-badge-foreground-dark) ::slotted(*){fill:var(--ic-color-text-primary-light)}:host(.ic-badge-foreground-light) ::slotted(*){fill:white}:host(.ic-badge-foreground-dark) ic-typography{--ic-typography-color:var(--ic-color-text-primary-light)}:host(.ic-badge-foreground-light) ic-typography{--ic-typography-color:var(--ic-color-text-primary-dark)}:host(.ic-badge-text) ic-typography{align-self:center;padding:0 calc((var(--ic-space-xs) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.ic-badge-text.ic-badge-small) ic-typography{padding:0 0.2132rem}:host(.ic-badge-text.ic-badge-large) ic-typography{padding:0 calc((var(--ic-space-sm) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.ic-badge-icon) ::slotted(svg){width:var(--ic-space-sm);height:var(--ic-space-sm);padding:var(--ic-space-xxxs)}:host(.ic-badge-icon.ic-badge-small) ::slotted(svg){width:var(--ic-space-xs);height:var(--ic-space-xs)}:host(.ic-badge-icon.ic-badge-large) ::slotted(svg){width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));height:calc(var(--ic-space-sm) + var(--ic-space-xxxs));padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}:host(.ic-badge-far){top:calc(-1 * var(--ic-space-xs));right:calc(-1 * var(--ic-space-xs))}:host(.ic-badge-far.ic-badge-small),:host(.ic-badge-dot.ic-badge-far.ic-badge-large){top:calc(-1 * var(--ic-space-xxs));right:calc(-1 * var(--ic-space-xxs))}:host(.ic-badge-dot.ic-badge-far),:host(.ic-badge-dot.ic-badge-far.ic-badge-small){top:calc(-1 * var(--ic-space-xxxs));right:calc(-1 * var(--ic-space-xxxs))}:host(.ic-badge-near){top:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)));right:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)))}:host(.ic-badge-dot.ic-badge-near){top:calc(-1 * var(--ic-space-1px));right:calc(-1 * var(--ic-space-1px))}:host(.ic-badge-inline){position:static}:host(.ic-badge-hide){visibility:hidden !important;transition:visibility var(--ic-transition-duration-slow)}.sr-only{position:absolute;left:-9999px}.sr-only:dir(rtl){right:-9999px}@keyframes expand{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes shrink{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}";
const IcBadgeStyle0 = icBadgeCss;

const TOP_NAVIGATION = "IC-TOP-NAVIGATION";
const SIDE_NAVIGATION = "IC-SIDE-NAVIGATION";
const Badge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        var _a;
        this.ariaLabel = null;
        this.initialPosition = (_a = this.position) !== null && _a !== void 0 ? _a : "far";
        /**
         * The positioning of the badge in reference to the parent element.
         */
        this.position = "far";
        /**
         * The size of the badge to be displayed.
         */
        this.size = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The type of badge to be displayed.
         */
        this.type = "text";
        /**
         * The variant of the badge to be displayed.
         */
        this.variant = "neutral";
        /**
         * If `true`, the badge will be displayed.
         */
        this.visible = true;
        this.setBadgeColour = () => {
            const colorRGBA = this.customColor ? convertToRGBA(this.customColor) : null;
            if (colorRGBA) {
                const { r, g, b, a } = colorRGBA;
                this.el.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
                this.foregroundColour = getBrandForegroundAppearance((r * 299 + g * 587 + b * 114) / 1000);
            }
        };
        this.getLabel = () => this.maxNumber && Number(this.label) > this.maxNumber
            ? `${this.maxNumber}+`
            : this.label;
        // Set aria-label on badge and / or parent element
        // Aria-describedby seems to not work, probably due to shadow DOM
        this.setAccessibleLabel = () => {
            const parentEl = this.el.parentElement;
            const defaultAriaLabel = this.isAccessibleLabelDefined()
                ? this.accessibleLabel
                : this.label || "with badge being displayed";
            if (parentEl) {
                const { tagName } = parentEl;
                if (tagName !== "IC-CARD" &&
                    (tagName !== "IC-TAB" || (tagName === "IC-TAB" && this.parentAriaLabel))) {
                    const ariaLabelPrefix = this.parentAriaLabel
                        ? `${this.parentAriaLabel} ,`
                        : "";
                    parentEl.ariaLabel = this.visible
                        ? `${ariaLabelPrefix} ${defaultAriaLabel}`
                        : null;
                }
                else {
                    this.ariaLabel = `, ${defaultAriaLabel}`;
                }
            }
        };
        this.setPositionInTopNavigation = () => {
            this.position =
                this.isInMobileMode() || this.isInNavigationItem()
                    ? "inline"
                    : this.initialPosition;
        };
        this.setPositionInSideNavigation = () => {
            this.position = "near";
        };
        this.isInTopNav = () => {
            const parentEl = this.el.parentElement;
            if (!parentEl)
                return false;
            const grandparentEl = parentEl.parentElement;
            const greatGrandparentEl = grandparentEl === null || grandparentEl === void 0 ? void 0 : grandparentEl.parentElement;
            return ((grandparentEl === null || grandparentEl === void 0 ? void 0 : grandparentEl.tagName) === TOP_NAVIGATION ||
                (greatGrandparentEl === null || greatGrandparentEl === void 0 ? void 0 : greatGrandparentEl.tagName) === TOP_NAVIGATION);
        };
        this.isInSideNav = () => {
            const parentEl = this.el.parentElement;
            if (!parentEl)
                return false;
            const grandparentEl = parentEl.parentElement;
            const greatGrandparentEl = grandparentEl === null || grandparentEl === void 0 ? void 0 : grandparentEl.parentElement;
            return ((grandparentEl === null || grandparentEl === void 0 ? void 0 : grandparentEl.tagName) === SIDE_NAVIGATION ||
                (greatGrandparentEl === null || greatGrandparentEl === void 0 ? void 0 : greatGrandparentEl.tagName) === SIDE_NAVIGATION);
        };
        this.isInMobileMode = () => {
            const parentEl = this.el.parentElement;
            if (!parentEl)
                return false;
            const grandparentEl = parentEl.parentElement;
            const greatGrandparentEl = grandparentEl === null || grandparentEl === void 0 ? void 0 : grandparentEl.parentElement;
            return ((((grandparentEl === null || grandparentEl === void 0 ? void 0 : grandparentEl.tagName) === TOP_NAVIGATION ||
                (grandparentEl === null || grandparentEl === void 0 ? void 0 : grandparentEl.tagName) === SIDE_NAVIGATION) &&
                grandparentEl.classList.contains("mobile-mode")) ||
                (((greatGrandparentEl === null || greatGrandparentEl === void 0 ? void 0 : greatGrandparentEl.tagName) === TOP_NAVIGATION ||
                    (greatGrandparentEl === null || greatGrandparentEl === void 0 ? void 0 : greatGrandparentEl.tagName) === SIDE_NAVIGATION) &&
                    greatGrandparentEl.classList.contains("mobile-mode")));
        };
        this.isInNavigationItem = () => {
            const parentEl = this.el.parentElement;
            if (!parentEl)
                return false;
            return parentEl.tagName === "IC-NAVIGATION-ITEM";
        };
        this.isAccessibleLabelDefined = () => isPropDefined(this.accessibleLabel) && this.accessibleLabel !== null;
    }
    accessibleLabelHandler() {
        this.setAccessibleLabel();
    }
    customColorHandler() {
        this.variant === "custom" && this.setBadgeColour();
    }
    variantHandler() {
        if (this.variant === "custom") {
            this.setBadgeColour();
        }
    }
    visibleHandler() {
        this.setAccessibleLabel();
    }
    componentWillLoad() {
        var _a;
        this.variant === "custom" && this.setBadgeColour();
        const ariaLabel = (_a = this.el.parentElement) === null || _a === void 0 ? void 0 : _a.ariaLabel;
        if (ariaLabel)
            this.parentAriaLabel = ariaLabel;
        this.setAccessibleLabel();
    }
    componentDidLoad() {
        this.type === "text" &&
            onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Badge");
    }
    componentWillRender() {
        this.isInTopNav() && this.setPositionInTopNavigation();
        this.isInSideNav() && this.setPositionInSideNavigation();
    }
    navBarMenuOpenHandler() {
        this.isInTopNav() && (this.position = "inline");
    }
    navBarMenuCloseHandler() {
        this.isInTopNav() && (this.position = this.initialPosition);
    }
    render() {
        const { ariaLabel, el, foregroundColour, getLabel, position, size, label, type, variant, visible, theme, } = this;
        return (h(Host, { key: '0a7aab65643b79886f4134e59c195e33d8340e43', class: {
                [`ic-badge-${position}`]: true,
                [`ic-badge-${size}`]: true,
                [`ic-badge-${variant}`]: true,
                [`ic-badge-${type}`]: true,
                [`ic-badge-foreground-${foregroundColour}`]: foregroundColour !== null && variant === "custom",
                [`${visible ? "ic-badge-show" : "ic-badge-hide"}`]: true,
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, id: el.id || null, "aria-label": ariaLabel, role: "status" }, type === "icon" && h("slot", { key: 'e9684e9e92784e628f984a4980b512268565de0f', name: "badge-icon" }), type === "text" && label && (h("ic-typography", { key: 'f02681caadcec768afe078a9fe94aa1fe8314895', variant: size === "small" ? "badge-small" : "badge" }, getLabel())), type === "dot" && h("span", { key: '5065cf6a359ef976dac4c914bca25e8999f54ae1', class: "sr-only" }, "badge")));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "accessibleLabel": ["accessibleLabelHandler"],
        "customColor": ["customColorHandler"],
        "variant": ["variantHandler"],
        "visible": ["visibleHandler"]
    }; }
};
Badge.style = IcBadgeStyle0;

export { Badge as ic_badge };

//# sourceMappingURL=ic-badge.entry.js.map