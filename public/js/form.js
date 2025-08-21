/* const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.classList.add("was-validated");
    return;
  }

  // Show the modal if form is valid
  const successModal = new bootstrap.Modal(document.getElementById("successModal"));
  successModal.show();

  contactForm.reset();
  contactForm.classList.remove("was-validated");
}); */

// const contactForm = document.getElementById("contactForm");

// contactForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (!contactForm.checkValidity()) {
//     contactForm.classList.add("was-validated");
//     return;
//   }
//   // Prepare form data
//   const formData = new FormData(contactForm);
//   console.log("Form data prepared:", formData);


  // Send email using FormSubmit
//   fetch("https://formsubmit.co/caa32a81d7488c64b6648758555a4377", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//     },
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Show success modal if email sent
//         const successModal = new bootstrap.Modal(
//           document.getElementById("successModal")
//         );
//         successModal.show();
//         contactForm.reset();
//         contactForm.classList.remove("was-validated");
//       } else {
//         alert("❌ Error: Unable to send message. Please try again.");
//       }
//     })
//     .catch(() => {
//       alert("❌ Network error. Please check your connection and try again.");
//     });
// });

var emailField = document.getElementById("email");
var subjectEmail = document.getElementById("subject");
let errorMessage = document.getElementById("emailerror");

function validateEmail(){
    if(!emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)){
        errorMessage.style.display = "block";
        return false;
    }else{
        errorMessage.style.display = "none";
        return true;
    }
}

function validateName(){
    var nameEmail = document.getElementById("fname").value;
    if(/^[A-Za-z\s]+$/.test(nameEmail) && (nameEmail.match(/[A-Za-z]/g) || []).length >= 3){
        nameChecker = true;
        errorMessage.style.display = "none";
        return true;
    }else{
        nameChecker = false;
        errorMessage.innerText = "The Name Must Be Contain 3 Characters";
        errorMessage.style.display = "block";
        return false;
    }
    
}

function validateMessage() {
    var message = document.getElementById("subject").value.trim();

    if (message.length >= 2) {
        messageChecker = true;
        errorMessage.style.display = "none"
        return true;
    } else {
        messageChecker = false;
        errorMessage.innerText = "Write any message";
        errorMessage.style.display = "block"
        return false;
    }
}




















  let contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", sendEmail)


  function sendEmail(e) {
    e.preventDefault(); // Prevent form submission default behavior

    let params = {
      name: document.getElementById("yourName").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
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