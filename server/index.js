const express = require("express");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();

app.get("/M01AB", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
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
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1H2fNSS_iLxgyos5ksR1OcNjV6q5bZtYf8GH5hvPHB1E";

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: process.env.SHEET_ID,
    range: "Sheet3!E2:F11",
  });
  res.json(getRows.data.values);
});

app.listen(1337, (req, res) => console.log("running on 1337"));
