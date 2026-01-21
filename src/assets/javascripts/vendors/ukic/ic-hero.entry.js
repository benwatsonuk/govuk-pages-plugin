import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { g as getBrandForegroundAppearance, t as slotHasContent, i as isSlotUsed, o as onComponentRequiredPropUndefined, a as renderDynamicChildSlots, e as isPropDefined, I as IcBrandForegroundEnum } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icHeroCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;background-color:var(--ic-hero-background);--hero-heading-bottom-margin:var(--ic-space-md);--hero-keyline:var(--ic-hero-keyline)}:host(.ic-hero-dark){background-color:var(--ic-brand-color-secondary);--ic-hero-heading:var(--ic-color-text-primary-light);--ic-hero-body:var(--ic-color-text-primary-light);--ic-hero-secondary-heading:var(--ic-color-text-primary-light);--hero-keyline:var(--ic-brand-text-color)}.heading{--ic-typography-color:var(--ic-hero-heading)}.subheading{--ic-typography-color:var(--ic-hero-body)}.secondary-container{--ic-typography-color:var(--ic-hero-secondary-heading);display:flex;flex-direction:column;justify-content:center;border-left:var(--ic-space-xxxs) solid var(--hero-keyline)}:host(.has-background-image){background-repeat:no-repeat;background-position:right -6.25rem;background-size:auto calc(100% + 6.25rem);box-shadow:var(--ic-elevation-inset)}@media (prefers-reduced-motion){:host(.has-background-image){background-position:right -6.25rem !important}}ic-typography.heading-bottom-spacing{margin-bottom:var(--hero-heading-bottom-margin)}.section-container{display:flex;align-items:center;height:100%}.left-container{padding:var(--ic-space-xl) 0}.left-container:not(.left-container-full-width){flex-basis:50%}.left-container-full-width{width:100%}.right-container{flex-basis:50%}.interaction-container{display:flex;gap:var(--ic-space-md);margin-top:var(--ic-space-lg);flex-wrap:wrap;--ic-date-input-label:var(--ic-brand-text-color);--ic-time-picker-label:var(--ic-brand-text-color);--ic-checkbox-group-label:var(--ic-brand-text-color);--ic-radio-button-input-field-label:var(--ic-brand-text-color);--ic-search-bar-label:var(--ic-brand-text-color);--ic-select-field-label:var(--ic-brand-text-color);--ic-switch-label:var(--ic-brand-text-color);--ic-text-field-label:var(--ic-brand-text-color);--ic-date-input-subtitle:var(--ic-brand-text-color);--ic-time-picker-subtitle:var(--ic-brand-text-color);--ic-checkbox-group-subtitle:var(--ic-brand-text-color);--ic-radio-button-input-field-subtitle:var(--ic-brand-text-color);--ic-search-bar-subtitle:var(--ic-brand-text-color);--ic-select-input-field-label-subtitle:var(--ic-brand-text-color);--ic-switch-subtitle:var(--ic-brand-text-color);--ic-text-field-subtitle:var(--ic-brand-text-color);--ic-checkbox-text:var(--ic-brand-text-color);--ic-radio-button-text-option:var(--ic-brand-text-color)}.secondary-subheading{margin-top:var(--ic-space-xxs)}:host(.ic-hero-content-aligned-left) .left-container,:host(.ic-hero-content-aligned-left) .interaction-container{justify-content:flex-start;text-align:left}:host(.ic-hero-content-aligned-center) .left-container,:host(.ic-hero-content-aligned-center) .interaction-container{justify-content:center;text-align:center}@media (min-width: 992px){.left-container-full-width{width:66.6%}}@media (min-width: 1044px){:host,.section-container{min-height:13rem}:host(.ic-hero-small),:host(.ic-hero-small) .section-container{min-height:10.813rem}.left-container:not(.left-container-full-width){flex-basis:66.6%}.left-container{min-height:9rem}.right-container{flex-basis:33.3%;margin-left:3.125rem}.secondary-container{min-height:9rem}.secondary-heading,.secondary-subheading{margin-left:3.938rem}}@media (min-width: 801px) and (max-width: 1043px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:16rem}:host(.ic-hero-small),:host(.ic-hero-small) .section-container{min-height:15rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:14rem}.left-container{min-height:10rem}.secondary-container{min-height:10rem}.secondary-heading,.secondary-subheading{margin-left:5.922rem}.right-container{margin-left:3.125rem}}@media (min-width: 641px) and (max-width: 800px){:host(.has-background-image){background-image:none !important}:host(.has-right-content) .section-container{flex-wrap:wrap}:host(.has-right-content) .left-container{flex-basis:100%}:host(.has-right-content) .right-container{flex-basis:100%;margin-bottom:2.5rem}:host,.section-container{min-height:16rem}:host(.ic-hero-small),:host(.ic-hero-small) .section-container{min-height:15rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:14rem}.left-container{min-height:10rem}.secondary-container{min-height:10rem}.secondary-heading,.secondary-subheading{margin-left:2.125rem}}@media (min-width: 481px) and (max-width: 640px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:13rem}:host(.ic-hero-small),:host(.ic-hero-small) .section-container{min-height:10.813rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:17.5rem}:host(.secondary-heading) .section-container,:host(.ic-hero-small) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}.right-container{margin-bottom:2.5rem}}@media (max-width: 480px){:host(.has-background-image){background-image:none !important}:host,.section-container{min-height:12rem}:host,.right-container{margin-bottom:var(--ic-space-md)}:host(.ic-hero-small),:host(.ic-hero-small) .section-container{min-height:10.813rem}:host(.secondary-heading),:host(.secondary-heading) .section-container{min-height:16.5rem}:host(.secondary-heading) .section-container,:host(.ic-hero-small) .section-container,.section-container{flex-direction:column;align-items:flex-start}.left-container{height:-moz-fit-content;height:fit-content}.secondary-container{height:-moz-fit-content;height:fit-content;border:none}}";
const IcHeroStyle0 = icHeroCss;

