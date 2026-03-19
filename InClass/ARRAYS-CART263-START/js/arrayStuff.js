window.onload = function () {
  // FOR BUILDING THE EXAMPLES :)

  //Destructuring (Arrays)
  let testArrayD = ["ABS","giraffe","Giraffe","apple","orange","tortoise", "banana"]
	const [first, second, ...rest] = testArrayD 
	console.log(first); // 1
	console.log(second); // 2
	console.log(rest); // [3, 4, 5]
  //Sort()
	let testArray = [2,89,78,89,3,45]
	console.log (testArray) 
	console.log (testArray.sort()) // IS NOW CHANGED - croissant number
	//String
	let stringSortArray = ["ABS","giraffe","Giraffe","apple","orange","tortoise","peanut", "penguin", "hare"]
	console.log(stringSortArray);
	console.log (stringSortArray.sort(compareNoCase)) // IS NOW CHANGED - put capital words first, then alphabetical
	//can be done with array of object, gotta define how to sort it ! (more advanced)
	
	function compareNoCase(a,b) { // by putting the argument above, we defined how to sort the array
		const capital_A = a.toUpperCase();
		const capital_B = b.toUpperCase();

		if (capital_A > capital_B) return -1;
		if (capital_A < capital_B) return 1;
		return 0
	}
  const allRows = document.querySelectorAll(".flex-row");
  let arrayOfShapes_One = [];
  	//INIT ONE:
	for(let i =0; i<10;i++){
		let color = { r:(255 - i * 10), g:50,b:100};
		arrayOfShapes_One.push(new CustomShape((i+1)*55,50, "shape", "rectangle",color)
	);}
	add_elements_to_dom(arrayOfShapes_One, allRows[0]); //utils.js
	
	document.querySelector("#mapButtonA").addEventListener("click", function() {
      mapArraysShape(arrayOfShapes_One, allRows[0])
    });
	 document.querySelector("#mapButtonB").addEventListener("click",  function() {
      mapArraysColor(arrayOfShapes_One, allRows[0])
    });  
	//INIT TWO:
	let cshape = "";
	let arrayOfShapes_Two =[]
	for (let i = 0; i<16; i++) {
		let color = { r: 255 - i * 10, g: 50, b:100};
		if(i % 2 === 0) cshape ="circle" //only multiple of "2" or x are gonna be the input
		else cshape = "rectangle"
		arrayOfShapes_Two.push(
			new CustomShape((i + 1) * 55, 50, "shape", cshape, color),
		);	
		add_elements_to_dom(arrayOfShapes_Two, allRows[1]); 
	}
	
	document //DOESN'T WORK ?
      .querySelector("#filterButtonA")
      .addEventListener("click", function(){filterArraysXPos(arrayOfShapes_Two, allRows[1])});
	
	document
      .querySelector("#filterButtonB")
      .addEventListener("click", function(){filterArraysByShape(arrayOfShapes_Two, allRows[1])});

	//INIT THREE
	let arrayOfShapes_Three = [];
  		for (let i = 0; i < 10; i++) {
    		let color = { r: 255 -i*9, g: 255-i*20, b: 255- i*7};

    		arrayOfShapes_Three.push(
     		new CustomShape((i + 1) * 55, 50, "shape", "circle", color),
    		);
  		}
     add_elements_to_dom(arrayOfShapes_Three, allRows[2]);
     allRows[2].innerHTML+=`` //huh teacher dont know why thtats there

	document
      .querySelector("#forEachButtonA")
      .addEventListener("click", forEachCallBackA);

	  
	  function forEachCallBackA() { //since it doesnt take the array as parameter, we gotta put this function, it has to be in the same scope
		  document.querySelector("#pSpan").innerHTML = "";
		  arrayOfShapes_Three.forEach(addPTags);
  
		  function addPTags(el) {
		  document.querySelector("#pSpan").innerHTML += ` x:${el.x} `;
		  }
	  }
  	//INIT FOUR
  
}


function filterArraysXPos(arrayOfShapes, row){
    // FILTER ONE (filter by x)
    let filteredArray= arrayOfShapes.filter(greater_posX);
    
    function greater_posX(el){
        return(
            (el.x > 200 && el.x <400) // this is where we define the filter
        )
    }
    // add_elements_to_dom(filteredArray, row);
    // console.log(filteredArray)
	//then we can map - to change the y :)
    let arrayOfShapesYChange = filteredArray.map(
        function(el){
            return (new CustomShape(el.x, el.y+100, el.shapeClass,el.customShapeClass,el.color))

    });
    console.log(filteredArray)
    //update
    add_elements_to_dom(arrayOfShapesYChange, row);
}

	function filterArraysByShape(arrayOfShapes, row){
	// FILTER ONE
		let filterArraysShape= arrayOfShapes.filter(shape_filter);
		
		function shape_filter(el){
			return(
				(el.customShapeClass ==='circle')
			)
		}

		//then we can map - to change the y :)
		let arrayOfShapesNew = filterArraysShape.map(
			function(el){
				return (new CustomShape(el.x, el.y+200, el.shapeClass,el.customShapeClass,el.color))

		});
		add_elements_to_dom(arrayOfShapesNew, row);

	}

	function mapArraysColor(arrayOfShapes,row) {
    // MAP TWO
    	let arrayOfShapesNew = arrayOfShapes.map(changeColor);
    	add_elements_to_dom(arrayOfShapesNew, row);
  

    function changeColor(el){
        //take red color
        let newColor = {r:el.color.r, g:125, b:255}
        return (
        /* need to make a copy */
        new CustomShape(el.x, el.y+200, el.shapeClass,el.customShapeClass,newColor)
        )}
    }

function mapArraysShape(arrayOfShapes,row) {
    // MAP ONE
    let arrayOfShapesNew = arrayOfShapes.map(changeShape); //mapping the old array to the new one
    add_elements_to_dom(arrayOfShapesNew, row); 
    
    function changeShape(el){
        return (
        /* need to make a copy */
        new CustomShape(el.x, el.y+100, el.shapeClass,"circle",el.color)
        )}
    }

