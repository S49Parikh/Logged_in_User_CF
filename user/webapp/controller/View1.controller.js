sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.user.controller.View1", {
		onInit: function () {

		},
		
		onAfterRendering: function () {
			var g=this;
			$.ajax({
				url: "../user"
			}).done(function (data, status, jqxhr) {
				var user = "Welcome! " + data;
				var oText = new sap.m.Text({
				text:user
				});
				g.getView().byId("userVBox").addItem(oText);
			});
			
		}
	});
});