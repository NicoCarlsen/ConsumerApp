Alloy.Globals.openWindow = function(windowName, param) {
	var win = null;
	if (windowName) {
		if (param == undefined && param == 'undefined') {
			win = Alloy.createController(windowName).getView();
		} else {
			win = Alloy.createController(windowName, param).getView();
		}
		win.open();
	}
};

Alloy.createController('win_home').getView().open();
