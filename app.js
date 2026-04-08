const player = document.getElementById("player");
const statusText = document.getElementById("status");
const stationSelect = document.getElementById("stationSelect");

// ✅ Your live backend
const API_BASE = "https://backend-production-ed9e.up.railway.app";

// 🔥 PLAY FUNCTION
async function playStation() {
  try {
    const station = stationSelect.value;

    statusText.innerText = "📡 Connecting...";

    const res = await fetch(`${API_BASE}/station/${station}/stream`);
    const data = await res.json();

    player.src = data.audio;

    await player.play();

    statusText.innerText = "🎧 Now Playing: " + station;

  } catch (err) {
    console.error("Error:", err);
    statusText.innerText = "⚠️ Playback error";
  }
}

// 🔁 Replay when finished
player.addEventListener("ended", playStation);

// 🔄 Change station
stationSelect.addEventListener("change", playStation);

---

## 🔥 STEP 5 — ADD THIS AT THE BOTTOM

document.body.addEventListener("click", () => {
  player.play().catch(() => {});
}, { once: true });

---

// 🚀 Start
playStation();
