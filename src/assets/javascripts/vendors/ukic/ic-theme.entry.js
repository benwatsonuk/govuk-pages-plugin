import { r as registerInstance, c as createEvent, h, H as Host } from './index-a7a720e7.js';
import { M as getBrandColorBrightness, d as convertToRGBA, g as getBrandForegroundAppearance } from './helpers-dcedb279.js';
import { B as BLACK_MIN_COLOR_BRIGHTNESS, W as WHITE_MAX_COLOR_BRIGHTNESS } from './constants-7960cba4.js';

const Theme = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.brandChange = createEvent(this, "brandChange", 7);
        this.icThemeChange = createEvent(this, "icThemeChange", 7);
        this.themeClass = "";
        /**
         * The brand colour. Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
         */
        this.brandColor = null;
        /**
         * The theme mode. Can be "dark", "light", or "system". "system" will use the device or browser settings.
         */
        this.theme = "light";
        this.darkModeChangeHandler = () => {
            if (this.theme === "system") {
                this.themeClass =
                    window.matchMedia &&
                        window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "ic-theme-dark"
                        : "ic-theme-light";
            }
            else {
                this.themeClass = `ic-theme-${this.theme}`;
            }
            this.icThemeChange.emit(this.theme);
        };
        this.checkBrandColorContrast = () => {
            if (getBrandColorBrightness() < BLACK_MIN_COLOR_BRIGHTNESS &&
                getBrandColorBrightness() > WHITE_MAX_COLOR_BRIGHTNESS) {
                console.warn(`The brand colour does not provide enough contrast with either of the ICDS black or white foreground colours. Consider choosing a colour with a different brightness to achieve sufficient colour contrast for good visibility. See https://www.w3.org/TR/AERT/#color-contrast for more information about colour contrast.`);
            }
        };
        this.setBrandColor = () => {
            const colorRGBA = this.brandColor ? convertToRGBA(this.brandColor) : null;
            if (colorRGBA) {
                const { r, g, b, a } = colorRGBA;
                const { style } = document.documentElement;
                style.setProperty("--ic-brand-color-primary-r", `${r}`);
                style.setProperty("--ic-brand-color-primary-g", `${g}`);
                style.setProperty("--ic-brand-color-primary-b", `${b}`);
                style.setProperty("--ic-brand-color-primary-a", `${a}`);
                this.checkBrandColorContrast();
                this.brandChange.emit({
                    mode: getBrandForegroundAppearance(),
                    color: colorRGBA,
                });
            }
        };
    }
    watchBrandColorPropHandler() {
        this.setBrandColor();
    }
    watchThemePropHandler() {
        this.darkModeChangeHandler();
    }
    componentWillLoad() {
        this.darkModeChangeHandler();
        this.setBrandColor();
        window.matchMedia &&
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", this.darkModeChangeHandler);
    }
    render() {
        const { themeClass } = this;
        return (h(Host, { key: '603b695aae6f29ef4f3d89d4e1995221b3324753', class: themeClass }, h("slot", { key: '0b4c3bd3f4b078775ff13677feb3f0fbc080d810' })));
    }
    static get watchers() { return {
        "brandColor": ["watchBrandColorPropHandler"],
        "theme": ["watchThemePropHandler"]
    }; }
};

export { Theme as ic_theme };

//# sourceMappingURL=ic-theme.entry.js.map