(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LectureDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LectureDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      headers: [{
        text: 'ID žáka',
        align: 'start',
        sortable: false,
        value: 'id'
      }, {
        text: 'Jméno žáka',
        value: 'name'
      }, {
        text: 'Příjmení žáka',
        value: 'lastname'
      }]
    };
  },
  props: ["open", "item", "loggedUsers"],
  methods: {
    close: function close() {
      this.$emit("close", false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["open", "item"],
  methods: {
    close: function close() {
      this.$emit("close", false);
    },
    remove: function remove() {
      this.$emit("removeItem", this.item);
    }
  }
});

/***/ }),

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
      links: [{
        id: 0,
        icon: "uil uil-tachometer-fast-alt",
        title: "Dashboard",
        route: "/dashboard",
        role: ""
      }],
      adminLinks: [{
        id: 1,
        icon: "uil uil-users-alt",
        title: "Přehled studentů",
        route: "/users",
        role: "admin"
      }, {
        id: 3,
        icon: "uil uil-graduation-cap",
        title: "Přednášky",
        route: "/show-lectures",
        role: "admin"
      }, {
        id: 4,
        icon: "uil uil-heart",
        title: "Partneři",
        route: "/partners",
        role: "admin"
      }, {
        id: 5,
        icon: "uil uil-chat-bubble-user",
        title: "Tým",
        route: "/team",
        role: "admin"
      }, {
        id: 6,
        icon: "uil uil-comment-alt-question",
        title: "FAQ",
        route: "/admin-faq",
        role: "admin"
      }, {
        id: 7,
        icon: "uil uil-star",
        title: "Reference",
        route: "/reference",
        role: "admin"
      }, {
        id: 8,
        icon: "uil uil-document-info",
        title: "Dokumenty",
        route: "/documents",
        role: "admin"
      }, {
        id: 9,
        icon: "uil uil-setting",
        title: "Nastavení",
        route: "/settings",
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      type: "trend",
      autoLineWidth: false,
      lectures: [],
      bestLectures: [],
      countLectures: 0,
      countPartners: 0,
      headers: [{
        text: "Název přednášky",
        align: "start",
        sortable: false,
        value: "title"
      }, {
        text: "Firma",
        sortable: false,
        value: "company"
      }, {
        text: "Čas",
        value: "time"
      }, {
        text: "Místo",
        sortable: false,
        value: "place"
      }],
      studentHeaders: [{
        text: "Název přednášky",
        align: "start",
        sortable: false,
        value: "title"
      }, {
        text: "Firma",
        sortable: false,
        value: "company"
      }, {
        text: "Čas",
        value: "time"
      }, {
        text: "Místo",
        sortable: false,
        value: "place"
      }, {
        text: "Akce",
        sortable: false,
        value: "actions"
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

      axios.post("./api/leftLecture/" + id, {}, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this3.getMyLectures();
        }
      });
    }
  },
  mounted: function mounted() {
    this.$store.dispatch("setAccessToken", localStorage.getItem("access_token"));

    if (localStorage.getItem("access_token")) {
      this.$store.dispatch("setUser");
    }

    this.getMyLectures();
    this.getStats();
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["getAccessToken"])), {}, {
    user: function user() {
      return this.$store.getters.getUser;
    },
    formatCount: function formatCount() {
      if (this.countLectures === 0 || this.countLectures >= 5) {
        return "Přednášek";
      } else {
        if (this.countLectures === 1) {
          return "Přednášku";
        } else {
          if (this.countLectures > 1 && this.countLectures < 5) {
            return "Přednášky";
          }
        }
      }
    },
    formatPartner: function formatPartner() {
      if (this.countPartners === 0 || this.countPartners >= 5) {
        return "Partnerů";
      } else {
        if (this.countPartners === 1) {
          return "Partner";
        } else {
          if (this.countPartners > 1 && this.countPartners < 5) {
            return "Partneři";
          }
        }
      }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        text: "Dokument",
        align: "start",
        sortable: false,
        value: "name"
      }, {
        text: "Cesta",
        align: "start",
        sortable: false,
        value: "path"
      }, {
        text: "Akce",
        value: "actions",
        sortable: false
      }],
      files: [],
      dialog: false,
      file: {
        name: "",
        base64: ""
      },
      id: 0,
      snackbar: false,
      text: "",
      color: "success"
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

      axios.get("./api/documents").then(function (resp) {
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
      })["catch"](function (error) {
        _this3.text = error.response.data.error;
        _this3.color = "error";
        _this3.snackbar = true;
      });
    },
    deleteDocument: function deleteDocument(item) {// TO-DO
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      firstName: "",
      lastName: "",
      email: "",
      pass: "",
      newPass: "",
      profile: _img_profile_pic_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      base64: "",
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

          _this2.$store.dispatch("reloadUser");
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
    this.$store.dispatch("setAccessToken", localStorage.getItem("access_token"));

    if (localStorage.getItem("access_token")) {
      this.$store.dispatch("setUser");
    }

    this.getMe();
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["getAccessToken"])), {}, {
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
/* harmony import */ var _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ModalComponent */ "./resources/js/components/ModalComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalComponent: _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: "Otázka",
        align: "start",
        sortable: false,
        value: "question"
      }, {
        text: "Odpověď",
        sortable: false,
        value: "answer"
      }, {
        text: "Akce",
        value: "actions",
        sortable: false
      }],
      dialog: false,
      faqs: [],
      faq: {
        question: "",
        answer: "",
        action: "add"
      },
      id: 0,
      formatFaqs: [],
      showModal: false,
      selectedItem: null
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

      axios.get("./api/formatedFaqs", this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this.faqs = resp.data.formatedFaqs;
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
          _this2.faq.question = "";
          _this2.faq.answer = "";
        }
      });
    },
    editFaq: function editFaq(item) {
      var _this3 = this;

      axios.get("./api/faq/" + item.id, this.getAuth()).then(function (resp) {
        _this3.faq.question = resp.data.faq.question;
        _this3.faq.answer = resp.data.faq.answer;
      });
      this.faq.action = "edit";
      this.id = item.id;
      this.dialog = true;
    },
    deleteFaq: function deleteFaq(item) {
      var _this4 = this;

      axios["delete"]("./api/deleteFaq/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this4.faqs.splice(_this4.faqs.indexOf(item), 1);
        }

        _this4.showModal = false;
      });
    },
    saveEditFaq: function saveEditFaq(id) {
      var _this5 = this;

      axios.post("./api/editFaq/" + id, {
        question: this.faq.question,
        answer: this.faq.answer
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this5.dialog = false;

          _this5.getFaq();

          _this5.faq.question = "";
          _this5.faq.answer = "";
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeDialog: function closeDialog() {
      this.dialog = false;
      this.faq.question = "";
      this.faq.answer = "";
    },
    closeModal: function closeModal(value) {
      this.showModal = value;
    },
    confirmDelete: function confirmDelete(item) {
      this.showModal = true;
      this.selectedItem = item;
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
/* harmony import */ var _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ModalComponent */ "./resources/js/components/ModalComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalComponent: _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: "Název",
        align: "start",
        sortable: false,
        value: "name"
      }, {
        text: "Webové stránky",
        align: "start",
        sortable: false,
        value: "url"
      }, {
        text: "Akce",
        value: "actions",
        sortable: false
      }],
      partners: [],
      dialog: false,
      partner: {
        name: "",
        url: "",
        base64: "",
        action: "add"
      },
      id: 0,
      showModal: false,
      selectedItem: null
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

      axios.get("./api/partners").then(function (resp) {
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
          _this3.partner.name = "";
          _this3.partner.url = "";
          _this3.partner.base64 = "";
        }
      });
    },
    deletePartner: function deletePartner(item) {
      var _this4 = this;

      axios["delete"]("./api/deletePartner/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this4.partners.splice(_this4.partners.indexOf(item), 1);
        }

        _this4.showModal = false;
      });
    },
    editPartner: function editPartner(item) {
      this.partner.name = item.name;
      this.partner.url = item.url;
      this.partner.action = "edit";
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

          _this5.partner.name = "";
          _this5.partner.url = "";
          _this5.partner.base64 = "";
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeModal: function closeModal(value) {
      this.showModal = value;
    },
    confirmDelete: function confirmDelete(item) {
      this.showModal = true;
      this.selectedItem = item;
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
/* harmony import */ var _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ModalComponent */ "./resources/js/components/ModalComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalComponent: _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: "Text",
        align: "start",
        sortable: false,
        value: "text"
      }, {
        text: "Autor",
        sortable: false,
        value: "author"
      }, {
        text: "Pozice",
        sortable: false,
        value: "position"
      }, {
        text: "Společnost",
        sortable: false,
        value: "company"
      }, {
        text: "Akce",
        value: "actions",
        sortable: false
      }],
      dialog: false,
      references: [],
      reference: {
        text: "",
        author: "",
        position: "",
        company: "",
        action: "add"
      },
      id: 0,
      showModal: false,
      selectedItem: null
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

      axios.get("./api/reference").then(function (resp) {
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
          _this2.reference.text = "";
          _this2.reference.author = "";
          _this2.reference.position = "";
          _this2.reference.company = "";
        }
      });
    },
    editReference: function editReference(item) {
      this.reference.text = item.text;
      this.reference.author = item.author;
      this.reference.position = item.position;
      this.reference.company = item.company;
      this.reference.action = "edit";
      this.id = item.id;
      this.dialog = true;
    },
    deleteReference: function deleteReference(item) {
      var _this3 = this;

      axios["delete"]("./api/deleteReference/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this3.references.splice(_this3.references.indexOf(item), 1);

          _this3.showModal = false;
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

          _this4.reference.text = "";
          _this4.reference.author = "";
          _this4.reference.position = "";
          _this4.reference.company = "";
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeModal: function closeModal(value) {
      this.showModal = value;
    },
    confirmDelete: function confirmDelete(item) {
      this.showModal = true;
      this.selectedItem = item;
    }
  },
  mounted: function mounted() {
    this.getReferences();
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Settings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Settings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Navbar: _components_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      snackbar: false,
      text: "",
      color: "success",
      general: {
        name: "",
        year: "",
        email: "",
        number: "",
        address: "",
        logo: ""
      },
      socialmedia: {
        facebook: "",
        instagram: "",
        twitter: ""
      },
      contactform: {
        email: "",
        showform: ""
      },
      base64: ""
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
    getSettings: function getSettings() {
      var _this = this;

      axios.get("./api/settings").then(function (resp) {
        if (resp.status === 200) {
          _this.general = resp.data.settings.general;
          _this.socialmedia = resp.data.settings.socialmedia;
          _this.contactform = resp.data.settings.contactform;
        }
      });
    },
    getBase64: function getBase64(file) {
      var _this2 = this;

      var base64 = "";
      var reader = new FileReader();

      reader.onloadend = function (f) {
        _this2.base64 = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    saveSettings: function saveSettings() {
      var _this3 = this;

      axios.post("./api/settings", {
        name: this.general.name,
        year: this.general.year,
        email: this.general.email,
        number: this.general.number,
        address: this.general.address,
        logo: this.base64,
        facebook: this.socialmedia.facebook,
        instagram: this.socialmedia.instagram,
        twitter: this.socialmedia.twitter,
        contact_email: this.contactform.email,
        show_contact: this.contactform.showform
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this3.text = "Nastavení bylo uloženo! 🙋‍♂️";
          _this3.color = "success";
          _this3.snackbar = true;

          _this3.$store.dispatch('setAccessToken', localStorage.getItem('access_token'));

          if (localStorage.getItem('access_token')) {
            _this3.$store.dispatch('setSettings');
          }
        }
      })["catch"](function (error) {
        console.log(error.response.status);
      });
    }
  },
  mounted: function mounted() {
    this.getSettings();
  }
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
/* harmony import */ var _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ModalComponent */ "./resources/js/components/ModalComponent.vue");
/* harmony import */ var _components_LectureDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/LectureDetail */ "./resources/js/components/LectureDetail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: _components_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalComponent: _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    LectureDetail: _components_LectureDetail__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      headers: [{
        text: "Název přednášky",
        align: "start",
        sortable: false,
        value: "title"
      }, {
        text: "Název firmy",
        value: "company",
        sortable: false
      }, {
        text: "Čas",
        value: "time",
        sortable: true
      }, {
        text: "Učebna",
        value: "place",
        sortable: false
      }, {
        text: "Maximální počet",
        value: "viewers",
        sortable: false
      }, {
        text: "Akce",
        value: "actions",
        sortable: false
      }],
      lectures: [],
      editedIndex: -1,
      lecture: {
        title: {
          value: "",
          error: ""
        },
        company: {
          value: "",
          error: ""
        },
        time: {
          value: "08:00",
          error: ""
        },
        place: {
          value: "",
          error: ""
        },
        viewers: {
          value: 0,
          error: ""
        },
        action: "add"
      },
      id: 0,
      showModal: false,
      detailDialog: false,
      detailLecture: {},
      loggedUsersLecture: {},
      selectedItem: null,
      titleRules: [function (v) {
        return !!v || "Titulek je povinný údaj";
      }],
      companyRules: [function (v) {
        return !!v || "Firma je povinný údaj";
      }],
      timeRules: [function (v) {
        return !!v || "Čas je povinný údaj";
      }],
      placeRules: [function (v) {
        return !!v || "Učebna je povinný údaj";
      }],
      viewerRules: [function (v) {
        return !!v || "Počet diváků je povinný údaj";
      }]
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

      axios.get("./api/getAllLectures", this.getAuth()).then(function (response) {
        _this.lectures = response.data.lectures;
      });
    },
    addLecture: function addLecture() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        axios.post("./api/createNewLecture", {
          title: this.lecture.title.value,
          company: this.lecture.company.value,
          time: this.lecture.time.value,
          place: this.lecture.place.value,
          viewers: this.lecture.viewers.value
        }, this.getAuth()).then(function (resp) {
          if (resp.status === 200) {
            _this2.lectures.push(resp.data.lecture);

            _this2.close();
          }
        })["catch"](function (error) {
          if (error.response.status = 422) {
            _this2.lecture.title.error = error.response.data.errors.title;
            _this2.lecture.company.error = error.response.data.errors.company;
            _this2.lecture.time.error = error.response.data.errors.time;
            _this2.lecture.place.error = error.response.data.errors.place;
            _this2.lecture.viewers.error = "Maximální počet diváků musí být kladné číslo!";
          }
        });
      }
    },
    deleteLecture: function deleteLecture(item) {
      var _this3 = this;

      axios["delete"]("./api/deleteLecture/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this3.lectures.splice(_this3.lectures.indexOf(item), 1);
        }

        _this3.showModal = false;
      });
    },
    editLecture: function editLecture(item) {
      this.lecture.title.value = item.title;
      this.lecture.company.value = item.company;
      this.lecture.time.value = item.time;
      this.lecture.place.value = item.place;
      this.lecture.viewers.value = item.viewers;
      this.lecture.action = "edit";
      this.id = item.id;
      this.dialog = true;
    },
    saveEditLecture: function saveEditLecture(id) {
      var _this4 = this;

      axios.post("./api/editLecture/" + id, {
        title: this.lecture.title.value,
        company: this.lecture.company.value,
        time: this.lecture.time.value,
        place: this.lecture.place.value,
        viewers: this.lecture.viewers.value
      }, this.getAuth()).then(function (resp) {
        if (resp.status === 200) {
          _this4.getAllLectures();

          _this4.close();
        }
      });
    },
    close: function close() {
      this.lecture = {
        title: {
          value: "",
          error: ""
        },
        company: {
          value: "",
          error: ""
        },
        time: {
          value: "08:00",
          error: ""
        },
        place: {
          value: "",
          error: ""
        },
        viewers: {
          value: 0,
          error: ""
        },
        action: "add"
      };
      this.dialog = false;
      this.$refs.form.reset();
    },
    closeModal: function closeModal(value) {
      this.showModal = value;
    },
    closeDetail: function closeDetail(value) {
      this.detailDialog = value;
    },
    confirmDelete: function confirmDelete(item) {
      this.showModal = true;
      this.selectedItem = item;
    },
    openLecture: function openLecture(item) {
      var _this5 = this;

      axios.get("./api/lecture/" + item.id, this.getAuth()).then(function (response) {
        if (response.status === 200) {
          _this5.detailLecture = response.data.lecture.lecture;
          _this5.loggedUsersLecture = response.data.lecture.loggedUsers;
          _this5.detailDialog = true;
        }
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
/* harmony import */ var _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ModalComponent */ "./resources/js/components/ModalComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalComponent: _components_ModalComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: "Avatar",
        align: "start",
        sortable: false,
        value: "avatar"
      }, {
        text: "Titul",
        sortable: false,
        value: "degree"
      }, {
        text: "Jméno",
        sortable: false,
        value: "name"
      }, {
        text: "Role",
        value: "role",
        sortable: false
      }, {
        text: "Email",
        value: "email",
        sortable: false
      }, {
        text: "Akce",
        value: "actions",
        sortable: false
      }],
      dialog: false,
      members: [],
      member: {
        degree: "",
        name: "",
        role: "",
        email: "",
        base64: "",
        action: "add"
      },
      id: 0,
      showModal: false,
      selectedItem: null
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

      axios.get("./api/team").then(function (resp) {
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
          _this3.member.degree = "";
          _this3.member.name = "";
          _this3.member.role = "";
          _this3.member.email = "";
          _this3.member.base64 = "";
        }
      });
    },
    deleteMember: function deleteMember(item) {
      var _this4 = this;

      axios["delete"]("./api/deleteMember/" + item.id, this.getAuth(), {}).then(function (resp) {
        if (resp.status === 200) {
          _this4.members.splice(_this4.members.indexOf(item), 1);
        }

        _this4.showModal = false;
      });
    },
    editMember: function editMember(item) {
      this.member.degree = item.degree;
      this.member.name = item.name;
      this.member.role = item.role;
      this.member.email = item.email;
      this.member.action = "edit";
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

          _this5.member.degree = "";
          _this5.member.name = "";
          _this5.member.role = "";
          _this5.member.email = "";
          _this5.member.base64 = "";
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeModal: function closeModal(value) {
      this.showModal = value;
    },
    confirmDelete: function confirmDelete(item) {
      this.showModal = true;
      this.selectedItem = item;
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

      axios.get("./api/user", this.getAuth()).then(function (resp) {
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
    this.$store.dispatch("setAccessToken", localStorage.getItem("access_token"));
    this.getAllUsers();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(["getAccessToken", "getRole"]))
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LectureDetail.vue?vue&type=template&id=757f4794&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LectureDetail.vue?vue&type=template&id=757f4794& ***!
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
    "v-row",
    { attrs: { justify: "center" } },
    [
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.open,
            callback: function($$v) {
              _vm.open = $$v
            },
            expression: "open"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    { attrs: { icon: "", dark: "" }, on: { click: _vm.close } },
                    [_c("i", { staticClass: "uil uil-times" })]
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v(_vm._s(_vm.item.title))]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c("v-toolbar-items")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c("h2", { staticClass: "mt-5" }, [
                    _vm._v("Základní informace o přednášce")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "4", md: "6", sm: "12", cols: "12" } },
                        [
                          _c("h3", [_vm._v("Název přednášky")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.item.title))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "4", md: "6", sm: "12", cols: "12" } },
                        [
                          _c("h3", [_vm._v("Název firmy")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.item.company))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "4", md: "6", sm: "12", cols: "12" } },
                        [
                          _c("h3", [_vm._v("Čas přednášky")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.item.time))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "4", md: "6", sm: "12", cols: "12" } },
                        [
                          _c("h3", [_vm._v("Místo přednášky")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.item.place))])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "4", md: "6", sm: "12", cols: "12" } },
                        [
                          _c("h3", [
                            _vm._v("Přihlášených diváků / max. počet diváků")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.item.loggedUsers) +
                                " / " +
                                _vm._s(_vm.item.viewers)
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-container",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { lg: "4", md: "4", sm: "12", cols: "12" } },
                        [
                          _c("h2", { staticClass: "mt-5" }, [_vm._v("Akce")]),
                          _vm._v(" "),
                          _c("ul", [
                            _c("li", [
                              _vm._v("Aktuálně nejsou žádné akce dostupné")
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { lg: "8", md: "8", sm: "12", cols: "12" } },
                        [
                          _c("h2", { staticClass: "mt-5 mb-5" }, [
                            _vm._v("Přihlášení žáci "),
                            _c("small", { staticClass: "grey--text" }, [
                              _vm._v(
                                "(Celkem " +
                                  _vm._s(_vm.loggedUsers.length) +
                                  " žáků)"
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.loggedUsers,
                              "items-per-page": 5
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-center" },
    [
      _c(
        "v-dialog",
        {
          attrs: { width: "500" },
          on: { "click:outside": _vm.close },
          model: {
            value: _vm.open,
            callback: function($$v) {
              _vm.open = $$v
            },
            expression: "open"
          }
        },
        [
          _c(
            "v-card",
            { attrs: { height: "450" } },
            [
              _c(
                "v-card-title",
                {
                  staticClass: "headline header-icon",
                  attrs: { "primary-title": "" }
                },
                [_c("i", { staticClass: "uil uil-exclamation-triangle" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "modal-content" }, [
                _c("p", [_vm._v("Skutečně chcete smazat tuto položku?")]),
                _vm._v(" "),
                _c("span", [_vm._v("Tato akce již nepůjde vrátit!")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-actions" }, [
                _c(
                  "div",
                  { staticClass: "buttons" },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-3 deleteButton",
                        attrs: { text: "" },
                        on: { click: _vm.remove }
                      },
                      [_vm._v("Ano, smazat")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      { attrs: { text: "" }, on: { click: _vm.close } },
                      [_vm._v("Ne, vrátit se")]
                    )
                  ],
                  1
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
  )
}
var staticRenderFns = []
render._withStripped = true



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
                        _c("v-list-item-icon", [_c("i", { class: link.icon })]),
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
                            _c("v-list-item-icon", [
                              _c("i", { class: adminLink.icon })
                            ]),
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
            _vm._v("\n            ODV\n        ")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-btn", { attrs: { text: "", to: "/" } }, [
            _c("i", { staticClass: "uil uil-home-alt" }),
            _vm._v("\n            Zpět\n        ")
          ]),
          _vm._v(" "),
          _c("v-btn", { attrs: { text: "" }, on: { click: _vm.logout } }, [
            _c("i", { staticClass: "uil uil-sign-out-alt" }),
            _vm._v("\n            Odhlásit se\n        ")
          ])
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
                            { staticClass: "dashboard-card" },
                            [
                              _c("v-card-title", [_vm._v("Návštěvnost")]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                [
                                  _c("v-sparkline", {
                                    staticClass: "graph",
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
                            { staticClass: "dashboard-card" },
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
                                  [_vm._v(_vm._s(_vm.formatCount))]
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
                            { staticClass: "dashboard-card" },
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
                                  [_vm._v(_vm._s(_vm.formatPartner))]
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
                        [_vm._v("\n\t\t\t\t\t\tNahrát dokument\n\t\t\t\t\t")]
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
                                                  label: "Dokument (pdf)",
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
                        _c("a", { staticClass: "action-icon" }, [
                          _c("i", { staticClass: "uil uil-trash-alt" })
                        ])
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
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: _vm.color },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n\t\t" + _vm._s(_vm.text) + "\n\t\t"),
          _c(
            "v-btn",
            {
              attrs: { color: "white", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n\t\t\tClose\n\t\t")]
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
                  _c(
                    "v-col",
                    [
                      _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                        _vm._v("Realizační tým ODV")
                      ]),
                      _vm._v(" "),
                      _vm.showModal
                        ? _c("ModalComponent", {
                            attrs: {
                              open: _vm.showModal,
                              item: _vm.selectedItem
                            },
                            on: {
                              close: _vm.closeModal,
                              removeItem: _vm.deleteFaq
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
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
                            "\n\t\t\t\t\t\tPřidat novou otázku\n\t\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px" },
                          on: { "click:outside": _vm.closeDialog },
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
                                      on: { click: _vm.closeDialog }
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
                          "a",
                          {
                            staticClass: "mr-2 action-icon",
                            on: {
                              click: function($event) {
                                return _vm.editFaq(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-pen" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "action-icon",
                            on: {
                              click: function($event) {
                                return _vm.confirmDelete(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-trash-alt" })]
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
                  _c(
                    "v-col",
                    [
                      _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                        _vm._v("Partneři ODV")
                      ]),
                      _vm._v(" "),
                      _vm.showModal
                        ? _c("ModalComponent", {
                            attrs: {
                              open: _vm.showModal,
                              item: _vm.selectedItem
                            },
                            on: {
                              close: _vm.closeModal,
                              removeItem: _vm.deletePartner
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
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
                        [_vm._v("\n\t\t\t\t\t\tPřidat partnera\n\t\t\t\t\t")]
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
                          "a",
                          {
                            staticClass: "mr-2 action-icon",
                            on: {
                              click: function($event) {
                                return _vm.editPartner(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-pen" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "action-icon",
                            on: {
                              click: function($event) {
                                return _vm.confirmDelete(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-trash-alt" })]
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
                  _c(
                    "v-col",
                    [
                      _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                        _vm._v("Reference od partnerů")
                      ]),
                      _vm._v(" "),
                      _vm.showModal
                        ? _c("ModalComponent", {
                            attrs: {
                              open: _vm.showModal,
                              item: _vm.selectedItem
                            },
                            on: {
                              close: _vm.closeModal,
                              removeItem: _vm.deleteReference
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
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
                            "\n\t\t\t\t\t\tPřidat novou referenci\n\t\t\t\t\t"
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
                          "a",
                          {
                            staticClass: "mr-2 action-icon",
                            on: {
                              click: function($event) {
                                return _vm.editReference(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-pen" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "action-icon",
                            on: {
                              click: function($event) {
                                return _vm.confirmDelete(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-trash-alt" })]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Settings.vue?vue&type=template&id=850f577c&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Settings.vue?vue&type=template&id=850f577c& ***!
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
              _c("h2", [
                _c("i", { staticClass: "uil uil-setting" }),
                _vm._v(" | Nastavení")
              ]),
              _vm._v(" "),
              _c(
                "v-form",
                { staticClass: "mr-5 ml-5" },
                [
                  _c(
                    "v-row",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6", lg: "6" } },
                        [
                          _c("h3", [_vm._v("Obecné")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Název stránky" },
                            model: {
                              value: _vm.general.name,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "name", $$v)
                              },
                              expression: "general.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "x. ročník ODV" },
                            model: {
                              value: _vm.general.year,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "year", $$v)
                              },
                              expression: "general.year"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Kontaktní e-mail" },
                            model: {
                              value: _vm.general.email,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "email", $$v)
                              },
                              expression: "general.email"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Kontaktní číslo" },
                            model: {
                              value: _vm.general.number,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "number", $$v)
                              },
                              expression: "general.number"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Adresa" },
                            model: {
                              value: _vm.general.address,
                              callback: function($$v) {
                                _vm.$set(_vm.general, "address", $$v)
                              },
                              expression: "general.address"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: { label: "Nahrát logo" },
                            on: { change: _vm.getBase64 }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6", lg: "6" } },
                        [
                          _c("h3", [_vm._v("Sociální sítě")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Facebook" },
                            model: {
                              value: _vm.socialmedia.facebook,
                              callback: function($$v) {
                                _vm.$set(_vm.socialmedia, "facebook", $$v)
                              },
                              expression: "socialmedia.facebook"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Instagram" },
                            model: {
                              value: _vm.socialmedia.instagram,
                              callback: function($$v) {
                                _vm.$set(_vm.socialmedia, "instagram", $$v)
                              },
                              expression: "socialmedia.instagram"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Twitter" },
                            model: {
                              value: _vm.socialmedia.twitter,
                              callback: function($$v) {
                                _vm.$set(_vm.socialmedia, "twitter", $$v)
                              },
                              expression: "socialmedia.twitter"
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
                        { attrs: { cols: "12", md: "6", lg: "6" } },
                        [
                          _c("h3", [_vm._v("Konktatní formulář")]),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { label: "Kontaktní e-mail adresa" },
                            model: {
                              value: _vm.contactform.email,
                              callback: function($$v) {
                                _vm.$set(_vm.contactform, "email", $$v)
                              },
                              expression: "contactform.email"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-switch", {
                            attrs: { label: "Kontaktní formulář" },
                            model: {
                              value: _vm.contactform.showform,
                              callback: function($$v) {
                                _vm.$set(_vm.contactform, "showform", $$v)
                              },
                              expression: "contactform.showform"
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
                      attrs: { depressed: "" },
                      on: { click: _vm.saveSettings }
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
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: _vm.color },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n\t\t" + _vm._s(_vm.text) + "\n\t\t"),
          _c(
            "v-btn",
            {
              attrs: { color: "pink", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n\t\t\tClose\n\t\t")]
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
                  _c(
                    "v-col",
                    [
                      _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                        _vm._v("Přednášky na ODV")
                      ]),
                      _vm._v(" "),
                      _vm.showModal
                        ? _c("ModalComponent", {
                            attrs: {
                              open: _vm.showModal,
                              item: _vm.selectedItem
                            },
                            on: {
                              close: _vm.closeModal,
                              removeItem: _vm.deleteLecture
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
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
                            "\n\t\t\t\t\t\t\tPřidat novou přednášku\n\t\t\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-dialog",
                        {
                          attrs: { "max-width": "600px" },
                          on: { "click:outside": _vm.close },
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
                                        "v-form",
                                        { ref: "form" },
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
                                                      required: "",
                                                      "error-messages":
                                                        _vm.lecture.title.error,
                                                      rules: _vm.titleRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.lecture.title.value,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.lecture.title,
                                                          "value",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "lecture.title.value"
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
                                                      required: "",
                                                      "error-messages":
                                                        _vm.lecture.company
                                                          .error,
                                                      rules: _vm.companyRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.lecture.company
                                                          .value,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.lecture.company,
                                                          "value",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "lecture.company.value"
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
                                                      required: "",
                                                      "error-messages":
                                                        _vm.lecture.time.error,
                                                      type: "time",
                                                      rules: _vm.timeRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.lecture.time.value,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.lecture.time,
                                                          "value",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "lecture.time.value"
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
                                                      required: "",
                                                      "error-messages":
                                                        _vm.lecture.place.error,
                                                      rules: _vm.placeRules
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.lecture.place.value,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.lecture.place,
                                                          "value",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "lecture.place.value"
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
                                                      required: "",
                                                      "error-messages":
                                                        _vm.lecture.viewers
                                                          .error,
                                                      rules: _vm.viewerRules,
                                                      type: "number"
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.lecture.viewers
                                                          .value,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.lecture.viewers,
                                                          "value",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "lecture.viewers.value"
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
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "blue darken-1",
                                                    text: ""
                                                  },
                                                  on: { click: _vm.close }
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
                                                      on: {
                                                        click: _vm.addLecture
                                                      }
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
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.saveEditLecture(
                                                            _vm.id
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Uložit nové údaje"
                                                      )
                                                    ]
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
                          "a",
                          {
                            staticClass: "mr-2 action-icon",
                            on: {
                              click: function($event) {
                                return _vm.openLecture(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-eye" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "mr-2 action-icon",
                            on: {
                              click: function($event) {
                                return _vm.editLecture(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-pen" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "action-icon",
                            on: {
                              click: function($event) {
                                return _vm.confirmDelete(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-trash-alt" })]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.detailDialog
            ? _c("LectureDetail", {
                attrs: {
                  open: _vm.detailDialog,
                  item: _vm.detailLecture,
                  loggedUsers: _vm.loggedUsersLecture
                },
                on: { close: _vm.closeDetail }
              })
            : _vm._e()
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
                  _c(
                    "v-col",
                    [
                      _c("h2", { staticClass: "mt-5 mb-5 ml-5" }, [
                        _vm._v("Realizační tým ODV")
                      ]),
                      _vm._v(" "),
                      _vm.showModal
                        ? _c("ModalComponent", {
                            attrs: {
                              open: _vm.showModal,
                              item: _vm.selectedItem
                            },
                            on: {
                              close: _vm.closeModal,
                              removeItem: _vm.deleteMember
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
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
                            "\n\t\t\t\t\t\tPřidat člena realizačního týmu\n\t\t\t\t\t"
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
                          "a",
                          {
                            staticClass: "mr-2 action-icon",
                            on: {
                              click: function($event) {
                                return _vm.editMember(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-pen" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "action-icon",
                            on: {
                              click: function($event) {
                                return _vm.confirmDelete(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "uil uil-trash-alt" })]
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
                                "\n\t\t\t\t\t\t\tZaregistrovaný uživatelé\n\t\t\t\t\t\t\t"
                              ),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "append-icon": "mdi-magnify",
                                  label: "Vyhledat",
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

/***/ "./resources/js/components/LectureDetail.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/LectureDetail.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LectureDetail_vue_vue_type_template_id_757f4794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LectureDetail.vue?vue&type=template&id=757f4794& */ "./resources/js/components/LectureDetail.vue?vue&type=template&id=757f4794&");
/* harmony import */ var _LectureDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LectureDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/LectureDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LectureDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LectureDetail_vue_vue_type_template_id_757f4794___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LectureDetail_vue_vue_type_template_id_757f4794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LectureDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LectureDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/LectureDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LectureDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LectureDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LectureDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LectureDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LectureDetail.vue?vue&type=template&id=757f4794&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/LectureDetail.vue?vue&type=template&id=757f4794& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LectureDetail_vue_vue_type_template_id_757f4794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LectureDetail.vue?vue&type=template&id=757f4794& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LectureDetail.vue?vue&type=template&id=757f4794&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LectureDetail_vue_vue_type_template_id_757f4794___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LectureDetail_vue_vue_type_template_id_757f4794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ModalComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=template&id=4b2d100a& */ "./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&");
/* harmony import */ var _ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalComponent.vue?vue&type=template&id=4b2d100a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ "./resources/js/views/admin/Settings.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/Settings.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_850f577c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=850f577c& */ "./resources/js/views/admin/Settings.vue?vue&type=template&id=850f577c&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_850f577c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_850f577c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Settings.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/Settings.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Settings.vue?vue&type=template&id=850f577c&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/Settings.vue?vue&type=template&id=850f577c& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_850f577c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=850f577c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Settings.vue?vue&type=template&id=850f577c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_850f577c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_850f577c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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