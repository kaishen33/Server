const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))// brings in the js and css



require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

