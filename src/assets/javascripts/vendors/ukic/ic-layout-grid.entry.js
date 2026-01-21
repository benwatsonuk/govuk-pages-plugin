import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';

const icLayoutGridCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:grid;width:-moz-fit-content;width:fit-content;grid-template-columns:repeat(\n    var(--ic-layout-grid-columns),\n    var(--ic-layout-grid-col-width, 1fr)\n  );grid-template-rows:repeat(var(--ic-layout-grid-rows), 1fr);gap:var(--ic-layout-grid-spacing);padding-top:var(--ic-layout-grid-margin);padding-bottom:var(--ic-layout-grid-margin)}:host ::slotted(*){grid-column:span var(--ic-layout-grid-col-span, 1);grid-row:span var(--ic-layout-grid-row-span, 1)}:host(.ic-layout-grid-aligned-center){margin-left:auto;margin-right:auto;padding-left:var(--ic-layout-grid-margin);padding-right:var(--ic-layout-grid-margin)}:host(.ic-layout-grid-aligned-left){margin-left:var(--ic-layout-grid-margin);margin-right:auto;padding-right:var(--ic-layout-grid-margin)}:host(.ic-layout-grid-aligned-full-width){margin-left:var(--ic-layout-grid-margin);margin-right:var(--ic-layout-grid-margin);width:calc(100% - (var(--ic-layout-grid-margin) * 2))}:host(.ic-layout-grid-no-vertical-padding){padding-top:0;padding-bottom:0}@media only screen and (max-width: 576px){:host{--ic-layout-grid-margin:var(--ic-space-xs);--ic-layout-grid-columns:var(--ic-layout-grid-columns-xs)}:host ::slotted(*){--ic-layout-grid-col-span:var(--ic-layout-grid-col-span-xs)}}@media only screen and (min-width: 577px){:host{--ic-layout-grid-margin:var(--ic-space-md);--ic-layout-grid-columns:var(--ic-layout-grid-columns-sm)}:host ::slotted(*){--ic-layout-grid-col-span:var(--ic-layout-grid-col-span-sm)}}@media only screen and (min-width: 769px){:host{--ic-layout-grid-margin:var(--ic-space-md);--ic-layout-grid-columns:var(--ic-layout-grid-columns-md)}:host ::slotted(*){--ic-layout-grid-col-span:var(--ic-layout-grid-col-span-md)}}@media only screen and (min-width: 993px){:host{--ic-layout-grid-margin:var(--ic-space-md);--ic-layout-grid-columns:var(--ic-layout-grid-columns-lg)}:host ::slotted(*){--ic-layout-grid-col-span:var(--ic-layout-grid-col-span-lg)}}@media only screen and (min-width: 1201px){:host{--ic-layout-grid-margin:var(--ic-space-lg);--ic-layout-grid-columns:var(--ic-layout-grid-columns-xl)}:host ::slotted(*){--ic-layout-grid-col-span:var(--ic-layout-grid-col-span-xl)}}";
const IcLayoutGridStyle0 = icLayoutGridCss;

