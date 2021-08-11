// scroll to elem

function listenForClick(btnId, callbackFN, callbackFNId) {
    var el = document.getElementById(btnId);
    if (el) {
        el.addEventListener('click', function () {
            callbackFN(callbackFNId);
        });
    }
}

function scrollToElement(elName) {
    var el = document.getElementById(elName);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// on page scrolled

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function (event) {
        if (window.scrollY > 200) {
            document.getElementById('header').classList.add('header__scrolled');
        }

        else {
            document.getElementById('header').classList.remove('header__scrolled');
        }
    });

    listenForClick('about-us__btn', scrollToElement, 'about-us');
    listenForClick('contacts__btn', scrollToElement, 'contacts');
    listenForClick('trade__btn', scrollToElement, 'menu');
    listenForClick('header__logo', scrollToElement, 'hero');
});

// on checkbox clicked

document.addEventListener('click', function () {
var cb = document.getElementById('toggle');    
    if (cb.checked && window.scrollY < 200) {
        document.getElementById('header').classList.add('header__clicked');
    }
    else{
        document.getElementById('header').classList.remove('header__clicked');
    }
});

// init animation
AOS.init();