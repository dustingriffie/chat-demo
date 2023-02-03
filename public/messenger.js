const form = document.querySelector("form");
const input = document.querySelector("input");
const messagesList = document.querySelector(".messages-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = input.value;
  input.value = "";

  fetch("/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
