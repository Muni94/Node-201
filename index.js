// var rect = {
//     perimeter : (x,y) => (2*(x+y)),
//     area : (x, y) => (x*y)
// };
var rect = require('./rectangle');
function solveRect(l,b)
{
    console.log('Solving of rectangle with l: ' +l + ' and b: ' + b);
    if (l <= 0 || b <=0)
    {
        console.log('rectangle dimensions should be greater than 0');
    }
    else{
        console.log('The area of the rectangle is ' + rect.area(l,b));
        console.log('The Perimeter of the rectangle is ' + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,7);
solveRect(5,9);
solveRect(-1,5);