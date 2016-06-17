// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var utility = require('utility');
var XHR = require("xhr");
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