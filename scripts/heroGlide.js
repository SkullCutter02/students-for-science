if (document.querySelector(".glide")) {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    animationDuration: 2000,
    autoplay: 4500,
    hoverpause: false,
    swipeable: false,
    gap: 0,
  }).mount();
}
