export function handleGallery(activeImg, setActiveImg, numberImg, action) {
  if (action === 'next') {
    activeImg === numberImg ? setActiveImg(1) : setActiveImg(activeImg + 1);
  }

  if (action === 'previous') {
    activeImg === 1 ? setActiveImg(numberImg) : setActiveImg(activeImg - 1);
  }
}

let interval = false;

export function autoGallery(time) {
  const next = document.getElementsByClassName('arrow-container')[1];
  const gallery = document.getElementsByClassName('gallery')[0];

  if (!interval) {
    interval = setInterval(() => {
      next.click();
    }, time);
  }

  gallery.addEventListener('mouseover', () => {
    clearInterval(interval);
    interval = false;
  });

  gallery.addEventListener('mouseout', () => {
    if (!interval) {
      interval = setInterval(() => {
        next.click();
      }, time);
    }
  });
}
