'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Like = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Like = exports.Like = function (_React$Component) {
  _inherits(Like, _React$Component);

  function Like() {
    _classCallCheck(this, Like);

    return _possibleConstructorReturn(this, (Like.__proto__ || Object.getPrototypeOf(Like)).apply(this, arguments));
  }

  _createClass(Like, [{
    key: 'mount',
    value: function mount() {
      var _props = this.props,
          vk = _props.vk,
          elementId = _props.elementId,
          options = _props.options,
          pageId = _props.pageId,
          onLike = _props.onLike,
          onUnlike = _props.onUnlike,
          onShare = _props.onShare,
          onUnshare = _props.onUnshare;

      vk.Widgets.Like(elementId, options, pageId);
      vk.Observer.subscribe('widgets.like.liked', function (quantity) {
        return onLike(quantity);
      });
      vk.Observer.subscribe('widgets.like.unliked', function (quantity) {
        return onUnlike(quantity);
      });
      vk.Observer.subscribe('widgets.like.shared', function (quantity) {
        return onShare(quantity);
      });
      vk.Observer.subscribe('widgets.like.unshared', function (quantity) {
        return onUnshare(quantity);
      });
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

      vk.Observer.unsubscribe('widgets.like.liked');
      vk.Observer.unsubscribe('widgets.like.unliked');
      vk.Observer.unsubscribe('widgets.like.shared');
      vk.Observer.unsubscribe('widgets.like.unshared');
    }
  }, {
    key: 'render',
    value: function render() {
      var elementId = this.props.elementId;

      return _react2.default.createElement('div', { id: elementId });
    }
  }]);

  return Like;
}(_react2.default.Component);

Like.defaultProps = {
  elementId: 'vk_like',
  options: {
    type: 'full',
    width: 350,
    height: 22,
    verb: 0
  },
  onLike: function onLike() {},
  onUnlike: function onUnlike() {},
  onShare: function onShare() {},
  onUnshare: function onUnshare() {}
};