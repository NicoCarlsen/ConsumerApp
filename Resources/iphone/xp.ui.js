var NavigationWindow;

exports.createNavigationWindow = function(args) {
    var navWin = Ti.UI.iOS.createNavigationWindow(args);
    args && args.id && (Alloy.Globals[args.id] = navWin);
    return navWin;
};

exports.createWindow = function(args) {
    return Ti.UI.createWindow(args);
};