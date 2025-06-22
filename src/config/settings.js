// alınan global değişkenler ve ayarlar

let found = [];
let rateLimitInfo = {
  github: {
    remaining: null,
    limit: null,
    resetTime: null,
  },
  gitlab: {
    remaining: null,
    limit: null,
    resetTime: null,
  },
};
// Factory function to create Repository objects - orijinal koddan
const Repository = (name, isFork) => ({
  name,
  isFork,
});

// Function to update HTTP headers - orijinal koddan
const { HEADER } = require("./constants");

const updateHeader = (updateObj) => {
  Object.assign(HEADER, updateObj);
};

module.exports = {
  found,
  rateLimitInfo,
  Repository,
  updateHeader, // Getter/Setter functions
  getFound: () => found,
  setFound: (newFound) => {
    found = newFound;
  },
  getRateLimitInfo: (platform = "github") =>
    rateLimitInfo[platform] || rateLimitInfo.github,
  setRateLimitInfo: (newInfo, platform = "github") => {
    if (rateLimitInfo[platform]) {
      rateLimitInfo[platform] = newInfo;
    }
  },
};
