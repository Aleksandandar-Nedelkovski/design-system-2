"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
require("./Alert.css");
var _alert = _interopRequireDefault(require("../alert.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Alert = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "alert"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _alert.default,
    alt: "Alert Icon",
    width: 30,
    height: 30
  }), /*#__PURE__*/_react.default.createElement("p", null, props.description));
};
var _default = Alert;
exports.default = _default;