'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityMessages = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommunityMessages = exports.CommunityMessages = function (_React$Component) {
  _inherits(CommunityMessages, _React$Component);

  function CommunityMessages() {
    _classCallCheck(this, CommunityMessages);

    return _possibleConstructorReturn(this, (CommunityMessages.__proto__ || Object.getPrototypeOf(CommunityMessages)).apply(this, arguments));
  }

  _createClass(CommunityMessages, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          vk = _props.vk,
          elementId = _props.elementId,
          groupId = _props.groupId,
          options = _props.options,
          onMount = _props.onMount;

      var widget = vk.Widgets.CommunityMessages(elementId, groupId, options);
      onMount(widget, elementId);
    }
  }, {
    key: 'render',
    value: function render() {
      var elementId = this.props.elementId;

      return _react2.default.createElement('div', { id: elementId });
    }
  }]);

  return CommunityMessages;
}(_react2.default.Component);

CommunityMessages.defaultProps = {
  elementId: 'vk_community_messages',
  options: {
    onCanNotWrite: function onCanNotWrite(reason) {},
    welcomeScreen: 1,
    expandTimeout: 0,
    expanded: 0,
    widgetPosition: 'right',
    buttonType: 'blue_circle',
    disableButtonTooltip: 0
  },
  onMount: function onMount() {}
};