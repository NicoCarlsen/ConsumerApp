(function() {
	exports.Ui = {
		getUID : function() {
			var db = Titanium.Database.install('/pc.db', 'pc');
			var user = db.execute("SELECT * from setting");
			var userid = user.fieldByName('userid');
			user.close();
			db.close();

			return parseInt(userid | 0);
		},
		getLOGIN : function() {
			var db = Titanium.Database.install('/pc.db', 'pc');
			var user = db.execute("SELECT * from setting");
			var login = user.fieldByName('isregister');
			user.close();
			db.close();
			return login;
		},
		getEMAIL : function() {
			var db = Titanium.Database.install('/pc.db', 'pc');
			var user = db.execute("SELECT * from setting");
			var email_user = user.fieldByName('email');
			user.close();
			db.close();
			return email_user;
		},
		getDEVICE : function() {
			var db = Titanium.Database.install('/pc.db', 'pc');
			var user = db.execute("SELECT * from setting");
			var device = user.fieldByName('device');
			user.close();
			db.close();
			return device;
		},
		getPASSWORD : function() {
			var db = Titanium.Database.install('/pc.db', 'pc');
			var user = db.execute("SELECT * from setting");
			var pass = user.fieldByName('password');
			user.close();
			db.close();
			return pass;
		},
		getTOOLTIP : function() {
			var db = Titanium.Database.install('/pc.db', 'pc');
			var user = db.execute("SELECT * from tooltip");
			var pass = user.fieldByName('show');
			user.close();
			db.close();
			return pass;
		},

		alert : function(_message) {
			Ti.UI.createAlertDialog({
				title : "PrimeCursosEnem",
				message : _message,
				buttonNames : ['OK']
			}).show();
		},
		alertWithButton : function(_message, callback) {
			var alr = Ti.UI.createAlertDialog({
				title : "PrimeCursos",
				message : _message,
				buttonNames : ['OK']
			});
			alr.show();
			alr.addEventListener('click', callback);
		},
		createOptionDialog : function(options, title, selectedIndex, onOptionClickedCallback) {
			option_dialog = Ti.UI.createOptionDialog({
				options : options,
				selectedIndex : selectedIndex,
				title : title
			});
			option_dialog.show();
			option_dialog.addEventListener('click', onOptionClickedCallback);
		},
		leftNavButton : function() {
			var left_nav_btn = Titanium.UI.createButton({
				backgroundImage : '/images/back_btn.png',
				height : 22,
				width : 12
			});
			return left_nav_btn;
		},
		getFooterView : function() {
			var view = Ti.UI.createView({
				backgroundColor : 'transparent',
				height : 50
			});
			var activityIndicator = Ti.UI.createActivityIndicator({
				message : L("loadingtitle"),
				color : Alloy.CFG.AppColors_default.color_social_text,
				font : {
					fontSize : Alloy.CFG.FontSize.F14,
					fontFamily : Alloy.CFG.FontFamily.open_sans_regular,
					fontWeight : "normal"
				},
				style : (OS_ANDROID) ? Titanium.UI.ActivityIndicatorStyle.PLAIN : Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
				left : 100,
				height : Ti.UI.SIZE,
				width : Ti.UI.SIZE
			});
			view.add(activityIndicator);
			activityIndicator.show();
			return view;
		},

		cachedImageView : function(imageDirectoryName, url) {
			Ti.API.info('----- in a cache image view function----------');
			try {
				var g = null;
				var file = null;
				if (OS_ANDROID) {
					if (Ti.Filesystem.isExternalStoragePresent() == true) {
						g = Ti.Filesystem.getFile(Titanium.Filesystem.getExternalStorageDirectory(), imageDirectoryName);
					} else {
						g = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, imageDirectoryName);
					}
				} else {
					g = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, imageDirectoryName);
				}
				if (!g.exists()) {
					g.createDirectory();
				}
				var filename = url.split('/');
				filename = filename[filename.length - 1];
				//file = Ti.Filesystem.getFile(g.resolve(), filename);
				file = Ti.Filesystem.getFile(g.resolve(), 'camera_photo.png');
				if (!file.exists()) {
					Ti.API.info('------- file not exist so call');
					var xhr = Ti.Network.createHTTPClient();
					xhr.onload = function() {
						Ti.API.info('------xhr onload------');
						Ti.API.info('----- file' + file.nativePath);
						file.write(this.responseData);
					};
					xhr.onerror = function() {
						Ti.API.info('------xhr on error---------');
					};
					xhr.open('GET', url);
					xhr.send(null);
				} else {
					Ti.API.info('---- file exists');
				}
			} catch(exp) {
				Ti.API.info('-----exception' + exp);
			}
		}
	};
	var winTrans = null;
	exports.Utility = {
		validateEmail : function(emailAddr) {
			if (emailAddr.trim()) {
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				var txt = emailAddr;
				if (reg.test(txt)) {
					return true;
				} else {
					return false;
				}
			}
		},
	};

	/**
	 * calculate thumb size
	 * @return {Number} size in dp
	 */

	exports.get_loadmore_dataItem = function() {
		return {
			properties : {
				height : 50,
				selectedBackgroundColor : "transparent",
				selectionStyle : (OS_IOS) ? Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE : "",
				backgroundColor : Alloy.CFG.AppColors_default.color_winBackground
			},
			template : 'template_loadmore',
			act_Indicator : {
				message : "New Message"
			},
			text_loadmore : {
				text : "Loading..."
			}

		};
	};

})();
