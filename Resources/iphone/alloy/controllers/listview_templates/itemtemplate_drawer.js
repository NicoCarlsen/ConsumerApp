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
    this.__controllerPath = "listview_templates/itemtemplate_drawer";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        var __itemTemplate = __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId19 = [];
    var __alloyId20 = {
        type: "Ti.UI.ImageView",
        bindId: "image",
        properties: {
            height: 20,
            width: 20,
            left: 10,
            bindId: "image"
        }
    };
    __alloyId19.push(__alloyId20);
    var __alloyId21 = {
        type: "Ti.UI.Label",
        bindId: "lbl",
        properties: {
            left: 45,
            color: "white",
            font: {
                fontSize: 15,
                fontFamily: Alloy.CFG.font.open_sans_regular
            },
            bindId: "lbl"
        }
    };
    __alloyId19.push(__alloyId21);
    $.__views.itemtemplate_drawer = {
        properties: {
            height: 40,
            backgroundColor: Alloy.CFG.color.barColor,
            selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE,
            name: "itemtemplate_drawer",
            id: "itemtemplate_drawer"
        },
        childTemplates: __alloyId19
    };
    __itemTemplate["itemtemplate_drawer"] = $.__views.itemtemplate_drawer;
    $.__views.itemtemplate_drawer && $.addTopLevelView($.__views.itemtemplate_drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;