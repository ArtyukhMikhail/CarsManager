sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageToast"
], function (Controller, Filter, FilterOperator, MessageToast) {
	"use strict";

	return Controller.extend("masterdetail.MasterList.controller.Start", {
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute('Start').attachPatternMatched(this.handlePatternMatched, this);

			var sPath = "/CarsSet";
			var mParameters = {
				success: function (oData) {
					
					MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("createSuccess"));
				}.bind(this),
				error: function (oResponse) {
					var oErrorObj = JSON.parse(oResponse.responseText);
					MessageToast.show("Error: " + oErrorObj.error.message.value);
				}.bind(this)
			};
			this.getOwnerComponent().getModel().read(sPath, mParameters);
		},
		handlePatternMatched: function () {

		},
		onItemPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oBindingContext = oItem.getBindingContext("data");
			var oObject = oBindingContext ? oBindingContext.getObject() : null;
			if (oObject) {
				this.getOwnerComponent().getRouter().navTo('DetailObject', {
					id: oObject.id
				});
			}
		},
		handleSearch: function (oEvent) {
			// create model filter
			var filters = [];
			var query = oEvent.getParameter("query");
			if (query && query.length > 0) {
				filters.push(new Filter({
					path: "brand",
					operator: FilterOperator.Contains,
					value1: query
				}));
			}

			// update list binding
			var list = this.getView().byId("idList");
			var binding = list.getBinding("items");
			binding.filter(filters);
		}
	});
});