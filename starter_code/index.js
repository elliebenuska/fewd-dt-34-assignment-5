//page loads, prevent js from loading until after the DOM loads

$(document).ready(function() {
	
	// Handler for .ready() called.

	console.log("ready")

	//listen for form submit

	$("form").submit(changePicture);

	//run function changePicture

	function changePicture(){

		//prevent deault form submission

		event.preventDefault();

		//check to make sure function is running



		//get user input from #city-type

		var city = $("#city-type").val();

		// //read string. String could have multiple names for the same city picture


			if (city === "NYC"){
				$("body").css("background", "url(images/nyc.jpg) no-repeat center center fixed");
			}else if (city === "New York"){
				$("body").css("background", "url(images/nyc.jpg) no-repeat center center fixed");
			}else if (city === "New York City"){
				$("body").css("background", "url(images/nyc.jpg) no-repeat center center fixed");
			}else if (city === "SF"){
				$("body").css("background", "url(images/sf.jpg) no-repeat center center fixed");
			}else if (city === "San Francisco"){
				$("body").css("background", "url(images/sf.jpg) no-repeat center center fixed");
			}else if (city === "Bay Area"){
				$("body").css("background", "url(images/sf.jpg) no-repeat center center fixed");
			}else if (city === "Los Angeles"){
				$("body").css("background", "url(images/la.jpg) no-repeat center center fixed");
			}else if (city === "LA"){
				$("body").css("background", "url(images/la.jpg) no-repeat center center fixed");
			}else if (city === "LAX"){
				$("body").css("background", "url(images/la.jpg) no-repeat center center fixed");
			}else if (city === "Austin"){
				$("body").css("background", "url(images/austin.jpg) no-repeat center center fixed");
			}else if (city === "ATX"){
				$("body").css("background", "url(images/austin.jpg) no-repeat center center fixed");
			}else if (city === "Sydney"){
				$("body").css("background", "url(images/sydney.jpg) no-repeat center center fixed");
			}else if (city === "SYD"){
				$("body").css("background", "url(images/sydney.jpg) no-repeat center center fixed");
			}
	

	};


});
