document.addEventListener("DOMContentLoaded", function () {
  validateForm();

  const email = document.querySelector("#email");
  email.addEventListener("input", function (event) {
    setEmailError(false);
  });
});

const validateForm = () => {
  const form = document.querySelector("#form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email");
    const regex = /\S+@\S+\.\S+/;

    console.log("Email: ", regex.test(email.value));

    if (email.value === "" || !regex.test(email.value)) {
      console.log("Email is invalid");
      setEmailError(true);
    } else {
      window.location.href = `success.html?email=${email.value}`;
    }
  });
};

setEmailError = (set) => {
  const email = document.querySelector("#email");
  const label = document.querySelector(".form__label");

  if (set) {
    email.classList.add("error");
    label.classList.add("error");
  } else {
    email.classList.remove("error");
    label.classList.remove("error");
  }
};
