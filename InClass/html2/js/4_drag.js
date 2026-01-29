window.onload = setup;
function setup() {
  console.log("drag ex");

  let handleDragging = function (event) {
    console.log("on drag")
    //HERE :: the event target refers to the object being dragged... (must "draggable="true"")
    console.log(event.target.id);
    // Clear the drag data cache (for all formats/types)
    event.dataTransfer.clearData(); //one way of tracking information, we could set variables...
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("objDraggedId", event.target.id);
  };

  let handleDraggingStop = function (event) {
    console.log("on stop")
    //HERE :: the event target refers to the object being dragged...
    console.log(event.target.id);
    // HERE - this refers to the window
    console.log(this);
  };
  
  let handleDrop = function(event){
    event.preventDefault();
    console.log("dropped"); //if dragover is not happenning

    //event.target is the DIV we have dropped into ...
    // and so move it there..
    let theObj = event.dataTransfer.getData("objDraggedID");
    event.target.appendChild(document.getElementById(theObj));
  }
  window.addEventListener("dragover",function(){
        window.addEventListener("drop",handleDrop); 
        console.log("over");
        event.preventDefault();
    }); 

  window.addEventListener("dragstart", handleDragging);
  window.addEventListener("dragend", handleDraggingStop);

}