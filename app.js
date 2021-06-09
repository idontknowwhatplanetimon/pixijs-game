const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
	const filePath = path.join(__dirname, "index.html");
	res.sendFile(filePath);
});

app.listen(3000, () => {
	console.log("Listening at 3000");
});

