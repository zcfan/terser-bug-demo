var theThing = null;
var replaceThing = function () {
  var originalThing = theThing;
  function unused() {
    if (originalThing) console.log("hi");
  }
  unused();
  theThing = {
    longStr: createBigString(),
    someMethod: function () {
      console.log(someMessage);
    },
  };
};
setInterval(replaceThing, 1000);

function createBigString(n = 100000) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += btoa(Math.random().toString());
  }
  return str;
}
