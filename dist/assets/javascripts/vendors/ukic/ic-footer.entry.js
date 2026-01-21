import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { a as IC_DEVICE_SIZES } from './constants-7960cba4.js';
import { g as getBrandForegroundAppearance, f as getCurrentDeviceSize, h as checkResizeObserver, a as renderDynamicChildSlots, i as isSlotUsed, v as hasClassificationBanner, I as IcBrandForegroundEnum } from './helpers-dcedb279.js';

const icFooterCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--footer-compliance-padding:1rem 0}:host(.ic-footer-sparse){--footer-links-padding:1.5rem 0;--footer-logo-margin-bottom:calc(var(--ic-space-md) + var(--ic-space-xxs));--footer-link-inner-flex-direction:row}:host(.ic-footer-small){--footer-links-padding:0 0;--footer-logo-margin-bottom:var(--ic-space-md);--footer-link-inner-flex-direction:column}:host(.ic-footer-foreground-dark){--ic-footer-background:var(--ic-brand-color-secondary-light);--ic-footer-bottom-background:var(--ic-brand-color-tertiary-light);--ic-footer-keyline:var(--ic-state-layer-darken-20);--ic-footer-text:var(--ic-color-text-primary-light);--ic-footer-link:var(--ic-color-text-primary-light);--ic-footer-icon:var(--ic-color-icon-neutral);--ic-footer-chevron-icon:var(--ic-color-icon-neutral);--ic-footer-logo:var(--ic-color-icon-neutral);--ic-footer-hover:var(--ic-architectural-700-state-layer-10);--ic-footer-pressed:var(--ic-architectural-700-state-layer-20)}:host(.ic-footer-small.ic-footer-ungrouped){--footer-links-padding:var(--ic-space-md) 0 0 0}footer{display:flex;flex-direction:column;width:100%}.footer-description{background-color:var(--ic-footer-background);color:var(--ic-footer-text);--ic-typography-color:var(--ic-footer-text);border-bottom:var(--ic-space-1px) solid var(--ic-footer-keyline)}.footer-description-inner{padding:1rem 0}.footer-links{padding:var(--footer-links-padding);background-color:var(--ic-footer-background);color:var(--ic-footer-link);--ic-typography-color:var(--ic-footer-link)}.footer-links-inner{display:flex;flex-direction:var(--footer-link-inner-flex-direction)}.footer-compliance{background-color:var(--ic-footer-bottom-background);color:var(--ic-footer-text);--ic-typography-color:var(--ic-footer-text)}.footer-compliance-inner{padding:var(--footer-compliance-padding)}.footer-logo{margin-bottom:var(--footer-logo-margin-bottom);display:flex;gap:var(--ic-space-xxl)}.footer-logo>::slotted(){margin-right:var(--ic-space-md)}.footer-caption{margin-bottom:var(--ic-space-md)}.classification-spacing{margin-bottom:var(--ic-space-lg)}@media (forced-colors: active){footer{border-top:var(--ic-border-hc)}}";
const IcFooterStyle0 = icFooterCss;

