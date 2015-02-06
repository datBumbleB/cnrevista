// Problem: User when clicking on image goes to dead end, a poor user experience
// Solution: Create an overlay w/ the large image - 'Lightbox'


var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="light-image">');
var scrollPos;

$overlay.css("height", $(document).height() + 355);
$image.css("position", "relative");
//An image to overlay

$overlay.append($image);



$(window).scroll(function(){

  scrollPos = $(window).scrollTop();
  console.log(scrollPos);
});


//Capture the click event on a link to an image
$(".lightbox a").click(function(event){
  //This prevents the page from opening the image in a new window
  event.preventDefault();
  //Set href to be the value of the href attribute of the clicked link
  var imageLocation = $(this).attr("href");

    //Update overlay with the image linked in the link by setting the attribute of src to $imageLocation
    $image.attr("src", imageLocation);
    $image.css("top", scrollPos + 30);
    $image.css("box-shadow", "0px 5px 5px rgba(0, 0, 0, 0.7)");

  //Show the overlay, b/c default was hidden in css
  $("body").append($overlay);
  $overlay.show();



});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});
