const header = document.querySelector('.header');
const iconClosed = document.querySelector('.nav__behind__icon--closed');
const iconOpen = document.querySelector('.nav__behind__icon--open');

iconClosed.addEventListener('click', e => {
    e.preventDefault();
    
    // console.log('Closing...');
    header.classList.add('header--closed');
    iconClosed.classList.add('hide');
    iconOpen.classList.remove('hide');
});

iconOpen.addEventListener('click', e => {
    e.preventDefault();
    
    // console.log('Opening...');
    header.classList.remove('header--closed');
    iconClosed.classList.remove('hide');
    iconOpen.classList.add('hide');
});
