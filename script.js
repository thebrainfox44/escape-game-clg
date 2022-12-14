document.getElementById("files").addEventListener("click", () => {
  document.getElementById("files").style.zIndex = 50;
});

document.addEventListener('keydown', fs());

function fs() {
  setTimeout(() => {
    document.getElementById("fs").requestFullscreen();
  }, 100);
}
