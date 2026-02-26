window.onload = function () {
  // get the canvas
  let canvas = document.getElementById("testCanvas");
  //get the context
  let context = canvas.getContext("2d");
        //Drawing stuff
        // fillRect(x, y, width, height). -> Draw a filled rect
        // strokeRect(x, y, width, height) -> Draw an outlined rect
        // clearRect(x, y, width, height) -> clears/cuts out the rectangular area
        //             The ONLY other primitive shape is a Path:

        // Path methods: Access more detailed descriptions here
        // beginPath() -> Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
        // closePath() -> connects to the start
        // stroke() -> Draws the shape by stroking its outline.
        // fill() -> Draws a solid shape by filling the path's content area.
        // lineTo(x,y) -> draw a line from where we were with the last command.
        // moveTo(x, y) -> A useful function, which doesn't actually draw anything but becomes part of the path list described above. You can probably best think of this as lifting a pen or pencil from one spot on a piece of paper and placing it on the next. -> very useful if you want to draw more complex shapes.
    let rectSize = 50 ;
    //a draw a rect:
    context.fillStyle = "#f370b8";
    // draw a rect
    context.fillRect(canvas.width / 2, canvas.height / 2, rectSize, rectSize);
    // cut out a rect inside
    context.clearRect(canvas.width / 2 + rectSize/4, canvas.height / 2 + rectSize/4, rectSize/2, rectSize/2);
    context.fillStyle = "#8ED6FF"; // change the color we are using
    let xPos = canvas.width / 3;
    let yPos = canvas.height / 2;
    let radius = 40;
    let startAngle = 0;
    let endAngle = Math.PI * 2; //full rotation
    context.strokeStyle = "#f370b8"; // change the color we are using
    context.arc(xPos, yPos, radius, startAngle, endAngle, true);
    context.fill(); // set the fill
    context.lineWidth = 2; //change stroke
    context.stroke(); //set the stroke

    context.beginPath();
    context.arc(xPos,yPos,radius,startAngle,endAngle, true);
    context.fill(); // set the fill
    context.lineWidth=2; //change stroke
    context.stroke();//set the stroke
    context.closePath();

    //SECOND
    context.strokeStyle = "#0000FF"; // change the color we are using
    context.beginPath();
    context.arc(xPos+200,yPos,radius,startAngle,endAngle, true);
    context.fill(); // set the fill
    context.lineWidth=2; //change stroke
    context.stroke();//set the stroke
    context.closePath();

    // AN IRREGULAR SHAPE
    let lineLength = 100;
    let x1 = canvas.width/2;
    let y1 =canvas.height/2;
    let x2= x1+lineLength;
    let y2 = y1-lineLength;
    let x3 = x1-lineLength;

    context.beginPath(); //start a path
    context.moveTo(x1,y1); //where to start drawing
    context.lineTo(x2,y1); //lineTo(where to go from last...)
    context.lineTo(x2,y2); //lineTo(where to go from last...)
    context.lineTo(x3,y2); //lineTo(where to go from last...)
    context.lineTo(x1,y1); //lineTo(where to go from last...)
    context.strokeStyle = "#ff8ef4"; // change the color we are using
    context.fillStyle = "rgb(147, 207, 98)"
    context.lineWidth =2;
    context.stroke();
    context.fill();
    context.closePath(); //end a path ...
};
