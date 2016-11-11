$(function() {
  $(".sliderUpper").click(function(){

  	$(".mainBox").animate({ "bottom": "+=1350px" }, "fast" );
  	$(".cafeBox").delay(25).animate({ "bottom": "+=1350px" }, "fast" );
  	$(".cafeBox2").delay(50).animate({ "bottom": "+=1350px" }, "fast" );
  	$(".cafeBox3").delay(100).animate({ "bottom": "+=1350px" }, "fast" );
  	$(".cafeBox4").delay(125).animate({ "bottom": "+=1350px" }, "fast" );

  	$(".mainTravelBox").delay(175).animate({ "bottom": "+=1350px" }, "fast" );
  	$(".travelBox").delay(200).animate({ "bottom": "+=1350px" }, "fast" );
  	$(".travelBox2").delay(250).animate({ "bottom": "+=1350px" }, "fast" );
  	$(".travelBox3").delay(275).animate({ "bottom": "+=1350px" }, "fast" );
  	$(".travelBox4").delay(300).animate({ "bottom": "+=1350px" }, "fast" );

  });
});





$(function() {
  $(".sliderDowner").click(function(){

  	$(".mainBox").animate({ "top": "+=1350px" }, "fast" );
  	$(".cafeBox").delay(175).animate({ "top": "+=1350px" }, "fast" );
  	$(".cafeBox2").delay(200).animate({ "top": "+=1350px" }, "fast" );
  	$(".cafeBox3").delay(250).animate({ "top": "+=1350px" }, "fast" );
  	$(".cafeBox4").delay(300).animate({ "top": "+=1350px" }, "fast" );

  	$(".mainTravelBox").delay(25).animate({ "top": "+=1350px" }, "fast" );
  	$(".travelBox").delay(50).animate({ "top": "+=1350px" }, "fast" );
  	$(".travelBox2").delay(75).animate({ "top": "+=1350px" }, "fast" );
  	$(".travelBox3").delay(100).animate({ "top": "+=1350px" }, "fast" );
  	$(".travelBox4").delay(125).animate({ "top": "+=1350px" }, "fast" );

  });
});