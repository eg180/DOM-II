// Using your index.js file, create event listeners of at least 10 different types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
// mouseover
// keydown
// wheel
// load
// focus
// resize
// scroll
// select
// dblclick
// drag / drop
// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

//  Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
//  Stop the navigation items from refreshing the page by using preventDefault()


// Your code goes here
const heading = document.querySelector('.logo-heading');

const busImage = document.querySelector('#bus');

const bgColor = window.backgroundColor;






heading.addEventListener('click', (event) => {
    console.log('hi');
  });



// changes fun bus pic to fun bus 2 hell pic and returns it to normal on mouseout:
busImage.addEventListener('mouseover', (event) => {
    busImage.src = 'img/fun-bus2.jpg';
    // busImage.setAttribute('src', 'img/fun-bus2.jpg');
});

busImage.addEventListener('mouseout', (event) => {
    busImage.src = 'img/fun-bus.jpg';
    // busImage.setAttribute('src', 'img/fun-bus2.jpg');
});

heading.addEventListener('dblclick', (event) => {
    heading.textContent = "HELL BUS";
})


bgColor.addEventListener('keydown', (event) => {
    bgColor = 'black';
});

