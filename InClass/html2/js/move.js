window.onload = function(){
    // we want to do something when the mouse is over the box :)
    let drawBox = this.document.querySelector("#draw-box-a");
    
    //A: add event listener + callback
    drawBox.addEventListener("mousemove", moveCallBack); //this calls the function

    function moveCallBack(e){ //this is what happens when its called
        console.log("mouse move");
        // B: note these are the same ... 
        // console.log(this);
        // console.log(e.target);
        //C: get the mouse coords relative to the WINDOW...
        let rect = this.getBoundingClientRect(); //bounds it to the window

        let offsetX = e.clientX-rect.x; //DIFFERENCE TO ENSURE COORDS ARE RELATIVE
        let offsetY = e.clientY-rect.y;

        // drawBox.innerHTML= `offset_x: ${offsetX}, offset_y:${offsetY}`;
        // drawBox.innerHTML= `x: ${e.clientX}, y:${e.clientY}`; //coordonate now relative to the box (and the window)
        
        let pointDiv = document.createElement("div");
        pointDiv.classList.add("point");
        pointDiv.style.left = offsetX+"px";
        pointDiv.style.top = offsetY+"px";
        this.appendChild(pointDiv);

    }
}