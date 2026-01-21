import { f as forceUpdate } from './index-a7a720e7.js';
import { b as IC_BLOCK_COLOR_COMPONENTS, d as IC_BLOCK_COLOR_EXCEPTIONS, c as IC_FIXED_COLOR_COMPONENTS } from './constants-7960cba4.js';

var IcInformationStatus;
(function (IcInformationStatus) {
    IcInformationStatus["Warning"] = "warning";
    IcInformationStatus["Error"] = "error";
    IcInformationStatus["Success"] = "success";
})(IcInformationStatus || (IcInformationStatus = {}));
var IcBrandForegroundEnum;
(function (IcBrandForegroundEnum) {
    IcBrandForegroundEnum["Default"] = "default";
    IcBrandForegroundEnum["Dark"] = "dark";
    IcBrandForegroundEnum["Light"] = "light";
})(IcBrandForegroundEnum || (IcBrandForegroundEnum = {}));

const DARK_MODE_THRESHOLD = 133.3505;
const ANYWHERE_SEARCH_POSITION = "anywhere";
const icInput = "ic-input";
/**
 * Used to inherit global attributes set on the host. Called in componentWillLoad and assigned
 * to a variable that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
const inheritAttributes = (element, attributes = []) => {
    const attributeObject = {};
    attributes.forEach((attr) => {
        const value = element.getAttribute(attr);
        if (value !== null) {
            attributeObject[attr] = value;
            element.removeAttribute(attr);
        }
    });
    return attributeObject;
};
const debounceEvent = (event, wait) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait),
    };
};
const debounce = (func, wait = 0) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
};
/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param container The element where the input will be added
 * @param value The value of the input
 * @param name The name of the input
 * @param disabled If true, the input is disabled
 * @param always Add a hidden input even if the container does not use Shadow
 */
