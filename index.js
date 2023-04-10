const express = require("express");
const { google } = require("googleapis");
require("dotenv").config();
const path = require("path");

const app = express();
const google_app_credentials = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY.split(String.raw`\n`).join("\n"),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
};

app.use(express.static("./client/build"));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.get("/M01AB", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials: google_app_credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet2!E2:F11",
  });
  res.json(getRows.data.values);
});

app.get("/M01AE", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials: google_app_credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet3!E2:F11",
  });
  res.json(getRows.data.values);
});

app.listen(1337, (req, res) => console.log("running on 5000"));
