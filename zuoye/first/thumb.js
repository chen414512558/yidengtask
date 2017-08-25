'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParasiseButton = function () {
    function ParasiseButton(panelSelector, clickSelector) {
        _classCallCheck(this, ParasiseButton);

        this.thumbUpNum = 0;
        this.$panel = $(panelSelector);
        this.$clickDom = $(clickSelector);
    }

    _createClass(ParasiseButton, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var time1000Click = myFunc.timeClick(1000);
            var $addOneDom = this.renderAddOneDom();
            this.$panel.append($addOneDom);
            this.$clickDom.on('click', function () {
                return time1000Click(function () {
                    _this.thumbUpNum = myFunc.add(_this.thumbUpNum);
                    if (_this.thumbUpNum > 0) {
                        $addOneDom.addClass('addOneAnimation');
                        if (_this.thumbUpNum > 10) {
                            _this.resetNum();
                            _this.setIsVisbal(false);
                        }
                    } else if (_this.thumbUpNum == 0) {
                        _this.setIsVisbal(true);
                    }
                }, function () {
                    $addOneDom.removeClass('addOneAnimation');
                });
            });
        }
    }, {
        key: 'renderAddOneDom',
        value: function renderAddOneDom() {
            var addOneDom = $('<div class="addOneDom">+1</div>');
            return addOneDom;
        }
    }, {
        key: 'resetNum',
        value: function resetNum() {
            this.thumbUpNum = -1;
        }
    }, {
        key: 'setIsVisbal',
        value: function setIsVisbal(isVisbal) {
            if (isVisbal) {
                this.$panel.removeClass('disabelThumb');
            } else {
                this.$panel.addClass('disabelThumb');
            }
        }
    }]);

    return ParasiseButton;
}();

var Thumb = function (_ParasiseButton) {
    _inherits(Thumb, _ParasiseButton);

    function Thumb(panelId, clickId) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, panelId, clickId));
    }

    return Thumb;
}(ParasiseButton);

;

exports.default = Thumb;
