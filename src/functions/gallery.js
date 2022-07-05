export function handleGallery(activeImg, setActiveImg, numberImg, action) {
  if (action === 'next') {
    activeImg === numberImg ? setActiveImg(1) : setActiveImg(activeImg + 1);
  }

  if (action === 'previous') {
    activeImg === 1 ? setActiveImg(numberImg) : setActiveImg(activeImg - 1);
  }
}

/* - Auto Gallery - */
let interval = null;

function animateImg(img) {
  img.classList.remove('activeImg');

  // add delay to have the transition
  setTimeout(() => {
    img.classList.add('activeImg');
  }, 100);
}

function runGallery(time, gallery) {
  const next = gallery.getElementsByClassName('arrow-container')[1];

  interval = setInterval(() => {
    next.click();
  }, time);
}

export function autoGallery(time) {
  const gallery = document.getElementsByClassName('gallery')[0];
  const firstImg = gallery.getElementsByTagName('img')[0];

  // Check if autoGallery has already run, if not run
  if (gallery.getAttribute('data-auto') === null) {
    gallery.setAttribute('data-auto', 'true');

    // add and remove the class on the first img to see the transition
    animateImg(firstImg);

    runGallery(time, gallery);

    gallery.addEventListener('mouseover', () => {
      clearInterval(interval);
    });

    gallery.addEventListener('mouseout', () => {
      runGallery(time, gallery);
    });
  }
}
