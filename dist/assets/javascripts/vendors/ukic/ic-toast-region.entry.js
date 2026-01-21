import { r as registerInstance, h, g as getElement } from './index-a7a720e7.js';

const ToastRegion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pendingVisibility = [];
        this.showToast = (toast) => {
            const visibleToasts = Array.from(document.querySelectorAll("ic-toast")).filter((el) => window.getComputedStyle(el).display !== "none");
            if (visibleToasts.indexOf(toast) === -1 && visibleToasts.length <= 0) {
                toast.setVisible().then((res) => (this.previouslyFocused = res));
            }
            if (visibleToasts.length > 0)
                this.pendingVisibility.push(toast);
        };
    }
    watchOpenToastHandler(newValue) {
        if (this.openToast !== undefined) {
            this.showToast(newValue);
            this.openToast = undefined;
        }
    }
    componentDidLoad() {
        if (this.openToast) {
            this.showToast(this.openToast);
            this.openToast = undefined;
        }
    }
    handleDismissedToast() {
        var _a;
        if (this.pendingVisibility.length > 0) {
            this.pendingVisibility[0]
                .setVisible()
                .then((res) => (this.previouslyFocused = res));
            this.pendingVisibility.shift();
        }
        else {
            if (this.previouslyFocused && "setFocus" in this.previouslyFocused) {
                this.previouslyFocused.setFocus();
            }
            else
                (_a = this.previouslyFocused) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }
    render() {
        return h("slot", { key: 'fbb8173202304d09e434a726e85fad986cb79a9f' });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "openToast": ["watchOpenToastHandler"]
    }; }
};

export { ToastRegion as ic_toast_region };

//# sourceMappingURL=ic-toast-region.entry.js.map