const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const experience = document.getElementById("experience");
const textBox = document.getElementById("textBox");
const vine = document.querySelector(".vine");
const music = document.getElementById("bgMusic");

const lines = [
  "That afternoon when I met you,<br>I never thought we would come this far.",
  "That feeling your eyes and your smile give me,<br>the silent calls in the middle of the night,",
  "have awakened something very beautiful in me.",
  "Maybe I’m not as handsome as Ellie Kalogra’s boyfriend,<br>but at least I’m kind of crazy… or maybe a little more.",
  "Your crazy one",
  "Happy Birthday Mi Corazón"
];

const durations = [7000, 7000, 6000, 9000, 5000, 8000];

function showLine(index) {
  if (index >= lines.length) return;

  vine.classList.remove("animate");
  void vine.offsetWidth;
  vine.classList.add("animate");

  textBox.classList.remove("show");

  setTimeout(() => {
    textBox.innerHTML = lines[index];
    textBox.classList.add("show");
  }, 900);

  setTimeout(() => {
    showLine(index + 1);
  }, durations[index]);
}

startBtn.addEventListener("click", async () => {
  intro.classList.add("hidden");
  experience.classList.remove("hidden");

  try {
    music.volume = 0.45;
    await music.play();
  } catch (error) {
    console.log("Audio playback needs user interaction.", error);
  }

  showLine(0);
});
