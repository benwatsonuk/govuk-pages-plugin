import { r as registerInstance, f as forceUpdate, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { O as OpenInNew } from './OpenInNew-cdeed5ce.js';
import { w as inheritAttributes, j as getBrandFromContext, I as IcBrandForegroundEnum } from './helpers-dcedb279.js';
import { I as IC_INHERITED_ARIA } from './constants-7960cba4.js';

const icLinkCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-link) .link,:host(.ic-link) ::slotted(a){color:var(--ic-link-text);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}:host(.ic-link) .link:visited,:host(.ic-link) ::slotted(a:visited),:host(.ic-link) .link:visited:hover,:host(.ic-link) ::slotted(a:visited:hover),:host(.ic-link) .link:visited:active,:host(.ic-link) ::slotted(a:visited:active),:host(.ic-link) .link:visited:focus,:host(.ic-link) ::slotted(a:visited:focus){color:var(--ic-link-text-visited)}:host(.ic-link) .link:hover{color:var(--ic-link-text-hover)}:host(.ic-link) .link:active{color:var(--ic-link-text-pressed)}:host(.ic-link) .link:focus{color:var(--ic-link-text-focused)}:host(.ic-link-monochrome) .link:hover{color:var(--ic-link-text-hover-monochrome)}:host(.ic-link-monochrome) .link:active{color:var(--ic-link-text-pressed-monochrome)}:host(.ic-link-monochrome) .link:focus{color:var(--ic-link-text-focused-monochrome)}:host(.ic-link) .link:hover,:host(.ic-link) .link:focus,:host(.ic-link) ::slotted(a:hover),:host(.ic-link) ::slotted(a:focus){outline:none;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none}@supports (text-underline-offset: 10%){:host(.ic-link) .link:hover,:host(.ic-link) .link:focus,:host(.ic-link) ::slotted(a:hover),:host(.ic-link) ::slotted(a:focus){text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:10%;border-bottom:0 !important;margin-bottom:0 !important}}:host(.ic-link) .link:active,:host(.ic-link) .link:focus:active,:host(.ic-link) .link:visited:active,:host(.ic-link) ::slotted(a:active),:host(.ic-link) ::slotted(a:focus:active),:host(.ic-link) ::slotted(a:visited:active){text-decoration:none}.ic-link-open-in-new-icon{vertical-align:middle;margin-left:var(--ic-space-xxs)}.ic-link-open-in-new-icon>svg{width:var(--ic-space-md);height:var(--ic-space-md);fill:var(--ic-link-icon-launch)}.link:visited>.ic-link-open-in-new-icon>svg{fill:var(--ic-link-icon-launch-visited)}:host(.ic-link-monochrome) .link,:host(.ic-link-monochrome) ::slotted(a){color:var(--ic-link-text-monochrome)}:host(.ic-link-monochrome) .link:visited,:host(.ic-link-monochrome) ::slotted(a:visited),:host(.ic-link-monochrome) .link:visited:hover,:host(.ic-link-monochrome) ::slotted(a:visited:hover),:host(.ic-link-monochrome) .link:visited:active,:host(.ic-link-monochrome) ::slotted(a:visited:active),:host(.ic-link-monochrome) .link:visited:focus,:host(.ic-link-monochrome) ::slotted(a:visited:focus){color:var(--ic-link-text-visited-monochrome)}:host(.ic-link-monochrome) .link>.ic-link-open-in-new-icon>svg{fill:var(--ic-link-icon-launch-monochrome)}:host(.ic-link-monochrome) .link:visited>.ic-link-open-in-new-icon>svg{fill:var(--ic-link-icon-launch-visited-monochrome)}:host(.breadcrumb-link) .link{display:var(--breadcrumb-link-display);align-items:var(--breadcrumb-link-align-items);gap:var(--breadcrumb-link-gap)}:host(.breadcrumb-link) .link ::slotted(.back-icon){height:var(--ic-space-lg);width:var(--ic-space-lg)}:host(.breadcrumb-link.current-page) a,:host(.breadcrumb-link.current-page) ::slotted(a){font-weight:normal;color:inherit;text-decoration:none;display:flex;align-items:center}:host(.breadcrumb-link.current-page) .link,:host(.breadcrumb-link.current-page) ::slotted(a:focus){outline:var(--ic-hc-focus-outline);text-decoration:none}:host(.breadcrumb-link.current-page) .link:visited{color:var(--ic-color-text-primary)}:host(.footer-link) ::slotted(a){color:var(--ic-footer-link) !important}:host(.footer-link) .ic-link-open-in-new-icon>svg{fill:var(--ic-footer-icon) !important}@media (forced-colors: active){:host(.ic-link) .ic-link-open-in-new-icon>svg{fill:currentcolor !important}}";
const IcLinkStyle0 = icLinkCss;

