import { r as registerInstance, h, H as Host, g as getElement, c as createEvent, F as Fragment } from './index-a7a720e7.js';
import { r as removeDisabledFalse, a as renderDynamicChildSlots, t as slotHasContent, K as IcInformationStatus, G as isMacDevice, o as onComponentRequiredPropUndefined, H as getOptionsWithoutGroupTitlesCount } from './helpers-dcedb279.js';
import { s as successIcon, f as IC_CUSTOM_ALLOWED_COMPONENTS } from './constants-7960cba4.js';
import { C as Check } from './check-icon-4a9f8371.js';
import { c as createPopper } from './popper-0fbeff6d.js';

const icInputComponentContainerCss = "ic-input-component-container{display:flex;border:var(--ic-border-width) solid\n    var(--border-color, var(--ic-architectural-400));border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-slow);height:2.5rem;min-height:2.5rem;width:var(--input-width, 20rem);padding:var(--ic-space-1px);background-color:var(--input-bg-color, var(--ic-color-background-primary));box-sizing:border-box;fill:var(--ic-architectural-400);outline:none}ic-input-component-container.ic-input-component-container-full-width{width:100%;max-width:none}ic-input-component-container.ic-input-component-container-disabled,ic-input-component-container.ic-input-component-container-disabled:hover{border:var(--ic-border-width) dashed\n    var(--border-color-disabled, var(--ic-color-border-neutral-disabled))}ic-input-component-container.ic-input-component-container-readonly,ic-input-component-container.ic-input-component-container-small.ic-input-component-container-readonly,ic-input-component-container.ic-input-component-container-large.ic-input-component-container-readonly{height:auto;background:transparent}ic-input-component-container.ic-input-component-container-readonly,ic-input-component-container.ic-input-component-container-readonly:hover{border:none;padding:0}ic-input-component-container.ic-input-component-container-error{border:var(--ic-space-xxxs) solid\n    var(--border-color-error, var(--ic-color-border-error));padding:0}ic-input-component-container.ic-input-component-container-error:hover{border:var(--ic-space-xxxs) solid\n    var(--border-color-error-hover, var(--ic-color-border-error-hover))}ic-input-component-container.ic-input-component-container-error:focus-within{border:var(--ic-space-xxxs) solid\n    var(--border-color-error-pressed, var(--ic-color-border-error-pressed))}ic-input-component-container.ic-input-component-container-warning{border:var(--ic-space-xxxs) solid\n    var(--border-color-warning, var(--ic-color-border-warning));padding:0}ic-input-component-container.ic-input-component-container-warning:hover{border:var(--ic-space-xxxs) solid\n    var(--border-color-warning-hover, var(--ic-color-border-warning-hover))}ic-input-component-container.ic-input-component-container-warning:focus-within{border:var(--ic-space-xxxs) solid\n    var(--border-color-warning-pressed, var(--ic-color-border-warning-pressed))}ic-input-component-container.ic-input-component-container-success{border:var(--ic-space-xxxs) solid\n    var(--border-color-success, var(--ic-color-border-success));padding:0}ic-input-component-container.ic-input-component-container-success:hover{border:var(--ic-space-xxxs) solid\n    var(--border-color-success-hover, var(--ic-color-border-success-hover))}ic-input-component-container.ic-input-component-container-success:focus-within{border:var(--ic-space-xxxs) solid\n    var(--border-color-success-pressed, var(--ic-color-border-success-pressed))}ic-input-component-container.ic-input-component-container-small{height:var(--ic-space-xl);min-height:var(--ic-space-xl)}ic-input-component-container.ic-input-component-container-large{height:var(--ic-space-xxl);min-height:var(--ic-space-xxl)}ic-input-component-container.ic-input-component-container-multiline{height:auto}ic-input-component-container .icon-container{margin-top:var(--ic-space-xxs);margin-left:0.438rem;display:flex;align-items:center}ic-input-component-container.ic-input-component-container-multiline .icon-container,ic-input-component-container.ic-input-component-container-multiline.ic-input-component-container-small .icon-container{margin-top:0.375rem;display:block}ic-input-component-container.ic-input-component-container-readonly .icon-container{margin-left:-0.313rem}ic-input-component-container.ic-input-component-container-disabled ::-moz-placeholder{display:none}ic-input-component-container.ic-input-component-container-disabled ::placeholder{display:none}ic-input-component-container .inline-success{margin:var(--ic-space-xs) 0.375rem;display:flex;align-items:center}ic-input-component-container .inline-success>svg{fill:var(--ic-input-component-container-success-icon-inline-color);height:1.25rem;width:1.25rem}ic-input-component-container:hover{border:var(--ic-input-component-container-hover-border);border-color:var(--border-color-hover, var(--ic-color-border-neutral-hover));color:var(--ic-action-monochrome-hover-dark)}ic-input-component-container:focus{border:var(--ic-border-pressed);border-color:var(\n    --border-color-pressed,\n    var(--ic-color-border-neutral-pressed)\n  )}.focus-indicator{display:flex;width:100%;margin:-0.125rem;padding:0.125rem;border-radius:var(--ic-border-radius);transition:var(--ic-easing-transition-fast)}.focus-indicator:focus-within,.focus-indicator-enabled{box-shadow:var(--ic-border-focus)}.focus-indicator.ic-input-component-container-dark:focus-within{box-shadow:var(--ic-border-focus)}@media (forced-colors: active){ic-input-component-container,.focus-indicator{transition:none}ic-input-component-container:focus-within{border:var(--ic-border-width) solid Highlight;outline:0.125rem solid Highlight}ic-input-component-container.ic-input-component-container-disabled,ic-input-component-container.ic-input-component-container-disabled:hover{border:var(--ic-border-width) dashed GrayText}}@media screen AND (max-width: 22rem){ic-input-component-container{max-width:var(--input-width, 20rem);width:100%}}";
const IcInputComponentContainerStyle0 = icInputComponentContainerCss;

const InputComponentContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         *  If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /**
         *  If `true`, the input component container will fill the width of the container it is in.
         */
        this.fullWidth = false;
        /**
         *  If `true`, the input component container will allow for multiple lines.
         */
        this.multiLine = false;
        /**
         *  If `true`, the readonly state will be set.
         */
        this.readonly = false;
        /**
         * The size of the input component container component.
         */
        this.size = "medium";
        /**
         *  If `true`, the validation will display inline.
         */
        this.validationInline = false;
        /**
         * The validation status of the input component container - e.g. 'error' | 'warning' | 'success'.
         */
        this.validationStatus = "";
    }
    watchDisabledHandler() {
        removeDisabledFalse(this.disabled, this.el);
    }
    componentWillLoad() {
        removeDisabledFalse(this.disabled, this.el);
    }
    componentDidLoad() {
        this.hostMutationObserver = new MutationObserver((mutationList) => renderDynamicChildSlots(mutationList, "left-icon", this));
        this.hostMutationObserver.observe(this.el, { childList: true });
    }
    render() {
        const { size, validationStatus, disabled, readonly, multiLine, fullWidth, validationInline, } = this;
        return (h(Host, { key: 'c33ebfd9dd18101fb9161259538e8e0046f77a3d', class: {
                [`ic-input-component-container-${size}`]: true,
                [`ic-input-component-container-${validationStatus}`]: validationStatus !== "" && !disabled && !readonly,
                "ic-input-component-container-disabled": !!disabled,
                "ic-input-component-container-readonly": !!readonly,
                "ic-input-component-container-multiline": !!multiLine,
                "ic-input-component-container-full-width": !!fullWidth,
            }, "aria-disabled": disabled ? "true" : null }, h("div", { key: 'a70f27a3235ac0edb9d9c5a18983ae3c02de2a48', class: "focus-indicator" }, slotHasContent(this.el, "left-icon") && (h("div", { key: 'aa0b233280382bd0e95a8ff932bf60a63603b7bf', class: "icon-container" }, h("slot", { key: 'ceb8ec9b420073ac2ecd5d6793ad4342ab9ebbdd', name: "left-icon" }))), h("slot", { key: '1850c6ed04510e678600c653a36e2114f982e561' }), validationInline &&
            validationStatus === IcInformationStatus.Success && (h("span", { key: '58d228c595577c1cc9a0fe2b10538cc3efff53ab', class: "inline-success", innerHTML: successIcon })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabledHandler"]
    }; }
};
InputComponentContainer.style = IcInputComponentContainerStyle0;

const icInputContainerCss = "ic-input-container .component-container{display:flex;flex-direction:column}";
const IcInputContainerStyle0 = icInputContainerCss;

const InputContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the disabled state will be set.
         */
        this.disabled = false;
        /**
         * If `true`, the readonly state will be set.
         */
        this.readonly = false;
    }
    render() {
        return (h(Host, { key: '32ae22db5e182cc2c092c8f48e61d42a318284a0' }, h("div", { key: 'bae9ef74f7f92004ec99c387a213822315c505ba', class: {
                ["component-container"]: true,
                ["disabled"]: !!this.disabled,
                ["readonly"]: !!this.readonly,
            } }, h("slot", { key: 'acca571eaa0d8f19b0e3379d2592409aacf9dd95' }))));
    }
};
InputContainer.style = IcInputContainerStyle0;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var purify = {exports: {}};

/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */

