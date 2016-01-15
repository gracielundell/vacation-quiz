$(document).ready(function() {
  $("form").submit(function(event) {
    //add vars for diff id tags
    //var total = add up all answers
    var question1 = parseInt($("select#sell1").val());
    var question2 = parseInt($("select#sell2").val());
    var question3 = parseInt($("select#sell3").val());
    var question4 = parseInt($("select#sell4").val());
    var question5 = parseInt($("select#sell5").val());
    var question6 = parseInt($("select#sell6").val());

    var total = question1 + question2 + question3 + question4 + question5 + question6;
    console.log("total = ", total);

    //if/else branches based on where answer falls in a range
    // if total <= 5 ....
    // else if total <= 10 && total >= 6 ....
    if (total <= 6) {
      $(".amazon").show();
    }
    else if (total === 6 || total <= 12) {
      $(".nepal").show();
    }
    else if (total === 13 || total <= 18) {
      $(".oregon").show();
    }
    else if (total === 19 || total <= 24) {
      $(".jamaica").show();
    }


    event.preventDefault();

  });
});
