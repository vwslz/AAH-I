// $('#login-btn').on('click', function (e) {
//   $('#loginModal').modal('toggle')
// });

$('#btn-like').click(function () {
    $(this).toggleClass('fas fa-hearte');
});

$("input[name='donations']").change(function(){
    document.getElementById("donation-val").value = this.value;
});

$(document).ready(function() {
    $("#donation-vals").first().button("toggle");
});
