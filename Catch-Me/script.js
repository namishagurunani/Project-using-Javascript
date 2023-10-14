let square = document.querySelector('.game-container');

//-------------events--------------------------//

square .addEventListener("mouseover" , ()=>{
    let BrowserHeight = document.documentElement.clientHeight;
    let BrowserWidth = document.documentElement.clientWidth;
    let squareH = square .offsetHeight;
    let squareW = square .offsetWidth;
   
   left = leftPosition(BrowserWidth - squareW);
   Upper = leftPosition(BrowserHeight - squareH);

   square .style.left = left + "px"
   square .style.top = Upper + "px"
});


function leftPosition(Lp){
    
   let valueLeft = Math.floor(Math.random() * Lp);

    return valueLeft;
}