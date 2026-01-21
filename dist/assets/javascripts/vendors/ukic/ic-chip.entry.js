import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { d as convertToRGBA, g as getBrandForegroundAppearance, r as removeDisabledFalse, o as onComponentRequiredPropUndefined, a as renderDynamicChildSlots, i as isSlotUsed, b as isElInAGGrid } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const dismissIcon = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;

const icChipCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block;max-width:100%;vertical-align:middle}:host(.ic-chip-dismissed){display:none}.chip{--chip-bg-color:transparent;--chip-hover-bg:var(--ic-chip-action-hover);--chip-pressed-bg:var(--ic-chip-action-pressed);display:flex;padding:calc(var(--ic-space-xxs) - var(--ic-space-1px)) var(--ic-space-xxs);font-size:0.875rem;border-radius:var(--ic-space-md);text-align:left;text-decoration:none;position:relative;background-color:var(--chip-bg-color);border:var(--ic-border-width) solid transparent;justify-content:space-between}@media (prefers-reduced-motion: no-preference){.chip{transition:var(--ic-easing-transition-fast)}}.chip.small{padding:var(--ic-space-1px) var(--ic-space-xxxs);border-radius:calc(var(--ic-space-md) - var(--ic-space-xxxs))}.chip.large{padding:calc(var(--ic-space-xs) - var(--ic-space-1px)) var(--ic-space-xs);border-radius:calc(var(--ic-space-md) + var(--ic-space-xxs))}.label{padding:0 var(--ic-space-xs)}.chip:focus-within{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline);z-index:1}ic-tooltip:focus-within{z-index:1}.filled{--chip-bg-color:var(\n    --chip-custom-color,\n    var(--ic-chip-background-filled-default)\n  );--ic-typography-color:var(\n    --chip-custom-foreground-color,\n    var(--ic-chip-label)\n  );color:var(--chip-custom-foreground-color, var(--ic-chip-label))}.filled.disabled{--chip-bg-color:var(--ic-chip-background-filled-inactive)}:host(.ic-chip-dark-text){--chip-custom-foreground-color:var(--ic-architectural-black)}:host(.ic-chip-light-text){--chip-custom-foreground-color:var(--ic-architectural-white)}:host(.ic-chip-dark-text) .chip.filled.hovered:not(:focus-within){--chip-hover-bg:var(--ic-action-dark-bg-hover)}:host(.ic-chip-dark-text) .chip.filled:focus-within{--chip-pressed-bg:var(--ic-action-dark-bg-pressed)}:host(.ic-chip-light-text) .chip.filled.hovered:not(:focus-within){--chip-hover-bg:var(--ic-action-light-bg-hover)}:host(.ic-chip-light-text) .chip.filled:focus-within{--chip-pressed-bg:var(--ic-action-light-bg-pressed)}.outlined{color:var(--ic-chip-outline-label);border-color:var(--chip-custom-color, var(--ic-chip-outline));padding:calc(var(--ic-space-xxs));--ic-typography-color:var(--ic-chip-outline-label)}.outlined.disabled{border:var(--ic-border-disabled);border-color:var(--ic-chip-outline-inactive)}.chip.disabled ic-typography{--ic-typography-color:var(--ic-chip-label-inactive)}.dismiss-icon{border:none;border-radius:50%;padding:0;color:currentcolor;background:none;cursor:pointer;margin:var(--ic-space-xxxs);height:calc(var(--ic-space-lg) - var(--ic-space-xxs));width:calc(var(--ic-space-lg) - var(--ic-space-xxs))}.dismiss-icon:focus{outline:var(--ic-hc-focus-outline)}.dismiss-icon[disabled]{pointer-events:none;color:var(--ic-chip-icon-inactive)}.icon{padding:var(--ic-space-xxxs);box-sizing:border-box}.icon,ic-tooltip{width:var(--ic-space-lg);height:var(--ic-space-lg)}.chip.disabled path,.chip.disabled ::slotted(svg){fill:var(--ic-chip-icon-inactive)}.outlined.non-transparent{background-color:var(--ic-chip-outline-background)}:host .chip.hovered:not(:focus-within){background-image:linear-gradient(var(--chip-hover-bg) 0 0)}:host .chip:focus-within{background-image:linear-gradient(var(--chip-pressed-bg) 0 0)}.sr-only{position:absolute;left:-9999px}.sr-only:dir(rtl){right:-9999px}@media (forced-colors: active){.chip{border:var(--ic-border-hc)}.chip.disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:GrayText}.chip.disabled ic-typography{--ic-typography-color:GrayText}.chip.disabled path,.chip.disabled ::slotted(svg){fill:GrayText}.chip:focus-within{outline:none;border-color:Highlight}}";
const IcChipStyle0 = icChipCss;

