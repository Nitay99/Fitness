const video = document.querySelector('.video');
const buttonPlay = document.querySelector('.video__button');
const userAgent = navigator.userAgent.toLowerCase();
const browChrome = /chrome/.test(userAgent);

const createFrame = () => {
  if (video) {
    let fr = document.createElement('iframe');
    if (browChrome) {
      fr.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&mute=1';
    } else {
      fr.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';
    }
    fr.setAttribute('frameborder', '0');
    fr.setAttribute('width', '100%');
    fr.setAttribute('height', '100%');
    video.innerHTML = '';
    video.appendChild(fr);
  }
};

const setPlayClickHandler = () => {
  if (buttonPlay) {
    buttonPlay.addEventListener('click', createFrame);
  }
};

export {setPlayClickHandler};
