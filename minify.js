const fs = require("fs");
const { minify } = require("terser");

minify(fs.readFileSync("fix.js", "utf8")).then(({ code }) => {
    
fs.writeFileSync(
    "output.js", 
    code, 
    "utf8"
);
})
