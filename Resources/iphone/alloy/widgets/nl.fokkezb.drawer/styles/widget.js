function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.drawer/" + s : s.substring(0, index) + "/nl.fokkezb.drawer/" + s.substring(index + 1);
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
    isId: true,
    priority: 100101.0001,
    key: "logo_image",
    style: {
        image: "/images/SFEZLOGO_small.png"
    }
} ];