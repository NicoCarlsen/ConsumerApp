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
    this.__controllerPath = "win_center";
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
    var __defers = {};
    $.__views.win_center = (require("xp.ui").createWindow || Ti.UI.createWindow)({
        fullscreen: false,
        navBarHidden: false,
        navTintColor: "white",
        tintColor: "white",
        barColor: Alloy.CFG.color.barColor,
        backgroundImage: "/images/WindowbackgroundImage.png",
        id: "win_center"
    });
    $.__views.leftnav = Ti.UI.createButton({
        backgroundImage: "/images/menu-circular-button.png",
        height: 32,
        width: 32,
        id: "leftnav"
    });
    toggleDrawerLeft ? $.addListener($.__views.leftnav, "click", toggleDrawerLeft) : __defers["$.__views.leftnav!click!toggleDrawerLeft"] = true;
    $.__views.win_center.leftNavButton = $.__views.leftnav;
    $.__views.rightnav = Ti.UI.createButton({
        backgroundImage: "/images/search.png",
        height: 32,
        width: 32,
        id: "rightnav"
    });
    showSearch ? $.addListener($.__views.rightnav, "click", showSearch) : __defers["$.__views.rightnav!click!showSearch"] = true;
    $.__views.win_center.leftNavButton = $.__views.rightnav;
    $.__views.title_view = Ti.UI.createView({
        id: "title_view"
    });
    $.__views.logo_image = Ti.UI.createImageView({
        image: "/images/SFEZLOGO_small.png",
        id: "logo_image"
    });
    $.__views.title_view.add($.__views.logo_image);
    $.__views.win_center.titleControl = $.__views.title_view;
    $.__views.logoimage = Ti.UI.createImageView({
        top: 15,
        height: 150,
        width: 225,
        image: "/images/SFEZLOGO.png",
        id: "logoimage"
    });
    $.__views.win_center.add($.__views.logoimage);
    $.__views.street_food = Ti.UI.createLabel({
        text: "The easy way to order street food",
        top: 180,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
        color: Alloy.CFG.color.label_color,
        font: {
            fontSize: 12,
            fontFamily: Alloy.CFG.font.open_sans_regular
        },
        id: "street_food"
    });
    $.__views.win_center.add($.__views.street_food);
    $.__views.mapmyfood = Ti.UI.createButton({
        bottom: 160,
        left: 10,
        right: 10,
        height: 35,
        backgroundColor: Alloy.CFG.color.barColor,
        color: "white",
        title: "MAP MY FOOD",
        font: {
            fontSize: 14,
            fontFamily: Alloy.CFG.font.open_sans_regular
        },
        id: "mapmyfood"
    });
    $.__views.win_center.add($.__views.mapmyfood);
    $.__views.lbl_or = Ti.UI.createLabel({
        bottom: 130,
        height: 20,
        color: Alloy.CFG.color.label_color,
        text: "OR",
        font: {
            fontSize: 12,
            fontFamily: Alloy.CFG.font.open_sans_regular
        },
        id: "lbl_or"
    });
    $.__views.win_center.add($.__views.lbl_or);
    $.__views.bottom_search_postalcode = Ti.UI.createTextField({
        bottom: 85,
        height: 35,
        width: 200,
        hintText: "Posatal Code",
        hintTextColor: "gray",
        color: Alloy.CFG.color.barColor,
        backgroundColor: "white",
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE,
        font: {
            fontSize: 12,
            fontFamily: Alloy.CFG.font.open_sans_regular
        },
        id: "bottom_search_postalcode"
    });
    $.__views.win_center.add($.__views.bottom_search_postalcode);
    $.__views.bottom_search = Ti.UI.createButton({
        bottom: 25,
        width: 150,
        height: 30,
        color: "white",
        backgroundColor: Alloy.CFG.color.barColor,
        font: {
            fontSize: 12,
            fontFamily: Alloy.CFG.font.open_sans_regular
        },
        title: "SEARCH BY LOCATION",
        id: "bottom_search"
    });
    $.__views.win_center.add($.__views.bottom_search);
    $.__views.NavigationWindow = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win_center,
        id: "NavigationWindow"
    });
    $.__views.NavigationWindow && $.addTopLevelView($.__views.NavigationWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    require("utility");
    require("xhr");
    $.args;
    var toggleDrawerLeft = function() {
        Alloy.Globals.ToggleLeft();
    };
    Alloy.Globals.navDrawer = $.NavigationWindow;
    var showSearch = function() {
        $.win;
    };
    $.win_center.addEventListener("open", function() {});
    $.win_center.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.leftnav!click!toggleDrawerLeft"] && $.addListener($.__views.leftnav, "click", toggleDrawerLeft);
    __defers["$.__views.rightnav!click!showSearch"] && $.addListener($.__views.rightnav, "click", showSearch);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;