const renderHiddenInput = (container, value, name, disabled = false, always = true) => {
    if (name && (always || hasShadowDom(container))) {
        let input = getHiddenInputElement(container);
        if (!input) {
            input = container.ownerDocument.createElement("input");
            input.type = "hidden";
            input.classList.add(icInput);
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value instanceof Date ? value.toISOString() : value || "";
    }
};
const getHiddenInputElement = (container) => Array.from(container.querySelectorAll(`input.${icInput}`)).filter((el) => container === el.parentElement)[0];
/**
 * This method is used to add a hidden file input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param event: The event that is emitted once a file is selected.
 * @param container The element where the input will be added
 * @param multiple If true, multiple files can be selected
 * @param disabled If true, the input is disabled
 * @param accept A string of the accepted files
 * @param name The name of the input
 * @param value The value of the input
 */
const renderFileHiddenInput = (event, container, multiple, disabled, accept, name, value) => {
    if (name !== undefined && hasShadowDom(container)) {
        let input = getHiddenInputElement(container);
        if (input === null || input === undefined) {
            input = container.ownerDocument.createElement("input");
            input.classList.add(icInput);
            container.appendChild(input);
        }
        input.type = "file";
        input.hidden = true;
        input.multiple = multiple;
        input.name = name;
        input.disabled = disabled;
        if (value)
            input.files = value;
        if (accept)
            input.accept = accept;
        input.onchange = () => {
            event.emit(input.files);
        };
        input.click();
    }
};
const removeHiddenInput = (container) => {
    var _a;
    (_a = getHiddenInputElement(container)) === null || _a === void 0 ? void 0 : _a.remove();
};
const hasShadowDom = (el) => !!el && !!el.shadowRoot && !!el.attachShadow;
const getInputHelperTextID = (id) => id + "-helper-text";
const getInputValidationTextID = (id) => id + "-validation-text";
const getInputDescribedByText = (el, inputId, helperText, validationText) => `${isSlotUsed(el, "helper-text") || helperText
    ? getInputHelperTextID(inputId)
    : ""} ${validationText ? getInputValidationTextID(inputId) : ""}`.trim();
/**
 * This method helps to understand the context in which a component exists,
 * to assist with choosing appropriate foreground colours to use. For example,
 * this method will help you use the 'white' version of a button if it's within
 * a block colour element using white foreground text.
 *
 * This only works for components/elements passed via <slot> and not if they
 * are part of an IC component.
 *
 * ""
 * @returns IcBrandForeground depending on the context
 */
const getBrandFromContext = (el, brandFromEvent = null) => {
    var _a;
    const parentElement = el.parentElement || el.getRootNode().host.parentElement;
    const blockColorParent = parentElement === null || parentElement === void 0 ? void 0 : parentElement.closest(IC_BLOCK_COLOR_COMPONENTS);
    if (!blockColorParent)
        return IcBrandForegroundEnum.Default;
    const parentTag = blockColorParent.tagName.toLowerCase();
    if ((_a = IC_BLOCK_COLOR_EXCEPTIONS[parentTag]) === null || _a === void 0 ? void 0 : _a.includes(el.tagName.toLowerCase())) {
        return IcBrandForegroundEnum.Default;
    }
    else if (brandFromEvent !== null &&
        !IC_FIXED_COLOR_COMPONENTS.includes(parentTag)) {
        return brandFromEvent;
    }
    else if (blockColorParent.classList.contains(`${parentTag}-${IcBrandForegroundEnum.Dark}`) ||
        blockColorParent.classList.contains(IcBrandForegroundEnum.Dark)) {
        return IcBrandForegroundEnum.Dark;
    }
    else {
        return IcBrandForegroundEnum.Light;
    }
};
/**
 * Checks if the current device is a mobile or tablet device.
 * @returns {boolean} Returns true if the device is a mobile or tablet device, otherwise returns false.
 */
const isMobileOrTablet = () => "maxTouchPoints" in navigator && "userAgent" in navigator
    ? navigator.maxTouchPoints > 0 &&
        /iPad|iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    : false;
/**
 * Will create a button within the lightDOM which interacts with the form.
 * This is required as buttons within the shadowDOM will not invoke a submit or reset
 *
 * @param form - form element to associate button with
 * @param button - shadowDOM button
 */
const handleHiddenFormButtonClick = (form, button) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const hiddenFormButtonId = button.type === "submit" || button.type === "reset"
        ? `hidden-form-${button.type}-button`
        : "hidden-form-button";
    const hiddenFormButton = (_a = document.querySelector(`#${hiddenFormButtonId}`)) !== null && _a !== void 0 ? _a : document.createElement("button");
    hiddenFormButton.setAttribute("type", (_b = button.type) !== null && _b !== void 0 ? _b : "button");
    hiddenFormButton.id = hiddenFormButtonId;
    hiddenFormButton.style.display = "none";
    hiddenFormButton.formAction = (_c = button.formaction) !== null && _c !== void 0 ? _c : "";
    hiddenFormButton.formEnctype = (_d = button.formenctype) !== null && _d !== void 0 ? _d : "";
    hiddenFormButton.formMethod = (_e = button.formmethod) !== null && _e !== void 0 ? _e : "";
    hiddenFormButton.formNoValidate = (_f = button.formnovalidate) !== null && _f !== void 0 ? _f : false;
    hiddenFormButton.formTarget = (_g = button.formtarget) !== null && _g !== void 0 ? _g : "";
    form === null || form === void 0 ? void 0 : form.appendChild(hiddenFormButton);
    hiddenFormButton.click();
};
const isEmptyString = (value) => !value || value.trim().length === 0;
// A helper function that checks if a prop has been defined
const isPropDefined = (prop) => prop !== undefined ? prop : undefined;
/**
 * Extracts the label using the value from an object. Requires the object to have a label and value property.
 * @param value - value from object
 * @param options - list of menu items
 * @returns - label corresponding to value
 */
const getLabelFromValue = (value, options, valueField = "value", labelField = "label") => {
    const ungroupedOptions = [];
    if (options.length > 0 && options.map) {
        options.map((option) => {
            if (option.children) {
                option.children.map((option) => ungroupedOptions.push(option));
            }
            else {
                ungroupedOptions.push(option);
            }
        });
        const matchingValue = ungroupedOptions.find((option) => option[valueField] === value);
        if (matchingValue !== undefined)
            return matchingValue[labelField];
    }
    return undefined;
};
/**
 * Filters the options based on the search string.
 * @param options - array of options
 * @param includeDescriptions - determines whether option descriptions are included when filtering options
 * @param searchString - string used to filter the options
 * @param position - whether the search string matches the start of or anywhere in the options
 * @returns filtered array of options
 */
