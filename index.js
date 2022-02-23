function terms_changed(termsCheckBox){
    if(termsCheckBox.checked){
        document.getElementById("submit_button").disabled = false;
    } else{
        document.getElementById("submit_button").disabled = true;
    }
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);

            this.classList.toggle("bi-eye");
        });

        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });
        function scrollToTop() {
                    $(window).scrollTop(0);
                }

$(document).ready(function(){
    $(".bgBtn").click(function(){
        var imageUrl = "bg.png";
        $(".box").css("background-image", "url(" + imageUrl + ")");
    });
});
var maxLength = 15;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});
$( "p:last" ).click(function() {
  $( this ).fadeTo( "slow", 0.50 );
});
$( "#btn1" ).click(function() {
  $( "#box" ).animate({
   width: "300px",
   height: "300px",
    }, 1500 );
});

$( "#btn2" ).click(function() {
  $( "#box" ).animate({
   width: "100px",
   height: "100px",
    }, 1500 );
})