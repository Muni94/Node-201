module.exports = (x,y , callback) =>
{
    if( x <=0 || y<=0)
    {
        setTimeout(() => callback(new Error('The rectangle area and perimeter should be greater than zero l :' + l + 'and b : ' +b) , null),), 2000;
    }
    else{
        setTimeout(() => 
        callback(null, {
            perimeter: (x,y) => (2*(x+y)),
            area:  (x,y) => (x*y)
        }) , timeout);
    }
}



exports.area = (x,y) => (x*y);
exports.perimeter = (x,y) => (2*(x+y))