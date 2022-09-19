const WomboDream = require('dream-api');

WomboDream.generateImage(1, "dog").then(image => {
    console.log(image);
  });
console.log("hello world", WomboDream)