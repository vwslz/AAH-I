// $('#login-btn').on('click', function (e) {
//   $('#loginModal').modal('toggle')
// });

$('#btn-like').click(function () {
    $(this).toggleClass('fas fa-hearte');
});

$('#donation-vals').click(function() {
  var id = $('#donation-vals input:radio:checked')[0].getAttribute("id");
  inputVal = document.getElementById("donation-val");
  inputVal.value = id.split("-")[1];
})
