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
  const lenguaje = req.header("Accept-Language");
  const so = req.header("User-Agent");
  console.log(ipAddress);
  res.json({
    ipaddress: ipAddress,
    language: lenguaje,
    software: so,
  });
});

let listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
