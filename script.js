$(document).ready(function(){
	$.ajax({
		url:"data.json"
	}).done(function (response){
		// console.log(response);
		for(var it = 0; it<response.length; it++){
			// console.log(response[it]);
		var $colors = $("<div style=color:" + response[it].value + "><p>"+ response[it].color + "</p></div>");
		// console.log($colors);
		$(".placeholder").append($colors);
		}
	});
});
		

		
