// Navigation bar for color
let nav=document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if( document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}






// navigation bar when we click the 

document.querySelectorAll('.nav-link').forEach(a => a.addEventListener("click", 
    ()=> document.querySelector('.navbar-collapse.collapse').classList.remove("show")
)
);


// Counter start 
document.addEventListener("DOMContentLoaded",()=> {
    const counter = (id, start, end, duration) => {
        let obj =document.getElementById(id),
        increment = (end - start) / (duration / 10),
        current = start;

        const updateCounter =() => {
            current = current + increment;
            obj.textContent = Math.floor(current);
            if (current < end) setTimeout(updateCounter,10);
        };

        updateCounter();
    };

    counter("count1", 0, 1231,3000);
    counter("count2", 0, 1011,3000);
    counter("count3", 0, 1451,3000);
    counter("count4", 0, 1311,3000);

})