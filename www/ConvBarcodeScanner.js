module.exports = {
	scan: function (parameters, onSuccessCallback, onCancelCallback){
		cordova.exec(function(result){
			if(result.returnCode == 0 && typeof(onCancelCallback) !== 'undefined') onCancelCallback();
			else 
			{
				if(result.returnCode == -1 && typeof(onSuccessCallback) !== 'undefined')
				{
					var finalResult = {};
					finalResult.type = result.type;
					finalResult.result = result.result;
					onSuccessCallback(finalResult);
				}
			}
		}, 
		function(result){
			console.error('JSON Error ConvBarcodeScanner'); 
		},
		'ConvBarcodeScanner',
		'Scan',parametersAsArray(parameters));
	}

	
};

parametersAsArray = function (parameters) {
	let array = [parameters];
	return array;
};