$(document).ready(function(){

	$("#introduction p:even").css({
		backgroundColor: "#777"
	}); //end filter introduction p

	$("aside").affix({
		offset: {
			top: 100
			, bottom: function () {
			return (this.bottom = $(".footer").outerHeight(true))
			}
		}
	}); //end affix menu

	$("#coming-soon").click(function(){
		alert("Thank you for your interest! While still under construction, this section will be coming soon!");
		$("#coming-soon").fadeOut(250);
	}); //end click coming soon

	$("#name").focusout(function(){
		if($("#name").val().length == 0) {
			$(".name-group .help-block").text("Please enter your name");
			$(".name-group").attr({
				class: "col-md-4 form-group name-group has-error"
			}); // end attr
		} else {
			$(".name-group .help-block").text("");
			$(".name-group").attr({
				class: "col-md-4 form-group name-group has-success"
			}); //end attr
		}
	}); //end focus out name

	$("#email").focusout(function(){
		if($("#email").val().length == 0) {
			$(".email-group .help-block").text("Please enter your email");
			$(".email-group").attr({
				class: "col-md-4 form-group email-group has-error"
			}); // end attr
		} else {
			$(".email-group .help-block").text("");
			$(".email-group").attr({
				class: "col-md-4 form-group email-group has-success"
			}); //end attr
		}
	}); //end focus out email

	$("button").click(function(submit){
		if($("#name").val().length == 0) {
			$(".name-group .help-block").text("Please enter your name");
			$(".name-group").attr({
				class: "col-md-4 form-group name-group has-error"
			}); // end attr
			submit.preventDefault();
		} if($("#email").val().length == 0) {
			$(".email-group .help-block").text("Please enter your email");
			$(".email-group").attr({
				class: "col-md-4 form-group email-group has-error"
			}); // end attr
			submit.preventDefault();
		} else {
			$(".button-class .help-block").text("Message received!");
			submit.preventDefault();
		}
	}); //end click

	$("#twitter").hover(function(){
		console.log("Hovering over twitter icon!");
		$("#twitter").animate({
			opacity: "0.75"
		}, function(){
			$("#twitter").css({
			color: "#4099FF"
			}); //end css
		}); //end animate
	}, function(){
		console.log("No longer hovering over twitter icon!");
		$("#twitter").animate({
			opacity: "1"
		}, function(){
			$("#twitter").css({
				color: "#000"
			}); //end css
		}); //end animate
	}); //end twitter hover

	$("#linkedin").hover(function(){
		console.log("Hovering over linkedin icon!");
		$("#linkedin").animate({
			opacity: "0.75"
		}, function(){
			$("#linkedin").css({
			color: "#007bb6"
			}); //end css
		}); //end animate
	}, function(){
		console.log("No longer hovering over linkedin icon!");
		$("#linkedin").animate({
			opacity: "1"
		}, function(){
			$("#linkedin").css({
				color: "#000"
			}); //end css
		}); //end animate
	}); //end linkedin hover

	$("#greeting").addClass("animated fadeIn"); //end animated greeting
	
	$(".project").addClass("hidden-fade").viewportChecker({
        classToAdd: "visible-fade animated fadeIn",
        offset: 100
    }); //end scrolling fade

}); //end ready