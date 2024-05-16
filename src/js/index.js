function search() {
  let { value } = document.getElementById("searchInput");

  const baseUrl = "https://google.com/search?q=";

  if (!value) value = "bocil programer";
  location.replace(baseUrl + value);
}

const date = new Date();
const lang = (navigator.language = "id");
const bulan = document.getElementById("bulan");
const hari = document.getElementById("hari");
const tanggal = document.getElementById("tanggal");
const tahun = document.getElementById("tahun");
bulan.textContent = date.toLocaleDateString(lang, { month: "long" });
tanggal.textContent = date.getDay();
hari.textContent = date.toLocaleDateString(lang, { weekday: "long" });
tahun.textContent = date.getFullYear();

setInterval(() => {
  const date = new Date();
  const jam = document.getElementById("jam");
  jam.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
});
