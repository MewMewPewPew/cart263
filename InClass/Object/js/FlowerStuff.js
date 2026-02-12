function createFlower(){
    let flower ={
        x: Math.random()*(window.innerWidth),
        y: Math.random()*120,
        size:30,
        stemLength: 70,
        stemThickness: 5,
        petalThickness: 10,
        flowerStemDiv: document.createElement("div"),
        flowerPetalDiv: document.createElement("div"),
        // Color information
        stemColor: {
            r: 50,
            g: 150,
            b: 50,
        },
        petalColor: {
            r: 230,
            g: 80,
            b: 150,
        },
        centreColor: {
            r: 250,
            g: 60,
            b: 40,
        },
    };
    return flower;
    
}
// render flower as an argument ...
function renderFlower(flower){
        flower.flowerStemDiv.classList.add("flower");
        flower.flowerStemDiv.style.width = flower.stemThickness+"px";
        flower.flowerStemDiv.style.height = flower.stemLength+"px";
        flower.flowerStemDiv.style.background = `rgb(
            ${flower.stemColor.r},
            ${flower.stemColor.g},
            ${flower.stemColor.b}
            )`;
        flower.flowerStemDiv.style.left = (flower.x + 8) +"px"; // for sum reason it was more to the left when i made the flower smaller
        flower.flowerStemDiv.style.top = flower.y-flower.stemLength+"px";
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(flower.flowerStemDiv);
    
        flower.flowerPetalDiv.classList.add("petal");
        flower.flowerPetalDiv.style.width = flower.size+"px";
        flower.flowerPetalDiv.style.height = flower.size+"px";
        flower.flowerPetalDiv.style.borderRadius = flower.size+"px"

        flower.flowerPetalDiv.style.background = `rgb(
            ${flower.centreColor.r},
            ${flower.centreColor.g},
            ${flower.centreColor.b}
            )`;
        flower.flowerPetalDiv.style.left = (flower.x-flower.size/2)+"px";
        flower.flowerPetalDiv.style.top = (flower.y-flower.stemLength-flower.size/2)+"px";
        flower.flowerPetalDiv.style.borderWidth = flower.petalThickness+"px";
        flower.flowerPetalDiv.style.borderColor =  `rgb(
            ${flower.petalColor.r},
            ${flower.petalColor.g},
            ${flower.petalColor.b}
            )`;
        //add to the DOM
        document.getElementsByClassName("grass")[0].appendChild(flower.flowerPetalDiv);
        }