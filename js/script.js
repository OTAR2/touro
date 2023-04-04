// after clicking on search-input, search-input and search-wrapper add class active
// ================================================================================

const search = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
const searchWrapper = document.querySelector('.search-wrapper');

searchInput.addEventListener('click', function() {
    if (!searchInput.classList.contains('active')) {
        searchInput.classList.add('active');
        searchWrapper.classList.add('active');
    }
})

// ================================================================================


// Remove class active and delete value of input by clicking outside the search
// ================================================================================

document.addEventListener('click', function (e) {
    // console.log(e.composedPath());
    
    if (!e.composedPath().includes(search)) {
        if (searchInput.classList.contains('active')) {
            searchInput.classList.remove('active');
            searchWrapper.classList.remove('active');
            searchInput.value = '';
        }
    }
})

// ================================================================================


// ================ PROGRAMS SWIPER ================

const programsSwiper = new Swiper('.programs-undergradutate-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    slidesPerView: 1.5,

    spaceBetween: 60,

    // initialSlide: 3,

    // Navigation arrows
    navigation: {
        nextEl: '.programs-slider-btn-next-ico',
        prevEl: '.programs-slider-btn-prev-ico',
    },

    // If we need pagination
    pagination: {
      // el: '.swiper-pagination',
    },
    
    // And if we need scrollbar
    scrollbar: {
      // el: '.swiper-scrollbar',
    },
});

// ================ /PROGRAMS SWIPER ================


// ================ WHY SWIPER ================

const whySwiper = new Swiper('.why-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    slidesPerView: 3,

    spaceBetween: 60,

    // Navigation arrows
    navigation: {
        nextEl: '.why-slider-btn-next-ico',
        prevEl: '.why-slider-btn-prev-ico',
    },

    // If we need pagination
    pagination: {
      // el: '.swiper-pagination',
    },
    
    // And if we need scrollbar
    scrollbar: {
      // el: '.swiper-scrollbar',
    },
});

// ================ /WHY SWIPER ================


// ================ TOURO ALUMNI CHANGETAB ================

const tabLinks = document.querySelectorAll('.alumni-tablink');
const tabContents = document.querySelectorAll('.alumni-tabcontent');


for (let i = 0; i < tabLinks.length; i++) {
    const tabLink = tabLinks[i];
    
    tabLink.addEventListener('click', changeTab)

    function changeTab() {
        for (let i = 0; i < tabLinks.length; i++) {
            const tabLink = tabLinks[i];
            tabLink.classList.remove('clicked');
        }
        
        tabLink.classList.add('clicked');
        const dataName = this.getAttribute('data-name');
        // or (const dataName = this.dataset.name;)
        // console.log(dataName);
        
        for (let i = 0; i < tabContents.length; i++) {
            const tabContent = tabContents[i];
            tabContent.classList.remove('active');           
            const activeTabContent = document.querySelector(`[id*="${dataName}"]`);
            activeTabContent.classList.add('active');
        }
    }
}

// ================ /TOURO ALUMNI CHANGETAB ================
