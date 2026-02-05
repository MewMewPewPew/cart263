let speedX = 5;
let fastSpeedX = 15;
let turbo = false;

//will run 1rst when program is runned
window.onload = function(){
    // console.log("keys");
    window.setInterval(moveBox,20); //.setInterval .setTimeout
    function moveBox(){
        document.getElementById("boxB").style.left =
        parseInt(this.document.getElementById("boxB").style.left) + speedX + "px"; 
        if (document.getElementById("boxB").style.left > window.width){
            document.getElementById("boxB").style.left = "0px";
        }
        // parent.innerHTML+=" NEW TEXT TO APPEAR ";
    }

    window.addEventListener("keydown", function (event) {  
        // console.log(event);
        // //print the selected keydown as a textContent
        // // When ".textContent" += a string, it combines them as the same thing
        // document.querySelector("#textContainer").textContent+=`${event.key} `;
        // // document.querySelector("#textContainer").textContent+=`${event.code} `; // prints the Key name below
    
        if(event.key === "ArrowRight"){
            if (turbo){
                this.document.getElementById("boxA").style.left =
                parseInt(this.document.getElementById("boxA").style.left) + fastSpeedX + "px";
            }
            else {
                document.getElementById("boxA").style.left = 
                //parseInt reads the previous informations aswell + it's a string, normal Intergures are not
                parseInt(this.document.getElementById("boxA").style.left) + speedX + "px";     
            }
        } 
        else if (event.key === "ArrowLeft") {
            if (turbo){
                this.documentocument.getElementById("boxA").style.left =
                parseInt(this.document.getElementById("boxA").style.left) - fastSpeedX + "px";
            }
            else {
                document.getElementById("boxA").style.left =
                parseInt(this.document.getElementById("boxA").style.left) - speedX + "px";
            }
        }
        else if (event.key === "Shift") {
            this.document.getElementById("boxA").style.background = "pink";
            turbo = true;
        }

    });
    window.addEventListener("keyup", function(event){
        console.log("keyup");
        //2: change color when space is down

        if (event.key === "Shift") {
        document.getElementById("boxA").style.background = "rgb(112, 226, 135)";
        } 
        else {
        console.log(`key up not shift:`);
        console.log(event);
        turbo = false;
        }
    });
}