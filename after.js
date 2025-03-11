let theThing = null;
function createBigString(n = 1e5) {
  let str = "";
  for (let i = 0; i < n; i++) str += btoa(Math.random().toString());
  return str;
}
setInterval(function () {
  let originalThing = theThing;
  !(function () {
    originalThing && console.log("hi");
  })(),
    (function () {
      theThing = { longStr: createBigString(), someMethod: function () {} };
    })();
}, 1e3);
