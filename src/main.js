// Importa Swiper y CSS
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Importa Autoplay, Navigation y Pagination desde módulos
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Inicializa Swiper y registra los módulos
const swiper = new Swiper('.swiper', {
  modules: [Autoplay, Navigation, Pagination], // registrar módulos
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
