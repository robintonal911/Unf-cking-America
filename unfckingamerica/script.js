const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getSpeed: true,
    getDirection: true,
    appear: true,
});




const vid = document.querySelector(".bgvid2")
const txt = document.querySelector(".h1parent")
const load = document.querySelector("div.loader")
const arrow = document.querySelector(".arrowgroup")

document.querySelector("#play").addEventListener("click", () => {
    document.querySelector("#eclipse").play();
    document.querySelector("#fullvid").play();
    document.getElementById("beyhive").play();
    vid.classList.toggle("appear1")
    txt.classList.toggle("appear2")
    load.classList.toggle("appear3")
    arrow.classList.toggle("arrowappear")
  });

  document.querySelector("#tester").addEventListener("click", () => {
    document.getElementById("soundcheck").play();
  });


