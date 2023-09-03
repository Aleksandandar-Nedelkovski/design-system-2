"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
require("./Card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = props => {
  const imageCard = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: props.alt,
    src: imageCard,
    width: 200
  }), /*#__PURE__*/_react.default.createElement("h3", null, props.title), /*#__PURE__*/_react.default.createElement("p", null, props.description));
};
var _default = Card;
exports.default = _default;