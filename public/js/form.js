
function validateEmail(){
    var emailField = document.getElementById("email").value;
    let emailError = document.getElementById("emailerror");
    if(!emailField.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)){
        emailError.style.display = "block";
        return false;
    }else{
        emailError.style.display = "none";
        return true;
    }
}

function validateName(){
    var nameEmail = document.getElementById("yourName").value;
    let nameError = document.getElementById("nameerror");
    if(/^[A-Za-z\s]+$/.test(nameEmail) && (nameEmail.match(/[A-Za-z]/g) || []).length >= 3){
        nameError.style.display = "none";
        return true;
    }else{
        nameError.style.display = "block";
        return false;
    }
    
}

function validateMessage() {
    var message = document.getElementById("message").value.trim();
    var messageError = document.getElementById("messageerror");


    var words = message.split(/\s+/).filter(word => word.length > 0);


    var hasThreeWords = words.length >= 3;
    var allNumbers = /^[0-9\s]+$/.test(message);

    if (hasThreeWords && !allNumbers) {
        messageError.style.display = "none";
        return true;
    } else {
        messageError.style.display = "block";
        return false;
    }
}

function validatePhone(){
    var phoneField = document.getElementById("phone");
    var phoneError = document.getElementById("phoneerror");

    if(!phoneField.value.match(/^\+91[0-9]{10}$/)){
        phoneError.style.display = "block";
        return false;
    }else{
        phoneError.style.display = "none";
        return true;
    }
}


  let contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", formChecker)
function formChecker(e){

    e.preventDefault();

    validateEmail();
    validateName();
    validateMessage();
    validatePhone();

    if(validateEmail() && validateName() && validateMessage() && validatePhone()){
        sendEmail();
    }
}

  function sendEmail() {
    let params = {
      name: document.getElementById("yourName").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      time: document.getElementById("phone").value,
    };

    emailjs
      .send("service_tfoybjk", "template_m8g2sim", params)
      .then(
        function (response) {
          const successModal = new bootstrap.Modal(document.getElementById("successModal"));
          successModal.show();
          contactForm.reset();
        },
        function (error) {
          alert("Failed to send email. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  }