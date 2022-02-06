/* validateForm.js - Jalen Mendonca - 301098614 - 02/05/2022 */

function validateForm() {
    var x = document.forms["contactForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }