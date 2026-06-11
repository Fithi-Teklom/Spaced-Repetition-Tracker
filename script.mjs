import { getData, addData } from "./storage.mjs";
import { calculateRevisionDates } from "./common.mjs";

window.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.querySelector("#start-date");
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const userSelect = document.querySelector("#user-select");
  const agendaContainer = document.querySelector("#agenda-container");

  const form = document.querySelector("#topic-form");
  const topicInput = document.querySelector("#topic");

  dateInput.value = formattedDate;

  function renderAgenda(userId) {
    const agenda = getData(userId);
    
    if (!agenda || agenda.length === 0) {
      agendaContainer.textContent = "No agenda found for this user.";
      return;
    }
    agendaContainer.innerHTML ="";
  }

  userSelect.addEventListener("change", () => {
    const userId = userSelect.value;

    if (!userId) {
      agendaContainer.textContent = "";
      return;
    }
    renderAgenda(userId);
  });

  form.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const userId = userSelect.value;
    const topic = topicInput.value;
    const startDate = dateInput.value;

    if (!userId) {
      alert("Please select a user.");
      return;
    }
    const revisionDates = calculateRevisionDates(startDate);
    const topicData = { topic, revisionDates };
  });
});
