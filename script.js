window.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('background-video');
    video.style.width = window.innerWidth + 'px';
    video.style.height = window.innerHeight + 'px';
  
    window.addEventListener('resize', () => {
      video.style.width = window.innerWidth + 'px';
      video.style.height = window.innerHeight + 'px';
    });
  });