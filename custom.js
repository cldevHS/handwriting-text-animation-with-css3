var fontSize = 64;
if(window.screen.width < 700) 
  fontSize = 28;
else if(window.screen.width < 1200)
  fontSize= 48;
var vara = new Vara(
  "#container",
  "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Offensive marriage",
      color: "#BE0081",
      id: "no_erase",
      delay: 500
    },
    {
      text: "hunting",
      color: "#BE0081",
      duration: 1000
    },
    {
      text: "ATTRACTIVE STYLE",
      color: "#fff",
      id: "right"
    }
  ],
  {
    strokeWidth: 2,
    color: "#fff",
    fontSize: fontSize,
    textAlign: "left" 
                                                                                                                                                           
  }
);
vara.ready(function() {
  var erase = true;
  vara.animationEnd(function(i, o) {
    if (i == "no_erase") erase = false;
    if (erase) {
      o.container.style.transition = "opacity 1s 1s";
      o.container.style.opacity = 0;
    }
  });
});