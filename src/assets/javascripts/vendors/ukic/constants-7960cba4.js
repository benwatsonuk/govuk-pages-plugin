const errorIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
    <title>Error</title>
    <g>
        <path d="M8.77 3L3.5 8.27V15.73L8.77 21H16.23L21.5 15.73V8.27L16.23 3M8.91 7L12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41" />
    </g>
</svg>
`;

const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
    <title>For your information</title>
    <g>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z" />
    </g>
</svg>
`;

const neutralIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
<title>Neutral</title>
    <g>
        <path d="M19.5 3H5.5C4.4 3 3.5 3.9 3.5 5V19C3.5 20.1 4.4 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM12.51 18C11.81 18 11.25 17.44 11.25 16.74C11.25 16.03 11.81 15.49 12.51 15.49C13.22 15.49 13.76 16.03 13.76 16.74C13.75 17.43 13.22 18 12.51 18ZM15.52 10.6C14.76 11.71 14.04 12.06 13.65 12.77C13.55 12.95 13.49 13.09 13.46 13.4C13.41 13.85 13.01 14.18 12.56 14.18H12.5C11.98 14.18 11.57 13.74 11.62 13.22C11.65 12.88 11.73 12.53 11.92 12.19C12.41 11.32 13.34 10.8 13.88 10.03C14.45 9.22 14.13 7.7 12.51 7.7C11.8 7.7 11.33 8.06 11.04 8.49C10.79 8.85 10.35 9.02 9.94 8.85C9.41 8.64 9.22 8 9.54 7.54C10.15 6.65 11.17 6 12.49 6C13.97 6 14.98 6.67 15.5 7.52C15.94 8.24 16.2 9.59 15.52 10.6Z" />
    </g>
</svg>
`;

const successIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
    <title>Success</title>
    <g>
        <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM9.79 16.29L6.2 12.7C5.81 12.31 5.81 11.68 6.2 11.29C6.59 10.9 7.22 10.9 7.61 11.29L10.5 14.17L17.38 7.29C17.77 6.9 18.4 6.9 18.79 7.29C19.18 7.68 19.18 8.31 18.79 8.7L11.2 16.29C10.82 16.68 10.18 16.68 9.79 16.29Z" />
    </g>
</svg>
`;

const warningIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
    <title>Warning</title>
    <g>
        <path d="M4.47 20.5037H19.53C21.07 20.5037 22.03 18.8337 21.26 17.5037L13.73 4.49375C12.96 3.16375 11.04 3.16375 10.27 4.49375L2.74 17.5037C1.97 18.8337 2.93 20.5037 4.47 20.5037ZM12 13.5037C11.45 13.5037 11 13.0537 11 12.5037V10.5037C11 9.95375 11.45 9.50375 12 9.50375C12.55 9.50375 13 9.95375 13 10.5037V12.5037C13 13.0537 12.55 13.5037 12 13.5037ZM13 17.5037H11V15.5037H13V17.5037Z" />
    </g>
</svg>
`;

const aiIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <title>Artificial Intelligence (AI)</title>
  <g clip-path="url(#clip0_43876_12457)">
    <path d="M19.801 3C20.4637 3 21.001 3.53726 21.001 4.2V19.8C21.001 20.4628 20.4637 21 19.801 21H4.20098C3.53824 21 3.00098 20.4628 3.00098 19.8V4.2C3.00098 3.53726 3.53824 3 4.20098 3H19.801ZM8.94555 8.87988C8.88361 8.87988 8.82803 8.91796 8.80567 8.97573L6.32024 15.3958C6.28219 15.4941 6.35472 15.6 6.46013 15.6H7.19363C7.2559 15.6 7.3117 15.5615 7.33384 15.5033L7.89546 14.0262C7.9176 13.968 7.97339 13.9295 8.03567 13.9295H10.64C10.7023 13.9295 10.7582 13.968 10.7803 14.0263L11.3403 15.5032C11.3624 15.5615 11.4182 15.6 11.4805 15.6H12.2625C12.3678 15.6 12.4403 15.4944 12.4025 15.3962L9.9356 8.97608C9.91333 8.91813 9.85767 8.87988 9.79558 8.87988H8.94555ZM13.6123 8.87988C13.5294 8.87988 13.4623 8.94704 13.4623 9.02988V9.69024C13.4623 9.77308 13.5294 9.84024 13.6123 9.84024H14.3969C14.4797 9.84024 14.5469 9.9074 14.5469 9.99024V14.4902C14.5469 14.5731 14.4797 14.6402 14.3969 14.6402H13.6123C13.5294 14.6402 13.4623 14.7074 13.4623 14.7902V15.45C13.4623 15.5328 13.5294 15.6 13.6123 15.6H16.5186C16.6014 15.6 16.6686 15.5328 16.6686 15.45V14.7902C16.6686 14.7074 16.6014 14.6402 16.5186 14.6402H15.7334C15.6506 14.6402 15.5834 14.5731 15.5834 14.4902V9.99024C15.5834 9.9074 15.6506 9.84024 15.7334 9.84024H16.5186C16.6014 9.84024 16.6686 9.77308 16.6686 9.69024V9.02988C16.6686 8.94704 16.6014 8.87988 16.5186 8.87988H13.6123ZM9.35138 10.0705C9.40898 10.2433 9.47318 10.4353 9.54356 10.6465C9.61394 10.8577 9.6746 11.0497 9.72578 11.2225C9.78338 11.3952 9.82202 11.504 9.84122 11.5488L10.288 12.7279C10.3252 12.8261 10.2527 12.9311 10.1478 12.9311H8.52949C8.42445 12.9311 8.35194 12.8259 8.3893 12.7277L8.82344 11.5869C8.86182 11.4782 8.91003 11.3437 8.96758 11.1838C9.02516 11.0174 9.08288 10.8413 9.14042 10.6559C9.20438 10.4704 9.2615 10.2943 9.31268 10.1279C9.31947 10.1084 9.32604 10.0892 9.3325 10.0705C9.33554 10.0616 9.34853 10.0616 9.35138 10.0705Z" />
  </g>
  <defs>
    <clipPath id="clip0_43876_12457">
      <rect width="18" height="18" fill="white" transform="translate(3.00098 3)"/>
    </clipPath>
  </defs>
</svg>`;

