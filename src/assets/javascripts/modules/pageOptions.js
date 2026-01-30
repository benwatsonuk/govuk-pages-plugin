/* ============================================================
   Actions
   ============================================================ */

const ACTIONS = {
  toggleElement: (checked, cfg) => {
    const el = document.getElementById(cfg.actionTarget);
    if (!el) return;
    el.classList.toggle("govuk-visually-hidden", !checked);
  }
};

/* ============================================================
   Switch configuration
   ============================================================ */

const SWITCH_HANDLERS = {
  showPageOptions: {
    targets: ".govuk-pages-plugin__page-options",
    className: "govuk-visually-hidden",
    inverse: true,
    onToggleOn: exampleFunc,
    onToggleOff: exampleFunc
  },

  showList: {
    targets: ".govuk-pages-plugin__flows__flow",
    className: "govuk-pages-plugin__flows__flow--list",
    hideControls: ["showFullWidth", "showInline"],
    hideOnChecked: true
  },

  showInline: {
    targets: ".govuk-pages-plugin__flows__flow",
    className: "govuk-pages-plugin__flows__flow--inline",
    hideControls: ["showFullWidth"],
    hideOnChecked: false
  },

  showFullWidth: {
    targets: ".govuk-pages-plugin__flows__flow",
    className: "govuk-pages-plugin__flows__flow--full-width"
  }
};

/* ============================================================
   Helper functions
   ============================================================ */

const toggleClassOnTargets = (selector, className, add) => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.toggle(className, add);
  });
};

const setControlVisibility = (ids, hide) => {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("govuk-visually-hidden", hide);
  });
};

/* ============================================================
   Main icChange handler
   ============================================================ */

const handleIcChange = ev => {
  const src = ev.target;
  if (!src || !src.id) return;

  const cfg = SWITCH_HANDLERS[src.id];
  if (!cfg) return;

  const checked = !!ev.detail?.checked;

  // Toggle classes
  if (cfg.targets && cfg.className) {
    const add = cfg.inverse ? !checked : checked;
    toggleClassOnTargets(cfg.targets, cfg.className, add);
  }

  // Hide/show related controls
  if (cfg.hideControls) {
    const hide = cfg.hideOnChecked ? checked : !checked;
    setControlVisibility(cfg.hideControls, hide);
  }

  // Run actions
  const runAction = action => {
    if (typeof action === "string") action = ACTIONS[action];
    if (typeof action === "function") {
      try {
        action(checked, cfg, ev);
      } catch (e) {
        console.error("Switch action error", e);
      }
    }
  };

  if (checked && cfg.onToggleOn) runAction(cfg.onToggleOn);
  if (!checked && cfg.onToggleOff) runAction(cfg.onToggleOff);
};

/* ============================================================
   Init ic-switch handling
   ============================================================ */

export const InitIcSwitches = () => {
  document.addEventListener("icChange", handleIcChange);
  watchForPageOverviewToggle();
};

/* ============================================================
   Page overview toggle logic
   ============================================================ */

export const updateFlowLinks = useOverview => {
  document.querySelectorAll(".govuk-pages-plugin__pages__link").forEach(link => {
    const { overviewPageLink, directLink } = link.dataset;
    if (!overviewPageLink || !directLink) return;
    link.href = useOverview ? overviewPageLink : directLink;
  });
};

const watchForPageOverviewToggle = () => {
  const init = toggle => {
    if (toggle.dataset.bound) return;
    toggle.dataset.bound = "true";

    updateFlowLinks(toggle.checked);

    toggle.addEventListener("icChange", e => {
      updateFlowLinks(e.detail.checked);
    });
  };

  const existing = document.querySelector("#usePageOverview");
  if (existing) return init(existing);

  const observer = new MutationObserver(() => {
    const toggle = document.querySelector("#usePageOverview");
    if (!toggle) return;

    observer.disconnect();
    init(toggle);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

/* ============================================================
   Example custom action
   ============================================================ */

function exampleFunc(checked, cfg){
  console.log("Switch toggled:", checked, cfg);
};
