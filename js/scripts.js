function hideResultsAndError() {
    document.getElementById("error-message").setAttribute("class", "hidden");
    document.getElementById("snickers").setAttribute("class", "hidden");
    document.getElementById("twix").setAttribute("class", "hidden");
    document.getElementById("chocolate-orange").setAttribute("class", "hidden");
    document.getElementById("skittles").setAttribute("class", "hidden");
    document.getElementById("milkyway").setAttribute("class", "hidden");
    document.getElementById("payday").setAttribute("class", "hidden"); 
    document.getElementById("trail-mix").setAttribute("class", "hidden");
    document.getElementById("foot").setAttribute("class","hidden");
    document.getElementById("choco").setAttribute("class","hidden");
    document.getElementById("werthers").setAttribute("class","hidden");
    document.getElementById("almonds").setAttribute("class","hidden");
}

window.onload= function(){
  hideResultsAndError();
    document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      hideResultsAndError();
      const chocolate = document.querySelector("input#chocolate").checked;
      const nuts = document.querySelector("input#nuts").checked;
      const caramel = document.querySelector("input#caramel").checked;
      const fruity = document.querySelector("input#fruity").checked;

      if (chocolate && nuts && caramel) {
        document.getElementById("snickers").removeAttribute("class");
      } else if (chocolate && caramel) {
        document.getElementById("milkyway").removeAttribute("class");
        document.getElementById("twix").removeAttribute("class");
      } else if (chocolate && fruity) {
        document.getElementById("chocolate-orange").removeAttribute("class");
      } else if (chocolate) {
        document.getElementById("choco").removeAttribute("class");
      } else if (nuts && caramel) {
        document.getElementById("payday").removeAttribute("class");
      } else if (nuts && fruity) {
        document.getElementById("trail-mix").removeAttribute("class");
      } else if (fruity) {
        document.getElementById("foot").removeAttribute("class");
        document.getElementById("skittles").removeAttribute("class");
      } else if (caramel) {
        document.getElementById("werthers").removeAttribute("class");
      }

    };
  };