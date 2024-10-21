let currentFotoIndex = 0;

const fotoArray = [
      // Ganti dengan path foto pertama
    "foto/foto2.jpg",  // Ganti dengan path foto kedua
    "foto/foto3.jpg",  // Ganti dengan path foto ketiga
    "foto/foto4.jpg",
    "foto/foto5.jpg",
    "foto/foto6.jpg",
    "foto/foto7.jpg",
    "foto/foto8.jpg",
    "foto/foto9.jpg",
    "foto/foto10.jpg"  // Ganti dengan path foto keempat
];

function gantiFoto(direction) {
    currentFotoIndex += direction;

    // Cek agar index tetap dalam rentang array
    if (currentFotoIndex < 0) {
        currentFotoIndex = fotoArray.length - 1;
    }
    if (currentFotoIndex >= fotoArray.length) {
        currentFotoIndex = 0;
    }

    document.getElementById('fotoPacar').src = fotoArray[currentFotoIndex];
}

function playMusic() {
    const music = document.getElementById('backgroundMusic');
    music.play();
}
