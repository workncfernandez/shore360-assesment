$('.slider').slick({
    infinite: false,
    speed: 300,
    prevArrow: '<i class="fas fa-chevron-left left_arrow">',
    nextArrow: '<i class="fas fa-chevron-right right_arrow">',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
        breakpoint: 1140,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then((data) => {
    let catsImgUrl = data[0].url

    let catsImgEl = document.createElement('img')
    catsImgEl.setAttribute('src', `${catsImgUrl}`)
    catsImgEl.setAttribute('class', 'addedSlick')

    console.log(catsImgEl);

    $('.slider').slick('slickAdd', catsImgEl);

  })
  .catch(err => console.log(err))
})

// min-width: 367px; max-width: 367px; min-height: 262px; max-height: 262px;