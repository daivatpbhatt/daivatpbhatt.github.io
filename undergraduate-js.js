jQuery(document).ready(function($) {
  $("#year_1_main").click(function() {
    $("#year_1").slideToggle("slow");
    $("#year_2").slideUp();
    $("#year_3").slideUp();
    $("#year_4").slideUp();
  });

  $("#year_2_main").click(function() {
    $("#year_1").slideUp();
    $("#year_2").slideToggle("slow");
    $("#year_3").slideUp();
    $("#year_4").slideUp();
  });

  $("#year_3_main").click(function() {
    $("#year_1").slideUp();
    $("#year_2").slideUp();
    $("#year_3").slideToggle("slow");
    $("#year_4").slideUp();
  })

  $("#year_4_main").click(function() {
    $("#year_1").slideUp();
    $("#year_2").slideUp();
    $("#year_3").slideUp();
    $("#year_4").slideToggle("slow");
  })

});

