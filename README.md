# ⛰ Basecamp Enhancer

A Google Chrome extension to super power your Basecamp 3 experience

## 🖼 Screenshots

![Promo](images/promo.png)

## 🧾 Functionality
- [x] Adds a bordered bar to the top of your screen themed to your Basecamp selection
- [x] Swaps out the generic Basecamp logo with the company name
- [x] Make the toolbar sticky as the user scrolls the page

## 📦 Installing

### ✅ Stable from Chrome Web Store
[The Chrome Web Store](https://chrome.google.com/webstore/detail/basecamp-enhancer/hllgadpbecmjmfbjpclnjhlppanhalmk) contains the latest stable version of the extension.

### 🐞 Beta from GitHub
You can optionally run the beta by directly installing the extension within Chrome. To install:

1. Download [the zip of the project](https://github.com/aaronbushnell/basecamp-enhancer/archive/master.zip)
2. Unzip the project (but do not delete the folder after finishing the install; Chrome continues to read from this location)
3. Navigate your browser to the [Extensions](chrome://extensions/) panel `chrome://extensions/`
4. Turn on "Developer mode"
5. Drag the unzipped folder to the window and allow Chrome to finish the installation

## 🗓 Changelog

- **1.3.1**: Fix selectors to ensure todo list details are pulled in. Address sticky toolbar to prevent it from disallowing click-thrus to todo details
- **1.3.0**: Fix color schemes for logo and conditionally show logo for better tablet/mobile experiences
- **1.2.1**: Prevent a variety of events from re-firing on navigation change
- **1.2.0**: Run events on Turbolink navigation changes; Add list details to todo items; Fix client visibility bubble placement
- **1.1.0**: Make toolbar sticky as the user scrolls the page
- **1.0.1**: Small bug fixes to correct when the extension fires on the page
- **1.0.0**: Initial release
