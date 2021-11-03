const express = require("express");
const server = express();
const fs = require("fs");
const generatePDF = require("html-pdf");

// Add GET route
server.get("/pdf", async ({ query: { name } }, res) => {
	let template = await fs.readFileSync("./template.html", "utf8");

	template = template.replace("{{name}}", name);

	const binaryData = await new Promise((resolve, reject) => {
		generatePDF.create(template).toBuffer((error, generatedBinaryData) => {
			if (error) reject(error);
			resolve(generatedBinaryData);
		});
	}).catch(console.error);

	res.end(binaryData, "binary");
});

server.listen(8000, () => console.log("Started server!"));
