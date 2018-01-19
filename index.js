const puppeteer = require('puppeteer');
const local = require("./pup-local");

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.nu.nl', {
    waitUntil: 'networkidle2'
  });
  console.log("page loaded");

  // SAVE localStorage
  // setTimeout(function() {
  await local.saveLocalStorage(page, `${__dirname}/local.json`);
  // }, 500);

  // LOAD localStorage
  // await local.restoreLocalStorage(page, `${__dirname}/local.json`);
})();
