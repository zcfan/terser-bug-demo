var theThing = null,
  replaceThing = function () {
    fix(theThing)(),
      (theThing = {
        longStr: createBigString(),
        someMethod: function () {
          console.log(someMessage);
        },
      });
  };
function fix(e) {
  return function () {
    e && console.log("hi");
  };
}
function createBigString(e = 1e5) {
  let n = "";
  for (let t = 0; t < e; t++) n += btoa(Math.random().toString());
  return n;
}
setInterval(replaceThing, 1e3);
