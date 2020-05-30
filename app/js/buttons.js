// TODO refactor code
const nav = document.querySelector('.nav');
const buttons = Array.from(nav.children);

const mapColours = {};

const btn_nav = 'btn__nav--';
const active = '--active';
const btn_nav_active = btn_nav + 'active';
function getBtnColour() {
    buttons.forEach(btn => {
        let btn_class_arr = Array.from(btn.classList);
        let colour = btn_class_arr.join('-').split("-").join('_').split('_').filter(e => e !== 'btn').filter(e => e !== 'nav').filter(e => e !== 'active').filter(item => item).pop();
        let btn_colour_active = btn_nav + colour + '--active';
        mapColours[colour] = btn_colour_active;
    });
};
getBtnColour();

function removeNavClasses() {
    buttons.forEach(btn => {
        btn.classList.remove(btn_nav_active);
        if (btn.classList.contains(mapColours.green)) btn.classList.remove(mapColours.green);
        if (btn.classList.contains(mapColours.yellow)) btn.classList.remove(mapColours.yellow);
        if (btn.classList.contains(mapColours.blue)) btn.classList.remove(mapColours.blue);
        if (btn.classList.contains(mapColours.red)) btn.classList.remove(mapColours.red);
    });
}

// TODO add handler to logo to smooth out transition of buttons
function clickHandler() {
    const transition_l = 1000;
    removeNavClasses();
    this.classList.toggle(btn_nav_active);
    if (this.classList.contains(btn_nav + 'green')) {
        this.classList.add(mapColours.green);
        setTimeout(() => {
            window.open('/app/projects.html', '_self');
        }, transition_l);
    }
    if (this.classList.contains(btn_nav + 'yellow')) {
        this.classList.add(mapColours.yellow);
        setTimeout(() => {
            window.open('/app/about.html', '_self');
        }, transition_l);
    }
    if (this.classList.contains(btn_nav + 'blue')) {
        this.classList.add(mapColours.blue);
        window.open('https://github.com/InspectorPocket', '_blank');
        setTimeout(() => {
            window.open('/app/github.html', '_self');
        }, transition_l);
    }
    if (this.classList.contains(btn_nav + 'red')) {
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