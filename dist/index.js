'use strict';


Object.defineProperty(exports, "__esModule", {

    value: true

});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();


var _react = require('react');


var _react2 = _interopRequireDefault(_react);


var _propTypes = require('prop-types');


var _propTypes2 = _interopRequireDefault(_propTypes);


require('./styles.css');


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }


function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var Numpad = function (_React$Component) {

    _inherits(Numpad, _React$Component);


    function Numpad() {

        _classCallCheck(this, Numpad);


        return _possibleConstructorReturn(this, (Numpad.__proto__ || Object.getPrototypeOf(Numpad)).apply(this, arguments));

    }


    _createClass(Numpad, [{

        key: 'render',

        value: function render() {

            var _this2 = this;


            return _react2.default.createElement(

                _react2.default.Fragment,

                null,

                _react2.default.createElement(

                    'div',

                    { className: 'numpad' },

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('7');

                            } },

                        '7'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('8');

                            } },

                        '8'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('9');

                            } },

                        '9'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('4');

                            } },

                        '4'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('5');

                            } },

                        '5'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('6');

                            } },

                        '6'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('1');

                            } },

                        '1'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('2');

                            } },

                        '2'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('3');

                            } },

                        '3'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('0');

                            } },

                        '0'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('.');

                            } },

                        '.'

                    ),

                    _react2.default.createElement(

                        'span',

                        { onClick: function onClick() {

                                return _this2.props.onKeyPress('<');

                            } },

                        '<'

                    )

                )

            );

        }

    }]);


    return Numpad;

}(_react2.default.Component);


Numpad.propTypes = {

    onKeyPress: _propTypes2.default.func.isRequired

};


exports.default = Numpad;
