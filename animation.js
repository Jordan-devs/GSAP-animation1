var tl = gsap.timeline();

tl.from("#demo", { duration: 1, opacity: 0 });
tl.from("#title", { duration: 1, opacity: 0, ease: "back", scale: 0.5 });
tl.from("#freds img", {
  duration: 0.8,
  opacity: 0,
  stagger: { amount: 1 },
  ease: "back",
  y: 100,
});
tl.from(
  "#time",
  { duration: 0.4, opacity: 0, ease: "back", xPercent: 100 },
  "<"
);

const play = (document.getElementById("play").onclick = () => tl.play());
const pause = (document.getElementById("pause").onclick = () => tl.pause());
const reverse = (document.getElementById("reverse").onclick = () =>
  tl.reverse());
const resume = (document.getElementById("resume").onclick = () => tl.resume());
const restart = (document.getElementById("restart").onclick = () =>
  tl.restart());
