// var rect = {
//     perimeter : (x,y) => (2*(x+y)),
//     area : (x, y) => (x*y)
// };
var rect = require('./rectangle').default;
function solveRect(l,b)
{
    console.log('Solving of rectangle with l: ' +l + ' and b: ' + b);

    rect(l,b , (err, rectangle) =>
        {
            if(err){
                console.log('Error :' +err.message);
            }
            else{
                console.log('The area of rectangle for the dimensions l :' +l+ 'and b :' +b + 'is ' +rectangle.area());
                console.log('The perimeter of the rectangle for the dimesnsion l :' +l+ ' and b :' +b+ 'is ' + rectangle.permeter())
            }
        })
    // if (l <= 0 || b <=0)
    // {
    //     console.log('rectangle dimensions should be greater than 0');
    // }
    // else{
    //     console.log('The area of the rectangle is ' + rect.area(l,b));
    //     console.log('The Perimeter of the rectangle is ' + rect.perimeter(l,b));
    // }
}

solveRect(2,4);
solveRect(0,7);
solveRect(5,9);
solveRect(-1,5);