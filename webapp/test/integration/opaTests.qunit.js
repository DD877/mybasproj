/* global QUnit */
<<<<<<< Upstream, based on origin/master

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/bp/zdemo/test/integration/AllJourneys"
	], function() {
=======
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ppg/mygit/test/integration/AllJourneys"
	], function () {
>>>>>>> 58f7aec my initial commit @26.11.2021
		QUnit.start();
	});
});