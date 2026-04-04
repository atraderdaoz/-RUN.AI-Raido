const player = document.getElementById("player");
const statusText = document.getElementById("status");
const stationSelect = document.getElementById("stationSelect");

// 🔥 CHANGE THIS
const API_BASE = "https://YOUR_BACKEND_URL";

async function playStation() {
  const station = stationSelect.value;

  try {
    statusText.innerText = "📡 Connecting to " + station + "...";

    const res = await fetch(`${API_BASE}/station/${station}/stream`);
    const data = await res.json();

    player.src = data.audio;
    player.play();

    statusText.innerText = "🎧 Now Playing: " + station;

  } catch (err) {
    statusText.innerText = "⚠️ Connection error";
    console.error(err);
  }
}

// Auto play next
player.addEventListener("ended", playStation);

// Change station
stationSelect.addEventListener("change", playStation);

// Start
playStation();