const Hero = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hostMutationObserver = null;
        this.foregroundColor = getBrandForegroundAppearance();
        this.rightContent = false;
        // set by above state
        this.leftContentFullWidth = !this.rightContent && this.secondaryHeading === undefined;
        this.scrollFactor = "right -100px";
        /**
         * The alignment of the hero.
         */
        this.aligned = "left";
        /**
         * The alignment of the hero content.
         */
        this.contentAligned = "left";
        /**
         * If `true`, the background image (if set) will not scroll using a parallax effect.
         */
        this.disableBackgroundParallax = false;
        /**
         * The size of the hero component.
         */
        this.size = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
    }
    disconnectedCallback() {
        var _a;
        (_a = this.hostMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentWillLoad() {
        this.rightContent = slotHasContent(this.el, "secondary");
    }
    componentDidLoad() {
        !isSlotUsed(this.el, "heading") &&
            onComponentRequiredPropUndefined([{ prop: this.heading, propName: "heading" }], "Hero");
        this.hostMutationObserver = new MutationObserver((mutationList) => renderDynamicChildSlots(mutationList, "secondary", this));
        this.hostMutationObserver.observe(this.el, {
            childList: true,
        });
    }
    componentWillRender() {
        this.rightContent = slotHasContent(this.el, "secondary");
    }
    brandChangeHandler(ev) {
        this.foregroundColor = ev.detail.mode;
    }
    doScroll() {
        var _a;
        if (this.disableBackgroundParallax) {
            return;
        }
        const scrolltotop = (_a = document.scrollingElement) === null || _a === void 0 ? void 0 : _a.scrollTop;
        if (scrolltotop) {
            const factor = 0.4;
            const y = -100 + scrolltotop * factor;
            this.scrollFactor = "right " + y + "px";
        }
    }
    render() {
        const { aligned, size, heading, subheading, secondaryHeading, secondarySubheading, foregroundColor, backgroundImage, scrollFactor, contentAligned, theme, } = this;
        let style = {};
        if (isPropDefined(backgroundImage)) {
            style = {
                "background-image": "url(" + backgroundImage + ")",
                "background-position": scrollFactor,
            };
        }
        return (h(Host, { key: '34d3c839d5827d5dadfdc1a160c4b6b2ae965cdf', class: {
                [`ic-hero-${IcBrandForegroundEnum.Dark}`]: foregroundColor === IcBrandForegroundEnum.Dark,
                ["has-background-image"]: backgroundImage !== undefined,
                ["has-right-content"]: this.rightContent,
                ["ic-hero-small"]: size === "small",
                ["secondary-heading"]: !!secondaryHeading,
                [`ic-hero-content-aligned-${contentAligned}`]: contentAligned !== undefined,
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, style: style }, h("ic-section-container", { key: '92c885c6bb0532ed6d5adbea3927ff56c88ccf00', aligned: aligned, fullHeight: true, class: "section-container" }, h("div", { key: '808e287fe214793b21c2da1d4db8410a0fecdcb9', class: {
                ["left-container"]: true,
                ["left-container-full-width"]: this.leftContentFullWidth,
            } }, h("div", { key: '09267f66de926f237092d55372f34ee75b3b1bb5', class: "heading" }, h("slot", { key: 'b30e4be509093aa6f7b2dbe906eb63c8ed1f70da', name: "heading" }, h("ic-typography", { key: 'a59edf905e413ecd324b09807acb4efc7730b1ef', variant: size === "small" ? "h2" : "h1", class: {
                ["heading-bottom-spacing"]: size !== "small",
            } }, h("h2", { key: 'f3d705dcea394926d050c5e9a518aa6d23e61c74' }, heading)))), h("div", { key: 'e67892b909d8d59b9714c9c39b07f5fbaa47cd5f', class: "subheading" }, h("slot", { key: '94601527aad82e6da4a1723f435b26221f562d3c', name: "subheading" }, h("ic-typography", { key: 'd10d05ad2ecbc02f3cc9612c5e5cd8507c95e7ba', variant: "body" }, subheading))), h("div", { key: '12ea9178058e547b57fd1ca454a00a9bdf542f41', class: "interaction-container" }, h("slot", { key: '8b3e37943fb688843dfcc6f28f7aab2d42c66454', name: "interaction" }))), (isPropDefined(secondaryHeading) || this.rightContent) && (h("div", { key: '2783784a47d8a7667959b6bc0a102e0536050cab', class: "right-container" }, h("slot", { key: 'ad168f0963f7950cf70b8a77abd4390a0585ddff', name: "secondary" }, secondaryHeading && (h("div", { key: 'faa3a3a6f23962c99eab8d1e81e2fa5d96b8f6c2', class: "secondary-container" }, h("div", { key: '147945f65e18d6d3ade2342057e1cdaf68faca50', class: "secondary-heading" }, h("ic-typography", { key: '78a22d379cb17ec183b4f320f652696cf46155b4', variant: "h4" }, h("h3", { key: '87619d7363588a0887f4c704011d824d51f3caa2' }, secondaryHeading))), h("div", { key: '0cc920336ef6d241361f095317391c296ce81e81', class: "secondary-subheading" }, h("ic-typography", { key: '19db9e9c8c392b26e698427048de8ad1bf2b7a5a', variant: "subtitle-small" }, secondarySubheading))))))))));
    }
    get el() { return getElement(this); }
};
Hero.style = IcHeroStyle0;

export { Hero as ic_hero };

//# sourceMappingURL=ic-hero.entry.js.map