const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/courtcoleman/Desktop/portfolio_website/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/courtcoleman/Desktop/portfolio_website/src/pages/index.js")))
}

