const express = require("express");
const cors = require("cors");
const { parse } = require("node-html-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());

const channelID = process.env.YOUTUBE_CHANNEL_ID;
const apiKey = process.env.YOUTUBE_API_KEY;

async function checkStreamingStatus(channelID) {
  const fetch = (await import("node-fetch")).default;
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

    console.log("Live Status Check:", isStreaming);
    res.json({ isStreaming });
  } catch (error) {
    console.error("Error fetching live status:", error.message);
    res
      .status(500)
      .json({ error: "Failed to fetch live status", details: error.message });
  }
});

// Simple API endpoint to return paginated mock data
app.get('/api/data', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  const allData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    text: `Item ${i + 1}`,
  }));

  const start = (page - 1) * limit;
  const paginatedData = allData.slice(start, start + limit);
  const hasMore = start + limit < allData.length;

  res.json({ data: paginatedData, hasMore });
  console.log("API endpoint called");
});



app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
