const tableData = require("../data/friends");

/**
 * Function to get the match between two objects or peoples answer
 * @param {object} req request object
 */
function getMatch(req) {
    var averageArr = [];
    var match = [];
    tableData.filter((element, i) => {
        var total = 0;
        const score = element.scores.forEach((item, idx) => {
            let diff = parseInt(item) - parseInt(req.scores[idx]);
            diff = diff < 0 ? diff * -1 : diff;
            total += diff;
            return item;
        });
        var average = total / 10;
        averageArr[i] = {
            idx: i,
            average: average
        }
        if (match.length > 0 && average < match[0].average) {
            match[0].idx = i;
            match[0].average = average;
        } else if (match.length <= 0) {
            match[0] = {
                idx: i,
                average: average
            }
        }
    });   
    return tableData[match[0].idx];
}

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(tableData);
    });
    app.post("/api/friends", (req, res) => {
        let result = getMatch(req.body);
        tableData.push(req.body);
        res.json(result);
    });
}