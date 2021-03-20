(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_profile_pic_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/profile-pic.png */ "./resources/img/profile-pic.png");
/* harmony import */ var _img_profile_pic_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_profile_pic_png__WEBPACK_IMPORTED_MODULE_0__);
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
      avatarPath: _img_profile_pic_png__WEBPACK_IMPORTED_MODULE_0___default.a,
      drawer: null,
      test: {},
      links: [{
        id: 0,
        icon: "view-dashboard",
        title: "Dashboard",
        route: "/dashboard",
        role: ""
      }],
      adminLinks: [{
        id: 1,
        icon: "account-multiple",
        title: "Přehled studentů",
        route: "/users",
        role: "admin"
      }, {
        id: 3,
        icon: "teach",
        title: "Přednášky",
        route: "/show-lectures",
        role: "admin"
      }, {
        id: 4,
        icon: "charity",
        title: "Partneři",
        route: "/partners",
        role: "admin"
      }, {
        id: 5,
        icon: "account-box-multiple",
        title: "Tým",
        route: "/team",
        role: "admin"
      }, {
        id: 6,
        icon: "frequently-asked-questions",
        title: "FAQ",
        route: "/admin-faq",
        role: "admin"
      }, {
        id: 7,
        icon: "comment-multiple",
        title: "Reference",
        route: "/reference",
        role: "admin"
      }, {
        id: 8,
        icon: "file-pdf",
        title: "Dokumenty",
        route: "/documents",
        role: "admin"
      }]
    };
  },
  methods: {
    logout: function logout() {
      localStorage.removeItem("access_token");
      this.$store.dispatch("clearUser");
      this.$router.push('/');
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('setAccessToken', localStorage.getItem('access_token'));

    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('setUser');
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.getUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      width: 3,
      radius: 10,
      padding: 8,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 5, 10, 1, 8, 2, 9, 0],
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      lectures: [],
      bestLectures: [],
      countLectures: 0,
      countPartners: 0,
      headers: [{
        text: 'Název přednášky',
        align: 'start',
        sortable: false,
        value: 'title'
      }, {
        text: 'Firma',
        sortable: false,
        value: 'company'
      }, {
        text: 'Čas',
        value: 'time'
      }, {
        text: 'Místo',
        sortable: false,
        value: 'place'
      }],
      studentHeaders: [{
        text: 'Název přednášky',
        align: 'start',
        sortable: false,
        value: 'title'
      }, {
        text: 'Firma',
        sortable: false,
        value: 'company'
      }, {
        text: 'Čas',
        value: 'time'
      }, {
        text: 'Místo',
        sortable: false,
        value: 'place'
      }, {
        text: 'Akce',
        sortable: false,
        value: 'actions'
      }]
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(this.getAccessToken)
        }
      };
      return config;
    },
    getMyLectures: function getMyLectures() {
      var _this = this;

      axios.get("./api/getMyLecture", this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this.lectures = resp.data.lectures;
        }
      });
    },
    getStats: function getStats() {
      var _this2 = this;

      axios.get("./api/stats", this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this2.bestLectures = resp.data.response.bestLectures;
          _this2.countLectures = resp.data.response.countLectures;
          _this2.countPartners = resp.data.response.countPartners;
        }
      });
    },
    leftLecture: function leftLecture(id) {
      var _this3 = this;

      axios.post('./api/leftLecture/' + id, {}, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this3.getMyLectures();
        }
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('setAccessToken', localStorage.getItem('access_token'));

    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('setUser');
    }

    this.getMyLectures();
    this.getStats();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getAccessToken']), {
    user: function user() {
      return this.$store.getters.getUser;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Documents.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Documents.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
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
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: 'Dokument',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Cesta',
        align: 'start',
        sortable: false,
        value: 'path'
      }, {
        text: 'Akce',
        value: 'actions',
        sortable: false
      }],
      files: [],
      dialog: false,
      file: {
        name: '',
        base64: ''
      },
      id: 0
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      };
      return config;
    },
    getDocuments: function getDocuments() {
      var _this = this;

      axios.get('./api/documents').then(function (resp) {
        if (resp.status === 200) {
          _this.files = resp.data.documents;
        }
      })["catch"](function (error) {
        console.log(error);
        _this.loading = false;
      });
    },
    getBase64: function getBase64(file) {
      var _this2 = this;

      var base64 = "";
      var reader = new FileReader();

      reader.onloadend = function (f) {
        _this2.file.base64 = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    addDocument: function addDocument() {
      var _this3 = this;

      axios.post("./api/uploadDocument", {
        name: this.file.name,
        document: this.file.base64
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this3.files.push(resp.data.file);

          _this3.dialog = false;
        }
      });
    },
    deleteDocument: function deleteDocument(item) {
      var _this4 = this;

      axios["delete"]("./api/deletePartner/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this4.partners.splice(_this4.partners.indexOf(item), 1);
        }
      });
    }
  },
  mounted: function mounted() {
    this.getDocuments();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/EditProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/EditProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
/* harmony import */ var _img_profile_pic_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/profile-pic.png */ "./resources/img/profile-pic.png");
/* harmony import */ var _img_profile_pic_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_profile_pic_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      firstName: '',
      lastName: '',
      email: '',
      pass: '',
      newPass: '',
      profile: _img_profile_pic_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      base64: '',
      errors: []
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(this.getAccessToken)
        }
      };
      return config;
    },
    getMe: function getMe() {
      var _this = this;

      axios.get("./api/me", this.getAuth()).then(function (resp) {
        console.log(resp);

        if (resp.status === 200) {
          _this.firstName = resp.data.user.name;
          _this.lastName = resp.data.user.lastname;
          _this.email = resp.data.user.email;

          if (resp.data.user.avatar) {
            _this.profile = resp.data.user.avatar.path;
          }

          _this.loading = false;
        }
      });
    },
    editProfile: function editProfile() {
      var _this2 = this;

      this.uploadImage();
      axios.post("./api/editMe", {
        name: this.firstName,
        lastname: this.lastName,
        email: this.email,
        pass: this.pass,
        newPass: this.newPass
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this2.getMe();
        }
      })["catch"](function (error) {
        if (error.response.status === 401) {
          _this2.errors = error.response.data.errors;
        }
      });
    },
    getBase64: function getBase64(file) {
      var _this3 = this;

      var base64 = "";
      var reader = new FileReader();

      reader.onloadend = function (f) {
        _this3.base64 = reader.result;
        _this3.profile = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    uploadImage: function uploadImage() {
      axios.post("./api/avatar", {
        avatar: this.base64
      }, this.getAuth()).then(function (response) {
        if (reponse.status === 200) {}
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('setAccessToken', localStorage.getItem('access_token'));

    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('setUser');
    }

    this.getMe();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['getAccessToken']), {
    user: function user() {
      return this.$store.getters.getUser;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Faq.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Faq.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
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
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: 'Otázka',
        align: 'start',
        sortable: false,
        value: 'question'
      }, {
        text: 'Odpověď',
        sortable: false,
        value: 'answer'
      }, {
        text: 'Akce',
        value: 'actions',
        sortable: false
      }],
      dialog: false,
      faqs: [],
      faq: {
        question: '',
        answer: '',
        action: 'add'
      },
      id: 0
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      };
      return config;
    },
    getFaq: function getFaq() {
      var _this = this;

      axios.get('./api/faq').then(function (resp) {
        if (resp.status === 200) {
          _this.faqs = resp.data.faqs;
        }
      });
    },
    addFaq: function addFaq() {
      var _this2 = this;

      axios.post("./api/addFaq", {
        question: this.faq.question,
        answer: this.faq.answer
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this2.faqs.push(resp.data.faq);

          _this2.dialog = false;
          _this2.faq.question = '';
          _this2.faq.answer = '';
        }
      });
    },
    editFaq: function editFaq(item) {
      this.faq.question = item.question;
      this.faq.answer = item.answer;
      this.faq.action = 'edit';
      this.id = item.id;
      this.dialog = true;
    },
    deleteFaq: function deleteFaq(item) {
      var _this3 = this;

      axios["delete"]("./api/deleteFaq/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this3.faqs.splice(_this3.faqs.indexOf(item), 1);
        }
      });
    },
    saveEditFaq: function saveEditFaq(id) {
      var _this4 = this;

      axios.post("./api/editFaq/" + id, {
        question: this.faq.question,
        answer: this.faq.answer
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this4.dialog = false;

          _this4.getFaq();

          _this4.faq.question = '';
          _this4.faq.answer = '';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getFaq();
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Partners.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Partners.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: 'Název',
        align: 'start',
        sortable: false,
        value: 'name'
      }, {
        text: 'Logo',
        align: 'start',
        sortable: false,
        value: 'path'
      }, {
        text: 'Akce',
        value: 'actions',
        sortable: false
      }],
      partners: [],
      dialog: false,
      partner: {
        name: '',
        url: '',
        base64: '',
        action: 'add'
      },
      id: 0
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      };
      return config;
    },
    getPartners: function getPartners() {
      var _this = this;

      axios.get('./api/partners').then(function (resp) {
        if (resp.status === 200) {
          _this.partners = resp.data.partners;
        }
      })["catch"](function (error) {
        console.log(error);
        _this.loading = false;
      });
    },
    getBase64: function getBase64(file) {
      var _this2 = this;

      var base64 = "";
      var reader = new FileReader();

      reader.onloadend = function (f) {
        _this2.partner.base64 = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    addPartner: function addPartner() {
      var _this3 = this;

      axios.post("./api/newPartner", {
        name: this.partner.name,
        url: this.partner.url,
        logo: this.partner.base64
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this3.partners.push(resp.data.partner);

          _this3.dialog = false;
          _this3.partner.name = '';
          _this3.partner.url = '';
          _this3.partner.base64 = '';
        }
      });
    },
    deletePartner: function deletePartner(item) {
      var _this4 = this;

      axios["delete"]("./api/deletePartner/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this4.partners.splice(_this4.partners.indexOf(item), 1);
        }
      });
    },
    editPartner: function editPartner(item) {
      this.partner.name = item.name;
      this.partner.url = item.url;
      this.partner.action = 'edit';
      this.id = item.id;
      this.dialog = true;
    },
    saveEditPartner: function saveEditPartner(id) {
      var _this5 = this;

      axios.post("./api/editPartner/" + id, {
        name: this.partner.name,
        url: this.partner.url,
        logo: this.partner.base64
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this5.dialog = false;

          _this5.getPartners();

          _this5.partner.name = '';
          _this5.partner.url = '';
          _this5.partner.base64 = '';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getPartners();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Reference.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Reference.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
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
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: 'Text',
        align: 'start',
        sortable: false,
        value: 'text'
      }, {
        text: 'Autor',
        sortable: false,
        value: 'author'
      }, {
        text: 'Pozice',
        sortable: false,
        value: 'position'
      }, {
        text: 'Společnost',
        sortable: false,
        value: 'company'
      }, {
        text: 'Akce',
        value: 'actions',
        sortable: false
      }],
      dialog: false,
      references: [],
      reference: {
        text: '',
        author: '',
        position: '',
        company: '',
        action: 'add'
      },
      id: 0
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      };
      return config;
    },
    getReferences: function getReferences() {
      var _this = this;

      axios.get('./api/reference').then(function (resp) {
        if (resp.status === 200) {
          _this.references = resp.data.references;
        }
      });
    },
    addReference: function addReference() {
      var _this2 = this;

      axios.post("./api/addReference", {
        text: this.reference.text,
        author: this.reference.author,
        position: this.reference.position,
        company: this.reference.company
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this2.references.push(resp.data.reference);

          _this2.dialog = false;
          _this2.reference.text = '';
          _this2.reference.author = '';
          _this2.reference.position = '';
          _this2.reference.company = '';
        }
      });
    },
    editReference: function editReference(item) {
      this.reference.text = item.text;
      this.reference.author = item.author;
      this.reference.position = item.position;
      this.reference.company = item.company;
      this.reference.action = 'edit';
      this.id = item.id;
      this.dialog = true;
    },
    deleteReference: function deleteReference(item) {
      var _this3 = this;

      axios["delete"]("./api/deleteReference/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this3.references.splice(_this3.references.indexOf(item), 1);
        }
      });
    },
    saveEditReference: function saveEditReference(id) {
      var _this4 = this;

      axios.post("./api/editReference/" + id, {
        text: this.reference.text,
        author: this.reference.author,
        position: this.reference.position,
        company: this.reference.company
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this4.dialog = false;

          _this4.getReferences();

          _this4.reference.text = '';
          _this4.reference.author = '';
          _this4.reference.position = '';
          _this4.reference.company = '';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getReferences();
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowLectures.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/ShowLectures.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar */ "./resources/js/components/Navbar.vue");
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
  components: {
    Navbar: _components_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      headers: [{
        text: 'Název přednášky',
        align: 'start',
        sortable: false,
        value: 'title'
      }, {
        text: 'Název firmy',
        value: 'company',
        sortable: false
      }, {
        text: 'Čas',
        value: 'time',
        sortable: true
      }, {
        text: 'Učebna',
        value: 'place',
        sortable: false
      }, {
        text: 'Maximální počet',
        value: 'viewers',
        sortable: false
      }, {
        text: 'Akce',
        value: 'actions',
        sortable: false
      }],
      lectures: [],
      editedIndex: -1,
      lecture: {
        title: '',
        company: '',
        time: 0,
        place: '',
        viewers: 0,
        action: 'add'
      },
      id: 0
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      };
      return config;
    },
    getAllLectures: function getAllLectures() {
      var _this = this;

      axios.get('./api/getAllLectures', this.getAuth()).then(function (response) {
        _this.lectures = response.data.lectures;
      });
    },
    addLecture: function addLecture() {
      var _this2 = this;

      axios.post("./api/createNewLecture", {
        title: this.lecture.title,
        company: this.lecture.company,
        time: this.lecture.time,
        place: this.lecture.place,
        viewers: this.lecture.viewers
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this2.lectures.push(resp.data.lecture);

          _this2.dialog = false;
          _this2.lecture.title = '';
          _this2.lecture.company = '';
          _this2.lecture.time = '';
          _this2.lecture.place = '';
          _this2.lecture.viewers = '';
        }
      });
    },
    deleteLecture: function deleteLecture(item) {
      var _this3 = this;

      console.log(item);
      axios["delete"]('./api/deleteLecture/' + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this3.lectures.splice(_this3.lectures.indexOf(item), 1);
        }
      });
    },
    editLecture: function editLecture(item) {
      this.lecture.title = item.title;
      this.lecture.company = item.company;
      this.lecture.time = item.time;
      this.lecture.place = item.place;
      this.lecture.viewers = item.viewers;
      this.lecture.action = 'edit';
      this.id = item.id;
      this.dialog = true;
    },
    saveEditLecture: function saveEditLecture(id) {
      var _this4 = this;

      axios.post("./api/editLecture/" + id, {
        title: this.lecture.title,
        company: this.lecture.company,
        time: this.lecture.time,
        place: this.lecture.place,
        viewers: this.lecture.viewers
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this4.dialog = false;

          _this4.getAllLectures();

          _this4.lecture.title = '';
          _this4.lecture.company = '';
          _this4.lecture.time = '';
          _this4.lecture.place = '';
          _this4.lecture.viewers = '';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getAllLectures();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Team.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Team.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
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
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: 'Avatar',
        align: 'start',
        sortable: false,
        value: 'avatar'
      }, {
        text: 'Titul',
        sortable: false,
        value: 'degree'
      }, {
        text: 'Jméno',
        sortable: false,
        value: 'name'
      }, {
        text: 'Role',
        value: 'role',
        sortable: false
      }, {
        text: 'Email',
        value: 'email',
        sortable: false
      }, {
        text: 'Akce',
        value: 'actions',
        sortable: false
      }],
      dialog: false,
      members: [],
      member: {
        degree: '',
        name: '',
        role: '',
        email: '',
        base64: '',
        action: 'add'
      },
      id: 0
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      };
      return config;
    },
    getTeamMembers: function getTeamMembers() {
      var _this = this;

      axios.get('./api/team').then(function (resp) {
        if (resp.status === 200) {
          _this.members = resp.data.team;
        }
      });
    },
    getBase64: function getBase64(file) {
      var _this2 = this;

      var base64 = "";
      var reader = new FileReader();

      reader.onloadend = function (f) {
        _this2.member.base64 = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    addMember: function addMember() {
      var _this3 = this;

      axios.post("./api/addMember", {
        degree: this.member.degree,
        name: this.member.name,
        role: this.member.role,
        email: this.member.email,
        avatar: this.member.base64
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this3.members.push(resp.data.member);

          _this3.dialog = false;
          _this3.member.degree = '';
          _this3.member.name = '';
          _this3.member.role = '';
          _this3.member.email = '';
          _this3.member.base64 = '';
        }
      });
    },
    deleteMember: function deleteMember(item) {
      var _this4 = this;

      axios["delete"]("./api/deleteMember/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this4.members.splice(_this4.members.indexOf(item), 1);
        }
      });
    },
    editMember: function editMember(item) {
      this.member.degree = item.degree;
      this.member.name = item.name;
      this.member.role = item.role;
      this.member.email = item.email;
      this.member.action = 'edit';
      this.id = item.id;
      this.dialog = true;
    },
    saveEditMember: function saveEditMember(id) {
      var _this5 = this;

      axios.post("./api/editMember/" + id, {
        degree: this.member.degree,
        name: this.member.name,
        role: this.member.role,
        email: this.member.email,
        avatar: this.member.base64
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this5.dialog = false;

          _this5.getTeamMembers();

          _this5.member.degree = '';
          _this5.member.name = '';
          _this5.member.role = '';
          _this5.member.email = '';
          _this5.member.base64 = '';
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getTeamMembers();
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loading: true,
      search: "",
      headers: [{
        text: "Jméno",
        align: "start",
        sortable: true,
        value: "name"
      }, {
        text: "Přijmení",
        sortable: true,
        value: "lastname"
      }, {
        text: "Email",
        sortable: false,
        value: "email"
      }, {
        text: "Zaregistrovaný",
        sortable: false,
        value: "created_at"
      }],
      users: []
    };
  },
  methods: {
    getAuth: function getAuth() {
      var config = {
        headers: {
          Authorization: "Bearer ".concat(this.getAccessToken)
        }
      };
      return config;
    },
    getAllUsers: function getAllUsers() {
      var _this = this;

      axios.get('./api/user', this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this.users = resp.data.users;
          _this.loading = false;
        }
      })["catch"](function (error) {
        _this.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('setAccessToken', localStorage.getItem('access_token'));
    this.getAllUsers();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['getAccessToken', 'getRole']))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.v-list-item__title{\n    font-size: 1rem !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    [
      _c(
        "v-navigation-drawer",
        {
          staticClass: "navbar",
          attrs: { app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "router-link",
            { attrs: { to: "/edit-profile" } },
            [
              _c(
                "v-layout",
                { attrs: { column: "", "align-center": "" } },
                [
                  _c(
                    "v-flex",
                    { staticClass: "mt-5" },
                    [
                      _c("v-avatar", { attrs: { size: "75" } }, [
                        _vm.user.avatar
                          ? _c("img", {
                              attrs: {
                                src: _vm.user.avatar.path,
                                alt: "Profilovka"
                              }
                            })
                          : _c("img", {
                              attrs: { src: _vm.avatarPath, alt: "Profilovka" }
                            })
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-2 black--text" }, [
                    _vm._v(
                      _vm._s(_vm.user.name) + " " + _vm._s(_vm.user.lastname)
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list",
            [
              _c(
                "v-list-item-group",
                [
                  _vm._l(_vm.links, function(link) {
                    return _c(
                      "v-list-item",
                      { key: link.id, attrs: { router: "", to: link.route } },
                      [
                        _c(
                          "v-list-item-icon",
                          [_c("v-icon", [_vm._v("mdi-" + _vm._s(link.icon))])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item-content",
                          [
                            _c("v-list-item-title", [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(link.title) +
                                  "\n                        "
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.adminLinks, function(adminLink) {
                    return _vm.user.role === "admin"
                      ? _c(
                          "v-list-item",
                          {
                            key: adminLink.id,
                            attrs: { router: "", to: adminLink.route }
                          },
                          [
                            _c(
                              "v-list-item-icon",
                              [
                                _c("v-icon", [
                                  _vm._v("mdi-" + _vm._s(adminLink.icon))
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(adminLink.title) +
                                      "\n                        "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { flat: "", app: "" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c("v-toolbar-title", { staticClass: "font-weight-black" }, [
            _vm._v("ODV")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { text: "" }, on: { click: _vm.logout } },
            [
              _c("v-icon", { attrs: { left: "" } }, [
                _vm._v("mdi-logout-variant")
              ]),
              _vm._v("\n            Odhlásit se\n        ")
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _vm.user.role == "admin"
            ? _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "4", md: "4" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [_vm._v("Návštěvnost")]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c("v-sparkline", {
                                    attrs: {
                                      value: _vm.value,
                                      smooth: _vm.radius || false,
                                      padding: _vm.padding,
                                      "line-width": _vm.width,
                                      fill: _vm.fill,
                                      type: _vm.type,
                                      "auto-line-width": _vm.autoLineWidth,
                                      "auto-draw": ""
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "4", md: "4" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [_vm._v("Počet přednášek")]),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _c(
                                  "h2",
                                  {
                                    staticClass:
                                      "text-center text-black-50 mt-3",
                                    staticStyle: { "font-size": "50px" }
                                  },
                                  [_vm._v(_vm._s(_vm.countLectures))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass: "text-center text-muted mt-3"
                                  },
                                  [_vm._v("Přednášky")]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "4", md: "4" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [_vm._v("Počet partnerů")]),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _c(
                                  "h2",
                                  {
                                    staticClass:
                                      "text-center text-black-50 mt-3",
                                    staticStyle: { "font-size": "50px" }
                                  },
                                  [_vm._v(_vm._s(_vm.countPartners))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass: "text-center text-muted mt-3"
                                  },
                                  [_vm._v("Partnerů")]
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _vm._v("Nejoblíbenější přednášky")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c("v-data-table", {
                                    staticClass: "elevation-1",
                                    attrs: {
                                      headers: _vm.headers,
                                      items: _vm.bestLectures,
                                      "items-per-page": 5,
                                      "no-data-text": "Zatím tu nic není"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _c(
                "v-container",
                [
                  _c("h2", { staticClass: "mt-5 mb-5" }, [
                    _vm._v("Tvé zapsané přednášky")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { col: "12", lg: "12", md: "12" } },
                        [
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            attrs: {
                              headers: _vm.studentHeaders,
                              items: _vm.lectures,
                              "items-per-page": 5,
                              "no-data-text": "Zatím tu nic není"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "item.actions",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "a",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.leftLecture(item.id)
                                          }
                                        }
                                      },
                                      [_vm._v("Odhlásit se")]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Documents.vue?vue&type=template&id=77c21b29&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Documents.vue?vue&type=template&id=77c21b29& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                      _vm._v("Dokumenty")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-5 mt-5 mb-5",
                          staticStyle: { float: "right" },
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.dialog = true
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Nahrát dokument\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px" },
                          model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v("Nahrát nový dokument")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Název dokumentu",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.file.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.file,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "file.name"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-file-input", {
                                                attrs: {
                                                  label: "Dokument (pdf, docx)",
                                                  "show-size": "",
                                                  required: ""
                                                },
                                                on: { change: _vm.getBase64 }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = false
                                        }
                                      }
                                    },
                                    [_vm._v("Zavřít")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: { click: _vm.addDocument }
                                    },
                                    [_vm._v("Uložit")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.files,
                  "no-data-text": "Zatím tu nic není"
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-icon",
                          {
                            attrs: { small: "" },
                            on: { click: function($event) {} }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-delete\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/EditProfile.vue?vue&type=template&id=e83d6220&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/EditProfile.vue?vue&type=template&id=e83d6220& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _vm.loading
                ? _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("v-progress-circular", {
                        staticClass: "edit-progress",
                        attrs: { size: 50, color: "primary", indeterminate: "" }
                      })
                    ],
                    1
                  )
                : _c(
                    "v-row",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "4" } },
                        [
                          _c(
                            "v-layout",
                            { attrs: { column: "", "align-center": "" } },
                            [
                              _c("v-avatar", { attrs: { size: "200" } }, [
                                _c("img", {
                                  attrs: { src: _vm.profile, alt: "" }
                                })
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "mt-4 name" }, [
                                _vm._v(
                                  _vm._s(_vm.firstName + " " + _vm.lastName)
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "role" }, [
                                _vm._v(_vm._s(_vm.user.role))
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "8" } },
                        [
                          _c(
                            "v-form",
                            [
                              _c("h3", [_vm._v("Upravení profilu")]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { lg: "5" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Jméno" },
                                        model: {
                                          value: _vm.firstName,
                                          callback: function($$v) {
                                            _vm.firstName = $$v
                                          },
                                          expression: "firstName"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { lg: "5" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Přijmení" },
                                        model: {
                                          value: _vm.lastName,
                                          callback: function($$v) {
                                            _vm.lastName = $$v
                                          },
                                          expression: "lastName"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { lg: "5" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Email" },
                                        model: {
                                          value: _vm.email,
                                          callback: function($$v) {
                                            _vm.email = $$v
                                          },
                                          expression: "email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { lg: "5" } },
                                    [
                                      _c("v-file-input", {
                                        attrs: {
                                          accept: "image/*",
                                          label: "Nahrát profilový obrázek"
                                        },
                                        on: { change: _vm.getBase64 }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("h3", [_vm._v("Změna hesla")]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { lg: "5" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Aktuální heslo" },
                                        model: {
                                          value: _vm.pass,
                                          callback: function($$v) {
                                            _vm.pass = $$v
                                          },
                                          expression: "pass"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { lg: "5" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: { label: "Nové heslo" },
                                        model: {
                                          value: _vm.newPass,
                                          callback: function($$v) {
                                            _vm.newPass = $$v
                                          },
                                          expression: "newPass"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { depressed: "", width: "200" },
                                  on: { click: _vm.editProfile }
                                },
                                [_vm._v("Uložit")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                      _vm._v("Realizační tým ODV")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-5 mt-5 mb-5",
                          staticStyle: { float: "right" },
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.dialog = true
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Přidat novou otázku\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px" },
                          model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v("Přidat novou otázku")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Otázka",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.faq.question,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.faq,
                                                      "question",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "faq.question"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-textarea", {
                                                attrs: {
                                                  "auto-grow": "",
                                                  label: "Odpověď",
                                                  rows: "1"
                                                },
                                                model: {
                                                  value: _vm.faq.answer,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.faq,
                                                      "answer",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "faq.answer"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = false
                                        }
                                      }
                                    },
                                    [_vm._v("Zavřít")]
                                  ),
                                  _vm._v(" "),
                                  _vm.faq.action === "add"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.addFaq }
                                        },
                                        [_vm._v("Uložit")]
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.saveEditFaq(_vm.id)
                                            }
                                          }
                                        },
                                        [_vm._v("Uložit nové údaje")]
                                      )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.faqs,
                  "no-data-text": "Zatím tu nic není"
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.editFaq(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-pencil\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.deleteFaq(item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-delete\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Partners.vue?vue&type=template&id=af5e5e6c&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Partners.vue?vue&type=template&id=af5e5e6c& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                      _vm._v("Partneři ODV")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-5 mt-5 mb-5",
                          staticStyle: { float: "right" },
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.dialog = true
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Přidat partnera\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px" },
                          model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v("Přidat nového partnera")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Název partnera",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.partner.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.partner,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "partner.name"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label:
                                                    "Webový odkaz na stránky partnera",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.partner.url,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.partner,
                                                      "url",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "partner.url"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-file-input", {
                                                attrs: {
                                                  label:
                                                    "Logo partnera (png, jpg, jpeg)",
                                                  "show-size": "",
                                                  required: ""
                                                },
                                                on: { change: _vm.getBase64 }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = false
                                        }
                                      }
                                    },
                                    [_vm._v("Zavřít")]
                                  ),
                                  _vm._v(" "),
                                  _vm.partner.action === "add"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.addPartner }
                                        },
                                        [_vm._v("Uložit")]
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.saveEditPartner(_vm.id)
                                            }
                                          }
                                        },
                                        [_vm._v("Uložit nové údaje")]
                                      )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.partners,
                  "no-data-text": "Zatím tu nic není"
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.editPartner(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-pencil\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.deletePartner(item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-delete\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Reference.vue?vue&type=template&id=77a1863c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Reference.vue?vue&type=template&id=77a1863c& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                      _vm._v("Reference od partnerů")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-5 mt-5 mb-5",
                          staticStyle: { float: "right" },
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.dialog = true
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Přidat novou referenci\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px" },
                          model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v("Přidat novou referenci")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-textarea", {
                                                attrs: {
                                                  "auto-grow": "",
                                                  label: "Reference",
                                                  rows: "1"
                                                },
                                                model: {
                                                  value: _vm.reference.text,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.reference,
                                                      "text",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "reference.text"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Jméno autora",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.reference.author,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.reference,
                                                      "author",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "reference.author"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Pozice autora",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.reference.position,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.reference,
                                                      "position",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "reference.position"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label:
                                                    "Společnost ve které autor pracuje",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.reference.company,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.reference,
                                                      "company",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "reference.company"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = false
                                        }
                                      }
                                    },
                                    [_vm._v("Zavřít")]
                                  ),
                                  _vm._v(" "),
                                  _vm.reference.action === "add"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.addReference }
                                        },
                                        [_vm._v("Uložit")]
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.saveEditReference(
                                                _vm.id
                                              )
                                            }
                                          }
                                        },
                                        [_vm._v("Uložit nové údaje")]
                                      )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.references,
                  "no-data-text": "Zatím tu nic není"
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.editReference(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-pencil\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.deleteReference(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-delete\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowLectures.vue?vue&type=template&id=44173c1e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/ShowLectures.vue?vue&type=template&id=44173c1e& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                      _vm._v("Přednášky na ODV")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-5 mt-5 mb-5",
                          staticStyle: { float: "right" },
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.dialog = true
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Přidat novou přednášku\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px" },
                          model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v("Přidat novou přednášku")
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Název přednášky",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.lecture.title,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.lecture,
                                                      "title",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "lecture.title"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Název firmy",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.lecture.company,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.lecture,
                                                      "company",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "lecture.company"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Čas přednášky",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.lecture.time,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.lecture,
                                                      "time",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "lecture.time"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Učebna",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.lecture.place,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.lecture,
                                                      "place",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "lecture.place"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label:
                                                    "Maximální počet diváků",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.lecture.viewers,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.lecture,
                                                      "viewers",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "lecture.viewers"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = false
                                        }
                                      }
                                    },
                                    [_vm._v("Zavřít")]
                                  ),
                                  _vm._v(" "),
                                  _vm.lecture.action === "add"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.addLecture }
                                        },
                                        [_vm._v("Uložit")]
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.saveEditLecture(_vm.id)
                                            }
                                          }
                                        },
                                        [_vm._v("Uložit nové údaje")]
                                      )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.lectures,
                  "no-data-text": "Zatím tu nic není"
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.editLecture(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-pencil\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.deleteLecture(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-delete\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Team.vue?vue&type=template&id=4af0c8fc&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Team.vue?vue&type=template&id=4af0c8fc& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [
                    _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                      _vm._v("Realizační tým ODV")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-5 mt-5 mb-5",
                          staticStyle: { float: "right" },
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.dialog = true
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Přidat člena realizačního týmu\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px" },
                          model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                              _vm.dialog = $$v
                            },
                            expression: "dialog"
                          }
                        },
                        [
                          _c(
                            "v-card",
                            [
                              _c("v-card-title", [
                                _c("span", { staticClass: "headline" }, [
                                  _vm._v(
                                    "Přidat nového člena realizačního týmu"
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c(
                                    "v-container",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Titul",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.member.degree,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.member,
                                                      "degree",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "member.degree"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Jméno",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.member.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.member,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "member.name"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Role",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.member.role,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.member,
                                                      "role",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "member.role"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Email",
                                                  required: ""
                                                },
                                                model: {
                                                  value: _vm.member.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.member,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "member.email"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12" } },
                                            [
                                              _c("v-file-input", {
                                                attrs: {
                                                  label:
                                                    "Fotka člena (png, jpg, jpeg)",
                                                  "show-size": "",
                                                  required: ""
                                                },
                                                on: { change: _vm.getBase64 }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                [
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "blue darken-1",
                                        text: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog = false
                                        }
                                      }
                                    },
                                    [_vm._v("Zavřít")]
                                  ),
                                  _vm._v(" "),
                                  _vm.member.action === "add"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: { click: _vm.addMember }
                                        },
                                        [_vm._v("Uložit")]
                                      )
                                    : _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.saveEditMember(_vm.id)
                                            }
                                          }
                                        },
                                        [_vm._v("Uložit nové údaje")]
                                      )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.members,
                  "no-data-text": "Zatím tu nic není"
                },
                scopedSlots: _vm._u([
                  {
                    key: "item.avatar",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c("div", { staticClass: "p-2" }, [
                          _c("img", {
                            staticClass: "member-avatar",
                            attrs: {
                              src: item.avatar,
                              alt: item.name,
                              width: "35px"
                            }
                          })
                        ])
                      ]
                    }
                  },
                  {
                    key: "item.actions",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.editMember(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-pencil\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                return _vm.deleteMember(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                        mdi-delete\n                    "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c(
        "v-content",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { wrap: "" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "12" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-title",
                            [
                              _vm._v(
                                "\n                            Zaregistrovaný uživatelé\n                            "
                              ),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "append-icon": "mdi-magnify",
                                  label: "Search",
                                  "single-line": "",
                                  "hide-details": ""
                                },
                                model: {
                                  value: _vm.search,
                                  callback: function($$v) {
                                    _vm.search = $$v
                                  },
                                  expression: "search"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-data-table", {
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.users,
                              search: _vm.search,
                              loading: _vm.loading,
                              "loading-text": "Načítání... Prosím počkejte"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b& */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6dde423b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=22ef35f6& */ "./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=22ef35f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/Documents.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Documents.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_vue_vue_type_template_id_77c21b29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documents.vue?vue&type=template&id=77c21b29& */ "./resources/js/views/admin/Documents.vue?vue&type=template&id=77c21b29&");
/* harmony import */ var _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Documents.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Documents_vue_vue_type_template_id_77c21b29___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Documents_vue_vue_type_template_id_77c21b29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Documents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Documents.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Documents.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Documents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Documents.vue?vue&type=template&id=77c21b29&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/Documents.vue?vue&type=template&id=77c21b29& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_77c21b29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Documents.vue?vue&type=template&id=77c21b29& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Documents.vue?vue&type=template&id=77c21b29&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_77c21b29___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_vue_vue_type_template_id_77c21b29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/EditProfile.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/admin/EditProfile.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProfile_vue_vue_type_template_id_e83d6220___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=template&id=e83d6220& */ "./resources/js/views/admin/EditProfile.vue?vue&type=template&id=e83d6220&");
/* harmony import */ var _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfile.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProfile_vue_vue_type_template_id_e83d6220___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProfile_vue_vue_type_template_id_e83d6220___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/EditProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/EditProfile.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/EditProfile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/EditProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/EditProfile.vue?vue&type=template&id=e83d6220&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/EditProfile.vue?vue&type=template&id=e83d6220& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_e83d6220___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProfile.vue?vue&type=template&id=e83d6220& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/EditProfile.vue?vue&type=template&id=e83d6220&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_e83d6220___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfile_vue_vue_type_template_id_e83d6220___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/Faq.vue":
/*!******************************************!*\
  !*** ./resources/js/views/admin/Faq.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Faq.vue?vue&type=template&id=6518e972& */ "./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972&");
/* harmony import */ var _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Faq.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Faq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Faq.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/admin/Faq.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Faq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Faq.vue?vue&type=template&id=6518e972& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Faq.vue?vue&type=template&id=6518e972&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Faq_vue_vue_type_template_id_6518e972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/Partners.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/Partners.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Partners_vue_vue_type_template_id_af5e5e6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partners.vue?vue&type=template&id=af5e5e6c& */ "./resources/js/views/admin/Partners.vue?vue&type=template&id=af5e5e6c&");
/* harmony import */ var _Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partners.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Partners.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Partners_vue_vue_type_template_id_af5e5e6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Partners_vue_vue_type_template_id_af5e5e6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Partners.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Partners.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/Partners.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Partners.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Partners.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Partners.vue?vue&type=template&id=af5e5e6c&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/Partners.vue?vue&type=template&id=af5e5e6c& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_af5e5e6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Partners.vue?vue&type=template&id=af5e5e6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Partners.vue?vue&type=template&id=af5e5e6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_af5e5e6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Partners_vue_vue_type_template_id_af5e5e6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/Reference.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Reference.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reference_vue_vue_type_template_id_77a1863c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reference.vue?vue&type=template&id=77a1863c& */ "./resources/js/views/admin/Reference.vue?vue&type=template&id=77a1863c&");
/* harmony import */ var _Reference_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reference.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Reference.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reference_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reference_vue_vue_type_template_id_77a1863c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reference_vue_vue_type_template_id_77a1863c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Reference.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Reference.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Reference.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reference_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reference.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Reference.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reference_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Reference.vue?vue&type=template&id=77a1863c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/Reference.vue?vue&type=template&id=77a1863c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reference_vue_vue_type_template_id_77a1863c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Reference.vue?vue&type=template&id=77a1863c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Reference.vue?vue&type=template&id=77a1863c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reference_vue_vue_type_template_id_77a1863c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reference_vue_vue_type_template_id_77a1863c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/ShowLectures.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/admin/ShowLectures.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowLectures_vue_vue_type_template_id_44173c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowLectures.vue?vue&type=template&id=44173c1e& */ "./resources/js/views/admin/ShowLectures.vue?vue&type=template&id=44173c1e&");
/* harmony import */ var _ShowLectures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowLectures.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/ShowLectures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowLectures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowLectures_vue_vue_type_template_id_44173c1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowLectures_vue_vue_type_template_id_44173c1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/ShowLectures.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/ShowLectures.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/ShowLectures.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowLectures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowLectures.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowLectures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowLectures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/ShowLectures.vue?vue&type=template&id=44173c1e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/ShowLectures.vue?vue&type=template&id=44173c1e& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowLectures_vue_vue_type_template_id_44173c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowLectures.vue?vue&type=template&id=44173c1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/ShowLectures.vue?vue&type=template&id=44173c1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowLectures_vue_vue_type_template_id_44173c1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowLectures_vue_vue_type_template_id_44173c1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/Team.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/admin/Team.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Team_vue_vue_type_template_id_4af0c8fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team.vue?vue&type=template&id=4af0c8fc& */ "./resources/js/views/admin/Team.vue?vue&type=template&id=4af0c8fc&");
/* harmony import */ var _Team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Team.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Team.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Team_vue_vue_type_template_id_4af0c8fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Team_vue_vue_type_template_id_4af0c8fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Team.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Team.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/admin/Team.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Team.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Team.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Team.vue?vue&type=template&id=4af0c8fc&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/Team.vue?vue&type=template&id=4af0c8fc& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_4af0c8fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Team.vue?vue&type=template&id=4af0c8fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Team.vue?vue&type=template&id=4af0c8fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_4af0c8fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Team_vue_vue_type_template_id_4af0c8fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/Users.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Users.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=358a02f9& */ "./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=358a02f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);