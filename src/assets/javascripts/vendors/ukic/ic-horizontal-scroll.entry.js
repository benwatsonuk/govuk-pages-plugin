import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { R as elementOverflowsX, u as getSlotElements, h as checkResizeObserver, I as IcBrandForegroundEnum } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const LeftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.0875 6.175L11.9125 5L6.91251 10L11.9125 15L13.0875 13.825L9.27084 10L13.0875 6.175Z"/>
</svg>`;

const RightArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.08748 5L6.91248 6.175L10.7291 10L6.91248 13.825L8.08748 15L13.0875 10L8.08748 5Z"/>
</svg>`;

const icHorizontalScrollCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--border-bottom-color:var(--ic-architectural-300);--splitter-color:var(--ic-architectural-100);display:flex;max-width:100%}:host(.ic-horizontal-scroll-light){--splitter-color:var(--ic-color-keyline-lighten)}:host(.ic-horizontal-scroll-light) ic-button>svg{color:var(--ic-color-text-action-monochrome-dark)}:host(.ic-horizontal-scroll-dark){--splitter-color:var(--ic-color-keyline-darken)}:host(.ic-horizontal-scroll-dark) ic-button>svg{color:var(--ic-color-text-action-monochrome-light)}::slotted(*){overflow-x:scroll;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;margin:calc(var(--ic-space-xs) * -1) !important;padding:var(--ic-space-xs) !important}:host(.ic-horizontal-scroll-visible) ::slotted(*){margin:calc(var(--ic-space-xs) * -1) 0 !important;padding:var(--ic-space-xs) !important}.tabs-container::-webkit-scrollbar{display:none}.scroll-container-left,.scroll-container-right{display:flex}.scroll-container-left{margin-left:var(--ic-space-xxs)}.scroll-container-right{margin-right:var(--ic-space-xxs)}.hidden{display:none}.scroll-arrow{margin:var(--ic-space-xxs) 0}.disabled .ic-tooltip-container{display:none !important}.scroll-splitter-left,.scroll-splitter-right{display:flex;height:var(--ic-space-lg);width:var(--ic-space-1px);margin-top:var(--ic-space-xs);border-radius:var(--ic-space-1px);background-color:var(--splitter-color)}.scroll-splitter-left{margin-left:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.scroll-splitter-right{margin-right:calc(var(--ic-space-xxs) - var(--ic-space-1px))}.disabled .scroll-splitter-left,.disabled .scroll-splitter-right{background-color:transparent}:host(.ic-horizontal-scroll-dark) .disabled ic-button>svg,:host(.ic-horizontal-scroll-light) .disabled ic-button>svg{color:var(--splitter-color) !important}";
const IcHorizontalScrollStyle0 = icHorizontalScrollCss;

const SCROLL_DELAY_MS = 200;
const HorizontalScroll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonStateSet = false;
        this.firstItemVisible = true;
        this.itemOverflow = false;
        this.lastItemVisible = false;
        /**
         * The appearance of the horizontal scroll, e.g. dark, light or the default.
         */
        this.appearance = "default";
        /** @internal Determines whether black variant of the tabs should be displayed. */
        this.monochrome = false;
        /**
         * @internal  Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * @internal The name of the event that triggers focus handler logic.
         */
        this.focusTrigger = "focus";
        this.focusHandler = (event) => {
            this.itemFocusHandler(Array.from(this.items).indexOf(event.target));
        };
        this.resizeObserverCallback = () => {
            if (this.el.clientWidth >= this.itemsContainerEl.scrollWidth) {
                this.itemOverflow = false;
            }
            else {
                this.itemOverflow = elementOverflowsX(this.itemsContainerEl);
            }
            if (this.itemOverflow) {
                this.lastItemVisible =
                    this.itemsContainerEl.offsetWidth + this.itemsContainerEl.scrollLeft >=
                        this.itemsContainerEl.scrollWidth;
            }
        };
        this.runResizeObserver = () => {
            this.resizeObserver = new ResizeObserver(() => {
                this.resizeObserverCallback();
            });
            this.resizeObserver.observe(this.itemsContainerEl);
        };
        this.scrollLeft = () => {
            this.scrollItemIntoView(this.getCurrentLeftItem() - 1);
        };
        this.scrollRight = () => {
            this.scrollItemIntoView(this.getCurrentLeftItem() + 1);
        };
        this.longScrollRight = () => {
            this.scrollRight();
            this.scrollDelay = window.setTimeout(this.longScrollRight, SCROLL_DELAY_MS);
        };
        this.longScrollLeft = () => {
            this.scrollLeft();
            this.scrollDelay = window.setTimeout(this.longScrollLeft, SCROLL_DELAY_MS);
        };
        this.leftArrowMouseDownHandler = (e) => {
            e.preventDefault();
            this.scrollDelay = window.setTimeout(this.longScrollLeft, SCROLL_DELAY_MS);
        };
        this.rightArrowMouseDownHandler = (e) => {
            e.preventDefault();
            this.scrollDelay = window.setTimeout(this.longScrollRight, SCROLL_DELAY_MS);
        };
        this.arrowMouseUpHandler = () => {
            window.clearTimeout(this.scrollDelay);
        };
        this.getCurrentLeftItem = () => {
            const index = this.itemOffsets.findIndex((el) => el > Math.round(this.itemsContainerEl.scrollLeft));
            return index < 0 ? 0 : index;
        };
        this.scrollHandler = () => {
            window.clearTimeout(this.isScrolling);
            // Set a timeout to run after scrolling ends
            this.isScrolling = window.setTimeout(this.scrollStopped, 50);
        };
        this.scrollStopped = () => {
            // If scrollItemIntoView has been called, the button states will already be set
            // Can't just handle it here as it causes strange jumping behaviour in positioning
            const scrollLeft = Math.round(this.itemsContainerEl.scrollLeft);
            if (this.buttonStateSet === false) {
                this.firstItemVisible = scrollLeft === 0;
                this.lastItemVisible =
                    this.itemsContainerEl.offsetWidth + scrollLeft >=
                        this.itemsContainerEl.scrollWidth;
            }
            this.buttonStateSet = false;
        };
    }
    componentWillLoad() {
        this.itemsContainerEl = this.el.children[0];
        this.itemsContainerEl.addEventListener("scroll", this.scrollHandler);
        this.items = getSlotElements(this.itemsContainerEl);
        this.items.forEach((item) => {
            if (item.addEventListener) {
                item.addEventListener(this.focusTrigger, this.focusHandler);
            }
        });
    }
    componentDidLoad() {
        var _a;
        let runningTotal = 0;
        this.itemOffsets = this.items.map((item) => {
            runningTotal += item.offsetWidth;
            return runningTotal;
        });
        checkResizeObserver(this.runResizeObserver);
        // Add event listener to scroll containers as mouse events are not fired on disabled elements (ic-button's <button>)
        // 'mouseleave' needed in case the user moves their mouse while holding the arrow buttons
        // - 'mouseup' otherwise not detected and scrolling not stopped
        const scrollArrows = Array.from(((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("div")) || []);
        ["mouseup", "mouseleave"].forEach((event) => {
            scrollArrows.forEach((arrow) => arrow.addEventListener(event, this.arrowMouseUpHandler));
        });
    }
    disconnectedCallback() {
        var _a, _b, _c;
        if (this.resizeObserver !== undefined) {
            this.resizeObserver.disconnect();
        }
        const scrollArrows = Array.from(((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("div")) || []);
        ["mouseup", "mouseleave"].forEach((event) => {
            scrollArrows.forEach((arrow) => arrow.removeEventListener(event, this.arrowMouseUpHandler));
        });
        (_b = this.items) === null || _b === void 0 ? void 0 : _b.forEach((item) => {
            if (item.removeEventListener) {
                item.removeEventListener(this.focusTrigger, this.focusHandler);
            }
        });
        (_c = this.itemsContainerEl) === null || _c === void 0 ? void 0 : _c.removeEventListener("scroll", this.scrollHandler);
    }
    /**
     * @internal if side scrolling enabled, scrolls the specified item into view.
     */
    async scrollItemIntoView(itemPosition) {
        this.firstItemVisible = itemPosition <= 0;
        const newScrollPos = itemPosition <= 0 ? 0 : this.itemOffsets[itemPosition - 1];
        this.lastItemVisible =
            this.itemsContainerEl.offsetWidth + newScrollPos >=
                this.itemsContainerEl.scrollWidth;
        this.buttonStateSet = true;
        this.itemsContainerEl.scrollLeft = newScrollPos;
    }
    itemFocusHandler(itemPosition) {
        if (this.itemOverflow) {
            this.scrollItemIntoView(itemPosition);
        }
    }
    render() {
        const { firstItemVisible, lastItemVisible, itemOverflow } = this;
        return (h(Host, { key: '5c313665e71e0abc91a19f204ccf08d7b017f46b', class: {
                ["ic-horizontal-scroll-visible"]: itemOverflow,
                ["ic-horizontal-scroll-dark"]: this.appearance === IcBrandForegroundEnum.Dark,
                ["ic-horizontal-scroll-light"]: this.appearance === IcBrandForegroundEnum.Light,
                [`ic-theme-${this.theme}`]: this.theme !== "inherit",
            } }, h("div", { key: '7a65d56af26a6bfe660c3e923beaf7b512f77de8', "aria-hidden": "true", class: {
                ["scroll-container-left"]: true,
                ["hidden"]: !itemOverflow,
                ["disabled"]: firstItemVisible,
            }, role: "tab" }, h("ic-button", { key: '0203d6acdde7444d03038b3ec86f3e318615030d', class: "scroll-arrow", variant: "icon-tertiary", "aria-label": "Scroll left", theme: this.theme === "light" || this.theme === "inherit"
                ? "dark"
                : "light", monochrome: this.monochrome, innerHTML: LeftArrow, disabled: firstItemVisible, tabindex: "-1", onClick: this.scrollLeft, onMouseDown: this.leftArrowMouseDownHandler }), h("span", { key: 'dffb5fee1c17005205216d0901141317e2dc4aa6', class: "scroll-splitter-left" })), h("slot", { key: 'f637c15f3020e1572a61179c2132dece11d0699a' }), h("div", { key: 'c563d5ca6d07a66f2111bea5aebe7d36ae481770', "aria-hidden": "true", class: {
                ["scroll-container-right"]: true,
                ["hidden"]: !itemOverflow,
                ["disabled"]: lastItemVisible,
            }, role: "tab" }, h("span", { key: 'd8afe9aaf2304d13909815aeb8e60ac4f8952f7f', class: "scroll-splitter-right" }), h("ic-button", { key: '4f3be747e736a50705793742b0a1e9fab44d56db', class: "scroll-arrow", variant: "icon-tertiary", "aria-label": "Scroll right", theme: this.theme === "light" || this.theme === "inherit"
                ? "dark"
                : "light", monochrome: this.monochrome, innerHTML: RightArrow, disabled: lastItemVisible, tabindex: "-1", onClick: this.scrollRight, onMouseDown: this.rightArrowMouseDownHandler }))));
    }
    get el() { return getElement(this); }
};
HorizontalScroll.style = IcHorizontalScrollStyle0;

export { HorizontalScroll as ic_horizontal_scroll };

//# sourceMappingURL=ic-horizontal-scroll.entry.js.map