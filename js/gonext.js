//function written by Rachel McGuigan 

//Aruba Networks Contract

//Last updated 5.19.2012

//calls the text value of auto complete box and uses select box to go to next page

 function gonext(){

//This function should check the value of the autocomplete text box and change the dropdown value 

//to that string

	var str=document.getElementsByName("text")[0].value;

	//alert(str);/*this is for debugging*/

	//var e = document.getElementById("selected");

	//var optionr = e.options[e.selectedIndex].value;*/



	for(i=0; i<suggestions.length; i++){
	
	

	 var str2=document.getElementById("selected").options[i].text;

	 var compare=( str < str2 ) ? -1:( str > str2 ? 1 : 0 );

		//alert(compare);

		if (compare == 0){

			var newPage=document.getElementById("selected").options[i].value;

			

			if(newPage != "None"){
				top.frames['page'].location.href = newPage;
				/*document.getElementById('page').setAttribute('src',newPage);*/
				/*location=newPage;*//*use this if you want to break to a new window*/

				break;

			}

		}

	}

}


// JavaScript Document