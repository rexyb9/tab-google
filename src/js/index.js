function search() {
  let { value } = document.getElementById("searchInput");

  const c = confirm("url or text, ok for url cancel for text");

  document.addEventListener("keydown", (r) => {
    if (r.key == "Enter") c;
  });

  if (c) location.replace(`https://${value}`);
  if (!c) {
    const baseUrl = "https://google.com/search?q=";

    if (!value) value = "bocil programer";

    location.replace(baseUrl + value);
  }
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
  let jams = "";
  let menit = "";
  let detik = "";

  date.getHours() < 10
    ? (jams = `0${date.getHours()}`)
    : (jams = date.getHours());
  date.getMinutes() < 10
    ? (menit = `0${date.getMinutes()}`)
    : (menit = date.getMinutes());
  date.getSeconds() < 10
    ? (detik = `0${date.getSeconds()}`)
    : (detik = date.getSeconds());
  jam.textContent = `${jams}:${menit}:${detik}`;
});
