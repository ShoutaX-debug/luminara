window.addEventListener('load', () => {
  const audio = document.getElementById('bgAudio');
  audio.volume = 0.5;
  audio.play().catch(() => {
    console.log('Autoplay diblokir di HP, coba interaksi user.');
  });
});
