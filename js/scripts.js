// BUSINESS LOGIC


//
// var varcolor = $("#color").val();
//
// var varshow = $("#show").val();
// var varbook = $("#book").val();
//
// var varname = $("input#name1").val();

// USER INTERFACE
$(document).ready(function() {
  $("#nameinput").submit(function() {
    $(".name1").text(varname);
  });

  $("#submit").click(function(e) {
    e.preventDefault();
    var varfoods = parseInt($("#foods").val());
    var varmusic = parseInt($("#music").val());
    var varanimal = parseInt($("#animal").val());
    var result = varfoods + varmusic + varanimal;
    console.log(varfoods);
    $("#output").text(result);
  });
});