const LayoutGrid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.COL_WIDTH_CSS_PROP = "--ic-layout-grid-col-width";
        /**
         * The alignment of the grid.
         */
        this.aligned = "left";
        /**
         * The default column span for grid items.
         */
        this.defaultColSpan = 1;
        /**
         * The default column width for grid items.
         * This is used when the grid type is set to "fixed".
         */
        this.defaultColWidth = "64px";
        /**
         * The default row span for grid items.
         */
        this.defaultRowSpan = 1;
        /**
         * If `true`, the standard vertical padding from the grid will be removed.
         */
        this.fullHeight = false;
        /**
         * The space between grid items, in multiples of the base spacing unit (`var(--ic-space-xs)`).
         */
        this.gridSpacing = 2;
        /**
         * The number of rows in the grid.
         */
        this.rows = 1;
        /**
         * The layout type of the grid.
         */
        this.type = "fixed";
        this.getColumns = () => {
            if (typeof this.columns === "number") {
                this.el.style.setProperty("--ic-layout-grid-columns", this.columns.toString());
            }
            else if (typeof this.columns === "object") {
                Object.entries(this.columns).forEach(([breakpoint, value]) => {
                    if (value !== undefined) {
                        this.el.style.setProperty(`--ic-layout-grid-columns-${breakpoint}`, value.toString());
                    }
                });
            }
        };
        this.getColSpan = () => {
            if (this.defaultColSpan !== undefined) {
                if (typeof this.defaultColSpan === "number") {
                    Array.from(this.el.children).forEach((child) => {
                        child.style.setProperty("--ic-layout-grid-col-span", `${this.defaultColSpan}`);
                    });
                }
                else if (typeof this.defaultColSpan === "object") {
                    Object.entries(this.defaultColSpan).forEach(([breakpoint, value]) => {
                        if (value !== undefined) {
                            this.el.style.setProperty(`--ic-layout-grid-col-span-${breakpoint}`, value.toString());
                        }
                    });
                }
            }
        };
        this.getGridSpacing = () => {
            this.el.style.setProperty("--ic-layout-grid-spacing", `calc(var(--ic-space-xs) * ${this.gridSpacing})`);
        };
    }
    watchColumns() {
        this.getColumns();
    }
    watchDefaultColSpan() {
        this.getColSpan();
    }
    watchDefaultColWidth(newValue) {
        if (this.type === "fixed") {
            this.el.style.setProperty(this.COL_WIDTH_CSS_PROP, newValue);
        }
    }
    watchDefaultRowSpan(newValue) {
        this.el.style.setProperty("--ic-layout-grid-row-span", `${newValue}`);
    }
    watchGridSpacing() {
        this.getGridSpacing();
    }
    watchRows(newValue) {
        this.el.style.setProperty("--ic-layout-grid-rows", `${newValue}`);
    }
    watchType(newValue) {
        this.getColumns();
        if (newValue === "fixed" && this.defaultColWidth) {
            this.el.style.setProperty(this.COL_WIDTH_CSS_PROP, this.defaultColWidth);
        }
        else {
            this.el.style.removeProperty(this.COL_WIDTH_CSS_PROP);
        }
    }
    componentWillLoad() {
        if (this.columns === undefined) {
            if (this.type === "fixed") {
                this.columns = 12;
            }
            else if (this.type === "fluid") {
                this.columns = {
                    xs: 2,
                    sm: 4,
                    md: 8,
                    lg: 12,
                    xl: 12,
                };
            }
        }
        this.getColumns();
        this.getColSpan();
        this.getGridSpacing();
        if (this.type === "fixed" && this.defaultColWidth) {
            this.el.style.setProperty(this.COL_WIDTH_CSS_PROP, this.defaultColWidth);
        }
        if (this.rows) {
            this.el.style.setProperty("--ic-layout-grid-rows", `${this.rows}`);
            this.el.style.setProperty("--ic-layout-grid-row-span", `${this.defaultRowSpan}`);
        }
    }
    render() {
        const { aligned, fullHeight } = this;
        return (h(Host, { key: 'fa862e7110426cb032982c8743b7ad3024f06f9a', class: {
                [`ic-layout-grid-aligned-${aligned}`]: true,
                ["ic-layout-grid-no-vertical-padding"]: !!fullHeight,
            } }, h("slot", { key: '716c4137c338797b4ce17c9dd946f8902064606f' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "columns": ["watchColumns"],
        "defaultColSpan": ["watchDefaultColSpan"],
        "defaultColWidth": ["watchDefaultColWidth"],
        "defaultRowSpan": ["watchDefaultRowSpan"],
        "gridSpacing": ["watchGridSpacing"],
        "rows": ["watchRows"],
        "type": ["watchType"]
    }; }
};
LayoutGrid.style = IcLayoutGridStyle0;

export { LayoutGrid as ic_layout_grid };

//# sourceMappingURL=ic-layout-grid.entry.js.map