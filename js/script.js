const btn = document.querySelector(".next");
const contentWindow = document.querySelector(".content-next");

let goWindow = () =>{
    contentWindow.style.display = 'block';
   
}
btn.addEventListener('click', goWindow);