import { r as registerInstance, h, H as Host } from './index-a7a720e7.js';
import { o as onComponentRequiredPropUndefined } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icTabGroupCss = ":host{display:block;margin-bottom:var(--ic-space-md);border-bottom:var(--ic-space-1px) solid var(--ic-tab-bottom-border)}:host(.ic-tab-group-monochrome){border-bottom:var(--ic-space-1px) solid\n    var(--ic-tab-bottom-border-monochrome)}:host(.ic-tab-group-inline){margin-bottom:0;border-bottom:none}.tabs-container{display:flex;flex-direction:row}.tabs-container::-webkit-scrollbar{display:none}:host ic-horizontal-scroll{--splitter-color:var(--ic-tab-divider)}:host(.ic-tab-group-monochrome) ic-horizontal-scroll{--splitter-color:var(--ic-tab-divider-monochrome)}";
const IcTabGroupStyle0 = icTabGroupCss;

const TabGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the tabs and tab panels will be positioned separately.
         */
        this.inline = false;
        /** @internal Determines whether black variant of the tabs should be displayed. */
        this.monochrome = false;
        /** @internal Determines whether the light or dark variant of the tabs should be displayed. */
        this.theme = "inherit";
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Tab Group");
    }
    render() {
        const { inline, theme, label, monochrome } = this;
        return (h(Host, { key: '6d47bc467418bb3448bc201c2903c1729d0b218c', role: "tablist", "aria-label": label, class: {
                ["ic-tab-group-inline"]: !!inline,
                [`ic-theme-${theme}`]: theme !== "inherit",
                ["ic-tab-group-monochrome"]: !!monochrome,
            } }, h("ic-horizontal-scroll", { key: '4cd7ad023ed041945dd0ea53ea30ef471c4dc87a', theme: theme, "focus-trigger": "tabFocus", monochrome: monochrome }, h("div", { key: '7b755ee071f940a648289a38cf792a86b19ee0f5', class: "tabs-container" }, h("slot", { key: 'c28ac4504330b33bc6809e8cc4bb8646eb0545e9' })))));
    }
    static get delegatesFocus() { return true; }
};
TabGroup.style = IcTabGroupStyle0;

export { TabGroup as ic_tab_group };

//# sourceMappingURL=ic-tab-group.entry.js.map