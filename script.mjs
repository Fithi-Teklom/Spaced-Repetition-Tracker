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
    agendaContainer.innerHTML = "";

    const revisionItems = [];
    for (const topicData of agenda) {
      for (const rawDate of topicData.revisionDates) {
        const date = new Date(rawDate);
        revisionItems.push({
          topic: topicData.topic,
          date: date,
        });
      }
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const futureItems = revisionItems.filter((item) => {
      const revisionDate = new Date(item.date);
      revisionDate.setHours(0, 0, 0, 0);
      return revisionDate >= today;
    });
    if (futureItems.length === 0) {
      agendaContainer.textContent = "No agenda found for this user.";
      return;
    }
    futureItems.sort((a, b) => new Date(a.date) - new Date(b.date));
    for (const item of futureItems) {
      const p = document.createElement("p");
      const formattedRevisionDate = new Date(item.date).toLocaleDateString(
        "en-GB",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        },
      );
      p.textContent = `${item.topic} - ${formattedRevisionDate}`;
      agendaContainer.appendChild(p);
    }
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

    addData(userId, [topicData]);
    renderAgenda(userId);
    topicInput.value = "";
    dateInput.value = formattedDate;
  });
});
