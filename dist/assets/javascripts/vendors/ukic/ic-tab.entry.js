import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { r as removeDisabledFalse, i as isSlotUsed } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icTabCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--indicator-initial-color:rgba(23 89 188 / 0%);--focus-indicator:var(--ic-border-focus);display:flex;align-items:center;border-radius:0;color:var(--ic-tab-label);--ic-typography-color:var(--ic-tab-label);height:2.5rem;padding:0 var(--ic-space-md);cursor:pointer;position:relative;border-bottom:var(--ic-space-xxs) solid var(--indicator-initial-color);gap:var(--ic-space-xs);transition:all var(--ic-easing-transition-fast)}::slotted([slot=\"icon\"]){fill:var(--ic-tab-icon)}:host(.ic-tab-disabled) ::slotted([slot=\"icon\"]){fill:var(--ic-tab-icon-disabled)}:host(:focus){box-shadow:var(--focus-indicator);border-radius:var(--ic-border-radius)}:host(:focus-visible){outline:var(--ic-hc-focus-outline)}:host(:hover){background-color:var(--ic-tab-item-hover)}:host(:active){background-color:var(--ic-tab-item-pressed)}:host(.ic-tab-selected){border-bottom:var(--ic-space-xxs) solid var(--ic-tab-item)}:host(.ic-tab-disabled){pointer-events:none;color:var(--ic-architectural-300)}:host(.ic-tab-disabled) ic-typography{--ic-typography-color:var(--ic-tab-label-disabled)}:host(.ic-tab-monochrome){color:var(--ic-tab-label-monochrome)}:host(.ic-tab-monochrome.ic-tab-disabled) ic-typography{color:var(--ic-tab-label-monochrome-disabled)}:host(.ic-tab-monochrome) ::slotted([slot=\"icon\"]){fill:var(--ic-tab-icon-monochrome)}:host(.ic-tab-monochrome.ic-tab-disabled) ::slotted([slot=\"icon\"]){fill:var(--ic-tab-icon-monochrome-disabled)}:host(.ic-tab-monochrome.ic-tab-selected){border-bottom:var(--ic-space-xxs) solid var(--ic-tab-item-monochrome)}:host(.ic-tab-monochrome:hover){background-color:var(--ic-tab-item-hover-monochrome)}:host(.ic-tab-monochrome:active){background-color:var(--ic-tab-item-pressed-monochrome)}@media (prefers-reduced-motion: no-preference){:host(.ic-tab-selected.with-transition){transition:all var(--ic-easing-transition-slow),\n      border-color var(--ic-transition-duration-slow)}}.ic-tab-label{pointer-events:none;text-wrap:nowrap}::slotted(svg){fill:currentcolor}@media (forced-colors: active){:host{border-bottom:var(--ic-space-xxs) solid canvas}:host(.ic-tab-disabled){color:GrayText}:host(.ic-tab-disabled) ic-typography{color:GrayText;--ic-typography-color:GrayText}}";
const IcTabStyle0 = icTabCss;

const Tab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabClick = createEvent(this, "tabClick", 7);
        this.tabCreated = createEvent(this, "tabCreated", 7);
        this.tabEnabled = createEvent(this, "tabEnabled", 7);
        this.tabFocus = createEvent(this, "tabFocus", 7);
        this.tabRemoved = createEvent(this, "tabRemoved", 7);
        this.focusFromClick = false;
        this.isInitialRender = true;
        /** @internal The unique context needed if using multiple tabs inside one another i.e. rendering another tabs inside a tab panel. */
        this.contextId = "default";
        /**
         * If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /** @internal Determines whether black variant of the tabs should be displayed. */
        this.monochrome = false;
        /** @internal If `true`, the tab will display with a selected indicator and tabIndex will be set. */
        this.selected = false;
        /** @internal Determines whether the light or dark variant of the tabs should be displayed. */
        this.theme = "inherit";
        this.handleClick = () => {
            this.tabClick.emit({
                tabId: this.tabId,
                contextId: this.contextId,
                position: this.tabPosition,
            });
            if (this.focusFromClick) {
                this.tabFocus.emit({
                    tabId: this.tabId,
                    contextId: this.contextId,
                    position: this.tabPosition,
                });
                this.focusFromClick = false;
            }
        };
        this.handleFocus = () => {
            if (!this.focusFromClick) {
                this.focusTabId = this.tabId;
                this.tabFocus.emit({
                    tabId: this.tabId,
                    contextId: this.contextId,
                    position: this.tabPosition,
                });
            }
        };
        this.handleMouseDown = () => {
            //set flag so that focus gets handled after click
            //there is a timing issue where a long click only causes focus to happen & not the click
            //the focus does need to be a separate event though to handle focus from keyboard
            this.focusFromClick = true;
        };
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    disabledWatchHandler() {
        this.tabEnabled.emit();
    }
    connectedCallback() {
        this.tabCreated.emit(this.el);
    }
    disconnectedCallback() {
        var _a;
        (_a = document
            .querySelector(`ic-tab-context[context-id=${this.contextId}]`)) === null || _a === void 0 ? void 0 : _a.tabRemovedHandler(!!this.focusTabId);
    }
    componentWillLoad() {
        removeDisabledFalse(this.disabled, this.el);
    }
    componentDidUpdate() {
        this.isInitialRender = false;
    }
    /**
     * Sets focus on the tab.
     */
    async setFocus() {
        if (this.el) {
            this.el.focus();
        }
    }
    render() {
        const { disabled, selected, theme, monochrome, handleClick, handleFocus, handleMouseDown, } = this;
        return (h(Host, { key: '954c5dd86688230d4ebb36c8a98b9c30c1524fc9', class: {
                ["with-transition"]: !this.isInitialRender,
                ["ic-tab-selected"]: !!selected,
                ["ic-tab-disabled"]: !!disabled,
                [`ic-theme-${theme}`]: theme !== "inherit",
                ["ic-tab-monochrome"]: !!monochrome,
            }, role: "tab", "aria-selected": `${selected}`, onClick: handleClick, onFocus: handleFocus, onMouseDown: handleMouseDown, "aria-disabled": `${disabled}`, tabindex: selected ? 0 : -1 }, isSlotUsed(this.el, "icon") && h("slot", { key: '11506c4354b5dc44310df86479b02ed0638bbe32', name: "icon" }), h("ic-typography", { key: 'd466ad914e607cabb9ff47dc31b6428a081b08a7', class: "ic-tab-label", variant: "label" }, h("span", { key: '8cc33760084b7735ed7db8b222a2b0374c936f3f' }, h("slot", { key: '04bdfe11cd1eef76fad7f6e0afa7e059251ba3cc' }))), isSlotUsed(this.el, "badge") && h("slot", { key: 'a29692b7826b09874aba3ec5579dbca979cd791a', name: "badge" })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler", "disabledWatchHandler"]
    }; }
};
Tab.style = IcTabStyle0;

export { Tab as ic_tab };

//# sourceMappingURL=ic-tab.entry.js.map