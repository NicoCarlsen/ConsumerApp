function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "win_fav";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.win_fav = Ti.UI.createWindow({
        fullscreen: false,
        navBarHidden: false,
        navTintColor: "white",
        tintColor: "white",
        barColor: Alloy.CFG.color.barColor,
        backgroundImage: "/images/WindowbackgroundImage.png",
        id: "win_fav"
    });
    $.__views.title_view = Ti.UI.createView({
        id: "title_view"
    });
    $.__views.logo_image = Ti.UI.createImageView({
        image: "/images/SFEZLOGO_small.png",
        id: "logo_image"
    });
    $.__views.title_view.add($.__views.logo_image);
    $.__views.win_fav.titleControl = $.__views.title_view;
    $.__views.NavigationWindow = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win_fav,
        id: "NavigationWindow"
    });
    $.__views.NavigationWindow && $.addTopLevelView($.__views.NavigationWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    require("utility");
    require("xhr");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;