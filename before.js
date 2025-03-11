let theThing = null;

function replaceThing() {
  let originalThing = theThing;  
  !(function foo() {
    if (originalThing) console.log('hi')
  })();
  fix()
}

setInterval(replaceThing, 1000);

function createBigString(n = 100000) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += btoa(Math.random().toString());
  }
  return str;
}

function fix() {
  theThing = {
    longStr: createBigString(),
    someMethod: function () {},
  };
}