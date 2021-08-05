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

AOS.init();