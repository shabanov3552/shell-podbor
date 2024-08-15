if (document.querySelector('.mp-first-block__slider')) { // Указываем скласс нужного слайдера
   // Создаем слайдер
   new Swiper('.mp-first-block__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      // modules: [Navigation],
      // observer: true,
      // observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      loopAdditionalSlides: 1,
      // autoHeight: true,
      // Кнопки "влево/вправо"
      navigation: {
         prevEl: '.mp-first-block__slider-nav .swiper-button-prev',
         nextEl: '.mp-first-block__slider-nav .swiper-button-next',
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //preloadImages: false,
      //lazy: true,

      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      */

      // Пагинация
      /*
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      */

      // Скроллбар
      /*
      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
      },
      */


      // Брейкпоинты
      /*
      breakpoints: {
         320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         992: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1268: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
      },
      */
      // События
      // on: {

      // }
   });
}
if (document.querySelector('.mp-sale-slider__slider')) { // Указываем скласс нужного слайдера
   // Создаем слайдер
   new Swiper('.mp-sale-slider__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      // modules: [Navigation],
      // observer: true,
      // observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      loopAdditionalSlides: 1,
      // autoHeight: true,
      // Кнопки "влево/вправо"
      navigation: {
         prevEl: '.mp-sale-slider__nav .swiper-button-prev',
         nextEl: '.mp-sale-slider__nav .swiper-button-next',
      },
      // Брейкпоинты

      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         900: {
            slidesPerView: 2,
         },
         1300: {
            slidesPerView: 3,
         },
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //preloadImages: false,
      //lazy: true,

      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      */

      // Пагинация
      /*
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      */

      // Скроллбар
      /*
      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
      },
      */



      // События
      // on: {

      // }
   });
}
if (document.querySelector('.mp-page-form__slider')) { // Указываем скласс нужного слайдера
   // Создаем слайдер
   new Swiper('.mp-page-form__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      // modules: [Navigation],
      // observer: true,
      // observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      loop: true,
      // autoHeight: true,
      // loopAdditionalSlides: 2,
      // autoHeight: true,
      // Кнопки "влево/вправо"
      navigation: {
         prevEl: '.mp-page-form__nav .swiper-button-prev',
         nextEl: '.mp-page-form__nav .swiper-button-next',
      },
      pagination: {
         el: ".mp-page-form__pagination.swiper-pagination",
         type: "fraction",
      },
      // Брейкпоинты

      // breakpoints: {
      //    320: {
      //       slidesPerView: 1,
      //    },
      //    900: {
      //       slidesPerView: 2,
      //    },
      //    1300: {
      //       slidesPerView: 3,
      //    },
      // },

      //touchRatio: 0,
      //simulateTouch: false,
      //preloadImages: false,
      //lazy: true,

      /*
      // Эффекты
      effect: 'fade',
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      */

      // Пагинация
      /*
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      */

      // Скроллбар
      /*
      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
      },
      */



      // События
      // on: {

      // }
   });
}