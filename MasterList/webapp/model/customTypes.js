sap.ui.define([
	"sap/ui/model/SimpleType",
	"sap/ui/model/ValidateException"
], function ( SimpleType, ValidateException) {
	"use strict";

	return SimpleType.extend("masterdetail.MasterList.customType", {
			formatValue: function (sValue) {
				var oBundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
				switch (sValue) { 
				case "AT":
					return oBundle.getText("automatic");
				case "MT":
					return oBundle.getText("manual");
				case "CVT":
					return oBundle.getText("variable");
				default: 
					return oBundle.getText("notDefined");
				}
			},
			parseValue: function (sValue) {
				var oBundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
				switch (sValue) {
				case oBundle.getText("automatic"):
					return "AT";
				case oBundle.getText("manual"):
					return "MT";
				case oBundle.getText("variable"):
					return "CVT";
				default: 
					return "notDefined";
				}
			},
			validateValue: function (sValue) {
			var oBundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
				switch (sValue) {
				case "AT":
					return true;
				case "MT":
					return true;
				case "CVT":
					return true;
				default: 
					throw new ValidateException(oBundle.getText("wrongTransmission"));
				}	
			}
	});
});