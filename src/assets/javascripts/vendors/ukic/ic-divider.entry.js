import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { g as getBrandForegroundAppearance, e as isPropDefined, t as slotHasContent, L as isEmptyString } from './helpers-dcedb279.js';
import './constants-7960cba4.js';

const icDividerCss = ".ic-divider-horizontal.sc-ic-divider-h{display:flex;width:var(--ic-divider-horizontal-width, 100%);align-items:center;-moz-column-gap:var(--ic-space-xxs);column-gap:var(--ic-space-xxs)}hr.sc-ic-divider{padding:0;margin:0;border:none;border-bottom:solid var(--ic-space-1px) var(--ic-divider-background);width:inherit}.ic-divider-horizontal.sc-ic-divider-h::before,.ic-divider-horizontal.sc-ic-divider-h::after{border-left:none !important}.ic-divider-horizontal.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-horizontal.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::after{content:\"\";border:none;width:100%}.ic-divider-vertical.sc-ic-divider-h{display:flex;flex-direction:column;height:var(--ic-divider-vertical-height, inherit);width:-moz-max-content;width:max-content;align-items:center;-moz-column-gap:var(--ic-space-xxs);column-gap:var(--ic-space-xxs);border:none}.ic-divider-vertical.sc-ic-divider-h div.vertical-divider.sc-ic-divider{display:flex;height:inherit}.ic-divider-vertical.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-vertical.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::after{content:\"\";height:100%}hr.sc-ic-divider,.ic-divider-horizontal.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-horizontal.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::after{border-bottom:solid var(--ic-space-1px) var(--ic-divider-background)}.ic-divider-monochrome.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-monochrome.ic-divider-horizontal.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-monochrome.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-monochrome.ic-divider-horizontal.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-monochrome.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-color:var(--ic-divider-background-monochrome)}.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-vertical.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-vertical.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::after{border-left:solid var(--ic-space-1px) var(--ic-divider-background)}.ic-divider-monochrome.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-monochrome.ic-divider-vertical.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-monochrome.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-monochrome.ic-divider-vertical.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-monochrome.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::after{border-left-color:var(--ic-divider-background-monochrome)}.ic-side-navigation-keyline.ic-theme-dark.sc-ic-divider-h{--ic-side-navigation-keyline:var(--ic-state-layer-lighten-20)}.ic-side-navigation-keyline.ic-theme-light.sc-ic-divider-h{--ic-side-navigation-keyline:var(--ic-state-layer-darken-20)}.ic-side-navigation-keyline.ic-theme-dark.sc-ic-divider-h hr.sc-ic-divider,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-horizontal.ic-divider-label-right.sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-horizontal.ic-divider-label-left.sc-ic-divider-h::after,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-color:var(--ic-side-navigation-keyline)}.ic-side-navigation-keyline.ic-theme-dark.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-vertical.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-vertical.ic-divider-label-top.sc-ic-divider-h::after,.ic-side-navigation-keyline.ic-theme-dark.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::after{border-left-color:var(--ic-side-navigation-keyline)}.ic-side-navigation-keyline.ic-theme-light.sc-ic-divider-h hr.sc-ic-divider,.ic-side-navigation-keyline.ic-theme-light.ic-divider-horizontal.ic-divider-label-right.sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-light.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-light.ic-divider-horizontal.ic-divider-label-left.sc-ic-divider-h::after,.ic-side-navigation-keyline.ic-theme-light.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-color:var(--ic-side-navigation-keyline)}.ic-side-navigation-keyline.ic-theme-light.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-side-navigation-keyline.ic-theme-light.ic-divider-vertical.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-light.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::before,.ic-side-navigation-keyline.ic-theme-light.ic-divider-vertical.ic-divider-label-top.sc-ic-divider-h::after,.ic-side-navigation-keyline.ic-theme-light.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::after{border-left-color:var(--ic-divider-background-monochrome)}.ic-divider-very-thick.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-very-thick.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-very-thick.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-very-thick.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-very-thick.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-width:var(--ic-space-xs)}.ic-divider-very-thick.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-very-thick.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-very-thick.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-very-thick.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-very-thick.ic-divider-label-center.sc-ic-divider-h::after{border-left-width:var(--ic-space-xs)}.ic-divider-thick.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-thick.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-thick.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-thick.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-thick.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-width:var(--ic-space-xxs)}.ic-divider-thick.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-thick.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-thick.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-thick.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-thick.ic-divider-label-center.sc-ic-divider-h::after{border-left-width:var(--ic-space-xxs)}.ic-divider-medium.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-medium.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-medium.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-medium.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-medium.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-width:var(--ic-space-xxxs)}.ic-divider-medium.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-medium.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-medium.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-medium.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-medium.ic-divider-label-center.sc-ic-divider-h::after{border-left-width:var(--ic-space-xxxs)}.ic-divider-thin.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-thin.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-thin.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-thin.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-thin.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-width:var(--ic-space-1px)}.ic-divider-thin.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-thin.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-thin.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-thin.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-thin.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::after{border-left-width:var(--ic-space-1px)}.ic-divider-dashed.sc-ic-divider-h hr.sc-ic-divider,.ic-divider-dashed.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-dashed.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-dashed.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-dashed.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-style:dashed}.ic-divider-dashed.sc-ic-divider-h .vertical-divider.sc-ic-divider,.ic-divider-dashed.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-dashed.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-dashed.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-dashed.ic-divider-label-center.sc-ic-divider-h::after{border-left-style:dashed}.sc-ic-divider-h .ic-divider-label.sc-ic-divider{text-wrap:wrap;text-align:left;width:-moz-max-content;width:max-content;max-width:var(--ic-divider-label-width, max(20rem, 60%))}.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h .ic-divider-label.sc-ic-divider{text-align:center}.ic-divider-vertical.sc-ic-divider-h .ic-divider-label.sc-ic-divider{text-align:center;max-width:var(--ic-divider-label-width, 20rem)}.sc-ic-divider-h .ic-divider-label-container.sc-ic-divider{width:-moz-max-content;width:max-content;max-width:var(--ic-divider-label-width, max(20rem, 60%))}.ic-divider-vertical.sc-ic-divider-h .ic-divider-label-container.sc-ic-divider{max-width:var(--ic-divider-label-width, 20rem)}.sc-ic-divider-h .ic-divider-label.sc-ic-divider p.sc-ic-divider{width:-moz-max-content;width:max-content;max-width:100%}.sc-ic-divider-h .ic-divider-label.sc-ic-divider,.sc-ic-divider-h.sc-ic-divider-s>*,.sc-ic-divider-h .sc-ic-divider-s>*{color:var(--ic-divider-label)}.ic-divider-monochrome.sc-ic-divider-h .ic-divider-label.sc-ic-divider,.sc-ic-divider-h.ic-divider-monochrome.sc-ic-divider-s>*,.sc-ic-divider-h.ic-divider-monochrome .sc-ic-divider-s>*{color:var(--ic-divider-label-monochrome)}@media (forced-colors: active){hr.sc-ic-divider,.ic-divider-horizontal.ic-divider-label-right.sc-ic-divider-h::before,.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-horizontal.ic-divider-label-left.sc-ic-divider-h::after,.ic-divider-horizontal.ic-divider-label-center.sc-ic-divider-h::after{border-bottom-color:transparent}.sc-ic-divider-h div.vertical-divider.sc-ic-divider,.ic-divider-vertical.ic-divider-label-bottom.sc-ic-divider-h::before,.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::before,.ic-divider-vertical.ic-divider-label-top.sc-ic-divider-h::after,.ic-divider-vertical.ic-divider-label-center.sc-ic-divider-h::after{border-left-color:transparent}}";
const IcDividerStyle0 = icDividerCss;

