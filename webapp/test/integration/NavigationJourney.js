<<<<<<< Upstream, based on origin/master
/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Master",
	"./pages/Detail",
	"./pages/App"
], function (opaTest) {
	"use strict";

	QUnit.module("Desktop navigation");

	opaTest("Should navigate on press", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Actions
		When.onTheMasterPage.iRememberTheIdOfListItemAtPosition(1).
			and.iPressOnTheObjectAtPosition(1);

		// Assertions
		Then.onTheDetailPage.iShouldSeeTheRememberedObject().
			and.iShouldSeeHeaderActionButtons();
	});


	opaTest("Detail Page Shows Object Details", function (Given, When, Then) {

		// Assertions
		Then.onTheDetailPage.iShouldSeeTheObjectLineItemsList();

		//Cleanup
		Then.iTeardownMyApp();
	});

});
=======
	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/View1"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp();

			//Cleanup
			Then.iTeardownMyApp();
		});
	});
>>>>>>> 58f7aec my initial commit @26.11.2021
