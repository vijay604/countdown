const endDate = "27 Aug 2023 3:00 PM";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAl("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff) % 60;
}
clock();

setInterval(() => {
  clock();
}, 1000);
