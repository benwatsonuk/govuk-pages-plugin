import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { D as DEVICE_SIZES, i as isSlotUsed, f as getCurrentDeviceSize, t as slotHasContent, h as checkResizeObserver } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icDataRowCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{position:relative;display:block}.data{display:flex;align-items:center}.text-cells{display:flex;flex-grow:1;min-width:0;--ic-typography-color:var(--ic-data-list-text-cell);color:var(--ic-data-list-text-cell)}.label{width:var(--data-row-label-width, 12.5rem);min-width:12.5rem;margin-right:var(--ic-space-md);--ic-typography-color:var(--ic-data-list-text-label);color:var(--ic-data-list-text-label)}.value{flex-grow:1}slot[name=\"value\"]::slotted(ic-text-field[readonly][hide-label]){margin-top:calc(var(--ic-space-xs) * -1)}slot[name=\"value\"]::slotted(ic-text-field[small][readonly][hide-label]){margin-top:calc(var(--ic-space-xxs) * -1)}slot[name=\"value\"]::slotted(ic-text-field[readonly][hide-label][rows]){margin-top:calc(var(--ic-space-xxs) * -1 - var(--ic-space-xxxs))}.end-component{width:-moz-fit-content;width:fit-content;margin-left:3.5rem}.divider{margin-top:var(--ic-space-md);height:var(--ic-border-width);background-color:var(--ic-data-list-keyline-cell)}:host(.ic-data-row-small) .divider{margin-top:var(--ic-space-xs)}:host(.breakpoint-medium) .label{width:10rem;min-width:10rem}:host(.breakpoint-xs) .text-cells{flex-direction:column}:host(.breakpoint-xs) .label{width:8rem;margin-bottom:var(--ic-space-xs)}:host(.breakpoint-xs) .value{max-width:95%}:host(.breakpoint-xs) .end-component{margin-left:0}@media (forced-colors: active){.divider{background-color:canvastext}}";
const IcDataRowStyle0 = icDataRowCss;

const DataRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hasEndComponent = false;
        this.resizeObserver = null;
        this.deviceSize = DEVICE_SIZES.XL;
        /**
         * The size of the data row component.
         */
        this.size = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.runResizeObserver = () => {
            this.resizeObserver = new ResizeObserver(() => {
                this.checkLabelAbove();
            });
            this.resizeObserver.observe(this.el);
        };
        this.renderCellContent = (cell) => {
            const isValue = cell === "value";
            return (h("div", { class: cell }, isSlotUsed(this.el, cell) ? (h("slot", { name: cell })) : (h("ic-typography", { variant: isValue
                    ? "body"
                    : this.listSize === "xs"
                        ? "label"
                        : "subtitle-large" }, isValue ? this.value : this.label))));
        };
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentWillLoad() {
        this.deviceSize = getCurrentDeviceSize();
        this.hasEndComponent = slotHasContent(this.el, "end-component");
        this.checkLabelAbove();
    }
    componentDidLoad() {
        checkResizeObserver(this.runResizeObserver);
        if (this.hasEndComponent)
            this.labelEndComponent();
    }
    checkLabelAbove() {
        var _a;
        const row = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".data");
        if (row) {
            const rowSize = (row === null || row === void 0 ? void 0 : row.clientWidth) + 46;
            if (rowSize) {
                this.listSize =
                    rowSize < DEVICE_SIZES.S
                        ? "xs"
                        : rowSize < DEVICE_SIZES.M
                            ? "m"
                            : "xl";
            }
        }
    }
    labelEndComponent() {
        var _a;
        (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("slot[name=end-component]").forEach((child) => child.setAttribute("aria-label", `for ${this.label} row`));
    }
    render() {
        const { el, listSize, hasEndComponent, label, renderCellContent, size, theme, value, } = this;
        return (h(Host, { key: '8a70c9ceda7aebc616eb335f08e626952c87ddf3', class: {
                ["ic-data-row-small"]: size === "small",
                ["breakpoint-medium"]: listSize === "m",
                ["breakpoint-xs"]: listSize === "xs",
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, role: "listitem" }, h("div", { key: 'b2f75779fb6392023c42d9c1f8bf58a98b431797', class: "data" }, h("div", { key: '059aa84f8a91c9a7cdaea4e118287ea460f1bcdd', class: "text-cells" }, (isSlotUsed(el, "label") || label) && renderCellContent("label"), (isSlotUsed(el, "value") || value) && renderCellContent("value")), hasEndComponent && (h("div", { key: '3bcb9b239d836434ceae03ecd35c1bdc42d73699', class: "end-component" }, h("slot", { key: '453e0c7e4d6b875ddfc319a12dc173913057b8bd', name: "end-component" })))), h("div", { key: 'f16fd733c8ffd0e8ed8e7461099a3b9b81809cb3', class: "divider" })));
    }
    get el() { return getElement(this); }
};
DataRow.style = IcDataRowStyle0;

export { DataRow as ic_data_row };

//# sourceMappingURL=ic-data-row.entry.js.map