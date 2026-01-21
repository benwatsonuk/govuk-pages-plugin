import { r as registerInstance, c as createEvent, h, g as getElement } from './index-a7a720e7.js';
import { r as removeDisabledFalse, Q as capitalize } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icPaginationItemCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}a{text-align:center}.item-container{display:flex;justify-content:center;align-items:center;width:calc(var(--ic-space-xl) + var(--ic-space-sm));height:var(--ic-space-xl);margin:var(--ic-space-xxs) var(--ic-space-xxxs);cursor:pointer;text-decoration:none}button{background:none;border:none;outline:inherit;position:relative}.ellipsis{pointer-events:none;--ic-typography-color:var(--ic-pagination-ellipsis)}.monochrome .ellipsis{--ic-typography-color:var(--ic-pagination-ellipsis-monochrome)}.item-container:focus{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast)}.page{--ic-typography-color:var(--ic-pagination-page-number)}.monochrome .page{--ic-typography-color:var(--ic-pagination-page-number-monochrome)}.simple-current{min-width:calc(var(--ic-space-xxl) + var(--ic-space-md));height:var(--ic-space-lg);cursor:default}.item-container.page:hover:not(.selected):not(:focus){border-radius:var(--ic-border-radius);background-color:var(--ic-pagination-hover)}.item-container.page:active:not(.selected):not(:focus){background-color:var(--ic-pagination-pressed)}.monochrome .item-container.page:hover:not(.selected):not(:focus){background-color:var(--ic-pagination-hover-monochrome)}.monochrome .item-container.page:active:not(.selected):not(:focus){background-color:var(--ic-pagination-pressed-monochrome)}.selected{pointer-events:none;outline:none}.selected::after{content:\"\";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-pagination-selected-banner)}.monochrome .selected::after{background-color:var(--ic-pagination-selected-banner-monochrome)}.page-selected{--ic-typography-color:var(--ic-pagination-text)}.item-container.page.light:hover:not(.selected):not(:focus){background-color:var(--ic-action-light-bg-hover)}.item-container.page.light:active:not(.selected):not(:focus){background-color:var(--ic-action-light-bg-pressed)}ic-typography.light,ic-typography.page-selected.light{--ic-typography-color:var(--ic-architectural-white)}.selected.light::after{content:\"\";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-action-monochrome)}.item-container.page.dark:hover:not(.selected):not(:focus){background-color:var(--ic-action-dark-bg-hover)}.item-container.page.dark:active:not(.selected):not(:focus){background-color:var(--ic-action-dark-bg-pressed)}ic-typography.dark{--ic-typography-color:var(--ic-color-text-primary)}.selected.dark::after{content:\"\";height:var(--ic-space-xxs);width:100%;position:absolute;bottom:0;background-color:var(--ic-action-monochrome-dark)}.disabled{--ic-typography-color:var(--ic-pagination-text-disabled);pointer-events:none;cursor:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.disabled.page ic-typography{--ic-typography-color:var(--ic-pagination-page-number-disabled)}.disabled.ellipsis{--ic-typography-color:var(--ic-pagination-ellipsis-disabled)}.monochrome .disabled.page{--ic-typography-color:var(--ic-pagination-page-number-monochrome-disabled)}.monochrome .disabled.ellipsis{--ic-typography-color:var(--ic-pagination-ellipsis-monochrome-disabled)}@media (forced-colors: active){.selected::after{background-color:Highlight}.selected.light::after{background-color:Highlight}.selected.dark::after{background-color:Highlight}.disabled{--ic-typography-color:GrayText}}";
const IcPaginationItemStyle0 = icPaginationItemCss;

const PaginationItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.paginationItemClick = createEvent(this, "paginationItemClick", 7);
        /**
         * If `true`, the pagination item will be disabled.
         */
        this.disabled = false;
        /**
         * The label for the pagination item (applicable when simple pagination is being used).
         */
        this.label = "Page";
        /**
         * If `true`, the pagination item will display as black in the light theme, and white in dark theme.
         */
        this.monochrome = false;
        /**
         * If `true`, the pagination item will be selected.
         */
        this.selected = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.handleClick = () => {
            this.paginationItemClick.emit({ page: this.page || null });
        };
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    watchLabelHandler() {
        this.capitalizedLabel = capitalize(this.label);
    }
    componentWillLoad() {
        this.watchLabelHandler();
        removeDisabledFalse(this.disabled, this.el);
    }
    render() {
        const { page, selected, type, disabled, label, capitalizedLabel, monochrome, } = this;
        return (h("a", { key: 'c067a0e35e2a92dff8d7f24d135a06a686d74a7d', class: { ["monochrome"]: !!monochrome } }, type === "ellipsis" ? (h("div", { class: {
                ["item-container"]: true,
                ["ellipsis"]: true,
                ["disabled"]: !!disabled,
            } }, h("ic-typography", { variant: "label" }, "..."))) : type === "page" ? (h("button", { disabled: disabled, onClick: this.handleClick, tabindex: selected ? "-1" : "0", role: "button", "aria-current": selected && "page", "aria-label": selected ? `${label}: ${page}` : `Go to ${label} ${page}`, class: {
                ["selected"]: !disabled && selected,
                ["disabled"]: !!disabled,
                ["item-container"]: true,
                ["page"]: type === "page",
            } }, h("ic-typography", { variant: "label", class: {
                ["page-selected"]: selected,
                ["disabled"]: !!disabled,
            } }, page))) : (h("ic-typography", { "aria-live": "polite", class: {
                [`simple-current`]: true,
                ["disabled"]: !!disabled,
            }, variant: "label" }, capitalizedLabel, " ", page))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "label": ["watchLabelHandler"]
    }; }
};
PaginationItem.style = IcPaginationItemStyle0;

export { PaginationItem as ic_pagination_item };

//# sourceMappingURL=ic-pagination-item.entry.js.map