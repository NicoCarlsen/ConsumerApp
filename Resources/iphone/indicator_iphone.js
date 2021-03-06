function indicator_iphone() {
    var indWin = Titanium.UI.createWindow({
        height: Ti.Platform.displayCaps.platformHeight,
        orientationModes: [ Titanium.UI.PORTRAIT ],
        left: 0,
        right: 0,
        top: 0,
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        zIndex: 999
    });
    indWin.add(Ti.UI.createView({
        left: 0,
        right: 0,
        top: 0,
        zIndex: 1,
        bottom: 0,
        backgroundColor: "#000000",
        opacity: .3
    }));
    var indView = Titanium.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        zIndex: 22,
        layout: "vertical",
        backgroundColor: "transparent"
    });
    var actInd = Titanium.UI.createActivityIndicator({
        style: Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
        height: 30,
        width: 30,
        zIndex: 22,
        top: 10
    });
    indView.add(actInd);
    var messagelbl = Titanium.UI.createLabel({
        shadowColor: "#000000",
        textAlign: "center",
        shadowOffset: {
            x: .1,
            y: .1
        },
        color: "#ffffff",
        width: Ti.UI.SIZE,
        font: {
            fontSize: 15,
            fontWeight: "bold"
        },
        top: 10,
        height: 20
    });
    indView.add(messagelbl);
    indWin.add(indView);
    actInd.show();
    indWin.addEventListener("open", function() {
        actInd.show();
    });
    indWin.addEventListener("close", function() {
        actInd.hide();
    });
    return indWin;
}

module.exports = indicator_iphone;