$(function () {
  $.ajax({
    url: "header.html",
    type: "get",
    success: function (data) {
      $(data).replaceAll("#header");
      $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    }
  })
})