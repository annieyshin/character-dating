// BUSINESS LOGIC

// USER INTERFACE
$(document).ready(function() {
  $("#nameinput").submit(function() {
    $(".name1").text(varname);
  });

  $("#submit").click(function(e) {
    e.preventDefault();
    var varfoods = parseInt($("#foods").val());
    var varmusic = parseInt($("#music").val());
    var varcolor = parseInt($("#color").val());
    var varanimal = parseInt($("#animal").val());
    var varmovie = parseInt($("#movie").val());
    var varbook = parseInt($("#book").val());
    var result = varfoods + varmusic + varcolor + varanimal + varmovie + varbook;
    console.log(varfoods);
    $("#output").text(result);
  });
});
