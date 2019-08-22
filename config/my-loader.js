const emojiRegex = require('emoji-regex');
const emojiText = require('emoji-text');
const fs = require('fs');

const regex = emojiRegex();
let match;

/* eslint-disable */
/* 🤔 🤯 HOW THE HELL IS CANVAS SO DARN FAST? */
/* 🔮 memoize this/cache these results. Which is the term I am looking for? I think memoize, but caching makes some sense also. Caching isn't straight wrong. */
let emoji = [];
// while ((match = regex.exec(thread.name))) {
//   emoji.push(match[0]);
// }

const upper = (lower) => lower.replace(/^\w/, c => c.toUpperCase());


module.exports = function(content) {

  while ((match = regex.exec(content))) {
    console.log(`match`, match);
    content = content.replace(match[0], upper(emojiText.convert(match[0], { delimiter: '' })));
  }

  console.log(`content`, content);

  return content;
};
