import { r as registerInstance, c as createEvent, f as forceUpdate, h, H as Host, g as getElement, F as Fragment } from './index-a7a720e7.js';
import { C as handleHiddenFormButtonClick, r as removeDisabledFalse, w as inheritAttributes, U as renderFileHiddenInput, j as getBrandFromContext, I as IcBrandForegroundEnum, i as isSlotUsed, o as onComponentRequiredPropUndefined, V as isSafari } from './helpers-dcedb279.js';
import { I as IC_INHERITED_ARIA } from './constants-7960cba4.js';
import { c as createPopper } from './popper-0fbeff6d.js';

const arrowDropdown = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor"/>
</svg>`;

const icButtonCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:inline-block;position:relative;--icon-width:100%;--icon-height:100%}.button,::slotted(a){font-family:var(--ic-font-body-family);text-decoration:none;font-weight:600;font-size:0.875rem;transition:var(--ic-easing-transition-fast);border-radius:var(--ic-border-radius);min-width:var(--min-width, 6.25rem);display:inline-flex;flex-direction:row;justify-content:center;align-items:center;background:none;border:none;box-sizing:border-box;white-space:nowrap;vertical-align:middle}:host(.with-badge) .button{border-radius:0.2188rem}.button:hover,::slotted(a:hover){cursor:pointer}.button:focus,::slotted(a:focus){box-shadow:var(--ic-border-focus)}.button:focus-visible,::slotted(a:focus-visible){outline:var(--ic-hc-focus-outline)}:host(.ic-button-disabled),:host(.ic-button-disabled) .button,:host(.ic-button-disabled) ::slotted(a),:host(.ic-button-loading),:host(.ic-button-loading) .button{pointer-events:none}:host(.top-icon) .button{flex-direction:column;--height:fit-content}:host(.top-icon) .button .icon-container{margin-right:0}:host(.ic-button-variant-primary) .button,:host(.ic-button-variant-icon-primary) .button{color:var(--ic-button-primary-text);background-color:var(--ic-button-primary-background)}:host(.ic-button-variant-primary:not(.ic-button-disabled)) ::slotted(svg){color:var(--ic-button-primary-icon)}:host(.ic-button-variant-primary) ::slotted(a),:host(.ic-button-variant-icon-primary) ::slotted(a){--ic-typography-color:var(--ic-button-primary-text);color:var(--ic-button-primary-text);background-color:var(--ic-button-primary-background) !important}:host(.ic-button-variant-primary) .button:hover,:host(.ic-button-variant-icon-primary) .button:hover{background-color:var(--ic-button-primary-background-hover)}:host(.ic-button-variant-primary) ::slotted(a:hover),:host(.ic-button-variant-icon-primary) ::slotted(a:hover){background-color:var(--ic-button-primary-background-hover) !important}:host(.ic-button-variant-primary.ic-button-loading) .button,:host(.ic-button-variant-primary) .button:active,:host(.ic-button-variant-icon-primary.ic-button-loading) .button,:host(.ic-button-variant-icon-primary) .button:active{background-color:var(--ic-button-primary-background-pressed);--button-loading-inner-color:var(--ic-button-primary-text);--button-loading-outer-color:var(--ic-button-primary-background-pressed)}:host(.ic-button-variant-primary) ::slotted(a:active),:host(.ic-button-variant-icon-primary) ::slotted(a:active){background-color:var(--ic-button-primary-background-pressed) !important}:host(.ic-button-variant-primary.ic-button-disabled) .button,:host(.ic-button-variant-icon-primary.ic-button-disabled) .button{background:var(--ic-button-primary-background-disabled);color:var(--ic-button-primary-text-disabled)}:host(.ic-button-variant-primary.ic-button-disabled) ::slotted(a),:host(.ic-button-variant-icon-primary.ic-button-disabled) ::slotted(a){background:var(--ic-button-primary-background-disabled) !important;--ic-typography-color:var(--ic-button-primary-text-disabled) !important;color:var(--ic-button-primary-text-disabled) !important}:host(.ic-button-variant-primary.monochrome) .button,:host(.ic-button-variant-icon-primary.monochrome) .button{color:var(--ic-button-primary-text-monochrome);background-color:var(--ic-button-primary-background-monochrome)}:host(.ic-button-variant-primary.monochrome) ::slotted(a),:host(.ic-button-variant-icon-primary.monochrome) ::slotted(a){background-color:var(--ic-button-primary-background-monochrome) !important}:host(.ic-button-variant-primary.monochrome) .button:hover,:host(.ic-button-variant-icon-primary.monochrome) .button:hover{background-color:var(--ic-button-primary-background-hover-monochrome)}:host(.ic-button-variant-primary.monochrome) ::slotted(a:hover),:host(.ic-button-variant-icon-primary.monochrome) ::slotted(a:hover){background-color:var(\n    --ic-button-primary-background-hover-monochrome\n  ) !important}:host(.ic-button-variant-primary.ic-button-loading.monochrome) .button,:host(.ic-button-variant-primary.monochrome) .button:active,:host(.ic-button-variant-icon-primary.ic-button-loading.monochrome) .button,:host(.ic-button-variant-icon-primary.monochrome) .button:active{background-color:var(--ic-button-primary-background-pressed-monochrome);--button-loading-inner-color:var(--ic-button-primary-text-monochrome);--button-loading-outer-color:var(--ic-button-primary-background-monochrome)}:host(.ic-button-variant-primary.monochrome) ::slotted(a:active),:host(.ic-button-variant-icon-primary.monochrome) ::slotted(a:active){background-color:var(\n    --ic-button-primary-background-pressed-monochrome\n  ) !important}:host(.ic-button-variant-primary.ic-button-disabled.monochrome) .button,:host(.ic-button-variant-icon-primary.ic-button-disabled.monochrome) .button{background-color:var(--ic-button-primary-background-disabled-monochrome);color:var(--ic-button-primary-text-disabled-monochrome)}:host(.ic-button-variant-primary.ic-button-disabled.monochrome) ::slotted(a),:host(.ic-button-variant-icon-primary.ic-button-disabled.monochrome) ::slotted(a){background-color:var(\n    --ic-button-primary-background-disabled-monochrome\n  ) !important}:host(.ic-button-variant-secondary) .button,:host(.ic-button-variant-icon-secondary) .button{border:var(--ic-border-width) solid var(--ic-button-secondary-border);color:var(--ic-button-secondary-text)}:host(.ic-button-variant-secondary) ::slotted(a),:host(.ic-button-variant-icon-secondary) ::slotted(a){border:var(--ic-border-width) solid var(--ic-button-secondary-border) !important;color:var(--ic-button-secondary-text) !important;--ic-typography-color:var(--ic-button-secondary-text) !important}:host(.ic-button-variant-secondary) .button:hover,:host(.ic-button-variant-icon-secondary) .button:hover{background-color:var(--ic-button-secondary-background-hover-active);border-color:var(--ic-button-secondary-border-hover);color:var(--ic-button-secondary-text-hover-active)}:host(.ic-button-variant-secondary) ::slotted(a:hover),:host(.ic-button-variant-icon-secondary) ::slotted(a:hover){background-color:var(\n    --ic-button-secondary-background-hover-active\n  ) !important}:host(.ic-button-variant-secondary) .button:active,:host(.ic-button-variant-icon-secondary) .button:active{border-color:var(--ic-button-secondary-border-pressed);background-color:var(--ic-button-secondary-background-pressed-active);color:var(--ic-button-secondary-text-pressed-active)}:host(.ic-button-variant-secondary) ::slotted(a:active),:host(.ic-button-variant-icon-secondary) ::slotted(a:active){background-color:var(\n    --ic-button-secondary-background-pressed-active\n  ) !important}:host(.ic-button-variant-secondary.ic-button-loading) .button,:host(.ic-button-variant-icon-secondary.ic-button-loading) .button{border-color:var(--ic-button-secondary-border-pressed);background-color:var(\n    --loading-button-background,\n    var(--ic-button-secondary-background-pressed-active)\n  ) !important;color:var(--ic-button-secondary-text-pressed-active);--button-loading-inner-color:var(--ic-button-secondary-border-pressed);--button-loading-outer-color:var(\n    --ic-button-secondary-background-pressed-active\n  )}:host(.ic-button-variant-secondary.ic-button-disabled) .button,:host(.ic-button-variant-icon-secondary.ic-button-disabled) .button{border-color:var(--ic-button-secondary-border-disabled);color:var(--ic-button-secondary-text-disabled);background:none}:host(.ic-button-variant-secondary.ic-button-disabled) ::slotted(a),:host(.ic-button-variant-icon-secondary.ic-button-disabled) ::slotted(a){background:none !important}:host(.ic-button-variant-secondary.background) .button,:host(.ic-button-variant-icon-secondary.background) .button{background-color:var(--ic-button-secondary-background)}:host(.ic-button-variant-secondary.background) ::slotted(a),:host(.ic-button-variant-icon-secondary.background) ::slotted(a){background-color:var(--ic-button-secondary-background) !important}:host(.ic-button-variant-secondary.background) .button:hover,:host(.ic-button-variant-icon-secondary.background) .button:hover{background-image:var(--ic-button-secondary-background-non-transparent-hover)}:host(.ic-button-variant-secondary.background) ::slotted(a:hover),:host(.ic-button-variant-icon-secondary.background) ::slotted(a:hover){background-image:var(\n    --ic-button-secondary-background-non-transparent-hover\n  ) !important}:host(.ic-button-variant-secondary.background) .button:active,:host(.ic-button-variant-icon-secondary.background) .button:active{background-image:var(\n    --ic-button-secondary-background-non-transparent-active\n  )}:host(.ic-button-variant-secondary.background) ::slotted(a:active),:host(.ic-button-variant-icon-secondary.background) ::slotted(a:active){background-image:var(\n    --ic-button-secondary-background-non-transparent-active\n  ) !important}:host(.ic-button-variant-secondary.monochrome) .button,:host(.ic-button-variant-icon-secondary.monochrome) .button{background-color:none;border:var(--ic-border-width) solid\n    var(--ic-button-secondary-border-monochrome);color:var(--ic-button-secondary-text-monochrome)}:host(.ic-button-variant-secondary.monochrome) ::slotted(a),:host(.ic-button-variant-icon-secondary.monochrome) ::slotted(a){background-color:none !important}:host(.ic-button-variant-secondary.monochrome) .button:hover,:host(.ic-button-variant-icon-secondary.monochrome) .button:hover{background-color:var(--ic-button-secondary-background-hover-monochrome);border-color:var(--ic-button-secondary-border-hover-monochrome);color:var(--ic-button-secondary-text-hover-monochrome)}:host(.ic-button-variant-secondary.monochrome) ::slotted(a:hover),:host(.ic-button-variant-icon-secondary.monochrome) ::slotted(a:hover){background-color:var(\n    --ic-button-secondary-background-hover-monochrome\n  ) !important}:host(.ic-button-variant-secondary.monochrome) .button:active,:host(.ic-button-variant-icon-secondary.monochrome) .button:active{background-color:var(--ic-button-secondary-background-pressed-monochrome);border-color:var(--ic-button-secondary-border-pressed-monochrome);color:var(--ic-button-secondary-text-pressed-monochrome)}:host(.ic-button-variant-secondary.monochrome) ::slotted(a:active),:host(.ic-button-variant-icon-secondary.monochrome) ::slotted(a:active){background-color:var(\n    --ic-button-secondary-background-pressed-monochrome\n  ) !important}:host(.ic-button-variant-secondary.ic-button-loading.monochrome) .button,:host(.ic-button-variant-icon-secondary.ic-button-loading.monochrome) .button{background-color:var(\n    --ic-button-secondary-background-pressed-monochrome\n  ) !important;border-color:var(--ic-button-secondary-border-pressed-monochrome);color:var(--ic-button-secondary-text-pressed-monochrome);--button-loading-inner-color:var(\n    --ic-button-secondary-text-pressed-monochrome\n  );--button-loading-outer-color:var(\n    --ic-button-secondary-background-pressed-monochrome\n  )}:host(.ic-button-variant-secondary.ic-button-disabled.monochrome) .button,:host(.ic-button-variant-icon-secondary.ic-button-disabled.monochrome) .button{background:none;border-color:var(--ic-button-secondary-border-disabled-monochrome);color:var(--ic-button-secondary-text-disabled-monochrome)}:host(.ic-button-variant-secondary.ic-button-disabled.monochrome) ::slotted(a),:host(.ic-button-variant-icon-secondary.ic-button-disabled.monochrome) ::slotted(a){background:none !important}:host(.ic-button-variant-secondary.background.monochrome) .button,:host(.ic-button-variant-icon-secondary.background.monochrome) .button{background-color:var(--ic-button-secondary-background-monochrome)}:host(.ic-button-variant-secondary.background.monochrome) ::slotted(a),:host(.ic-button-variant-icon-secondary.background.monochrome) ::slotted(a){background-color:var(--ic-button-secondary-background-monochrome) !important}:host(.ic-button-variant-secondary.background.monochrome) .button:hover,:host(.ic-button-variant-icon-secondary.background.monochrome) .button:hover{background-image:var(\n    --ic-button-secondary-background-non-transparent-monochrome-hover\n  )}:host(.ic-button-variant-secondary.background.monochrome) ::slotted(a:hover),:host(.ic-button-variant-icon-secondary.background.monochrome) ::slotted(a:hover){background-image:var(\n    --ic-button-secondary-background-non-transparent-monochrome-hover\n  ) !important}:host(.ic-button-variant-secondary.background.monochrome) .button:active,:host(.ic-button-variant-icon-secondary.background.monochrome) .button:active{background-image:var(\n    --ic-button-secondary-background-non-transparent-monochrome-active\n  )}:host(.ic-button-variant-secondary.background.monochrome) ::slotted(a:active),:host(.ic-button-variant-icon-secondary.background.monochrome) ::slotted(a:active){background-image:var(\n    --ic-button-secondary-background-non-transparent-monochrome-active\n  ) !important}:host(.ic-button-variant-tertiary) .button,:host(.ic-button-variant-icon-tertiary) .button,:host(.ic-button-variant-tertiary) ::slotted(a),:host(.ic-button-variant-icon-tertiary) ::slotted(a){color:var(--ic-button-tertiary-text-active);--ic-typography-color:var(--ic-button-tertiary-text-active)}:host(.ic-button-variant-tertiary) .button:hover,:host(.ic-button-variant-icon-tertiary) .button:hover{background-color:var(--ic-button-tertiary-background-hover-active);color:var(--ic-button-tertiary-text-hover-active)}:host(.ic-button-variant-tertiary) ::slotted(a:hover),:host(.ic-button-variant-icon-tertiary) ::slotted(a:hover){background-color:var(\n    --ic-button-tertiary-background-hover-active\n  ) !important}:host(.ic-button-variant-tertiary) .button:active,:host(.ic-button-variant-tertiary.ic-button-loading) .button,:host(.ic-button-variant-icon-tertiary) .button:active,:host(.ic-button-variant-icon-tertiary.ic-button-loading) .button{background-color:var(--ic-button-tertiary-background-pressed-active);color:var(--ic-button-tertiary-text-pressed-active);--button-loading-inner-color:var(--ic-button-tertiary-text-pressed-active);--button-loading-outer-color:var(--ic-button-tertiary-background-pressed)}:host(.ic-button-variant-tertiary) ::slotted(a:active),:host(.ic-button-variant-icon-tertiary) ::slotted(a:active){background-color:var(\n    --ic-button-tertiary-background-pressed-active\n  ) !important}:host(.ic-button-variant-tertiary.ic-button-disabled) .button,:host(.ic-button-variant-icon-tertiary.ic-button-disabled) .button{color:var(--ic-button-tertiary-text-disabled);background:none}:host(.ic-button-variant-tertiary.ic-button-disabled) ::slotted(a),:host(.ic-button-variant-icon-tertiary.ic-button-disabled) ::slotted(a){background:none !important}:host(.ic-button-variant-tertiary.background) .button,:host(.ic-button-variant-icon-tertiary.background) .button{background-color:var(--ic-button-tertiary-background)}:host(.ic-button-variant-tertiary.background) ::slotted(a),:host(.ic-button-variant-icon-tertiary.background) ::slotted(a){background-color:var(--ic-button-tertiary-background) !important}:host(.ic-button-variant-tertiary.background) .button:hover,:host(.ic-button-variant-icon-tertiary.background) .button:hover{background-image:var(--ic-button-tertiary-background-non-transparent-hover)}:host(.ic-button-variant-tertiary.background) ::slotted(a:hover),:host(.ic-button-variant-icon-tertiary.background) ::slotted(a:hover){background-image:var(\n    --ic-button-tertiary-background-non-transparent-hover\n  ) !important}:host(.ic-button-variant-tertiary.background) .button:active,:host(.ic-button-variant-icon-tertiary.background) .button:active{background-image:var(--ic-button-tertiary-background-non-transparent-active)}:host(.ic-button-variant-tertiary.background) ::slotted(a:active),:host(.ic-button-variant-icon-tertiary.background) ::slotted(a:active){background-image:var(\n    --ic-button-tertiary-background-non-transparent-active\n  ) !important}:host(.ic-button-variant-tertiary.monochrome) .button,:host(.ic-button-variant-tertiary.monochrome) ::slotted(a),:host(.ic-button-variant-icon-tertiary.monochrome) .button,:host(.ic-button-variant-icon-tertiary.monochrome) ::slotted(a){color:var(--ic-button-tertiary-text-monochrome);--ic-typography-color:var(--ic-button-tertiary-text-monochrome)}:host(.ic-button-variant-tertiary.monochrome) .button:hover,:host(.ic-button-variant-icon-tertiary.monochrome) .button:hover{background-color:var(--ic-button-tertiary-background-hover-monochrome);color:var(--ic-button-tertiary-text-hover-monochrome)}:host(.ic-button-variant-tertiary.monochrome) ::slotted(a:hover),:host(.ic-button-variant-icon-tertiary.monochrome) ::slotted(a:hover){background-color:var(\n    --ic-button-tertiary-background-hover-monochrome\n  ) !important}:host(.ic-button-variant-tertiary.monochrome) .button:active,:host(.ic-button-variant-tertiary.ic-button-loading.monochrome) .button,:host(.ic-button-variant-icon-tertiary.monochrome) .button:active,:host(.ic-button-variant-icon-tertiary.ic-button-loading.monochrome) .button{background-color:var(--ic-button-tertiary-background-pressed-monochrome);color:var(--ic-button-tertiary-text-pressed-monochrome);--button-loading-inner-color:var(\n    --ic-button-tertiary-text-pressed-monochrome\n  );--button-loading-outer-color:var(\n    --ic-button-tertiary-background-pressed-monochrome\n  )}:host(.ic-button-variant-tertiary.monochrome) ::slotted(a:active),:host(.ic-button-variant-icon-tertiary.monochrome) ::slotted(a:active){background-color:var(\n    --ic-button-tertiary-background-pressed-monochrome\n  ) !important}:host(.ic-button-variant-tertiary.ic-button-disabled.monochrome) .button,:host(.ic-button-variant-icon-tertiary.ic-button-disabled.monochrome) .button{color:var(--ic-button-tertiary-text-disabled-monochrome);background:none}:host(.ic-button-variant-tertiary.ic-button-disabled.monochrome) ::slotted(a),:host(.ic-button-variant-icon-tertiary.ic-button-disabled.monochrome) ::slotted(a){background:none !important}:host(.ic-button-variant-tertiary.background.monochrome) .button,:host(.ic-button-variant-icon-tertiary.background.monochrome) .button{background-color:var(--ic-button-tertiary-background-monochrome)}:host(.ic-button-variant-tertiary.background.monochrome) ::slotted(a),:host(.ic-button-variant-icon-tertiary.background.monochrome) ::slotted(a){background-color:var(--ic-button-tertiary-background-monochrome) !important}:host(.ic-button-variant-tertiary.background.monochrome) .button:hover,:host(.ic-button-variant-icon-tertiary.background.monochrome) .button:hover{background-image:var(\n    --ic-button-tertiary-background-non-transparent-monochrome-hover\n  )}:host(.ic-button-variant-tertiary.background.monochrome) ::slotted(a:hover),:host(.ic-button-variant-icon-tertiary.background.monochrome) ::slotted(a:hover){background-image:var(\n    --ic-button-tertiary-background-non-transparent-monochrome-hover\n  ) !important}:host(.ic-button-variant-tertiary.background.monochrome) .button:active,:host(.ic-button-variant-icon-tertiary.background.monochrome) .button:active{background-image:var(\n    --ic-button-tertiary-background-non-transparent-monochrome-active\n  )}:host(.ic-button-variant-tertiary.background.monochrome) ::slotted(a:active),:host(.ic-button-variant-icon-tertiary.background.monochrome) ::slotted(a:active){background-image:var(\n    --ic-button-tertiary-background-non-transparent-monochrome-active\n  ) !important}:host(.ic-button-variant-destructive) .button,:host(.ic-button-variant-icon-destructive) .button{color:var(--ic-button-destructive-text);background-color:var(--ic-button-destructive-background);text-transform:uppercase}:host(.ic-button-variant-destructive) ::slotted(a),:host(.ic-button-variant-icon-destructive) ::slotted(a){color:var(--ic-button-destructive-text) !important;--ic-typography-color:var(--ic-button-destructive-text) !important;background-color:var(--ic-button-destructive-background) !important;text-transform:uppercase !important}:host(.ic-button-variant-destructive) .button:hover,:host(.ic-button-variant-icon-destructive) .button:hover{background-color:var(--ic-button-destructive-background-hover)}:host(.ic-button-variant-destructive) ::slotted(a:hover),:host(.ic-button-variant-icon-destructive) ::slotted(a:hover){background-color:var(--ic-button-destructive-background-hover) !important}:host(.ic-button-variant-destructive) .button:active,:host(.ic-button-variant-destructive.ic-button-loading) .button,:host(.ic-button-variant-icon-destructive.ic-button-loading) .button{color:var(--ic-button-primary-text);background-color:var(--ic-button-destructive-background-pressed);--button-loading-inner-color:var(--ic-button-primary-text);--button-loading-outer-color:var(--ic-button-destructive-background-pressed)}:host(.ic-button-variant-destructive) ::slotted(a:active),:host(.ic-button-variant-icon-destructive) ::slotted(a:active){background-color:var(--ic-button-destructive-background-pressed) !important}:host(.ic-button-variant-destructive.ic-button-disabled) .button,:host(.ic-button-variant-icon-destructive.ic-button-disabled) .button{background-color:var(--ic-button-destructive-background-disabled);color:var(--ic-button-destructive-text-disabled)}:host(.ic-button-variant-destructive.ic-button-disabled) ::slotted(a),:host(.ic-button-variant-icon-destructive.ic-button-disabled) ::slotted(a){background-color:var(--ic-button-destructive-background-disabled) !important}:host(.ic-button-variant-icon) .button{color:var(--ic-button-icon-color);background-color:var(--ic-button-icon-color-background);min-width:0;gap:var(--ic-space-xs)}:host(.ic-button-variant-icon) ::slotted(a){color:var(--ic-button-icon-color);background-color:var(--ic-button-icon-color-background) !important;min-width:0;gap:var(--ic-space-xs)}:host(.ic-button-variant-icon) .icon-container{width:var(--ic-space-lg) !important;height:var(--ic-space-lg) !important}:host(.ic-button-variant-icon) .button:hover{color:var(--ic-button-icon-color-hover);background-color:var(--ic-button-icon-color-background-hover)}:host(.ic-button-variant-icon) ::slotted(a:hover){color:var(--ic-button-icon-color-hover);background-color:var(--ic-button-icon-color-background-hover) !important}:host(.ic-button-variant-icon) .button:active:not(:focus),:host(.ic-button-variant-icon.ic-button-loading) .button{color:var(--ic-button-icon-color-active);background-color:var(--ic-button-icon-color-background-active)}:host(.ic-button-variant-icon) ::slotted(a:active:not(:focus)){color:var(--ic-button-icon-color-active);background-color:var(--ic-button-icon-color-background-active) !important}:host(.ic-button-variant-icon.ic-button-disabled) .button{color:var(--ic-color-icon-disabled-mid);background:none}:host(.ic-button-variant-icon.ic-button-disabled) ::slotted(a){color:var(--ic-color-icon-disabled-mid);background:none !important}:host(.ic-button-variant-icon-primary) .button,:host(.ic-button-variant-icon-primary) ::slotted(a){min-width:0;gap:var(--ic-space-xs);color:var(--ic-button-primary-icon)}:host(.ic-button-variant-icon-primary.monochrome) .button,:host(.ic-button-variant-primary.monochrome:not(.ic-button-disabled)) ::slotted(svg){color:var(--ic-button-primary-icon-monochrome)}:host(.ic-button-variant-icon-primary) .icon-container{width:var(--ic-space-lg) !important;height:var(--ic-space-lg) !important;margin:0;pointer-events:none}:host(.ic-button-variant-icon.monochrome) ::slotted(a),:host(.ic-button-variant-icon.monochrome) ::slotted(svg){color:var(--ic-button-icon-monochrome)}:host(.ic-button-variant-icon-secondary) .button,:host(.ic-button-variant-icon-secondary) ::slotted(a){min-width:0;gap:var(--ic-space-xs)}:host(.ic-button-variant-icon-secondary) .icon-container{width:var(--ic-space-lg) !important;height:var(--ic-space-lg) !important;margin:0;pointer-events:none}:host(.ic-button-variant-icon-tertiary) .button,:host(.ic-button-variant-icon-tertiary) ::slotted(a){min-width:0;gap:var(--ic-space-xs)}:host(.ic-button-variant-icon-tertiary) .icon-container{width:var(--ic-space-lg) !important;height:var(--ic-space-lg) !important;margin:0;pointer-events:none}:host(.ic-button-variant-icon-destructive) .button,:host(.ic-button-variant-icon-destructive) ::slotted(a){min-width:0;gap:var(--ic-space-xs)}:host(.ic-button-variant-icon-destructive) .icon-container{width:var(--ic-space-lg) !important;height:var(--ic-space-lg) !important;margin:0;pointer-events:none}:host(.ic-button-size-medium) .button{height:var(--height, 2.5rem);padding:var(--ic-space-xs) var(--ic-space-md)}:host(.ic-button-size-medium) ::slotted(a){height:var(--height, 2.5rem) !important;padding:var(--ic-space-xs) var(--ic-space-md) !important}:host(.ic-button-size-small) .button{height:var(--height, var(--ic-space-xl));padding:var(--ic-space-xxs) var(--ic-space-md)}:host(.ic-button-size-small) ::slotted(a){height:var(--height, var(--ic-space-xl)) !important;padding:var(--ic-space-xxs) var(--ic-space-md) !important}:host(.ic-button-size-large) .button{height:var(--height, var(--ic-space-xxl));padding:var(--ic-space-sm) var(--ic-space-md)}:host(.ic-button-size-large) ::slotted(a){height:var(--height, var(--ic-space-xxl)) !important;padding:var(--ic-space-sm) var(--ic-space-md) !important}:host(.ic-button-size-medium.ic-button-variant-icon) .button,:host(.ic-button-size-medium.ic-button-variant-icon-primary) .button,:host(.ic-button-size-medium.ic-button-variant-icon-secondary) .button,:host(.ic-button-size-medium.ic-button-variant-icon-tertiary) .button,:host(.ic-button-size-medium.ic-button-variant-icon-destructive) .button{height:var(--height, var(--ic-space-xl));width:var(--ic-space-xl);padding:0.375rem}:host(.ic-button-size-medium.ic-button-variant-icon-primary) ::slotted(a),:host(.ic-button-size-medium.ic-button-variant-icon-secondary) ::slotted(a),:host(.ic-button-size-medium.ic-button-variant-icon-tertiary) ::slotted(a),:host(.ic-button-size-medium.ic-button-variant-icon-destructive) ::slotted(a){height:var(--height, var(--ic-space-xl)) !important;width:var(--ic-space-xl) !important;padding:0.375rem !important}:host(.ic-button-size-small.ic-button-variant-icon) .button,:host(.ic-button-size-small.ic-button-variant-icon-primary) .button,:host(.ic-button-size-small.ic-button-variant-icon-secondary) .button,:host(.ic-button-size-small.ic-button-variant-icon-tertiary) .button,:host(.ic-button-size-small.ic-button-variant-icon-destructive) .button{height:var(--height, var(--ic-space-lg));width:var(--ic-space-lg);padding:var(--ic-space-xxs)}:host(.ic-button-size-small.ic-button-variant-icon-primary) ::slotted(a),:host(.ic-button-size-small.ic-button-variant-icon-secondary) ::slotted(a),:host(.ic-button-size-small.ic-button-variant-icon-tertiary) ::slotted(a),:host(.ic-button-size-small.ic-button-variant-icon-destructive) ::slotted(a),:host(.ic-button-size-small.ic-button-variant-icon) ::slotted(a){height:var(--height, var(--ic-space-lg)) !important;width:var(--ic-space-lg) !important;padding:var(--ic-space-xxs) !important}:host(.ic-button-size-large.ic-button-variant-icon) .button,:host(.ic-button-size-large.ic-button-variant-icon-primary) .button,:host(.ic-button-size-large.ic-button-variant-icon-secondary) .button,:host(.ic-button-size-large.ic-button-variant-icon-tertiary) .button,:host(.ic-button-size-large.ic-button-variant-icon-destructive) .button{height:var(--height, 2.5rem);width:2.5rem;padding:var(--ic-space-xs)}:host(.ic-button-size-large.ic-button-variant-icon-destructive) .button,:host(.ic-button-size-large.ic-button-variant-icon-primary) ::slotted(a),:host(.ic-button-size-large.ic-button-variant-icon-secondary) ::slotted(a),:host(.ic-button-size-large.ic-button-variant-icon-tertiary) ::slotted(a),:host(.ic-button-size-large.ic-button-variant-icon-destructive) ::slotted(a),:host(.ic-button-size-large.ic-button-variant-icon) ::slotted(a){height:var(--height, 2.5rem) !important;width:2.5rem !important;padding:var(--ic-space-xs) !important}:host(.ic-button-full-width),:host(.ic-button-full-width) .button{width:100%}:host(.ic-button-full-width) ::slotted(a){width:100% !important}div.loading-container{position:relative;align-items:center;width:100%}ic-loading-indicator{--inner-color:var(--button-loading-inner-color);--outer-color:var(--button-loading-outer-color), transparent}@keyframes loading-animation{0%{width:0%;left:0%}25%{width:0%;left:0%;opacity:0}50%{width:100%;left:0%;opacity:1}75%{width:0%;left:100%}100%{width:0%;left:100%;opacity:0}}div.icon-container{box-sizing:border-box;width:var(--ic-space-lg);height:var(--ic-space-lg);display:flex;justify-content:center;align-items:center;margin-right:var(--ic-space-xs)}div.right-icon{margin-right:auto;margin-left:var(--ic-space-xs)}:host(.ic-button-full-width) .right-icon{margin-right:var(--ic-space-xs)}::slotted(:not(ic-badge)){width:var(--icon-width) !important;height:var(--icon-height) !important;fill:currentcolor !important;pointer-events:none}:host(.ic-button-variant-icon) .button .icon-container{margin:0;pointer-events:none}:host(.search-submit-button) ::slotted(svg){--icon-height:1.25rem;--icon-width:1.25rem;color:var(--ic-atoms-input-search-button)}:host(.search-submit-button-small) ::slotted(svg){--icon-height:1rem;--icon-width:1rem;color:var(--ic-atoms-input-search-button)}:host(.search-submit-button) .button:focus{box-shadow:none}:host(.search-submit-button) .button:not(:active):focus{box-shadow:none;background-color:var(--ic-action-default-bg-hover)}:host(.search-submit-button) .button:not(:active):focus ::slotted(svg){color:var(--ic-button-primary-text)}:host(.search-submit-button){display:flex;align-items:center;margin:0 var(--ic-space-xxs)}:host(.ic-button-variant-icon) .button,:host(.ic-button-variant-icon) ::slotted(a){background-color:inherit;min-width:0;gap:var(--ic-space-xs)}:host(.button-variant-icon) .button,:host(.button-variant-icon) ::slotted(a){color:var(--button-default);min-width:0;gap:var(--ic-space-xs)}:host(.button-variant-icon) .icon-container{width:var(--ic-space-lg) !important;height:var(--ic-space-lg) !important}:host(.button-variant-icon) .button:hover,:host(.button-variant-icon) ::slotted(a:hover){background-color:var(--button-default-background-hover);color:var(--button-default-hover)}:host(.button-variant-icon) .button:active:not(:focus),:host(.button-variant-icon) ::slotted(a:active:not(:focus)),:host(.button-variant-icon.loading) .button{background-color:var(--button-default-background-active);color:var(--button-default-active)}:host(.button-variant-icon.disabled) .button,:host(.button-variant-icon.disabled) ::slotted(a){color:var(--ic-color-icon-disabled-mid);background:none}:host(.clear-button){color:var(--ic-atoms-input-clear-button);margin:0 var(--ic-space-xxs)}:host(.clear-button) .button:focus,:host(.calendar-button) .button:focus,:host(.clock-button) .button:focus{box-shadow:none}:host(.clear-button) .button,:host(.clear-button) ::slotted(a){background-color:inherit;color:var(--ic-atoms-input-clear-button)}:host(.clear-button) .button:hover,:host(.clear-button) ::slotted(a:hover){color:var(--ic-atoms-input-clear-button)}:host(.clear-button) .button:not(:active):focus ::slotted(svg){background-color:var(--ic-atoms-input-clear-button-focus-inner);color:var(--ic-button-primary-text);}:host(.menu-close-button) ::slotted(svg){--icon-height:0.875rem;--icon-width:0.875rem;color:var(--ic-top-navigation-icon-active)}:host(.popout-menu-button) .button{height:var(--height);justify-content:left;border-radius:0;white-space:pre-line;text-align:start}:host(.popout-menu-button) div.icon-container{flex:none}:host(.popout-menu-button) .button:focus{box-shadow:var(--ic-border-focus-inset);border-radius:var(--ic-border-radius-inset)}.ic-button-describedby{display:none}:host .ic-tooltip{display:block}:host .arrow-dropdown{margin-top:auto}:host .dropdown-expanded{transform:rotate(180deg);margin-bottom:var(--ic-space-xxxs)}:host(.dropdown-no-icon) .button{padding-right:var(--ic-space-xs)}slot[name=\"router-item\"]::slotted(a){pointer-events:all}::slotted(a){font-size:0.875rem !important;border:none !important;vertical-align:middle !important}:host(#menu-button.ic-theme-dark){--ic-button-secondary-background-hover-monochrome:var(\n    --ic-action-dark-bg-hover\n  );--ic-button-secondary-background-pressed-monochrome:var(\n    --ic-action-dark-bg-pressed\n  );--ic-button-secondary-text-hover-monochrome:var(\n    --ic-action-monochrome-hover-dark\n  );--ic-button-secondary-text-pressed-monochrome:var(\n    --ic-action-monochrome-pressed-dark\n  );--ic-button-secondary-border-hover-monochrome:var(\n    --ic-color-border-neutral-hover-dark\n  );--ic-button-secondary-border-pressed-monochrome:var(\n    --ic-color-border-neutral-pressed-dark\n  )}:host(#menu-button.ic-theme-light){--ic-button-secondary-background-hover-monochrome:var(\n    --ic-action-light-bg-hover\n  );--ic-button-secondary-background-pressed-monochrome:var(\n    --ic-action-light-bg-pressed\n  );--ic-button-secondary-text-hover-monochrome:var(\n    --ic-action-monochrome-hover\n  );--ic-button-secondary-text-pressed-monochrome:var(\n    --ic-action-monochrome-pressed\n  );--ic-button-secondary-border-hover-monochrome:var(\n    --ic-color-border-neutral-hover-light\n  );--ic-button-secondary-border-pressed-monochrome:var(\n    --ic-color-border-neutral-default\n  )}@media (forced-colors: active){.button,::slotted(a){border:0.125rem solid transparent !important}.search-submit-button ::slotted(a),.ic-button-variant-icon ::slotted(a),.clear-button ::slotted(a),.search-submit-button ::slotted(svg),.ic-button-variant-icon ::slotted(svg),.clear-button ::slotted(svg){color:HighlightText}:host(.ic-button-variant-icon.monochrome) ::slotted(a),:host(.ic-button-variant-icon.monochrome) ::slotted(svg){color:white}:host(.clear-button) .button:not(:active):focus ::slotted(svg){color:white !important;background-color:inherit}:host(.ic-button-variant-primary:not(.ic-button-disabled)) ::slotted(svg){color:currentcolor !important}}:host(.flip) ::slotted(svg){transform:scaleX(-1)}";
const IcButtonStyle0 = icButtonCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let buttonIds = 0;
const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icBlur = createEvent(this, "icBlur", 7);
        this.icFileSelection = createEvent(this, "icFileSelection", 7);
        this.icFocus = createEvent(this, "icFocus", 7);
        this.buttonIdNum = buttonIds++;
        this.hasTooltip = false;
        this.inheritedAttributes = {};
        this.describedbyEl = null;
        this.mutationObserver = null;
        this.hostMutationObserver = null;
        this.ariaLabel = "";
        this.title = "";
        /**
         * If `fileUpload` is set to `true`, this is the accepted list of file types.
         */
        this.accept = "*";
        /**
         * If `true`, the button will be in disabled state.
         */
        this.disabled = false;
        /**
         * If `true`, the ic-tooltip which is shown for icon variant will be disabled. Title or aria-label must be set if this prop is not applied.
         */
        this.disableTooltip = false;
        /**
         * If `true`, the user can save the linked URL instead of navigating to it.
         */
        this.download = false;
        /**
         * If `true`, the button will show a dropdown icon.
         */
        this.dropdown = false;
        /**
         * If `true`, the aria-expanded value will be set to true. This is only applied if the dropdown prop is also true.
         */
        this.dropdownExpanded = false;
        /**
         * If `true`, when the button is clicked the native file explorer will be launched.
         */
        this.fileUpload = false;
        /**
         * The name of the control for the file input, which is submitted with the form data.
         */
        this.fileInputName = `ic-button-file-upload-input-${buttonIds++}`;
        /**
         * If `true`, the button will fill the width of the container.
         */
        this.fullWidth = false;
        /**
         * If `true`, the button will be in loading state.
         */
        this.loading = false;
        /**
         * If `true`, the button will display as monochromatic in either `light` or `dark` theme.
         */
        this.monochrome = false;
        /**
         * If `fileUpload` is set to `true`, this boolean determines whether multiple files are accepted.
         */
        this.multiple = false;
        /**
         * The size of the button to be displayed.
         */
        this.size = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * Setting to `true` can help in situations where tooltip content is clipped by a parent element.
         */
        this.tooltipFixedPositioning = false;
        /**
         * The position of the tooltip in relation to the button.
         */
        this.tooltipPlacement = "bottom";
        /**
         * If `true`, the secondary & tertiary variants of button will have a transparent background when not hovered, pressed or loading.
         */
        this.transparentBackground = true;
        /**
         * The type of the button.
         */
        this.type = "button";
        /**
         * The variant of the button to be displayed.
         */
        this.variant = "primary";
        this.getSlottedIcon = (position) => this.el.querySelector(`[slot="${position}-icon"]`);
        this.handleClick = () => {
            if ((this.el.type === "submit" || this.el.type === "reset") &&
                !this.hasRouterSlot() &&
                (this.form || !!this.el.closest("FORM"))) {
                const form = this.form
                    ? document.querySelector(`form[id=${this.form}]`)
                    : this.el.closest("FORM");
                handleHiddenFormButtonClick(form, this.el);
            }
        };
        this.handleKeyDown = (ev) => {
            if (ev.key === "Escape" && this.hasTooltip) {
                this.closeButtonTooltip(ev);
            }
        };
        this.onFocus = () => {
            this.icFocus.emit();
        };
        this.onBlur = () => {
            this.icBlur.emit();
        };
        /**
         * Creates/updates clone of aria-describedby element node tree in shadow dom
         * Required due to ids being scoped to the shadow dom
         */
        this.updateAriaDescribedbyClone = () => {
            var _a, _b;
            if (this.describedbyNode) {
                const wrapper = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#describedby-wrapper");
                if (!wrapper) {
                    (_b = this.el.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(Object.assign(document.createElement("div"), {
                        id: "describedby-wrapper",
                        className: "ic-button-describedby",
                    }));
                }
                while (wrapper === null || wrapper === void 0 ? void 0 : wrapper.firstChild)
                    wrapper.firstChild.remove();
                wrapper === null || wrapper === void 0 ? void 0 : wrapper.appendChild(this.describedbyNode);
            }
        };
        /**
         * Triggered when light dom aria-describedby element updates
         */
        this.mutationCallback = () => {
            var _a;
            if (this.describedbyEl)
                this.describedbyNode = (_a = this.describedbyEl) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
        };
        /**
         * Triggered when attributes of host element change
         * @param mutationList the list of changes made to the host element
         */
        this.hostMutationCallback = (mutationList) => {
            let forceComponentUpdate = false;
            mutationList.forEach(({ attributeName }) => {
                if (attributeName) {
                    const attribute = this.el.getAttribute(attributeName);
                    if (attribute) {
                        if (attributeName === "title")
                            this.title = attribute;
                        else if (attributeName === "aria-label")
                            this.ariaLabel = attribute;
                        if (IC_INHERITED_ARIA.includes(attributeName)) {
                            this.inheritedAttributes[attributeName] = attribute;
                            forceComponentUpdate = true;
                        }
                    }
                }
            });
            if (forceComponentUpdate) {
                forceUpdate(this);
            }
        };
        this.setHasTooltip = () => {
            this.hasTooltip =
                !this.disableTooltip && (!!this.title || !!this.isIconVariant());
        };
        this.isIconVariant = () => this.variant.startsWith("icon");
        this.arrangeRouterItem = () => {
            var _a;
            const setStyles = (element, styles) => {
                Object.entries(styles).forEach(([key, value]) => {
                    element.style.setProperty(key, value);
                });
            };
            if (this.routerSlot) {
                const icTypography = document.createElement("ic-typography");
                setStyles(icTypography, {
                    "font-family": "var(--ic-font-body-family)",
                    "font-size": "0.875rem",
                    "font-weight": "600",
                });
                setStyles(this.routerSlot, {
                    gap: "0",
                });
                const icon = this.routerSlot.querySelector("svg");
                const iconSlot = icon === null || icon === void 0 ? void 0 : icon.getAttribute("slot");
                const iconWrapper = document.createElement("div");
                if (icon) {
                    setStyles(icon, {
                        fill: "currentcolor",
                    });
                    if (iconSlot === "top-icon") {
                        setStyles(this.routerSlot, {
                            display: "flex",
                            "flex-direction": "column",
                            "--height": "fit-content",
                        });
                    }
                    else if (iconSlot) {
                        const marginPlacement = iconSlot === "left-icon" ? "right" : "left";
                        setStyles(iconWrapper, {
                            [`margin-${marginPlacement}`]: "var(--ic-space-xs)",
                        });
                    }
                    iconWrapper.append(icon);
                }
                const badge = this.routerSlot.querySelector("ic-badge");
                const label = (_a = this.routerSlot.textContent) === null || _a === void 0 ? void 0 : _a.trim();
                if (badge)
                    iconWrapper.append(badge);
                if (label)
                    icTypography.textContent = label;
                this.routerSlot.textContent = "";
                if (iconSlot === "right-icon") {
                    this.routerSlot.append(icTypography);
                    this.routerSlot.append(iconWrapper);
                }
                else {
                    this.routerSlot.append(iconWrapper);
                    this.routerSlot.append(icTypography);
                }
            }
        };
    }
    watchDescribedbyNodeHandler() {
        this.updateAriaDescribedbyClone();
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    watchVariantHandler(newVariant) {
        if (newVariant === "icon")
            this.variant = "icon-tertiary";
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this.hostMutationObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
    componentWillUpdate() {
        if (this.loading) {
            this.el.style.setProperty("--min-width", `${this.el.getBoundingClientRect().width}px`);
        }
        this.setHasTooltip();
    }
    componentWillLoad() {
        const _a = inheritAttributes(this.el, [...IC_INHERITED_ARIA, "title"]), { title, "aria-label": ariaLabel } = _a, restInheritedAttributes = __rest(_a, ["title", "aria-label"]);
        this.title = title;
        this.ariaLabel = ariaLabel;
        this.inheritedAttributes = restInheritedAttributes;
        removeDisabledFalse(this.disabled, this.el);
        this.el.setAttribute("exportparts", "button");
        this.id = this.el.id || null;
        this.setHasTooltip();
        if (!this.hasTooltip) {
            const describedById = this.inheritedAttributes["aria-describedby"];
            if (describedById) {
                this.describedById = describedById;
                const el = document.querySelector(`#${describedById}`);
                if (el) {
                    this.describedbyEl = el;
                    this.describedbyNode = el.cloneNode(true);
                }
            }
        }
        if (this.variant === "icon") {
            this.variant = "icon-tertiary";
        }
    }
    componentDidLoad() {
        this.updateTheme();
        if (typeof MutationObserver !== "undefined") {
            if (this.describedbyEl && this.describedById) {
                this.mutationObserver = new MutationObserver(this.mutationCallback);
                this.mutationObserver.observe(this.describedbyEl, {
                    characterData: true,
                    childList: true,
                    subtree: true,
                });
            }
            this.hostMutationObserver = new MutationObserver(this.hostMutationCallback);
            this.hostMutationObserver.observe(this.el, {
                attributes: true,
            });
            if (this.hasRouterSlot())
                this.arrangeRouterItem();
        }
        this.updateAriaDescribedbyClone();
    }
    componentWillRender() {
        const iconEl = this.getSlottedIcon("left") || this.getSlottedIcon("right");
        iconEl === null || iconEl === void 0 ? void 0 : iconEl.setAttribute("viewBox", "0 0 24 24");
    }
    handleHostClick(event) {
        if (!this.hasRouterSlot()) {
            if (this.fileUpload) {
                renderFileHiddenInput(this.icFileSelection, this.el, !!this.multiple, !!this.disabled, this.accept, this.fileInputName, this.selectedFiles);
            }
            if (this.disabled || this.loading) {
                event.stopImmediatePropagation();
            }
            if (this.dropdown) {
                this.dropdownExpanded = !this.dropdownExpanded;
            }
        }
    }
    brandChangeHandler({ detail }) {
        this.updateTheme(detail.mode);
    }
    /**
     * Sets focus on the native `button`.
     */
    async setFocus() {
        var _a;
        (_a = this.buttonEl) === null || _a === void 0 ? void 0 : _a.focus();
    }
    async closeButtonTooltip(ev) {
        var _a;
        const tooltip = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("ic-tooltip");
        if (tooltip && (await tooltip.isTooltipVisible())) {
            tooltip.displayTooltip(false);
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }
    }
    hasRouterSlot() {
        this.routerSlot = this.el.querySelector('[slot="router-item"]');
        if (this.routerSlot) {
            this.routerSlot.ariaLabel = this.routerSlot.textContent;
        }
        return !!this.routerSlot;
    }
    updateTheme(mode = null) {
        const foregroundColor = getBrandFromContext(this.el, mode);
        if (foregroundColor !== IcBrandForegroundEnum.Default) {
            this.theme =
                foregroundColor === IcBrandForegroundEnum.Light
                    ? IcBrandForegroundEnum.Dark
                    : IcBrandForegroundEnum.Light;
            this.monochrome = true;
        }
    }
    render() {
        const { ariaControlsId, ariaLabel, ariaOwnsId, buttonIdNum, describedById, disabled, download, dropdown, dropdownExpanded, form, formaction, formenctype, formmethod, formnovalidate, formtarget, fullWidth, handleClick, handleKeyDown, hasTooltip, href, hreflang, id, inheritedAttributes, isIconVariant, loading, monochrome, onBlur, onFocus, referrerpolicy, rel, size, target, theme, title, tooltipFixedPositioning, tooltipPlacement, transparentBackground, type, variant, } = this;
        const TagType = href ? "a" : "button";
        const buttonAttrs = TagType === "button"
            ? {
                type,
                disabled,
                form,
                formaction,
                formenctype,
                formmethod,
                formnovalidate,
                formtarget,
            }
            : {
                download: download !== false ? download : null,
                href,
                rel,
                target,
                referrerpolicy,
                hreflang,
            };
        const buttonId = hasTooltip
            ? `ic-button-with-tooltip-${id || buttonIdNum}`
            : undefined;
        const describedby = !hasTooltip ? describedById : `ic-tooltip-${buttonId}`;
        const hasLeftIcon = !!this.getSlottedIcon("left");
        const hasRightIcon = !!this.getSlottedIcon("right");
        const ButtonContent = () => this.hasRouterSlot() ? (h("slot", { name: "router-item" })) : (h(TagType, Object.assign({ class: "button", tabindex: 0, "aria-disabled": loading || disabled ? "true" : null, "aria-label": loading ? "Loading" : ariaLabel, "aria-expanded": dropdown && `${dropdownExpanded}` }, buttonAttrs, inheritedAttributes, { onFocus: onFocus, onBlur: onBlur, ref: (el) => (this.buttonEl = el), "aria-describedby": describedby, part: "button" }), loading ? (h("div", { class: "loading-container" }, h("ic-loading-indicator", { type: "linear", monochrome: monochrome, theme: theme }))) : (h(Fragment, null, (hasLeftIcon ||
            (!!this.getSlottedIcon("top") && !hasRightIcon)) && (h("div", { class: "icon-container" }, h("slot", { name: `${hasLeftIcon ? "left" : "top"}-icon` }))), h("slot", null), !dropdown
            ? hasRightIcon && (h("div", { class: { "icon-container": true, "right-icon": true } }, h("slot", { name: "right-icon" })))
            : variant !== "icon" &&
                variant !== "destructive" && (h("span", { class: dropdownExpanded
                    ? "dropdown-expanded"
                    : "arrow-dropdown", innerHTML: arrowDropdown }))))));
        return (h(Host, { key: '4e15c7ddb5f7d220f52848c36fc9b26932daeb8e', class: {
                "ic-button-disabled": disabled && !loading,
                "ic-button-full-width": fullWidth,
                "ic-button-loading": loading,
                [`ic-button-size-${size}`]: true,
                [`ic-button-variant-${variant}`]: true,
                [`ic-theme-${theme}`]: theme !== "inherit",
                background: (variant === "secondary" || variant === "tertiary") &&
                    !transparentBackground &&
                    !disabled,
                "dropdown-no-icon": dropdown &&
                    !isSlotUsed(this.el, "icon") &&
                    !isSlotUsed(this.el, "left-icon"),
                monochrome,
                "top-icon": isSlotUsed(this.el, "top-icon"),
                "with-badge": isSlotUsed(this.el, "badge"),
            }, onClick: handleClick, onKeyDown: handleKeyDown, "aria-owns": ariaOwnsId, "aria-controls": ariaControlsId, "aria-expanded": dropdown && `${dropdownExpanded}` }, hasTooltip && (h("ic-tooltip", { key: 'a6b3305c993a950f41b2cc44812a35239b4ef717', id: describedby, label: title || ariaLabel, target: buttonId, placement: tooltipPlacement, fixedPositioning: tooltipFixedPositioning, silent: isIconVariant() && !!ariaLabel }, h(ButtonContent, { key: '146f8c894991641b88313d8947c5ac4e1d204049' }))), isSlotUsed(this.el, "badge") && h("slot", { key: '4aede0d2f30748690130dfba00612b3adc859c10', name: "badge" }), !hasTooltip && h(ButtonContent, { key: 'bf1fd18f9c47ea1199babace3584855499a2776c' })));
    }
    static get delegatesFocus() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "describedbyNode": ["watchDescribedbyNodeHandler"],
        "disabled": ["watchDisabledHandler"],
        "variant": ["watchVariantHandler"]
    }; }
};
Button.style = IcButtonStyle0;

const icLoadingIndicatorCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;--linear-border-radius:0.25rem;--inner-color:var(--ic-loading-indicator-inner-color);--outer-color:var(--ic-loading-indicator-outer-color);--label-color:var(--ic-loading-indicator-label-color);--margin:none;--linear-line-height:var(--ic-space-xs)}:host(.ic-loading-indicator-monochrome){--inner-color:var(--ic-loading-indicator-inner-color-monochrome);--outer-color:var(--ic-loading-indicator-outer-color-monochrome);--label-color:var(--ic-loading-indicator-label-color-monochrome)}.ic-loading-container{display:flex;flex-direction:column;justify-content:center;align-items:center}:host(.ic-loading-indicator-size-small){--circular-diameter:2.5rem;--linear-line-height:var(--ic-space-xxs)}:host(.ic-loading-indicator-size-medium){--circular-diameter:5rem}:host(.ic-loading-indicator-size-large){--circular-diameter:7.5rem}:host(.ic-loading-indicator-size-icon){display:inline-block;--margin:var(--ic-space-xxxs);--circular-diameter:1.25rem}:host(.ic-loading-indicator-label){--margin:0 0 var(--ic-space-xs) 0}.ic-loading-label{--ic-typography-color:var(--label-color);margin-left:var(--label-margin-left)}.ic-loading-circular-outer{height:var(--circular-diameter);width:var(--circular-diameter)}.ic-loading-circular-outer.indeterminate{animation:circular-animation 1s linear;animation-iteration-count:infinite}@keyframes circular-animation{100%{transform:rotate(360deg)}}.ic-loading-circular-outer,.ic-loading-linear-outer{margin:var(--margin)}.ic-loading-linear-outer{background-color:var(--outer-color);height:var(--linear-line-height);width:100%;border-radius:var(--linear-border-radius);overflow:hidden}.ic-loading-circular-outer[aria-valuenow=\"0\"] .ic-loading-circular-inner,.ic-loading-linear-outer[aria-valuenow=\"0\"] .ic-loading-linear-inner{--inner-color:var(--outer-color)}.ic-loading-linear-inner{position:relative;height:100%;background-color:var(--inner-color);border-radius:var(--linear-border-radius)}.indeterminate>.ic-loading-linear-inner{animation:linear-animation 2s infinite}.determinate>.ic-loading-linear-inner{transition:width 0.5s;width:var(--linear-width)}:host(.ic-loading-indicator-full-width){--linear-border-radius:none}@keyframes linear-animation{0%{width:0%;left:-1%}25%{width:0%;left:-1%}50%{width:101%;left:-1%}75%{width:0%;left:101%}100%{width:0%;left:101%}}.ic-loading-circular-svg{position:relative;width:100%;height:100%;transform:rotate(-90deg)}.ic-loading-circular-svg circle{width:100%;height:100%;fill:none;stroke:var(--compact-step-outer-color, var(--outer-color));stroke-width:var(--circular-line-width);stroke-linecap:round}.ic-loading-circular-svg circle:nth-child(2){--circular-indeterminate:calc(\n    (0.25 * var(--stroke-dasharray)) - var(--stroke-dasharray)\n  );stroke-dasharray:var(--stroke-dasharray), var(--stroke-dasharray);stroke-dashoffset:var(--stroke-dashoffset, var(--circular-indeterminate));stroke:var(--compact-step-inner-color, var(--inner-color))}.inner-label{height:100%;display:grid}.inner-label .ic-loading-circular-svg,.inner-text{grid-column:1;grid-row:1}:host(.not-required.compact-step-progress-indicator) .ic-loading-circular-svg circle:nth-child(2){stroke:var(--ic-architectural-300)}.inner-text{display:flex;align-items:center;justify-content:center;width:var(--ic-space-lg);height:inherit;overflow:hidden;margin:auto;--ic-typography-color:var(\n    --ic-step-indicator-text-current,\n    var(--ic-status-info-default)\n  )}:host(.not-required.compact-step-progress-indicator) .inner-text{--ic-typography-color:var(--ic-step-indicator-text-disabled)}:host(.ic-loading-indicator-light.not-required.compact-step-progress-indicator) .inner-text{--ic-typography-color:var(--ic-architectural-400)}@media (forced-colors: active){.indeterminate>.ic-loading-circular-inner{forced-color-adjust:none}.ic-loading-linear-outer{border:var(--ic-border-hc)}.ic-loading-linear-inner{background-color:canvastext}.ic-loading-circular-svg circle{stroke:Background}.ic-loading-circular-svg circle:nth-child(2){stroke:canvastext}:host(.not-required.compact-step-progress-indicator) .ic-loading-circular-svg circle:nth-child(2){stroke:GrayText}}";
const IcLoadingIndicatorStyle0 = icLoadingIndicatorCss;

const LOADING_INDICATOR_WIDTHS = {
    large: 120,
    medium: 80,
    small: 40,
    icon: 20,
};
const LoadingIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.labelList = [];
        this.circularDiameter = 0;
        this.circularLineWidth = 0;
        this.circularDimensions = {
            x: 0,
            y: 0,
            r: 0,
        };
        this.clipInnerElement = false;
        /**
         * The description that will be set as the aria-label of the loading indicator when not using a visible label.
         */
        this.description = "Loading";
        /**
         * If `true`, when linear, the full-width variant (i.e. without a border radius) will be displayed.
         */
        this.fullWidth = false;
        /**
         * The time in milliseconds before the label changes.
         */
        this.labelDuration = 8000;
        /**
         * The maximum value that the progress value can take.
         * Used to calculate the proportional width of the progress bar.
         */
        this.max = 100;
        /**
         * The minimum value that the progress value can take.
         * Used to calculate the proportional width of the progress bar.
         */
        this.min = 0;
        /**
         * If `true`, the element will display as black and white.
         */
        this.monochrome = false;
        /**
         * The size of the loading indicator.
         */
        this.size = "medium";
        /**
         * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        /**
         * The type of indicator, either linear or circular.
         */
        this.type = "circular";
        this.getLabel = (labelIndex) => new Promise(() => {
            this.interval = setInterval(() => {
                if (labelIndex < this.labelList.length - 1) {
                    labelIndex++;
                }
                else {
                    labelIndex = 0;
                }
                this.indicatorLabel = this.labelList[labelIndex];
            }, this.labelDuration);
        });
        this.getLabelVariant = () => {
            const width = this.type === "circular" ? this.calculateWidth() : 0;
            if (this.size === "small" || (width && width < 60)) {
                return "label";
            }
            else if (this.size === "large" || width >= 120) {
                return "h2";
            }
            return "h4";
        };
        this.calculateWidth = () => {
            var _a, _b, _c;
            if ((_a = this.outerElement) === null || _a === void 0 ? void 0 : _a.offsetWidth)
                return this.outerElement.offsetWidth;
            if (this.outerElement) {
                const { width } = window.getComputedStyle(this.outerElement);
                if (width) {
                    // Regex to check the units of the css string
                    if (((_b = width.match(/\D+$/)) === null || _b === void 0 ? void 0 : _b[0]) !== "%")
                        return parseFloat(width);
                    const parentWidth = (_c = this.outerElement.parentElement) === null || _c === void 0 ? void 0 : _c.offsetWidth;
                    if (parentWidth)
                        return parentWidth * (parseFloat(width) / 100);
                }
            }
            return LOADING_INDICATOR_WIDTHS[this.size];
        };
        this.calculateProportion = (progress) => {
            const minProgress = Math.min(this.max, Math.max(this.min, progress));
            return (minProgress - this.min) / (this.max - this.min);
        };
        this.setLinearDeterminateWidth = () => {
            // Ensure progress cannot be out of bounds
            if (!this.innerElement || !this.progress)
                return;
            const proportion = this.calculateProportion(this.progress);
            this.clipInnerElement = proportion > 0.5;
            if (this.clipInnerElement) {
                this.innerElement.classList.remove("clip");
            }
            else {
                this.innerElement.classList.add("clip");
            }
            this.innerElement.style.setProperty("--linear-width", `${proportion * 100}%`);
        };
        this.updateLabel = () => {
            if (!this.label)
                return;
            if (typeof this.label === "string") {
                this.indicatorLabel = this.label;
            }
            else {
                this.labelList = this.label;
                this.indicatorLabel = this.labelList[0];
                if (this.labelList.length > 1) {
                    this.getLabel(0);
                }
            }
        };
        this.setCircleDimensions = () => {
            if (this.circularDiameter <= 0)
                return;
            const r = this.circularDiameter / 2;
            const nextRadius = r - this.circularLineWidth / 2;
            const dashArray = 2 * Math.PI * nextRadius;
            this.circularDimensions = {
                x: r,
                y: r,
                r: nextRadius,
                dashArray: `${dashArray}px`,
                dashOffset: this.progress
                    ? `${(-1 - this.calculateProportion(this.progress)) * dashArray}px`
                    : undefined,
            };
        };
    }
    watchPropHandler() {
        this.updateLabel();
    }
    handleProgressChange() {
        if (this.type === "linear") {
            this.setLinearDeterminateWidth();
        }
        else {
            this.setCircleDimensions();
        }
    }
    setIndicatorDimensions() {
        if (this.type === "circular") {
            // Sets the circular indicator line width - accounting for the circle size being altered using the CSS custom property
            const diameter = this.calculateWidth();
            if (this.outerElement && diameter !== this.circularDiameter) {
                this.circularLineWidth = diameter * 0.1;
                this.circularDiameter = diameter;
                this.outerElement.style.setProperty("--circular-line-width", `${this.circularLineWidth}px`);
            }
            this.setCircleDimensions();
        }
        else {
            this.setLinearDeterminateWidth();
        }
    }
    disconnectedCallback() {
        clearInterval(this.interval);
    }
    componentWillLoad() {
        this.updateLabel();
        this.el.setAttribute("exportparts", "ic-loading-container");
    }
    componentDidLoad() {
        this.setIndicatorDimensions();
    }
    render() {
        const { circularDiameter, circularDimensions: { x, y, r, dashArray, dashOffset }, description, fullWidth, indicatorLabel, innerLabel, label, max, min, monochrome, progress, size, theme, type, } = this;
        return (h(Host, { key: '8f3a698fc177a9ff0c42efa2cb0d6fde7d09f2cb', class: {
                [`ic-theme-${theme}`]: theme !== "inherit",
                "ic-loading-indicator-full-width": fullWidth,
                "ic-loading-indicator-label": !!label,
                "ic-loading-indicator-monochrome": monochrome,
                [`ic-loading-indicator-size-${size}`]: true,
            } }, h("div", { key: '947ed45a2a33bb3efc98be184d144c7022a99341', class: "ic-loading-container", part: "ic-loading-container" }, h("div", { key: '07cfd1daad6714aa3f0a9aa6639c62f07cd51319', ref: (el) => (this.outerElement = el), class: {
                [`ic-loading-${type}-outer`]: true,
                [progress === undefined ? "indeterminate" : "determinate"]: true,
            }, role: "progressbar", "aria-labelledby": label && size !== "icon" && "ic-loading-label", "aria-label": description, "aria-valuenow": progress, "aria-valuemin": min, "aria-valuemax": max }, h("div", { key: '784dc31419e98ce922fc71941f22a063c26ab249', ref: (el) => (this.innerElement = el), class: {
                [`ic-loading-${type}-inner`]: true,
                "inner-label": !!innerLabel,
            } }, innerLabel && size === "small" && (h("ic-typography", { key: '8f55830d3c41595cecfdfdb3630af8ad2b93fc1e', variant: "subtitle-small", class: "inner-text" }, innerLabel)), type === "circular" && (h("svg", { key: '5505faa38e257e69a988217685c9a466f622489b', class: "ic-loading-circular-svg", viewBox: `0 0 ${circularDiameter} ${circularDiameter}` }, h("circle", { key: 'c2f46bcb23d2af900f8b6dbfabb317172b3fdb22', cx: x, cy: y, r: r }), h("circle", { key: 'f0d9f105bda3e40c78cba1a3a2986b31ccc0327a', style: {
                "--circular-steps-max": progress ? `${max}` : undefined,
                "--progress-value": progress !== undefined ? `${progress}` : undefined,
                "--stroke-dasharray": dashArray,
                "--stroke-dashoffset": dashOffset,
            }, cx: x, cy: y, r: r }))))), label && size !== "icon" && (h("ic-typography", { key: '15d34b2712a2961d2e1b8a63ab6f65a82fa68d67', id: "ic-loading-label", class: "ic-loading-label", role: "alert", variant: this.getLabelVariant() }, h("p", { key: '25130595c4008fdd8acd8c47a6729d3aef5cf70c' }, indicatorLabel))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "label": ["watchPropHandler"],
        "max": ["handleProgressChange"],
        "min": ["handleProgressChange"],
        "progress": ["handleProgressChange"],
        "type": ["setIndicatorDimensions"]
    }; }
};
LoadingIndicator.style = IcLoadingIndicatorStyle0;

const icTooltipCss = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host(.ic-tooltip){width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;--ic-tooltip-background:var(--ic-color-background-primary-dark);--ic-tooltip-text:var(--ic-color-text-primary-dark);--ic-tooltip-border:var(--ic-color-border-neutral-grey-light)}:host(.ic-tooltip) .ic-tooltip-container{background-color:var(--ic-tooltip-background);text-align:center;padding:var(--ic-space-xxxs) var(--ic-space-xs);border-radius:var(--ic-border-radius);border:var(--ic-border-width) solid var(--ic-tooltip-border);position:absolute;max-width:20rem;display:none;z-index:var(--ic-z-index-tooltip);box-shadow:var(--ic-elevation-overlay);width:-moz-max-content;width:max-content}:host(.ic-tooltip) ic-typography{--ic-typography-color:var(--ic-tooltip-text)}:host(.tooltip-navigation-item:not(.tooltip-navigation-item-side-nav-collapsed)) .ic-tooltip-container,:host(.tooltip-disabled) .ic-tooltip-container{display:none !important}:host(.tooltip-long-label-navigation-item-side-nav-expanded) .ic-tooltip-container[data-show]{display:block !important}:host(.ic-tooltip) .ic-tooltip-arrow,:host(.ic-tooltip) .ic-tooltip-arrow::before{position:absolute;background:inherit}:host(.ic-tooltip) .ic-tooltip-arrow{visibility:hidden;width:var(--ic-space-md);height:var(--ic-space-md)}:host(.ic-tooltip) .ic-tooltip-arrow::before{visibility:visible;content:\"\";border:var(--ic-border-width) solid var(--ic-tooltip-border);width:100%;height:100%}:host(.ic-tooltip) .ic-tooltip-container[data-show]{display:block}:host(.ic-tooltip) .ic-tooltip-container[data-popper-placement^=\"top\"]>.ic-tooltip-arrow{height:var(--ic-space-xxxs)}:host(.ic-tooltip) .ic-tooltip-container[data-popper-placement^=\"top\"]>.ic-tooltip-arrow::before{border-radius:0 0 var(--ic-border-radius) var(--ic-border-radius);left:0;top:var(--ic-space-xxxs);border-top:0;transform:translateX(var(--tooltip-arrow-translate))}:host(.ic-tooltip) .ic-tooltip-container[data-popper-placement^=\"bottom\"]>.ic-tooltip-arrow{top:calc(-1 * var(--ic-space-xxs));height:var(--ic-space-xxxs)}:host(.ic-tooltip) .ic-tooltip-container[data-popper-placement^=\"bottom\"]>.ic-tooltip-arrow::before{border-radius:var(--ic-border-radius) var(--ic-border-radius) 0 0;left:0;top:var(--ic-space-1px);border-bottom:0;transform:translateX(var(--tooltip-arrow-translate))}:host(.ic-tooltip) .ic-tooltip-container[data-popper-placement^=\"left\"]>.ic-tooltip-arrow{width:var(--ic-space-xxxs);right:calc(-1 * var(--ic-space-1px))}:host(.ic-tooltip) .ic-tooltip-container[data-popper-placement^=\"left\"]>.ic-tooltip-arrow::before{border-radius:0 var(--ic-border-radius) var(--ic-border-radius) 0;border-left:0;top:calc(-1 * var(--ic-space-1px))}:host(.ic-tooltip) .ic-tooltip-container[data-popper-placement^=\"right\"]>.ic-tooltip-arrow{width:var(--ic-space-xxxs);left:calc(-1 * var(--ic-space-xxs))}:host(.ic-tooltip) .ic-tooltip-container[data-popper-placement^=\"right\"]>.ic-tooltip-arrow::before{border-radius:var(--ic-border-radius) 0 0 var(--ic-border-radius);border-right:0;top:calc(-1 * var(--ic-space-1px))}:host(.ic-tooltip-on-dialog){display:inline-block}@media screen and (max-width: 576px){:host(.ic-tooltip) .ic-tooltip-container{max-width:18.875rem}}@media (forced-colors: active){:host(.ic-tooltip) .ic-tooltip-container,:host(.ic-tooltip) .ic-tooltip-arrow::before{border:var(--ic-border-hc)}}";
const IcTooltipStyle0 = icTooltipCss;

const Tooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.delayedHideEvents = ["mouseleave"];
        this.instantHideEvents = ["focusout"];
        this.mouseOverTool = false;
        this.persistTooltip = false;
        this.showEvents = [
            !this.disableHover && "mouseenter",
            !this.disableHover && "focusin",
            !this.disableClick && "click",
        ];
        /**
         * If `true`, the tooltip will not be displayed on click, it will require hover or using the display method.
         */
        this.disableClick = false;
        /**
         * If `true`, the tooltip will not be displayed on hover, it will require a click.
         */
        this.disableHover = false;
        /**
         * Setting to `true` can help in situations where tooltip content is clipped by a parent element.
         */
        this.fixedPositioning = false;
        /**
         * The position of the tooltip in relation to the parent element.
         */
        this.placement = "bottom";
        /**
         * @internal Sets the tooltip to aria-hidden, when used as part of components that are already announced.
         */
        this.silent = false;
        /**
         * Sets the tooltip to the dark or light theme colors. "inherit" will set the color based on the system settings or ic-theme component.
         */
        this.theme = "inherit";
        this.popperProps = {};
        this.show = () => {
            if (this.label) {
                this.toolTip.setAttribute("data-show", "");
                if (this.dialogContentArea) {
                    this.el.classList.add("ic-tooltip-on-dialog");
                }
                this.popperInstance = createPopper(this.el, this.toolTip, Object.assign({ strategy: this.fixedPositioning ? "fixed" : "absolute", placement: this.placement, modifiers: [
                        {
                            name: "offset",
                            options: {
                                offset: [0, 10],
                            },
                        },
                        {
                            name: "arrow",
                            options: {
                                element: this.arrow,
                            },
                        },
                        {
                            name: "eventListeners",
                            options: { scroll: false, resize: false },
                        },
                        ...(this.dialogContentArea
                            ? [
                                {
                                    name: "preventOverflow",
                                    options: {
                                        boundary: this.dialogContentArea,
                                        padding: 8,
                                    },
                                },
                                {
                                    name: "flip",
                                    options: {
                                        boundary: this.dialogContentArea,
                                    },
                                },
                            ]
                            : []),
                    ] }, this.popperProps));
            }
            else {
                console.warn(`Tooltip can't display without prop 'label' set`);
            }
        };
        this.hide = () => {
            if (this.toolTip !== undefined) {
                this.toolTip.removeAttribute("data-show");
                this.persistTooltip = false;
            }
            if (this.popperInstance !== undefined) {
                this.popperInstance.destroy();
            }
        };
        this.checkCloseTooltip = () => {
            setTimeout(() => {
                if (!this.mouseOverTool && !this.persistTooltip) {
                    this.hide();
                }
            }, 100);
        };
        this.mouseEnterTooltip = () => {
            this.mouseOverTool = true;
        };
        this.mouseLeaveTooltip = () => {
            this.mouseOverTool = false;
            this.checkCloseTooltip();
        };
        this.handleKeyDown = (event) => {
            if (event.key === "Escape" && !this.persistTooltip) {
                this.hide();
            }
        };
        this.manageEventListeners = (action) => {
            const method = action === "add" ? "addEventListener" : "removeEventListener";
            this.showEvents.forEach((event) => {
                if (event) {
                    this.el[method](event, this.show);
                    if (this.toolTip !== undefined) {
                        this.toolTip[method](event, this.mouseEnterTooltip);
                    }
                }
            });
            if (!this.persistTooltip) {
                this.instantHideEvents.forEach((event) => {
                    this.el[method](event, this.hide);
                });
            }
            this.delayedHideEvents.forEach((event) => {
                this.el[method](event, this.checkCloseTooltip);
                if (this.toolTip !== undefined) {
                    this.toolTip[method](event, this.mouseLeaveTooltip);
                }
            });
            document[method]("keydown", this.handleKeyDown);
        };
        this.updateTooltipEvents = () => {
            this.manageEventListeners("remove");
            this.showEvents = [
                !this.disableHover && "mouseenter",
                !this.disableHover && "focusin",
                !this.disableClick && "click",
            ];
            this.manageEventListeners("add");
        };
    }
    watchDisableClickHandler() {
        if (this.disableClick) {
            this.hide();
        }
        this.updateTooltipEvents();
    }
    watchDisableHoverHandler() {
        if (this.disableHover) {
            this.hide();
        }
        this.updateTooltipEvents();
    }
    watchLabelHandler() {
        var _a;
        if (((_a = this.toolTip) === null || _a === void 0 ? void 0 : _a.hasAttribute("data-show")) && this.popperInstance) {
            this.popperInstance.update();
        }
    }
    /**
     * @internal This method allows props to be added to the PopperJS createPopper instance outside of tooltip
     * @param props object - createPopper props set externally
     */
    async setExternalPopperProps(props) {
        this.popperProps = props;
    }
    disconnectedCallback() {
        this.manageEventListeners("remove");
        if (this.popperInstance !== undefined) {
            this.popperInstance.destroy();
        }
    }
    componentDidLoad() {
        var _a, _b;
        this.manageEventListeners("add");
        let dialog;
        if (this.el.getRootNode().host) {
            dialog = this.el.getRootNode().host.closest("ic-dialog");
        }
        else {
            dialog = this.el.closest("ic-dialog");
        }
        this.dialogContentArea =
            (_b = (_a = dialog === null || dialog === void 0 ? void 0 : dialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".content-area")) !== null && _b !== void 0 ? _b : null;
        onComponentRequiredPropUndefined([{ prop: this.label, propName: "label" }], "Tooltip");
    }
    componentDidRender() {
        var _a;
        const typographyEl = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".ic-tooltip-container > ic-typography");
        this.maxLines &&
            this.maxLines > 0 &&
            (typographyEl === null || typographyEl === void 0 ? void 0 : typographyEl.setAttribute("style", `--truncation-max-lines: ${this.maxLines}`));
    }
    /**
     * Method to programmatically show/hide the tooltip without needing to interact with an anchor element
     * @param show Whether to show or hide the tooltip
     * @param persistTooltip Whether the tooltip should stay on the screen when actions are performed that would previously dismiss the tooltip, such as on hover
     */
    async displayTooltip(show, persistTooltip) {
        this.persistTooltip = !!persistTooltip;
        show ? this.show() : this.hide();
    }
    /**
     * @internal Method to return if tooltip is currently visible.
     */
    async isTooltipVisible() {
        return Promise.resolve(this.toolTip.hasAttribute("data-show"));
    }
    render() {
        const { label, maxLines, silent, theme } = this;
        return (h(Host, { key: 'c016954601c1f2ee45f8b64f396c405676fffadd', class: {
                "ic-tooltip": true,
                [`ic-theme-${theme}`]: theme !== "inherit",
            }, "aria-label": isSafari && label }, h("div", { key: 'e18915501176e9a36ab957a20968cc82f9c95403', ref: (el) => (this.toolTip = el), role: "tooltip", class: "ic-tooltip-container", "aria-hidden": `${silent}` }, h("ic-typography", { key: '50f11ad42d55d9c7598176d6169a3c82b5939b71', maxLines: maxLines, variant: "caption" }, label), h("div", { key: '47a01a05045f34a62e2c1724b60ce7f26ab7a086', ref: (el) => (this.arrow = el), class: "ic-tooltip-arrow" })), h("slot", { key: '0b850d553a3b7fd97776c419d76517a33e442d97' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disableClick": ["watchDisableClickHandler"],
        "disableHover": ["watchDisableHoverHandler"],
        "label": ["watchLabelHandler"]
    }; }
};
Tooltip.style = IcTooltipStyle0;

export { Button as ic_button, LoadingIndicator as ic_loading_indicator, Tooltip as ic_tooltip };

//# sourceMappingURL=ic-button_3.entry.js.map