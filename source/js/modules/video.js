const video = document.querySelector('.video');
const buttonPlay = document.querySelector('.video__button');

function createFrame() {
  let fr = document.createElement('iframe');
  fr.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
  fr.setAttribute('frameborder', '0');
  fr.setAttribute('width', '100%');
  fr.setAttribute('height', '100%');
  video.innerHTML = '';
  video.appendChild(fr);
}

const setPlayClickHandler = () => {
  buttonPlay.addEventListener('click', createFrame);
};

export {setPlayClickHandler};
