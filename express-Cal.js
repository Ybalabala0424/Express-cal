var express = require("express");
var app = express();

app.get("/", function (req, res) {
    const str=req.query.str.toString();
    const finalStr=str.replace(' ','+');
    const result=eval(finalStr).toString();
    console.log(finalStr);
    // const result=eval(str).toString();
    // console.log(result);
    res.send(result);
});
app.listen(2580,function () {
    console.log("Server start!")
});
