function foo(x) {
  var y = 10;
  return x * y;
}

function callFoo(a) {
  var b = 5;

  return foo(a * b);
}

console.log(callFoo(6));
