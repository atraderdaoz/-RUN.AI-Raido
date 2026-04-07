const player = document.getElementById("player");
const statusText = document.getElementById("status");
const stationSelect = document.getElementById("stationSelect");

// 🔥 REPLACE WITH YOUR LIVE BACKEND
const API_BASE = "https://YOUR_BACKEND_URL";

async function playStation() {
  const station = stationSelect.value;

  try {
    statusText.innerText = "📡 Connecting to " + station + "...";

    const res = await fetch(`${API_BASE}/station/${station}/stream`);
    const data = await res.json();

    // Play audio
    player.src = data.audio;
    await player.play();

    statusText.innerText = "🎧 Now Playing: " + station;

  } catch (err) {
    console.error(err);
    statusText.innerText = "⚠️ Error loading station";
  }
}

// Auto next
player.addEventListener("ended", playStation);

// Change station
stationSelect.addEventListener("change", playStation);

// Start
playStation();
