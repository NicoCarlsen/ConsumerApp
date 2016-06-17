var args = $.args;
var utility = require('utility');
var XHR = require("xhr");


var map = require('ti.map');
$.imgView_left.visible = false;
$.imgView_right.visible = false;
$.food_listview.visibe = false;

var mapview;
var all_views = [];
var dataitems_append = [];
var vendors_list = [{
	"title" : "Pacos\"s Taco ",
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "open",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Potatto Poho",
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "close",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi",
	"latitude" : 37.390749,
	"longitude" : -122.081651,
}, {
	"title" : "tinton burger ",
	"latitude" : 36.390749,
	"longitude" : -121.081651,
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "open",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Mr churottos",
	"latitude" : 36.390749,
	"longitude" : -121.081651,
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "open",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Angry Dragos",
	"latitude" : 38.390749,
	"longitude" : -125.081651,
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "close",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Bellow Belly",
	"latitude" : 40.390749,
	"longitude" : -125.081651,
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "open",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Pacos\"s Taco ",
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "open",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Potatto Poho",
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "close",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi",
	"latitude" : 37.390749,
	"longitude" : -122.081651,
}, {
	"title" : "tinton burger ",
	"latitude" : 36.390749,
	"longitude" : -121.081651,
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "open",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Mr churottos",
	"latitude" : 36.390749,
	"longitude" : -121.081651,
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "open",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Angry Dragos",
	"latitude" : 38.390749,
	"longitude" : -125.081651,
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "close",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}, {
	"title" : "Bellow Belly",
	"latitude" : 40.390749,
	"longitude" : -125.081651,
	"subtitle" : "mexiacan salad gulatin free",
	"openclose" : "open",
	"rating" : "4.8 / 5.0",
	"distance" : "0.1 mi"
}];
var utility = require('utility');
var XHR = require("xhr");
var i = 0;
var toggleDrawerLeft = function() {
	Alloy.Globals.ToggleLeft();
};
if (OS_IOS) {
	//Alloy.Globals.navDrawer = $.NavigationWindow;
} else {
	$.navBar.leftBtn.addEventListener('click', function(e) {
		Alloy.Globals.ToggleLeft();
	});
	$.navBar.leftBtn.backgroundImage = "/images/menu-circular-button.png";
	$.navBar.leftBtn.visible = true;
	$.navBar.rightBtn.visible = false;
	$.navBar.win_title.visible = false;
}

var ann_data = [];
var imgView_left_function = function(e) {
	i = i - 1;
	//$.scrollableView.currentPage(i);
	/*if (i == vendors_list.length) {
	 $.left.visible = false;
	 } else {
	 $.imgView_right.visible = true;
	 }*/
};
var imgView_right_function = function(e) {
	i = i + 1;
	//$.scrollableView.currentPage(i);
	/*if (i == vendors_list.length) {
	 $.imgView_right.visible = false;
	 } else {
	 $.left.visible = true;
	 }*/
};
$.imgView_left.addEventListener('click', imgView_left_function);
$.imgView_right.addEventListener('click', imgView_right_function);

$.leftView.addEventListener('click', function(e) {
	var anim = Titanium.UI.createAnimation({
		width : 0,
		height : 1,
		duration : 100
	});
	$.line_view2.animate(anim, function(e) {
		$.line_view2.visible = false;
		$.line_view2.width = 20;
		$.line_view1.visible = true;
		$.list_lbl.color = "gray";
		$.map_lbl.color = "#57B5E3";
	});
	$.food_listview.visibe = false;
	mapview.visible = true;
});
$.rightView.addEventListener('click', function(e) {
	Ti.API.info('----123');
	var anim = Titanium.UI.createAnimation({
		width : 0,
		height : 1,
		duration : 100
	});
	$.line_view1.animate(anim, function(e) {

		$.line_view1.visible = false;
		$.line_view1.width = 20;
		$.line_view2.visible = true;
		$.list_lbl.color = "#57B5E3";
		$.map_lbl.color = "gray";
	});
	$.food_listview.visibe = true;
	mapview.visible = false;
});

Titanium.Geolocation.purpose = 'Determine Current Location';
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 10;

if (Ti.Geolocation.locationServicesEnabled) {
	if (Titanium.Platform.osname != 'android') {
		var autorization = Titanium.Geolocation.locationServicesAuthorization;
		if (autorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
			alert('To be able to use app you need to turn on GPS and mobile network.');
		} else if (autorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
			alert('To be able to use app you need to turn on GPS and mobile network..');
		}
	}
} else {
	alert('Please enable location services.');
}

