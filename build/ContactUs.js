'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactUs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs = exports.ContactUs = function (_React$Component) {
  _inherits(ContactUs, _React$Component);

  function ContactUs() {
    _classCallCheck(this, ContactUs);

    return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
  }

  _createClass(ContactUs, [{
    key: 'mount',
    value: function mount() {
      var _props = this.props,
          vk = _props.vk,
          elementId = _props.elementId,
          options = _props.options,
          ownerId = _props.ownerId;

      vk.Widgets.ContactUs(elementId, options, -ownerId);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mount();
    }
  }, {
    key: 'render',
    value: function render() {
      var elementId = this.props.elementId;

      return _react2.default.createElement('div', { id: elementId });
    }
  }]);

  return ContactUs;
}(_react2.default.Component);

ContactUs.defaultProps = {
  elementId: 'vk_contact_us',
  options: {
    height: 24
  }
};