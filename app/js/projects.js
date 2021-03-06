const gallery = document.querySelector('.gallery');

// Project names go in here
const projectNames = [
    "Fluid Ads - Showreel",
    "Fluid Ads - DMEXCO",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"
];
let outputNames = [];
let project_index = 0;

const gallerySpacer = '<div class="gallery__project gallery__project--hidden"></div>';

function getNameValues() {
    // console.log('Transforming title names into readable file names...');
    projectNames.forEach(name => {
        project_file = name.toLowerCase().replace('- ', '').split(' ').join('_');
        outputNames.push([name, project_file]);
    });
};

function insertProjects() {
    if (document.body.contains(gallery)) {
        // console.log('Inserting Projects...');
        gallery.innerHTML += gallerySpacer + gallerySpacer;
        outputNames.forEach(project => {
            gallery.innerHTML += `
            <article class="gallery__project">
                <div class="gallery__project__image gallery__project__image--blur">
                    <img src="/img/projects/_thumbnails/t-${outputNames[project_index][1]}.png">
                </div>
                <div class="gallery__project__image">
                    <img src="/img/projects/_thumbnails/t-${outputNames[project_index][1]}.png" alt="${outputNames[project_index][0]}">
                </div>
                <div class="gallery__project__overlay">
                    <a href="/pages/projects/${outputNames[0][1]}.html">
                        <p>${outputNames[project_index][0]}</p>
                    </a>
                </div>
            </article>
            `;
            project_index++;
            // console.log('Project: ' + project_index);
        });
        gallery.innerHTML += gallerySpacer + gallerySpacer;
    }
};

getNameValues()
insertProjects()
