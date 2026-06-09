import { getData } from "./storage.mjs";

window.addEventListener("DOMContentLoaded", () => {

const dateInput = document.querySelector("#start-date");
const today = new Date();
const formattedDate = today.toISOString().split("T")[0];

const userSelect = document.querySelector("#user-select");
const agendaContainer = document.querySelector("#agenda-container");

dateInput.value = formattedDate;

userSelect.addEventListener("change", () =>{
    const userId = userSelect.value;

    if (!userId) {
        agendaContainer.textContent="";
        return;
    }
    const agenda = getData(userId);

    if(!agenda || agenda.length === 0){
        agendaContainer.textContent ="No agenda found for this user."
    }
})
});
