// JavaScript function that wraps everything
$(document).ready(function() {

  // Array for word colors
  var colorsOfText = [];

  // Target word
  var targetColor;

  // Target word color
  var targetColorOfText;

  // User"s selection
  var userAnswer;

  // Array for words
  var colors = [
    "brown",
    "blue",
    "magenta",
    "teal",
    "coral",
    "black",
    "red",
    "yellow",
    "grey"
  ];

  // This function sets a random color "word" and a random set of colors "visuals"
  function randomColor() {

    // Set random word
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    $("#rand-target-color").text(targetColor)
     
   
   // targetColorOfText =  colors[Math.floor(Math.random() * colors.length)]
   $("#rand-target-color").css("color",targetColor)
  
    // Set random word color
    //var random = Math.floor(Math.random() * colorsOfText.length);
    //var randomWordColor = colorsOfText[random];

  }

  randomColor()

 

  // This function creates the actual "game" logic.
  function createColorPicker() {
    console.log(colors)

    //Fisher- yates shuffle function to shuffle an array 
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];}}

    // Shuffle color array
     shuffle(colors);
     
    console.log(colors)
    // Push to text color array
    for(i=0; i<colors.length; i++){
      colorsOfText.push(colors[i])
    }

    // Shuffle text color array
     shuffle(colorsOfText)
     console.log(colorsOfText)
    
    
    


    // Loop through all colors in the array
    for (i=0; i<colorsOfText.length; i ++){

    // Create element to hold word
    var wordElement = $("<li>")
   
    // Output a word
    wordElement.text(colorsOfText[i])
    $("#color-picker").append(wordElement)
    
    // Make word a random color
    wordElement.css("color",colors[Math.floor(Math.random() * colors.length)])

  }}



  // Clear the divs and arrays upon each round.
  function clear() {
    $("#rand-target-color").empty()

    $("#color-picker").empty()
    colorsOfText= []
  }

  // Function for resetting colors and setting new colors.
  function reset() {
    clear()
    randomColor()
    createColorPicker()
  }



  // Get id of element clicked by user
  $("#color-picker").on("click",(function(event) {
    userAnswer = event.target.textContent;
    if(userAnswer === targetColor){
      alert("you won")
      reset()
    }else{
      alert("you are wrong")
      reset()
    }
    console.log(event.target)

  }));

  // Run game
  reset();
});
