import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { h as checkResizeObserver, b as isElInAGGrid } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icTypographyCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative;color:var(--ic-typography-color, var(--ic-color-text-primary))}:host(.ic-typography-vertical-margins-h1){margin:0 0 var(--ic-space-xl)}:host(.ic-typography-vertical-margins-h2){margin:var(--ic-space-xxl) 0 var(--ic-space-lg)}:host(.ic-typography-vertical-margins-h3){margin:var(--ic-space-xl) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-h4){margin:var(--ic-space-lg) 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-subtitle-large),:host(.ic-typography-vertical-margins-subtitle-small),:host(.ic-typography-vertical-margins-body),:host(.ic-typography-vertical-margins-code-large),:host(.ic-typography-vertical-margins-code-small),:host(.ic-typography-vertical-margins-code-extra-small){margin:0 0 var(--ic-space-md)}:host(.ic-typography-vertical-margins-caption),:host(.ic-typography-vertical-margins-caption-uppercase){margin:0 0 var(--ic-space-xs)}:host(.ic-typography-vertical-margins-h2:first-child),:host(.ic-typography-vertical-margins-h3:first-child),:host(.ic-typography-vertical-margins-h4:first-child){margin-top:0}:host(.ic-typography-h1){font:var(--ic-font-h1) !important}:host(.ic-typography-h2){font:var(--ic-font-h2);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-h3){font:var(--ic-font-h3)}:host(.ic-typography-h4){font:var(--ic-font-h4);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-large){font:var(--ic-font-subtitle-large);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-subtitle-small){font:var(--ic-font-subtitle-small);letter-spacing:var(--ic-font-letter-spacing-0pt0015)}:host(.ic-typography-body){font:var(--ic-font-body);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-caption){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-caption-uppercase){font:var(--ic-font-caption);letter-spacing:var(--ic-font-letter-spacing-0pt0025);text-transform:uppercase}:host(.ic-typography-label){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-label-uppercase){font:var(--ic-font-label);letter-spacing:var(--ic-font-letter-spacing-0pt025);text-transform:uppercase}:host(.ic-typography-code-large){font:var(--ic-font-code-large);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-code-small){font:var(--ic-font-code-small);letter-spacing:var(--ic-font-letter-spacing-0pt005)}:host(.ic-typography-code-extra-small){font:var(--ic-font-code-extra-small);letter-spacing:var(--ic-font-letter-spacing-0pt025)}:host(.ic-typography-badge){font:var(--ic-font-badge);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-badge-small){font:var(--ic-font-badge-small);letter-spacing:var(--ic-font-letter-spacing-0pt0025)}:host(.ic-typography-no-wrap){white-space:nowrap}:host ::slotted(h1),:host ::slotted(h2),:host ::slotted(h3),:host ::slotted(h4),:host ::slotted(h5),:host ::slotted(h6),:host ::slotted(p),:host ::slotted(label){font:inherit;letter-spacing:inherit}.trunc-wrapper{display:-webkit-box;-webkit-box-orient:vertical;line-clamp:var(--truncation-max-lines, initial);-webkit-line-clamp:var(--truncation-max-lines, initial);overflow:hidden;padding-right:var(--ellipsis-padding-right, 0)}.trunc-btn{border:none;background:none;padding:0;color:var(--ic-color-text-primary);text-decoration:underline;font-weight:var(--ic-font-weight-bold);transition:var(--ic-easing-transition-fast)}.trunc-btn:hover,.trunc-btn.focus{outline:none;border-bottom:0.25rem solid !important;margin-bottom:-0.25rem !important;text-decoration:none;cursor:pointer}:host(.ic-typography-strikethrough){text-decoration:line-through}:host(.ic-typography-underline){text-decoration:underline}:host(.ic-typography-underline.ic-typography-strikethrough){text-decoration:line-through underline}:host(.ic-typography-italic){font-style:italic !important}:host(.ic-typography-bold){font-weight:var(--ic-font-weight-bold)}:host(.ic-theme-dark),:host(.ic-theme-light){--ic-typography-color:var(--ic-color-text-primary)}:host(.in-ag-grid),:host(.in-ag-grid) ::slotted(*){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports (text-underline-offset: 25%){.trunc-btn:hover,.trunc-btn.focus{text-decoration-line:underline;text-decoration-thickness:25%;text-underline-offset:25%;border-bottom:0 !important;margin-bottom:0 !important}}@media (prefers-color-scheme: dark) and (forced-colors: none){:host,.trunc-btn:not(ic-tooltip){color:var(--ic-typography-color)}}";
const IcTypographyStyle0 = icTypographyCss;

const Typography = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.typographyTruncationExpandToggle = createEvent(this, "typographyTruncationExpandToggle", 7);
        this.focusBtnFromKeyboard = true;
        this.inAGGrid = false;
        this.lastMarkerTop = 0;
        this.lastWidth = 0;
        this.resizeObserver = null;
        this.truncatedHeight = 0;
        this.truncated = false;
        this.truncButtonFocussed = false;
        /**
         * If `true`, appropriate top and bottom margins will be applied to the typography.
         */
        this.applyVerticalMargins = false;
        /**
         * If `true`, the typography will have a bold font weight.
         * Note: This will have no impact on variants that already use an equivalent or higher font weight (h1, h2, and subtitle-large).
         */
        this.bold = false;
        /**
         * If `true`, the typography will have an italic font style.
         */
        this.italic = false;
        /**
         * If `true`, the typography will have a line through it.
         */
        this.strikethrough = false;
        /**
         * Sets the text color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * If `true`, the typography will have a line under it.
         */
        this.underline = false;
        /**
         * The ICDS typography style to use.
         */
        this.variant = "body";
        this.expanded = false;
        this.toggleExpanded = (ev) => {
            ev.stopPropagation();
            this.expanded = !this.expanded;
            this.typographyTruncationExpandToggle.emit({
                expanded: this.expanded,
                typographyEl: this.el,
            });
        };
        this.checkMarkerPosition = (elTop, markerTop) => {
            if (markerTop - elTop < this.truncatedHeight) {
                this.truncated = false;
                this.expanded = false;
            }
            else {
                this.truncated = true;
            }
        };
        this.getElementTop = (el) => {
            return el.getClientRects && el.getClientRects()[0]
                ? el.getClientRects()[0].top
                : 0;
        };
        this.runResizeObserver = () => {
            if (this.truncWrapperEl) {
                this.resizeObserver = new ResizeObserver(() => {
                    clearTimeout(this.resizeInterval);
                    this.resizeInterval = window.setTimeout(this.resizeObserverCallback, 50);
                });
                this.resizeObserver.observe(this.truncWrapperEl);
            }
        };
        this.resizeObserverCallback = () => {
            if (this.lastWidth === this.el.clientWidth) {
                return;
            }
            if (this.truncatedHeight === 0) {
                this.checkMaxLines(this.el.clientHeight);
                return;
            }
            const markerTop = this.getElementTop(this.marker);
            if (markerTop === this.lastMarkerTop) {
                return;
            }
            this.checkMarkerPosition(this.getElementTop(this.el), markerTop);
            this.lastMarkerTop = markerTop;
            this.lastWidth = this.el.clientWidth;
        };
        this.truncButtonFocus = () => {
            if (this.focusBtnFromKeyboard) {
                this.truncButtonFocussed = true;
            }
        };
        this.truncButtonBlur = () => {
            this.focusBtnFromKeyboard = true;
            this.truncButtonFocussed = false;
        };
        this.truncButtonFocusFromMouse = () => {
            this.focusBtnFromKeyboard = false;
        };
    }
    watchExpandedHandler() {
        this.el.setAttribute("style", `--truncation-max-lines: ${this.expanded ? "initial" : this.maxLines}`);
    }
    disconnectedCallback() {
        if (this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
        }
    }
    /**
     * @internal This is used by data table to remove all truncation in certain events
     */
    async resetTruncation() {
        if (this.truncated) {
            this.truncated = false;
            this.maxLines = 0;
            this.el.removeAttribute("max-lines");
            this.expanded = false;
            this.el.removeAttribute("style");
        }
    }
    componentDidLoad() {
        var _a, _b;
        if ((this.variant === "body" ||
            ((_b = (_a = this.el.getRootNode()) === null || _a === void 0 ? void 0 : _a.host) === null || _b === void 0 ? void 0 : _b.tagName) ===
                "IC-TOOLTIP") &&
            this.maxLines &&
            this.maxLines > 0) {
            const marker = document.createElement("span");
            marker.style.visibility = "hidden";
            this.el.appendChild(marker);
            this.marker = marker;
            this.lastWidth = this.el.clientWidth;
            this.checkMaxLines(this.el.clientHeight);
            checkResizeObserver(this.runResizeObserver);
        }
    }
    componentWillRender() {
        if (isElInAGGrid(this.el)) {
            this.inAGGrid = true;
        }
    }
    /**
     * @internal This checks if the number of lines of text exceeds the maxLines prop. If so, set the line clamp CSS to the max lines
     * @param height - text container height
     */
    async checkMaxLines(height) {
        //24 is the height of a single line
        const numLines = Math.floor(height / 24);
        if (this.maxLines && numLines > this.maxLines) {
            this.el.setAttribute("style", `--truncation-max-lines: ${this.maxLines}`);
            this.truncatedHeight = this.el.clientHeight;
            this.truncated = true;
        }
    }
    /**
     * @internal This method makes it possible to set the expanded status of truncated text outside of ic-typography component
     */
    async setShowHideExpanded(expanded) {
        this.expanded = expanded;
    }
    render() {
        var _a, _b;
        const { variant, applyVerticalMargins, maxLines, truncated, expanded, strikethrough, underline, italic, bold, theme, } = this;
        return (h(Host, { key: 'af405939b9fe0b1d4410d862343471b849e4fdd7', class: {
                [`ic-typography-${variant}`]: true,
                [`ic-typography-vertical-margins-${variant}`]: !!applyVerticalMargins,
                ["ic-typography-bold"]: !!bold,
                ["ic-typography-italic"]: !!italic,
                ["ic-typography-strikethrough"]: !!strikethrough,
                ["ic-typography-underline"]: !!underline,
                ["in-ag-grid"]: this.inAGGrid,
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, (variant === "body" ||
            ((_b = (_a = this.el.getRootNode()) === null || _a === void 0 ? void 0 : _a.host) === null || _b === void 0 ? void 0 : _b.tagName) ===
                "IC-TOOLTIP") &&
            maxLines &&
            maxLines > 0 ? (h("div", { class: "trunc-wrapper", ref: (el) => (this.truncWrapperEl = el) }, h("slot", null))) : (h("slot", null)), variant === "body" && maxLines && maxLines > 0 && truncated && (h("button", { key: 'ca78a64f9853cbf2d26df99f3c13970ce94de37d', class: { "trunc-btn": true, focus: this.truncButtonFocussed }, onFocus: this.truncButtonFocus, onBlur: this.truncButtonBlur, onMouseDown: this.truncButtonFocusFromMouse, onClick: this.toggleExpanded }, expanded ? "See less" : "See more"))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "expanded": ["watchExpandedHandler"]
    }; }
};
Typography.style = IcTypographyStyle0;

export { Typography as ic_typography };

//# sourceMappingURL=ic-typography.entry.js.map