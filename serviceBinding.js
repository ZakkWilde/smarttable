function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZT48_16_EMPLOYEES1_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}