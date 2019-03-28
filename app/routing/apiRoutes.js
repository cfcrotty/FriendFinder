const tableData = require("../data/friends");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(tableData);
    });
    app.post("/api/friends", (req, res) => {
        tableData.push(req.body);
        res.json(true);
    });
}