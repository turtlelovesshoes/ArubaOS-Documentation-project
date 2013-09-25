//This will be a function that uses a search box to search the contents of the page
//call id of content
//search content as type into box
//hightlight content as typing in box
//create temperary tags 
//create list of where words are in a result box - which become target links to the iframe
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
	
	//This displays the list of results
	function displayList(array){
		object=new Array();
		for(i=0; i<array.length; i++){
				object[i]=array[i];
			}
		list=document.getElementById('resultlist');
		j=0;
		while(j != i){
			var listObject=document.createElement('LI');
			list.appendChild(listObject);
			listObject.innerText=object[j++];
			alert(object[j]);
	}
	//This clears the list of results
	function clearList(array){
		list=document.getElementById('resultlist');
		list.innerHTML="";
		list.innerText="";
	}
		
	};
	$('#word').keyup(function(){
		search_name = $(this).val();
		i=0;
		resultList=new Array();
		$('#SearchBox p').removeClass('wordhighlight');
		
		resultList=[];
		clearList();
		
		while(jQuery.trim(search_name) != ''){
			$("#SearchBox p:contains('" + search_name +"')").addClass('wordhighlight');
			
			$("#SearchBox p:contains('" + search_name +"')").wrapInner(function(){
					resultList[i]='<a href="'+ i +'"/>'+ search_name +'</a>';
					i++;
					return '<a name="' + i +'"/>';
					});
		displayList(resultlist);
		
			}
	//
	});
	
	
	
});



