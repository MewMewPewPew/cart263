// // Use a nested for loop to draw a grid of evenly spaced circles .
// // Make the grid work for a circle size that is a multiple of 5 (up to 100) - just by changing one variable.
// // Make ALL circles the SAME random color - only switches on page reload
// // Have this random color CHANGE for ALL CIRCLES when the user presses on space bar
// // On mouse click change CIRCLES the to SQUARES if they were CIRCLES .. AND to CIRCLES if they were SQUARES
// BONUS: ON LOAD: make every EVEN row CIRCLES and every ODD row SQUARES.
// Switch circles/squares on mouse click (odd row SQUARES and even row CIRCLES )..and vice versa


function setup() {
    console.log("go")
    createCanvas(510, 510);
    
}
function draw() {
    background(0);
let x = 0;
let y = 0;
let diameter = 50;
    for(x = 25; x < width; x++){
        for(y = 25; y < height; y++){
            
            ellipse(x, y, diameter);
            y += diameter;
        }
        x+= diameter;
    }
}