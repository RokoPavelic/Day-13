const list = document.querySelector("ul");
const list_items = document.querySelectorAll("li");
const images = document.querySelectorAll(".gallery img");
const images_as_array = Array.from(images);
let urls = [];
let alts = [];
// Extract the src attributes (URLs) of the images and log them, one by one, into the console.
// Extract the alt attributes and log them, one by one, into the console.
images.forEach((img) => console.log(img.src));
images.forEach((img) => console.log(img.alt));

// use querySelectorAll to find all those <li> elements.
// loop through them all
// for each of those <li> elements, get their inner HTML code and log it into the console
list_items.forEach((list_items) => {
  console.log(list_items.innerHTML);
});

// Declare an empty array in a variable alts.
// As you are looping through the images, build an array of the images' alt tags and log the new array into the console.
const allAlts = Array.from(document.querySelectorAll("img"), (img) => img.alt);
for (let i = 0; i < allAlts.length; i++) {
  alts.push(allAlts[i]);
}
// console.log(alts);

const allSrcs = Array.from(document.querySelectorAll("img"), (img) => img.src);
for (let i = 0; i < allSrcs.length; i++) {
  urls.push(allSrcs[i]);
}
// console.log(urls);

// Count the number of images and log it into the console.
let length = images.length;
// console.log(length);

// Having the array of image URLs, use the array method .slice to make a new array of only the first 3 values and log it into the console.
const newUrls = urls.slice(3);
// console.log(newUrls);

// Do the same thing as in the previous exercise, but using a for loop and break:
// Declare a new empty array in a variable first.
// Loop through the array urls with a for loop. Inside the loop push every element (one URL) to the array first.
// In the right moment, call break;
let first = [];
for (let i = 0; i < urls.length; i++) {
  first.push(urls[i]);
  if (i === 2) {
    break;
  }
}
// console.log(first);

// Do the same thing as in the previous exercise, but using a for loop and continue:
let last = [];
for (let i = 0; i < urls.length; i++) {
  if (i === 0 || i === 1 || i === 2) {
    continue;
  }
  last.push(urls[i]);
}
// console.log(last);

// Having the array of URLs and the array of alt tags,
//  declare an object with properties urls: and alts:. Use the arrays as the values for the properties.
//  Log the object into the console.
let properties = { urls: urls, alts: alts };
// console.log(properties);

// Make the function return "Hello".
const myFunction = () => {
  return "hello";
};
document.getElementById("demo").innerHTML = myFunction();
