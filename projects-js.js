jQuery(document).ready(function($) {
  $("#semester_1_js").click(function() {
    $("#semester_1").slideToggle("slow");
    $("#semester_2").slideToggle("slow");
    $("#semester_3").slideUp();
    $("#semester_4").slideUp();
  });

  $("#semester_2_js").click(function() {
    $("#semester_1").slideToggle("slow");
    $("#semester_2").slideToggle("slow");
    $("#semester_3").slideUp();
    $("#semester_4").slideUp();
  });

  $("#semester_3_js").click(function() {
    $("#semester_1").slideUp();
    $("#semester_2").slideUp();
    $("#semester_3").slideToggle("slow");
    $("#semester_4").slideToggle("slow");
  })

  $("#semester_4_js").click(function() {
    $("#semester_1").slideUp();
    $("#semester_2").slideUp();
    $("#semester_3").slideToggle("slow");
    $("#semester_4").slideToggle("slow");
  })

});

