///////////////////////
// 1. PASAR WEBP (3 tamaños)
// const sharp = require('sharp');
// const fs = require('fs');

// const input = 'src/img/hummus.jpg';

// // versiones que quieres generar
// const sizes = [300, 600, 900];

// sizes.forEach(size => {
//   sharp(input)
//     .resize(size)
//     .toFormat('webp')
//     .toFile(`src/img/hummus-${size}.webp`);

//   sharp(input)
//     .resize(size)
//     .toFile(`src/img/hummus-${size}.jpg`);
// });

///////////////////////
// 2. PASAR PNG a WEBP

// const sharp = require('sharp');

// const images = ['paella1', 'paella2', 'paella3'];

// images.forEach(name => {
//   sharp(`src/img/${name}.png`)
//     .toFormat('webp')
//     .toFile(`src/img/${name}.webp`);
// });

///////////////////////
// 3. PASAR JPG a WEBP

const sharp = require('sharp');

const images = ['ramen-mobile', 'ramen-desktop'];

images.forEach(name => {
  sharp(`src/img/${name}.jpg`)
    .toFormat('webp')
    .toFile(`src/img/${name}.webp`);
});