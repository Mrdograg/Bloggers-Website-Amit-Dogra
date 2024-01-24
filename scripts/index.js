document.querySelector(".login-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});
