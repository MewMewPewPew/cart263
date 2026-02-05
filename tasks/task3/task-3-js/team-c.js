setup_C();
/** THEME: SERENITY  */
function setup_C() {
  console.log("in c");
  /**************************************************** */
  //get the buttons
  activateButtons(`#TEAM_C`, "ani_canvC",aniA,aniB,aniC,aniD);

  /**************** ANI A ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN A INSIDE HERE */

  /**************** ANI A ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in mouseclick event listener(s) somewhere to make the sketch interactive
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function  -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  function aniA(parentCanvas) {
    console.log("in ani-A -teamC");
  }
  
  


  /****************ANI B ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN B INSIDE HERE */
  /****************ANI B ************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creatve, visual pattern using text, divs as shapes, images ... 
   * 2: add in mouseover event listener(s) somewhere to make the sketch interactive
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
// google : how to make a grid from an array js ! 
  function aniB(parentCanvas) {
    console.log("in ani-B -teamC");
    let canvasB = document.getElementById("ani_canvC_B");
    canvasB.style.background = "#9ac1de";
    let symbols = ["+","=","*","_","!",".","/","$","~","^",":","3"]
    let boundingBoxParent = canvasB.getBoundingClientRect();
    
    console.log(boundingBoxParent);
    let x = 0;
    let y = 0;
    for(let i = 0; i>symbols.length; i++){
      for (x = 0; x <boundingBoxParent.width; x++){
        for(y = 0 ; y < boundingBoxParent.height; y++){
        let symbolText = document.createElement("p");
        // symbolText.classList.add("TEAM_C_b_cell");
        // symbolText.style.left = `${j}px`;
        // symbolText.style.top = `${i}px`;
        // symbolText.style.width = "10px";
        // symbolText.style.height = "10px";
        symbolText.style.borderStyle = "none";
  
        let random = Math.floor(Math.random() * symbols.length);
        let newSymbol = symbols[random];
        symbolText.textContent = newSymbol[x];
        document.getElementById("ani_canvC_B").appendChild(symbolText);
        }
      }
        
      }
  //  let random = Math.floor(Math.random() * symbols.length);
  //       let newSymbol = symbols[random];
  //       newSymbol[i];

    // //width:375px;
    // // height:375px;
    //  let widthCanvasB = document.getElementById("ani_canvC_B").style.width;
    //  let heightCanvasB = document.getElementById("ani_canvC_B").style.heigth;
    // let symbolText = document.createElement("p");
    //     // symbolText.classList.add("aniCanvas");
    //     symbolText.textContent = newSymbol;
    //     document.getElementById("ani_canvC_B").appendChild(symbolText);
    // for(x = 0; x < 1; x++){
    //   // for(y = 0; y < 1; y++){
    //   //   // let symbolText = document.createElement("p");
    //   //   // symbolText.style.borderStyle = "none";
    //   //   // // symbolText.classList.add("aniCanvas");
    //   //   // // symbolText.background = "#00000002";
    //   //   // let random = Math.floor(Math.random() * symbols.length);
    //   //   // let newSymbol = symbols[random];
    //   //   // symbolText.textContent += newSymbol[y];
    //   //   // document.getElementById("ani_canvC_B").appendChild(symbolText);
        
    //   // }
    //   let symbolText = document.createElement("p");
    //     symbolText.style.borderStyle = "none";
    //     // symbolText.classList.add("aniCanvas");
    //     // symbolText.background = "#00000002";
    //     let random = Math.floor(Math.random() * symbols.length);
    //     let newSymbol = symbols[random];
    //     symbolText.textContent = newSymbol[x];
    //     document.getElementById("ani_canvC_B").appendChild(symbolText);
    // }
   }
  /****************ANI C ************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN C INSIDE HERE */
  /****************ANI C************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:)
   * 1: use the PROVIDED keyup/down callbacks `windowKeyDownRef` and/or `windowKeyUpnRef` to handle keyboard events
   * 2: create an interactive pattern/sketch based on keyboard input. Anything goes.
   * 
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/

  /* TASK: make an interactive pattern .. colors, shapes, sizes, text, images....
   * using  ONLY key down and/or keyup -- any keys::
   */

  function aniC(parentCanvas) {
      console.log("in ani-C -teamC");

    /*** THIS IS THE CALLBACK FOR KEY DOWN (* DO NOT CHANGE THE NAME *..) */
    windowKeyDownRef = function (e) {
      //code for key down in here
      console.log(e);
      console.log("c-down");
    };

    /*** THIS IS THE CALLBACK FOR KEY UP (*DO NOT CHANGE THE NAME..) */
    windowKeyUpRef = function (e) {
      console.log(e);
      console.log("c-up");
    };
    //DO NOT REMOVE
    window.addEventListener("keydown", windowKeyDownRef);
    window.addEventListener("keyup", windowKeyUpRef);
  }

   /****************ANI D************************************ */
  /** PUT ALL YOUR CODE FOR INTERACTIVE PATTERN D INSIDE HERE */
  /****************ANI D************************************ */
  /**************** TASK *******************************************
   * YOU CAN USE ALL NOTES --- and see my examples in team-h.js for inspiration and possibly help:).
   * 1: create a creative, visual pattern using text, divs as shapes, images ...
   * 2: add in animation using requestAnimationFrame somewhere to make the sketch animate :)
   *
   * NOTE::: PLEASE::: if you add any custom css PLEASE use the style.css and prefix any class names with your team label
   * i.e. you want to create a custom div class and you are in "Team_A" then call your class TEAM_A_ANI_A_Div -
   * this is so that your styles are not overriden by other teams.
   * NOTE::: All your code is to be added here inside this function -
   * remember you can define other functions inside....
   * Do not change any code above or the HTML markup.
   * **/
   function aniD(parentCanvas) {
    console.log("in ani-D -teamC");
    }
}
   