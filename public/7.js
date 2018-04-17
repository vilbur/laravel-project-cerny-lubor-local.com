webpackJsonp([7],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("048c055a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-defc3dca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./skills.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-defc3dca\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./skills.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.show-enter,\n.show-leave-to { max-height: 1px; opacity: 0\n}\n.show-leave,\n.show-enter-to { max-height: 512px; opacity: 1\n}\n.show-enter-active,\n.show-leave-active { -webkit-transition: .5s ease-out; transition: .5s ease-out\n}\n\n", ""]);

// exports


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_skills_header__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_skills_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_skills_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_skills_detail__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_skills_detail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_skills_detail__);
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
	props: ['category'],
	data: function data() {
		return {
			categories: [],
			skills: [],
			filtered: ''
		};
	},
	created: function created() {
		var _this = this;

		axios.get('/db/category-skills').then(function (response) {
			return _this.categories = response.data;
		});
		axios.get('/db/skills').then(function (response) {
			return _this.skills = response.data;
		});
	},

	methods: {},
	computed: {
		filteredSkills: function filteredSkills() {
			var self = this;
			return self.skills.filter(function (skill) {
				return skill.category == self.filtered || !self.filtered;
			});
		}
	},
	watch: {
		filtered: function filtered() {}
	},

	components: {
		'skills-header': __WEBPACK_IMPORTED_MODULE_0__components_skills_header___default.a,
		'skills-detail': __WEBPACK_IMPORTED_MODULE_1__components_skills_detail___default.a
	}
});

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(108)
/* template */
var __vue_template__ = __webpack_require__(109)
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
Component.options.__file = "resources\\assets\\js\\skills\\components\\skills-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-490a2a5d", Component.options)
  } else {
    hotAPI.reload("data-v-490a2a5d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 108:
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
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 109:
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
            "column logo has-text-centered\n\t\t\t\tis-3-mobile\n\t\t\t\tis-3-tablet\n\t\t\t\tis-2-desktop is-offset-1-desktop\n\t\t\t\tis-offset-2-widescreen"
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
    require("vue-hot-reload-api")      .rerender("data-v-490a2a5d", module.exports)
  }
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(111)
/* template */
var __vue_template__ = __webpack_require__(112)
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
Component.options.__file = "resources\\assets\\js\\skills\\components\\skills-detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d53243be", Component.options)
  } else {
    hotAPI.reload("data-v-d53243be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 111:
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


/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns is-mobile is-multiline bio-details" },
    [
      _c(
        "strong",
        {
          staticClass:
            "column is-4-mobile is-4-tablet is-3-desktop has-text-right-mobile has-text-left border-OFF-g"
        },
        [_vm._t("title")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "column is-8-mobile is-8-tablet is-9-desktop has-text-left border-OFF"
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
    require("vue-hot-reload-api")      .rerender("data-v-d53243be", module.exports)
  }
}

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vilbur-skills" } },
    [
      _c(
        "ul",
        {
          staticClass: "tabs is-centered is-fixed-top",
          staticStyle: { "margin-top": "180px" }
        },
        [
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
        _vm._l(_vm.filteredSkills, function(skill) {
          return _c(
            "li",
            { key: skill.id, staticClass: "hero" },
            [
              _c("skills-header", [
                _c("span", { attrs: { slot: "logo" }, slot: "logo" }, [
                  _c("img", {
                    staticClass: "img-center-vcerticaly",
                    attrs: { src: skill.image }
                  })
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "item-title" }, [
                  _vm._v(_vm._s(skill.title))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "columns" }, [
                _c("div", {
                  staticClass:
                    "column has-text-centered\n\t\t\t\t\t\t\tis-11-mobile is-offset-1-mobile has-text-left-mobile\n\t\t\t\t\t\t\tis-3-tablet\n\t\t\t\t\t\t\tis-2-desktop is-offset-1-desktop\n\t\t\t\t\t\t\tis-offset-2-widescreen"
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "skill-details column border-OFF-b" },
                  _vm._l(skill.skill_details, function(skill_detail) {
                    return _c(
                      "div",
                      [
                        _c("skills-detail", [
                          _c(
                            "span",
                            { attrs: { slot: "title" }, slot: "title" },
                            [_vm._v(_vm._s(skill_detail.title) + ":")]
                          ),
                          _vm._v(
                            "\n\t\t\t\t\t\t\t" +
                              _vm._s(skill_detail.summary) +
                              "\n\t\t\t\t\t\t"
                          )
                        ])
                      ],
                      1
                    )
                  })
                )
              ])
            ],
            1
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
    require("vue-hot-reload-api")      .rerender("data-v-defc3dca", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(106)
/* template */
var __vue_template__ = __webpack_require__(113)
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
Component.options.__file = "resources\\assets\\js\\skills\\views\\skills.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-defc3dca", Component.options)
  } else {
    hotAPI.reload("data-v-defc3dca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});