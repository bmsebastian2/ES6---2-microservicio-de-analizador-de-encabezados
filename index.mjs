import express from "express";
import cors from "cors";
import path from "path";
//require('dotenv').config();
const app = express();
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
  const ipAddress = req.header("x-forwarded-for") || req.socket.remoteAddress;
  console.log(ipAddress);
  res.json({
    ipaddress: ipAddress,
    language: "es-ES,es;q=0.9",
    software:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
  });
});

let listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
