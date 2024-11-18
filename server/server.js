const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");
const NodeCache = require("node-cache");

const app = express();
const port = 3001;
const myCache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

app.use(cors());

app.get("/api/youtube-videos", async (req, res) => {
  // Check cache first
  const cachedVideos = myCache.get("videos");
  if (cachedVideos) {
    return res.json({ items: cachedVideos });
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    await page.goto('https://www.youtube.com/@FlyBySpotter/videos', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Scroll to load more videos
    await autoScroll(page);

    const videos = await page.evaluate(() => {
      const videoElements = document.querySelectorAll("ytd-grid-video-renderer");
      return Array.from(videoElements).map(video => {
        const titleElement = video.querySelector("#video-title");
        const thumbnailElement = video.querySelector("img");
        const href = titleElement.href;
        const videoId = href.split('v=')[1];
        
        return {
          id: videoId,
          title: titleElement.textContent.trim(),
          url: href,
          thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
        };
      });
    });

    // Cache the results
    myCache.set("videos", videos);
    res.json({ items: videos });
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Failed to fetch videos" });
  } finally {
    await browser.close();
  }
});

// Helper function to scroll and load all videos
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if(totalHeight >= scrollHeight){
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});