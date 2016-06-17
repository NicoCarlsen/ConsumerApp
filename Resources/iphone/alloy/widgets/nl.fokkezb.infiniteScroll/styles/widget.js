function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.infiniteScroll/" + s : s.substring(0, index) + "/nl.fokkezb.infiniteScroll/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "TextArea",
    style: {
        backgroundColor: "white",
        borderWidth: .5,
        paddingLeft: 5,
        paddingRight: 5,
        font: {
            fontSize: 14,
            fontFamily: Alloy.CFG.font.open_sans_regular
        },
        borderColor: "transparent"
    }
}, {
    isApi: true,
    priority: 1101.0003000000002,
    key: "ListView",
    style: {
        separatorInsets: {
            left: 0
        },
        selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE,
        backgroundSelectedColor: "trsnaparent",
        selectedBackgroundColor: "trsnaparent",
        separatorStyle: 1,
        separatorColor: "#6E6E6A",
        footerTitle: "",
        showVerticalScrollIndicator: false
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "is",
    style: {
        top: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "isCenter",
    style: {
        height: "50dp",
        bottom: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "isIndicator",
    style: {
        style: Ti.UI.ActivityIndicatorStyle.DARK,
        message: L("loading")
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "isText",
    style: {
        wordWrap: false,
        color: "#777",
        font: {
            fontSize: "13dp"
        }
    }
}, {
    isClass: true,
    priority: 10101.0009,
    key: "isIndicator",
    style: {
        style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
        message: L("loading")
    }
}, {
    isId: true,
    priority: 100101.0001,
    key: "logo_image",
    style: {
        image: "/images/SFEZLOGO_small.png"
    }
} ];