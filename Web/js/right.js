$(function () {
  $.ajax({
    url: "right.html",
    type: "get",
    success: function (data) {
      $(`<link rel="stylesheet" href="css/right.css">`).appendTo("head");
      $(data).replaceAll("#right");
      $("#top").click(function () {
        $(document).scrollTop(0);
      })
    }
  });
  
  $(window).scroll(function () {
    if ($(document).scrollTop() > 500) {
      $("#top").show();
    } else {
      $("#top").hide();
    }
  })
})
