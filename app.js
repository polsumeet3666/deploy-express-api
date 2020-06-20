let express = require("express");

let app = express();

app.get("/", (req, res) => {
	res.json({ status: "ok" });
});

app.listen(9090, () => {
	console.log("api is up on 9090");
});
