import { r as registerInstance, f as forceUpdate, h, H as Host, g as getElement } from './index-a7a720e7.js';
import { I as IC_INHERITED_ARIA } from './constants-7960cba4.js';
import { w as inheritAttributes, o as onComponentRequiredPropUndefined, x as getElementInheritedTheme, g as getBrandForegroundAppearance, I as IcBrandForegroundEnum, i as isSlotUsed } from './helpers-dcedb279.js';

const icNavigationButtonCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;margin-right:var(--ic-space-xs);list-style:none}:host(.in-side-menu){margin-right:0}:host::part(button){height:100%;min-height:2.5rem}:host(:not(.in-side-menu)) ::part(button):focus{box-shadow:var(--ic-border-focus-light)}:host(:not(.in-side-menu).dark) ::part(button):focus{box-shadow:var(--ic-border-focus-dark)}:host(.in-side-menu) ::part(button){color:var(--ic-top-navigation-icon-active)}:host(.in-side-menu) ::part(button):hover{color:var(--ic-top-navigation-icon-hover);background-color:var(--ic-top-navigation-icon-hover-background)}:host(.in-side-menu) ::part(button):active{color:var(--ic-top-navigation-icon-pressed);background-color:var(--ic-top-navigation-icon-pressed-background)}:host(.in-side-menu) ::slotted(ic-badge){margin-left:var(--ic-space-xs)}";
const IcNavigationButtonStyle0 = icNavigationButtonCss;

const MUTABLE_ATTRIBUTES = [...IC_INHERITED_ARIA, "title"];
const NavigationButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inheritedAttributes = {};
        this.hostMutationObserver = null;
        /**
         * The display mode.
         */
        this.mode = "navbar";
        /**
         * The parent theme used to inherit external colour tokens such as focus indicator.
         */
        this.parentThemeDark = false;
        /**
         * If `true`, the user can save the linked URL instead of navigating to it.
         */
        this.download = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * Triggered when attributes of host element change
         */
        this.hostMutationCallback = (mutationList) => {
            let forceComponentUpdate = false;
            mutationList.forEach(({ attributeName }) => {
                if (attributeName) {
                    const attribute = this.el.getAttribute(attributeName);
                    if (attribute && MUTABLE_ATTRIBUTES.includes(attributeName)) {
                        this.inheritedAttributes[attributeName] = attribute;
                        forceComponentUpdate = true;
                    }
                }
            });
            if (forceComponentUpdate) {
                forceUpdate(this);
            }
        };
    }
    componentWillLoad() {
        this.inheritedAttributes = inheritAttributes(this.el, MUTABLE_ATTRIBUTES);
    }
    componentDidLoad() {
        this.updateTheme();
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Navigation Button");
        this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
        this.hostMutationObserver.observe(this.el, {
            attributes: true,
        });
    }
    componentWillRender() {
        var _a;
        (_a = this.el
            .querySelector(`[slot="icon"]`)) === null || _a === void 0 ? void 0 : _a.setAttribute("viewBox", "0 0 24 24");
        this.parentThemeChangeHandler();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.hostMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    navBarMenuOpenHandler() {
        this.mode = "menu";
        this.theme = this.el.parentElement.theme;
    }
    navBarMenuCloseHandler() {
        this.mode = "navbar";
        this.updateTheme();
    }
    brandChangeHandler({ detail: { mode } }) {
        this.updateTheme(mode);
    }
    parentThemeChangeHandler() {
        this.parentThemeDark = getElementInheritedTheme(this.el) === "dark";
    }
    /**
     * Sets focus on the native `button`.
     */
    async setFocus() {
        var _a;
        (_a = this.buttonEl) === null || _a === void 0 ? void 0 : _a.setFocus();
    }
    updateTheme(mode = getBrandForegroundAppearance()) {
        this.theme =
            mode === IcBrandForegroundEnum.Light
                ? IcBrandForegroundEnum.Dark
                : IcBrandForegroundEnum.Light;
    }
    render() {
        const { download, href, inheritedAttributes, label, mode, parentThemeDark, referrerpolicy, rel, target, theme, } = this;
        const isMenuMode = mode === "menu";
        const buttonProps = {
            download,
            href,
            referrerpolicy,
            rel,
            target,
            theme,
        };
        return (h(Host, { key: 'a277e7f5b36c9a2c7e7a02c488130727a7894a95', class: {
                "in-side-menu": isMenuMode,
                [`ic-theme-${theme}`]: theme !== "inherit",
                dark: parentThemeDark,
            } }, h("ic-button", Object.assign({ key: '50ebf0528b85ac029bd83547d12d850136c382d6', ref: (el) => (this.buttonEl = el), class: { "popout-menu-button": isMenuMode }, "aria-label": !isMenuMode ? label : null, disableTooltip: isMenuMode, fullWidth: isMenuMode, monochrome: !isMenuMode, size: isMenuMode ? "medium" : "large", variant: isMenuMode ? "tertiary" : "icon-tertiary" }, buttonProps, inheritedAttributes), isMenuMode ? label : "", h("slot", { key: '10f847ba11eec3c7e398b15807865783ede32493', slot: "left-icon", name: "icon" }), isSlotUsed(this.el, "badge") && h("slot", { key: '37a37bf5dfbcb7ef4e90b86dde4d9efec521911d', name: "badge" }))));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
};
NavigationButton.style = IcNavigationButtonStyle0;

export { NavigationButton as ic_navigation_button };

//# sourceMappingURL=ic-navigation-button.entry.js.map