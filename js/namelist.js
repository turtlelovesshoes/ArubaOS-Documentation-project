$(document).ready(function(){
	//this part keeps the default text dynamic
	var default_search="Enter the keyword..."; 
	
	$('input[type="text"]').attr('value', default_search).focus(function(){
			if($(this).val() == default_search){
					$(this).attr('value', '');
					$(this).addClass('highlight');
				}		
	}).blur(function(){
		if($(this).val() == ''){
				$(this).attr('value', default_search);
				$(this).removeClass('highlight');
			}	
		});
	//check with alert-
	
	$('#word').keyup(function(){
		search_name = $(this).val();
		$('#SearchBox p li a h1 h2 td tr table').removeClass('highlight');
		if(jQuery.trim(search_name) != ''){
			$("#SearchBox p li a h1 h2 td tr table:contains('" + search_name +"')").addClass('highlight');
		}
		
	});
});
//need to add highlight feature to the box


//this adds highlight to keywords- need to add a way to dynamically create a dom list with the keyword locations on the page