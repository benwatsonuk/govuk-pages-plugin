import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { C as Chevron } from './chevron-icon-589e3b46.js';
import { u as getSlotElements, i as isSlotUsed } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const backIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>
</svg>
`;

const icBreadcrumbCss = ":host{display:block;margin:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0}:host .breadcrumb{display:flex;align-items:center;white-space:nowrap;gap:var(--ic-space-xs);min-height:var(--ic-space-lg)}:host .chevron{width:var(--ic-space-lg);height:var(--ic-space-lg)}:host .chevron svg,:host(.ic-breadcrumb-monochrome) .chevron svg{color:var(--ic-breadcrumb-icon-chevron)}:host(:first-child) .chevron{display:none}.back-icon svg{color:var(--ic-breadcrumb-icon)}:host(.ic-breadcrumb-monochrome) .back-icon svg{color:var(--ic-breadcrumb-icon-monochrome)}:host(.ic-breadcrumb-back){display:flex;align-items:center}:host(.ic-breadcrumb-back) .chevron{display:none}ic-link{--breadcrumb-link-display:inline-flex;--breadcrumb-link-align-items:center;--breadcrumb-link-gap:var(--ic-space-xs)}:host(.ic-breadcrumb-aria-current-page){cursor:text}:host(.ic-breadcrumb-aria-current-page) .current-page-container{display:flex;align-items:center;gap:var(--ic-space-xs);color:var(--ic-breadcrumb-text)}:host(.ic-breadcrumb-aria-current-page).ic-breadcrumb-monochrome .current-page-container{color:var(--ic-breadcrumb-text-monochrome)}:host(.ic-breadcrumb-aria-current-page) slot{pointer-events:none}:host(.collapsed-breadcrumb-wrapper){margin-right:var(--ic-space-xs) !important;display:flex;align-items:center;gap:var(--ic-space-xs)}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb){border:none;background-color:transparent;color:var(--ic-color-hyperlink-default);text-decoration:underline;font-weight:var(--ic-font-weight-bold);cursor:pointer}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){outline:var(--ic-hc-focus-outline);border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}.hide,:host(.collapsed-breadcrumb-wrapper) ::slotted(.hide){display:none}.slotted-link-container{gap:var(--ic-space-xs);display:flex}.slotted-link-container .back-icon{width:1.5rem;height:1.5rem}.slotted-link-container .link-wrapper{line-height:1.5rem}@media (forced-colors: active){.back-icon svg{color:currentcolor}}@supports (text-underline-offset: 25%){ic-link{--breadcrumb-link-display:flex}:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:hover),:host(.collapsed-breadcrumb-wrapper) ::slotted(.collapsed-breadcrumb:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}";
const IcBreadcrumbStyle0 = icBreadcrumbCss;

const Breadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.HREF_ATTR = "href";
        this.linkSlotContent = null;
        this.slottedLinkEl = null;
        this.slottedLinkHref = null;
        /**
         * If `true`, aria-current will be set on the breadcrumb.
         */
        this.current = false;
        /**
         * @internal If `true`, the breadcrumb will display as black in the light theme, and white in the dark theme.
         */
        this.monochrome = false;
        /**
         * @internal If `true`, back icon will be displayed.
         */
        this.showBackIcon = false;
        /**
         * @internal Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        // Prevent focus on breadcrumb if current page and contains slotted link
        this.updatedSlottedLinkFocus = () => {
            var _a, _b;
            // Sets tabindex on wrong element in unit test snapshots
            // - related to known Jest issue: https://github.com/ionic-team/stencil/issues/2830
            if (this.linkSlotContent) {
                this.linkSlotContent.tabIndex = this.current ? -1 : 0; // Prevent focus
            }
            if (this.current) {
                (_a = this.slottedLinkEl) === null || _a === void 0 ? void 0 : _a.removeAttribute(this.HREF_ATTR); // Prevent screen reader announcing breadcrumb as a link
            }
            else if (this.slottedLinkHref) {
                (_b = this.slottedLinkEl) === null || _b === void 0 ? void 0 : _b.setAttribute(this.HREF_ATTR, this.slottedLinkHref);
            }
        };
        this.getSlottedLinkEl = () => {
            if (!this.linkSlotContent)
                return null;
            return this.linkSlotContent.hasAttribute(this.HREF_ATTR)
                ? this.linkSlotContent
                : this.linkSlotContent.querySelector("[href]");
        };
        this.renderBackIcon = () => (h("div", { class: "back-icon", innerHTML: backIcon }));
    }
    watchCurrentHandler() {
        this.updatedSlottedLinkFocus();
        this.el.ariaCurrent = this.current ? "page" : null;
    }
    componentDidLoad() {
        var _a, _b;
        const slottedLinkWrapper = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".link-wrapper");
        if (slottedLinkWrapper) {
            const slotEls = getSlotElements(slottedLinkWrapper);
            if (slotEls) {
                this.linkSlotContent = slotEls[0];
                this.slottedLinkEl = this.getSlottedLinkEl();
                this.slottedLinkHref = ((_b = this.slottedLinkEl) === null || _b === void 0 ? void 0 : _b.getAttribute("href")) || null;
            }
            this.updatedSlottedLinkFocus();
        }
    }
    componentWillRender() {
        const icLink = this.el.querySelector("ic-link");
        if (icLink) {
            const CURRENT_PAGE = "current-page";
            icLink.classList.remove(CURRENT_PAGE);
            if (this.current && !icLink.classList.contains(CURRENT_PAGE)) {
                icLink.classList.add("breadcrumb-link", CURRENT_PAGE);
            }
        }
    }
    /**
     * Sets focus on the breadcrumb.
     */
    async setFocus() {
        var _a, _b;
        (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ic-link")) === null || _b === void 0 ? void 0 : _b.focus();
    }
    render() {
        const { current, href, monochrome, pageTitle, showBackIcon, theme } = this;
        const describedById = `${pageTitle === null || pageTitle === void 0 ? void 0 : pageTitle.toLowerCase().replace(" ", "-")}-describedby`;
        return (h(Host, { key: '35d95efd65cb713a1b9b614aa7162a328f1fd5bd', class: {
                "ic-breadcrumb-back": showBackIcon,
                "ic-breadcrumb-monochrome": monochrome,
                [`ic-theme-${theme}`]: theme !== "inherit",
                [`ic-breadcrumb-aria-current-page`]: current,
            }, "aria-current": current && "page", role: "listitem" }, h("div", { key: '126bfcb069004244fc0beb4b3f5e3dab652a4057', class: "breadcrumb" }, h("span", { key: '24c4bd1741b5a65b8d348280bd3c680db15edcfc', innerHTML: Chevron, class: "chevron", "aria-hidden": "true" }), showBackIcon && (h("span", { key: '501ae0ebd6ce1b77026ab8c447f59abf00db7c73', id: describedById, class: "hide" }, `Back to ${pageTitle}`)), !href ? (h("div", { class: "slotted-link-container" }, showBackIcon && this.renderBackIcon(), h("span", { class: "link-wrapper" }, h("slot", null)))) : current ? (h("span", { class: "current-page-container" }, isSlotUsed(this.el, "icon") && h("slot", { name: "icon" }), pageTitle)) : (h("ic-link", { theme: theme, monochrome: monochrome, href: href, class: "breadcrumb-link", "aria-describedby": showBackIcon && describedById }, showBackIcon && this.renderBackIcon(), isSlotUsed(this.el, "icon") && h("slot", { name: "icon" }), pageTitle)))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "current": ["watchCurrentHandler"]
    }; }
};
Breadcrumb.style = IcBreadcrumbStyle0;

export { Breadcrumb as ic_breadcrumb };

//# sourceMappingURL=ic-breadcrumb.entry.js.map