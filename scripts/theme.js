console.log("Theme script loaded.");

const button = document.querySelector("#theme-toggle");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        button.textContent = "Switch to Light Theme";
    } else {
        button.textContent = "Switch to Dark Theme";
    }
});



