const nav = document.getElementsByClassName('nav');
const nav_btn = document.getElementById('nav_btn');
const navToggle = 'nav__behind__icon--toggled';
let navBars = [];
const filterHeader = () => {
    Array.from(nav)
        .forEach(item => {
            navBars.push(item);
        }
    );
}

filterHeader();
const nav_front = navBars[0];
const nav_back = navBars[1];
let nav_width = navBars[0].offsetWidth;

nav_btn.addEventListener('click', () => {
    const att_sm = `transform: translateX(calc(-${nav_width}px + 3.75em));`;
    const att_lg = `transform: translateX(calc(-${nav_width}px + 5.2em));`;
    if (nav_btn.classList.contains(navToggle)) {
        navBars.forEach(nav => {
            if (window.innerWidth < 768) {
                nav.removeAttribute('style', att_sm);
            }
            else if (window.innerWidth > 768) {
                nav.removeAttribute('style', att_lg);
            }
        });
        nav_btn.classList.remove(navToggle);
    } else {
        navBars.forEach(nav => {
            if (window.innerWidth < 768) {
                nav.setAttribute('style', att_sm);
            }
            else if (window.innerWidth > 768) {
                nav.setAttribute('style', att_lg);
            }
        });
        nav_btn.classList.add(navToggle);
    }
});