const getFilteredMenuOptions = (options, includeDescriptions, searchString, position = ANYWHERE_SEARCH_POSITION, labelField = "label") => options.filter((option) => {
    var _a;
    const label = option[labelField].toLowerCase();
    const description = (_a = option.description) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const lowerSearchString = searchString.toLowerCase();
    return position === ANYWHERE_SEARCH_POSITION
        ? includeDescriptions
            ? label.includes(lowerSearchString) ||
                (description === null || description === void 0 ? void 0 : description.includes(lowerSearchString))
            : label.includes(lowerSearchString)
        : includeDescriptions
            ? label.startsWith(lowerSearchString) ||
                (description === null || description === void 0 ? void 0 : description.startsWith(lowerSearchString))
            : label.startsWith(lowerSearchString);
});
/**
 * Gets count of options where only group title "parent" options have been removed.
 * Disabled options are included in the count.
 * @param options - array of options
 * @returns number of options not including group titles
 */
const getOptionsWithoutGroupTitlesCount = (options) => {
    const optionsWithoutGroupTitles = [];
    if (options.length > 0 && options.map) {
        options.map((option) => {
            if (option.children) {
                option.children.map((option) => optionsWithoutGroupTitles.push(option));
            }
            else {
                optionsWithoutGroupTitles.push(option);
            }
        });
    }
    return optionsWithoutGroupTitles.length;
};
const deviceSizeMatches = (size) => window.matchMedia(`(max-width: ${size}px)`).matches;
const getCurrentDeviceSize = () => {
    if (deviceSizeMatches(DEVICE_SIZES.S)) {
        return DEVICE_SIZES.S;
    }
    if (deviceSizeMatches(DEVICE_SIZES.M)) {
        return DEVICE_SIZES.M;
    }
    if (deviceSizeMatches(DEVICE_SIZES.L)) {
        return DEVICE_SIZES.L;
    }
    if (deviceSizeMatches(DEVICE_SIZES.XL)) {
        return DEVICE_SIZES.XL;
    }
    //fallback needed as all of above get initialised to 0 in jest tests
    return DEVICE_SIZES.UNDEFINED;
};
const getCssProperty = (cssVar) => getComputedStyle(document.documentElement).getPropertyValue(cssVar);
/**
 * Returns the brightness of the theme colour, calculated by using the theme RGB CSS values by:
 * - Multiplying each RGB value by a set number: https://www.w3.org/TR/AERT/#color-contrast
 * - Adding them together and dividing by 1000
 * This is a similar calculation to its CSS counterpart: "--ic-brand-text-color"
 * @returns number representing the brightness of the theme colour
 */
const getBrandColorBrightness = () => (parseInt(getCssProperty("--ic-brand-color-primary-r")) * 299 +
    parseInt(getCssProperty("--ic-brand-color-primary-g")) * 587 +
    parseInt(getCssProperty("--ic-brand-color-primary-b")) * 114) /
    1000;
/**
 * Returns if dark or light foreground colors should be used for color contrast reasons
 * @returns "dark" or "light"
 * @param brightness - Optional custom brightness value. Defaults to `getBrandColorBrightness`
 */
const getBrandForegroundAppearance = (brightness = getBrandColorBrightness()) => brightness > DARK_MODE_THRESHOLD
    ? IcBrandForegroundEnum.Dark
    : IcBrandForegroundEnum.Light;
