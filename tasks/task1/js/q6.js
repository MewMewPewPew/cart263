// AGAIN USE VARIABLES/CONSTS WHENEVER POSSIBLE
// Make a text object to hold the string "test" , fill white , textSize 28 , center of screen
// Write a for loop to repeat 10 times: start at 0 and finish at 9
// In the for loop body: output the counter variable (usually labelled i) as text. As well, use the counter variable to offset the x position of the text (i.e. if i ==1 then x position ==20, if i ==2 x position ==40 etc..)
// Make another for loop to repeat 15 times: start at 15 end at 1
// In this loop: output the counter variable as text . As well, use the counter variable to offset the y position of the text (i.e. if i ==1 then y position ==20, if i ==2 y position ==40 etc..)
// BONUS: USING THE SAME FOR LOOP AS JUST BEFORE: can you make the the greatest number start at the top and the smallest output at the bottom?

"use strict";

let text1 = {
    x:250,
    y:250,
    color: "#ffffff",
    size: 28,
    string:"test",
    two:{
        x:30,
        y:30,
        x2:500,
        y2:500,
    }
}
function setup() {
    console.log("go")
    createCanvas(500, 500);
    
}
function draw() {
    background(0);
    
    drawText();
    const numbers = [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15];
    let len = numbers.length;
    
    let textNum = "";
    let textNumX = 0;
    let textNumY = 20;
    for (let i = 0; i < 10; i++){
        textNum = numbers[i] ;
        textNumX += 20;
        push();
        textSize(text1.size);
        fill(text1.color);
        text(textNum,textNumX ,textNumY);
        pop();
    }
    textNumY = 0;
    for (let i = 0; i < len; i++){
        let textNumX = 20;
        textNum = numbers[i] ;
        textNumY += 20;
        push();
        textSize(text1.size);
        fill(text1.color);
        text(textNum,textNumX ,textNumY);
        pop();
    }
}

function drawText(){
    push();
    textSize(text1.size);
    fill(text1.color);
    text(text1.string, text1.x, text1.y);
    pop();
}