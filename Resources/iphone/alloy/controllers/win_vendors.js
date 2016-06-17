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
    this.__controllerPath = "win_vendors";
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
    var __defers = {};
    $.__views.win_vendors = Ti.UI.createWindow({
        fullscreen: false,
        navBarHidden: false,
        navTintColor: "white",
        tintColor: "white",
        barColor: Alloy.CFG.color.barColor,
        backgroundImage: "/images/WindowbackgroundImage.png",
        id: "win_vendors"
    });
    $.__views.rightnav_btn = Ti.UI.createButton({
        backgroundImage: "/images/menu-circular-button.png",
        height: 32,
        width: 32,
        id: "rightnav_btn"
    });
    toggleDrawerLeft ? $.addListener($.__views.rightnav_btn, "click", toggleDrawerLeft) : __defers["$.__views.rightnav_btn!click!toggleDrawerLeft"] = true;
    $.__views.win_vendors.leftNavButton = $.__views.rightnav_btn;
    $.__views.title_view = Ti.UI.createView({
        id: "title_view"
    });
    $.__views.logo_image = Ti.UI.createImageView({
        image: "/images/SFEZLOGO_small.png",
        id: "logo_image"
    });
    $.__views.title_view.add($.__views.logo_image);
    $.__views.win_vendors.titleControl = $.__views.title_view;
    $.__views.top_scrollable_view = Ti.UI.createView({
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        borderWidth: 2,
        backgroundColor: "#164D6A",
        id: "top_scrollable_view"
    });
    $.__views.win_vendors.add($.__views.top_scrollable_view);
    $.__views.imgView_left = Ti.UI.createImageView({
        left: 10,
        height: 50,
        width: 50,
        image: "/images/arrow/left.png",
        id: "imgView_left"
    });
    $.__views.top_scrollable_view.add($.__views.imgView_left);
    $.__views.imgView_right = Ti.UI.createImageView({
        right: 10,
        height: 50,
        width: 50,
        image: "/images/arrow/right.png",
        id: "imgView_right"
    });
    $.__views.top_scrollable_view.add($.__views.imgView_right);
    $.__views.middleView = Ti.UI.createView({
        width: "60%",
        height: 70,
        borderRadius: 3,
        id: "middleView"
    });
    $.__views.top_scrollable_view.add($.__views.middleView);
    var __alloyId13 = [];
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId13,
        id: "scrollableView",
        height: "100%",
        top: 5,
        width: "100%",
        showPagingControl: false
    });
    $.__views.middleView.add($.__views.scrollableView);
    $.__views.middle_optionView = Ti.UI.createView({
        top: 70,
        height: 50,
        backgroundColor: "black",
        id: "middle_optionView"
    });
    $.__views.win_vendors.add($.__views.middle_optionView);
    $.__views.parentView = Ti.UI.createView({
        height: 50,
        width: 120,
        id: "parentView"
    });
    $.__views.middle_optionView.add($.__views.parentView);
    $.__views.leftView = Ti.UI.createView({
        width: 50,
        height: 40,
        left: 5,
        id: "leftView"
    });
    $.__views.parentView.add($.__views.leftView);
    $.__views.map_lbl = Ti.UI.createLabel({
        top: 8,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "#57B5E3",
        font: {
            fontSize: 15,
            fontFamily: Alloy.CFG.font.open_sans_regular
        },
        text: "MAP",
        bubbleParent: true,
        id: "map_lbl"
    });
    $.__views.leftView.add($.__views.map_lbl);
    $.__views.line_view1 = Ti.UI.createView({
        bottom: 5,
        width: 20,
        height: 1,
        backgroundColor: "#57B5E3",
        bubbleParent: true,
        id: "line_view1"
    });
    $.__views.leftView.add($.__views.line_view1);
    $.__views.rightView = Ti.UI.createView({
        width: 50,
        height: 40,
        right: 5,
        id: "rightView"
    });
    $.__views.parentView.add($.__views.rightView);
    $.__views.list_lbl = Ti.UI.createLabel({
        top: 8,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        color: "gray",
        font: {
            fontSize: 15,
            fontFamily: Alloy.CFG.font.open_sans_regular
        },
        text: "LIST",
        bubbleParent: true,
        id: "list_lbl"
    });
    $.__views.rightView.add($.__views.list_lbl);
    $.__views.line_view2 = Ti.UI.createView({
        bottom: 5,
        width: 20,
        height: 1,
        backgroundColor: "#57B5E3",
        bubbleParent: true,
        visible: false,
        id: "line_view2"
    });
    $.__views.rightView.add($.__views.line_view2);
    var __alloyId14 = {};
    Alloy.createController("listview_templates/itemtemplate_food", {
        __parentSymbol: __parentSymbol,
        __itemTemplate: __alloyId14
    });
    $.__views.list_section = Ti.UI.createListSection({
        id: "list_section"
    });
    var __alloyId18 = [];
    __alloyId18.push($.__views.list_section);
    $.__views.food_listview = Ti.UI.createListView({
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
        top: 120,
        bottom: 0,
        left: 0,
        right: 0,
        sections: __alloyId18,
        templates: __alloyId14,
        id: "food_listview",
        defaultItemTemplate: "itemtemplate_food"
    });
    $.__views.win_vendors.add($.__views.food_listview);
    $.__views.NavigationWindow = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win_vendors,
        id: "NavigationWindow"
    });
    $.__views.NavigationWindow && $.addTopLevelView($.__views.NavigationWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    require("utility");
    require("xhr");
    var map = require("ti.map");
    $.imgView_left.visible = false;
    $.imgView_right.visible = false;
    $.food_listview.visibe = false;
    var mapview;
    var all_views = [];
    var dataitems_append = [];
    var vendors_list = [ {
        title: 'Pacos"s Taco ',
        subtitle: "mexiacan salad gulatin free",
        openclose: "open",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: "Potatto Poho",
        subtitle: "mexiacan salad gulatin free",
        openclose: "close",
        rating: "4.8 / 5.0",
        distance: "0.1 mi",
        latitude: 37.390749,
        longitude: -122.081651
    }, {
        title: "tinton burger ",
        latitude: 36.390749,
        longitude: -121.081651,
        subtitle: "mexiacan salad gulatin free",
        openclose: "open",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: "Mr churottos",
        latitude: 36.390749,
        longitude: -121.081651,
        subtitle: "mexiacan salad gulatin free",
        openclose: "open",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: "Angry Dragos",
        latitude: 38.390749,
        longitude: -125.081651,
        subtitle: "mexiacan salad gulatin free",
        openclose: "close",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: "Bellow Belly",
        latitude: 40.390749,
        longitude: -125.081651,
        subtitle: "mexiacan salad gulatin free",
        openclose: "open",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: 'Pacos"s Taco ',
        subtitle: "mexiacan salad gulatin free",
        openclose: "open",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: "Potatto Poho",
        subtitle: "mexiacan salad gulatin free",
        openclose: "close",
        rating: "4.8 / 5.0",
        distance: "0.1 mi",
        latitude: 37.390749,
        longitude: -122.081651
    }, {
        title: "tinton burger ",
        latitude: 36.390749,
        longitude: -121.081651,
        subtitle: "mexiacan salad gulatin free",
        openclose: "open",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: "Mr churottos",
        latitude: 36.390749,
        longitude: -121.081651,
        subtitle: "mexiacan salad gulatin free",
        openclose: "open",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: "Angry Dragos",
        latitude: 38.390749,
        longitude: -125.081651,
        subtitle: "mexiacan salad gulatin free",
        openclose: "close",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    }, {
        title: "Bellow Belly",
        latitude: 40.390749,
        longitude: -125.081651,
        subtitle: "mexiacan salad gulatin free",
        openclose: "open",
        rating: "4.8 / 5.0",
        distance: "0.1 mi"
    } ];
    require("utility");
    require("xhr");
    var i = 0;
    var toggleDrawerLeft = function() {
        Alloy.Globals.ToggleLeft();
    };
    var ann_data = [];
    var imgView_left_function = function() {
        i -= 1;
    };
    var imgView_right_function = function() {
        i += 1;
    };
    $.imgView_left.addEventListener("click", imgView_left_function);
    $.imgView_right.addEventListener("click", imgView_right_function);
    $.leftView.addEventListener("click", function() {
        var anim = Titanium.UI.createAnimation({
            width: 0,
            height: 1,
            duration: 100
        });
        $.line_view2.animate(anim, function() {
            $.line_view2.visible = false;
            $.line_view2.width = 20;
            $.line_view1.visible = true;
            $.list_lbl.color = "gray";
            $.map_lbl.color = "#57B5E3";
        });
        $.food_listview.visibe = false;
        mapview.visible = true;
    });
    $.rightView.addEventListener("click", function() {
        Ti.API.info("----123");
        var anim = Titanium.UI.createAnimation({
            width: 0,
            height: 1,
            duration: 100
        });
        $.line_view1.animate(anim, function() {
            $.line_view1.visible = false;
            $.line_view1.width = 20;
            $.line_view2.visible = true;
            $.list_lbl.color = "#57B5E3";
            $.map_lbl.color = "gray";
        });
        $.food_listview.visibe = true;
        mapview.visible = false;
    });
    Titanium.Geolocation.purpose = "Determine Current Location";
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    if (Ti.Geolocation.locationServicesEnabled) {
        if ("android" != Titanium.Platform.osname) {
            var autorization = Titanium.Geolocation.locationServicesAuthorization;
            autorization == Titanium.Geolocation.AUTHORIZATION_DENIED ? alert("To be able to use app you need to turn on GPS and mobile network.") : autorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED && alert("To be able to use app you need to turn on GPS and mobile network..");
        }
    } else alert("Please enable location services.");
    !function() {
        all_views = [];
        dataitems_append = [];
        for (var i = 0; i < vendors_list.length; i++) {
            var anno3 = map.createAnnotation({
                latitude: vendors_list[i].latitude,
                longitude: vendors_list[i].longitude,
                animate: true,
                title: vendors_list[i].title,
                subtitle: vendors_list[i].subtitle,
                animate: true,
                data: vendors_list[i],
                rightButton: "/images/rightbtn.png",
                image: "/images/pin/redpin.png"
            });
            ann_data.push(anno3);
            var view = Titanium.UI.createView({
                top: 3,
                backgroundColor: "transparent",
                layout: "vertical",
                height: 70
            });
            var title_lbl = Titanium.UI.createLabel({
                top: 2,
                left: 10,
                right: 10,
                text: vendors_list[i].title,
                color: "white",
                font: {
                    fontSize: 10,
                    fontFamily: Alloy.CFG.font.open_sans_regular
                },
                textAlign: "center"
            });
            var subitle_lbl = Titanium.UI.createLabel({
                top: 2,
                left: 10,
                right: 10,
                color: "white",
                font: {
                    fontSize: 10,
                    fontFamily: Alloy.CFG.font.open_sans_regular
                },
                text: vendors_list[i].subtitle,
                textAlign: "center"
            });
            var lbl_price = Titanium.UI.createLabel({
                top: 2,
                left: 10,
                right: 10,
                text: "Rating " + vendors_list[i].rating,
                color: "white",
                font: {
                    fontSize: 10,
                    fontFamily: Alloy.CFG.font.open_sans_regular
                },
                textAlign: "center"
            });
            view.add(title_lbl);
            view.add(subitle_lbl);
            view.add(lbl_price);
            all_views.push(view);
            dataitems_append.push({
                word_data: vendors_list[i],
                template: "itemtemplate_food",
                left_imageview: {
                    image: "/images/SFEZLOGO_small.png"
                },
                title_lbl: {
                    text: vendors_list[i].title
                },
                subtitle_lbl: {
                    text: vendors_list[i].subtitle
                },
                left_lbl: {
                    text: "4.5 / 5.0"
                },
                middle_lbl: {
                    text: vendors_list[i].openclose
                },
                right_lbl: {
                    text: vendors_list[i].distance
                }
            });
        }
    }();
    mapview = map.createView({
        top: 120,
        left: 0,
        right: 0,
        bottom: 0,
        mapType: map.STANDARD_TYPE,
        region: {
            latitude: 37.390749,
            longitude: -122.081651,
            latitudeDelta: .01,
            longitudeDelta: .01
        },
        animate: true,
        regionFit: true,
        userLocation: true,
        annotations: ann_data,
        visible: true
    });
    $.list_section.setItems(dataitems_append);
    $.win_vendors.add(mapview);
    $.win_vendors.addEventListener("close", function() {
        map = null;
        $.destroy();
    });
    __defers["$.__views.rightnav_btn!click!toggleDrawerLeft"] && $.addListener($.__views.rightnav_btn, "click", toggleDrawerLeft);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;