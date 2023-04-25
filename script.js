//your JS code here. If required.
// Get all the square elements
const squares = document.querySelectorAll('.square');

// Add event listeners to each square element
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = '#f00';
  });
  square.addEventListener('mouseout', () => {
    setTimeout(() => {
      square.style.backgroundColor = '#fff';
    }, 1000);
  });
});
