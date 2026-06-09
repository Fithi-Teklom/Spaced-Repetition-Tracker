
window.addEventListener("DOMContentLoaded", () => {
const dateInput = document.querySelector("#start-date");
const today = new Date();
const formattedDate = today.toISOString().split("T")[0];

dateInput.value = formattedDate;
});
