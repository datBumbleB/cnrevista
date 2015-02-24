//problem: site does not display as intended. every div must be a pannel that fills screen for optimal scroll experience


var screen_y = $(window).height(); //get screen height
$("header").css("height", screen_y);
$("#main-header").css("height", screen_y - 330);
// $("#content-table").css("height", screen_y - 100);
console.log(screen_y);
$(".arrow").offset( {top: (screen_y - 150), left: ($(window).width()/2 - 40)});
$("#real-header").offset({top: (screen_y/2 - $("#real-header").height()/2), left: 0});
