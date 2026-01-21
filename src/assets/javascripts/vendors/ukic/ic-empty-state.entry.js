import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { i as isSlotUsed, o as onComponentRequiredPropUndefined, a as renderDynamicChildSlots } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icEmptyStateCss = ":host{gap:var(--ic-space-xs);padding:var(--ic-space-xs)}:host,.action-area{display:flex;flex-direction:column}.action-area{gap:var(--ic-space-md)}:host ::slotted(svg),:host ::slotted(img){border-radius:var(--ic-space-xxs)}:host(.ic-empty-state-right),:host(.ic-empty-state-right) .action-area{align-items:flex-end;text-align:right}:host(.ic-empty-state-center),:host(.ic-empty-state-center) .action-area{align-items:center;text-align:center}:host(.image-medium) ::slotted(svg),:host(.image-medium) ::slotted(img){height:calc(3 * var(--ic-space-lg)) !important;width:calc(3 * var(--ic-space-lg)) !important}:host(.image-small) ::slotted(svg),:host(.image-small) ::slotted(img){height:var(--ic-space-xxl) !important;width:var(--ic-space-xxl) !important}:host(.image-large) ::slotted(svg),:host(.image-large) ::slotted(img){height:calc(4 * var(--ic-space-xl)) !important;width:calc(4 * var(--ic-space-xl)) !important}::slotted([slot=\"heading\"]),.empty-state-heading{--ic-typography-color:var(--ic-empty-state-title)}::slotted([slot=\"subheading\"]),.empty-state-subheading{--ic-typography-color:var(--ic-empty-state-subtitle)}::slotted([slot=\"body\"]),.empty-state-body{--ic-typography-color:var(--ic-empty-state-body)}";
const IcEmptyStateStyle0 = icEmptyStateCss;

const EmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hostMutationObserver = null;
        /**
         * The alignment of the empty state container.
         */
        this.aligned = "left";
        /**
         * The size of the image or icon used in the image slot.
         */
        this.imageSize = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
    }
    disconnectedCallback() {
        var _a;
        (_a = this.hostMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentDidLoad() {
        !isSlotUsed(this.el, "heading") &&
            onComponentRequiredPropUndefined([{ prop: this.heading, propName: "heading" }], "Empty State");
        this.hostMutationObserver = new MutationObserver((mutationList) => renderDynamicChildSlots(mutationList, ["image", "actions"], this));
        this.hostMutationObserver.observe(this.el, {
            childList: true,
        });
    }
    render() {
        const { aligned, body, maxLines, heading, imageSize, subheading, theme } = this;
        return (h(Host, { key: '4bb35d1c3476b88cc58e952b1b8785e4425d5339', class: {
                [`ic-empty-state-${aligned}`]: true,
                [`image-${imageSize}`]: isSlotUsed(this.el, "image"),
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, isSlotUsed(this.el, "image") && h("slot", { key: '9e87ed9f746d37f57505a75c62b10279b31ef54e', name: "image" }), h("div", { key: '4f94dc11d843660d3fecd976fa71f9c57644c89b' }, h("slot", { key: 'be23c55a8dc832904fbae342890d2a3d2d74ae85', name: "heading" }, h("ic-typography", { key: '52bf3dca695fecff3e5d650bd81db23d09665258', variant: "h4", class: "empty-state-heading" }, heading)), h("slot", { key: '7ed10d78475ac8b9c3f5a084a1294ad1be180f15', name: "subheading" }, h("ic-typography", { key: '5772d056578a64a951178c3c3026b36d4b316496', variant: "subtitle-small", class: "empty-state-subheading" }, subheading)), h("slot", { key: '14a8815b51a06521642921f09fa8346483522e84', name: "body" }, h("ic-typography", { key: 'bca780cc2275e81d4e25bae45f5065f6fab3bcd5', maxLines: maxLines, class: "empty-state-body" }, body))), isSlotUsed(this.el, "actions") && (h("div", { key: 'd6c0f61a358c1d0c86c4da922ed0504ffdc8228f', class: "action-area" }, h("slot", { key: 'ac150a34e883376bfee43a6edbeb8992c3bc3f96', name: "actions" })))));
    }
    get el() { return getElement(this); }
};
EmptyState.style = IcEmptyStateStyle0;

export { EmptyState as ic_empty_state };

//# sourceMappingURL=ic-empty-state.entry.js.map