window.onload = goApp;

async function goApp(){
console.log("hello fetch")
    try{
        let response = await fetch("./files/tests.json"); //response
        let parsedResultJS = await response.json();
        console.log(parsedResultJS)
        displayResults(parsedResultJS);
    } 
    // We could have also/instead parsed the results as text:
    //     let textResult = await response.text();
    //     console.log(textResult)
    // But... if you look in the console.. it is one big string which is annoying because it is SUPER CUMBERSOME to extract the meaningful data...
    // There are frameworks that make the dynamic generation of HTML much easier and fluid - (vue.js, react.js ...) but that is beyond the scope of this particular class..
    catch(err){

        console.log(err)
    }

    function displayResults(parsedResultJS){
        for (let i=0; i< parsedResultJS.length; i++){
            console.log(parsedResultJS)
            
            //the object
            let donutObj = parsedResultJS[i];
            //container
            let containerDiv = document.createElement("div");
            containerDiv.classList.add("donutItem");
            document.querySelector("#output").appendChild(containerDiv);
        
            let title = document.createElement("h3");
            title.textContent = donutObj.name;
            containerDiv.appendChild(title)

            //access the image
            let donutImage = document.createElement("img");
            donutImage.src = donutObj.image;
            containerDiv.appendChild(donutImage)
        }

        
    }
}