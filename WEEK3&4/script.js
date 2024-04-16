document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#text");
    const button = document.querySelector("#button");
    const displayText = document.querySelector("#displayText");
    input.addEventListener("keyup", () => {
        displayText.textContent = input.value;
    });
});