import {wallPapers} from './wallPaper.js'; // Importing Wallpaper array

const randomOrder = Math.floor(Math.random() * wallPapers.length);

const randomWallPaper = wallPapers[randomOrder];

const backGround = document.querySelector(".backGround");

if (backGround) {

    backGround.style.backgroundImage = `url(${randomWallPaper.href})`;
}

// Setting Up a new source link tab

setTimeout(() => {

    window.open(randomWallPaper.href, '_blank');
},3000);