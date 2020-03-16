const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    
    // Development build
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            GRAPHQL_URL: "http://localhost:3000/api/"
            /* development only config options here */
        }
    }

    // Production Build
    return {
        /* config options for all phases except development here */
        GRAPHQL_URL: "http://utap.us/api/"
    }
}