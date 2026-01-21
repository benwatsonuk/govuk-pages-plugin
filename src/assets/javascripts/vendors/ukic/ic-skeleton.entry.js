import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';

const icSkeletonCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@keyframes loading{0%{background-color:var(--ic-skeleton-background)}50%{background-color:var(--ic-skeleton-background-secondary)}100%{background-color:var(--ic-skeleton-background)}}:host(.skeleton){background-color:var(--ic-skeleton-background);border-radius:var(--ic-border-radius);animation:loading 1200ms infinite;display:inline-block}:host(.skeleton)>*{opacity:0;visibility:hidden}:host(.ic-skeleton-circle){border-radius:50%}@media (forced-colors: active){:host(.skeleton){-ms-high-contrast-adjust:none;forced-color-adjust:none;background:currentcolor}}";
const IcSkeletonStyle0 = icSkeletonCss;

const DEFAULT_HEIGHTS = {
    text: "1em",
    circle: "25px",
    rectangle: "93px",
};
const Skeleton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The variant of the skeleton that will be displayed.
         */
        this.variant = "rectangle";
    }
    render() {
        const { variant, theme, el } = this;
        const style = !el.firstElementChild
            ? {
                height: el.style.height || DEFAULT_HEIGHTS[variant],
                width: el.style.width || (variant === "circle" ? "25px" : "260px"),
            }
            : undefined;
        return (h(Host, { key: '2f2a4aaef02912dae3994346722c17a7bb7862c4', class: {
                skeleton: true,
                "ic-skeleton-circle": variant === "circle",
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, style: style, "aria-disabled": "true" }, h("slot", { key: 'f483005261989c75b36bd880d09f855aa4152ca3' })));
    }
    get el() { return getElement(this); }
};
Skeleton.style = IcSkeletonStyle0;

export { Skeleton as ic_skeleton };

//# sourceMappingURL=ic-skeleton.entry.js.map