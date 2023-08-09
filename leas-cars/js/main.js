const tabA = document.querySelectorAll ('.choose-a')
const tabCards = document.querySelectorAll ('.choose__cards')

tabA.forEach(function(element) {
  element.addEventListener('click',open);
})
function open (evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button ;

  tabA.forEach(function(item){
    item.classList.remove ('chose-a-activ')
  });

  tabTarget.classList.add('chose-a-activ')

  tabCards.forEach(function(item){
    item.classList.remove('choose__cards-activ')
  });

  document.querySelector(`#${button}`).classList.add('choose__cards-activ');
}

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});