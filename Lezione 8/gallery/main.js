const displayedImage = document.querySelector('.displayed-img')
const thumbBar = document.querySelector('.thumb-bar')

const btn = document.querySelector('button')
const overlay = document.querySelector('.overlay')

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

const images = [
    'montagna.jpg',
    'pexels-jeremy-bishop-2922672.jpg',
    'pexels-luis-del-río-15286.jpg',
    'pexels-quang-nguyen-vinh-2649403.jpg',
    'pexels-walid-ahmad-1509582.jpg',
]

/* Looping through images */

images.forEach((image) => {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', `assets/${image}`)
    newImage.setAttribute('alt', `image of nature`)
    thumbBar.appendChild(newImage)

    newImage.addEventListener('click', () => {
        displayedImage.src = newImage.src
    })
})
let brightnessLevel = 100;
btn.addEventListener('click', () => {
    if (brightnessLevel === 100) {
      displayedImage.style.filter = 'brightness(50%)';
      brightnessLevel = 50;
      btn.innerText='Lighten';
    } else {
      displayedImage.style.filter = 'brightness(100%)';
      brightnessLevel = 100;
      btn.innerText='Darken';
    }
  });

/* Wiring up the Darken/Lighten button */
