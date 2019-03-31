const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));
// app.use(express.static(__dirname + '/'));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});