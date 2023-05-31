const setEmail = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  document.querySelector("#email").innerHTML = urlParams.get("email");
};

document.addEventListener("DOMContentLoaded", function () {
  setEmail();
});
