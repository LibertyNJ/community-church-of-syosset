exports.onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    require(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
