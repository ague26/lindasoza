$(document).ready(function() {
		$("#top").animate({left: "+=100%"}, 1800);
});
$(document).ready(function() {
    $('#spanishlinker').click(function() {
    	$('#spanish').show();
    	$('#english').hide();
    	$('#englishList').hide();
    	$('#spanishList').show();
	});
});

$(document).ready(function() {
    $('#englishlinker').click(function() {
    	$('#english').show();
    	$('#spanish').hide();
    	$('#englishList').show();
    	$('#spanishList').hide();

	});
});

// $(document).ready(function () {

//     $('#myModal').dialog({
//     	modal:true,
//     	height:400,
//     	width:450,
//     	position: { my: "center", at: "right", of: window }
//     });

// });
