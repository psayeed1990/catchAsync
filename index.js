const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

//create catchAsyncFunction
function catchAsyncFunction(asyncFunction) {
    return (req, res, next) => {
        asyncFunction(req, res, next).catch(next);
    };
}

//define your route here
const homeController = catchAsyncFunction(async (req, res, next) => {
    //const data = await
    //res.json({ msg: "no err" });

    throw new Error("Error happened");
    //this code will automatically go to error catch middleware
    //no need next() because it passes to the next middleware defined after the route
});

//your route middleware here
app.get("/", homeController);

//catch error here
app.use((err, req, res, next) => {
    // console.log(err.stack);
    res.status(400).json({
        message: err.message,
    });
});

//start server
app.listen(5000, () => {
    console.log("Server started @5000");
});
