document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click',() => {alert("${image.alt");
    });
});// script.js
document.querySelectorAll('.image').forEach((image) => {
  image.addEventListener('click', () => {
    alert('Ciee ngeklick');
  });
});

function playMusic() {
  const music = document.getElementById('backgroundMusic');
  music.play();
}
