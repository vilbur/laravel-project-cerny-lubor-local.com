webpackJsonp([6],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery YouTube Video Factory JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document, YT */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(76), __webpack_require__(79)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {
    // Browser globals:
    factory(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
  }
})(function ($, Gallery) {
  'use strict'

  if (!window.postMessage) {
    return Gallery
  }

  $.extend(Gallery.prototype.options, {
    // The list object property (or data attribute) with the YouTube video id:
    youTubeVideoIdProperty: 'youtube',
    // Optional object with parameters passed to the YouTube video player:
    // https://developers.google.com/youtube/player_parameters
    youTubePlayerVars: {
      wmode: 'transparent'
    },
    // Require a click on the native YouTube player for the initial playback:
    youTubeClickToPlay: true
  })

  var textFactory =
    Gallery.prototype.textFactory || Gallery.prototype.imageFactory
  var YouTubePlayer = function (videoId, playerVars, clickToPlay) {
    this.videoId = videoId
    this.playerVars = playerVars
    this.clickToPlay = clickToPlay
    this.element = document.createElement('div')
    this.listeners = {}
  }

  $.extend(YouTubePlayer.prototype, {
    canPlayType: function () {
      return true
    },

    on: function (type, func) {
      this.listeners[type] = func
      return this
    },

    loadAPI: function () {
      var that = this
      var onYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady
      var apiUrl = '//www.youtube.com/iframe_api'
      var scriptTags = document.getElementsByTagName('script')
      var i = scriptTags.length
      var scriptTag
      window.onYouTubeIframeAPIReady = function () {
        if (onYouTubeIframeAPIReady) {
          onYouTubeIframeAPIReady.apply(this)
        }
        if (that.playOnReady) {
          that.play()
        }
      }
      while (i) {
        i -= 1
        if (scriptTags[i].src === apiUrl) {
          return
        }
      }
      scriptTag = document.createElement('script')
      scriptTag.src = apiUrl
      scriptTags[0].parentNode.insertBefore(scriptTag, scriptTags[0])
    },

    onReady: function () {
      this.ready = true
      if (this.playOnReady) {
        this.play()
      }
    },

    onPlaying: function () {
      if (this.playStatus < 2) {
        this.listeners.playing()
        this.playStatus = 2
      }
    },

    onPause: function () {
      Gallery.prototype.setTimeout.call(this, this.checkSeek, null, 2000)
    },

    checkSeek: function () {
      if (
        this.stateChange === YT.PlayerState.PAUSED ||
        this.stateChange === YT.PlayerState.ENDED
      ) {
        // check if current state change is actually paused
        this.listeners.pause()
        delete this.playStatus
      }
    },

    onStateChange: function (event) {
      switch (event.data) {
        case YT.PlayerState.PLAYING:
          this.hasPlayed = true
          this.onPlaying()
          break
        case YT.PlayerState.PAUSED:
        case YT.PlayerState.ENDED:
          this.onPause()
          break
      }
      // Save most recent state change to this.stateChange
      this.stateChange = event.data
    },

    onError: function (event) {
      this.listeners.error(event)
    },

    play: function () {
      var that = this
      if (!this.playStatus) {
        this.listeners.play()
        this.playStatus = 1
      }
      if (this.ready) {
        if (
          !this.hasPlayed &&
          (this.clickToPlay ||
            (window.navigator &&
              /iP(hone|od|ad)/.test(window.navigator.platform)))
        ) {
          // Manually trigger the playing callback if clickToPlay
          // is enabled and to workaround a limitation in iOS,
          // which requires synchronous user interaction to start
          // the video playback:
          this.onPlaying()
        } else {
          this.player.playVideo()
        }
      } else {
        this.playOnReady = true
        if (!(window.YT && YT.Player)) {
          this.loadAPI()
        } else if (!this.player) {
          this.player = new YT.Player(this.element, {
            videoId: this.videoId,
            playerVars: this.playerVars,
            events: {
              onReady: function () {
                that.onReady()
              },
              onStateChange: function (event) {
                that.onStateChange(event)
              },
              onError: function (event) {
                that.onError(event)
              }
            }
          })
        }
      }
    },

    pause: function () {
      if (this.ready) {
        this.player.pauseVideo()
      } else if (this.playStatus) {
        delete this.playOnReady
        this.listeners.pause()
        delete this.playStatus
      }
    }
  })

  $.extend(Gallery.prototype, {
    YouTubePlayer: YouTubePlayer,

    textFactory: function (obj, callback) {
      var options = this.options
      var videoId = this.getItemProperty(obj, options.youTubeVideoIdProperty)
      if (videoId) {
        if (this.getItemProperty(obj, options.urlProperty) === undefined) {
          obj[options.urlProperty] = '//www.youtube.com/watch?v=' + videoId
        }
        if (
          this.getItemProperty(obj, options.videoPosterProperty) === undefined
        ) {
          obj[options.videoPosterProperty] =
            '//img.youtube.com/vi/' + videoId + '/maxresdefault.jpg'
        }
        return this.videoFactory(
          obj,
          callback,
          new YouTubePlayer(
            videoId,
            options.youTubePlayerVars,
            options.youTubeClickToPlay
          )
        )
      }
      return textFactory.call(this, obj, callback)
    }
  })

  return Gallery
})


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columnsX is-centered is-multiline" },
    [
      _c("vue-gallery", {
        attrs: {
          id: "blueimp-gallery-" + _vm.portfolio_slug,
          images: _vm.galleryImages,
          index: _vm.index,
          options: {
            youTubeVideoIdProperty: "video",
            youTubePlayerVars: { rel: 0 },
            youTubeClickToPlay: false
          }
        },
        on: {
          close: function($event) {
            _vm.index = null
          }
        }
      }),
      _vm._v(" "),
      _vm._l(_vm.portfolioItems, function(item) {
        return _c("div", { staticClass: "column is-12" }, [
          _c("div", { staticClass: "portfolio-item columns" }, [
            _vm.hasText(item)
              ? _c("div", { staticClass: "portfolio-item-about column is-4" }, [
                  item.title
                    ? _c("h3", { staticClass: "title is-3" }, [
                        _vm._v(_vm._s(item.title))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.summary
                    ? _c("h4", { staticClass: "subtitle is-4" }, [
                        _vm._v(_vm._s(item.summary))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.description
                    ? _c("div", {
                        domProps: { innerHTML: _vm._s(item.description) }
                      })
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "column is-8 portfolio-item-thumbs" },
              [
                _c("portfolio-file", {
                  attrs: { portfolio_item_id: item.id },
                  on: {
                    imagesPrepared: _vm.addGalleryImages,
                    imageClicked: _vm.openGallery
                  }
                })
              ],
              1
            )
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bb535e8a", module.exports)
  }
}

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-scrollto'] = factory());
}(this, (function () { 'use strict';

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

var src = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

var easings = {
    ease: [0.25, 0.1, 0.25, 1.0],
    linear: [0.00, 0.0, 1.00, 1.0],
    "ease-in": [0.42, 0.0, 1.00, 1.0],
    "ease-out": [0.00, 0.0, 0.58, 1.0],
    "ease-in-out": [0.42, 0.0, 0.58, 1.0]
};

// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
var supportsPassive = false;
try {
    var opts = Object.defineProperty({}, "passive", {
        get: function get() {
            supportsPassive = true;
        }
    });
    window.addEventListener("test", null, opts);
} catch (e) {}

var _ = {
    $: function $(selector) {
        if (typeof selector !== "string") {
            return selector;
        }
        return document.querySelector(selector);
    },
    on: function on(element, events, handler) {
        var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { passive: false };

        if (!(events instanceof Array)) {
            events = [events];
        }
        for (var i = 0; i < events.length; i++) {
            element.addEventListener(events[i], handler, supportsPassive ? opts : false);
        }
    },
    off: function off(element, events, handler) {
        if (!(events instanceof Array)) {
            events = [events];
        }
        for (var i = 0; i < events.length; i++) {
            element.removeEventListener(events[i], handler);
        }
    },
    cumulativeOffset: function cumulativeOffset(element) {
        var top = 0;
        var left = 0;

        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top,
            left: left
        };
    }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var abortEvents = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];

var defaults$$1 = {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
};

function setDefaults(options) {
    defaults$$1 = _extends({}, defaults$$1, options);
}

var scroller = function scroller() {
    var element = void 0; // element to scroll to
    var container = void 0; // container to scroll
    var duration = void 0; // duration of the scrolling
    var easing = void 0; // easing to be used when scrolling
    var offset = void 0; // offset to be added (subtracted)
    var cancelable = void 0; // indicates if user can cancel the scroll or not.
    var onStart = void 0; // callback when scrolling is started
    var onDone = void 0; // callback when scrolling is done
    var onCancel = void 0; // callback when scrolling is canceled / aborted
    var x = void 0; // scroll on x axis
    var y = void 0; // scroll on y axis

    var initialX = void 0; // initial X of container
    var targetX = void 0; // target X of container
    var initialY = void 0; // initial Y of container
    var targetY = void 0; // target Y of container
    var diffX = void 0; // difference
    var diffY = void 0; // difference

    var abort = void 0; // is scrolling aborted

    var abortEv = void 0; // event that aborted scrolling
    var abortFn = function abortFn(e) {
        if (!cancelable) return;
        abortEv = e;
        abort = true;
    };
    var easingFn = void 0;

    var timeStart = void 0; // time when scrolling started
    var timeElapsed = void 0; // time elapsed since scrolling started

    var progress = void 0; // progress

    function scrollTop(container) {
        var scrollTop = container.scrollTop;

        if (container.tagName.toLowerCase() === "body") {
            // in firefox body.scrollTop always returns 0
            // thus if we are trying to get scrollTop on a body tag
            // we need to get it from the documentElement
            scrollTop = scrollTop || document.documentElement.scrollTop;
        }

        return scrollTop;
    }

    function scrollLeft(container) {
        var scrollLeft = container.scrollLeft;

        if (container.tagName.toLowerCase() === "body") {
            // in firefox body.scrollLeft always returns 0
            // thus if we are trying to get scrollLeft on a body tag
            // we need to get it from the documentElement
            scrollLeft = scrollLeft || document.documentElement.scrollLeft;
        }

        return scrollLeft;
    }

    function step(timestamp) {
        if (abort) return done();
        if (!timeStart) timeStart = timestamp;

        timeElapsed = timestamp - timeStart;

        progress = Math.min(timeElapsed / duration, 1);
        progress = easingFn(progress);

        topLeft(container, initialY + diffY * progress, initialX + diffX * progress);

        timeElapsed < duration ? window.requestAnimationFrame(step) : done();
    }

    function done() {
        if (!abort) topLeft(container, targetY, targetX);
        timeStart = false;

        _.off(container, abortEvents, abortFn);
        if (abort && onCancel) onCancel(abortEv, element);
        if (!abort && onDone) onDone(element);
    }

    function topLeft(element, top, left) {
        if (y) element.scrollTop = top;
        if (x) element.scrollLeft = left;
        if (element.tagName.toLowerCase() === "body") {
            // in firefox body.scrollTop doesn't scroll the page
            // thus if we are trying to scrollTop on a body tag
            // we need to scroll on the documentElement
            if (y) document.documentElement.scrollTop = top;
            if (x) document.documentElement.scrollLeft = left;
        }
    }

    function scrollTo(target, _duration) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if ((typeof _duration === "undefined" ? "undefined" : _typeof(_duration)) === "object") {
            options = _duration;
        } else if (typeof _duration === "number") {
            options.duration = _duration;
        }

        element = _.$(target);

        if (!element) {
            return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + target);
        }

        container = _.$(options.container || defaults$$1.container);
        duration = options.duration || defaults$$1.duration;
        easing = options.easing || defaults$$1.easing;
        offset = options.offset || defaults$$1.offset;
        cancelable = options.hasOwnProperty("cancelable") ? options.cancelable !== false : defaults$$1.cancelable;
        onStart = options.onStart || defaults$$1.onStart;
        onDone = options.onDone || defaults$$1.onDone;
        onCancel = options.onCancel || defaults$$1.onCancel;
        x = options.x === undefined ? defaults$$1.x : options.x;
        y = options.y === undefined ? defaults$$1.y : options.y;

        var cumulativeOffsetContainer = _.cumulativeOffset(container);
        var cumulativeOffsetElement = _.cumulativeOffset(element);

        if (typeof offset === "function") {
            offset = offset();
        }

        initialY = scrollTop(container);
        targetY = cumulativeOffsetElement.top - cumulativeOffsetContainer.top + offset;

        initialX = scrollLeft(container);
        targetX = cumulativeOffsetElement.left - cumulativeOffsetContainer.left + offset;

        abort = false;

        diffY = targetY - initialY;
        diffX = targetX - initialX;

        if (typeof easing === "string") {
            easing = easings[easing] || easings["ease"];
        }

        easingFn = src.apply(src, easing);

        if (!diffY && !diffX) return;
        if (onStart) onStart(element);

        _.on(container, abortEvents, abortFn, { passive: true });

        window.requestAnimationFrame(step);

        return function () {
            abortEv = null;
            abort = true;
        };
    }

    return scrollTo;
};

var _scroller = scroller();

var bindings = []; // store binding data

function deleteBinding(el) {
    for (var i = 0; i < bindings.length; ++i) {
        if (bindings[i].el === el) {
            bindings.splice(i, 1);
            return true;
        }
    }
    return false;
}

function findBinding(el) {
    for (var i = 0; i < bindings.length; ++i) {
        if (bindings[i].el === el) {
            return bindings[i];
        }
    }
}

function getBinding(el) {
    var binding = findBinding(el);

    if (binding) {
        return binding;
    }

    bindings.push(binding = {
        el: el,
        binding: {}
    });

    return binding;
}

function handleClick(e) {
    e.preventDefault();
    var ctx = getBinding(this).binding;

    if (typeof ctx.value === "string") {
        return _scroller(ctx.value);
    }
    _scroller(ctx.value.el || ctx.value.element, ctx.value);
}

var VueScrollTo$1 = {
    bind: function bind(el, binding) {
        getBinding(el).binding = binding;
        _.on(el, "click", handleClick);
    },
    unbind: function unbind(el) {
        deleteBinding(el);
        _.off(el, "click", handleClick);
    },
    update: function update(el, binding) {
        getBinding(el).binding = binding;
    },

    scrollTo: _scroller,
    bindings: bindings
};

var install = function install(Vue, options) {
    if (options) setDefaults(options);
    Vue.directive("scroll-to", VueScrollTo$1);
    Vue.prototype.$scrollTo = VueScrollTo$1.scrollTo;
};

if (typeof window !== "undefined" && window.Vue) {
    window.VueScrollTo = VueScrollTo$1;
    window.VueScrollTo.setDefaults = setDefaults;
    Vue.use(install);
}

VueScrollTo$1.install = install;

return VueScrollTo$1;

})));


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vilbur-portfolio" } },
    [
      _c(
        "ul",
        {
          staticClass: "tabs is-centered is-fixed-top",
          staticStyle: { "margin-top": "100px" }
        },
        [
          _c("router-link", {
            attrs: { to: "/portfolio/all", tag: "li" },
            domProps: {
              innerHTML: _vm._s(
                _vm.visible.length !== _vm.portfolios.length
                  ? "Expand all"
                  : "Collapse all"
              )
            },
            nativeOn: {
              click: function($event) {
                _vm.showAllToggle()
              }
            }
          }),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.filtered = ""
                  }
                }
              },
              [_vm._v("All")]
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return _c("li", [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.filtered = category.slug
                    }
                  }
                },
                [_vm._v(_vm._s(category.slug))]
              )
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "transition-group",
        { attrs: { tag: "ul", name: "show" } },
        _vm._l(_vm.filteredPortfolios, function(portfolio) {
          return _c(
            "li",
            {
              key: portfolio.id,
              staticClass: "portfolio hero",
              attrs: { id: "hero-" + portfolio.slug, portfolio: portfolio }
            },
            [
              _c("div", { staticClass: "hero-body" }, [
                _c(
                  "div",
                  { staticClass: "container" },
                  [
                    _c(
                      "router-link",
                      {
                        class: { visible: _vm.isVisible(portfolio.slug) },
                        attrs: { to: { path: "/portfolio/" + portfolio.slug } },
                        nativeOn: {
                          click: function($event) {
                            _vm.toggle(portfolio.slug)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "portfolio-background",
                            style: {
                              backgroundImage:
                                "url(" + portfolio.image_url + ")"
                            }
                          },
                          [
                            _c("h2", { staticClass: "title is-1 " }, [
                              _vm._v(_vm._s(portfolio.title))
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "hero-foot" }, [
                      _c(
                        "div",
                        { staticClass: "container" },
                        [
                          _c(
                            "transition",
                            { attrs: { name: "show" } },
                            [
                              _c(
                                "keep-alive",
                                [
                                  _vm.isVisible(portfolio.slug)
                                    ? _c("portfolio-item", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.isVisible(
                                              portfolio.slug
                                            ),
                                            expression:
                                              "isVisible(portfolio.slug)"
                                          }
                                        ],
                                        attrs: {
                                          portfolio_slug: portfolio.slug
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ])
            ]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-580c1057", module.exports)
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(84)
/* template */
var __vue_template__ = __webpack_require__(103)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\portfolio\\views\\portfolio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-580c1057", Component.options)
  } else {
    hotAPI.reload("data-v-580c1057", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(44);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp helper JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function () {
  'use strict'

  function extend (obj1, obj2) {
    var prop
    for (prop in obj2) {
      if (obj2.hasOwnProperty(prop)) {
        obj1[prop] = obj2[prop]
      }
    }
    return obj1
  }

  function Helper (query) {
    if (!this || this.find !== Helper.prototype.find) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Helper(query)
    }
    this.length = 0
    if (query) {
      if (typeof query === 'string') {
        query = this.find(query)
      }
      if (query.nodeType || query === query.window) {
        // Single HTML element
        this.length = 1
        this[0] = query
      } else {
        // HTML element collection
        var i = query.length
        this.length = i
        while (i) {
          i -= 1
          this[i] = query[i]
        }
      }
    }
  }

  Helper.extend = extend

  Helper.contains = function (container, element) {
    do {
      element = element.parentNode
      if (element === container) {
        return true
      }
    } while (element)
    return false
  }

  Helper.parseJSON = function (string) {
    return window.JSON && JSON.parse(string)
  }

  extend(Helper.prototype, {
    find: function (query) {
      var container = this[0] || document
      if (typeof query === 'string') {
        if (container.querySelectorAll) {
          query = container.querySelectorAll(query)
        } else if (query.charAt(0) === '#') {
          query = container.getElementById(query.slice(1))
        } else {
          query = container.getElementsByTagName(query)
        }
      }
      return new Helper(query)
    },

    hasClass: function (className) {
      if (!this[0]) {
        return false
      }
      return new RegExp('(^|\\s+)' + className + '(\\s+|$)').test(
        this[0].className
      )
    },

    addClass: function (className) {
      var i = this.length
      var element
      while (i) {
        i -= 1
        element = this[i]
        if (!element.className) {
          element.className = className
          return this
        }
        if (this.hasClass(className)) {
          return this
        }
        element.className += ' ' + className
      }
      return this
    },

    removeClass: function (className) {
      var regexp = new RegExp('(^|\\s+)' + className + '(\\s+|$)')
      var i = this.length
      var element
      while (i) {
        i -= 1
        element = this[i]
        element.className = element.className.replace(regexp, ' ')
      }
      return this
    },

    on: function (eventName, handler) {
      var eventNames = eventName.split(/\s+/)
      var i
      var element
      while (eventNames.length) {
        eventName = eventNames.shift()
        i = this.length
        while (i) {
          i -= 1
          element = this[i]
          if (element.addEventListener) {
            element.addEventListener(eventName, handler, false)
          } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, handler)
          }
        }
      }
      return this
    },

    off: function (eventName, handler) {
      var eventNames = eventName.split(/\s+/)
      var i
      var element
      while (eventNames.length) {
        eventName = eventNames.shift()
        i = this.length
        while (i) {
          i -= 1
          element = this[i]
          if (element.removeEventListener) {
            element.removeEventListener(eventName, handler, false)
          } else if (element.detachEvent) {
            element.detachEvent('on' + eventName, handler)
          }
        }
      }
      return this
    },

    empty: function () {
      var i = this.length
      var element
      while (i) {
        i -= 1
        element = this[i]
        while (element.hasChildNodes()) {
          element.removeChild(element.lastChild)
        }
      }
      return this
    },

    first: function () {
      return new Helper(this[0])
    }
  })

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Helper
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {
    window.blueimp = window.blueimp || {}
    window.blueimp.helper = Helper
  }
})()


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Swipe implementation based on
 * https://github.com/bradbirdsall/Swipe
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document, DocumentTouch */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(76)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {
    // Browser globals:
    window.blueimp = window.blueimp || {}
    window.blueimp.Gallery = factory(window.blueimp.helper || window.jQuery)
  }
})(function ($) {
  'use strict'

  function Gallery (list, options) {
    if (document.body.style.maxHeight === undefined) {
      // document.body.style.maxHeight is undefined on IE6 and lower
      return null
    }
    if (!this || this.options !== Gallery.prototype.options) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Gallery(list, options)
    }
    if (!list || !list.length) {
      this.console.log(
        'blueimp Gallery: No or empty list provided as first argument.',
        list
      )
      return
    }
    this.list = list
    this.num = list.length
    this.initOptions(options)
    this.initialize()
  }

  $.extend(Gallery.prototype, {
    options: {
      // The Id, element or querySelector of the gallery widget:
      container: '#blueimp-gallery',
      // The tag name, Id, element or querySelector of the slides container:
      slidesContainer: 'div',
      // The tag name, Id, element or querySelector of the title element:
      titleElement: 'h3',
      // The class to add when the gallery is visible:
      displayClass: 'blueimp-gallery-display',
      // The class to add when the gallery controls are visible:
      controlsClass: 'blueimp-gallery-controls',
      // The class to add when the gallery only displays one element:
      singleClass: 'blueimp-gallery-single',
      // The class to add when the left edge has been reached:
      leftEdgeClass: 'blueimp-gallery-left',
      // The class to add when the right edge has been reached:
      rightEdgeClass: 'blueimp-gallery-right',
      // The class to add when the automatic slideshow is active:
      playingClass: 'blueimp-gallery-playing',
      // The class for all slides:
      slideClass: 'slide',
      // The slide class for loading elements:
      slideLoadingClass: 'slide-loading',
      // The slide class for elements that failed to load:
      slideErrorClass: 'slide-error',
      // The class for the content element loaded into each slide:
      slideContentClass: 'slide-content',
      // The class for the "toggle" control:
      toggleClass: 'toggle',
      // The class for the "prev" control:
      prevClass: 'prev',
      // The class for the "next" control:
      nextClass: 'next',
      // The class for the "close" control:
      closeClass: 'close',
      // The class for the "play-pause" toggle control:
      playPauseClass: 'play-pause',
      // The list object property (or data attribute) with the object type:
      typeProperty: 'type',
      // The list object property (or data attribute) with the object title:
      titleProperty: 'title',
      // The list object property (or data attribute) with the object alt text:
      altTextProperty: 'alt',
      // The list object property (or data attribute) with the object URL:
      urlProperty: 'href',
      // The list object property (or data attribute) with the object srcset URL(s):
      srcsetProperty: 'urlset',
      // The gallery listens for transitionend events before triggering the
      // opened and closed events, unless the following option is set to false:
      displayTransition: true,
      // Defines if the gallery slides are cleared from the gallery modal,
      // or reused for the next gallery initialization:
      clearSlides: true,
      // Defines if images should be stretched to fill the available space,
      // while maintaining their aspect ratio (will only be enabled for browsers
      // supporting background-size="contain", which excludes IE < 9).
      // Set to "cover", to make images cover all available space (requires
      // support for background-size="cover", which excludes IE < 9):
      stretchImages: false,
      // Toggle the controls on pressing the Return key:
      toggleControlsOnReturn: true,
      // Toggle the controls on slide click:
      toggleControlsOnSlideClick: true,
      // Toggle the automatic slideshow interval on pressing the Space key:
      toggleSlideshowOnSpace: true,
      // Navigate the gallery by pressing left and right on the keyboard:
      enableKeyboardNavigation: true,
      // Close the gallery on pressing the Esc key:
      closeOnEscape: true,
      // Close the gallery when clicking on an empty slide area:
      closeOnSlideClick: true,
      // Close the gallery by swiping up or down:
      closeOnSwipeUpOrDown: true,
      // Emulate touch events on mouse-pointer devices such as desktop browsers:
      emulateTouchEvents: true,
      // Stop touch events from bubbling up to ancestor elements of the Gallery:
      stopTouchEventsPropagation: false,
      // Hide the page scrollbars:
      hidePageScrollbars: true,
      // Stops any touches on the container from scrolling the page:
      disableScroll: true,
      // Carousel mode (shortcut for carousel specific options):
      carousel: false,
      // Allow continuous navigation, moving from last to first
      // and from first to last slide:
      continuous: true,
      // Remove elements outside of the preload range from the DOM:
      unloadElements: true,
      // Start with the automatic slideshow:
      startSlideshow: false,
      // Delay in milliseconds between slides for the automatic slideshow:
      slideshowInterval: 5000,
      // The starting index as integer.
      // Can also be an object of the given list,
      // or an equal object with the same url property:
      index: 0,
      // The number of elements to load around the current index:
      preloadRange: 2,
      // The transition speed between slide changes in milliseconds:
      transitionSpeed: 400,
      // The transition speed for automatic slide changes, set to an integer
      // greater 0 to override the default transition speed:
      slideshowTransitionSpeed: undefined,
      // The event object for which the default action will be canceled
      // on Gallery initialization (e.g. the click event to open the Gallery):
      event: undefined,
      // Callback function executed when the Gallery is initialized.
      // Is called with the gallery instance as "this" object:
      onopen: undefined,
      // Callback function executed when the Gallery has been initialized
      // and the initialization transition has been completed.
      // Is called with the gallery instance as "this" object:
      onopened: undefined,
      // Callback function executed on slide change.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslide: undefined,
      // Callback function executed after the slide change transition.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslideend: undefined,
      // Callback function executed on slide content load.
      // Is called with the gallery instance as "this" object and the
      // slide index and slide element as arguments:
      onslidecomplete: undefined,
      // Callback function executed when the Gallery is about to be closed.
      // Is called with the gallery instance as "this" object:
      onclose: undefined,
      // Callback function executed when the Gallery has been closed
      // and the closing transition has been completed.
      // Is called with the gallery instance as "this" object:
      onclosed: undefined
    },

    carouselOptions: {
      hidePageScrollbars: false,
      toggleControlsOnReturn: false,
      toggleSlideshowOnSpace: false,
      enableKeyboardNavigation: false,
      closeOnEscape: false,
      closeOnSlideClick: false,
      closeOnSwipeUpOrDown: false,
      disableScroll: false,
      startSlideshow: true
    },

    console:
      window.console && typeof window.console.log === 'function'
        ? window.console
        : { log: function () {} },

    // Detect touch, transition, transform and background-size support:
    support: (function (element) {
      var support = {
        touch:
          window.ontouchstart !== undefined ||
          (window.DocumentTouch && document instanceof DocumentTouch)
      }
      var transitions = {
        webkitTransition: {
          end: 'webkitTransitionEnd',
          prefix: '-webkit-'
        },
        MozTransition: {
          end: 'transitionend',
          prefix: '-moz-'
        },
        OTransition: {
          end: 'otransitionend',
          prefix: '-o-'
        },
        transition: {
          end: 'transitionend',
          prefix: ''
        }
      }
      var prop
      for (prop in transitions) {
        if (
          transitions.hasOwnProperty(prop) &&
          element.style[prop] !== undefined
        ) {
          support.transition = transitions[prop]
          support.transition.name = prop
          break
        }
      }
      function elementTests () {
        var transition = support.transition
        var prop
        var translateZ
        document.body.appendChild(element)
        if (transition) {
          prop = transition.name.slice(0, -9) + 'ransform'
          if (element.style[prop] !== undefined) {
            element.style[prop] = 'translateZ(0)'
            translateZ = window
              .getComputedStyle(element)
              .getPropertyValue(transition.prefix + 'transform')
            support.transform = {
              prefix: transition.prefix,
              name: prop,
              translate: true,
              translateZ: !!translateZ && translateZ !== 'none'
            }
          }
        }
        if (element.style.backgroundSize !== undefined) {
          support.backgroundSize = {}
          element.style.backgroundSize = 'contain'
          support.backgroundSize.contain =
            window
              .getComputedStyle(element)
              .getPropertyValue('background-size') === 'contain'
          element.style.backgroundSize = 'cover'
          support.backgroundSize.cover =
            window
              .getComputedStyle(element)
              .getPropertyValue('background-size') === 'cover'
        }
        document.body.removeChild(element)
      }
      if (document.body) {
        elementTests()
      } else {
        $(document).on('DOMContentLoaded', elementTests)
      }
      return support
      // Test element, has to be standard HTML and must not be hidden
      // for the CSS3 tests using window.getComputedStyle to be applicable:
    })(document.createElement('div')),

    requestAnimationFrame:
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame,

    cancelAnimationFrame:
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame,

    initialize: function () {
      this.initStartIndex()
      if (this.initWidget() === false) {
        return false
      }
      this.initEventListeners()
      // Load the slide at the given index:
      this.onslide(this.index)
      // Manually trigger the slideend event for the initial slide:
      this.ontransitionend()
      // Start the automatic slideshow if applicable:
      if (this.options.startSlideshow) {
        this.play()
      }
    },

    slide: function (to, speed) {
      window.clearTimeout(this.timeout)
      var index = this.index
      var direction
      var naturalDirection
      var diff
      if (index === to || this.num === 1) {
        return
      }
      if (!speed) {
        speed = this.options.transitionSpeed
      }
      if (this.support.transform) {
        if (!this.options.continuous) {
          to = this.circle(to)
        }
        // 1: backward, -1: forward:
        direction = Math.abs(index - to) / (index - to)
        // Get the actual position of the slide:
        if (this.options.continuous) {
          naturalDirection = direction
          direction = -this.positions[this.circle(to)] / this.slideWidth
          // If going forward but to < index, use to = slides.length + to
          // If going backward but to > index, use to = -slides.length + to
          if (direction !== naturalDirection) {
            to = -direction * this.num + to
          }
        }
        diff = Math.abs(index - to) - 1
        // Move all the slides between index and to in the right direction:
        while (diff) {
          diff -= 1
          this.move(
            this.circle((to > index ? to : index) - diff - 1),
            this.slideWidth * direction,
            0
          )
        }
        to = this.circle(to)
        this.move(index, this.slideWidth * direction, speed)
        this.move(to, 0, speed)
        if (this.options.continuous) {
          this.move(
            this.circle(to - direction),
            -(this.slideWidth * direction),
            0
          )
        }
      } else {
        to = this.circle(to)
        this.animate(index * -this.slideWidth, to * -this.slideWidth, speed)
      }
      this.onslide(to)
    },

    getIndex: function () {
      return this.index
    },

    getNumber: function () {
      return this.num
    },

    prev: function () {
      if (this.options.continuous || this.index) {
        this.slide(this.index - 1)
      }
    },

    next: function () {
      if (this.options.continuous || this.index < this.num - 1) {
        this.slide(this.index + 1)
      }
    },

    play: function (time) {
      var that = this
      window.clearTimeout(this.timeout)
      this.interval = time || this.options.slideshowInterval
      if (this.elements[this.index] > 1) {
        this.timeout = this.setTimeout(
          (!this.requestAnimationFrame && this.slide) ||
            function (to, speed) {
              that.animationFrameId = that.requestAnimationFrame.call(
                window,
                function () {
                  that.slide(to, speed)
                }
              )
            },
          [this.index + 1, this.options.slideshowTransitionSpeed],
          this.interval
        )
      }
      this.container.addClass(this.options.playingClass)
    },

    pause: function () {
      window.clearTimeout(this.timeout)
      this.interval = null
      if (this.cancelAnimationFrame) {
        this.cancelAnimationFrame.call(window, this.animationFrameId)
        this.animationFrameId = null
      }
      this.container.removeClass(this.options.playingClass)
    },

    add: function (list) {
      var i
      if (!list.concat) {
        // Make a real array out of the list to add:
        list = Array.prototype.slice.call(list)
      }
      if (!this.list.concat) {
        // Make a real array out of the Gallery list:
        this.list = Array.prototype.slice.call(this.list)
      }
      this.list = this.list.concat(list)
      this.num = this.list.length
      if (this.num > 2 && this.options.continuous === null) {
        this.options.continuous = true
        this.container.removeClass(this.options.leftEdgeClass)
      }
      this.container
        .removeClass(this.options.rightEdgeClass)
        .removeClass(this.options.singleClass)
      for (i = this.num - list.length; i < this.num; i += 1) {
        this.addSlide(i)
        this.positionSlide(i)
      }
      this.positions.length = this.num
      this.initSlides(true)
    },

    resetSlides: function () {
      this.slidesContainer.empty()
      this.unloadAllSlides()
      this.slides = []
    },

    handleClose: function () {
      var options = this.options
      this.destroyEventListeners()
      // Cancel the slideshow:
      this.pause()
      this.container[0].style.display = 'none'
      this.container
        .removeClass(options.displayClass)
        .removeClass(options.singleClass)
        .removeClass(options.leftEdgeClass)
        .removeClass(options.rightEdgeClass)
      if (options.hidePageScrollbars) {
        document.body.style.overflow = this.bodyOverflowStyle
      }
      if (this.options.clearSlides) {
        this.resetSlides()
      }
      if (this.options.onclosed) {
        this.options.onclosed.call(this)
      }
    },

    close: function () {
      var that = this
      function closeHandler (event) {
        if (event.target === that.container[0]) {
          that.container.off(that.support.transition.end, closeHandler)
          that.handleClose()
        }
      }
      if (this.options.onclose) {
        this.options.onclose.call(this)
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(this.support.transition.end, closeHandler)
        this.container.removeClass(this.options.displayClass)
      } else {
        this.handleClose()
      }
    },

    circle: function (index) {
      // Always return a number inside of the slides index range:
      return (this.num + index % this.num) % this.num
    },

    move: function (index, dist, speed) {
      this.translateX(index, dist, speed)
      this.positions[index] = dist
    },

    translate: function (index, x, y, speed) {
      var style = this.slides[index].style
      var transition = this.support.transition
      var transform = this.support.transform
      style[transition.name + 'Duration'] = speed + 'ms'
      style[transform.name] =
        'translate(' +
        x +
        'px, ' +
        y +
        'px)' +
        (transform.translateZ ? ' translateZ(0)' : '')
    },

    translateX: function (index, x, speed) {
      this.translate(index, x, 0, speed)
    },

    translateY: function (index, y, speed) {
      this.translate(index, 0, y, speed)
    },

    animate: function (from, to, speed) {
      if (!speed) {
        this.slidesContainer[0].style.left = to + 'px'
        return
      }
      var that = this
      var start = new Date().getTime()
      var timer = window.setInterval(function () {
        var timeElap = new Date().getTime() - start
        if (timeElap > speed) {
          that.slidesContainer[0].style.left = to + 'px'
          that.ontransitionend()
          window.clearInterval(timer)
          return
        }
        that.slidesContainer[0].style.left =
          (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px'
      }, 4)
    },

    preventDefault: function (event) {
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        event.returnValue = false
      }
    },

    stopPropagation: function (event) {
      if (event.stopPropagation) {
        event.stopPropagation()
      } else {
        event.cancelBubble = true
      }
    },

    onresize: function () {
      this.initSlides(true)
    },

    onmousedown: function (event) {
      // Trigger on clicks of the left mouse button only
      // and exclude video & audio elements:
      if (
        event.which &&
        event.which === 1 &&
        event.target.nodeName !== 'VIDEO' &&
        event.target.nodeName !== 'AUDIO'
      ) {
        // Preventing the default mousedown action is required
        // to make touch emulation work with Firefox:
        event.preventDefault()
        ;(event.originalEvent || event).touches = [
          {
            pageX: event.pageX,
            pageY: event.pageY
          }
        ]
        this.ontouchstart(event)
      }
    },

    onmousemove: function (event) {
      if (this.touchStart) {
        ;(event.originalEvent || event).touches = [
          {
            pageX: event.pageX,
            pageY: event.pageY
          }
        ]
        this.ontouchmove(event)
      }
    },

    onmouseup: function (event) {
      if (this.touchStart) {
        this.ontouchend(event)
        delete this.touchStart
      }
    },

    onmouseout: function (event) {
      if (this.touchStart) {
        var target = event.target
        var related = event.relatedTarget
        if (!related || (related !== target && !$.contains(target, related))) {
          this.onmouseup(event)
        }
      }
    },

    ontouchstart: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches[0]
      this.touchStart = {
        // Remember the initial touch coordinates:
        x: touches.pageX,
        y: touches.pageY,
        // Store the time to determine touch duration:
        time: Date.now()
      }
      // Helper variable to detect scroll movement:
      this.isScrolling = undefined
      // Reset delta values:
      this.touchDelta = {}
    },

    ontouchmove: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches[0]
      var scale = (event.originalEvent || event).scale
      var index = this.index
      var touchDeltaX
      var indices
      // Ensure this is a one touch swipe and not, e.g. a pinch:
      if (touches.length > 1 || (scale && scale !== 1)) {
        return
      }
      if (this.options.disableScroll) {
        event.preventDefault()
      }
      // Measure change in x and y coordinates:
      this.touchDelta = {
        x: touches.pageX - this.touchStart.x,
        y: touches.pageY - this.touchStart.y
      }
      touchDeltaX = this.touchDelta.x
      // Detect if this is a vertical scroll movement (run only once per touch):
      if (this.isScrolling === undefined) {
        this.isScrolling =
          this.isScrolling ||
          Math.abs(touchDeltaX) < Math.abs(this.touchDelta.y)
      }
      if (!this.isScrolling) {
        // Always prevent horizontal scroll:
        event.preventDefault()
        // Stop the slideshow:
        window.clearTimeout(this.timeout)
        if (this.options.continuous) {
          indices = [this.circle(index + 1), index, this.circle(index - 1)]
        } else {
          // Increase resistance if first slide and sliding left
          // or last slide and sliding right:
          this.touchDelta.x = touchDeltaX =
            touchDeltaX /
            ((!index && touchDeltaX > 0) ||
            (index === this.num - 1 && touchDeltaX < 0)
              ? Math.abs(touchDeltaX) / this.slideWidth + 1
              : 1)
          indices = [index]
          if (index) {
            indices.push(index - 1)
          }
          if (index < this.num - 1) {
            indices.unshift(index + 1)
          }
        }
        while (indices.length) {
          index = indices.pop()
          this.translateX(index, touchDeltaX + this.positions[index], 0)
        }
      } else {
        this.translateY(index, this.touchDelta.y + this.positions[index], 0)
      }
    },

    ontouchend: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      var index = this.index
      var speed = this.options.transitionSpeed
      var slideWidth = this.slideWidth
      var isShortDuration = Number(Date.now() - this.touchStart.time) < 250
      // Determine if slide attempt triggers next/prev slide:
      var isValidSlide =
        (isShortDuration && Math.abs(this.touchDelta.x) > 20) ||
        Math.abs(this.touchDelta.x) > slideWidth / 2
      // Determine if slide attempt is past start or end:
      var isPastBounds =
        (!index && this.touchDelta.x > 0) ||
        (index === this.num - 1 && this.touchDelta.x < 0)
      var isValidClose =
        !isValidSlide &&
        this.options.closeOnSwipeUpOrDown &&
        ((isShortDuration && Math.abs(this.touchDelta.y) > 20) ||
          Math.abs(this.touchDelta.y) > this.slideHeight / 2)
      var direction
      var indexForward
      var indexBackward
      var distanceForward
      var distanceBackward
      if (this.options.continuous) {
        isPastBounds = false
      }
      // Determine direction of swipe (true: right, false: left):
      direction = this.touchDelta.x < 0 ? -1 : 1
      if (!this.isScrolling) {
        if (isValidSlide && !isPastBounds) {
          indexForward = index + direction
          indexBackward = index - direction
          distanceForward = slideWidth * direction
          distanceBackward = -slideWidth * direction
          if (this.options.continuous) {
            this.move(this.circle(indexForward), distanceForward, 0)
            this.move(this.circle(index - 2 * direction), distanceBackward, 0)
          } else if (indexForward >= 0 && indexForward < this.num) {
            this.move(indexForward, distanceForward, 0)
          }
          this.move(index, this.positions[index] + distanceForward, speed)
          this.move(
            this.circle(indexBackward),
            this.positions[this.circle(indexBackward)] + distanceForward,
            speed
          )
          index = this.circle(indexBackward)
          this.onslide(index)
        } else {
          // Move back into position
          if (this.options.continuous) {
            this.move(this.circle(index - 1), -slideWidth, speed)
            this.move(index, 0, speed)
            this.move(this.circle(index + 1), slideWidth, speed)
          } else {
            if (index) {
              this.move(index - 1, -slideWidth, speed)
            }
            this.move(index, 0, speed)
            if (index < this.num - 1) {
              this.move(index + 1, slideWidth, speed)
            }
          }
        }
      } else {
        if (isValidClose) {
          this.close()
        } else {
          // Move back into position
          this.translateY(index, 0, speed)
        }
      }
    },

    ontouchcancel: function (event) {
      if (this.touchStart) {
        this.ontouchend(event)
        delete this.touchStart
      }
    },

    ontransitionend: function (event) {
      var slide = this.slides[this.index]
      if (!event || slide === event.target) {
        if (this.interval) {
          this.play()
        }
        this.setTimeout(this.options.onslideend, [this.index, slide])
      }
    },

    oncomplete: function (event) {
      var target = event.target || event.srcElement
      var parent = target && target.parentNode
      var index
      if (!target || !parent) {
        return
      }
      index = this.getNodeIndex(parent)
      $(parent).removeClass(this.options.slideLoadingClass)
      if (event.type === 'error') {
        $(parent).addClass(this.options.slideErrorClass)
        this.elements[index] = 3 // Fail
      } else {
        this.elements[index] = 2 // Done
      }
      // Fix for IE7's lack of support for percentage max-height:
      if (target.clientHeight > this.container[0].clientHeight) {
        target.style.maxHeight = this.container[0].clientHeight
      }
      if (this.interval && this.slides[this.index] === parent) {
        this.play()
      }
      this.setTimeout(this.options.onslidecomplete, [index, parent])
    },

    onload: function (event) {
      this.oncomplete(event)
    },

    onerror: function (event) {
      this.oncomplete(event)
    },

    onkeydown: function (event) {
      switch (event.which || event.keyCode) {
        case 13: // Return
          if (this.options.toggleControlsOnReturn) {
            this.preventDefault(event)
            this.toggleControls()
          }
          break
        case 27: // Esc
          if (this.options.closeOnEscape) {
            this.close()
            // prevent Esc from closing other things
            event.stopImmediatePropagation()
          }
          break
        case 32: // Space
          if (this.options.toggleSlideshowOnSpace) {
            this.preventDefault(event)
            this.toggleSlideshow()
          }
          break
        case 37: // Left
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event)
            this.prev()
          }
          break
        case 39: // Right
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event)
            this.next()
          }
          break
      }
    },

    handleClick: function (event) {
      var options = this.options
      var target = event.target || event.srcElement
      var parent = target.parentNode
      function isTarget (className) {
        return $(target).hasClass(className) || $(parent).hasClass(className)
      }
      if (isTarget(options.toggleClass)) {
        // Click on "toggle" control
        this.preventDefault(event)
        this.toggleControls()
      } else if (isTarget(options.prevClass)) {
        // Click on "prev" control
        this.preventDefault(event)
        this.prev()
      } else if (isTarget(options.nextClass)) {
        // Click on "next" control
        this.preventDefault(event)
        this.next()
      } else if (isTarget(options.closeClass)) {
        // Click on "close" control
        this.preventDefault(event)
        this.close()
      } else if (isTarget(options.playPauseClass)) {
        // Click on "play-pause" control
        this.preventDefault(event)
        this.toggleSlideshow()
      } else if (parent === this.slidesContainer[0]) {
        // Click on slide background
        if (options.closeOnSlideClick) {
          this.preventDefault(event)
          this.close()
        } else if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event)
          this.toggleControls()
        }
      } else if (
        parent.parentNode &&
        parent.parentNode === this.slidesContainer[0]
      ) {
        // Click on displayed element
        if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event)
          this.toggleControls()
        }
      }
    },

    onclick: function (event) {
      if (
        this.options.emulateTouchEvents &&
        this.touchDelta &&
        (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20)
      ) {
        delete this.touchDelta
        return
      }
      return this.handleClick(event)
    },

    updateEdgeClasses: function (index) {
      if (!index) {
        this.container.addClass(this.options.leftEdgeClass)
      } else {
        this.container.removeClass(this.options.leftEdgeClass)
      }
      if (index === this.num - 1) {
        this.container.addClass(this.options.rightEdgeClass)
      } else {
        this.container.removeClass(this.options.rightEdgeClass)
      }
    },

    handleSlide: function (index) {
      if (!this.options.continuous) {
        this.updateEdgeClasses(index)
      }
      this.loadElements(index)
      if (this.options.unloadElements) {
        this.unloadElements(index)
      }
      this.setTitle(index)
    },

    onslide: function (index) {
      this.index = index
      this.handleSlide(index)
      this.setTimeout(this.options.onslide, [index, this.slides[index]])
    },

    setTitle: function (index) {
      var firstChild = this.slides[index].firstChild
      var text = firstChild.title || firstChild.alt
      var titleElement = this.titleElement
      if (titleElement.length) {
        this.titleElement.empty()
        if (text) {
          titleElement[0].appendChild(document.createTextNode(text))
        }
      }
    },

    setTimeout: function (func, args, wait) {
      var that = this
      return (
        func &&
        window.setTimeout(function () {
          func.apply(that, args || [])
        }, wait || 0)
      )
    },

    imageFactory: function (obj, callback) {
      var that = this
      var img = this.imagePrototype.cloneNode(false)
      var url = obj
      var backgroundSize = this.options.stretchImages
      var called
      var element
      var title
      var altText
      function callbackWrapper (event) {
        if (!called) {
          event = {
            type: event.type,
            target: element
          }
          if (!element.parentNode) {
            // Fix for IE7 firing the load event for
            // cached images before the element could
            // be added to the DOM:
            return that.setTimeout(callbackWrapper, [event])
          }
          called = true
          $(img).off('load error', callbackWrapper)
          if (backgroundSize) {
            if (event.type === 'load') {
              element.style.background = 'url("' + url + '") center no-repeat'
              element.style.backgroundSize = backgroundSize
            }
          }
          callback(event)
        }
      }
      if (typeof url !== 'string') {
        url = this.getItemProperty(obj, this.options.urlProperty)
        title = this.getItemProperty(obj, this.options.titleProperty)
        altText =
          this.getItemProperty(obj, this.options.altTextProperty) || title
      }
      if (backgroundSize === true) {
        backgroundSize = 'contain'
      }
      backgroundSize =
        this.support.backgroundSize &&
        this.support.backgroundSize[backgroundSize] &&
        backgroundSize
      if (backgroundSize) {
        element = this.elementPrototype.cloneNode(false)
      } else {
        element = img
        img.draggable = false
      }
      if (title) {
        element.title = title
      }
      if (altText) {
        element.alt = altText
      }
      $(img).on('load error', callbackWrapper)
      img.src = url
      return element
    },

    createElement: function (obj, callback) {
      var type = obj && this.getItemProperty(obj, this.options.typeProperty)
      var factory =
        (type && this[type.split('/')[0] + 'Factory']) || this.imageFactory
      var element = obj && factory.call(this, obj, callback)
      var srcset = this.getItemProperty(obj, this.options.srcsetProperty)
      if (!element) {
        element = this.elementPrototype.cloneNode(false)
        this.setTimeout(callback, [
          {
            type: 'error',
            target: element
          }
        ])
      }
      if (srcset) {
        element.setAttribute('srcset', srcset)
      }
      $(element).addClass(this.options.slideContentClass)
      return element
    },

    loadElement: function (index) {
      if (!this.elements[index]) {
        if (this.slides[index].firstChild) {
          this.elements[index] = $(this.slides[index]).hasClass(
            this.options.slideErrorClass
          )
            ? 3
            : 2
        } else {
          this.elements[index] = 1 // Loading
          $(this.slides[index]).addClass(this.options.slideLoadingClass)
          this.slides[index].appendChild(
            this.createElement(this.list[index], this.proxyListener)
          )
        }
      }
    },

    loadElements: function (index) {
      var limit = Math.min(this.num, this.options.preloadRange * 2 + 1)
      var j = index
      var i
      for (i = 0; i < limit; i += 1) {
        // First load the current slide element (0),
        // then the next one (+1),
        // then the previous one (-2),
        // then the next after next (+2), etc.:
        j += i * (i % 2 === 0 ? -1 : 1)
        // Connect the ends of the list to load slide elements for
        // continuous navigation:
        j = this.circle(j)
        this.loadElement(j)
      }
    },

    unloadElements: function (index) {
      var i, diff
      for (i in this.elements) {
        if (this.elements.hasOwnProperty(i)) {
          diff = Math.abs(index - i)
          if (
            diff > this.options.preloadRange &&
            diff + this.options.preloadRange < this.num
          ) {
            this.unloadSlide(i)
            delete this.elements[i]
          }
        }
      }
    },

    addSlide: function (index) {
      var slide = this.slidePrototype.cloneNode(false)
      slide.setAttribute('data-index', index)
      this.slidesContainer[0].appendChild(slide)
      this.slides.push(slide)
    },

    positionSlide: function (index) {
      var slide = this.slides[index]
      slide.style.width = this.slideWidth + 'px'
      if (this.support.transform) {
        slide.style.left = index * -this.slideWidth + 'px'
        this.move(
          index,
          this.index > index
            ? -this.slideWidth
            : this.index < index ? this.slideWidth : 0,
          0
        )
      }
    },

    initSlides: function (reload) {
      var clearSlides, i
      if (!reload) {
        this.positions = []
        this.positions.length = this.num
        this.elements = {}
        this.imagePrototype = document.createElement('img')
        this.elementPrototype = document.createElement('div')
        this.slidePrototype = document.createElement('div')
        $(this.slidePrototype).addClass(this.options.slideClass)
        this.slides = this.slidesContainer[0].children
        clearSlides =
          this.options.clearSlides || this.slides.length !== this.num
      }
      this.slideWidth = this.container[0].clientWidth
      this.slideHeight = this.container[0].clientHeight
      this.slidesContainer[0].style.width = this.num * this.slideWidth + 'px'
      if (clearSlides) {
        this.resetSlides()
      }
      for (i = 0; i < this.num; i += 1) {
        if (clearSlides) {
          this.addSlide(i)
        }
        this.positionSlide(i)
      }
      // Reposition the slides before and after the given index:
      if (this.options.continuous && this.support.transform) {
        this.move(this.circle(this.index - 1), -this.slideWidth, 0)
        this.move(this.circle(this.index + 1), this.slideWidth, 0)
      }
      if (!this.support.transform) {
        this.slidesContainer[0].style.left =
          this.index * -this.slideWidth + 'px'
      }
    },

    unloadSlide: function (index) {
      var slide, firstChild
      slide = this.slides[index]
      firstChild = slide.firstChild
      if (firstChild !== null) {
        slide.removeChild(firstChild)
      }
    },

    unloadAllSlides: function () {
      var i, len
      for (i = 0, len = this.slides.length; i < len; i++) {
        this.unloadSlide(i)
      }
    },

    toggleControls: function () {
      var controlsClass = this.options.controlsClass
      if (this.container.hasClass(controlsClass)) {
        this.container.removeClass(controlsClass)
      } else {
        this.container.addClass(controlsClass)
      }
    },

    toggleSlideshow: function () {
      if (!this.interval) {
        this.play()
      } else {
        this.pause()
      }
    },

    getNodeIndex: function (element) {
      return parseInt(element.getAttribute('data-index'), 10)
    },

    getNestedProperty: function (obj, property) {
      property.replace(
        // Matches native JavaScript notation in a String,
        // e.g. '["doubleQuoteProp"].dotProp[2]'
        // eslint-disable-next-line no-useless-escape
        /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,
        function (str, singleQuoteProp, doubleQuoteProp, arrayIndex, dotProp) {
          var prop =
            dotProp ||
            singleQuoteProp ||
            doubleQuoteProp ||
            (arrayIndex && parseInt(arrayIndex, 10))
          if (str && obj) {
            obj = obj[prop]
          }
        }
      )
      return obj
    },

    getDataProperty: function (obj, property) {
      var key
      var prop
      if (obj.dataset) {
        key = property.replace(/-([a-z])/g, function (_, b) {
          return b.toUpperCase()
        })
        prop = obj.dataset[key]
      } else if (obj.getAttribute) {
        prop = obj.getAttribute(
          'data-' + property.replace(/([A-Z])/g, '-$1').toLowerCase()
        )
      }
      if (typeof prop === 'string') {
        // eslint-disable-next-line no-useless-escape
        if (
          /^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(prop)
        ) {
          try {
            return $.parseJSON(prop)
          } catch (ignore) {}
        }
        return prop
      }
    },

    getItemProperty: function (obj, property) {
      var prop = this.getDataProperty(obj, property)
      if (prop === undefined) {
        prop = obj[property]
      }
      if (prop === undefined) {
        prop = this.getNestedProperty(obj, property)
      }
      return prop
    },

    initStartIndex: function () {
      var index = this.options.index
      var urlProperty = this.options.urlProperty
      var i
      // Check if the index is given as a list object:
      if (index && typeof index !== 'number') {
        for (i = 0; i < this.num; i += 1) {
          if (
            this.list[i] === index ||
            this.getItemProperty(this.list[i], urlProperty) ===
              this.getItemProperty(index, urlProperty)
          ) {
            index = i
            break
          }
        }
      }
      // Make sure the index is in the list range:
      this.index = this.circle(parseInt(index, 10) || 0)
    },

    initEventListeners: function () {
      var that = this
      var slidesContainer = this.slidesContainer
      function proxyListener (event) {
        var type =
          that.support.transition && that.support.transition.end === event.type
            ? 'transitionend'
            : event.type
        that['on' + type](event)
      }
      $(window).on('resize', proxyListener)
      $(document.body).on('keydown', proxyListener)
      this.container.on('click', proxyListener)
      if (this.support.touch) {
        slidesContainer.on(
          'touchstart touchmove touchend touchcancel',
          proxyListener
        )
      } else if (this.options.emulateTouchEvents && this.support.transition) {
        slidesContainer.on(
          'mousedown mousemove mouseup mouseout',
          proxyListener
        )
      }
      if (this.support.transition) {
        slidesContainer.on(this.support.transition.end, proxyListener)
      }
      this.proxyListener = proxyListener
    },

    destroyEventListeners: function () {
      var slidesContainer = this.slidesContainer
      var proxyListener = this.proxyListener
      $(window).off('resize', proxyListener)
      $(document.body).off('keydown', proxyListener)
      this.container.off('click', proxyListener)
      if (this.support.touch) {
        slidesContainer.off(
          'touchstart touchmove touchend touchcancel',
          proxyListener
        )
      } else if (this.options.emulateTouchEvents && this.support.transition) {
        slidesContainer.off(
          'mousedown mousemove mouseup mouseout',
          proxyListener
        )
      }
      if (this.support.transition) {
        slidesContainer.off(this.support.transition.end, proxyListener)
      }
    },

    handleOpen: function () {
      if (this.options.onopened) {
        this.options.onopened.call(this)
      }
    },

    initWidget: function () {
      var that = this
      function openHandler (event) {
        if (event.target === that.container[0]) {
          that.container.off(that.support.transition.end, openHandler)
          that.handleOpen()
        }
      }
      this.container = $(this.options.container)
      if (!this.container.length) {
        this.console.log(
          'blueimp Gallery: Widget container not found.',
          this.options.container
        )
        return false
      }
      this.slidesContainer = this.container
        .find(this.options.slidesContainer)
        .first()
      if (!this.slidesContainer.length) {
        this.console.log(
          'blueimp Gallery: Slides container not found.',
          this.options.slidesContainer
        )
        return false
      }
      this.titleElement = this.container.find(this.options.titleElement).first()
      if (this.num === 1) {
        this.container.addClass(this.options.singleClass)
      }
      if (this.options.onopen) {
        this.options.onopen.call(this)
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(this.support.transition.end, openHandler)
      } else {
        this.handleOpen()
      }
      if (this.options.hidePageScrollbars) {
        // Hide the page scrollbars:
        this.bodyOverflowStyle = document.body.style.overflow
        document.body.style.overflow = 'hidden'
      }
      this.container[0].style.display = 'block'
      this.initSlides()
      this.container.addClass(this.options.displayClass)
    },

    initOptions: function (options) {
      // Create a copy of the prototype options:
      this.options = $.extend({}, this.options)
      // Check if carousel mode is enabled:
      if (
        (options && options.carousel) ||
        (this.options.carousel && (!options || options.carousel !== false))
      ) {
        $.extend(this.options, this.carouselOptions)
      }
      // Override any given options:
      $.extend(this.options, options)
      if (this.num < 3) {
        // 1 or 2 slides cannot be displayed continuous,
        // remember the original option by setting to null instead of false:
        this.options.continuous = this.options.continuous ? null : false
      }
      if (!this.support.transition) {
        this.options.emulateTouchEvents = false
      }
      if (this.options.event) {
        this.preventDefault(this.options.event)
      }
    }
  })

  return Gallery
})


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/loading.gif?05992d3434d3589b38a3a5431842d38f";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery Video Factory JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(76), __webpack_require__(77)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {
    // Browser globals:
    factory(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
  }
})(function ($, Gallery) {
  'use strict'

  $.extend(Gallery.prototype.options, {
    // The class for video content elements:
    videoContentClass: 'video-content',
    // The class for video when it is loading:
    videoLoadingClass: 'video-loading',
    // The class for video when it is playing:
    videoPlayingClass: 'video-playing',
    // The list object property (or data attribute) for the video poster URL:
    videoPosterProperty: 'poster',
    // The list object property (or data attribute) for the video sources array:
    videoSourcesProperty: 'sources'
  })

  var handleSlide = Gallery.prototype.handleSlide

  $.extend(Gallery.prototype, {
    handleSlide: function (index) {
      handleSlide.call(this, index)
      if (this.playingVideo) {
        this.playingVideo.pause()
      }
    },

    videoFactory: function (obj, callback, videoInterface) {
      var that = this
      var options = this.options
      var videoContainerNode = this.elementPrototype.cloneNode(false)
      var videoContainer = $(videoContainerNode)
      var errorArgs = [
        {
          type: 'error',
          target: videoContainerNode
        }
      ]
      var video = videoInterface || document.createElement('video')
      var url = this.getItemProperty(obj, options.urlProperty)
      var type = this.getItemProperty(obj, options.typeProperty)
      var title = this.getItemProperty(obj, options.titleProperty)
      var altText =
        this.getItemProperty(obj, this.options.altTextProperty) || title
      var posterUrl = this.getItemProperty(obj, options.videoPosterProperty)
      var posterImage
      var sources = this.getItemProperty(obj, options.videoSourcesProperty)
      var source
      var playMediaControl
      var isLoading
      var hasControls
      videoContainer.addClass(options.videoContentClass)
      if (title) {
        videoContainerNode.title = title
      }
      if (video.canPlayType) {
        if (url && type && video.canPlayType(type)) {
          video.src = url
        } else if (sources) {
          while (sources.length) {
            source = sources.shift()
            url = this.getItemProperty(source, options.urlProperty)
            type = this.getItemProperty(source, options.typeProperty)
            if (url && type && video.canPlayType(type)) {
              video.src = url
              break
            }
          }
        }
      }
      if (posterUrl) {
        video.poster = posterUrl
        posterImage = this.imagePrototype.cloneNode(false)
        $(posterImage).addClass(options.toggleClass)
        posterImage.src = posterUrl
        posterImage.draggable = false
        posterImage.alt = altText
        videoContainerNode.appendChild(posterImage)
      }
      playMediaControl = document.createElement('a')
      playMediaControl.setAttribute('target', '_blank')
      if (!videoInterface) {
        playMediaControl.setAttribute('download', title)
      }
      playMediaControl.href = url
      if (video.src) {
        video.controls = true
        ;(videoInterface || $(video))
          .on('error', function () {
            that.setTimeout(callback, errorArgs)
          })
          .on('pause', function () {
            if (video.seeking) return
            isLoading = false
            videoContainer
              .removeClass(that.options.videoLoadingClass)
              .removeClass(that.options.videoPlayingClass)
            if (hasControls) {
              that.container.addClass(that.options.controlsClass)
            }
            delete that.playingVideo
            if (that.interval) {
              that.play()
            }
          })
          .on('playing', function () {
            isLoading = false
            videoContainer
              .removeClass(that.options.videoLoadingClass)
              .addClass(that.options.videoPlayingClass)
            if (that.container.hasClass(that.options.controlsClass)) {
              hasControls = true
              that.container.removeClass(that.options.controlsClass)
            } else {
              hasControls = false
            }
          })
          .on('play', function () {
            window.clearTimeout(that.timeout)
            isLoading = true
            videoContainer.addClass(that.options.videoLoadingClass)
            that.playingVideo = video
          })
        $(playMediaControl).on('click', function (event) {
          that.preventDefault(event)
          if (isLoading) {
            video.pause()
          } else {
            video.play()
          }
        })
        videoContainerNode.appendChild(
          (videoInterface && videoInterface.element) || video
        )
      }
      videoContainerNode.appendChild(playMediaControl)
      this.setTimeout(callback, [
        {
          type: 'load',
          target: videoContainerNode
        }
      ])
      return videoContainerNode
    }
  })

  return Gallery
})


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("92d8fcf4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-580c1057\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./portfolio.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-580c1057\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./portfolio.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.show-enter,\n.show-leave-to { max-height: 1px; opacity: 0\n}\n.show-leave,\n.show-enter-to { max-height: 4096px; opacity: 1\n}\n.show-enter-active,\n.show-leave-active { -webkit-transition: .5s ease-out; transition: .5s ease-out\n}\n\n", ""]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_item__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_portfolio_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_portfolio_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_scrollto__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_scrollto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_scrollto__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			categories: [],
			portfolios: [],
			visible: [],
			filtered: '',
			test: ''
		};
	},
	created: function created() {
		var _this = this;

		axios.get('/db/category-portfolio').then(function (response) {
			return _this.categories = response.data;
		});
		axios.get('/db/portfolio').then(function (response) {
			_this.portfolios = response.data;
			_this.showInit(_this.$route.params.portfolio_slug, response.data);
		});
	},

	methods: {
		showInit: function showInit(portfolio_slug, portfolios) {
			if (portfolio_slug === 'all') this.showAll(portfolios);else if (portfolio_slug) portfolio_slugthis.show(portfolio_slug);
		},
		show: function show(portfolio_slug) {
			if (!this.isVisible(portfolio_slug)) this.visible.push(portfolio_slug);
		},
		hide: function hide(portfolio_slug) {
			this.visible.splice(this.visible.indexOf(portfolio_slug), 1);
		},
		showAllToggle: function showAllToggle() {
			if (this.visible.length !== this.portfolios.length) this.showAll(this.portfolios);else this.visible = [];
		},
		showAll: function showAll(portfolios) {
			for (var p = 0; p < portfolios.length; p++) {
				this.show(portfolios[p].slug);
			}
		},
		toggle: function toggle(portfolio_slug) {
			if (!this.isVisible(portfolio_slug)) {
				this.show(portfolio_slug);
				this.scrollToItem(portfolio_slug);
			} else this.hide(portfolio_slug);
		},
		isVisible: function isVisible(portfolio_slug) {
			return this.visible.indexOf(portfolio_slug) != -1;
		},
		scrollToItem: function scrollToItem(portfolio_slug) {
			setTimeout(function () {
				__WEBPACK_IMPORTED_MODULE_1_vue_scrollto___default.a.scrollTo("#hero-" + portfolio_slug, 500, { easing: 'ease-in', offset: -20 });
			}, 500);
		}
	},
	computed: {
		filteredPortfolios: function filteredPortfolios() {
			var self = this;
			return self.portfolios.filter(function (portfolio) {
				return portfolio.category == self.filtered || !self.filtered;
			});
		}
	},
	watch: {
		filtered: function filtered() {}
	},
	components: {
		'portfolio-item': __WEBPACK_IMPORTED_MODULE_0__components_portfolio_item___default.a
	}
});

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(86)
/* template */
var __vue_template__ = __webpack_require__(101)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\portfolio\\components\\portfolio-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb535e8a", Component.options)
  } else {
    hotAPI.reload("data-v-bb535e8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portfolio_file__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portfolio_file___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__portfolio_file__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_gallery__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_gallery__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

	props: ['portfolio_slug'],
	data: function data() {
		return {
			portfolioItems: [],
			galleryImages: [],
			index: null
		};
	},

	methods: {
		hasText: function hasText(item) {
			return !item.title && !item.summary && !item.description ? false : true;
		},
		addGalleryImages: function addGalleryImages(images) {
			this.galleryImages = [].concat.apply(this.galleryImages, images);
		},
		openGallery: function openGallery(index) {
			this.index = index;
		}
	},
	created: function created() {
		var _this = this;

		axios.get('/db/portfolio-items/' + this.portfolio_slug).then(function (response) {
			_this.portfolioItems = response.data;
		});
	},
	mounted: function mounted() {
		this.selected = this.$route.params.portfolio_slug == this.portfolio_slug;
	},

	components: {
		'portfolio-file': __WEBPACK_IMPORTED_MODULE_0__portfolio_file___default.a,
		'vue-gallery': __WEBPACK_IMPORTED_MODULE_1_vue_gallery___default.a

	}

});

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(88)
/* template */
var __vue_template__ = __webpack_require__(89)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\portfolio\\components\\portfolio-file.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-304f6ea4", Component.options)
  } else {
    hotAPI.reload("data-v-304f6ea4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

	props: ['portfolio_item_id'],
	data: function data() {
		return {
			files: [],
			index_start: 0
		};
	},
	created: function created() {
		var _this = this;

		axios.get('/db/portfolio-files/' + this.portfolio_item_id).then(function (response) {
			//this.portfolioFiles = response.data;
			_this.files = response.data.map(function (file) {
				return {
					title: file.title,
					description: file.description,
					type: 'text/html',
					href: file.image_url,
					video: file.url
				};
			});

			_this.index_start = _this.$parent.galleryImages.length;
			_this.$emit('imagesPrepared', _this.files);
		});
	},
	mounted: function mounted() {
		this.selected = this.$route.params.portfolio_item_id == this.portfolio_item_id;
	},

	methods: {}

});

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "portfolio-file columns is-mobile is-centered is-multiline"
    },
    _vm._l(_vm.files, function(file, index) {
      return _c("div", { staticClass: "column is-6-mobile is-4-desktop" }, [
        _c("div", {
          key: _vm.index_start + index,
          staticClass: "image",
          style: { backgroundImage: "url(" + file.href + ")" },
          on: {
            click: function($event) {
              _vm.$emit("imageClicked", _vm.index_start + index)
            }
          }
        })
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-304f6ea4", module.exports)
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(91), __webpack_require__(99), __webpack_require__(79), __webpack_require__(100), __webpack_require__(77)) :
	typeof define === 'function' && define.amd ? define(['blueimp-gallery/css/blueimp-gallery.min.css', 'blueimp-gallery/js/blueimp-gallery-fullscreen.js', 'blueimp-gallery/js/blueimp-gallery-video.js', 'blueimp-gallery/js/blueimp-gallery-youtube.js', 'blueimp-gallery/js/blueimp-gallery.js'], factory) :
	(global.VueGallery = factory(null,null,null,null,global.blueimp));
}(this, (function (blueimpGallery_min_css,blueimpGalleryFullscreen_js,blueimpGalleryVideo_js,blueimpGalleryYoutube_js,blueimp) { 'use strict';

blueimp = blueimp && blueimp.hasOwnProperty('default') ? blueimp['default'] : blueimp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " .blueimp-gallery > .description { position: absolute; top: 30px; left: 15px; color: #fff; display: none; } .blueimp-gallery-controls > .description { display: block; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var VueGallery$1 = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "blueimp-gallery blueimp-gallery-controls", class: { 'blueimp-gallery-carousel': _vm.carousel }, attrs: { "id": _vm.id } }, [_c('div', { staticClass: "slides" }), _vm._v(" "), _c('h3', { staticClass: "title" }), _vm._v(" "), _c('p', { staticClass: "description" }), _vm._v(" "), _c('a', { staticClass: "prev" }, [_vm._v("‹")]), _vm._v(" "), _c('a', { staticClass: "next" }, [_vm._v("›")]), _vm._v(" "), !_vm.carousel ? _c('a', { staticClass: "close" }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), !_vm.carousel ? _c('ol', { staticClass: "indicator" }) : _vm._e(), _vm._v(" "), _vm.carousel ? _c('a', { staticClass: "play-pause" }) : _vm._e()]);
  }, staticRenderFns: [],
  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    carousel: {
      type: Boolean,
      default: false
    },

    index: {
      type: Number
    },

    id: {
      type: String,
      default: 'blueimp-gallery'
    }
  },

  data: function data() {
    return {
      instance: null
    };
  },


  watch: {
    index: function index(value) {
      if (this.carousel) {
        return;
      }

      if (value !== null) {
        this.open(value);
      } else {
        if (this.instance) {
          this.instance.close();
        }

        this.$emit('close');
      }
    }
  },

  mounted: function mounted() {
    if (this.carousel) {
      this.open();
    }
  },
  destroyed: function destroyed() {
    if (this.instance !== null) {
      this.instance.close();
      this.instance = null;
    }
  },


  methods: {
    open: function open() {
      var _this = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var instance = typeof blueimp.Gallery !== 'undefined' ? blueimp.Gallery : blueimp;

      var options = _extends({
        toggleControlsOnReturn: false,
        toggleControlsOnSlideClick: false,
        closeOnSlideClick: false,
        carousel: this.carousel,
        container: '#' + this.id,
        index: index,
        onopen: function onopen() {
          return _this.$emit('onopen');
        },
        onopened: function onopened() {
          return _this.$emit('onopened');
        },
        onslide: this.onSlideCustom,
        onslideend: function onslideend(index, slide) {
          return _this.$emit('onslideend', { index: index, slide: slide });
        },
        onslidecomplete: function onslidecomplete(index, slide) {
          return _this.$emit('onslidecomplete', { index: index, slide: slide });
        },
        onclose: function onclose() {
          return _this.$emit('close');
        },
        onclosed: function onclosed() {
          return _this.$emit('onclosed');
        }
      }, this.options);

      if (this.carousel) {
        options.container = this.$el;
      }

      this.instance = instance(this.images, options);
    },
    onSlideCustom: function onSlideCustom(index, slide) {
      this.$emit('onslide', { index: index, slide: slide });

      var image = this.images[index];
      if (image !== undefined) {
        var text = image.description;
        var node = this.instance.container.find('.description');
        if (text) {
          node.empty();
          node[0].appendChild(document.createTextNode(text));
        }
      }
    }
  }
};

return VueGallery$1;

})));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(73)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./blueimp-gallery.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./blueimp-gallery.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";.blueimp-gallery,.blueimp-gallery>.slides>.slide>.slide-content{position:absolute;top:0;right:0;bottom:0;left:0;-moz-backface-visibility:hidden}.blueimp-gallery>.slides>.slide>.slide-content{margin:auto;width:auto;height:auto;max-width:100%;max-height:100%;opacity:1}.blueimp-gallery{position:fixed;z-index:999999;overflow:hidden;background:#000;background:rgba(0,0,0,.9);opacity:0;display:none;direction:ltr;-ms-touch-action:none;touch-action:none}.blueimp-gallery-carousel{position:relative;z-index:auto;margin:1em auto;padding-bottom:56.25%;box-shadow:0 0 10px #000;-ms-touch-action:pan-y;touch-action:pan-y}.blueimp-gallery-display{display:block;opacity:1}.blueimp-gallery>.slides{position:relative;height:100%;overflow:hidden}.blueimp-gallery-carousel>.slides{position:absolute}.blueimp-gallery>.slides>.slide{position:relative;float:left;height:100%;text-align:center;-webkit-transition-timing-function:cubic-bezier(.645,.045,.355,1);-moz-transition-timing-function:cubic-bezier(.645,.045,.355,1);-ms-transition-timing-function:cubic-bezier(.645,.045,.355,1);-o-transition-timing-function:cubic-bezier(.645,.045,.355,1);transition-timing-function:cubic-bezier(.645,.045,.355,1)}.blueimp-gallery,.blueimp-gallery>.slides>.slide>.slide-content{-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;-ms-transition:opacity .2s linear;-o-transition:opacity .2s linear;transition:opacity .2s linear}.blueimp-gallery>.slides>.slide-loading{background:url(" + __webpack_require__(78) + ") center no-repeat;background-size:64px 64px}.blueimp-gallery>.slides>.slide-loading>.slide-content{opacity:0}.blueimp-gallery>.slides>.slide-error{background:url(" + __webpack_require__(93) + ") center no-repeat}.blueimp-gallery>.slides>.slide-error>.slide-content{display:none}.blueimp-gallery>.next,.blueimp-gallery>.prev{position:absolute;top:50%;left:15px;width:40px;height:40px;margin-top:-23px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:60px;font-weight:100;line-height:30px;color:#fff;text-decoration:none;text-shadow:0 0 2px #000;text-align:center;background:#222;background:rgba(0,0,0,.5);-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;border:3px solid #fff;-webkit-border-radius:23px;-moz-border-radius:23px;border-radius:23px;opacity:.5;cursor:pointer;display:none}.blueimp-gallery>.next{left:auto;right:15px}.blueimp-gallery>.close,.blueimp-gallery>.title{position:absolute;top:15px;left:15px;margin:0 40px 0 0;font-size:20px;line-height:30px;color:#fff;text-shadow:0 0 2px #000;opacity:.8;display:none}.blueimp-gallery>.close{padding:15px;right:15px;left:auto;margin:-15px;font-size:30px;text-decoration:none;cursor:pointer}.blueimp-gallery>.play-pause{position:absolute;right:15px;bottom:15px;width:15px;height:15px;background:url(" + __webpack_require__(94) + ") 0 0 no-repeat;cursor:pointer;opacity:.5;display:none}.blueimp-gallery-playing>.play-pause{background-position:-15px 0}.blueimp-gallery>.close:hover,.blueimp-gallery>.next:hover,.blueimp-gallery>.play-pause:hover,.blueimp-gallery>.prev:hover,.blueimp-gallery>.title:hover{color:#fff;opacity:1}.blueimp-gallery-controls>.close,.blueimp-gallery-controls>.next,.blueimp-gallery-controls>.play-pause,.blueimp-gallery-controls>.prev,.blueimp-gallery-controls>.title{display:block;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}.blueimp-gallery-left>.prev,.blueimp-gallery-right>.next,.blueimp-gallery-single>.next,.blueimp-gallery-single>.play-pause,.blueimp-gallery-single>.prev{display:none}.blueimp-gallery>.close,.blueimp-gallery>.next,.blueimp-gallery>.play-pause,.blueimp-gallery>.prev,.blueimp-gallery>.slides>.slide>.slide-content{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}body:last-child .blueimp-gallery>.slides>.slide-error{background-image:url(" + __webpack_require__(95) + ")}body:last-child .blueimp-gallery>.play-pause{width:20px;height:20px;background-size:40px 20px;background-image:url(" + __webpack_require__(96) + ")}body:last-child .blueimp-gallery-playing>.play-pause{background-position:-20px 0}*+html .blueimp-gallery>.slides>.slide{min-height:300px}*+html .blueimp-gallery>.slides>.slide>.slide-content{position:relative}.blueimp-gallery>.indicator{position:absolute;top:auto;right:15px;bottom:15px;left:15px;margin:0 40px;padding:0;list-style:none;text-align:center;line-height:10px;display:none}.blueimp-gallery>.indicator>li{display:inline-block;width:9px;height:9px;margin:6px 3px 0 3px;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;border:1px solid transparent;background:#ccc;background:rgba(255,255,255,.25) center no-repeat;border-radius:5px;box-shadow:0 0 2px #000;opacity:.5;cursor:pointer}.blueimp-gallery>.indicator>.active,.blueimp-gallery>.indicator>li:hover{background-color:#fff;border-color:#fff;opacity:1}.blueimp-gallery>.indicator>li:after{opacity:0;display:block;position:absolute;content:'';top:-5em;width:75px;height:75px;transition:transform .6s ease-out,opacity .4s ease-out;transform:translateX(-50%) translateY(0) translateZ(0);pointer-events:none}.blueimp-gallery>.indicator>li:hover:after{opacity:1;border-radius:50%;background:inherit;transform:translateX(-50%) translateY(-5px) translateZ(0)}.blueimp-gallery>.indicator>.active:after{display:none}.blueimp-gallery-controls>.indicator{display:block;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}.blueimp-gallery-single>.indicator{display:none}.blueimp-gallery>.indicator{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}*+html .blueimp-gallery>.indicator>li{display:inline}.blueimp-gallery>.slides>.slide>.video-content>img{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:auto;height:auto;max-width:100%;max-height:100%;-moz-backface-visibility:hidden}.blueimp-gallery>.slides>.slide>.video-content>video{position:absolute;top:0;left:0;width:100%;height:100%}.blueimp-gallery>.slides>.slide>.video-content>iframe{position:absolute;top:100%;left:0;width:100%;height:100%;border:none}.blueimp-gallery>.slides>.slide>.video-playing>iframe{top:0}.blueimp-gallery>.slides>.slide>.video-content>a{position:absolute;top:50%;right:0;left:0;margin:-64px auto 0;width:128px;height:128px;background:url(" + __webpack_require__(97) + ") center no-repeat;opacity:.8;cursor:pointer}.blueimp-gallery>.slides>.slide>.video-content>a:hover{opacity:1}.blueimp-gallery>.slides>.slide>.video-playing>a,.blueimp-gallery>.slides>.slide>.video-playing>img{display:none}.blueimp-gallery>.slides>.slide>.video-content>video{display:none}.blueimp-gallery>.slides>.slide>.video-playing>video{display:block}.blueimp-gallery>.slides>.slide>.video-loading>a{background:url(" + __webpack_require__(78) + ") center no-repeat;background-size:64px 64px}body:last-child .blueimp-gallery>.slides>.slide>.video-content:not(.video-loading)>a{background-image:url(" + __webpack_require__(98) + ")}*+html .blueimp-gallery>.slides>.slide>.video-content{height:100%}*+html .blueimp-gallery>.slides>.slide>.video-content>a{left:50%;margin-left:-64px}", ""]);

