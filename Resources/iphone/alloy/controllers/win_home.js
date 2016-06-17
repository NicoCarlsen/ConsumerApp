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
    this.__controllerPath = "win_home";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.left_win = (require("xp.ui").createWindow || Ti.UI.createWindow)({
        fullscreen: false,
        navBarHidden: false,
        navTintColor: "white",
        tintColor: "white",
        barColor: Alloy.CFG.color.barColor,
        backgroundImage: "/images/WindowbackgroundImage.png",
        role: "leftWindow",
        id: "left_win"
    });
    var __alloyId4 = {};
    Alloy.createController("listview_templates/itemtemplate_drawer", {
        __parentSymbol: __parentSymbol,
        __itemTemplate: __alloyId4
    });
    $.__views.list_section = Ti.UI.createListSection({
        id: "list_section"
    });
    var __alloyId8 = [];
    __alloyId8.push($.__views.list_section);
    $.__views.drawer_listview = Ti.UI.createListView({
        separatorInsets: {
            left: 0
        },
        selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE,
        backgroundSelectedColor: "trsnaparent",
        selectedBackgroundColor: "trsnaparent",
        separatorStyle: 1,
        separatorColor: "#6E6E6A",
        footerTitle: "",
        showVerticalScrollIndicator: false,
        sections: __alloyId8,
        templates: __alloyId4,
        id: "drawer_listview",
        defaultItemTemplate: "itemtemplate_drawer"
    });
    $.__views.left_win.add($.__views.drawer_listview);
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        id: "drawer",
        children: [ $.__views.left_win ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    require("utility");
    require("xhr");
    var win_center = Alloy.createController("win_center").getView();
    $.drawer.setCenterWindow(win_center);
    $.drawer.open();
    Alloy.Globals.ToggleLeft = function() {
        $.drawer.toggleLeftWindow();
    };
    try {} catch (exc) {
        Ti.API.info("------ close drawer exception:" + ex);
    }
    var getdrawer = function() {
        Ti.API.info("---------------------------------------------------");
        Ti.API.info("---------------------WIN Main------------------------------");
        Ti.API.info("---------------------------------------------------");
        var name_arr = [ "search", "Vendors List", "Loyalti", "Favourite", "Orders" ];
        var dataitems = [];
        for (var i = 0; i < name_arr.length; i++) {
            Ti.API.info("-----" + name_arr[i]);
            dataitems.push({
                title_data: [ i ] + " " + i,
                image: {
                    image: "/images/drawer/" + (i + 1) + ".png"
                },
                lbl: {
                    text: name_arr[i]
                },
                view_bottom: {
                    backgroundColor: "white"
                }
            });
        }
        $.list_section.setItems(dataitems);
    };
    getdrawer();
    Alloy.Globals.reset_drawers = function() {
        var dataitems = [];
        for (var i = 0; i < name_arr.length; i++) {
            Ti.API.info("-----" + name_arr[i]);
            dataitems.push({
                title_data: [ i ] + " " + i,
                image: {
                    image: "/images/drawer/" + (i + 1) + ".png"
                },
                lbl: {
                    text: name_arr[i]
                },
                view_bottom: {
                    backgroundColor: "white"
                }
            });
        }
        $.list_section.setItems([]);
        $.list_section.setItems(dataitems);
    };
    $.drawer.setShouldStretchDrawer(false);
    $.drawer.setShowShadow(false);
    $.drawer.setAnimationMode($.drawer.module.ANIMATION_SLIDE_SCALE);
    Alloy.Globals.changeOPenMode = function(isAll) {
        $.drawer.setOpenDrawerGestureMode(isAll ? $.drawer.module.OPEN_MODE_ALL : $.drawer.module.OPEN_MODE_NONE);
    };
    $.drawer_listview.addEventListener("itemclick", function(e) {
        var inx = e.itemIndex;
        switch (inx) {
          case 0:
            var win_center = Alloy.createController("win_center").getView();
            $.drawer.setCenterWindow(win_center);
            $.drawer.toggleLeftWindow();
            if (Alloy.Globals.navDrawer) {
                Alloy.Globals.navDrawer.close();
                Alloy.Globals.navDrawer = null;
            }
            Alloy.Globals.navDrawer = win_center;
            break;

          case 1:
            var win_sample2 = Alloy.createController("win_vendors").getView();
            Ti.API.info("----win_sample1" + win_sample2);
            $.drawer.setCenterWindow(win_sample2);
            $.drawer.toggleLeftWindow();
            if (Alloy.Globals.navDrawer) {
                Alloy.Globals.navDrawer.close();
                Alloy.Globals.navDrawer = null;
            }
            Alloy.Globals.navDrawer = win_sample2;
            break;

          case 2:
            var win_sample2 = Alloy.createController("win_loyalty").getView();
            Ti.API.info("----win_sample1" + win_sample2);
            $.drawer.setCenterWindow(win_sample2);
            $.drawer.toggleLeftWindow();
            if (Alloy.Globals.navDrawer) {
                Alloy.Globals.navDrawer.close();
                Alloy.Globals.navDrawer = null;
            }
            Alloy.Globals.navDrawer = win_sample2;

          case 3:
            var win_sample2 = Alloy.createController("win_fav").getView();
            Ti.API.info("----win_sample1" + win_sample2);
            $.drawer.setCenterWindow(win_sample2);
            $.drawer.toggleLeftWindow();
            if (Alloy.Globals.navDrawer) {
                Alloy.Globals.navDrawer.close();
                Alloy.Globals.navDrawer = null;
            }
            Alloy.Globals.navDrawer = win_sample2;

          case 4:
            var win_sample2 = Alloy.createController("win_orders").getView();
            Ti.API.info("----win_sample1" + win_sample2);
            $.drawer.setCenterWindow(win_sample2);
            $.drawer.toggleLeftWindow();
            if (Alloy.Globals.navDrawer) {
                Alloy.Globals.navDrawer.close();
                Alloy.Globals.navDrawer = null;
            }
            Alloy.Globals.navDrawer = win_sample2;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;