/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
<<<<<<< Upstream, based on origin/master
		"com/bp/zdemo/test/unit/AllTests"
=======
		"com/ppg/mygit/test/unit/AllTests"
>>>>>>> 58f7aec my initial commit @26.11.2021
	], function () {
		QUnit.start();
	});
});