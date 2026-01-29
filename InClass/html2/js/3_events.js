window.onload = setup;

function setup() {
    console.log("events!")
    // document.querySelector()
    let selection = document.querySelectorAll(".mouseclick-active-section"); 
    //select #(id) and .(class)
    //if we select a class (multiple), only the first is changed with .querySelector
    //with .querySelectorAll gives us a list
        selection.forEach(element => {

            element.addEventListener("click", function(e){

                if(this.getAttribute("custom-bool") === "inactive"){

                    this.setAttribute("custom-bool", "active");
                    // console.log("is inactive");
                    // console.log(this.id);

                    this.style.opacity = 0.5
                }
                else {
                    this.setAttribute("custom-bool", "inactive");
                    // console.log("is active");
                    // console.log(this.id);

                    this.style.opacity = 1.0
                }       
                
        });
        document.querySelector("#bubbleButton").addEventListener("click", function(){
                console.log("button clicked");
                let bubble = document.createElement("div");
                bubble.classList.add("bubble");
                //bubble.style.left = "20px"; (other way of doing below)
                // //".style.left" is way of affecting position
                bubble.style.left = `${Math.random()*(window.innerWidth-200) }px`; 
                bubble.style.top = `${Math.random()*(window.innerHeight-200) }px`;

                let r = Math.ceil(Math.random()*255); //new Math.ceil
                let g = Math.ceil(Math.random()*255);
                let b = Math.ceil(Math.random()*255);

                bubble.style.background = `rgba(${r},${g},${b})`;
                document.getElementById("top-layer").appendChild(bubble)

        })
            // other wway of doing / changing DOM elements
            
            // introSection.addEventListener("click",function(e){
            //     console.log(this);
            //     console.log(e);

            //     this.style.opacity = 0.5; // same as this.style.setProperty("opacity",".5");
            //     //a:
            //     // this.style.background = 'rgba(214, 110, 239, 0.5)'
    });
}
