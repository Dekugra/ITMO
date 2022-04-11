const swiper = new Swiper('.swiper', {

    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // slidesPerGroup: 1,
    // loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    //Формирование виртуальных слайдов
    virtual: {
        slides: (function() {
            let slides = [];
            for (let i = 1; i < 31; i++) {
                slides.push(`
                <ul class=" navigation-container__bag">
                  <li class="navigation-container__item">
                    <img class="navigation-container__logo" src="./images/our-projects/our-projects__logo.svg" alt="Логотип компании Газпром нефть.">
                    <h4 class="navigation-container__text">Направление включает в себя исследования и разработки технологий МО и КТ.</h4>
                    <div class="navigation-container__detail"><a></a></div>
                  </li>
                  <li class="navigation-container__item">
                    <img class="navigation-container__logo" src="./images/our-projects/our-projects__logo.svg" alt="Логотип компании Газпром нефть.">
                    <h4 class="navigation-container__text">Направление включает в себя исследования и разработки технологий МО и КТ.</h4>
                    <div class="navigation-container__detail"><a></a></div>
                  </li>
                  <li class="navigation-container__item">
                    <img class="navigation-container__logo" src="./images/our-projects/our-projects__logo.svg" alt="Логотип компании Газпром нефть.">
                    <h4 class="navigation-container__text">Направление включает в себя исследования и разработки технологий МО и КТ.</h4>
                    <div class="navigation-container__detail"><a></a></div>
                  </li>
                  <li class="navigation-container__item">
                    <img class="navigation-container__logo" src="./images/our-projects/our-projects__logo.svg" alt="Логотип компании Газпром нефть.">
                    <h4 class="navigation-container__text">Направление включает в себя исследования и разработки технологий МО и КТ.</h4>
                    <div class="navigation-container__detail"><a></a></div>
                  </li>
                </ul>
                `);
            }
            return slides;
        }())
    },
});