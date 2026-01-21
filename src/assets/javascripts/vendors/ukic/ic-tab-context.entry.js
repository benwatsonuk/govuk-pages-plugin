import { r as registerInstance, c as createEvent, h, g as getElement } from './index-a7a720e7.js';

const CONTEXT_ID_ATTR = "context-id";
const TabContext = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icTabSelect = createEvent(this, "icTabSelect", 3);
        this.newTabPanels = [];
        this.newTabs = [];
        /**
         * Determines whether tabs have to be manually activated (by pressing 'Enter' or 'Space') when they receive focus using keyboard navigation.
         */
        this.activationType = "automatic";
        /**
         * The unique context needed if using multiple tabs inside one another i.e. rendering another set of tabs inside a tab panel.
         */
        this.contextId = "default";
        /**
         * If `true`, the tabs will display as black in the light theme.
         */
        this.monochrome = false;
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /** Sets attributes to link tab-group, tabs and tab-panels */
        this.linkTabs = () => {
            this.tabs.forEach((tab, index) => {
                const tabId = `ic-tab-${index}-context-${this.contextId}`;
                const tabPanelId = `ic-tab-panel-${index}-context-${this.contextId}`;
                tab.setAttribute("id", tabId);
                tab.tabId = `ic-tab--${index}-context-${this.contextId}`;
                tab.tabPosition = index;
                tab.setAttribute("aria-controls", tabPanelId);
                this.tabPanels[index].setAttribute("id", tabPanelId);
                this.tabPanels[index].setAttribute("aria-labelledby", tabId);
                if (this.contextId) {
                    tab.setAttribute(CONTEXT_ID_ATTR, this.contextId);
                    this.tabGroup &&
                        this.tabGroup.setAttribute(CONTEXT_ID_ATTR, this.contextId);
                    this.tabPanels[index].setAttribute(CONTEXT_ID_ATTR, this.contextId);
                }
                tab.theme = this.theme;
                this.tabPanels[index].theme = this.theme;
                this.tabGroup && (this.tabGroup.theme = this.theme);
            });
        };
        /**
         * Gets tabs and tabpanels with the same context ID using querySelector to selector the children in relation to the host
         */
        this.getChildren = () => {
            var _a;
            this.tabGroup = this.el.querySelector("ic-tab-group");
            this.tabs = Array.from(((_a = this.tabGroup) === null || _a === void 0 ? void 0 : _a.querySelectorAll("ic-tab")) || []);
            this.tabPanels = Array.from(this.el.children).filter((child) => child.tagName === "IC-TAB-PANEL");
            this.enabledTabs = this.getEnabledTabs();
        };
        this.keydownHandler = (event) => {
            const isManual = this.activationType === "manual";
            const enabledTabIndex = this.enabledTabs.findIndex((tab) => tab.tabId ===
                this.tabs[isManual ? this.focusedTabIndex : this.selectedTab || 0].tabId);
            const keyboardFunction = isManual
                ? this.keyboardFocusTab
                : this.keyboardSelectTab;
            let preventDefault = true;
            switch (event.key) {
                case "Home":
                    keyboardFunction(0);
                    break;
                case "End":
                    keyboardFunction(this.enabledTabs.length - 1);
                    break;
                case "ArrowRight":
                    keyboardFunction(enabledTabIndex < this.enabledTabs.length - 1
                        ? enabledTabIndex + 1
                        : 0);
                    break;
                case "ArrowLeft":
                    keyboardFunction((enabledTabIndex > 0 ? enabledTabIndex : this.enabledTabs.length) - 1);
                    break;
                default:
                    if (isManual && (event.key === "Enter" || event.key === " ")) {
                        this.keyboardSelectTab(this.focusedTabIndex);
                    }
                    else {
                        preventDefault = false;
                    }
            }
            if (preventDefault)
                event.preventDefault();
        };
        /** Sets the tab that is selected on initial render */
        this.setInitialTab = () => {
            if (this.selectedTabIndex !== undefined) {
                this.selectedTab = this.selectedTabIndex;
                this.focusedTabIndex = this.selectedTabIndex;
            }
            else {
                const firstEnabledTabIndex = this.tabs.findIndex((tab) => tab.tabId === this.enabledTabs[0].tabId);
                this.selectedTab = firstEnabledTabIndex;
                this.focusedTabIndex = firstEnabledTabIndex;
            }
        };
        /** Passes the selected tab to the tab and tab panel components */
        this.configureTabs = () => {
            this.enabledTabs.forEach((tab) => {
                tab.selected = tab.tabPosition === this.selectedTab;
            });
            this.tabPanels.forEach((tabPanel, index) => {
                tabPanel.active = index === this.selectedTab;
            });
        };
        this.getEnabledTabs = () => Array.from(this.tabs).filter((child) => !child.disabled);
        /** Sets focus on tab and selects it */
        this.keyboardSelectTab = (enabledTabIndex) => {
            var _a, _b;
            const newIndex = this.tabs.findIndex((tab) => tab.tabId === this.enabledTabs[enabledTabIndex].tabId);
            this.enabledTabs[enabledTabIndex].focus();
            if (this.selectedTabIndex === undefined) {
                this.selectedTab = newIndex;
            }
            else {
                /* eslint-disable no-unexpected-multiline */
                this.icTabSelect.emit({
                    tabIndex: newIndex,
                    tabLabel: ((_b = (_a = this.el.querySelectorAll("ic-tab")[newIndex]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) ||
                        "",
                });
            }
        };
        /** Sets focus on tab without selecting it (for manual activation) */
        this.keyboardFocusTab = (enabledTabIndex) => {
            this.enabledTabs[enabledTabIndex].focus();
            this.focusedTabIndex = this.tabs.findIndex((tab) => tab.tabId === this.enabledTabs[enabledTabIndex].tabId);
        };
    }
    updateSelectedTab(newValue) {
        this.selectedTab = newValue;
    }
    watchMonochromeHandler() {
        this.tabs.forEach((tab, index) => {
            tab.monochrome = this.monochrome;
            this.tabPanels[index].monochrome = this.monochrome;
        });
        this.tabGroup && (this.tabGroup.monochrome = this.monochrome);
    }
    watchThemeHandler() {
        this.tabs.forEach((tab, index) => {
            tab.theme = this.theme;
            this.tabPanels[index].theme = this.theme;
        });
        this.tabGroup && (this.tabGroup.theme = this.theme);
    }
    componentDidLoad() {
        if (this.selectedTabIndex !== undefined) {
            this.selectedTab = this.selectedTabIndex;
        }
        this.getChildren();
        this.linkTabs();
        this.tabGroup &&
            this.tabGroup.addEventListener("keydown", this.keydownHandler);
        this.setInitialTab();
        this.configureTabs();
    }
    componentWillUpdate() {
        this.configureTabs();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.tabGroup) === null || _a === void 0 ? void 0 : _a.removeEventListener("keydown", this.keydownHandler);
    }
    tabClickHandler(event) {
        var _a, _b;
        if (this.selectedTabIndex === undefined &&
            event.detail.contextId === this.contextId) {
            this.selectedTab = event.detail.position;
        }
        /* eslint-disable no-unexpected-multiline */
        this.icTabSelect.emit({
            tabIndex: event.detail.position,
            tabLabel: ((_b = (_a = this.el
                .querySelectorAll("ic-tab")[event.detail.position]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "",
        });
        /* eslint-enable no-unexpected-multiline */
        event.stopImmediatePropagation();
    }
    tabCreatedHandler(ev) {
        if (this.tabs && this.tabPanels) {
            (ev.detail.setFocus ? this.newTabs : this.newTabPanels).push(ev.detail);
            if (this.newTabs.length === this.newTabPanels.length) {
                this.tabs.push(...this.newTabs);
                this.tabPanels.push(...this.newTabPanels);
                this.enabledTabs = this.getEnabledTabs();
                this.linkTabs();
                if (this.selectedTab &&
                    (!this.tabs[this.selectedTab] || !this.tabPanels[this.selectedTab]))
                    this.setInitialTab();
                this.configureTabs();
                this.newTabs = [];
                this.newTabPanels = [];
            }
        }
    }
    tabEnabledHandler() {
        this.enabledTabs = this.getEnabledTabs();
    }
    /**
     * Sets focus on the tab context.
     */
    async setFocus() {
        if (this.selectedTab != null) {
            this.tabs[this.selectedTab].setFocus();
        }
    }
    /**
     * @internal Used to set tab/tab panel IDs when a tab/tab panel has been removed
     */
    async tabRemovedHandler(hadFocus) {
        this.getChildren();
        this.linkTabs();
        if (this.selectedTab &&
            this.tabs[this.selectedTab] &&
            this.tabPanels[this.selectedTab]) {
            this.tabs[this.selectedTab].selected = true;
        }
        else {
            this.setInitialTab();
        }
        if (hadFocus && this.selectedTab != null) {
            this.tabs[this.selectedTab].setFocus();
        }
    }
    render() {
        return h("slot", { key: '10bbbe55408243a3a5665b6f079a2b88912abb61' });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "selectedTabIndex": ["updateSelectedTab"],
        "monochrome": ["watchMonochromeHandler"],
        "theme": ["watchThemeHandler"]
    }; }
};

export { TabContext as ic_tab_context };

//# sourceMappingURL=ic-tab-context.entry.js.map