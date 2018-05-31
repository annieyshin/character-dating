// BUSINESS LOGIC

// USER INTERFACE
$(document).ready(function() {
  // $("#nameinput").submit(function() {
  //   $(".name1").text(varname);
  // });
  var age = parseInt(prompt("How old are you?"));

    if (age >= 18) {
      $('#over18').show();
    } else {
        $('#under18').show();
    }
  });

  // $("form#sexual").submit(function() {
  //   var sex = $("select#sexualpick").val();
  //
  //     if (sex === 'gay') {
  //       $('#gaybox').show();
  //     } else {
  //         $('#straightbox').show();
  //     }
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
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