const Footer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.footerResized = createEvent(this, "footerResized", 7);
        this.resizeObserver = null;
        this.hostMutationObserver = null;
        this.deviceSize = IC_DEVICE_SIZES.XL;
        this.foregroundColor = getBrandForegroundAppearance();
        /**
         * The alignment of the section containers used within the footer.
         */
        this.aligned = "left";
        /**
         * The screen size breakpoint at which to switch to the small layout.
         */
        this.breakpoint = "medium";
        /**
         * If `true`, the footer will display the crown copyright at the bottom.
         */
        this.copyright = true;
        /**
         * The text displayed for the copyright notice if `copyright` is `true`.
         */
        this.copyrightText = "© Crown Copyright";
        /**
         * If `true`, the footer will be set up to handle link groups instead of standalone links.
         */
        this.groupLinks = false;
        this.resizeObserverCallback = (currSize) => {
            if (currSize !== this.deviceSize) {
                this.deviceSize = currSize;
            }
            this.footerResized.emit();
        };
        this.runResizeObserver = () => {
            if (this.footerEl) {
                this.resizeObserver = new ResizeObserver(() => {
                    const currSize = getCurrentDeviceSize();
                    this.resizeObserverCallback(currSize);
                });
                this.resizeObserver.observe(this.footerEl);
            }
        };
    }
    disconnectedCallback() {
        var _a;
        if (this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
        }
        (_a = this.hostMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentWillLoad() {
        this.deviceSize = getCurrentDeviceSize();
    }
    componentDidLoad() {
        checkResizeObserver(this.runResizeObserver);
        this.hostMutationObserver = new MutationObserver((mutationList) => {
            return renderDynamicChildSlots(mutationList, "link", this);
        });
        this.hostMutationObserver.observe(this.el, {
            childList: true,
        });
    }
    brandChangeHandler(ev) {
        this.foregroundColor = ev.detail.mode;
    }
    isSmall() {
        const bp = this.breakpoint;
        return bp === "extra small"
            ? this.deviceSize < IC_DEVICE_SIZES.XS
            : bp === "small"
                ? this.deviceSize < IC_DEVICE_SIZES.S
                : bp === "medium"
                    ? this.deviceSize < IC_DEVICE_SIZES.M
                    : bp === "large"
                        ? this.deviceSize < IC_DEVICE_SIZES.L
                        : bp === "extra large"
                            ? this.deviceSize < IC_DEVICE_SIZES.XL
                            : false;
    }
    render() {
        const { aligned, caption, copyright, copyrightText, description, deviceSize, el, foregroundColor, groupLinks, } = this;
        const small = this.isSmall();
        const showComplianceSection = isSlotUsed(el, "logo") ||
            isSlotUsed(el, "caption") ||
            caption ||
            copyright;
        return (h(Host, { key: '6d91277fef5b4a25ebc1300c5f6c9697f7cf51db', class: {
                ["ic-footer"]: true,
                [`ic-footer-${small ? "small" : "sparse"}`]: true,
                [`ic-footer-${groupLinks ? "grouped" : "ungrouped"}`]: true,
                [`ic-footer-foreground-${foregroundColor}`]: true,
                // Slots will be able to infer their own color
                [`ic-footer-${IcBrandForegroundEnum.Dark}`]: foregroundColor === IcBrandForegroundEnum.Dark,
                [`ic-footer-${IcBrandForegroundEnum.Light}`]: foregroundColor === IcBrandForegroundEnum.Light,
            } }, h("footer", { key: 'ff497893502821b501404631d81a6c43282b1b36', ref: (el) => (this.footerEl = el) }, (isSlotUsed(el, "description") || description) && (h("div", { key: 'f8d674674bba8dc6570a7352e943ba8ce97ef666', class: "footer-description" }, h("ic-section-container", { key: 'd1c80f2b82c740b0ae5b3bfe55a42aa81ef631c9', aligned: aligned, fullHeight: true }, h("div", { key: '669b78285fb7274a0f36ad4ffca2e6527bc7ee8f', class: "footer-description-inner" }, h("ic-typography", { key: '0ef8cbc1311b48cfdc9fb0031802dfb3672e1bc0', variant: "body" }, h("slot", { key: '3ea6f48d56500f8ee7711e53c4c4794c5c06bc84', name: "description" }, description)))))), isSlotUsed(el, "link") && (h("div", { key: '3790b13ae7b820882d92d866ab946749f83515dc', class: "footer-links" }, groupLinks && small ? (h("div", { class: "footer-links-inner", role: "list" }, h("slot", { name: "link" }))) : (h("ic-section-container", { fullHeight: true, aligned: aligned }, h("div", { class: "footer-links-inner", role: "list" }, h("slot", { name: "link" })))))), showComplianceSection && (h("div", { key: 'bd4f9da66406e7587aadab57768e0f00d176f5f2', class: "footer-compliance" }, h("ic-section-container", { key: '4b760604abdeb1096927ca72d8b8c53ab2128ea9', aligned: aligned, fullHeight: true }, h("div", { key: '63f1d4b0009cf34f4f4492851f17653f2f2dba84', class: "footer-compliance-inner" }, isSlotUsed(el, "logo") && (h("div", { key: '9b8f9f9983db8f0f8642e79e20906e337c7cf57d', class: "footer-logo" }, h("slot", { key: 'faac7b5562c641bbb700514007e3ee6702e155df', name: "logo" }))), (isSlotUsed(el, "caption") || caption) && (h("div", { key: 'a388c6b1549d5a5516e94f872ecb538f15b1102f', class: "footer-caption" }, h("ic-typography", { key: '7e8a8e10983d31235ed8d90919d673f74d13bccb', variant: deviceSize <= IC_DEVICE_SIZES.M ? "caption" : "body" }, h("slot", { key: '81152b67972243451c8e9b3c05b1e79d5ce1b7f1', name: "caption" }, caption)))), copyright && (h("div", { key: '8f6480deac3ac1a31c0ad0e4a250c35cb07917eb', class: {
                ["footer-copyright"]: true,
                ["classification-spacing"]: hasClassificationBanner(),
            } }, h("ic-typography", { key: 'e119f8f68ad5dc19a9e1020f8fabb52397fd0394', variant: deviceSize <= IC_DEVICE_SIZES.M
                ? "caption-uppercase"
                : "label-uppercase" }, copyrightText))))))))));
    }
    get el() { return getElement(this); }
};
Footer.style = IcFooterStyle0;

export { Footer as ic_footer };

//# sourceMappingURL=ic-footer.entry.js.map