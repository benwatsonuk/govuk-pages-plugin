import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { i as isSlotUsed } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icAccordionGroupCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}.label-container{--ic-typography-color:var(--ic-accordion-group-title-text);color:var(--ic-accordion-group-title-text);padding:var(--ic-space-xs);display:flex;justify-content:space-between;align-items:center}:host(.ic-accordion-group-small) .label-container{padding:var(--ic-space-xxs) var(--ic-space-xs)}:host(.ic-accordion-group-large) .label-container{padding:var(--ic-space-sm) var(--ic-space-xs)}";
const IcAccordionGroupStyle0 = icAccordionGroupCss;

let accordionGroupIds = 0;
const AccordionGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.accordionGroupId = `ic-accordion-group-${accordionGroupIds++}`;
        /**
         * The accessible button label to provide more context to the 'See all/Hide all' button for screen reader users.
         */
        this.accessibleButtonLabel = "accordions";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * If `true`, the accordion will load in an expanded state.
         */
        this.expanded = false;
        /**
         * The header for the accordion group.
         */
        this.label = "";
        /**
         * If `true`, only one accordion will open at a time.
         */
        this.singleExpansion = false;
        /**
         * The size of the accordion.
         */
        this.size = "medium";
        this.handleExpanded = () => {
            if (this.areAllAccordionsOpen) {
                this.expanded = false;
                this.accordions.forEach((acc) => {
                    acc.expanded = this.expanded;
                });
            }
            else {
                this.expanded = true;
                this.accordions.forEach((acc) => {
                    acc.expanded = this.expanded;
                });
            }
            this.setExpandedToAreAllAccordionsOpen();
        };
        this.linkAccordions = () => {
            this.accordions.forEach((accordion) => {
                accordion.setAttribute("context-id", this.accordionGroupId);
            });
        };
        this.setExpandedToAreAllAccordionsOpen = () => {
            this.areAllAccordionsOpen = this.accordions.every((accordion) => !!accordion.expanded);
        };
        this.accordionOpenBtnText = () => {
            return !this.areAllAccordionsOpen ? "See all" : "Hide all";
        };
    }
    watchThemeHandler() {
        this.accordions.forEach((acc) => {
            acc.theme = this.theme;
        });
    }
    watchExpandedHandler() {
        this.handleExpanded();
    }
    componentDidLoad() {
        const accordionDirectChildren = this.el.children;
        this.accordions = Array.from(accordionDirectChildren).filter((child) => child.tagName === "IC-ACCORDION");
        this.linkAccordions();
        this.accordions.forEach((acc) => {
            acc.theme = this.theme;
        });
        this.accordions.forEach((acc) => {
            acc.size = this.size;
        });
        if (this.expanded) {
            this.accordions.forEach((acc) => {
                acc.expanded = true;
            });
            this.setExpandedToAreAllAccordionsOpen();
        }
        else {
            this.setExpandedToAreAllAccordionsOpen();
            this.expanded = this.areAllAccordionsOpen;
        }
    }
    handleAccordionClicked(event) {
        if (!this.singleExpansion) {
            // 'See all' should be visible until all accordions are open, then 'Hide all' should be visible
            this.setExpandedToAreAllAccordionsOpen();
        }
        else {
            this.accordions.forEach((acc) => {
                if (acc.expanded && event.detail.id !== acc.id) {
                    acc.expanded = false;
                }
            });
        }
    }
    /**
     * Sets the focus on first focusable element in the accordion group. If the "See/Hide all" button is present, it will be focused.
     * Otherwise, the first accordion will be focused.
     */
    async setFocus() {
        const focusEl = this.singleExpansion
            ? this.accordions[0]
            : this.allButtonEl;
        focusEl === null || focusEl === void 0 ? void 0 : focusEl.setFocus();
    }
    render() {
        const { size, label, singleExpansion, accessibleButtonLabel, theme } = this;
        return (h(Host, { key: 'ec057d7f6e128e8429ebd9e14497a86d1eaf1abe', "context-id": this.accordionGroupId, class: {
                [`ic-accordion-group-${size}`]: true,
                ["ic-accordion-group"]: true,
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, h("div", { key: '86acdf79730dc3d2dcc95a5928e1a1bebf83412f', class: "label-container" }, h("ic-typography", { key: '5f2b615ebe87304b410b896d5b102da42ff5bcd6', variant: "h4" }, h("h3", { key: '9b33f5f102e27e4268b0edd894d8d725fd8cc5a4' }, isSlotUsed(this.el, "label") ? h("slot", { name: "label" }) : label)), !singleExpansion && (h("ic-button", { key: '1b8d8332cd10fed2eea6959f02841cb4b1586902', ref: (el) => (this.allButtonEl = el), onClick: this.handleExpanded, variant: "tertiary", "aria-label": `${this.accordionOpenBtnText()} ${accessibleButtonLabel}` }, this.accordionOpenBtnText()))), h("slot", { key: 'b93775721fd0cc7560115c6bb62824db59b2ea27' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "theme": ["watchThemeHandler"],
        "expanded": ["watchExpandedHandler"]
    }; }
};
AccordionGroup.style = IcAccordionGroupStyle0;

export { AccordionGroup as ic_accordion_group };

//# sourceMappingURL=ic-accordion-group.entry.js.map