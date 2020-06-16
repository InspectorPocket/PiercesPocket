// TODO refactor code
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const buttons = Array.from(nav.children);
const header_items = Array.from(header.children);

const mapColours = {};

const btn_nav = 'btn__nav--';
const active = '--active';
const btn_nav_active = btn_nav + 'active';
function getBtnColour() {
    buttons.forEach(btn => {
        let btn_class_arr = Array.from(btn.classList);
        let colour = btn_class_arr.join('-').split("-").join('_').split('_').filter(e => e !== 'btn').filter(e => e !== 'nav').filter(e => e !== 'active').filter(item => item).pop();
        let btn_colour_active = btn_nav + colour + active;
        mapColours[colour] = btn_colour_active;
    });
};
getBtnColour();

function removeClasses() {
    buttons.forEach(btn => {
        btn.classList.remove(btn_nav_active);
        if (btn.classList.contains(mapColours.green)) btn.classList.remove(mapColours.green);
        if (btn.classList.contains(mapColours.yellow)) btn.classList.remove(mapColours.yellow);
        if (btn.classList.contains(mapColours.blue)) btn.classList.remove(mapColours.blue);
        if (btn.classList.contains(mapColours.red)) btn.classList.remove(mapColours.red);
    });
}

// TODO add handler to logo to smooth out transition of buttons
// TODO add handler to contact btn to replicate below
const transition_default = 1000;
const transition_longer = 2000;
function navHandler() {
    removeClasses();
    this.classList.toggle(btn_nav_active);
    if (this.classList.contains(btn_nav + 'green')) {
        this.classList.add(mapColours.green);
        setTimeout(() => {
            window.open('/app/projects.html', '_self');
        }, transition_default);
    }
    if (this.classList.contains(btn_nav + 'yellow')) {
        this.classList.add(mapColours.yellow);
        setTimeout(() => {
            window.open('/app/contact.html', '_self');
        }, transition_default);
    }
    if (this.classList.contains(btn_nav + 'blue')) {
        this.classList.add(mapColours.blue);
        window.open('https://github.com/InspectorPocket', '_blank');
        setTimeout(() => {
            window.open('/app/github.html', '_self');
        }, transition_default);
    }
    if (this.classList.contains(btn_nav + 'red')) {
        this.classList.add(mapColours.red);
        window.open('https://dribbble.com/InspectorPocket', '_blank');
        setTimeout(() => {
            window.open('dribbble.html', '_self');
        }, transition_default);
    }
}

// TODO remove active on contact
function headerHandler() {
    const btn_contact = 'btn__contact';
    const logo = 'logo';
    // TODO logo doesn't change, only the ripple effect is played. Change code accordingly
    if (this.classList.contains(logo)) {
        this.classList.add(logo + active);
        setTimeout(() => {
            window.open('/index.html', '_self');
        }, transition_longer);
    }
    if (this.classList.contains(btn_contact)) {
        this.classList.add(btn_contact + active);
        setTimeout(() => {
            window.open('/app/contact.html', '_self');
        }, transition_default);
    }
}

buttons.forEach(btn => {
    btn.onclick = navHandler;
});

header_items.forEach(item => {
    item.onclick = headerHandler;
});