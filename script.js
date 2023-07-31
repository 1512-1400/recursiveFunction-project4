//////////////////  variable  ////////////////

var a = 123;
var b = ``;
while (a) {
  b += (a % 10).toString();
  a = Math.floor(a / 10);
}
console.log(b);

///////////////   recuesive   ///////////////

function fun(a, b = ``) {
  if (!a) return b;
  else return b += fun(Math.floor(a / 10), b = (a%10).toString());
}
console.log(fun(123));
