window.onload = function () {
    // get the canvas
    let canvas = document.getElementById("testCanvas");
    //get the context
    let context = canvas.getContext("2d");

    //call function to create a flower
    let startAngle = 0;
    let endAngle = Math.PI * 2; //full rotation
    createFlower(canvas.width / 2,canvas.height / 2, 60,["#ff0088ff","rgb(187, 231, 254)"])
        
    function createFlower(xPos,yPos,radius, colors){
        drawSinglePetal(xPos,yPos+3*radius/2,radius,colors[0])
        drawSinglePetal(xPos,yPos-3*radius/2,radius,colors[0])
        drawSinglePetal(xPos-3*radius/2,yPos,radius,colors[0])
        drawSinglePetal(xPos+3*radius/2,yPos,radius,colors[0])
        drawSinglePetal(xPos,yPos,radius,colors[1])
    }
    
    function drawSinglePetal(x,y,r,fillColor){
        context.fillStyle = fillColor; // change the color we are using
        context.strokeStyle = fillColor; // change the color we are using
        context.beginPath();
        context.arc(x,y,r,startAngle,endAngle, true);
        context.fill(); // set the fill
        context.lineWidth=2; //change stroke
        context.stroke();//set the stroke
        context.closePath();
    }

    let r1 = 30;
    let counter = 0;
    requestAnimationFrame(animate);
    function animate() {
        //repaint with a black rect... like the background in draw in p5.js
        context.clearRect(0,0,canvas.width,canvas.height);
        //console.log("go")
        context.clearRect(0, 0, canvas.width, canvas.height);
        //we will make a scaling animation:
        //math.sin goes from [-1,1]*30 == -30,30
        //then if we add 30 to the min ==0 and to the max will be 60 :)
        let newSize = Math.sin(counter) * r1 + r1;
        let newSize2 = Math.sin(counter*2) * r1 + r1;
        createFlower(canvas.width / 2, canvas.height / 2, newSize, [
        "#ff0088ff",
        "rgb(179, 206, 73)",
        ]);
        //another flower 
        createFlower(canvas.width / 2, canvas.height / 4, newSize2/2, [
        "rgb(179, 206, 73)",
        "#ff0088ff",
        ]);
        //having fun
        createFlower(canvas.width / 2, canvas.height / 1.35, newSize2/2, [
        "rgb(179, 206, 73)",
        "#ff0088ff",
        ]);
        createFlower(canvas.width / 4, canvas.height / 2, newSize2/2, [
        "rgb(179, 206, 73)",
        "#ff0088ff",
        ]);
        createFlower(canvas.width / 1.35, canvas.height / 2, newSize2/2, [
        "rgb(179, 206, 73)",
        "#ff0088ff",
        ]);
        //will make the animation rate universal! 
        //let currentTime = ????
        let delta_time = currentTime - LastTime;
        LastTime = currentTime;
        counter += 0.03*delta_time;
        requestAnimationFrame(animate);
    }
}
