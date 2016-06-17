var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.isiOS7Plus = function() {
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0], 10);
    if (major >= 7) return true;
    return false;
};

Alloy.Globals.topViewHeight = Alloy.Globals.isiOS7Plus() ? 21 : 0;

Alloy.Globals.iPhoneTall = true && "iphone" == Ti.Platform.osname && 568 == Ti.Platform.displayCaps.platformHeight;

Alloy.Globals.iPhoneSmall = true && "iphone" == Ti.Platform.osname && 480 == Ti.Platform.displayCaps.platformHeight;

var indWin = null;

var msglbl = null;

Alloy.Globals.showIndicator = null;

Alloy.Globals.hideIndicator = null;

var indicator_iphone = require("indicator_iphone");

indWin = new indicator_iphone();

Alloy.Globals.showIndicator = function(message) {
    indWin.children[1].children[1].text = "" != message && null != message ? message : "Loading...";
    null != indWin && indWin.close({
        opacity: 0,
        duration: 450
    });
    indWin.open({
        opacity: 1,
        duration: 200
    });
};

Alloy.Globals.hideIndicator = function() {
    null != indWin && indWin.close({
        opacity: 0,
        duration: 450
    });
};

Alloy.createController("index");