const Link = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inheritedAttributes = {};
        this.hostMutationObserver = null;
        /**
         * If `true`, the user can save the linked URL instead of navigating to it. If the value is a string, it will be used as the filename for the download.
         */
        this.download = false;
        /**
         * If `true`, the link will display as black in the light theme, and white in the dark theme.
         */
        this.monochrome = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        // triggered when attributes of host element change
        this.hostMutationCallback = (mutationList) => {
            let forceComponentUpdate = false;
            mutationList.forEach(({ attributeName }) => {
                if (attributeName) {
                    const attribute = this.el.getAttribute(attributeName);
                    if (attribute && IC_INHERITED_ARIA.includes(attributeName)) {
                        this.inheritedAttributes[attributeName] = attribute;
                        forceComponentUpdate = true;
                    }
                }
            });
            if (forceComponentUpdate) {
                forceUpdate(this);
            }
        };
        this.setDownloadAttribute = (value) => {
            if (typeof value === "boolean") {
                return value ? "" : undefined;
            }
            else {
                return value === "true" ? "" : value === "false" ? undefined : value;
            }
        };
    }
    componentWillLoad() {
        this.inheritedAttributes = inheritAttributes(this.el, IC_INHERITED_ARIA);
        this.updateTheme();
        this.el.setAttribute("exportparts", "link");
    }
    componentDidLoad() {
        this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
        this.hostMutationObserver.observe(this.el, {
            attributes: true,
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.hostMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    brandChangeHandler({ detail }) {
        this.updateTheme(detail.mode);
    }
    /**
     * Sets focus on the link.
     */
    async setFocus() {
        var _a, _b;
        (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("a")) === null || _b === void 0 ? void 0 : _b.focus();
    }
    updateTheme(mode = null) {
        const theme = getBrandFromContext(this.el, mode);
        if (theme !== IcBrandForegroundEnum.Default) {
            this.monochrome = true;
            this.theme =
                theme === IcBrandForegroundEnum.Light
                    ? IcBrandForegroundEnum.Dark
                    : IcBrandForegroundEnum.Light;
        }
    }
    hasRouterSlot() {
        this.routerSlot = this.el.querySelector('[slot="router-item"]');
        if (this.routerSlot) {
            this.routerSlot.ariaLabel = this.routerSlot.textContent;
        }
        return !!this.routerSlot;
    }
    render() {
        const { download, href, hreflang, referrerpolicy, rel, target, monochrome, theme, } = this;
        return (h(Host, { key: '1d3ba1effcfab3255ea567c475e2252bd17de507', class: {
                ["ic-link"]: true,
                [`ic-theme-${theme}`]: theme !== "inherit",
                ["ic-link-monochrome"]: !!monochrome,
            } }, this.hasRouterSlot() ? (h("slot", { name: "router-item" })) : (h("a", Object.assign({ class: {
                ["link"]: !!href,
            }, download: this.setDownloadAttribute(download), href: href, hrefLang: hreflang, referrerPolicy: referrerpolicy, rel: rel, target: target, tabindex: href ? "0" : "-1" }, this.inheritedAttributes, { part: "link" }), h("slot", null), target === "_blank" && (h("span", { class: "ic-link-open-in-new-icon", innerHTML: OpenInNew }))))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
};
Link.style = IcLinkStyle0;

export { Link as ic_link };

//# sourceMappingURL=ic-link.entry.js.map