const Chip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icDismiss = createEvent(this, "icDismiss", 7);
        this.foregroundColor = null;
        this.hovered = false;
        this.visible = true;
        /**
         * If `true`, the chip will appear disabled.
         */
        this.disabled = false;
        /**
         * If `true`, the chip will have a close button at the end to dismiss it.
         */
        this.dismissible = false;
        /**
         * The text in the dismiss button tooltip and aria label. Makes the user aware of the action resulting from clicking the 'Dismiss chip' button.
         */
        this.dismissLabel = "Dismiss";
        /**
         * The size of the chip.
         */
        this.size = "medium";
        /**
         * Sets the chip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
         * Setting the "customColor" prop will override this.
         */
        this.theme = "inherit";
        /**
         * If `true`, the outlined variant of chip will have a transparent background rather than the theme defined color.
         */
        this.transparentBackground = true;
        /**
         * The emphasis of the chip.
         */
        this.variant = "filled";
        this.dismissAction = () => {
            this.icDismiss.emit();
        };
        this.mouseEnterHandler = () => {
            this.hovered = true;
        };
        this.mouseLeaveHandler = () => {
            this.hovered = false;
        };
    }
    customColorHandler() {
        const colorRGBA = this.customColor && convertToRGBA(this.customColor);
        if (!colorRGBA) {
            this.foregroundColor = null;
            return;
        }
        const { r, g, b, a } = colorRGBA;
        this.foregroundColor = getBrandForegroundAppearance((r * 299 + g * 587 + b * 114) / 1000);
        this.el.setAttribute("style", `--chip-custom-color: rgba(${r}, ${g}, ${b}, ${a});`);
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    disconnectedCallback() {
        var _a;
        (_a = this.hostMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentWillLoad() {
        removeDisabledFalse(this.disabled, this.el);
        this.customColorHandler();
    }
    componentDidLoad() {
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Chip");
        this.hostMutationObserver = new MutationObserver((mutationList) => renderDynamicChildSlots(mutationList, ["icon", "badge"], this));
        this.hostMutationObserver.observe(this.el, {
            childList: true,
        });
    }
    handleClick() {
        this.visible = !this.visible;
    }
    /**
     * Sets focus on the chip.
     */
    async setFocus() {
        var _a;
        (_a = this.buttonEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    render() {
        const { label, variant, size, dismissible, visible, disabled, hovered, theme, foregroundColor, dismissLabel, transparentBackground, } = this;
        const ariaLabel = `${label} chip`;
        return (h(Host, { key: '91df6058439a8c6dbd74de3d46153e4d0c54d623', class: {
                "ic-chip-dismissed": !visible,
                [`ic-theme-${theme}`]: theme !== "inherit",
                [`ic-chip-${foregroundColor}-text`]: variant === "filled" && !!foregroundColor,
            } }, visible && (h("div", { key: 'e7fe4dfe8ebedf808512a29aceef28a6700cd233', class: {
                chip: true,
                [`${variant}`]: true,
                [`${size}`]: true,
                disabled,
                dismissible,
                hovered,
                "non-transparent": variant === "outlined" && !transparentBackground,
            } }, isSlotUsed(this.el, "icon") && (h("div", { key: '81b38c990e638413596f6e5e8041f68eef20e064', class: "icon" }, h("slot", { key: '3a1fda2665ac0aea65df3bfaa94552f5e6fa2e1e', name: "icon" }))), h("ic-typography", { key: 'a496fa5e7be6ec073cb1b2225b7a1e1f79f94f3f', variant: "label", "apply-vertical-margins": false, class: { label: true, "in-ag-grid": isElInAGGrid(this.el) } }, h("span", { key: '942471f0fd86b350166c14433c40d6d912a52b17' }, label)), dismissible && (h("ic-tooltip", { key: 'c9ea0b5045a625a7b42ae71b22bc9737b05501ee', label: dismissLabel, target: "dismiss-icon", class: { "tooltip-disabled": disabled } }, h("button", { key: '7fb04f03ac698a002fea17de94980623b33502dd', id: "dismiss-icon", class: "dismiss-icon", ref: (el) => (this.buttonEl = el), "aria-label": `${dismissLabel} ${ariaLabel}`, disabled: disabled, tabindex: disabled ? -1 : 0, onClick: this.dismissAction, onMouseEnter: this.mouseEnterHandler, onMouseLeave: this.mouseLeaveHandler, innerHTML: dismissIcon }))), isSlotUsed(this.el, "badge") && h("slot", { key: '99b017ad25c78367d25411312b47aa1f73d8f682', name: "badge" }))), dismissible && (h("div", { key: 'b847f0255a3aaca7f1f24e2de1e939e0a6518c2f', class: "sr-only", "aria-live": "polite" }, !visible ? `Dismissed ${ariaLabel}` : ""))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "customColor": ["customColorHandler"],
        "disabled": ["watchDisabledHandler"]
    }; }
};
Chip.style = IcChipStyle0;

export { Chip as ic_chip };

//# sourceMappingURL=ic-chip.entry.js.map