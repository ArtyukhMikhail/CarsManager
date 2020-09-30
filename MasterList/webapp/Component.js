sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"masterdetail/MasterList/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("masterdetail.MasterList.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			this.setModel(models.createDataModel(), "data");
			sap.ui.getCore().setModel(this.getModel("i18n"), "i18n");

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// enable routing
			this.getRouter().initialize();
		}
	});
});