// exports


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/error.png?94e5e55ddd44d1cce239326f2761e651";

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/play-pause.png?a135900b057ca0c2b1073fcd77dbc413";

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/blueimp-gallery/img/error.svg?19ee6b7e6642d75d6144b0c8209c93d6";

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/blueimp-gallery/img/play-pause.svg?21dfa3149b274acb9c1819d342a6a169";

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = "/images/vendor/blueimp-gallery/video-play.png?e39ea1c9ef17e4620c3c23488178e715";

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/blueimp-gallery/img/video-play.svg?9b737958b1644b46b23904e53afcac50";

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * blueimp Gallery Fullscreen JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document */

;(function (factory) {
  'use strict'
  if (true) {
    // Register as an anonymous AMD module:
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(76), __webpack_require__(77)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {
    // Browser globals:
    factory(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
  }
})(function ($, Gallery) {
  'use strict'

  $.extend(Gallery.prototype.options, {
    // Defines if the gallery should open in fullscreen mode:
    fullScreen: false
  })

  var initialize = Gallery.prototype.initialize
  var close = Gallery.prototype.close

  $.extend(Gallery.prototype, {
    getFullScreenElement: function () {
      return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      )
    },

    requestFullScreen: function (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    },

    exitFullScreen: function () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },

    initialize: function () {
      initialize.call(this)
      if (this.options.fullScreen && !this.getFullScreenElement()) {
        this.requestFullScreen(this.container[0])
      }
    },

    close: function () {
      if (this.getFullScreenElement() === this.container[0]) {
        this.exitFullScreen()
      }
      close.call(this)
    }
  })

  return Gallery
})


/***/ })

});