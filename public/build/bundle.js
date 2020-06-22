const nav=document.querySelector(".nav"),header=document.querySelector(".header"),buttons=Array.from(nav.children),header_items=Array.from(header.children),mapColours={},btn_nav="btn__nav--",active="--active",btn_nav_active=btn_nav+"active";function getBtnColour(){buttons.forEach(e=>{let t=Array.from(e.classList).join("-").split("-").join("_").split("_").filter(e=>"btn"!==e).filter(e=>"nav"!==e).filter(e=>"active"!==e).filter(e=>e).pop(),s=btn_nav+t+active;mapColours[t]=s})}function removeClasses(){buttons.forEach(e=>{e.classList.remove(btn_nav_active),e.classList.contains(mapColours.green)&&e.classList.remove(mapColours.green),e.classList.contains(mapColours.yellow)&&e.classList.remove(mapColours.yellow),e.classList.contains(mapColours.blue)&&e.classList.remove(mapColours.blue),e.classList.contains(mapColours.red)&&e.classList.remove(mapColours.red)})}getBtnColour();const transition_default=1e3,transition_longer=2e3;function navHandler(){removeClasses(),this.classList.toggle(btn_nav_active),this.classList.contains(btn_nav+"green")&&(this.classList.add(mapColours.green),setTimeout(()=>{window.open("/pages/projects.html","_self")},transition_default)),this.classList.contains(btn_nav+"yellow")&&(this.classList.add(mapColours.yellow),setTimeout(()=>{window.open("/pages/contact.html","_self")},transition_default)),this.classList.contains(btn_nav+"blue")&&(this.classList.add(mapColours.blue),window.open("https://github.com/InspectorPocket","_blank"),setTimeout(()=>{window.open("/pages/github.html","_self")},transition_default)),this.classList.contains(btn_nav+"red")&&(this.classList.add(mapColours.red),window.open("https://dribbble.com/InspectorPocket","_blank"),setTimeout(()=>{window.open("dribbble.html","_self")},transition_default))}function headerHandler(){this.classList.contains("logo")&&(this.classList.add("logo"+active),setTimeout(()=>{window.open("/index.html","_self")},transition_longer)),this.classList.contains("btn__contact")&&(this.classList.add("btn__contact"+active),setTimeout(()=>{window.open("/pages/contact.html","_self")},transition_default))}buttons.forEach(e=>{e.onclick=navHandler}),header_items.forEach(e=>{e.onclick=headerHandler}),$(function(){$("body").mousewheel(function(e,t){this.scrollLeft-=t/1.5})});const gallery=document.querySelector(".gallery"),projectNames=["Fluid Ads - Showreel","Fluid Ads - DMEXCO","3","4","5","6","7","8"];let outputNames=[],project_index=0;const gallerySpacer='<div class="gallery__project gallery__project--hidden"></div>';function getNameValues(){projectNames.forEach(e=>{project_file=e.toLowerCase().replace("- ","").split(" ").join("_"),outputNames.push([e,project_file])})}function insertProjects(){document.body.contains(gallery)&&(gallery.innerHTML+=gallerySpacer+gallerySpacer,outputNames.forEach(e=>{gallery.innerHTML+=`\n                <article class="gallery__project">\n                    <div class="gallery__project__image gallery__project__image--blur">\n                        <img src="/img/projects/_thumbnails/t-${outputNames[project_index][1]}.png">\n                    </div>\n                    <div class="gallery__project__image">\n                        <img src="/img/projects/_thumbnails/t-${outputNames[project_index][1]}.png" alt="${outputNames[project_index][0]}">\n                    </div>\n                    <div class="gallery__project__overlay">\n                        <span>\n                            <h4>${outputNames[project_index][0]}</h4>\n                        </span>\n                        <span>\n                            <a href="/pages/projects/${outputNames[0][1]}.html">View Project</a>\n                        </span>\n                    </div>\n                </article>\n            `,project_index++}),gallery.innerHTML+=gallerySpacer+gallerySpacer)}getNameValues(),insertProjects();