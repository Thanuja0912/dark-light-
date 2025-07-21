
const themeToggle=document.querySelector(".light-dark i");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.classList.toggle("fa-moon");
    themeToggle.classList.toggle("fa-sun");
});