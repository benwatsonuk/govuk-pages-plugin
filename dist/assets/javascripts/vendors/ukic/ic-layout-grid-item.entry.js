import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';

const icLayoutGridItemCss = ":host{grid-column:var(--ic-grid-item-col-start, 1) / span\n    var(--ic-grid-item-col-span, var(--ic-layout-grid-col-span, 1)) !important;grid-row:var(--ic-grid-item-row-start, 1) / span\n    var(--ic-grid-item-row-span, var(--ic-layout-grid-row-span, 1)) !important}@media only screen and (max-width: 576px){:host(.ic-layout-grid-hide-in-mobile){display:none}}";
const IcLayoutGridItemStyle0 = icLayoutGridItemCss;

const LayoutGridItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The number of columns the grid item should span.
         */
        this.colSpan = 1;
        /**
         * The column the grid item should start at.
         */
        this.colStart = 1;
        /**
         * If `true`, the grid item will be hidden on smaller screens.
         */
        this.hideInMobileMode = false;
        /**
         * The number of rows the grid item should span.
         */
        this.rowSpan = 1;
        /**
         * The row the grid item should start at.
         */
        this.rowStart = 1;
    }
    watchColSpan(newValue) {
        this.el.style.setProperty("--ic-grid-item-col-span", `${newValue}`);
    }
    watchColStart(newValue) {
        this.el.style.setProperty("--ic-grid-item-col-start", `${newValue}`);
    }
    watchRowSpan(newValue) {
        this.el.style.setProperty("--ic-grid-item-row-span", `${newValue}`);
    }
    watchRowStart(newValue) {
        this.el.style.setProperty("--ic-grid-item-row-start", `${newValue}`);
    }
    componentWillLoad() {
        this.el.style.setProperty("--ic-grid-item-col-start", `${this.colStart}`);
        this.el.style.setProperty("--ic-grid-item-col-span", `${this.colSpan}`);
        this.el.style.setProperty("--ic-grid-item-row-start", `${this.rowStart}`);
        this.el.style.setProperty("--ic-grid-item-row-span", `${this.rowSpan}`);
    }
    render() {
        const { hideInMobileMode } = this;
        return (h(Host, { key: '9e96a528f70c414a5728a7fd0773d0adb4063020', class: {
                "ic-layout-grid-hide-in-mobile": !!hideInMobileMode,
            } }, h("slot", { key: '43b2b4891f8b1241fad2fb707016cd927632bdfd' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "colSpan": ["watchColSpan"],
        "colStart": ["watchColStart"],
        "rowSpan": ["watchRowSpan"],
        "rowStart": ["watchRowStart"]
    }; }
};
LayoutGridItem.style = IcLayoutGridItemStyle0;

export { LayoutGridItem as ic_layout_grid_item };

//# sourceMappingURL=ic-layout-grid-item.entry.js.map