const $home = document.getElementById("Home")
$home.addEventListener("mousemove", parallax);
function parallax(event) {

  this.querySelectorAll("#Home img").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}