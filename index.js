//sticky navbar

window.onscroll=()=>{
let header =document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY>100);
};

//popup tabs

function openPopup() {
    document.getElementById('myModal').style.display = 'block';
}

function closePopup() {
    document.getElementById('myModal').style.display = 'none';
}

function openPop() {
    document.getElementById('myDesign').style.display = 'block';
}

function closePop() {
    document.getElementById('myDesign').style.display = 'none';
}

function openWeb() {
    document.getElementById('myWeb').style.display = 'block';
}

function closeWeb() {
    document.getElementById('myWeb').style.display = 'none';
}

function openBob() {
    document.getElementById('myBob').style.display = 'block';
}

function closeBob() {
    document.getElementById('myBob').style.display = 'none';
}


//swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });