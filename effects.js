console.log("Hello World");

// if it has the class letter I want to have a transition 1.5s using jquery to make the color of each letter fade blues and purples 
// use the getRandomNumber function to get a random number between 0 and 255 to generate a random color
function getRandomColor() {
  const red = getRandomNumber(50);
  const blue = getRandomNumber(255);
  return `rgb(${red}, ${0}, ${blue})`;
}

$(".letter").each(function(){
    let color = getRandomColor();
    $(this).css({
        "color": color,
        "transition": "all .55s ease-in-out"
    });
});

setInterval(() => {
   $('.letter').each(function(){ 
      let color = getRandomColor();
      $(this).css({
          "color": color,
          "transition": "all .55s ease-in-out"
      });
   }); 
}, 2500);





