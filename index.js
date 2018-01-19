const puppeteer = require('puppeteer');
const local = require("./pup-local");

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com', {
    waitUntil: 'networkidle2'
  });
  console.log("page loaded");

  // SAVE localStorage
  await local.saveLocalStorage(page, `${__dirname}/local.json`);
  // LOAD localStorage
  // await local.restoreLocalStorage(page, `${__dirname}/local.json`);
})();
