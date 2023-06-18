export default function animation() {
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';

  const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const animeScroll = () => {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  };

  if (target.length) {
    window.addEventListener(
      'scroll',
      throttle(() => {
        animeScroll();
      }, 50)
    );
  }
}