(function (module, exports) {
(function (global, factory) {
  module.exports = factory() ;
})(commonjsGlobal, (function () {
  const {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor
  } = Object;
  let {
    freeze,
    seal,
    create
  } = Object; // eslint-disable-line import/no-mutable-exports
  let {
    apply,
    construct
  } = typeof Reflect !== 'undefined' && Reflect;
  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }
  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }
  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }
  if (!construct) {
    construct = function construct(Func, args) {
      return new Func(...args);
    };
  }
  const arrayForEach = unapply(Array.prototype.forEach);
  const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
  const arrayPop = unapply(Array.prototype.pop);
  const arrayPush = unapply(Array.prototype.push);
  const arraySplice = unapply(Array.prototype.splice);
  const stringToLowerCase = unapply(String.prototype.toLowerCase);
  const stringToString = unapply(String.prototype.toString);
  const stringMatch = unapply(String.prototype.match);
  const stringReplace = unapply(String.prototype.replace);
  const stringIndexOf = unapply(String.prototype.indexOf);
  const stringTrim = unapply(String.prototype.trim);
  const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
  const regExpTest = unapply(RegExp.prototype.test);
  const typeErrorCreate = unconstruct(TypeError);
  /**
   * Creates a new function that calls the given function with a specified thisArg and arguments.
   *
   * @param func - The function to be wrapped and called.
   * @returns A new function that calls the given function with a specified thisArg and arguments.
   */
  function unapply(func) {
    return function (thisArg) {
      if (thisArg instanceof RegExp) {
        thisArg.lastIndex = 0;
      }
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return apply(func, thisArg, args);
    };
  }
  /**
   * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
   *
   * @param func - The constructor function to be wrapped and called.
   * @returns A new function that constructs an instance of the given constructor function with the provided arguments.
   */
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return construct(func, args);
    };
  }
  /**
   * Add properties to a lookup table
   *
   * @param set - The set to which elements will be added.
   * @param array - The array containing elements to be added to the set.
   * @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
   * @returns The modified set with added elements.
   */
  function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }
    let l = array.length;
    while (l--) {
      let element = array[l];
      if (typeof element === 'string') {
        const lcElement = transformCaseFunc(element);
        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }
          element = lcElement;
        }
      }
      set[element] = true;
    }
    return set;
  }
  /**
   * Clean up an array to harden against CSPP
   *
   * @param array - The array to be cleaned.
   * @returns The cleaned version of the array
   */
  function cleanArray(array) {
    for (let index = 0; index < array.length; index++) {
      const isPropertyExist = objectHasOwnProperty(array, index);
      if (!isPropertyExist) {
        array[index] = null;
      }
    }
    return array;
  }
  /**
   * Shallow clone an object
   *
   * @param object - The object to be cloned.
   * @returns A new object that copies the original.
   */
  function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)) {
      const isPropertyExist = objectHasOwnProperty(object, property);
      if (isPropertyExist) {
        if (Array.isArray(value)) {
          newObject[property] = cleanArray(value);
        } else if (value && typeof value === 'object' && value.constructor === Object) {
          newObject[property] = clone(value);
        } else {
          newObject[property] = value;
        }
      }
    }
    return newObject;
  }
  /**
   * This method automatically checks if the prop is function or getter and behaves accordingly.
   *
   * @param object - The object to look up the getter function in its prototype chain.
   * @param prop - The property name for which to find the getter function.
   * @returns The getter function found in the prototype chain or a fallback function.
   */
  function lookupGetter(object, prop) {
    while (object !== null) {
      const desc = getOwnPropertyDescriptor(object, prop);
      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }
        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }
      object = getPrototypeOf(object);
    }
    function fallbackValue() {
      return null;
    }
    return fallbackValue;
  }

  const html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);
  const svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  const svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);
  // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.
  const svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  const mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover', 'mprescripts']);
  // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.
  const mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  const text = freeze(['#text']);

  const html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'popover', 'popovertarget', 'popovertargetaction', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'wrap', 'xmlns', 'slot']);
  const svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'amplitude', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'exponent', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'intercept', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'slope', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'tablevalues', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  const mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  const xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  // eslint-disable-next-line unicorn/better-regex
  const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
  const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm); // eslint-disable-line unicorn/better-regex
  const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/); // eslint-disable-line no-useless-escape
  const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
  const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  const DOCTYPE_NAME = seal(/^html$/i);
  const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);

  var EXPRESSIONS = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ARIA_ATTR: ARIA_ATTR,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT,
    DATA_ATTR: DATA_ATTR,
    DOCTYPE_NAME: DOCTYPE_NAME,
    ERB_EXPR: ERB_EXPR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR
  });

  /* eslint-disable @typescript-eslint/indent */
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  const NODE_TYPE = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    // Deprecated
    entityNode: 6,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12 // Deprecated
  };
  const getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param trustedTypes The policy factory.
   * @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */
  const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    }
    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
      suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML(html) {
          return html;
        },
        createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };
  const _createHooksMap = function _createHooksMap() {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
  function createDOMPurify() {
    let window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    const DOMPurify = root => createDOMPurify(root);
    DOMPurify.version = '3.2.6';
    DOMPurify.removed = [];
    if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }
    let {
      document
    } = window;
    const originalDocument = document;
    const currentScript = originalDocument.currentScript;
    const {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = window.NamedNodeMap || window.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes
    } = window;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const remove = lookupGetter(ElementPrototype, 'remove');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode');
    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
      const template = document.createElement('template');
      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }
    let trustedTypesPolicy;
    let emptyHTML = '';
    const {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName
    } = document;
    const {
      importNode
    } = originalDocument;
    let hooks = _createHooksMap();
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */
    DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const {
      MUSTACHE_EXPR,
      ERB_EXPR,
      TMPLIT_EXPR,
      DATA_ATTR,
      ARIA_ATTR,
      IS_SCRIPT_OR_DATA,
      ATTR_WHITESPACE,
      CUSTOM_ELEMENT
    } = EXPRESSIONS;
    let {
      IS_ALLOWED_URI: IS_ALLOWED_URI$1
    } = EXPRESSIONS;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */
    /* allowed element names */
    let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
    /* Allowed attribute names */
    let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
    /*
     * Configure how DOMPurify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */
    let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
    let FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
    let FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */
    let ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */
    let ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */
    let ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */
    let ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */
    let SAFE_FOR_TEMPLATES = false;
    /* Output should be safe even for XML used within HTML and alike.
     * This means, DOMPurify removes comments when containing risky content.
     */
    let SAFE_FOR_XML = true;
    /* Decide if document with <html>... should be returned */
    let WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */
    let SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */
    let FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */
    let RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */
    let RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */
    let RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */
    let SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */
    let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */
    let KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */
    let IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */
    let USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */
    let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */
    let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */
    let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */
    let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */
    let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
    let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    let HTML_INTEGRATION_POINTS = addToSet({}, ['annotation-xml']);
    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Parsing of strict XHTML documents */
    let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc = null;
    /* Keep a reference to config to pass to hooks */
    let CONFIG = null;
    /* Ideally, do not touch anything below this line */
    /* ______________________________________________ */
    const formElement = document.createElement('form');
    const isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param cfg optional config literal
     */
    // eslint-disable-next-line complexity
    const _parseConfig = function _parseConfig() {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */
      if (!cfg || typeof cfg !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */
      cfg = clone(cfg);
      PARSER_MEDIA_TYPE =
      // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
      // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
      /* Set configuration parameters */
      ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
      URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
      FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
      USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
      IN_PLACE = cfg.IN_PLACE || false; // Default false
      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
      MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
      HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }
      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }
      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }
      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */
      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, text);
        ALLOWED_ATTR = [];
        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }
        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }
        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */
      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }
      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }
        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */
      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      }
      if (cfg.TRUSTED_TYPES_POLICY) {
        if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        }
        if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
          throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        }
        // Overwrite existing TrustedTypes policy.
        trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
        // Sign local variables required by `sanitize`.
        emptyHTML = trustedTypesPolicy.createHTML('');
      } else {
        // Uninitialized policy, attempt to initialize the internal dompurify policy.
        if (trustedTypesPolicy === undefined) {
          trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
        }
        // If creating the internal policy succeeded sign internal variables.
        if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
          emptyHTML = trustedTypesPolicy.createHTML('');
        }
      }
      // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.
      if (freeze) {
        freeze(cfg);
      }
      CONFIG = cfg;
    };
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */
    const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
    const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
    /**
     * @param element a DOM element whose namespace is being checked
     * @returns Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */
    const _checkValidNamespace = function _checkValidNamespace(element) {
      let parent = getParentNode(element);
      // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.
      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: NAMESPACE,
          tagName: 'template'
        };
      }
      const tagName = stringToLowerCase(element.tagName);
      const parentTagName = stringToLowerCase(parent.tagName);
      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
        return false;
      }
      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        }
        // The only way to switch from MathML to SVG is via`
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.
        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        }
        // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.
        return Boolean(ALL_SVG_TAGS[tagName]);
      }
      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        }
        // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points
        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        }
        // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.
        return Boolean(ALL_MATHML_TAGS[tagName]);
      }
      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }
        // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace
        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      }
      // For XHTML and XML documents that support custom namespaces
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
        return true;
      }
      // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
      // Return false just in case.
      return false;
    };
    /**
     * _forceRemove
     *
     * @param node a DOM node
     */
    const _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });
      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        getParentNode(node).removeChild(node);
      } catch (_) {
        remove(node);
      }
    };
    /**
     * _removeAttribute
     *
     * @param name an Attribute name
     * @param element a DOM node
     */
    const _removeAttribute = function _removeAttribute(name, element) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: element.getAttributeNode(name),
          from: element
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: element
        });
      }
      element.removeAttribute(name);
      // We void attribute values for unremovable "is" attributes
      if (name === 'is') {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(element);
          } catch (_) {}
        } else {
          try {
            element.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param dirty - a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */
    const _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      let doc = null;
      let leadingWhitespace = null;
      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        const matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }
      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }
      const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */
      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */
      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);
        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
        } catch (_) {
          // Syntax error if dirtyPayload is invalid xml
        }
      }
      const body = doc.body || doc.documentElement;
      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */
      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }
      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     *
     * @param root The root element or node to start traversing on.
     * @return The created NodeIterator
     */
    const _createNodeIterator = function _createNodeIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
    };
    /**
     * _isClobbered
     *
     * @param element element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */
    const _isClobbered = function _isClobbered(element) {
      return element instanceof HTMLFormElement && (typeof element.nodeName !== 'string' || typeof element.textContent !== 'string' || typeof element.removeChild !== 'function' || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== 'function' || typeof element.setAttribute !== 'function' || typeof element.namespaceURI !== 'string' || typeof element.insertBefore !== 'function' || typeof element.hasChildNodes !== 'function');
    };
    /**
     * Checks whether the given object is a DOM node.
     *
     * @param value object to check whether it's a DOM node
     * @return true is object is a DOM node
     */
    const _isNode = function _isNode(value) {
      return typeof Node === 'function' && value instanceof Node;
    };
    function _executeHooks(hooks, currentNode, data) {
      arrayForEach(hooks, hook => {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    }
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     * @param currentNode to check for permission to exist
     * @return true if node was killed, false if left alive
     */
    const _sanitizeElements = function _sanitizeElements(currentNode) {
      let content = null;
      /* Execute a hook if present */
      _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
      /* Check if element is clobbered or can clobber */
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Now let's check the element's type and name */
      const tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */
      _executeHooks(hooks.uponSanitizeElement, currentNode, {
        tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */
      if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Remove any occurrence of processing instructions */
      if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
        _forceRemove(currentNode);
        return true;
      }
      /* Remove any kind of possibly harmful comments */
      if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Remove element if anything forbids its presence */
      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
            return false;
          }
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
            return false;
          }
        }
        /* Keep content except for bad-listed elements */
        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          const parentNode = getParentNode(currentNode) || currentNode.parentNode;
          const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
          if (childNodes && parentNode) {
            const childCount = childNodes.length;
            for (let i = childCount - 1; i >= 0; --i) {
              const childClone = cloneNode(childNodes[i], true);
              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
              parentNode.insertBefore(childClone, getNextSibling(currentNode));
            }
          }
        }
        _forceRemove(currentNode);
        return true;
      }
      /* Check whether element has a valid namespace */
      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Make sure that older browsers don't get fallback-tag mXSS */
      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);
        return true;
      }
      /* Sanitize element content to be template-safe */
      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
        /* Get the element's text content */
        content = currentNode.textContent;
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          content = stringReplace(content, expr, ' ');
        });
        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */
      _executeHooks(hooks.afterSanitizeElements, currentNode, null);
      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param lcTag Lowercase tag name of containing element.
     * @param lcName Lowercase attribute name.
     * @param value Attribute value.
     * @return Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity
    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */
      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
        // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */
      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ; else if (value) {
        return false;
      } else ;
      return true;
    };
    /**
     * _isBasicCustomElement
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     *
     * @param tagName name of the tag of the node to sanitize
     * @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
     */
    const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
      return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param currentNode to sanitize
     */
    const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      /* Execute a hook if present */
      _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
      const {
        attributes
      } = currentNode;
      /* Check if we have attributes; if not we might have a text node */
      if (!attributes || _isClobbered(currentNode)) {
        return;
      }
      const hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR,
        forceKeepAttr: undefined
      };
      let l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */
      while (l--) {
        const attr = attributes[l];
        const {
          name,
          namespaceURI,
          value: attrValue
        } = attr;
        const lcName = transformCaseFunc(name);
        const initValue = attrValue;
        let value = name === 'value' ? initValue : stringTrim(initValue);
        /* Execute a hook if present */
        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
        _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
        value = hookEvent.attrValue;
        /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */
        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
          // Remove the attribute with this value
          _removeAttribute(name, currentNode);
          // Prefix the value and later re-create the attribute with the sanitized value
          value = SANITIZE_NAMED_PROPS_PREFIX + value;
        }
        /* Work around a security issue with comments inside attributes */
        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        /* Did the hooks approve of the attribute? */
        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Did the hooks approve of the attribute? */
        if (!hookEvent.keepAttr) {
          _removeAttribute(name, currentNode);
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */
        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        /* Sanitize attribute content to be template-safe */
        if (SAFE_FOR_TEMPLATES) {
          arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
            value = stringReplace(value, expr, ' ');
          });
        }
        /* Is `value` valid for this attribute? */
        const lcTag = transformCaseFunc(currentNode.nodeName);
        if (!_isValidAttribute(lcTag, lcName, value)) {
          _removeAttribute(name, currentNode);
          continue;
        }
        /* Handle attributes that require Trusted Types */
        if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                {
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                }
              case 'TrustedScriptURL':
                {
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
                }
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */
        if (value !== initValue) {
          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
              currentNode.setAttribute(name, value);
            }
            if (_isClobbered(currentNode)) {
              _forceRemove(currentNode);
            } else {
              arrayPop(DOMPurify.removed);
            }
          } catch (_) {
            _removeAttribute(name, currentNode);
          }
        }
      }
      /* Execute a hook if present */
      _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param fragment to iterate over recursively
     */
    const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      let shadowNode = null;
      const shadowIterator = _createNodeIterator(fragment);
      /* Execute a hook if present */
      _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
        /* Sanitize tags and elements */
        _sanitizeElements(shadowNode);
        /* Check attributes next */
        _sanitizeAttributes(shadowNode);
        /* Deep shadow DOM detected */
        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
      }
      /* Execute a hook if present */
      _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
    };
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function (dirty) {
      let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let body = null;
      let importedNode = null;
      let currentNode = null;
      let returnNode = null;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */
      IS_EMPTY_INPUT = !dirty;
      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */
      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        if (typeof dirty.toString === 'function') {
          dirty = dirty.toString();
          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        } else {
          throw typeErrorCreate('toString is not a function');
        }
      }
      /* Return dirty HTML if DOMPurify cannot run */
      if (!DOMPurify.isSupported) {
        return dirty;
      }
      /* Assign config vars */
      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */
      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */
      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }
      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          const tagName = transformCaseFunc(dirty.nodeName);
          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);
        if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
        // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */
        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */
        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */
      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */
      const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */
      while (currentNode = nodeIterator.nextNode()) {
        /* Sanitize tags and elements */
        _sanitizeElements(currentNode);
        /* Check attributes next */
        _sanitizeAttributes(currentNode);
        /* Shadow DOM detected, sanitize it */
        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
      }
      /* If we sanitized `dirty` in-place, return it. */
      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */
      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);
          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }
        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }
        return returnNode;
      }
      let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */
      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR], expr => {
          serializedHTML = stringReplace(serializedHTML, expr, ' ');
        });
      }
      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    DOMPurify.setConfig = function () {
      let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _parseConfig(cfg);
      SET_CONFIG = true;
    };
    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }
      const lcTag = transformCaseFunc(tag);
      const lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }
      arrayPush(hooks[entryPoint], hookFunction);
    };
    DOMPurify.removeHook = function (entryPoint, hookFunction) {
      if (hookFunction !== undefined) {
        const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
        return index === -1 ? undefined : arraySplice(hooks[entryPoint], index, 1)[0];
      }
      return arrayPop(hooks[entryPoint]);
    };
    DOMPurify.removeHooks = function (entryPoint) {
      hooks[entryPoint] = [];
    };
    DOMPurify.removeAllHooks = function () {
      hooks = _createHooksMap();
    };
    return DOMPurify;
  }
  var purify = createDOMPurify();

  return purify;

}));

}(purify));

