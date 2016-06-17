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
    this.__controllerPath = "listview_templates/itemtemplate_food";
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
    var __alloyId22 = [];
    var __alloyId23 = {
        type: "Ti.UI.ImageView",
        bindId: "left_imageview",
        properties: {
            left: 5,
            height: 55,
            width: 55,
            bindId: "left_imageview"
        }
    };
    __alloyId22.push(__alloyId23);
    var __alloyId24 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId25 = [];
            var __alloyId26 = {
                type: "Ti.UI.Label",
                bindId: "title_lbl",
                properties: {
                    top: 2,
                    left: 2,
                    color: Alloy.CFG.color.barColor,
                    font: {
                        fontSize: 14,
                        fontFamily: Alloy.CFG.font.open_sans_regular
                    },
                    right: 0,
                    textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
                    bindId: "title_lbl"
                }
            };
            __alloyId25.push(__alloyId26);
            var __alloyId27 = {
                type: "Ti.UI.Label",
                bindId: "subtitle_lbl",
                properties: {
                    top: 2,
                    left: 2,
                    right: 0,
                    color: "#6E6E6A",
                    font: {
                        fontSize: 12,
                        fontFamily: Alloy.CFG.font.open_sans_regular
                    },
                    textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
                    bindId: "subtitle_lbl"
                }
            };
            __alloyId25.push(__alloyId27);
            var __alloyId28 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId29 = [];
                    var __alloyId30 = {
                        type: "Ti.UI.Label",
                        bindId: "left_lbl",
                        properties: {
                            left: 0,
                            font: {
                                fontSize: 10,
                                fontFamily: Alloy.CFG.font.open_sans_regular
                            },
                            color: "#6E6E6A",
                            textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
                            bindId: "left_lbl"
                        }
                    };
                    __alloyId29.push(__alloyId30);
                    var __alloyId31 = {
                        type: "Ti.UI.Label",
                        bindId: "middle_lbl",
                        properties: {
                            left: "45%",
                            font: {
                                fontSize: 10,
                                fontFamily: Alloy.CFG.font.open_sans_regular
                            },
                            color: Alloy.CFG.color.barColor,
                            textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
                            bindId: "middle_lbl"
                        }
                    };
                    __alloyId29.push(__alloyId31);
                    var __alloyId32 = {
                        type: "Ti.UI.Label",
                        bindId: "right_lbl",
                        properties: {
                            right: 0,
                            font: {
                                fontSize: 10,
                                fontFamily: Alloy.CFG.font.open_sans_regular
                            },
                            color: "#6E6E6A",
                            textAlign: Titanium.UI.TEXT_ALIGNMENT_LEFT,
                            bindId: "right_lbl"
                        }
                    };
                    __alloyId29.push(__alloyId32);
                    return __alloyId29;
                }(),
                properties: {
                    top: 2,
                    left: 2,
                    borderColor: "red",
                    backgroundColor: "transparent"
                }
            };
            __alloyId25.push(__alloyId28);
            return __alloyId25;
        }(),
        properties: {
            height: 60,
            left: 65,
            right: 10,
            backgroundColor: "transparent",
            layout: "vertical"
        }
    };
    __alloyId22.push(__alloyId24);
    $.__views.itemtemplate_food = {
        properties: {
            height: 75,
            width: "100%",
            backgroundColor: "transparent",
            selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE,
            id: "itemtemplate_food",
            name: "itemtemplate_food"
        },
        childTemplates: __alloyId22
    };
    __itemTemplate["itemtemplate_food"] = $.__views.itemtemplate_food;
    $.__views.itemtemplate_food && $.addTopLevelView($.__views.itemtemplate_food);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;