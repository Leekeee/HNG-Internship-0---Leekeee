// Display a welcome message in the console
console.log('Hello from Olanrewaju Gbemileke');

// Function to change the background color
function changeBackgroundColor() {
    const colors = ['#f0f0f0', '#c8e6c9', '#ffccbc', '#d1c4e9', '#ffeb3b'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add event listener to the button
document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

// Add event listener to the HNG section
document.getElementById('hng').addEventListener('click', function() {
    alert('You clicked on the HNG Internship section!');
});