const purifier = purify.exports;

/* istanbul ignore next */
const getCustomElementHandling = (allowICPrefix) => ({
    CUSTOM_ELEMENT_HANDLING: {
        tagNameCheck: (tagName) => (allowICPrefix && tagName.startsWith("ic-")) ||
            IC_CUSTOM_ALLOWED_COMPONENTS.includes(tagName),
        attributeNameCheck: /.*/,
    },
});
const sanitizeHTMLString = (html) => {
    return purifier.sanitize(html, getCustomElementHandling(true));
};
const sanitizeHTMLIconString = (html) => {
    return purifier.sanitize(html, getCustomElementHandling(false));
};

const icMenuCss = "html.sc-ic-menu{line-height:1.15;-webkit-text-size-adjust:100%}body.sc-ic-menu{margin:0}main.sc-ic-menu{display:block}h1.sc-ic-menu{font-size:2em;margin:0.67em 0}hr.sc-ic-menu{box-sizing:content-box;height:0;overflow:visible}pre.sc-ic-menu{font-family:monospace, monospace;font-size:1em}a.sc-ic-menu{background-color:transparent}abbr[title].sc-ic-menu{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b.sc-ic-menu,strong.sc-ic-menu{font-weight:bolder}code.sc-ic-menu,kbd.sc-ic-menu,samp.sc-ic-menu{font-family:monospace, monospace;font-size:1em}small.sc-ic-menu{font-size:80%}sub.sc-ic-menu,sup.sc-ic-menu{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub.sc-ic-menu{bottom:-0.25em}sup.sc-ic-menu{top:-0.5em}img.sc-ic-menu{border-style:none}button.sc-ic-menu,input.sc-ic-menu,optgroup.sc-ic-menu,select.sc-ic-menu,textarea.sc-ic-menu{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button.sc-ic-menu,input.sc-ic-menu{overflow:visible}button.sc-ic-menu,select.sc-ic-menu{text-transform:none}button.sc-ic-menu,[type=\"button\"].sc-ic-menu,[type=\"reset\"].sc-ic-menu,[type=\"submit\"].sc-ic-menu{-webkit-appearance:button}button.sc-ic-menu::-moz-focus-inner,[type=\"button\"].sc-ic-menu::-moz-focus-inner,[type=\"reset\"].sc-ic-menu::-moz-focus-inner,[type=\"submit\"].sc-ic-menu::-moz-focus-inner{border-style:none;padding:0}button.sc-ic-menu:-moz-focusring,[type=\"button\"].sc-ic-menu:-moz-focusring,[type=\"reset\"].sc-ic-menu:-moz-focusring,[type=\"submit\"].sc-ic-menu:-moz-focusring{outline:1px dotted ButtonText}fieldset.sc-ic-menu{padding:0.35em 0.75em 0.625em}legend.sc-ic-menu{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress.sc-ic-menu{vertical-align:baseline}textarea.sc-ic-menu{overflow:auto}[type=\"checkbox\"].sc-ic-menu,[type=\"radio\"].sc-ic-menu{box-sizing:border-box;padding:0}[type=\"number\"].sc-ic-menu::-webkit-inner-spin-button,[type=\"number\"].sc-ic-menu::-webkit-outer-spin-button{height:auto}[type=\"search\"].sc-ic-menu{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"].sc-ic-menu::-webkit-search-decoration{-webkit-appearance:none}.sc-ic-menu::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details.sc-ic-menu{display:block}summary.sc-ic-menu{display:list-item}template.sc-ic-menu{display:none}[hidden].sc-ic-menu{display:none}html.sc-ic-menu,body.sc-ic-menu,div.sc-ic-menu,span.sc-ic-menu,applet.sc-ic-menu,object.sc-ic-menu,iframe.sc-ic-menu,h1.sc-ic-menu,h2.sc-ic-menu,h3.sc-ic-menu,h4.sc-ic-menu,h5.sc-ic-menu,h6.sc-ic-menu,p.sc-ic-menu,blockquote.sc-ic-menu,pre.sc-ic-menu,a.sc-ic-menu,abbr.sc-ic-menu,acronym.sc-ic-menu,address.sc-ic-menu,big.sc-ic-menu,cite.sc-ic-menu,code.sc-ic-menu,del.sc-ic-menu,dfn.sc-ic-menu,em.sc-ic-menu,img.sc-ic-menu,ins.sc-ic-menu,kbd.sc-ic-menu,q.sc-ic-menu,s.sc-ic-menu,samp.sc-ic-menu,small.sc-ic-menu,strike.sc-ic-menu,strong.sc-ic-menu,sub.sc-ic-menu,sup.sc-ic-menu,tt.sc-ic-menu,var.sc-ic-menu,b.sc-ic-menu,u.sc-ic-menu,i.sc-ic-menu,center.sc-ic-menu,dl.sc-ic-menu,dt.sc-ic-menu,dd.sc-ic-menu,ol.sc-ic-menu,ul.sc-ic-menu,li.sc-ic-menu,fieldset.sc-ic-menu,form.sc-ic-menu,label.sc-ic-menu,legend.sc-ic-menu,table.sc-ic-menu,caption.sc-ic-menu,tbody.sc-ic-menu,tfoot.sc-ic-menu,thead.sc-ic-menu,tr.sc-ic-menu,th.sc-ic-menu,td.sc-ic-menu,article.sc-ic-menu,aside.sc-ic-menu,canvas.sc-ic-menu,details.sc-ic-menu,embed.sc-ic-menu,figure.sc-ic-menu,figcaption.sc-ic-menu,footer.sc-ic-menu,header.sc-ic-menu,hgroup.sc-ic-menu,menu.sc-ic-menu,nav.sc-ic-menu,output.sc-ic-menu,ruby.sc-ic-menu,section.sc-ic-menu,summary.sc-ic-menu,time.sc-ic-menu,mark.sc-ic-menu,audio.sc-ic-menu,video.sc-ic-menu{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}@media (prefers-reduced-motion: no-preference){.ic-menu-open.sc-ic-menu-h .menu.sc-ic-menu{transition:max-height var(--ic-transition-duration-slow)}}.sc-ic-menu-h{max-height:0;width:var(--menu-width, var(--input-width, 20rem));color:var(--menu-item-text-color, var(--ic-menu-list-option-text-color));--ic-typography-color:var(\n    --menu-item-text-color,\n    var(--ic-menu-list-option-text-color)\n  );background-color:var(\n    --menu-bg-color,\n    var(--ic-menu-list-option-background-color)\n  );position:relative;z-index:var(--ic-z-index-menu);box-sizing:border-box;box-shadow:var(--ic-elevation-overlay);border-radius:var(--ic-border-radius)}.ic-menu-open.sc-ic-menu-h:not(.ic-menu-no-focus):focus-within{box-shadow:var(--ic-border-focus);outline:var(--ic-hc-focus-outline)}.ic-select-select-all-focused.sc-ic-menu-h{box-shadow:var(--ic-elevation-overlay) !important}#retry-button.sc-ic-menu::part(button){height:var(--ic-space-lg)}.small.sc-ic-menu #retry-button.sc-ic-menu::part(button){height:var(--ic-space-md)}.on-dialog.sc-ic-menu-h{inset:auto !important}.menu.sc-ic-menu{text-decoration:none;list-style-type:none;border-radius:1px;background-color:var(\n    --menu-bg-color,\n    var(--ic-menu-list-option-background-color)\n  );visibility:hidden;max-height:0;overflow-y:hidden}.menu.sc-ic-menu:has(+.option-bar).sc-ic-menu{border-radius:0 0 1px 1px}.menu-scroll.sc-ic-menu{overflow-y:auto}.menu.sc-ic-menu:focus-visible{outline:none}.ic-menu-open.sc-ic-menu-h{max-height:none;display:flex;flex-direction:column-reverse;border:var(--ic-border-width) solid\n    var(--menu-border-color, var(--ic-menu-border-color));transition:box-shadow var(--ic-easing-transition-fast)}.ic-menu-open.sc-ic-menu-h .menu.sc-ic-menu{visibility:visible;max-height:calc(var(--ic-space-xl) * 10 + var(--ic-space-xxxs))}.ic-menu-open.sc-ic-menu-h .option-bar.sc-ic-menu{visibility:visible}.ic-menu-open.sc-ic-menu-h .select-all-button.sc-ic-menu{display:block}.ic-menu-full-width.sc-ic-menu-h{width:100%}.option.sc-ic-menu{padding:var(--ic-space-xs) calc(var(--ic-space-xs) - var(--ic-space-1px));cursor:pointer;display:flex;align-items:center;gap:var(--ic-space-xs)}.loading-option.sc-ic-menu p.sc-ic-menu{margin-bottom:0 !important}.option.sc-ic-menu:not(.loading-option){justify-content:space-between}.ic-menu-small.sc-ic-menu-h .option.sc-ic-menu{padding:var(--ic-space-xxs) calc(var(--ic-space-xs) - var(--ic-space-1px))}.ic-menu-large.sc-ic-menu-h .option.sc-ic-menu{padding:var(--ic-space-sm) calc(var(--ic-space-xs) - var(--ic-space-1px))}.option.sc-ic-menu:last-child{border-radius:0 0 1px 1px}.sc-ic-menu:not(.menu:has(+.option-bar)).sc-ic-menu .option.sc-ic-menu:first-child{border-radius:1px 1px 0 0}.option.sc-ic-menu:not(.disabled-option):hover{background-color:var(--ic-menu-list-option-hover-background-color)}.option.sc-ic-menu:not(.disabled-option):active{background-color:var(--ic-menu-list-option-pressed-background-color)}.option.sc-ic-menu:focus-visible{outline:var(--ic-hc-focus-outline)}.option.sc-ic-menu:not(.disabled-option) .option-description.sc-ic-menu{--ic-typography-color:var(\n    --menu-item-desc-text-color,\n    var(--ic-menu-list-option-description-text-color)\n  )}.option.sc-ic-menu .option-label.sc-ic-menu{display:flex;flex-direction:row;align-items:top}.option.sc-ic-menu .option-label.sc-ic-menu ic-typography.sc-ic-menu{max-width:100%;word-wrap:break-word}.option.sc-ic-menu .option-element.sc-ic-menu{margin-top:var(--ic-space-xxs)}.option.sc-ic-menu .option-icon.sc-ic-menu{height:var(--ic-space-md);width:var(--ic-space-md);margin-top:var(--ic-space-xxs);margin-right:var(--ic-space-xxxs)}.option-text-container.sc-ic-menu{pointer-events:none;width:100%}.option-text-container.show-check-icon.sc-ic-menu{flex-grow:1}.option.loading-option.sc-ic-menu .option-text-container.sc-ic-menu{margin-left:calc(var(--ic-space-xs) + var(--ic-space-xxxs));color:var(--ic-menu-loading-list-option-text-color);--ic-typography-color:var(--ic-menu-loading-list-option-text-color)}.error-icon-svg.sc-ic-menu{height:var(--ic-space-md);width:var(--ic-space-md);fill:var(--ic-atoms-status-icon-error);align-self:center;display:flex;margin-right:calc(var(--ic-space-xxs) * 1.2)}.loading-error-info.sc-ic-menu{display:flex}.check-icon.sc-ic-menu{height:var(--ic-space-lg);min-width:var(--ic-space-lg);width:var(--ic-space-lg);pointer-events:none}.focused-option.sc-ic-menu .check-icon.sc-ic-menu *.sc-ic-menu{fill:currentcolor}.option-group-title.sc-ic-menu{padding:var(--ic-space-lg) calc(var(--ic-space-xs) - var(--ic-space-1px))\n    var(--ic-space-xs);--ic-typography-color:var(--ic-menu-option-group-label-text-color)}.ic-menu-small.sc-ic-menu-h .option-group-title.sc-ic-menu{padding:var(--ic-space-sm) calc(var(--ic-space-xs) - var(--ic-space-1px))\n    var(--ic-space-xxs)}.last-recommended-option.sc-ic-menu{border-bottom:var(--ic-menu-last-recommended-option-border)}.disabled-option.sc-ic-menu{color:var(--ic-atoms-list-option-text-disabled-light);--ic-typography-color:var(--ic-atoms-list-option-text-disabled-light);cursor:default;pointer-events:none}.focused-option.sc-ic-menu,.focused-option.sc-ic-menu .option-description.sc-ic-menu{background-color:var(--ic-color-focus-inner) !important;color:var(--ic-atoms-list-option-text-focused-light) !important;--ic-typography-color:var(\n    --ic-atoms-list-option-text-focused-light\n  ) !important}.no-results.sc-ic-menu-h li.sc-ic-menu{cursor:no-drop}.no-results.sc-ic-menu-h li.sc-ic-menu:hover{background-color:transparent}.option-bar.sc-ic-menu{padding:var(--ic-space-xxs) var(--ic-space-xs);display:flex;align-items:center;justify-content:space-between;background-color:var(--ic-menu-option-bar-background-color);visibility:hidden;border-bottom:var(--ic-border-width) solid\n    var(--ic-menu-option-bar-divider-color);border-radius:1px 1px 0 0}.option-bar.sc-ic-menu p.sc-ic-menu{margin-bottom:0 !important}.ic-menu-large.sc-ic-menu-h .option-bar.sc-ic-menu{padding:var(--ic-space-xs)}.select-all-button.sc-ic-menu{display:none}.select-all-button.sc-ic-menu:focus{z-index:calc(var(--ic-z-index-menu) + 1)}@media (forced-colors: active){.focused-option.sc-ic-menu:focus{outline:none;border:0.125rem solid transparent}.disabled-option.sc-ic-menu{color:GrayText;--ic-typography-color:GrayText}}@media screen AND (max-width: 22rem){.sc-ic-menu-h{max-width:var(--menu-width, var(--input-width, 20rem));width:100%}}";
const IcMenuStyle0 = icMenuCss;

