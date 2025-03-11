let theThing = null;
function replaceThing() {
  let originalThing = theThing;
  // There is no function declaration here, so originalThing is not being enclosure.
  fix(originalThing);
  theThing = {
    longStr: createBigString(),
    someMethod: function () {
      console.log(someMessage);
    },
  };
}
setInterval(replaceThing, 1000);

function fix(originalThing) {
  if (originalThing) console.log("hi");
}

function createBigString(n = 100000) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += btoa(Math.random().toString());
  }
  return str;
}
