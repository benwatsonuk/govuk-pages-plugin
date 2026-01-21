import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { c as onComponentPropUndefinedChange, o as onComponentRequiredPropUndefined } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const ArrowUpward = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M0 8L1.41 9.41L7 3.83V16H9V3.83L14.58 9.42L16 8L8 0L0 8Z"/>
</svg>
`;

const icBackToTopCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:flex;flex:row;height:0.1px}:host(.ic-back-to-top-right){justify-content:flex-end}:host(.ic-back-to-top-right) ic-button{margin-right:var(--margin-right, 1rem)}:host(.ic-back-to-top-right) .ic-back-to-top-icon{padding-top:var(--ic-space-xxs);padding-right:var(--ic-space-xs)}:host(.ic-back-to-top-left){justify-content:flex-start}:host(.ic-back-to-top-left) ic-button{margin-left:var(--margin-left, 1rem)}:host(.ic-back-to-top-left) .ic-back-to-top-icon{padding-top:var(--ic-space-xxs);padding-right:var(--ic-space-xs)}:host(.ic-back-to-top-center){justify-content:center}:host(.ic-back-to-top-center) .ic-back-to-top-icon{padding-top:var(--ic-space-xxs);padding-right:var(--ic-space-xs)}ic-button{height:2.5rem;align-items:center;background-color:var(--ic-color-background-primary);border-radius:5rem;box-shadow:var(--ic-elevation-overlay);visibility:hidden;position:fixed;bottom:var(--ic-space-md);opacity:0;transition:visibility 0s linear var(--ic-transition-duration-slow),\n    opacity var(--ic-transition-duration-slow);z-index:var(--ic-z-index-back-to-top)}:host(.ic-back-to-top-variant-icon) ic-button::part(button){margin:0}ic-button::part(button){border-radius:5rem}ic-button.show{visibility:visible;opacity:1;transition:visibility 0s linear 0s,\n    opacity var(--ic-transition-duration-slow),\n    box-shadow var(--ic-easing-transition-fast)}ic-button.offset-banner:not(.by-footer){margin-bottom:var(--footer-offset, var(--ic-space-lg))}.ic-back-to-top-icon>svg{height:var(--ic-space-md);width:var(--ic-space-md)}.icon-only{width:2.5rem}.icon-only .ic-back-to-top-icon>svg{padding-left:calc(var(--ic-space-xs) - var(--ic-space-1px))}ic-button.by-footer{position:relative;bottom:var(--footer-offset, 3.5rem)}@media (forced-colors: active){.icon-only .ic-back-to-top-icon>svg{padding-left:calc(var(--ic-space-xs) - var(--ic-space-xxxs))}}";
const IcBackToTopStyle0 = icBackToTopCss;

const backToTopLabel = "Back to top";
const BackToTop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.topObserver = null;
        this.bannerOffset = false;
        this.footerVisible = false;
        this.targetElVisible = true;
        /**
         * The horizontal position of the element.
         */
        this.position = "right";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The variant of the button to render
         */
        this.variant = "default";
        this.getObservedEl = () => {
            return document.querySelector("#ic-back-to-top-target");
        };
        this.setTargetElVisible = (visible) => {
            this.targetElVisible = visible;
        };
        this.setFooterVisible = (visible) => {
            this.checkForClassificationBanner();
            this.footerVisible =
                typeof window !== "undefined" && window.scrollY === 0 ? false : visible;
        };
        this.targetElObserverCallback = (entries) => {
            this.setTargetElVisible(entries[0].isIntersecting);
        };
        this.footerObserverCallback = (entries) => {
            this.setFooterVisible(entries[0].isIntersecting);
        };
        this.findTargetEl = (target) => {
            let targetElement = null;
            if (target === null || target === undefined) {
                console.log("Error: No target ID specified for back to top component - defaulting to top of page");
            }
            else {
                targetElement = document.querySelector(`${target.startsWith("#") ? "" : "#"}${target}`);
                if (targetElement === null) {
                    console.log(`Error: Back to top target element '${target}' not found - defaulting to top of page`);
                }
            }
            return targetElement;
        };
        this.createTopObserver = (target) => {
            this.targetEl = this.findTargetEl(target);
            let objParent;
            //remove old element & observer
            if (this.topObserver !== null) {
                const observedEl = this.getObservedEl();
                if (observedEl !== null) {
                    this.topObserver.unobserve(observedEl);
                    observedEl.remove();
                }
            }
            if (this.targetEl === null) {
                objParent = document.body;
                this.targetEl = objParent.firstElementChild;
                this.isTargetElNull = true;
            }
            else {
                objParent = this.targetEl.parentNode;
                this.isTargetElNull = false;
            }
            //insert a new 0px height element before specified target that can be used to determine when page is scrolled
            const objBackToTopTargetEl = document.createElement("div");
            objBackToTopTargetEl.setAttribute("id", "ic-back-to-top-target");
            objBackToTopTargetEl.setAttribute("tabindex", "-1"); // Needed for virtual cursor behaviour to work
            objParent.insertBefore(objBackToTopTargetEl, this.targetEl);
            // resize observer needs to factor in any top margin on the target el
            const marginTop = this.targetEl
                ? getComputedStyle(this.targetEl).marginTop
                : 0;
            this.topObserver = new IntersectionObserver(this.targetElObserverCallback, {
                threshold: [0],
                rootMargin: `${marginTop} 0px 0px 0px`,
            });
            this.topObserver.observe(objBackToTopTargetEl);
        };
        this.handleClick = () => {
            var _a;
            if (this.isTargetElNull) {
                window.scrollTo(0, 0);
            }
            else {
                (_a = this.targetEl) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
            }
            // Get virtual cursor to move
            this.getObservedEl().focus();
        };
        this.checkForClassificationBanner = () => {
            //adjust position for classification banner at bottom
            const banners = document.querySelectorAll("ic-classification-banner:not([inline='true'])");
            this.bannerOffset = banners.length > 0;
        };
    }
    watchPropHandler(newValue, oldValue) {
        //added for gatsby rehydration issue where prop is initially undefined but then changes to actual value
        onComponentPropUndefinedChange(oldValue, newValue, () => {
            this.createTopObserver(newValue);
        });
    }
    componentWillLoad() {
        this.createTopObserver(this.target);
        this.checkForClassificationBanner();
        //observer for when footer scrolls into view
        let footers = document.querySelectorAll("ic-footer");
        if (footers.length === 0) {
            footers = document.querySelectorAll("footer");
        }
        if (footers.length) {
            const footerEl = footers[footers.length - 1];
            const threshold = this.bannerOffset ? 0.15 : 0;
            const footerObserver = new IntersectionObserver(this.footerObserverCallback, { threshold: [threshold] });
            footerObserver.observe(footerEl);
        }
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.target, propName: "target" }], "Back to Top");
    }
    render() {
        const { variant, bannerOffset, targetElVisible, footerVisible } = this;
        const btnVariant = variant === "icon" ? "icon-secondary" : "secondary";
        const size = variant === "icon" ? "large" : "medium";
        const label = variant === "icon" ? "" : backToTopLabel;
        return (h(Host, { key: '2c281b238cd14437e120084c35ae86089cd49fe9', class: {
                [`ic-theme-${this.theme}`]: this.theme !== "inherit",
                [`ic-back-to-top-${this.position}`]: true,
                [`ic-back-to-top-variant-icon`]: variant === "icon",
            } }, h("ic-button", { key: '15bcf38bcc837a9723e5af644551b24845d4cbbb', "aria-label": backToTopLabel, variant: btnVariant, size: size, onClick: this.handleClick, class: {
                ["offset-banner"]: bannerOffset,
                ["show"]: !targetElVisible,
                ["by-footer"]: footerVisible,
                ["icon-only"]: variant === "icon",
            }, theme: this.theme }, h("span", { key: '4d6d2e0390eda5cd6db7f26bd597db7fef9c81c0', class: "ic-back-to-top-icon", innerHTML: ArrowUpward }), label)));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "target": ["watchPropHandler"]
    }; }
};
BackToTop.style = IcBackToTopStyle0;

export { BackToTop as ic_back_to_top };

//# sourceMappingURL=ic-back-to-top.entry.js.map