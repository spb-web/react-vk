'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = exports.Comments = function (_React$Component) {
  _inherits(Comments, _React$Component);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: 'mount',
    value: function mount() {
      var _props = this.props,
          vk = _props.vk,
          elementId = _props.elementId,
          options = _props.options,
          pageId = _props.pageId,
          onNewComment = _props.onNewComment,
          onDeleteComment = _props.onDeleteComment;

      vk.Widgets.Comments(elementId, options, pageId);
      vk.Observer.subscribe('widgets.comments.new_comment', function (num, last_comment, date, sign) {
        return onNewComment(num, last_comment, date, sign);
      });
      vk.Observer.subscribe('widgets.comments.delete_comment', onDeleteComment);
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

      vk.Observer.unsubscribe('widgets.comments.new_comment');
      vk.Observer.unsubscribe('widgets.comments.delete_comment');
    }
  }, {
    key: 'render',
    value: function render() {
      var elementId = this.props.elementId;

      return _react2.default.createElement('div', { id: elementId });
    }
  }]);

  return Comments;
}(_react2.default.Component);

Comments.defaultProps = {
  elementId: 'vk_comments',
  options: {
    height: 0,
    limit: 10,
    attach: '*',
    autoPublish: 0,
    mini: 'auto',
    norealtime: 0
  },
  onNewComment: function onNewComment() {},
  onDeleteComment: function onDeleteComment() {}
};