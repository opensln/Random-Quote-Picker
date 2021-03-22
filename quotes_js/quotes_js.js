function RandomQuote() {

  var randomNumber = Math.random() * 12;
 
  var QN = Math.floor(randomNumber);

  var postQuote = document.getElementsByClassName("HiddenQuote")[QN].innerHTML;

  document.getElementById("mainQuoteBox").innerHTML = postQuote;

  var postImg = document.getElementsByClassName("HiddenImage")[QN].innerHTML;

  document.getElementById("pictureDiv").innerHTML = ""; //clear landing message

  document.getElementById("pictureDiv").style =
    "background-image: url('./img/authors/" +
    postImg +
    "') ; background-size: cover; background-repeat: no-repeat; overflow: hidden;";

  document.getElementById(
    "authorReveal"
  ).innerHTML = document.getElementsByClassName("authorq")[QN].innerHTML;
}
