let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.transform = "translateY(0)";
      document.getElementById("navbar").style.opacity = "1";
    } else {
      document.getElementById("navbar").style.transform = "translateY(-100%)";
      document.getElementById("navbar").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
  }