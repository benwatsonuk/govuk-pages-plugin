import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { D as DEVICE_SIZES, i as isSlotUsed, f as getCurrentDeviceSize, h as checkResizeObserver } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icPageHeaderCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;z-index:var(--ic-z-index-page-header)}:host(.ic-page-header-sticky){position:sticky;top:0;box-shadow:var(--ic-elevation-overlay);z-index:var(--ic-z-index-sticky-page-header)}header{background-color:var(--ic-page-header-background)}header.border-bottom{border-bottom:var(--ic-border-default);border-bottom:var(--ic-space-1px) solid var(--ic-page-header-border)}header.tabs{padding-top:var(--ic-space-md)}.breadcrumb-area{margin-bottom:var(--ic-space-md)}::slotted(ic-navigation-item){--navigation-link-colour:var(--ic-color-text-primary)}.main-content{display:grid;grid-template-columns:auto 1fr;grid-template-areas:\"title-area action-area\"\n    \"input-area action-area\";-moz-column-gap:var(--ic-space-md);column-gap:var(--ic-space-md);justify-content:space-between;width:100%}.title-area{display:flex;flex-direction:column;flex:1;min-width:19rem;grid-area:title-area}.header-content{display:flex;align-items:center;width:100%;flex-wrap:wrap;-moz-column-gap:var(--ic-space-md);column-gap:var(--ic-space-md)}.heading{display:inline-block;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}.subheading-content{margin-top:var(--ic-space-xs)}.subheading-content.small{margin-top:var(--ic-space-md)}.action-area{display:flex;gap:var(--ic-space-md);flex-flow:row wrap;justify-self:end;justify-content:flex-end;height:-moz-fit-content;height:fit-content;grid-area:action-area}.input-area,.navigation-area{margin-top:var(--ic-space-md);width:100%}.tabs-slot{display:flex;overflow-x:auto;padding:0.5rem;margin:-0.5rem}.tabs-slot::-webkit-scrollbar{display:none}.input-area{grid-area:input-area}@media screen and (max-width: 576px){::slotted(ic-text-field){--input-width:100%;max-width:20rem}.main-content{grid-template-areas:\"title-area\"\n      \"action-area\"\n      \"input-area\";justify-content:flex-start}.title-area{min-width:0}.action-area{min-width:100%;margin-top:var(--ic-space-md);justify-content:start}}@media screen and (min-width: 992px){:host(.ic-page-header-sticky-desktop){position:sticky;top:0;box-shadow:var(--ic-elevation-overlay);z-index:var(--ic-z-index-sticky-page-header)}}";
const IcPageHeaderStyle0 = icPageHeaderCss;

const PageHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resizeObserver = null;
        this.areButtonsReversed = false;
        this.deviceSize = DEVICE_SIZES.XL;
        /**
         * The alignment of the page header.
         */
        this.aligned = "left";
        /**
         * If `true`, a border will be displayed along the bottom of the page header.
         */
        this.border = true;
        /**
         * If `true`, the reading pattern and tab order will change in the action area for viewport widths of above 576px and when actions have not wrapped.
         */
        this.reverseOrder = false;
        /**
         * The size of the page header component.
         */
        this.size = "medium";
        /**
         * If `true`, the page header will be sticky at all breakpoints.
         */
        this.sticky = false;
        /**
         *  If `true`, the page header will only be sticky for viewport widths of 992px and above.
         */
        this.stickyDesktopOnly = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.resizeObserverCallback = () => {
            if (this.reverseOrder && isSlotUsed(this.el, "actions")) {
                this.applyReverseOrder();
            }
        };
        this.runResizeObserver = () => {
            this.resizeObserver = new ResizeObserver(() => {
                this.resizeObserverCallback();
            });
            this.resizeObserver.observe(this.el);
        };
        this.applyReverseOrder = () => {
            var _a;
            const currSize = getCurrentDeviceSize();
            if (currSize !== this.deviceSize) {
                this.deviceSize = currSize;
            }
            const actionArea = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("div.action-area");
            const actionHeights = [];
            /* For each button in the actions slot, check the height of the button and push this number into the actionHeights array and then find the greatest number in this array (i.e. find the height of the tallest button) */
            for (let i = 0; i < this.actionContent.length; i++) {
                const action = this.actionContent[i];
                let actionHeight = action.offsetHeight;
                if (actionHeight === undefined) {
                    actionHeight = 0;
                }
                actionHeights.push(actionHeight);
            }
            const max = Math.max(...actionHeights);
            /* The smallest breakpoint displays buttons in the same order the user has slotted them in. When the device size is larger than the small breakpoint then the order of the button reverses due to best practice for reading patterns. If the device size is larger than the small breakpoint and the buttons have started to wrap then they follow the order the user has slotted them in. This logic is programmed based on the height of the action-area div that wraps the actions slot. If the height of the action-area div is taller than the height of the tallest button, then it is assumed that the taller height is caused by the buttons wrapping */
            let actionAreaHeight = actionArea.offsetHeight;
            if (actionAreaHeight === undefined) {
                actionAreaHeight = 0;
            }
            const appendActionContent = () => {
                this.actionContent = this.actionContent.reverse();
                this.actionContent.forEach((btn) => {
                    this.el.append(btn);
                });
                this.areButtonsReversed = !this.areButtonsReversed;
            };
            if ((this.deviceSize > DEVICE_SIZES.S &&
                actionAreaHeight <= max &&
                !this.areButtonsReversed) ||
                (((this.deviceSize > DEVICE_SIZES.S && actionAreaHeight > max) ||
                    this.deviceSize <= DEVICE_SIZES.S) &&
                    this.areButtonsReversed)) {
                appendActionContent();
            }
        };
    }
    disconnectedCallback() {
        if (this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
        }
    }
    componentWillLoad() {
        this.actionContent = Array.from(this.el.querySelectorAll(`[slot="actions"]`));
    }
    componentDidLoad() {
        checkResizeObserver(this.runResizeObserver);
    }
    render() {
        var _a, _b;
        const { size, border, heading, subheading, aligned, sticky, stickyDesktopOnly, theme, } = this;
        const navAriaLabel = `${isSlotUsed(this.el, "heading")
            ? (_b = (_a = this.el.querySelector('[slot="heading"]')) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : ""
            : heading !== null && heading !== void 0 ? heading : ""} page sections`;
        return (h(Host, { key: '17bc798fc01d1a70de9fed3da746d8e39a88e96c', class: {
                ["ic-page-header-sticky"]: !!sticky,
                ["ic-page-header-sticky-desktop"]: !sticky && !!stickyDesktopOnly,
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, "aria-label": this.el.ariaLabel || "page header" }, h("header", { key: '1dadcdce3f21efe0f196171330cb5774be34075e', class: {
                ["border-bottom"]: !!border,
                ["tabs"]: isSlotUsed(this.el, "tabs"),
            }, role: "presentation" }, h("ic-section-container", { key: '9f0855c0310d29f5381c12665aad41ee1656ccdb', aligned: aligned, fullHeight: isSlotUsed(this.el, "tabs") }, isSlotUsed(this.el, "breadcrumbs") && (h("div", { key: '3b1fe9729e1d62e72a432fd039db40c1c5da22da', class: "breadcrumb-area" }, h("slot", { key: 'e5055a9f7def4018e2046dae4687ae1945235bf7', name: "breadcrumbs" }))), h("div", { key: '70acf27823b39d41d9c2f3dbe3e89d71096e7daf', class: "main-content" }, h("div", { key: 'b924bba3df8954b9f314c1eff6ffe4443d0e53f1', class: "title-area" }, h("div", { key: '5a60bb74557d37b33be8312d177e75ce77210998', class: "header-content" }, h("slot", { key: 'e4c7c70b13eac0944bba1a1f2ddd320f3e1c2659', name: "heading" }, h("ic-typography", { key: 'eb98510ca2b55a81c1b91bbabc4bfe7d5e28bdde', variant: size === "small" ? "h4" : "h2", class: "heading" }, h("h2", { key: '9bc94aa414b9514f0e349faa521804682f22f85b' }, heading))), h("slot", { key: '47b147656f0fe7436d233bb669c4462faab353db', name: "heading-adornment" })), h("div", { key: '1456f12fba38ec4cd05706ccb92d72adf12ae623', class: {
                ["subheading-content"]: !!subheading || isSlotUsed(this.el, "subheading"),
                ["small"]: size === "small",
            } }, h("slot", { key: 'a82707ce4abf37e4e8a965a39a5cc6e50d634647', name: "subheading" }, h("ic-typography", { key: '9f77da962becb04b244f3df0dceb7dad9dc122d8', variant: "body" }, subheading)))), isSlotUsed(this.el, "actions") && (h("div", { key: '792df65e46b45a50514a1967866dd72f6f72e683', class: "action-area" }, h("slot", { key: '0cd5fd825254df4815fe2d3e788946de88cbaae1', name: "actions" }))), isSlotUsed(this.el, "input") && (h("div", { key: 'e030cb3067c544b3d3496146e25d511a30ca97b2', class: "input-area" }, h("slot", { key: '8c9f722a205eded36526a4bc926e7a92c43626af', name: "input" })))), (isSlotUsed(this.el, "stepper") ||
            isSlotUsed(this.el, "tabs")) && (h("div", { key: 'deeb8c5520db91c494215d1adf90bebcc96fbbb5', class: "navigation-area" }, isSlotUsed(this.el, "stepper") &&
            !isSlotUsed(this.el, "tabs") && h("slot", { key: 'd9201c158069b054c3903ea4c0647d96de9d0930', name: "stepper" }), isSlotUsed(this.el, "tabs") && (h("nav", { key: 'a0cdbb20f507dd783536b0a60ae7fa2d391be85f', "aria-label": navAriaLabel }, h("ic-horizontal-scroll", { key: 'f3c15e0d61db5990108d86c5540d4f69b9477a9e' }, h("ul", { key: '6e7aded64c14703b5b4f141fa11f0f9eac247bce', class: "tabs-slot" }, h("slot", { key: 'eee6cfc3a09856108574b715163cc645f9eae627', name: "tabs" })))))))))));
    }
    get el() { return getElement(this); }
};
PageHeader.style = IcPageHeaderStyle0;

export { PageHeader as ic_page_header };

//# sourceMappingURL=ic-page-header.entry.js.map