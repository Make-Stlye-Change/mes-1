var QCD = QCD || {};
QCD.components = QCD.components || {};
QCD.components.elements = QCD.components.elements || {};

QCD.components.elements.TextInput = function(_element, _mainController) {
	$.extend(this, new QCD.components.Component(_element, _mainController));

	var mainController = _mainController;
	
	var element = _element;
	
	var input = $("#"+element.attr('id')+"_input");
	
	this.insterData = function(data) {
		input.val(data);
	}
	
}