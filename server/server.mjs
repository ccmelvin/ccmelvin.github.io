import express from "express";
import cors from "cors";
//const fs = require('fs').promises;
import fetch from "node-fetch";
import { parse } from "node-html-parser";
import dotenv from "dotenv";

const app = express();
const port = 3001;

app.use(cors());
dotenv.config();

const channelID = process.env.YOUTUBE_CHANNEL_ID;
const apiKey = process.env.YOUTUBE_API_KEY;

//const fetch = import('node-fetch')).default;

async function checkStreamingStatus(channelID) {
  const response = await fetch(`https://youtube.com/channel/${channelID}/live`);
  const text = await response.text();
  const html = parse(text);
  const canonicalURLTag = html.querySelector("link[rel=canonical]");

  if (!canonicalURLTag) {
    console.log("No canonical URL tag found.");
    return false;
  }

  const canonicalURL = canonicalURLTag.getAttribute("href");
  const isStreaming = canonicalURL.includes("/watch?v=");
  console.log("Stream is live");
  return isStreaming;
}
checkStreamingStatus(channelID);
app.get("/api/checkLiveStatus", async (req, res) => {
  const channelId = channelID;
  const channelUrl = `https://www.youtube.com/channel/${channelId}/live`;

  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(channelUrl);
    const html = parse(await response.text());
    const canonicalURLTag = html.querySelector("link[rel=canonical]");
    const canonicalURL = canonicalURLTag.getAttribute("href");
    const isStreaming = canonicalURL.includes("/watch?v=");

    console.log("Live Status Check:", isLive);
    res.json({ isLive });
  } catch (error) {
    console.error("Error fetching live status:", error.message);
    res
      .status(500)
      .json({ error: "Failed to fetch live status", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