const getSlot = (element, name) => (element === null || element === void 0 ? void 0 : element.querySelector(`[slot="${name}"]`)) || null;
const slotHasContent = (element, name) => getSlot(element, name) !== null;
const getSlotContent = (element, name) => {
    const slot = getSlot(element, name);
    return slot ? getSlotElements(slot) : null;
};
const getSlotElements = (slot) => {
    const slotContent = slot.firstElementChild;
    if (slotContent === null)
        return [slot];
    const elements = slotContent.assignedElements
        ? slotContent.assignedElements()
        : slotContent.childNodes;
    return elements.length ? elements : slot.tagName ? [slot] : null;
};
const getNavItemParentDetails = ({ parentElement, }) => {
    let navType = { navType: "", parent: null };
    if (parentElement) {
        switch (parentElement.tagName) {
            case "IC-NAVIGATION-GROUP":
                navType = getNavItemParentDetails(parentElement);
                break;
            case "IC-TOP-NAVIGATION":
                navType = { navType: "top", parent: parentElement };
                break;
            case "IC-SIDE-NAVIGATION":
                navType = { navType: "side", parent: parentElement };
                break;
            case "IC-PAGE-HEADER":
                navType = { navType: "page-header", parent: null };
                break;
        }
    }
    return navType;
};
const DEVICE_SIZES = {
    XS: Number(getCssProperty("--ic-breakpoint-xs").replace("px", "")), // 0
    S: Number(getCssProperty("--ic-breakpoint-sm").replace("px", "")), // 576
    M: Number(getCssProperty("--ic-breakpoint-md").replace("px", "")), // 768
    L: Number(getCssProperty("--ic-breakpoint-lg").replace("px", "")), // 992
    XL: Number(getCssProperty("--ic-breakpoint-xl").replace("px", "")), // 1200
    UNDEFINED: 1200,
};
const hasValidationStatus = (status, disabled) => !!status && !disabled;
const isSlotUsed = ({ children }, slotName) => Array.from(children).some((child) => child.getAttribute("slot") === slotName);
// added as a common method to allow detection of gatsby hydration issue, where (camelCase) props are initially undefined & then update
// with a value. Allows a callback function to be executed when this is the case
const onComponentPropUndefinedChange = (oldValue, newValue, callback) => {
    if (oldValue === undefined && newValue !== oldValue) {
        callback();
    }
};
const onComponentRequiredPropUndefined = (props, component) => {
    props.forEach(({ prop, propName }) => {
        if (prop === null || prop === undefined) {
            console.error(`No ${propName} specified for ${component} component - prop '${propName}' (web components) / '${kebabToCamelCase(propName)}' (react) required`);
        }
    });
};
const kebabToCamelCase = (kebabCase) => kebabCase
    .toLowerCase()
    .split("-")
    .map((word, index) => index === 0
    ? word
    : `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`)
    .join("");
const checkResizeObserver = (callbackFn) => {
    if (typeof window !== "undefined" &&
        typeof window.ResizeObserver !== "undefined") {
        callbackFn();
    }
};
const hex2dec = (v) => parseInt(v, 16);
const hexToRgba = (hex) => {
    const hexChars = hex
        .replace("#", "")
        .split("")
        .map((char) => char.repeat(2));
    return {
        r: hex2dec(hex.length === 4 ? hexChars[0] : hex.slice(1, 3)),
        g: hex2dec(hex.length === 4 ? hexChars[1] : hex.slice(3, 5)),
        b: hex2dec(hex.length === 4 ? hexChars[2] : hex.slice(5)),
        a: 1,
    };
};
const rgbaStrToObj = (rgbaStr) => {
    const isRGBA = rgbaStr.slice(3, 4).toLowerCase() === "a";
    const rgbValues = rgbaStr
        .substring(isRGBA ? 5 : 4, rgbaStr.length - 1)
        .replace(/ /g, "")
        .split(",")
        .map(Number);
    return {
        r: rgbValues[0],
        g: rgbValues[1],
        b: rgbValues[2],
        a: isRGBA ? rgbValues[3] : 1,
    };
};
const elementOverflowsX = ({ scrollWidth, clientWidth, }) => scrollWidth > clientWidth;
const hasClassificationBanner = () => !!document.querySelector("ic-classification-banner:not([inline='true'])");
const addFormResetListener = (el, callbackFn) => {
    var _a;
    (_a = el.closest("FORM")) === null || _a === void 0 ? void 0 : _a.addEventListener("reset", callbackFn);
};
const removeFormResetListener = (el, callbackFn) => {
    var _a;
    (_a = el.closest("FORM")) === null || _a === void 0 ? void 0 : _a.removeEventListener("reset", callbackFn);
};
const pxToRem = (px, base = 16) => `${(1 / base) * parseInt(px)}rem`;
/**
 * Removes the disabled attribute from the provided element when its value is set to false.
 * This effectively makes it null, to not confuse screen readers that cannot interpret the false value
 */
