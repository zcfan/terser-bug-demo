let theThing = null;
function replaceThing() {
  fix(theThing),
    (theThing = {
      longStr: createBigString(),
      someMethod: function () {
        console.log(someMessage);
      },
    });
}
setInterval(replaceThing, 1e3);
function fix(n) {
  n && console.log("hi");
}
function createBigString(n = 1e5) {
  let t = "";
  for (let o = 0; o < n; o++) t += btoa(Math.random().toString());
  return t;
}
