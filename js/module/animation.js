export default function animation() {
  const targets = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';

  const throttle = (func, limit) => {
    let inThrottle = false;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  };

  const animeScroll = () => {
    const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
    targets.forEach((element) => {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  };

  if (targets.length) {
    window.addEventListener(
      'scroll',
      throttle(() => {
        animeScroll();
      }, 50)
    );
  }
}