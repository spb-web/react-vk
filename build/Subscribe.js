'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscribe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subscribe = exports.Subscribe = function (_React$Component) {
  _inherits(Subscribe, _React$Component);

  function Subscribe() {
    _classCallCheck(this, Subscribe);

    return _possibleConstructorReturn(this, (Subscribe.__proto__ || Object.getPrototypeOf(Subscribe)).apply(this, arguments));
  }

  _createClass(Subscribe, [{
    key: 'mount',
    value: function mount() {
      var _props = this.props,
          vk = _props.vk,
          elementId = _props.elementId,
          options = _props.options,
          ownerId = _props.ownerId,
          onSubscribe = _props.onSubscribe,
          onUnsubscribe = _props.onUnsubscribe;

      vk.Widgets.Subscribe(elementId, options, ownerId);
      vk.Observer.subscribe('widgets.subscribed', onSubscribe);
      vk.Observer.subscribe('widgets.unsubscribed', onUnsubscribe);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mount();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var vk = this.props.vk;

      vk.Observer.unsubscribe('widgets.subscribed');
      vk.Observer.unsubscribe('widgets.unsubscribed');
    }
  }, {
    key: 'render',
    value: function render() {
      var elementId = this.props.elementId;

      return _react2.default.createElement('div', { id: elementId });
    }
  }]);

  return Subscribe;
}(_react2.default.Component);

Subscribe.defaultProps = {
  elementId: 'vk_subscribe',
  options: {
    mode: 0,
    soft: 0
  },
  onSubscribe: function onSubscribe() {},
  onUnsubscribe: function onUnsubscribe() {}
};