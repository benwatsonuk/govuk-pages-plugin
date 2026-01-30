export const InitIcSwitches = () => {
    watchForToggle();
    
    const SWITCH_HANDLERS = {
        showPageOptions: {
            onToggleOn: exampleFunc,
            onToggleOff: exampleFunc
        },
        showList: {
            targets: '.govuk-pages-plugin__flows__flow',
            className: 'govuk-pages-plugin__flows__flow--list',
            hideControls: ['showFullWidth', 'showInline'],
            hideOnChecked: true
        },
        showInline: {
            targets: '.govuk-pages-plugin__flows__flow',
            className: 'govuk-pages-plugin__flows__flow--inline',
            hideControls: ['showFullWidth'],
            hideOnChecked: false
        },
        showPageOptions: {
            targets: '.govuk-pages-plugin__page-options',
            className: 'govuk-visually-hidden',
            inverse: true
        },
        showFullWidth: {
            targets: '.govuk-pages-plugin__flows__flow',
            className: 'govuk-pages-plugin__flows__flow--full-width'
        }
    };

    const toggleClassOnTargets = (selector, className, add) => {
        const targets = document.querySelectorAll(selector);
        targets.forEach(t => {
            t.classList[add ? 'add' : 'remove'](className);
        });
    };

    const setControlVisibility = (ids, hide) => {
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.classList.toggle('govuk-visually-hidden', hide);
        });
    };

    const ACTIONS = {
        // signature: (checked, cfg, ev)
        noop: () => {},
        // example action that toggles visibility of an element id provided in cfg.actionTarget
        toggleElement: (checked, cfg) => {
            if (!cfg.actionTarget) return;
            const el = document.getElementById(cfg.actionTarget);
            if (!el) return;
            el.classList.toggle('govuk-visually-hidden', !checked);
        }
    };

    const handler = ev => {
        const src = ev.target || ev.srcElement;
        if (!src || !src.id) return;
        const cfg = SWITCH_HANDLERS[src.id];
        if (!cfg) return;

        const checked = !!(ev.detail && ev.detail.checked);

        if (cfg.targets && cfg.className) {
            const add = cfg.inverse ? !checked : checked;
            toggleClassOnTargets(cfg.targets, cfg.className, add);
        }

        if (cfg.hideControls && Array.isArray(cfg.hideControls)) {
            const hide = cfg.hideOnChecked ? checked : !checked;
            setControlVisibility(cfg.hideControls, hide);
        }

        // New: support separate handlers for on / off
        if (cfg.onToggleOn || cfg.onToggleOff) {
            if (checked && cfg.onToggleOn) {
                let action = cfg.onToggleOn;
                if (typeof action === 'string') action = ACTIONS[action];
                if (typeof action === 'function') {
                    try { action(true, cfg, ev); } catch (err) { console.error('pageOptions onToggleOn error', err); }
                }
            }
            if (!checked && cfg.onToggleOff) {
                let action = cfg.onToggleOff;
                if (typeof action === 'string') action = ACTIONS[action];
                if (typeof action === 'function') {
                    try { action(false, cfg, ev); } catch (err) { console.error('pageOptions onToggleOff error', err); }
                }
            }
        } else if (cfg.onToggle) {
            // backward-compatible: single onToggle with optional onToggleOnChecked flag
            let action = cfg.onToggle;
            if (typeof action === 'string') action = ACTIONS[action];
            if (typeof action === 'function') {
                const shouldFire = cfg.hasOwnProperty('onToggleOnChecked') ? !!cfg.onToggleOnChecked : true;
                if ((checked && shouldFire) || (!checked && !shouldFire)) {
                    try { action(checked, cfg, ev); } catch (err) { console.error('pageOptions onToggle handler error', err); }
                }
            }
        }
    };

    document.addEventListener('icChange', handler);
};

const noop = () => {};

const exampleFunc = (checked, cfg, ev) => {
    console.log("I'm running! - checked: " + checked);
};

export const InitPageOverviewToggleWatch = () => {
    const toggle = document.querySelector("#usePageOverview");

    if (!toggle || toggle.dataset.bound) return;

    toggle.dataset.bound = "true";
    updateFlowLinks(toggle.checked);
    toggle.addEventListener("icChange", e => {
        updateFlowLinks(e.detail.checked);
    });
}

export const updateFlowLinks = (useOverview) => {
  const links = document.querySelectorAll(
    ".govuk-pages-plugin__pages__link"
  );

  links.forEach(link => {
    const overviewLink = link.dataset.overviewPageLink;
    const directLink = link.dataset.directLink;
    if (!overviewLink || !directLink) return;
    link.href = useOverview ? overviewLink : directLink;
  });
}

const watchForToggle = () => {
  const existingToggle = document.querySelector("#usePageOverview input.ic-input");
  if (existingToggle) {
    InitPageOverviewToggleWatch(existingToggle);
    return;
  }

  const observer = new MutationObserver(() => {
    const toggle = document.querySelector("#usePageOverview input.ic-input");
    if (!toggle) return;

    observer.disconnect();
    InitPageOverviewToggleWatch(toggle);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}