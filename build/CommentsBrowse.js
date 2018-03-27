'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsBrowse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentsBrowse = exports.CommentsBrowse = function (_React$Component) {
  _inherits(CommentsBrowse, _React$Component);

  function CommentsBrowse() {
    _classCallCheck(this, CommentsBrowse);

    return _possibleConstructorReturn(this, (CommentsBrowse.__proto__ || Object.getPrototypeOf(CommentsBrowse)).apply(this, arguments));
  }

  _createClass(CommentsBrowse, [{
    key: 'mount',
    value: function mount() {
      var _props = this.props,
          vk = _props.vk,
          elementId = _props.elementId,
          options = _props.options;

      vk.Widgets.CommentsBrowse(elementId, options);
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

  return CommentsBrowse;
}(_react2.default.Component);

CommentsBrowse.defaultProps = {
  elementId: 'vk_comments_browse',
  options: {
    height: 0,
    limit: 10,
    mini: 'auto',
    norealtime: 0
  }
};