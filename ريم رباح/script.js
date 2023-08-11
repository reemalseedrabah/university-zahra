$(document).ready(function(){  
  
  
  
  $('.btn-github').click(function(){
    document.getElementById("anchor-github").click();
  });
  
  $('.btn-linkedin').click(function(){
    document.getElementById("anchor-linkedin").click();
  });
  
  
  
  $( ".showcase-inner" )
  .mouseenter(function() {
    $('.showcase-description').css("visibility","visible");
  })
  .mouseleave(function() {
    $('.showcase-description').css("visibility","hidden");
  });
  $('#p1').click(function(){
    
  });
  
});