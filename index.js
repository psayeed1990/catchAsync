const express = require("express");
const app = express();

//create catchAsyncFunction
function catchAsyncFunction(asyncFunction) {
    return (req, res, next) => {
        asyncFunction(req, res, next).catch(next);
    };
}

//define your route here
const homeController = catchAsyncFunction(async (req, res, next) => {
    //const data = await
    throw new Error();
});

//your route middleware here
app.get("/", homeController);

//catch error here
app.use((err, req, res, next) => {
    res.status(400).json({
        message: "Error happened",
    });
});

//start server
app.listen(5000, () => {
    console.log("Server started @5000");
});
