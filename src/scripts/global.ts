export let scrollY = window.scrollY;
export let isScrollStopped = false;

export const disableScroll = () => {
  // Get the current page scroll position
  scrollY = window.scrollY || document.documentElement.scrollTop;
  isScrollStopped = true;

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(0, scrollY);
  };
};

export const enableScroll = () => {
  window.onscroll = function () {};
  isScrollStopped = false;
};

export const storeScroll = (scrollPos?: number) => {
  // scrollY = window.scrollY;
  scrollY = scrollPos || window.scrollY;
  if (scrollPos && scrollY > scrollPos) scrollY = scrollPos;
  document.documentElement.style.setProperty(
    '--scroll',
    (scrollY / (document.body.offsetHeight - window.innerHeight)).toString(),
  );
};

export const scrollBySection = (e: WheelEvent) => {};