// Global status icons
const VARIANT_ICONS = {
    neutral: {
        icon: neutralIcon,
        ariaLabel: "Neutral",
    },
    info: {
        icon: infoIcon,
        ariaLabel: "For your information",
    },
    warning: {
        icon: warningIcon,
        ariaLabel: "Warning",
    },
    error: {
        icon: errorIcon,
        ariaLabel: "Error",
    },
    success: {
        icon: successIcon,
        ariaLabel: "Success",
    },
    ai: {
        icon: aiIcon,
        ariaLabel: "AI",
    },
};
// Global ARIA attributes
const IC_INHERITED_ARIA = [
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-description",
    "aria-details",
    "aria-disabled",
    "aria-dropeffect",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-grabbed",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription",
];
const IC_DEVICE_SIZES = {
    XS: 576,
    S: 768,
    M: 992,
    L: 1200,
    XL: 99999,
};
const IC_BLOCK_COLOR_COMPONENTS = [
    "ic-hero",
    "ic-top-navigation",
    "ic-footer",
    "ic-side-navigation",
    "ic-alert",
].join(",");
const IC_FIXED_COLOR_COMPONENTS = ["ic-alert"];
const IC_BLOCK_COLOR_EXCEPTIONS = {
    "ic-alert": ["ic-link", "ic-button"],
};
/* Range within which the chosen theme colour would not have a sufficient brightness difference with either of the black or white foreground colours
 * The brightness difference must be greater than 125 to provide good colour visibility
 * Calculated by:
 * - Using the brightness formula for both colours: https://www.w3.org/TR/AERT/#color-contrast
 * - Adding 125 to the brightness of the black foreground colour - RGB(11, 12, 12)
 * - Subtracting 125 from the brightness of the white foreground colour - RGB(255, 255, 255)
 */
const BLACK_MIN_COLOR_BRIGHTNESS = 136.701;
const WHITE_MAX_COLOR_BRIGHTNESS = 130;
// Keyboard characters that do not affect the content of an input control when pressed
const IGNORED_KEYBOARD_CHARACTERS = [
    "Alt",
    "AltGraph",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "AudioVolumeDown",
    "AudioVolumeMute",
    "AudioVolumeUp",
    "CapsLock",
    "ContextMenu",
    "Control",
    "Delete",
    "End",
    "Enter",
    "Escape",
    "F1",
    "F10",
    "F11",
    "F12",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "Home",
    "Insert",
    "Meta",
    "NumLock",
    "PageDown",
    "PageUp",
    "Shift",
    "Tab",
];
const IC_CUSTOM_ALLOWED_COMPONENTS = [];

export { BLACK_MIN_COLOR_BRIGHTNESS as B, IC_INHERITED_ARIA as I, VARIANT_ICONS as V, WHITE_MAX_COLOR_BRIGHTNESS as W, IC_DEVICE_SIZES as a, IC_BLOCK_COLOR_COMPONENTS as b, IC_FIXED_COLOR_COMPONENTS as c, IC_BLOCK_COLOR_EXCEPTIONS as d, IGNORED_KEYBOARD_CHARACTERS as e, IC_CUSTOM_ALLOWED_COMPONENTS as f, errorIcon as g, successIcon as s, warningIcon as w };

//# sourceMappingURL=constants-7960cba4.js.map