const removeDisabledFalse = (disabled, element) => {
    if (!disabled) {
        element.removeAttribute("disabled");
    }
};
const isMacDevice = () => window.navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;
const convertToRGBA = (color) => {
    const firstChar = color === null || color === void 0 ? void 0 : color.slice(0, 1).toLowerCase();
    if (firstChar !== "#" && firstChar !== "r")
        return null;
    return firstChar === "#" ? hexToRgba(color) : rgbaStrToObj(color);
};
const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
const checkSlotInChildMutations = (addedNodes, removedNodes, slotName) => {
    const hasSlot = (nodeList) => Array.from(nodeList).some((node) => Array.isArray(slotName)
        ? slotName.some((name) => node.slot === name)
        : node.slot === slotName);
    return hasSlot(addedNodes) || hasSlot(removedNodes);
};
const isElInAGGrid = (el) => !!el.closest(".ag-cell") && !!el.closest(".ag-root");
/**
 * Checks if the component is slotted in its relevant 'group' component
 * @param component - the component to check
 */
const isSlottedInGroup = (component) => { var _a; return ((_a = component.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) === `${component.tagName}-GROUP`; };
const hasDynamicChildSlots = (mutationList, slotNames) => mutationList.some(({ type, addedNodes, removedNodes }) => type === "childList" &&
    checkSlotInChildMutations(addedNodes, removedNodes, slotNames));
const renderDynamicChildSlots = (mutationList, slotNames, ref) => {
    if (hasDynamicChildSlots(mutationList, slotNames)) {
        forceUpdate(ref);
    }
};
const getElementInheritedTheme = (el) => {
    var _a, _b, _c, _d, _e;
    const blockParentTheme = (_b = (_a = el.parentElement) === null || _a === void 0 ? void 0 : _a.closest(IC_BLOCK_COLOR_COMPONENTS)) === null || _b === void 0 ? void 0 : _b.theme;
    if (blockParentTheme && blockParentTheme !== "inherit")
        return blockParentTheme;
    const wrapperTheme = (_d = (_c = el.parentElement) === null || _c === void 0 ? void 0 : _c.closest("ic-theme")) === null || _d === void 0 ? void 0 : _d.theme;
    if (wrapperTheme && wrapperTheme !== "system")
        return wrapperTheme;
    return ((_e = window.matchMedia) === null || _e === void 0 ? void 0 : _e.call(window, "(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light";
};
const isSafari = /safari/i.test(window.navigator.userAgent) &&
    !/Edge/i.test(window.navigator.userAgent) &&
    !/chrome/i.test(window.navigator.userAgent);

export { getFilteredMenuOptions as A, getLabelFromValue as B, handleHiddenFormButtonClick as C, DEVICE_SIZES as D, debounceEvent as E, checkSlotInChildMutations as F, isMacDevice as G, getOptionsWithoutGroupTitlesCount as H, IcBrandForegroundEnum as I, isMobileOrTablet as J, IcInformationStatus as K, isEmptyString as L, getBrandColorBrightness as M, getSlot as N, isSlottedInGroup as O, getSlotContent as P, capitalize as Q, elementOverflowsX as R, getInputHelperTextID as S, getInputValidationTextID as T, renderFileHiddenInput as U, isSafari as V, renderDynamicChildSlots as a, isElInAGGrid as b, onComponentPropUndefinedChange as c, convertToRGBA as d, isPropDefined as e, getCurrentDeviceSize as f, getBrandForegroundAppearance as g, checkResizeObserver as h, isSlotUsed as i, getBrandFromContext as j, addFormResetListener as k, removeFormResetListener as l, renderHiddenInput as m, removeHiddenInput as n, onComponentRequiredPropUndefined as o, pxToRem as p, getInputDescribedByText as q, removeDisabledFalse as r, hasValidationStatus as s, slotHasContent as t, getSlotElements as u, hasClassificationBanner as v, inheritAttributes as w, getElementInheritedTheme as x, getNavItemParentDetails as y, getCssProperty as z };

//# sourceMappingURL=helpers-dcedb279.js.map