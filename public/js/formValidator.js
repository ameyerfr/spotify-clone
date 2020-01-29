const sendForm = document.getElementById("send-form");
const formSubmit = document.getElementById("send-form-submit")
formSubmit.onclick = function(e) {

  let formInputs = sendForm.elements;

  // If there is no quote filled
  if(formInputs[0].value === "") {
    e.preventDefault();
    alert("You cant send a blank Quote !");
  }

  // Otherwise, dont stop form from POSTING (Source is optional)

  sendForm.style.display = 'none';
  alert("Thanks for your contribution !");
}
