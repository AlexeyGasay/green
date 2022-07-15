const sliderInfo = [
  {
    id: 1,
    slideHeader: "Скоро! Новый проект «Кварталы 17/77» рядом с бульваром по ул. Щипакина",
    slideSubHeader: "От надежного застройщика – <br> ГК «ЮгСтройИнвест»",

  },
  {
    id: 2,
    slideHeader: "Покупать на старте максимально выгодно!",
    slideSubHeader: "Стоимость квадратного метра в наших микрорайонах с момента старта продаж до сдачи дома в среднем вырастает на 20%",

  },
  {
    id: 3,
    slideHeader: "Большой выбор планировочных решений!",
    slideSubHeader: "Только на старте продаж вы можете подобрать себе планировку с максимально удобным расположением и лучшим видом из окна",

  },
];


let sliderTrack = document.getElementById("slider__track");

let currentSlideHtml = document.getElementById("current_slide"); // Место для вставки текущего слайда
let slidesNumHtml = document.getElementById("slides_num"); // Место для вставки общего числа слайдов

let sliderTextSlides = document.getElementById("slider__text_slides").querySelectorAll("li"); // Название слайдов

let prevArrow = document.getElementById("prevArrow");
let nextArrow = document.getElementById("nextArrow");


let currentSlide = 0;
let slidesNum = sliderInfo.length; // Общее число слайдов


const fillSlider = () => {
  let result = ``;
  for (let i = 0; i < sliderInfo.length; i++) {
    const el = sliderInfo[i];

    result += `<div class="slide slide_${el.id}" >
                  <div class="slide__info">
                    <div class="slide__info_shadow"></div>
                    <h2 class="slide__header">${el.slideHeader}</h2>
                    <h3 class="slide__subheader">${el.slideSubHeader}</h3>
                  </div>

                <a class="slide__learn_more" href="#" tabindex="-1">Узнать первым о старте продаж квартир</a>
            </div>`

  }

  sliderTrack.innerHTML = result;
  slidesNumHtml.innerText = sliderInfo.length;
}

fillSlider();


const markSelectedSlide = (num) => {
  for (let i = 0; i < sliderTextSlides.length; i++) {
    const el = sliderTextSlides[i];

    if (el.classList.contains("selected_text_handler") & num != i) {
      el.classList.remove("selected_text_handler")
    }

    else sliderTextSlides[num].classList.add("selected_text_handler")

  }

}



const prevSlide = () => {
  if (currentSlide > 0) {
    currentSlide--
    sliderTrack.style.transform = `translate(-${sliderTrack.offsetWidth * currentSlide}px)`;
  }
  markSelectedSlide(currentSlide);
  currentSlideHtml.innerText = currentSlide + 1;

}

const nextSlide = () => {
  if (currentSlide < slidesNum - 1) {
    currentSlide++
    sliderTrack.style.transform = `translate(-${sliderTrack.offsetWidth * currentSlide}px)`;
  }
  markSelectedSlide(currentSlide)
  currentSlideHtml.innerText = currentSlide + 1;

}




prevArrow.addEventListener("click", prevSlide);
nextArrow.addEventListener("click", nextSlide);