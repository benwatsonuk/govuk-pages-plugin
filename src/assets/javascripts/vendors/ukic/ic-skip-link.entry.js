import { r as registerInstance, h, H as Host, g as getElement } from './index-a7a720e7.js';

const icSkipLinkCss = ":host{display:block}ic-link{position:absolute;left:-9999px}ic-link:focus{z-index:var(--ic-z-index-skip-link);left:var(--ic-space-sm);padding:var(--ic-space-sm);box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);width:-moz-fit-content;width:fit-content}.display-top:focus{top:var(--ic-skip-link-position-top, var(--ic-space-sm))}.inline:focus{position:static;display:inline-block;margin:var(--ic-space-xs) 0}.full-width:focus{display:flex;right:var(--ic-space-sm);width:auto}.inline.full-width:focus{justify-content:start}.show-background{background:var(--ic-skip-link-background)}";
const IcSkipLinkStyle0 = icSkipLinkCss;

const SkipLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the skip link will fill the width of the page.
         */
        this.fullWidth = false;
        /**
         * If `true`, the skip link will appear inline with surrounding page content when focused.
         */
        this.inline = false;
        /**
         * The label displayed when the skip link is focused.
         */
        this.label = "Skip to main content";
        /**
         * If `true`, the skip link will display as black in the light theme, and white in the dark theme.
         */
        this.monochrome = false;
        /**
         * Sets the theme color to the dark or light theme color. `inherit` will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * If `true`, the background will be hidden.
         */
        this.transparentBackground = false;
    }
    /**
     * Sets focus on the element.
     */
    async setFocus() {
        if (this.linkEl)
            this.linkEl.setFocus();
    }
    render() {
        const { fullWidth, inline, label, monochrome, target, theme, transparentBackground, } = this;
        return (h(Host, { key: '354579354254bfa9b0a1c314dd57226f2e1e4208', class: {
                [`ic-theme-${theme}`]: theme !== "inherit",
            } }, h("ic-link", { key: '22276d114cc1d15a68eb675f6680b7388a76974a', class: {
                "display-top": !inline,
                "full-width": !!fullWidth,
                "show-background": !transparentBackground,
                inline: !!inline,
            }, href: `#${target}`, monochrome: monochrome, theme: theme, ref: (el) => (this.linkEl = el) }, label)));
    }
    get el() { return getElement(this); }
};
SkipLink.style = IcSkipLinkStyle0;

export { SkipLink as ic_skip_link };

//# sourceMappingURL=ic-skip-link.entry.js.map