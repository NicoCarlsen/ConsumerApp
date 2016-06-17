// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};
var utility = require('utility');
var XHR = require("xhr");
var args = $.args;

//-------------------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
//-------------------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
//-------------------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
//  										Drawer handle
//-------------------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
//-------------------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
//-------------------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
var toggleDrawerLeft = function() {
	Alloy.Globals.ToggleLeft();
};
if (OS_IOS) {
	Alloy.Globals.navDrawer = $.NavigationWindow;
} else {
	$.navBar.leftBtn.addEventListener('click', function(e) {
		Alloy.Globals.ToggleLeft();
	});
	$.navBar.leftBtn.backgroundImage = "/images/menu-circular-button.png";
	$.navBar.leftBtn.visible = true;
	$.navBar.rightBtn.visible = false;
	$.navBar.win_title.visible = false;
}
var showSearch = function() {
	$.win	
};
$.win_center.addEventListener("open", function() {
});
$.win_center.addEventListener("close", function() {
	$.destroy();
});

