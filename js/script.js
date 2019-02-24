var openFormButton = document.querySelector(".search-hotel");
var searchForm = document.querySelector(".form-wrapper");
var checkInForm = document.querySelector("check-in-form");


openFormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle("show-popup");
  });


