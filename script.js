//----------animacion Mousemove--------//
const d = document

const $home = d.getElementById("Home")
$home.addEventListener("mousemove", parallax);

function parallax(event) {

  this.querySelectorAll("#Home img").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}


//--------Animacion Observer-------//
(()=>{
const $observer = document.querySelectorAll(".Observer")
const $avion = document.getElementById("Avion")


const cargarAnimcaionObserver = (entradas, observador)=>{

  entradas.forEach(element => {
    if (element.isIntersecting)
    element.target.classList.add("Observer-animacion")

    if(element.target == $observer[2]){
      $avion.style.left = "-400px"
    }
    
  });

}

const observador = new IntersectionObserver(cargarAnimcaionObserver,{
      threshold : 1.0,
})

$observer.forEach( el => observador.observe(el))

})();


// -----------Animacion scroll --------

let activeScroll=false
const sobreMi = document.getElementById("Sobre-mi")
const $barco = document.getElementById("Barco-pirata")
const $tiburon = document.getElementById("Tiburon")
const $isla = document.getElementById("Isla")
const $lago = document.getElementById("Lago")
const empezarAnimacionScroll = (entradas)=>{
  
  entradas.forEach(element=>{
    
    if(element.isIntersecting){
      activeScroll = true
    } else{
      activeScroll = false
    }

    window.addEventListener("scroll",e=>{
      if(activeScroll){

        let value = window.scrollY;
        $barco.style.left = value * 0.25 +"px";
        $barco.style.top = "calc("+300+"% - "+value*0.06+"px)"
        $tiburon.style.left= "calc("+150+"% - "+value*0.8+"px)"
        $isla.style.top = "calc("+140+"% + "+value*0.3+"px)"
        $lago.style.top = "calc("+250+"% + "+value*0.1+"px)"
        console.log("s")
        
      }
  })

  })

}

const observador = new IntersectionObserver(empezarAnimacionScroll)

observador.observe(sobreMi)