const Divider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.foregroundColor = getBrandForegroundAppearance();
        /**
         * The line style of the divider.
         */
        this.borderStyle = "solid";
        /**
         * The position the label is placed on the divider. `Left` and `right` placement is only applicable when orientation is set to `horizontal`. `Top` and `bottom` placement is only applicable when orientation is set to `vertical`. `Center` placement is applicable for both orientations.
         */
        this.labelPlacement = "center";
        /** If `true`, the divider will be displayed in a grey colour. */
        this.monochrome = false;
        /**
         * The orientation of the divider.
         */
        this.orientation = "horizontal";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The thickness of the divider.
         */
        this.weight = "thin";
    }
    brandChangeHandler(ev) {
        this.foregroundColor = ev.detail.mode;
    }
    updateMonochromeState() {
        var _a;
        const parentEl = this.el.parentElement;
        if (parentEl) {
            const isBottomSideNav = parentEl.classList.contains("bottom-side-nav");
            const isBottomWrapper = (_a = parentEl.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains("bottom-wrapper");
            if (parentEl.tagName === "IC-SIDE-NAVIGATION" ||
                (isBottomSideNav && isBottomWrapper)) {
                this.el.classList.add("ic-side-navigation-keyline");
                if (this.foregroundColor === "light") {
                    this.theme = "dark";
                }
                else {
                    this.theme = "light";
                }
            }
        }
    }
    componentWillRender() {
        this.updateMonochromeState();
    }
    render() {
        const { borderStyle, label, labelPlacement, monochrome, orientation, weight, } = this;
        const { theme } = this;
        const invalidPropCombination = (placement) => {
            console.error(`${placement.charAt(0).toUpperCase() + placement.slice(1)} label placement is not applicable for a ${orientation} ic-divider (web-components) / IcDivider (react)`);
        };
        if (((labelPlacement === "left" || labelPlacement === "right") &&
            orientation === "vertical") ||
            ((labelPlacement === "top" || labelPlacement === "bottom") &&
                orientation === "horizontal")) {
            invalidPropCombination(labelPlacement);
        }
        const getTypographyVariant = (weight) => {
            switch (weight) {
                case "very-thick":
                    return "h4";
                case "thick":
                    return "subtitle-large";
                default:
                    return "label";
            }
        };
        const renderLabel = () => {
            if (slotHasContent(this.el, "label")) {
                return (h("div", { class: "ic-divider-label-container" }, h("slot", { name: "label" })));
            }
            else if (isPropDefined(label)) {
                return (h("ic-typography", { class: "ic-divider-label", variant: getTypographyVariant(weight) }, h("p", null, label)));
            }
            return null;
        };
        return (h(Host, Object.assign({ class: {
                [`ic-theme-${theme}`]: theme !== "inherit",
                [`ic-divider-monochrome`]: !!monochrome,
                [`ic-divider-${orientation}`]: true,
                [`ic-divider-${weight}`]: true,
                [`ic-divider-${borderStyle}`]: true,
                [`ic-divider-label-${labelPlacement}`]: slotHasContent(this.el, "label") || !isEmptyString(label),
            } }, ((orientation === "vertical" ||
            (!!renderLabel() && !!isPropDefined(labelPlacement))) && {
            "aria-orientation": orientation,
            role: "separator",
        })), orientation === "horizontal" &&
            (!renderLabel() || !isPropDefined(labelPlacement)) && h("hr", null), !!isPropDefined(labelPlacement) && !!renderLabel() && renderLabel(), orientation === "vertical" &&
            (!renderLabel() || !isPropDefined(labelPlacement)) && (h("div", { class: "vertical-divider" }))));
    }
    get el() { return getElement(this); }
};
Divider.style = IcDividerStyle0;

export { Divider as ic_divider };

//# sourceMappingURL=ic-divider.entry.js.map