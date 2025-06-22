// Global variables and settings

let found = [];
let rateLimitInfo = {
    remaining: null,
    limit: null,
    resetTime: null
};

// Factory function to create Repository objects
const Repository = (name, isFork) => ({
    name,
    isFork,
});

// Function to update HTTP headers
const { HEADER } = require('./constants');

const updateHeader = (updateObj) => {
    Object.assign(HEADER, updateObj);
};

module.exports = {
    found,
    rateLimitInfo,
    Repository,
    updateHeader,
    // Getter/Setter functions
    getFound: () => found,
    setFound: (newFound) => { found = newFound; },
    getRateLimitInfo: () => rateLimitInfo,
    setRateLimitInfo: (newInfo) => { rateLimitInfo = newInfo; }
};