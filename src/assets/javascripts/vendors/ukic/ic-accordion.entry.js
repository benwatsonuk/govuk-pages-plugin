import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { r as removeDisabledFalse, i as isSlotUsed } from './helpers-dcedb279.js';
import { C as Chevron } from './chevron-icon-589e3b46.js';
import './constants-7960cba4.js';

const icAccordionCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;border-bottom:var(--ic-space-1px) solid var(--ic-accordion-divider)}:host .expand-chevron{color:var(--ic-accordion-chevron)}:host(.ic-accordion-disabled) .expand-chevron{color:var(--ic-accordion-chevron-disabled)}.section-button.small{padding:var(--ic-space-xxs) var(--ic-space-xs)}.section-button.large{padding:var(--ic-space-sm) var(--ic-space-xs)}:host(:first-of-type){border-top:var(--ic-space-1px) solid var(--ic-accordion-divider)}:focus{outline:none}.section-button{background-color:transparent;display:flex;align-items:center;width:100%;padding:var(--ic-space-xs);font-weight:var(--ic-font-weight-bold);border:none}.section-header{--ic-typography-color:var(--ic-accordion-heading-text);color:var(--ic-accordion-heading-text);text-align:left;flex:1 0}:host(.ic-accordion-disabled) .section-header{--ic-typography-color:var(--ic-accordion-heading-text-disabled);color:var(--ic-accordion-heading-text-disabled)}button:hover{background-color:var(--ic-accordion-background-hover);cursor:pointer}button:active{background-color:var(--ic-accordion-background-pressed)}button:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast)}button:disabled{pointer-events:none}.icon-container{margin:0 var(--ic-space-xs) 0 0;display:flex;align-items:center;width:var(--ic-space-lg);height:var(--ic-space-lg);color:var(--ic-accordion-icon)}:host(.ic-accordion-disabled) .icon-container{color:var(--ic-accordion-icon-disabled)}::slotted(svg){width:var(--ic-space-md);height:var(--ic-space-md)}.expand-chevron{width:var(--ic-space-lg);height:var(--ic-space-lg);margin-left:calc(var(--ic-space-xl) + var(--ic-space-xs));transform:rotate(90deg);justify-self:end}.content-expanded-chevron{transform:rotate(-90deg)}.expanded-content{--ic-typography-color:var(--ic-accordion-body-text);color:var(--ic-accordion-body-text);height:0;overflow:hidden;display:flex;flex-direction:column;visibility:var(--ic-expanded-content-visibility, hidden)}.expanded-content-inner{padding:var(--ic-space-xs)}.expanded-content-opened{overflow:visible}@media (forced-colors: active){button:focus{border:var(--ic-border-hc) !important}}";
const IcAccordionStyle0 = icAccordionCss;

