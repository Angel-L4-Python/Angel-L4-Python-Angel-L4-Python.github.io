let currentEmbed = 0;

function changeEmbed(direction) {
  const vids = document.querySelectorAll('.embed');
  const totalVids = vids.length;
  currentEmbed = (currentEmbed + direction + totalVids) % totalVids;
  document.querySelector('.vids').style.transform = `translateX(-${currentEmbed * 100}%)`;
}

document.querySelectorAll('.embed').forEach(embed => {
  embed.addEventListener('click', () => {
    const video = embed.querySelector('.video');
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    }
  });
});