const Menu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icClear = createEvent(this, "icClear", 7);
        this.menuKeyPress = createEvent(this, "menuKeyPress", 7);
        this.menuOptionId = createEvent(this, "menuOptionId", 7);
        this.menuOptionSelect = createEvent(this, "menuOptionSelect", 7);
        this.menuOptionSelectAll = createEvent(this, "menuOptionSelectAll", 7);
        this.menuStateChange = createEvent(this, "menuStateChange", 7);
        this.retryButtonClicked = createEvent(this, "retryButtonClicked", 7);
        this.timeoutBlur = createEvent(this, "timeoutBlur", 7);
        this.ungroupedOptionsSet = createEvent(this, "ungroupedOptionsSet", 7);
        this.ACTIVE_DESCENDANT = "aria-activedescendant";
        this.CLEAR_BUTTON_ID = "clear-button";
        this.SEARCH_BAR_TAG = "IC-SEARCH-BAR";
        this.disabledOptionSelected = false;
        this.hasPreviouslyBlurred = false;
        this.hasTimedOut = false;
        this.isLoading = false;
        this.lastOptionSelected = null; // Index of last option selected
        this.lastOptionFocused = null; // Index of last option focused
        this.multiOptionClicked = null;
        this.preventClickOpen = false; // Prevents menu re-opening immediately after it is closed on blur when clicking input.
        this.preventMenuFocus = false; // (When multiple) ensures focus moves straight to select all button from menu.
        this.shiftPressed = false;
        this.ungroupedOptions = [];
        this.focusFromSearchKeypress = false;
        this.initialOptionsListRender = false;
        this.keyboardNav = false;
        this.preventIncorrectTabOrder = false;
        this.popperProps = {};
        /**
         * Determines whether options manually set as values (by pressing 'Enter') when they receive focus using keyboard navigation.
         */
        this.activationType = "automatic";
        /**
         * @internal If `true`, autofocus will be applied on selected item when menu is open.
         */
        this.autofocusOnSelected = true;
        /**
         *  If `true`, the menu will close when an option is selected.
         */
        this.closeOnSelect = true;
        /**
         *  If `true`, the menu will fill the width of the container.
         */
        this.fullWidth = false;
        /**
         * The custom name for the label field for IcMenuOption.
         */
        this.labelField = "label";
        /**
         * @internal - flag to specify if menu is in a ic-select multiple.
         */
        this.multiSelect = false;
        /**
         * @internal - flag to specify if menu is in a searchable ic-select.
         */
        this.searchableSelect = false;
        /**
         * @internal - flag to specify if menu is in a ic-search-bar.
         */
        this.searchBar = false;
        /**
         * Specify the mode search bar uses to search. `navigation` allows for quick lookups of a set of values, `query` allows for more general searches.
         */
        this.searchMode = "navigation";
        /**
         * @internal If `true`, the icOptionSelect event will be fired on enter instead of ArrowUp and ArrowDown.
         */
        this.selectOnEnter = false;
        /**
         * The size of the menu.
         */
        this.size = "medium";
        /**
         * The custom name for the value field for IcMenuOption.
         */
        this.valueField = "value";
        this.handleClearListener = () => {
            this.optionHighlighted = "";
        };
        this.handleSubmitSearch = () => {
            const highlightedOptionIndex = this.options.findIndex((option) => option[this.valueField] === this.optionHighlighted);
            this.setInputValue(highlightedOptionIndex);
        };
        this.handleMenuChange = (open, focusInput) => {
            var _a;
            this.menuStateChange.emit({ open, focusInput });
            if (!open) {
                if (focusInput !== false) {
                    (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
                    this.preventClickOpen = false;
                }
                // Reset optionHighlighted so previously highlighted option doesn't get reselected when Enter pressed
                if (this.multiSelect) {
                    this.optionHighlighted = undefined;
                    this.multiOptionClicked = null;
                }
            }
        };
        this.setNextOptionValue = (selectedOptionIndex) => {
            if (this.ungroupedOptions[selectedOptionIndex + 1]) {
                this.menuOptionSelect.emit({
                    value: this.ungroupedOptions[selectedOptionIndex + 1][this.valueField],
                    optionId: this.getOptionId(this.ungroupedOptions[selectedOptionIndex + 1][this.valueField]),
                });
            }
            else {
                this.menuOptionSelect.emit({
                    value: this.ungroupedOptions[0][this.valueField],
                    optionId: this.getOptionId(this.ungroupedOptions[0][this.valueField]),
                });
            }
        };
        this.setPreviousOptionValue = (selectedOptionIndex) => {
            if (this.ungroupedOptions[selectedOptionIndex - 1]) {
                this.menuOptionSelect.emit({
                    value: this.ungroupedOptions[selectedOptionIndex - 1][this.valueField],
                    optionId: this.getOptionId(this.ungroupedOptions[selectedOptionIndex - 1][this.valueField]),
                });
            }
            else {
                this.menuOptionSelect.emit({
                    value: this.ungroupedOptions[this.ungroupedOptions.length - 1][this.valueField],
                    optionId: this.getOptionId(this.ungroupedOptions[this.ungroupedOptions.length - 1][this.valueField]),
                });
            }
        };
        // Open menu when up or down arrow keys are pressed
        this.arrowBehaviour = (event) => {
            event.preventDefault();
            this.handleMenuChange(true);
        };
        this.getMenuOptions = () => this.searchBar ? this.options : this.ungroupedOptions;
        // Set option that is focused and so should show focus state
        this.setHighlightedOption = (highlightedIndex) => {
            const menuOptions = this.getMenuOptions();
            menuOptions[highlightedIndex] &&
                !menuOptions[highlightedIndex].timedOut &&
                (this.optionHighlighted =
                    menuOptions[highlightedIndex][this.valueField] || undefined);
        };
        // Determines keyboard behaviour when selection is automatic
        // (i.e. you don't have to press Enter select an option - just focus on it)
        // and menu is closed
        this.autoSetInputValueKeyboardOpen = (event) => {
            const selectedOptionIndex = this.ungroupedOptions.findIndex((option) => option[this.valueField] === this.value);
            this.keyboardNav = false;
            switch (event.key) {
                case "ArrowDown":
                    this.keyboardNav = true;
                    this.arrowBehaviour(event);
                    this.setNextOptionValue(selectedOptionIndex);
                    break;
                case "ArrowUp":
                    this.keyboardNav = true;
                    this.arrowBehaviour(event);
                    this.setPreviousOptionValue(selectedOptionIndex);
                    break;
                case " ":
                case "Enter":
                    if (event.target.id !== this.CLEAR_BUTTON_ID) {
                        this.handleMenuChange(true);
                    }
                    break;
            }
        };
        this.selectHighlightedOption = (options, highlightedOptionIndex) => {
            if (!this.isLoading && !this.hasTimedOut) {
                this.keyboardNav = true;
            }
            const isOpen = this.searchBar || this.searchableSelect || this.open;
            if (isOpen) {
                if (highlightedOptionIndex >= 0) {
                    if (options[highlightedOptionIndex] !== undefined) {
                        if (this.searchBar &&
                            options[highlightedOptionIndex].disabled === true) {
                            this.disabledOptionSelected = true;
                        }
                        else {
                            this.setInputValue(highlightedOptionIndex);
                        }
                    }
                }
                else {
                    this.setInputValue(highlightedOptionIndex);
                }
            }
            else {
                this.handleMenuChange(true);
            }
        };
        // Check if option is selected based on the index of the option
        this.isOptionSelected = (index) => {
            const menuOptions = this.getMenuOptions();
            return this.value
                ? this.value.includes(menuOptions[index][this.valueField])
                : false;
        };
        // Deselect currently selected options when shift pressed, but keep certain options selected
        this.deselectSelectedOptions = (optionsToKeepSelected) => {
            const menuOptions = this.getMenuOptions();
            if (this.value) {
                const selectedOptionIndexes = this.value.map((value) => {
                    return menuOptions.findIndex((option) => option[this.valueField] === value);
                });
                // Call setInputValue (which toggles the selected state) on options that need to be deselected
                selectedOptionIndexes.forEach((index) => !optionsToKeepSelected.includes(index) && this.setInputValue(index));
            }
        };
        // Determines keyboard behaviour when selection is manual (i.e. when you have to press Enter to select an option)
        this.manualSetInputValueKeyboardOpen = (event) => {
            const menuOptions = this.getMenuOptions();
            // For preventing focus disappearing on currently focused option when Shift / Cmd / Ctrl pressed
            // (i.e. when user is likely in the middle of executing a keyboard combination to select options)
            const isKeyboardCombination = event.shiftKey || event.metaKey || event.ctrlKey;
            const highlightedOptionIndex = this.getOptionHighlightedIndex();
            const clickedMultiOptionIndex = menuOptions.findIndex((option) => option[this.valueField] === this.multiOptionClicked);
            const getOptionId = (index) => { var _a; return (_a = Array.from(this.host.querySelectorAll("li"))[index]) === null || _a === void 0 ? void 0 : _a.id; };
            // Space press should be equivalent to Enter when multi-select
            if (event.key === " " && this.multiSelect) {
                this.handleOptionSelect(event, highlightedOptionIndex);
            }
            else {
                switch (event.key) {
                    case "ArrowDown":
                        this.keyboardNav = true;
                        this.arrowBehaviour(event);
                        if (this.multiOptionClicked) {
                            // Set focus to option last clicked
                            // Prevents it resetting to the top of the menu when user switches to using keyboard
                            this.setHighlightedOption(clickedMultiOptionIndex);
                            this.multiOptionClicked = null;
                        }
                        else {
                            this.handleSingleShiftSelect(event, highlightedOptionIndex, menuOptions);
                            if (highlightedOptionIndex < menuOptions.length - 1) {
                                this.setHighlightedOption(highlightedOptionIndex + 1);
                                this.menuOptionId.emit({
                                    optionId: getOptionId(highlightedOptionIndex + 1),
                                });
                                this.handleSingleShiftSelect(event, highlightedOptionIndex + 1, menuOptions);
                            }
                            else {
                                this.setHighlightedOption(0);
                                this.menuOptionId.emit({
                                    optionId: getOptionId(0),
                                });
                                this.handleSingleShiftSelect(event, 0, menuOptions);
                            }
                            // Deselect currently selected options if arrow was pressed for first time after shift is held
                            if (this.multiSelect && this.shiftPressed) {
                                this.deselectSelectedOptions([
                                    highlightedOptionIndex,
                                    this.getOptionHighlightedIndex(),
                                ]);
                                this.shiftPressed = false;
                            }
                        }
                        this.lastOptionFocused = this.getOptionHighlightedIndex();
                        this.preventIncorrectTabOrder = false;
                        this.focusFromSearchKeypress = false;
                        break;
                    case "ArrowUp":
                        this.keyboardNav = true;
                        this.arrowBehaviour(event);
                        if (this.multiOptionClicked) {
                            // Set focus to option last clicked
                            // Prevents it resetting to the bottom of the menu when user switches to using keyboard
                            this.setHighlightedOption(clickedMultiOptionIndex);
                            this.multiOptionClicked = null;
                        }
                        else {
                            this.handleSingleShiftSelect(event, highlightedOptionIndex, menuOptions);
                            if (highlightedOptionIndex <= 0 ||
                                highlightedOptionIndex > menuOptions.length + 1) {
                                this.setHighlightedOption(menuOptions.length - 1);
                                this.menuOptionId.emit({
                                    optionId: getOptionId(menuOptions.length - 1),
                                });
                                this.handleSingleShiftSelect(event, menuOptions.length - 1, menuOptions);
                            }
                            else {
                                this.setHighlightedOption(highlightedOptionIndex - 1);
                                this.menuOptionId.emit({
                                    optionId: getOptionId(highlightedOptionIndex - 1),
                                });
                                this.handleSingleShiftSelect(event, highlightedOptionIndex - 1, menuOptions);
                            }
                            // Deselect currently selected options if arrow was pressed for first time after shift is held
                            if (this.multiSelect && this.shiftPressed) {
                                this.deselectSelectedOptions([
                                    highlightedOptionIndex,
                                    this.getOptionHighlightedIndex(),
                                ]);
                                this.shiftPressed = false;
                            }
                        }
                        this.lastOptionFocused = this.getOptionHighlightedIndex();
                        this.preventIncorrectTabOrder = false;
                        this.focusFromSearchKeypress = false;
                        break;
                    case "Home": {
                        const startOptionIndex = 0;
                        this.keyboardNav = true;
                        event.preventDefault();
                        this.arrowBehaviour(event);
                        this.setHighlightedOption(startOptionIndex);
                        this.menuOptionId.emit({
                            optionId: getOptionId(startOptionIndex),
                        });
                        if (event.shiftKey && event.ctrlKey) {
                            this.handleMultipleShiftSelect(startOptionIndex);
                        }
                        this.lastOptionFocused = startOptionIndex;
                        this.lastOptionSelected = startOptionIndex;
                        break;
                    }
                    case "End": {
                        const endOptionIndex = menuOptions.length - 1;
                        this.keyboardNav = true;
                        event.preventDefault();
                        this.arrowBehaviour(event);
                        this.setHighlightedOption(endOptionIndex);
                        this.menuOptionId.emit({
                            optionId: getOptionId(endOptionIndex),
                        });
                        if (event.shiftKey && event.ctrlKey) {
                            this.handleMultipleShiftSelect(endOptionIndex);
                        }
                        this.lastOptionFocused = endOptionIndex;
                        this.lastOptionSelected = endOptionIndex;
                        break;
                    }
                    case " ":
                        if (!isKeyboardCombination) {
                            this.keyboardNav = false;
                        }
                        if (this.searchBar || this.searchableSelect) {
                            break;
                        }
                        else {
                            if (event.target.id !== this.CLEAR_BUTTON_ID) {
                                this.handleMenuChange(true);
                            }
                        }
                        break;
                    case "Enter":
                        event.preventDefault();
                        if (!isKeyboardCombination) {
                            this.keyboardNav = false;
                        }
                        this.handleOptionSelect(event, highlightedOptionIndex);
                        break;
                    case "Escape":
                        if (this.open) {
                            event.stopImmediatePropagation();
                        }
                        this.handleMenuChange(false);
                        this.menuOptionId.emit({ optionId: undefined });
                        break;
                    case "a":
                        // Checks if Cmd (meta) key is pressed if Mac device (while excluding meta key on Windows)
                        // Otherwise, if a different OS, checks Ctrl key
                        if ((isMacDevice() && event.metaKey) ||
                            (!isMacDevice() && event.ctrlKey)) {
                            this.emitSelectAllEvents();
                            this.lastOptionFocused = null;
                            this.lastOptionSelected = null;
                        }
                        break;
                    case "Shift":
                    case "Tab":
                        if (event.key === "Shift") {
                            this.shiftPressed = true;
                        }
                        if (this.searchBar) {
                            this.keyboardNav = true;
                        }
                        if (this.multiSelect) {
                            if (this.open && !event.shiftKey && this.selectAllButton) {
                                event.preventDefault();
                                this.selectAllButton.focus(); // Move focus to select all button instead of focused option
                                this.preventMenuFocus = true;
                                this.preventClickOpen = true;
                                this.optionHighlighted = undefined; // Stop any option focus states showing when focus moved to select all button
                            }
                        }
                        else {
                            this.preventIncorrectTabOrder = true;
                        }
                        break;
                    default:
                        if (!isKeyboardCombination) {
                            this.keyboardNav = false;
                        }
                        this.focusOnSearchOrSelectInput(menuOptions, highlightedOptionIndex);
                }
            }
        };
        this.setInputValue = (highlightedOptionIndex) => {
            const menuOptions = this.getMenuOptions();
            if (menuOptions[highlightedOptionIndex] !== undefined) {
                this.menuOptionSelect.emit({
                    value: menuOptions[highlightedOptionIndex][this.valueField],
                });
                if (this.closeOnSelect) {
                    this.optionHighlighted = undefined;
                    this.menuOptionId.emit({ optionId: undefined });
                }
            }
            if (this.closeOnSelect) {
                if (!this.hasTimedOut) {
                    this.handleMenuChange(false);
                }
                else {
                    this.parentEl.setFocus();
                }
            }
        };
        this.handleOptionClick = (event) => {
            const { value, label } = event.target.dataset;
            if (this.multiSelect) {
                const menuOptions = this.getMenuOptions();
                const selectedOptionIndex = menuOptions.findIndex((option) => option[this.valueField] === value);
                this.handleOptionSelect(event, selectedOptionIndex, true);
                this.multiOptionClicked = value || null;
            }
            else {
                this.menuOptionSelect.emit({ value, label });
                this.handleMenuChange(false);
            }
            this.optionHighlighted = undefined;
        };
        this.handleRetry = () => {
            this.retryButtonClicked.emit({ value: this.value });
        };
        this.handleRetryKeyDown = (ev) => {
            if (ev.key === "Enter" || ev.key === " ") {
                ev.preventDefault();
                this.retryButtonClicked.emit({ value: this.value, keyPressed: ev.key });
            }
        };
        this.handleBlur = (event) => {
            var _a, _b, _c, _d;
            if (event.relatedTarget !== this.inputEl) {
                if (event.relatedTarget === this.selectAllButton) {
                    (_a = this.menu) === null || _a === void 0 ? void 0 : _a.removeAttribute(this.ACTIVE_DESCENDANT);
                }
                if (!(((_b = this.menu) === null || _b === void 0 ? void 0 : _b.contains(event.relatedTarget)) ||
                    event.relatedTarget === this.selectAllButton)) {
                    this.handleMenuChange(false, this.hasPreviouslyBlurred);
                    (_c = this.menu) === null || _c === void 0 ? void 0 : _c.removeAttribute(this.ACTIVE_DESCENDANT);
                    this.lastOptionFocused = null;
                    this.lastOptionSelected = null;
                }
            }
            else {
                this.handleMenuChange(false);
                this.preventClickOpen = true;
                (_d = this.menu) === null || _d === void 0 ? void 0 : _d.removeAttribute(this.ACTIVE_DESCENDANT);
                this.lastOptionFocused = null;
                this.lastOptionSelected = null;
            }
            if (!this.searchBar)
                this.hasPreviouslyBlurred = !!event.relatedTarget;
        };
        this.handleMouseDown = (event) => {
            event.preventDefault();
        };
        this.handleMenuKeyDown = (event) => {
            if (this.activationType === "automatic") {
                this.autoSetValueOnMenuKeyDown(event);
            }
            else if (this.activationType === "manual" && !this.searchBar) {
                this.manualSetInputValueKeyboardOpen(event);
            }
        };
        this.handleMenuKeyUp = (event) => {
            if (event.key === "Tab" && event.shiftKey) {
                this.preventClickOpen = false;
            }
            if (event.key === "Enter" && this.disabledOptionSelected) {
                this.disabledOptionSelected = false;
                event.stopImmediatePropagation();
            }
            if (event.key === "Shift") {
                this.shiftPressed = false;
            }
        };
        this.handleSelectAllClick = () => {
            var _a;
            this.keyboardNav = false;
            (_a = this.menu) === null || _a === void 0 ? void 0 : _a.focus();
            this.emitSelectAllEvents();
            this.lastOptionFocused = null;
            this.lastOptionSelected = null;
        };
        this.handleSelectAllBlur = (event) => {
            var _a;
            this.host.classList.remove("ic-select-select-all-focused");
            if (!((_a = this.menu) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget))) {
                this.handleMenuChange(false, false);
            }
        };
        this.handleSelectAllFocus = () => {
            this.host.classList.add("ic-select-select-all-focused");
            this.lastOptionFocused = null;
            this.lastOptionSelected = null;
        };
        // Fix for Safari - select all button click was causing menu to close
        this.handleSelectAllMouseDown = (event) => {
            event.preventDefault();
        };
        // When shift key is being used to select contiguous options one by one on a multi-select
        // I.e. holding shift and pressing up and down arrow keys
        this.handleSingleShiftSelect = (event, optionToSelectIndex, options) => {
            if (this.multiSelect &&
                event.shiftKey &&
                !this.isOptionSelected(optionToSelectIndex)) {
                this.selectHighlightedOption(options, optionToSelectIndex);
                this.lastOptionSelected = optionToSelectIndex;
            }
        };
        // When shift key is being used to select multiple options at once on a multi-select
        // I.e. holding shift when selecting another option
        this.handleMultipleShiftSelect = (lastOptionInSelection, useFocusForSelection = false, firstOptionSelected = null) => {
            this.shiftPressed = false;
            const firstOptionInSelection = firstOptionSelected === null
                ? this.getFirstOptionInSelection(useFocusForSelection)
                : firstOptionSelected;
            if (firstOptionInSelection !== null) {
                const optionsToSelect = [];
                if (firstOptionInSelection < lastOptionInSelection) {
                    for (let i = firstOptionInSelection; i < lastOptionInSelection + 1; i++) {
                        optionsToSelect.push(i);
                    }
                }
                else {
                    for (let i = firstOptionInSelection; i > lastOptionInSelection - 1; i--) {
                        optionsToSelect.push(i);
                    }
                }
                optionsToSelect.forEach((optionIndex) => !this.isOptionSelected(optionIndex) && this.setInputValue(optionIndex));
                this.deselectSelectedOptions(optionsToSelect);
            }
        };
        this.handleOptionSelect = (event, optionIndex, useFocusForSelection = false) => {
            const menuOptions = this.getMenuOptions();
            const firstOptionInSelection = this.getFirstOptionInSelection(useFocusForSelection);
            if (event.shiftKey && firstOptionInSelection !== null) {
                this.handleMultipleShiftSelect(optionIndex, useFocusForSelection, firstOptionInSelection);
            }
            else {
                this.selectHighlightedOption(menuOptions, optionIndex);
            }
            this.lastOptionFocused = optionIndex;
            this.lastOptionSelected = optionIndex;
        };
        this.getFirstOptionInSelection = (useFocusForSelection) => {
            return useFocusForSelection && this.lastOptionFocused !== null
                ? this.lastOptionFocused
                : this.lastOptionSelected !== null
                    ? this.lastOptionSelected
                    : null;
        };
        this.emitSelectAllEvents = () => {
            var _a, _b;
            // Select all if there is either no value or not all options are selected
            // 'true' means select all, 'false' means clear all
            this.menuOptionSelectAll.emit({
                select: !this.value || !(((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) === this.ungroupedOptions.length),
            });
            // Emit clear event if all options are selected
            if (((_b = this.value) === null || _b === void 0 ? void 0 : _b.length) === this.ungroupedOptions.length) {
                this.icClear.emit();
            }
        };
        this.emitMenuKeyPress = (isNavKey, key) => {
            this.menuKeyPress.emit({ isNavKey: isNavKey, key: key });
        };
        // Determines keyboard behaviour when selection is automatic
        // (i.e. you don't have to press Enter select an option - just focus on it)
        // and menu is focused
        this.autoSetValueOnMenuKeyDown = (event) => {
            var _a, _b;
            event.cancelBubble = true;
            const selectedOptionIndex = this.ungroupedOptions.findIndex((option) => option[this.valueField] === this.value);
            const isSearchableSelect = !!this.inputEl && this.inputEl.tagName === "INPUT";
            this.keyboardNav = false;
            switch (event.key) {
                case " ":
                    event.preventDefault();
                    break;
                case "ArrowUp":
                    if (!this.hasTimedOut) {
                        event.preventDefault();
                        this.setPreviousOptionValue(selectedOptionIndex);
                        this.keyboardNav = true;
                    }
                    break;
                case "ArrowDown":
                    if (!this.hasTimedOut) {
                        event.preventDefault();
                        this.setNextOptionValue(selectedOptionIndex);
                        this.keyboardNav = true;
                    }
                    break;
                case "Home":
                    this.menuOptionSelect.emit({
                        value: this.ungroupedOptions[0][this.valueField],
                    });
                    this.keyboardNav = true;
                    break;
                case "End":
                    this.menuOptionSelect.emit({
                        value: this.ungroupedOptions[this.ungroupedOptions.length - 1][this.valueField],
                    });
                    this.keyboardNav = true;
                    break;
                case "Enter":
                    !this.hasTimedOut && this.handleMenuChange(false);
                    break;
                case "Escape":
                    this.handleMenuChange(false);
                    break;
                case "Backspace":
                    if (isSearchableSelect) {
                        (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
                    }
                    break;
                case "Shift":
                    break;
                default:
                    if (isSearchableSelect && event.key !== "Tab" && !this.hasTimedOut) {
                        (_b = this.inputEl) === null || _b === void 0 ? void 0 : _b.focus();
                    }
                    if (event.key.length === 1) {
                        this.keyboardNav = true;
                    }
                    break;
            }
            this.emitMenuKeyPress(this.keyboardNav, event.key);
        };
        this.getOptionId = (value) => {
            return `${this.menuId}-${value}`;
        };
        this.getOptionAriaLabel = (option, parentOption) => {
            let ariaLabel = option[this.labelField];
            if (option.description) {
                ariaLabel = `${ariaLabel}, ${option.description}`;
            }
            if (option.element) {
                ariaLabel = `${ariaLabel}, ${option.element.ariaLabel}`;
            }
            if (parentOption) {
                return `${ariaLabel}, ${parentOption[this.labelField]} group`;
            }
            else {
                return ariaLabel;
            }
        };
        this.getSortedOptions = (options) => {
            let sorted = [];
            if (options.sort) {
                sorted = options.sort((optionA, optionB) => optionA.recommended && !optionB.recommended ? -1 : 0);
            }
            return sorted;
        };
        this.getOptionHighlightedIndex = () => {
            const menuOptions = this.getMenuOptions();
            return menuOptions.findIndex((option) => option[this.valueField] === this.optionHighlighted);
        };
        this.isManualMode = this.activationType === "manual";
        this.scrollToSelected = (menu) => {
            var _a;
            const selectedOption = this.selectOnEnter
                ? this.host.querySelector(`li[data-value="${this.optionHighlighted}"]`)
                : menu.querySelector(".option[aria-selected='true']");
            if (selectedOption) {
                const elTop = selectedOption.offsetTop + selectedOption.offsetHeight;
                if (elTop > menu.scrollTop + menu.offsetHeight ||
                    elTop < menu.scrollTop + menu.offsetHeight) {
                    menu.scrollTop = selectedOption.offsetTop;
                }
                // 'aria-activedescendant' affects screen reader focus
                // https://www.w3.org/TR/2017/WD-wai-aria-practices-1.1-20170628/#kbd_focus_activedescendant
                (_a = this.menu) === null || _a === void 0 ? void 0 : _a.setAttribute(this.ACTIVE_DESCENDANT, selectedOption.id);
                selectedOption.focus();
            }
        };
        // Set 'ungroupedOptions' variable and emit its value
        // - this is all the options with disabled options and group titles removed
        this.loadUngroupedOptions = () => {
            if (this.options.length > 0 && this.options.map) {
                this.options.map((option) => {
                    if (option.children) {
                        option.children.map((option) => !option.disabled && this.ungroupedOptions.push(option));
                    }
                    else if (!option.disabled) {
                        this.ungroupedOptions.push(option);
                    }
                });
            }
            this.ungroupedOptions = this.getSortedOptions(this.ungroupedOptions);
            this.ungroupedOptionsSet.emit({ options: this.ungroupedOptions });
        };
        this.setMenuScrollbar = () => {
            var _a;
            let optionsHeight = 0;
            this.host
                .querySelectorAll(".option, .option-group-title")
                .forEach((option) => (optionsHeight += option.clientHeight));
            if (optionsHeight >= 320) {
                (_a = this.menu) === null || _a === void 0 ? void 0 : _a.classList.add("menu-scroll");
            }
        };
        this.handleTimeoutBlur = (ev) => {
            this.timeoutBlur.emit({ ev });
        };
        this.optionContent = (option, selected) => {
            var _a;
            const showCheckIcon = !!option[this.valueField] &&
                !!this.value &&
                selected &&
                ((_a = this.parentEl) === null || _a === void 0 ? void 0 : _a.tagName) !== this.SEARCH_BAR_TAG;
            return (h(Fragment, null, option.loading && h("ic-loading-indicator", { size: "icon" }), h("div", { class: {
                    "option-text-container": true,
                    "show-check-icon": showCheckIcon,
                } }, (option.icon || !option.hideLabel) && (h("div", { class: "option-label" }, option.icon && (h("div", { class: "option-icon", innerHTML: sanitizeHTMLIconString(option.icon), "aria-hidden": "true" })), !option.hideLabel && (h("ic-typography", { variant: "body", "aria-hidden": "true" }, option[this.labelField])))), option.description && (h("ic-typography", { id: `${this.getOptionId(option[this.valueField])}-description`, class: "option-description", variant: "caption", "aria-hidden": "true" }, h("p", null, option.description))), option.element && (h("div", { class: {
                    "option-element": option.icon || !option.hideLabel || option.description,
                }, innerHTML: sanitizeHTMLString(option.element.component), "aria-hidden": "true" }))), showCheckIcon && h("span", { class: "check-icon", innerHTML: Check })));
        };
        this.displayOption = (option, selected, index, parentOption) => {
            var _a;
            const { open, keyboardNav, isManualMode, initialOptionsListRender, optionHighlighted, options, } = this;
            return (h("li", Object.assign({ id: this.getOptionId(option[this.valueField]), class: {
                    option: true,
                    "focused-option": isManualMode
                        ? (keyboardNav || initialOptionsListRender) &&
                            option[this.valueField] === optionHighlighted
                        : keyboardNav && selected,
                    "last-recommended-option": !!(option.recommended &&
                        options[index + 1] &&
                        !options[index + 1].recommended),
                    "disabled-option": !!option.disabled,
                    "loading-option": !!option.loading,
                    timeout: !!option.timedOut,
                }, role: "option", tabindex: open &&
                    (selected || option[this.valueField] === optionHighlighted) &&
                    keyboardNav
                    ? "0"
                    : "-1", "aria-label": this.getOptionAriaLabel(option, parentOption), "aria-selected": selected ? "true" : "false", "aria-disabled": option.disabled ? "true" : "false", onClick: !option.timedOut && !option.loading
                    ? this.handleOptionClick
                    : undefined, onBlur: this.handleBlur, onMouseDown: this.handleMouseDown, "data-value": option[this.valueField], "data-label": option[this.labelField] }, ((_a = option.htmlProps) !== null && _a !== void 0 ? _a : {})), option.timedOut ? (h(Fragment, null, h("div", { class: "loading-error-info" }, h("svg", { class: "error-icon-svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "#000000" }, h("title", null, "Error"), h("g", null, h("path", { d: "M8.77 3L3.5 8.27V15.73L8.77 21H16.23L21.5 15.73V8.27L16.23 3M8.91 7L12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41" }))), h("ic-typography", { variant: "label" }, option[this.labelField])), h("ic-button", { size: "small", variant: "tertiary", onClick: this.handleRetry, onKeyDown: this.handleRetryKeyDown, onBlur: this.handleTimeoutBlur, id: "retry-button" }, "Retry"))) : (this.optionContent(option, selected))));
        };
    }
    watchOpenHandler() {
        if (!this.open && this.popperInstance) {
            this.popperInstance.destroy();
            this.popperInstance = null;
        }
    }
    watchOptionsHandler(newOptions) {
        this.hasTimedOut = newOptions.some((opt) => opt.timedOut);
        this.isLoading = newOptions.some((opt) => opt.loading);
        this.ungroupedOptions = [];
        this.loadUngroupedOptions();
    }
    connectedCallback() {
        if (this.searchBar) {
            if (this.searchMode === "navigation")
                this.setHighlightedOption(0);
            this.initialOptionsListRender = true;
        }
    }
    disconnectedCallback() {
        var _a, _b, _c;
        (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.parentEl) === null || _b === void 0 ? void 0 : _b.removeEventListener("icClear", this.handleClearListener);
        (_c = this.parentEl) === null || _c === void 0 ? void 0 : _c.removeEventListener("icSubmitSearch", this.handleSubmitSearch);
    }
    componentWillLoad() {
        var _a, _b, _c, _d;
        this.loadUngroupedOptions();
        (_a = this.parentEl) === null || _a === void 0 ? void 0 : _a.addEventListener("icClear", this.handleClearListener);
        (_b = this.parentEl) === null || _b === void 0 ? void 0 : _b.addEventListener("icSubmitSearch", this.handleSubmitSearch);
        this.hasTimedOut = (_c = this.options) === null || _c === void 0 ? void 0 : _c.some((opt) => opt.timedOut);
        this.isLoading = (_d = this.options) === null || _d === void 0 ? void 0 : _d.some((opt) => opt.loading);
    }
    componentDidLoad() {
        if (this.searchBar &&
            this.parentEl.disableAutoFiltering) {
            this.focusFromSearchKeypress = true;
        }
        onComponentRequiredPropUndefined([
            { prop: this.open, propName: "open" },
            { prop: this.options, propName: "options" },
            { prop: this.menuId, propName: "menu-id" },
            { prop: this.inputLabel, propName: "input-label" },
            //NOTE: no check for value, input-el or anchor-el as otherwise get console errors on first load of select component
        ], "Menu");
    }
    componentDidUpdate() {
        const inputValueInOptions = this.options.some((option) => option[this.valueField] === this.value);
        if (this.menu &&
            this.open &&
            this.options.length !== 0 &&
            !this.preventMenuFocus) {
            if (this.value &&
                this.keyboardNav &&
                inputValueInOptions &&
                this.autofocusOnSelected &&
                !this.searchableSelect) {
                this.scrollToSelected(this.menu);
            }
            else if (this.selectOnEnter) {
                this.menu.focus();
            }
            else if (!!this.optionHighlighted &&
                !this.focusFromSearchKeypress &&
                !this.preventIncorrectTabOrder) {
                const highlightedEl = this.host.querySelector(`li[data-value="${this.optionHighlighted}"]`);
                if (highlightedEl) {
                    this.menu.setAttribute(this.ACTIVE_DESCENDANT, highlightedEl.id);
                    highlightedEl.focus();
                }
            }
            else if (this.inputEl && this.inputEl.tagName !== "INPUT") {
                this.menu.focus();
            }
        }
        if (this.menu && this.open && !this.value && this.selectOnEnter) {
            this.scrollToSelected(this.menu);
        }
        this.preventMenuFocus = false;
    }
    componentDidRender() {
        if (this.open && !this.popperInstance && this.anchorEl) {
            this.initPopperJs(this.anchorEl);
        }
        if (this.open && !!this.options.length) {
            this.setMenuScrollbar();
        }
    }
    /**
     * @internal If menu is opened with the mouse, emit menuStateChange custom event.
     */
    async handleClickOpen() {
        if (!this.preventClickOpen) {
            this.menuStateChange.emit({ open: !this.open });
            this.keyboardNav = false;
        }
        this.preventClickOpen = false;
    }
    /**
     * Used alongside activationType
     * If menu is opened via keyboard navigation (i.e. Enter, ArrowUp or ArrowDown), emit optionSelect custom event.
     * @param {KeyboardEvent} event The keyboard event which is available when handleKeyboardOpen is invoked.
     */
    async handleKeyboardOpen(event) {
        if (this.activationType === "automatic") {
            this.autoSetInputValueKeyboardOpen(event);
        }
        else {
            this.manualSetInputValueKeyboardOpen(event);
        }
    }
    /**
     * @internal Used to highlight the first option in the menu.
     */
    async handleSetFirstOption() {
        this.setHighlightedOption(0);
    }
    /**
     * @internal Used to initialize popperJS with an anchor element.
     * 5/12/2023: Tested with Floating UI, however, discovered inconsistent
     * boundary behaviour so sticking with PopperJS.
     */
    async initPopperJs(anchor) {
        // Placements set to "-start" to accommodate for custom menu width - menu should always be aligned to the left
        this.popperInstance = createPopper(anchor, this.host, Object.assign({ placement: "bottom-start", modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 7],
                    },
                },
                {
                    name: "flip",
                    options: {
                        fallbackPlacements: ["top-start"],
                        rootBoundary: "viewport",
                    },
                },
            ] }, this.popperProps));
    }
    /**
     * @internal This method allows props to be added to the PopperJS createPopper instance outside of the menu
     * @param props object - createPopper props set externally
     */
    async setExternalPopperProps(props) {
        this.popperProps = props;
    }
    focusOnSearchOrSelectInput(menuOptions, highlightedOptionIndex) {
        if (!menuOptions[highlightedOptionIndex])
            return;
        if (this.searchBar) {
            this.parentEl.setFocus();
            if (this.searchMode === "navigation")
                this.setHighlightedOption(0);
        }
        if (this.searchableSelect) {
            this.parentEl.setFocus();
        }
        this.focusFromSearchKeypress = true;
    }
    render() {
        const { inputLabel, options, menuId, value, fullWidth, hasTimedOut, isLoading, size, open, inputEl, keyboardNav, parentEl, SEARCH_BAR_TAG, multiSelect, } = this;
        const selectAllButtonText = `${(value === null || value === void 0 ? void 0 : value.length) === this.ungroupedOptions.length ? "Clear" : "Select"} all`;
        const hasNoResults = this.host.classList.contains("no-results");
        return (h(Host, { key: '8dad972db607187821f9063a35f75768df5adcc1', class: {
                "ic-menu-full-width": !!fullWidth,
                "ic-menu-no-focus": ((inputEl === null || inputEl === void 0 ? void 0 : inputEl.tagName) === "INPUT" &&
                    (parentEl === null || parentEl === void 0 ? void 0 : parentEl.tagName) !== SEARCH_BAR_TAG) ||
                    hasTimedOut ||
                    isLoading,
                [`ic-menu-${size}`]: true,
                "ic-menu-open": open && options.length !== 0,
                "ic-menu-multiple": multiSelect,
            } }, options.length !== 0 && (h("ul", { key: 'bbdb630e801155ddb22240206eac4f919807ec2d', id: menuId, class: "menu", role: "listbox", "aria-label": `${inputLabel} pop-up`, "aria-multiselectable": multiSelect ? "true" : "false", tabindex: open &&
                !keyboardNav &&
                ((inputEl === null || inputEl === void 0 ? void 0 : inputEl.tagName) !== "INPUT" ||
                    (parentEl === null || parentEl === void 0 ? void 0 : parentEl.tagName) === SEARCH_BAR_TAG)
                ? "0"
                : "-1", ref: (el) => (this.menu = el), onKeyDown: this.handleMenuKeyDown, onKeyUp: this.handleMenuKeyUp, onBlur: this.handleBlur }, this.getSortedOptions(options).map((option, index) => {
            if (option.children) {
                if (option.children.length > 0) {
                    return (h("div", null, h("ic-typography", { class: "option-group-title", role: "presentation", variant: "subtitle-small" }, h("p", null, option[this.labelField])), option.children.map((childOption) => childOption[this.labelField] &&
                        this.displayOption(childOption, multiSelect
                            ? value === null || value === void 0 ? void 0 : value.includes(childOption[this.valueField])
                            : childOption[this.valueField] === value, index, option))));
                }
                else {
                    return null;
                }
            }
            else {
                // Display option only if it has a label (rather than displaying an empty space)
                return (option[this.labelField] &&
                    this.displayOption(option, multiSelect
                        ? value === null || value === void 0 ? void 0 : value.includes(option[this.valueField])
                        : option[this.valueField] === value, index));
            }
        }))), options.length !== 0 &&
            multiSelect &&
            !isLoading &&
            !hasTimedOut &&
            !hasNoResults && (h("div", { key: '2806fdd383f3450d651e681a0156c47cd98689c5', class: "option-bar" }, h("ic-typography", { key: 'dd2e0b74622eb359e4e53cc5c7b0f031ef577ca2' }, h("p", { key: 'f6132822d0bf66e869b4c2bceba7dfcf93e697be' }, `${value ? value.length : 0}/${getOptionsWithoutGroupTitlesCount(this.options)} selected`)), h("ic-button", { key: 'e233f3ac017ce08d46d1973406a4bb99bcfa2cf6', class: "select-all-button", "aria-label": `${selectAllButtonText} options for ${inputLabel}`, ref: (el) => (this.selectAllButton = el), variant: "tertiary", onClick: this.handleSelectAllClick, onMouseDown: this.handleSelectAllMouseDown, onBlur: this.handleSelectAllBlur, onFocus: this.handleSelectAllFocus, size: size === "small" ? "small" : "medium" }, selectAllButtonText)))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "open": ["watchOpenHandler"],
        "options": ["watchOptionsHandler"]
    }; }
};
Menu.style = IcMenuStyle0;

export { InputComponentContainer as ic_input_component_container, InputContainer as ic_input_container, Menu as ic_menu };

//# sourceMappingURL=ic-input-component-container_3.entry.js.map