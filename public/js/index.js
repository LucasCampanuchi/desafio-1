document.addEventListener("DOMContentLoaded", function () {
  validateForm();
  dismiss();
});

const validateForm = () => {
  const form = document.querySelector("#form");
  const email = document.querySelector("#email");

  email.addEventListener("input", function (event) {
    setEmailError(false);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const regex = /\S+@\S+\.\S+/;

    if (email.value === "" || !regex.test(email.value)) {
      setEmailError(true);
      return;
    }

    setVisible();
    setActive();

    email.value = "";
    document.querySelector("#email-display").innerHTML = email.value;
  });
};

setEmailError = (set) => {
  const email = document.querySelector("#email");
  const label = document.querySelector(".form__label");

  if (set) {
    email.classList.add("error");
    label.classList.add("error");
    return;
  }

  email.classList.remove("error");
  label.classList.remove("error");
};

setVisible = () => {
  document.querySelector(".section__form").classList.toggle("visible");
  document.querySelector(".section__success").classList.toggle("visible");
};

setActive = () => {
  setTimeout(() => {
    document.querySelector(".section__form").classList.toggle("active");
    document.querySelector(".section__success").classList.toggle("active");
  }, 100);
};

dismiss = () => {
  const dismissButton = document.querySelector("#dismiss");

  dismissButton.addEventListener("click", function (event) {
    setVisible();
    setActive();
  });
};
