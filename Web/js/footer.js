$(function () {
  $.ajax({
    url: "footer.html",
    type: "get",
    success: function (data) {
      $(data).replaceAll("#footer");
      $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
    }
  })
})