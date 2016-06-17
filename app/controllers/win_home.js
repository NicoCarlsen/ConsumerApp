var utility = require('utility');
var XHR = require("xhr");

var win_center = Alloy.createController('win_center').getView();
$.drawer.setCenterWindow(win_center);
$.drawer.open();

function closeDrawer() {
	$.drawer.instance.close();
	$.drawer.instance = null;
	$.drawer = null;
	$.destroy();
};
Alloy.Globals.ToggleLeft = function() {
	$.drawer.toggleLeftWindow();
};
try {
} catch(exc) {
	Ti.API.info('------ close drawer exception:' + ex);
}
function toggle(e) {
	var fn = 'toggle' + e.source.left + 'Window';
	$.drawer[fn]();
}

var getdrawer = (function() {

	Ti.API.info('---------------------------------------------------');
	Ti.API.info('---------------------WIN Main------------------------------');
	Ti.API.info('---------------------------------------------------');

	var name_arr = ["search", "Vendors List", "Loyalti", "Favourite", "Orders"];

	var dataitems = [];
	for (var i = 0; i < name_arr.length; i++) {
		Ti.API.info('-----' + name_arr[i]);
		dataitems.push({
			title_data : [i] + " " + i,
			image : {
				image : "/images/drawer/" + (i + 1) + ".png"
			},
			lbl : {
				text : name_arr[i]
			},
			view_bottom : {
				backgroundColor : 'white',
			}
		});
	}
	$.list_section.setItems(dataitems);
});
getdrawer();

Alloy.Globals.reset_drawers = function() {
	var dataitems = [];
	for (var i = 0; i < name_arr.length; i++) {
		Ti.API.info('-----' + name_arr[i]);
		dataitems.push({
			title_data : [i] + " " + i,
			image : {
				image : "/images/drawer/" + (i + 1) + ".png"
			},
			lbl : {
				text : name_arr[i]
			},
			view_bottom : {
				backgroundColor : 'white',
			}
		});
	}
	$.list_section.setItems([]);
	$.list_section.setItems(dataitems);
};

if (OS_IOS) {
	$.drawer.setShouldStretchDrawer(false);
	$.drawer.setShowShadow(false);
	$.drawer.setAnimationMode($.drawer.module.ANIMATION_SLIDE_SCALE);

} else {

}
Alloy.Globals.changeOPenMode = function(isAll) {
	if (isAll) {
		$.drawer.setOpenDrawerGestureMode($.drawer.module.OPEN_MODE_ALL);
	} else {
		$.drawer.setOpenDrawerGestureMode($.drawer.module.OPEN_MODE_NONE);
	}
};

$.drawer_listview.addEventListener('itemclick', function(e) {
	var inx = e.itemIndex;
	switch(inx) {
	case  0 :
		var win_center = Alloy.createController('win_center').getView();
		$.drawer.setCenterWindow(win_center);
		$.drawer.toggleLeftWindow();
		if (OS_IOS) {
			if (Alloy.Globals.navDrawer) {
				Alloy.Globals.navDrawer.close();
				Alloy.Globals.navDrawer = null;
			}
			Alloy.Globals.navDrawer = win_center;
		}
		break;

	case 1 :
		var win_sample2 = Alloy.createController('win_vendors').getView();
		Ti.API.info('----win_sample1' + win_sample2);
		$.drawer.setCenterWindow(win_sample2);
		$.drawer.toggleLeftWindow();
		if (OS_IOS) {
			if (Alloy.Globals.navDrawer) {
				Alloy.Globals.navDrawer.close();
				Alloy.Globals.navDrawer = null;
			}
			Alloy.Globals.navDrawer = win_sample2;
		}
		break;
	case 2 :
		var win_sample2 = Alloy.createController('win_loyalty').getView();
		Ti.API.info('----win_sample1' + win_sample2);
		$.drawer.setCenterWindow(win_sample2);
		$.drawer.toggleLeftWindow();
		if (OS_IOS) {
			if (Alloy.Globals.navDrawer) {
				Alloy.Globals.navDrawer.close();
				Alloy.Globals.navDrawer = null;
			}
			Alloy.Globals.navDrawer = win_sample2;
		}
	case 3:
		var win_sample2 = Alloy.createController('win_fav').getView();
		Ti.API.info('----win_sample1' + win_sample2);
		$.drawer.setCenterWindow(win_sample2);
		$.drawer.toggleLeftWindow();
		if (OS_IOS) {
			if (Alloy.Globals.navDrawer) {
				Alloy.Globals.navDrawer.close();
				Alloy.Globals.navDrawer = null;
			}
			Alloy.Globals.navDrawer = win_sample2;
		}
	case 4:
		var win_sample2 = Alloy.createController('win_orders').getView();
		Ti.API.info('----win_sample1' + win_sample2);
		$.drawer.setCenterWindow(win_sample2);
		$.drawer.toggleLeftWindow();
		if (OS_IOS) {
			if (Alloy.Globals.navDrawer) {
				Alloy.Globals.navDrawer.close();
				Alloy.Globals.navDrawer = null;
			}
			Alloy.Globals.navDrawer = win_sample2;
		}
	}
});