let accordionIds = 0;
const EXPANDED_CONTENT_OPENED_CLASS = "expanded-content-opened";
const Accordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.accordionClicked = createEvent(this, "accordionClicked", 7);
        this.accordionId = `ic-accordion-${accordionIds++}`;
        this.CONTENT_VISIBILITY_PROPERTY = "--ic-expanded-content-visibility";
        /**
         * If `true`, the accordion will be disabled.
         */
        this.disabled = false;
        /**
         * If `true`, the accordion appears expanded.
         */
        this.expanded = false;
        /**
         * The section header outlining section content.
         */
        this.heading = "";
        /**
         * The main body message of the accordion.
         */
        this.message = "";
        /**
         * The size of the accordion.
         */
        this.size = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.toggleExpanded = () => {
            this.expanded = !this.expanded;
            this.accordionClicked.emit({ id: this.accordionId });
        };
        // Set accordion animation
        this.setAccordionAnimation = (el, duration, property, delay) => {
            el.style.transitionDuration = `${duration}ms`;
            el.style.transitionProperty = property;
            el.style.transitionDelay = delay;
        };
        this.setExpandedContentStyle = (ev, expandedContent) => {
            if (ev.propertyName === "height" && expandedContent.clientHeight > 0) {
                expandedContent.classList.add(EXPANDED_CONTENT_OPENED_CLASS);
                expandedContent.style.height = "auto";
            }
        };
        this.hideExpandedContent = (ev, expandedContent) => {
            if (ev.propertyName === "height" && expandedContent.clientHeight === 0) {
                expandedContent.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY, "hidden");
            }
        };
        this.animateExpandedContent = () => {
            if (this.expandedContentEl) {
                const expandedContentEl = this.expandedContentEl;
                const elementHeight = expandedContentEl.scrollHeight;
                if (elementHeight > 0 && this.expanded) {
                    expandedContentEl.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY, "visible");
                    expandedContentEl.style.height = `${elementHeight}px`;
                    this.setAccordionAnimation(expandedContentEl, "300", "height", "ease-out");
                    expandedContentEl.addEventListener("transitionend", (e) => {
                        this.setExpandedContentStyle(e, expandedContentEl);
                    });
                }
                else if (!this.expanded) {
                    const expandedContentEl = this.expandedContentEl;
                    expandedContentEl.style.height = `${expandedContentEl.scrollHeight}px`;
                    if (expandedContentEl.scrollHeight > 0 && !this.expanded) {
                        expandedContentEl.style.height = "0";
                        this.setAccordionAnimation(expandedContentEl, "300", "height", "ease-in");
                        expandedContentEl.classList.remove(EXPANDED_CONTENT_OPENED_CLASS);
                    }
                    expandedContentEl.addEventListener("transitionend", (e) => {
                        this.hideExpandedContent(e, expandedContentEl);
                    });
                }
            }
        };
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    // Every time expanded is set via toggleExpanded or accordionGroup, animate to open or close
    handleExpandedWatch() {
        this.animateExpandedContent();
    }
    /**
     * Sets focus on accordion heading.
     */
    async setFocus() {
        var _a;
        (_a = this.accordionBtnHeading) === null || _a === void 0 ? void 0 : _a.focus();
    }
    componentWillLoad() {
        removeDisabledFalse(this.disabled, this.el);
    }
    disconnectedCallback() {
        const expandedContentEl = this.expandedContentEl;
        if (expandedContentEl) {
            expandedContentEl.removeEventListener("transitionend", (e) => this.setExpandedContentStyle(e, expandedContentEl), true);
            expandedContentEl.removeEventListener("transitionend", (e) => this.hideExpandedContent(e, expandedContentEl), true);
        }
    }
    componentDidLoad() {
        // So accordion opens by default if expanded set to true
        if (this.expanded && this.expandedContentEl) {
            this.expandedContentEl.style.height = "auto";
            this.expandedContentEl.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY, "visible");
            this.expandedContentEl.classList.add(EXPANDED_CONTENT_OPENED_CLASS);
        }
    }
    render() {
        const { size, disabled, expanded, theme } = this;
        return (h(Host, { key: '9fff7c4dc37187f9a2d03ae477c48012ff17c870', id: this.accordionId, class: {
                ["ic-accordion-disabled"]: !!disabled,
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, "aria-disabled": disabled ? "true" : "false" }, h("button", { key: '0f83275fbfc435eb5b640bd76b9a9582fcb3dca0', ref: (el) => (this.accordionBtnHeading = el), id: `${this.accordionId}-button`, disabled: disabled, tabindex: disabled ? -1 : 0, class: {
                [`${size}`]: true,
                ["section-button"]: true,
                ["section-button-open"]: !!expanded && !disabled,
            }, "aria-expanded": `${expanded}`, "aria-controls": "expanded-content-area", onClick: this.toggleExpanded }, isSlotUsed(this.el, "icon") && (h("div", { key: '41c88884df97917d026fbecb500c35b393045c7d', class: "icon-container" }, h("slot", { key: 'ddc6894db8ab81e27c971350e261d99b51759756', name: "icon" }))), h("ic-typography", { key: 'e0ca73dbe5a2d46dbe2f893d4405e3d82fd2a862', variant: "subtitle-large", class: "section-header" }, isSlotUsed(this.el, "heading") ? (h("slot", { name: "heading" })) : (this.heading)), h("span", { key: 'a95fad35c3e3f38415da026a93112079f74de4d7', class: {
                ["expand-chevron"]: true,
                ["content-expanded-chevron"]: !!expanded && !disabled,
            }, "aria-hidden": "true", innerHTML: Chevron })), h("div", { key: '65b6322d5dde677528891631ecd9b95189948771', class: {
                ["expanded-content"]: true,
            }, "aria-labelledby": `${this.accordionId}-button`, role: "region", "aria-hidden": `${!expanded}`, id: "expanded-content-area", ref: (el) => (this.expandedContentEl = el) }, h("div", { key: 'de9ec00d55757be20c097082817529b652200263', class: "expanded-content-inner" }, this.message ? (h("ic-typography", { variant: "body" }, this.message)) : (h("slot", null))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"],
        "expanded": ["handleExpandedWatch"]
    }; }
};
Accordion.style = IcAccordionStyle0;

export { Accordion as ic_accordion };

//# sourceMappingURL=ic-accordion.entry.js.map