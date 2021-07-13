let btn = document.querySelector(".toggle-menu");
let navUl= document.querySelector("nav ul ");
btn.addEventListener("click", ()=> {
navUl.classList.toggle("active");});
document.addEventListener("click",(e)=>{
    if (e.target !== btn) {
        navUl.classList.remove("active");
    }
})
// The Top BTN 
let btnTop = document.querySelector(".top");

function btnTOP(){
 window.scrollY >= 720 ? btnTop.style.right= '20px' : btnTop.style.right= '-95';
  };
  btnTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
// Cahnge The Background Color of the nav
let header = document.querySelector("header");
let  servSection = document.querySelector(".serv");
function changeer () {
    let offsetServ = servSection.offsetTop;
       let winY= window.pageYOffset;
       winY+100 >= offsetServ ? header.style.backgroundColor= "rgb(1 1 1 / 87%)" : header.style.backgroundColor=null;
}

//  active The Slider
let landing = document.querySelector(".landing");
let myImgs=['landing.jpg','shuffel-2.jpg','shuffel-3.jpg','shuffel-4.jpg','shuffel-5.jpg'];
let slideCount =myImgs.length;
let img = 1;
let numUl = document.querySelector("#bullets")
let right = document.querySelector(".right");
let left = document.querySelector(".left");
right.onclick = next;
left.onclick = prev;
for (let i = 1; i <= slideCount; i++){
    let numLi = document.createElement('li');
    numLi.setAttribute('data-index' , i);
    numUl.appendChild(numLi);
}
let numList = Array.from(document.querySelectorAll("#bullets li"))
for (let i = 0; i < numList.length; i++) {
    numList[i].onclick = function(){
        img = parseInt(this.getAttribute('data-index'));
        checker();    
}};
checker();

function next() {
    if (right.classList.contains('dis')) {
        return false;
    }else{
        img++;
        checker();
    }
};

function prev() {
    if (left.classList.contains('dis')) {
        return false;
    }else{
        img--;
        checker();
}
};

function checker() {
document.documentElement.style.setProperty('--bg-imag','url(../imgs/'+ myImgs[img - 1]+')');
remove();
numUl.children[img - 1].classList.add("active");
if (img === 1) {
    left.classList.add("dis");
}else{
    left.classList.remove("dis")
}
    if (slideCount === img) {
        right.classList.add("dis");
    }else{
        right.classList.remove("dis");
    }
};

function remove() {
    numList.forEach((ele)=>{
        ele.classList.remove('active');
    });
};
// Make Animation On The Stats Setction 

let anime = Array.from(document.querySelectorAll(".num")) ;
let boxs = document.querySelectorAll(".stats .box");
let stats = document.querySelector(".stats ");
function counter() {
    anime.forEach(e => {
        let number =e.getAttribute("data-num"),
            obj = e,
     current = 0,
     range = number - 0,
     increment = number > 0 ? 1 : -1,
     step = Math.abs(Math.floor(1000 / range)),
     timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == number) {
       clearInterval(timer);
      }
     }, step);
    });
    
   }
function arrive() {
        let eleOffset =stats.offsetTop,
            eleOffsetHeight = stats.offsetHeight,
            winHeight = window.innerHeight,
            winYOffset =window.pageYOffset;
            if (winYOffset > (eleOffset + eleOffsetHeight - winHeight)) {
                boxs.forEach(()=>{
                    counter();
                })
            }


}
let skills =document.querySelectorAll(".progs-bar span");
let progsBar = document.querySelector(".progs-bar ");
function arriveSkills() {
        let eleOffset =progsBar.offsetTop,
            eleOffsetHeight = progsBar.offsetHeight,
            winHeight = window.innerHeight,
            winYOffset =window.pageYOffset;
            if (winYOffset > (eleOffset + eleOffsetHeight - winHeight)) {
                skills.forEach(e => {
                    e.style.width = e.dataset.progress;
                })
            }


   
}

window.onscroll=function (){
    btnTOP();
    changeer();
    arrive();
    arriveSkills();
}