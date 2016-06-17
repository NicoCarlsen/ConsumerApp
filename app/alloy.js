// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

//-----------------------------Check for iOS -7 Device ---------------------------------------------------
Alloy.Globals.isiOS7Plus = function() {
	if (Titanium.Platform.name == 'iPhone OS') {
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0], 10);
		if (major >= 7) {
			return true;
		}
	}
	return false;
};
//-----------------------------Window Top for iPhone  ---------------------------------------------------
Alloy.Globals.topViewHeight = (Alloy.Globals.isiOS7Plus()) ? 21 : 0;
Alloy.Globals.iPhoneTall = (OS_IOS && Ti.Platform.osname == "iphone" && Ti.Platform.displayCaps.platformHeight == 568);
Alloy.Globals.iPhoneSmall = (OS_IOS && Ti.Platform.osname == "iphone" && Ti.Platform.displayCaps.platformHeight == 480);
var indWin = null;
var msglbl = null;
Alloy.Globals.showIndicator = null;
Alloy.Globals.hideIndicator = null;
if (OS_IOS) {
	var indicator_iphone = require("indicator_iphone");
	indWin = new indicator_iphone();
	Alloy.Globals.showIndicator = function(message) {
		indWin.children[1].children[1].text = (message != "" && message != null) ? message : 'Loading...';
		if (indWin != null) {
			indWin.close({
				opacity : 0,
				duration : 450
			});
		}
		indWin.open({
			opacity : 1,
			duration : 200
		});
	};
	Alloy.Globals.hideIndicator = function(message) {
		if (indWin != null) {
			indWin.close({
				opacity : 0,
				duration : 450
			});
		}
	};
} else {
	Alloy.Globals.activityIndicator_android = Ti.UI.Android.createProgressIndicator({
		location : Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
		type : Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT
	});
	Alloy.Globals.showIndicator = function(message) {
		Alloy.Globals.indHideen = false;
		Alloy.Globals.activityIndicator_android.show();
		if ( typeof message != 'undefined') {
			message = (message != "" && message != null) ? message : 'Loading...';
		} else {
			message = 'Loading...';
		}
		Alloy.Globals.activityIndicator_android.message = message;
	};
	Alloy.Globals.hideIndicator = function() {
		if (Alloy.Globals.indHideen == false) {
			Alloy.Globals.indHideen = true;
			Alloy.Globals.activityIndicator_android.hide();
		}
	};
}

