const player = document.getElementById("player");
const statusText = document.getElementById("status");
const stationSelect = document.getElementById("stationSelect");

// 🔥 REPLACE WITH YOUR LIVE BACKEND
const API_BASE = "https://backend-production-ed9e.up.railway.app";

async function playStation() {
  try {
    const res = await fetch(`${API_BASE}/station/custom/stream`);
    const data = await res.json();

    player.src = data.audio;

    await player.play();

    console.log("Playing:", data.audio);

  } catch (err) {
    console.error("Error:", err);
  }
}

// Auto next
player.addEventListener("ended", playStation);

// Change station
stationSelect.addEventListener("change", playStation);

// Start
playStation();