var translateErrorCode = function(code) {
	if (code == null) {
		return null;
	}
	switch(code) {
	case  Titanium.Geolocation.ERROR_DENIED :
		return "ERROR_DENIED";
		break;
	case Titanium.Geolocation.ERROR_NETWORK:
		return "Titanium.Geolocation.ERROR_NETWORK";
		break;
	case Titanium.Geolocation.ERROR_HEADING_FAILURE:
		return "Titanium.Geolocation.ERROR_HEADING_FAILURE";
		break;
	case Titanium.Geolocation.ERROR_REGION_MONITORING_DELAYED:
		return "Titanium.Geolocation.ERROR_REGION_MONITORING_DELAYED";
		break;
	case Titanium.Geolocation.ERROR_REGION_MONITORING_DENIED :
		return "Titanium.Geolocation.ERROR_REGION_MONITORING_DENIED";
		break;
	case Titanium.Geolocation.ERROR_REGION_MONITORING_FAILURE :
		return "Titanium.Geolocation.ERROR_REGION_MONITORING_FAILURE";
		break;
	}
};

/*
 var locationCallback = function(e) {
 if (e.error || !e.success) {
 //Ti.API.info('------e.error:' + e.error);
 //Ti.API.info('-----translateErrorCode:' + translateErrorCode(e.error));
 return;
 }
 var latitude = e.coords.latitude;
 var longitude = e.coords.longitude;
 Ti.API.info('---------------------------------------- latitude:' + latitude);
 Ti.API.info('---------------------------------------- longitude:' + longitude);
 var altitude = e.coords.altitude;
 var heading = e.coords.heading;
 var accuracy = e.coords.accuracy;
 var speed = e.coords.speed;
 var timestamp = e.coords.timestamp;
 var altitudeAccuracy = e.coords.altitudeAccuracy;
 var region = {
 latitude : 40.7128,
 longitude : 74.0059,
 latitudeDelta : 0.1,
 longitudeDelta : 0.1
 };
 var anno3 = map.createAnnotation({
 latitude : latitude,
 longitude : longitude,
 pincolor : map.ANNOTATION_RED,
 animate : true,
 title : 'Current Location',
 });

 Ti.API.info('------------mapView.setRegion----------------------------:');
 mapview.setRegion(region);
 };
 Titanium.Geolocation.addEventListener('location', locationCallback);*/

(function() {
	all_views = [];
	dataitems_append = [];
	for (var i = 0; i < vendors_list.length; i++) {
		var anno3 = map.createAnnotation({
			latitude : vendors_list[i].latitude,
			longitude : vendors_list[i].longitude,
			//pincolor : map.ANNOTATION_RED,
			animate : true,
			title : vendors_list[i].title,
			subtitle : vendors_list[i].subtitle,
			animate : true,
			data : vendors_list[i],
			rightButton : '/images/rightbtn.png',
			image : "/images/pin/redpin.png"
		});
		ann_data.push(anno3);

		var view = Titanium.UI.createView({
			top : 3,
			backgroundColor : 'transparent',
			layout : 'vertical',
			height : 70,
		});
		var title_lbl = Titanium.UI.createLabel({
			top : 2,
			left : 10,
			right : 10,
			text : vendors_list[i].title,
			color : 'white',
			font : {
				fontSize : 10,
				fontFamily : Alloy.CFG.font.open_sans_regular
			},
			textAlign : 'center'
		});
		var subitle_lbl = Titanium.UI.createLabel({
			top : 2,
			left : 10,
			right : 10,
			color : 'white',
			font : {
				fontSize : 10,
				fontFamily : Alloy.CFG.font.open_sans_regular
			},
			text : vendors_list[i].subtitle,
			textAlign : 'center'
		});
		var lbl_price = Titanium.UI.createLabel({
			top : 2,
			left : 10,
			right : 10,
			text : "Rating " + vendors_list[i].rating,
			color : 'white',
			font : {
				fontSize : 10,
				fontFamily : Alloy.CFG.font.open_sans_regular
			},
			textAlign : 'center'
		});
		view.add(title_lbl);
		view.add(subitle_lbl);
		view.add(lbl_price);
		all_views.push(view);

		dataitems_append.push({
			word_data : vendors_list[i],
			template : 'itemtemplate_food',
			left_imageview : {
				image : "/images/SFEZLOGO_small.png"
			},
			title_lbl : {
				text : vendors_list[i].title
			},
			subtitle_lbl : {
				text : vendors_list[i].subtitle
			},
			left_lbl : {
				text : '4.5 / 5.0'

			},
			middle_lbl : {
				text : vendors_list[i].openclose
			},
			right_lbl : {
				text : vendors_list[i].distance
			}
		});
	}
})();
mapview = map.createView({
	top : (OS_IOS) ? 120 : 165,
	left : 0,
	right : 0,
	bottom : 0,
	mapType : map.STANDARD_TYPE,
	region : {
		latitude : 37.390749,
		longitude : -122.081651,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	},
	animate : true,
	regionFit : true,
	userLocation : true,
	//annotations : [mountainView]
	annotations : ann_data,
	visible : true
});
$.list_section.setItems(dataitems_append);
//$.scrollableView.views = all_views;
$.win_vendors.add(mapview);
$.win_vendors.addEventListener('close', function(e) {
	map = null;
	$.destroy();
});
