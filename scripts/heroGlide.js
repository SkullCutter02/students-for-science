if (document.querySelector(".glide")) {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    animationDuration: 1500,
    autoplay: 6000,
    hoverpause: false,
    swipeable: false,
    gap: 0,
  }).mount();
}
