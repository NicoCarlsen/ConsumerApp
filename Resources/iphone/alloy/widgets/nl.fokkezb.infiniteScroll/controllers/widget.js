function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.infiniteScroll/" + s : s.substring(0, index) + "/nl.fokkezb.infiniteScroll/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init(parent) {
        if (parent) {
            __parentSymbol = parent;
            __parentSymbol.footerView = $.is;
        }
        list = __parentSymbol.apiName && "Ti.UI.TableView" !== __parentSymbol.apiName;
        delete args.__parentSymbol;
        delete args.__itemTemplate;
        delete args.$model;
        setOptions(args);
        $.isCenter.remove($.isIndicator);
        if (list) {
            mark();
            __parentSymbol.addEventListener("marker", load);
        } else __parentSymbol.addEventListener("scroll", onScroll);
        $.is.addEventListener("click", load);
        return;
    }
    function mark() {
        var sectionIndex = Math.max(0, __parentSymbol.sectionCount - 1);
        __parentSymbol.setMarker({
            sectionIndex: sectionIndex,
            itemIndex: __parentSymbol.sections[sectionIndex].items.length - 1
        });
    }
    function state(_state, _message) {
        $.isIndicator.hide();
        $.isCenter.remove($.isIndicator);
        if (0 !== _state && false !== _state && -1 !== _state && 1 !== _state && true !== _state) throw Error("Pass a valid state");
        currentState = _state;
        _updateMessage(_message);
        $.isCenter.add($.isText);
        $.isText.show();
        list && mark();
        setTimeout(function() {
            loading = false;
        }, 25);
        return true;
    }
    function load() {
        if (loading) return false;
        loading = true;
        $.isCenter.remove($.isText);
        $.isCenter.add($.isIndicator);
        $.isIndicator.show();
        $.trigger("end", {
            success: function(msg) {
                return state(exports.SUCCESS, msg);
            },
            error: function(msg) {
                return state(exports.ERROR, msg);
            },
            done: function(msg) {
                return state(exports.DONE, msg);
            }
        });
        return true;
    }
    function onScroll(e) {
        if (e.source !== __parentSymbol) return;
        var triggerLoad;
        triggerLoad = position && e.contentOffset.y > position && e.contentOffset.y + e.size.height > e.contentSize.height;
        position = e.contentOffset.y;
        triggerLoad && load();
        return;
    }
    function dettach() {
        state(exports.DONE);
        list ? __parentSymbol.removeEventListener("marker", load) : __parentSymbol.removeEventListener("scroll", onScroll);
        $.is.removeEventListener("click", load);
        return;
    }
    function setOptions(_options) {
        _.extend(options, _options);
        _updateMessage();
    }
    function _updateMessage(_message) {
        _message ? $.isText.text = _message : 0 === currentState || false === currentState || -1 === currentState;
    }
    new (require("alloy/widget"))("nl.fokkezb.infiniteScroll");
    this.__widgetId = "nl.fokkezb.infiniteScroll";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.is = Ti.UI.createView({
        top: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "is"
    });
    $.__views.isCenter = Ti.UI.createView({
        height: "50dp",
        bottom: "0dp",
        id: "isCenter"
    });
    $.__views.is.add($.__views.isCenter);
    $.__views.isText = Ti.UI.createLabel({
        wordWrap: false,
        color: "#777",
        font: {
            fontSize: "13dp"
        },
        id: "isText"
    });
    $.__views.isCenter.add($.__views.isText);
    $.__views.isIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
        message: L("loading"),
        id: "isIndicator"
    });
    $.__views.isCenter.add($.__views.isIndicator);
    $.__views.is && $.addProxyProperty("footerView", $.__views.is);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var options = {};
    var loading = false, position = null, list = false, currentState = 1;
    __parentSymbol && init();
    exports.SUCCESS = 1;
    exports.ERROR = 0;
    exports.DONE = -1;
    exports.setOptions = setOptions;
    exports.load = load;
    exports.state = state;
    exports.dettach = dettach;
    exports.init = init;
    exports.mark = mark;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;