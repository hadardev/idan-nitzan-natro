var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-80px";
    document.getElementById("navBar").style.transition = "0.5s";
  }
  prevScrollpos = currentScrollPos;
};
