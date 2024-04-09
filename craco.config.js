module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    "crypto": require.resolve("crypto-browserify"),
                    "querystring": require.resolve("querystring-es3")
                }
            }
        }
    }
};
