const createHandler = require("github-webhook-handler");
const dotenv = require("dotenv");
const { exec } = require("child_process");
const http = require("http");
dotenv.config();

var handler = createHandler({
	path: "/webhook",
	secret: process.env.GIT_SECRET, // Use the .env file
});

http.createServer((req, res) => {
	handler(req, res, () => res.end("Not found"));
}).listen(7777, () => console.log("Starting webhook handler..."));

handler.on("error", console.error);

handler.on("push", () => {
	console.log("Recieved a push event!");

	exec(`bash ./deploy.sh >> ./local`);
});

// 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
