webpackJsonp([2],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_biography_header_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_biography_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_biography_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_biography_detail_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_biography_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_biography_detail_vue__);
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
			models: []
		};
	},
	created: function created() {
		var _this = this;

		axios.get('/db/biography').then(function (response) {
			return _this.models = response.data;
		});
	},
	mounted: function mounted() {},

	methods: {},
	components: {
		'biography-header': __WEBPACK_IMPORTED_MODULE_0__components_biography_header_vue___default.a,
		'biography-detail': __WEBPACK_IMPORTED_MODULE_1__components_biography_detail_vue___default.a
	}
});

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(117)
/* template */
var __vue_template__ = __webpack_require__(118)
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
Component.options.__file = "resources/assets/js/biography/components/biography-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f1c46a2", Component.options)
  } else {
    hotAPI.reload("data-v-6f1c46a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 117:
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "header-columns columns is-mobile is-multiline" },
    [
      _c(
        "div",
        {
          staticClass:
            "column logo has-text-centered\n\t\t\t\tis-3-mobile\n\t\t\t\tis-3-tablet\n\t\t\t\tis-2-desktop"
        },
        [_vm._t("logo")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "column item-title-wrapper\n\t\t\t\tis-9-mobile\n\t\t\t\tis-9-tablet\n\t\t\t\tis-9-desktop\n\t\t\t\tis-8-widescreen"
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6f1c46a2", module.exports)
  }
}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(120)
/* template */
var __vue_template__ = __webpack_require__(121)
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
Component.options.__file = "resources/assets/js/biography/components/biography-detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-890e0b34", Component.options)
  } else {
    hotAPI.reload("data-v-890e0b34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 120:
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-890e0b34", module.exports)
  }
}

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content", attrs: { id: "vilbur-biography" } },
    [
      _c(
        "div",
        { staticClass: "container" },
        _vm._l(_vm.models, function(model, index) {
          return _c(
            "div",
            { staticClass: "hero" },
            [
              _c("biography-header", [
                _c("span", { attrs: { slot: "logo" }, slot: "logo" }, [
                  model.link
                    ? _c(
                        "a",
                        {
                          staticClass: "bio-logo-link ",
                          attrs: { href: model.link, target: "_blank" }
                        },
                        [
                          _c("img", {
                            staticClass: "Ximg-center-vcerticaly",
                            attrs: { src: model.image }
                          })
                        ]
                      )
                    : _c("span", [
                        _c("img", {
                          staticClass: "Ximg-center-vcerticaly",
                          attrs: { src: model.image }
                        })
                      ])
                ]),
                _vm._v(" "),
                model.link
                  ? _c(
                      "a",
                      {
                        staticClass: "item-title",
                        attrs: { href: model.link, target: "_blank" }
                      },
                      [_vm._v(_vm._s(model.client))]
                    )
                  : _c("span", { staticClass: "item-title" }, [
                      _vm._v(_vm._s(model.client))
                    ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "bio-details columns is-mobile is-multiline" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "column bio-detail has-text-centered\n\t\t\t\t\t\t\tis-3-mobile\n\t\t\t\t\t\t\tis-3-tablet\n\t\t\t\t\t\t\tis-2-desktop\n\t\t\t\t\t\t\tis-offset-1-widescreen"
                    },
                    [_c("span", {}, [_vm._v(_vm._s(model.since_until))])]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "column bio-detail" }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t\n\t\t\t\t\t\t" +
                        _vm._s(model.job_title) +
                        "\n\t\t\t\t\t"
                    )
                  ])
                ]
              )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1459f298", module.exports)
  }
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(115)
/* template */
var __vue_template__ = __webpack_require__(122)
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
Component.options.__file = "resources/assets/js/biography/views/biography.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1459f298", Component.options)
  } else {
    hotAPI.reload("data-v-1459f298", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});