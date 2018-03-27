'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Group = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = exports.Group = function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'mount',
    value: function mount() {
      var _props = this.props,
          vk = _props.vk,
          elementId = _props.elementId,
          options = _props.options,
          groupId = _props.groupId,
          onJoin = _props.onJoin,
          onLeave = _props.onLeave;

      vk.Widgets.Group(elementId, options, groupId);
      vk.Observer.subscribe('widgets.groups.joined', onJoin);
      vk.Observer.subscribe('widgets.groups.leaved', onLeave);
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

      vk.Observer.unsubscribe('widgets.groups.joined');
      vk.Observer.unsubscribe('widgets.groups.leaved');
    }
  }, {
    key: 'render',
    value: function render() {
      var elementId = this.props.elementId;

      return _react2.default.createElement('div', { id: elementId });
    }
  }]);

  return Group;
}(_react2.default.Component);

Group.defaultProps = {
  elementId: 'vk_groups',
  options: {
    width: 'auto',
    mode: 3,
    no_cover: 1,
    wide: 1
  },
  onJoin: function onJoin() {},
  onLeave: function onLeave() {}
};