AOS.init();

//COUNTER START HERE
const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 20);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

let scrollpos = window.scrollY
const header = document.querySelector("nav")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("navbar-sticky")
const remove_class_on_scroll = () => header.classList.remove("navbar-sticky")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY
  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})
