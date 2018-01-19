# pup-face
A simple facebook example with Puppeteer:
https://github.com/GoogleChrome/puppeteer

It will open a browser and visit https://www.google.com

You can set ``headless: true`` if you don't want to launch a browser

# install
* Node.js v 8.x & npm

```
git clone https://github.com/zoutepopcorn/pup-local
```

```
cd pup-face
npm install puppeteer
```

# what will it do?
It will save the localStorage from Google.com to local.json

# why?
you could export your localStorage after a login, and reload them at next visit.

# run
```
node index
```
