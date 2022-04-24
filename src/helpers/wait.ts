export const wait = (delay: number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, delay);
});
