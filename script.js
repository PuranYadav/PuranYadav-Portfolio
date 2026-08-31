const nav=document.querySelector(".nav"), menu=document.querySelector(".menu-btn");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
window.addEventListener("scroll",()=>{const h=document.documentElement;document.querySelector(".progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";});
