// TODO refactor code
const nav = document.getElementsByClassName('nav');
const nav_btn = document.getElementById('nav_btn');
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

const buttons = Array.from(nav_front.children);

// TODO nav closes dynamically with device width
// if device_width = x
    // nav width = device_width
nav_btn.addEventListener('click', () => {
    const nav_toggle = 'nav__behind__icon--toggled';
    const nav_default = 'nav__behind__icon--default';
    const att_sm = `transform: translateX(calc(-${nav_width}px + 3.75em));`;
    const att_lg = `transform: translateX(calc(-${nav_width}px + 5.2em));`;
    if (nav_btn.classList.contains(nav_default)) nav_btn.classList.remove(nav_default);
    if (nav_btn.classList.contains(nav_toggle)) {
        navBars.forEach(nav => {
            if (window.innerWidth < 768) {
                nav.removeAttribute('style', att_sm);
            }
            else if (window.innerWidth > 768) {
                nav.removeAttribute('style', att_lg);
            }
        });
        nav_btn.classList.remove(nav_toggle);
    } else {
        navBars.forEach(nav => {
            if (window.innerWidth < 768) {
                nav.setAttribute('style', att_sm);
            }
            else if (window.innerWidth > 768) {
                nav.setAttribute('style', att_lg);
            }
        });
        nav_btn.classList.add(nav_toggle);
    }
});

const mapColours = {};

const tabby = 'btn__tabby--';
const active = '--active';
const tabby_active = tabby + 'active';
function getBtnColour() {
    buttons.forEach(btn => {
        let btn_class_arr = Array.from(btn.classList);
        let colour = btn_class_arr.join('-').split("-").join('_').split('_').filter(e => e !== 'btn').filter(e => e !== 'tabby').filter(e => e !== 'active').filter(item => item).pop();
        let btn_colour_active = tabby + colour + '--active';
        mapColours[colour] = btn_colour_active;
    });
};
getBtnColour();

function removeNavClasses() {
    buttons.forEach(btn => {
        btn.classList.remove(tabby_active);
        if (btn.classList.contains(mapColours.green)) btn.classList.remove(mapColours.green);
        if (btn.classList.contains(mapColours.yellow)) btn.classList.remove(mapColours.yellow);
        if (btn.classList.contains(mapColours.blue)) btn.classList.remove(mapColours.blue);
        if (btn.classList.contains(mapColours.red)) btn.classList.remove(mapColours.red);
    });
}

function clickHandler() {
    const transition_l = 1000;
    removeNavClasses();
    this.classList.toggle(tabby_active);
    if (this.classList.contains(tabby + 'green')) {
        console.log('green');
        this.classList.add(mapColours.green);
        setTimeout(() => {
            window.open('app/projects.html', '_self');
        }, transition_l);
    }
    if (this.classList.contains(tabby + 'yellow')) {
        console.log('yellow');
        this.classList.add(mapColours.yellow);
        setTimeout(() => {
            window.open('app/about.html', '_self');
        }, transition_l);
    }
    if (this.classList.contains(tabby + 'blue')) {
        console.log('blue');
        this.classList.add(mapColours.blue);
        window.open('https://github.com/InspectorPocket', '_blank');
        setTimeout(() => {
            window.open('app/github.html', '_self');
        }, transition_l);
    }
    if (this.classList.contains(tabby + 'red')) {
        console.log('red');
        this.classList.add(mapColours.red);
        window.open('https://dribbble.com/InspectorPocket', '_blank');
        setTimeout(() => {
            window.open('dribbble.html', '_self');
        }, transition_l);
    }
    
}

buttons.forEach(btn => {
    btn.onclick = clickHandler;
});