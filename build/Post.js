'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = exports.Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Post);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Post, [{
    key: 'getElementId',
    value: function getElementId() {
      return 'vk_post_' + Date.now().toString(32) + Math.random().toString(32);
    }
  }, {
    key: 'mount',
    value: function mount() {
      var _props = this.props,
          vk = _props.vk,
          ownerId = _props.ownerId,
          postId = _props.postId,
          hash = _props.hash,
          options = _props.options,
          _props$elementId = _props.elementId,
          elementId = _props$elementId === undefined ? this.getElementId() : _props$elementId;


      this.setState({ elementId: elementId });

      vk.Widgets.Post(elementId, ownerId, postId, hash, options);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mount();
    }
  }, {
    key: 'render',
    value: function render() {
      var elementId = this.state.elementId;


      return _react2.default.createElement('div', { id: elementId });
    }
  }]);

  return Post;
}(_react2.default.Component);