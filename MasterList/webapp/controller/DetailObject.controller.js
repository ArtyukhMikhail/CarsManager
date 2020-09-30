sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/SimpleType",
	"sap/ui/model/ValidateException",
	"masterdetail/MasterList/model/customTypes"
], function (Controller, SimpleType, ValidateException, customTypes) {
	"use strict";

	return Controller.extend("masterdetail.MasterList.controller.DetailObject", {
		
		types: {
			transmissionType: new customTypes()
		},
		
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute('DetailObject').attachPatternMatched(this.handlePatternMatched, this);
		},
		handlePatternMatched: function (oEvent) {
			this.arguments = oEvent.getParameter("arguments");
			var pathBinding = "data>/cars/" + this.getIndexById(this.arguments.id);
			this.getView().bindElement(pathBinding);
		},
		getIndexById: function (sId) {
			return this.getView().getModel("data").getProperty("/cars").findIndex(function (item) {
				return item.id === sId;
			});
		},
		speedFormatter: function (sValue) {
			return sValue + " km/h";
		}
	});
});