'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VK = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VK = exports.VK = function (_React$Component) {
  _inherits(VK, _React$Component);

  function VK() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VK);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VK.__proto__ || Object.getPrototypeOf(VK)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      vk: null
    }, _this._mounted = true, _this.fetchScript = function (url) {
      return new Promise(function (resolve, reject) {
        var el = document.createElement('script');
        el.onload = resolve;
        el.onerror = reject;
        el.type = 'text/javascript';
        el.src = url;
        el.async = true;
        el.id = 'vk-openapi';
        document.getElementsByTagName('head')[0].appendChild(el);
      });
    }, _this.setPropsToChildren = function (children) {
      return _react2.default.Children.map(children, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return child;
        }

        var props = _extends({}, child.props, { vk: _this.state.vk });

        if (child.props.children) {
          props.children = _this.setPropsToChildren(child.props.children);
        }

        return _react2.default.cloneElement(child, props);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VK, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var onApiAvailable = this.props.onApiAvailable;

      if (document.getElementById('vk-openapi')) {
        this._mounted && this.setState({ vk: window.VK });
      }

      if (!!(typeof window !== 'undefined' && window.document && window.document.createElement)) {
        this.init().then(function (api) {
          onApiAvailable(api);
          _this2._mounted && _this2.setState({ vk: api });
        }).catch(function (err) {
          throw new Error(err);
        });
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this3 = this;

      if (this.loadingPromise) {
        return this.loadingPromise;
      }

      this.loadingPromise = new Promise(function (resolve, reject) {
        var _props = _this3.props,
            apiId = _props.apiId,
            options = _props.options;


        if (!apiId) {
          throw new Error('You need to set apiId');
        }

        window.vkAsyncInit = function () {
          window.VK.init({
            apiId: apiId
          });

          resolve(window.VK);
        };

        if (document.getElementById('vk-openapi')) {
          return;
        }

        _this3.fetchScript('https://vk.com/js/api/openapi.js?' + options.version).catch(reject);
      });

      return this.loadingPromise;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var vk = this.state.vk;

      var childrenWithProps = this.setPropsToChildren(this.props.children);

      return vk ? _react2.default.createElement(
        'div',
        null,
        childrenWithProps
      ) : null;
    }
  }]);

  return VK;
}(_react2.default.Component);

VK.defaultProps = {
  options: {
    version: 152
  },
  onApiAvailable: function onApiAvailable() {}
};